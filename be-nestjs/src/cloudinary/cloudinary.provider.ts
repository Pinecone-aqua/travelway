import { v2 } from 'cloudinary';

export const CloudinaryProvider = {
  provide: `${process.env.CLOUDINARY}`,
  useFactory: () => {
    return v2.config({
      cloud_name: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}`,
      api_key: `${process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY}`,
      api_secret: `${process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET}`,
    });
  },
};
