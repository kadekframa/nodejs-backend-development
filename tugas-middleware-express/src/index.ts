import express, { Request, Response } from "express";
import fileUpload from 'express-fileupload';
import cloudinary from "./utils/cloudinary";
import api from './routes/api';

const PORT = 3000;

function init() {
  const app = express();
  // app.get("/", (req: Request, res: Response) => {
  //   res.status(200).json({
  //     message: "OK",
  //     data: null,
  //   });
  // });
  
  app.use('/', fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  }), api);

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

init();
