import Downloader from 'nodejs-file-downloader';

// https://github.com/ibrod83/nodejs-file-downloader

export const imageDownload = async (imageUrl: string) => {
  const downloader = new Downloader({
    url: imageUrl, //If the file name already exists, a new file with the name 200MB1.zip is created.
    directory: './build/downloads', //This folder will be created, if it doesn't exist.
  });

  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { downloadStatus, filePath } = await downloader.download(); //Downloader.download() resolves with some useful properties.

    // console.log("All done");
  } catch (error) {
    //IMPORTANT: Handle a possible error. An error is thrown in case of network errors, or status codes of 400 and above.
    //Note that if the maxAttempts is set to higher than 1, the error is thrown only if all attempts fail.
    console.log('Download failed', error);
  }
};
