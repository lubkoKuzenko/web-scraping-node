import fs, { ObjectEncodingOptions, WriteFileOptions } from 'fs';
import path from 'path';

export const writeFileSyncRecursive = async (filename: string, content: any) => {
  // The file path to save the JSON object to
  const filePath = path.join('build/data', `${filename}.json`);

  // Create the directory if it doesn't exist
  const dirPath = path.dirname(filePath);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  // Save the JSON object to the file
  fs.writeFileSync(filePath, JSON.stringify(content));
};
