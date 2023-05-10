import {
  Controller,
  Post,
  HttpStatus,
  Request,
  Response,
} from '@nestjs/common';
import { UploadApiResponse, v2 as Cloudinary } from 'cloudinary';
import multer from 'multer';
import { ConfigService } from '@nestjs/config';
import path from 'path';
import fs from 'fs';

interface RequestWithFile extends Request {
  file: {
    path: string;
    originalname: string;
    mimetype: string;
  };
}

interface UploadResponse {
  message: string;
  url?: string;
}

@Controller('upload')
export class UploadController {
  constructor(
    private readonly configService: ConfigService,
    private cloudinary: Cloudinary,
  ) {
    //cloudinary setting here Yalalt
    this.cloudinary.config({
      cloud_name: this.configService.get<string>('CLOUDINARY_CLOUD_NAME'),
      api_key: this.configService.get<string>('CLOUDINARY_API_KEY'),
      api_secret: this.configService.get<string>('CLOUDINARY_API_SECRET'),
    });
  }

  @Post()
  async upload(@Request() req: RequestWithFile, @Response() res: Response) {
    try {
      const result = await this.handleUpload(req, this.cloudinary);

      res
        .status(HttpStatus.OK)
        .json({ message: 'File upload successfully', url: result.secure_url });
    } catch (error) {
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }

  uploadMiddleware = multer({
    // multer configuration
    storage: multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, 'uploads/');
      },
      filename: function (req, file, cb) {
        cb(null, file.originalname);
      },
    }),

    // validate file type and name size
    fileFilter: function (req, file, cb) {
      const fileTypes = /jpeg|jpg|png/;
      const mimetype = fileTypes.test(file.mimetype);
      const extname = fileTypes.test(
        path.extname(file.originalname).toLowerCase(),
      );

      if (mimetype && extname) {
        return cb(null, true);
      } else {
        cb(
          new Error(`Invalid file type, Only ${fileTypes} files are allowed.`),
        );
      }
    },
    limits: {
      fileSize: 1024 * 1024 * 2,
    },
  }).single('file');

  async handleUpload(
    req: RequestWithFile,
    cloudinary: Cloudinary,
  ): Promise<UploadApiResponse> {
    try {
      await new Promise<void>(
        (
          resolve: (value: unknown) => void,
          reject: (reason?: any) => void,
        ): Promise<void> => {
          this.uploadMiddleware(req, {} as Response, (err) => {
            if (err) reject(err);
            resolve();
          });
        },
      );

      // upload file to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      // Remove file from local storage
      fs.unlinkSync(req.file.path);
      return result;
      // Return the uploaded file URL
      //   res
      //     .status(HttpStatus.OK)
      //     .json({ message: 'File upload successfully', url: result.secure_url });
    } catch (error) {
      console.error(error);
      throw new Error('Failed to upload file.');
    }
  }
}
