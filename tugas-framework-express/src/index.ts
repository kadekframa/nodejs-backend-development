import express, { Request, Response } from "express";
import path from 'path';

const PORT = 4000;

function init() {
  const app = express();

  app.get("/hello", (req: Request, res: Response) => {
    res.status(200).json({
      message: "Success fetch message",
      data: "Hello World!",
    });
  });

  app.get('/user', (req: Request, res: Response) => {
    res.status(200).json({
      "message": "Success fetch user",
      "data": {
        "id": 1,
        "name": "Budi",
        "username": "budidu",
        "email": "budidu@gmail.com"
      }
    });
  });

  app.use(express.static(path.join(__dirname, '../public')));

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

init();
