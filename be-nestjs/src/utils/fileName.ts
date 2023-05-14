import { extname } from 'path';
import { v4 as uuidv4 } from 'uuid';

export const editFileName = (req, file, callback) => {
  const fileExtName = extname(file.originalname);
  const uniqueId = uuidv4();
  const newFileName = `${uniqueId}${fileExtName}`;
  callback(null, newFileName);
};
