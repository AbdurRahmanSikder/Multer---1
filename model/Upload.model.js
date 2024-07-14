import mongoose from "mongoose";

const uploadSchema = new mongoose.Schema({
    fileName:{
        type: String,
        required: true
    },
    filePath:{
        type: String,
        required: true
    },
    fileSize:{
        type: String,
        required: true
    }
})

const Upload = mongoose.model("Upload", uploadSchema);

export default Upload;