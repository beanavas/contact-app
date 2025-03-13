const express = require("express");
const dotenv = require("dotenv");
const contactRouter = require("./routes/contact.js");
dotenv.config();
const multer = require("multer");
const connectDB = require("./database/database.js");

const app = express();

//active json text
app.use(express.json());

app.get("/", (req, res)=> {
    res.status(200).json("This is the main page of the api")
});

//uploads image into upload folder
const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, "upload")
    },
    filename: (req, file, cb) =>{
    cb(null, "image.png");
    },
});

const upload = multer({storage: storage});

//shows msg if image upload was successful
app.post("/api/upload", upload.single("file"), (req, res)=>{
    res.status(200).json({status: "SUCCESS", msg: "Image has been uploaded"});
});

//routes
app.use("/api/contact", contactRouter);

app.listen(process.env.PORT, ()=> {
    connectDB();
    console.log("Server is running on port"+ process.env.PORT);
});
