const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const multer = require("multer");
const path = require("path");

const server = new express();
server.use(cors());
server.use(bodyparser.json());

//storage config
const fileStorage = multer.diskStorage({
  destination: "Uploads",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

//upload config
const uploadConfig = multer({
  storage: fileStorage,
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
      return cb(new Error("Upload Correct File"));
    }
    cb(undefined, true);
  },
});
server.post(
  "/uploadfile",
  uploadConfig.single("image"),
  (req, res) => {
    res.status(200).json({
      filepath: "/images/".concat(req.file.filename),
      uploaded: true,
    });
  },
  (err, req, res, next) => {
    res.status(400).send({ error: err.message });
  }
);

mongoose
  .connect("mongodb://127.0.0.1:27017/assignmentdb", {
    useNewUrlParser: true,
  })
  .then((result) => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("not connected");
  });

server.get("/", (req, res) => {
  res.send("hhi...");
});

const routes = require("./Routes/Routes");
server.use("/api/", routes);

server.use(express.static("Uploads"));
server.use("/images",express.static("Uploads"));

server.listen(5000, () => {
    console.log("server Started");
  });
  