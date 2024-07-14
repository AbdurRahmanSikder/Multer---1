import mongoose from "mongoose";
import { uploadFile } from "../controller/Upload.controller.js";
import express from "express"
import UploadMiddleware from "../middleware/Upload.middleware.js";

const route = express.Router();

route.post("/upload",UploadMiddleware.single("myfile"), uploadFile);

export default route;