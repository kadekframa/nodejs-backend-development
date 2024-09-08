import express from "express";

import { single, multiple } from "../middlewares/upload.middleware";
import fileUpload from "express-fileupload";
import cloudinary from "../utils/cloudinary";

const router = express.Router();


router.post("/upload/single", (req, res) => {
    const {photo}: any = req.files;
    
    if (!photo) {
        res.status(400).json({ status: 400, message: "Photo is required" });
    }

    cloudinary.uploader.upload(
        photo.tempFilePath,
        {
            public_id: String(new Date().getTime())
        },
        (error, result) => {
            if(error) {
                res.status(500).json({status: 500, message: "upload failed", error});
            } else {
                res.json({status: 200, message: "Success", result});
            }
        }
    );
});

router.get("/upload/multiple", multiple, (req, res) => {
    res.status(200).json({
        message: "OK",
        data: null,
    });
});

export default router;
