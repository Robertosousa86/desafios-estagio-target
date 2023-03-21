import fs from 'fs';

export const readFile = (filePath: string): Buffer => {
  const data = fs.readFileSync(filePath);

  return data;
};
