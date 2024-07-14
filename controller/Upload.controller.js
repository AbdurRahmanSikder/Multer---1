import Upload from "../model/Upload.model.js";

export const uploadFile = async (req, res) => {
    try {
        const data = new Upload({
            fileName: req.file.filename, // filename instead of fileName
            filePath: req.file.path,
            fileSize: req.file.size
        });
        await data.save(); // Corrected this line
        console.log(req.file);
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
}
