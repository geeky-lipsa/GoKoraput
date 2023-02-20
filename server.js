
// var express = require('express');
// var app = express();
// var multer =  require('multer');
// var cors = require('cors');
// app.use(cors());
// var storage = multer.diskStorage({
//     destination:function(req,file,cb){
//         cb(null,'public/images/Testimonials')
//     },
//     filename: function(req,file,cb){
//         cb(null,file.originalname)
//     }
// });
// var upload = multer({storage:storage}).array('file');

// app.post('/upload', function(req,res){
//     upload(req,res,function(err){
//         if(err instanceof multer.MulterError){
//             return res.status(500).json(err)
//         }
//         else if(err){
//             return res.status(500).json(err)
//         }
//         return res.status(200).json("Uploaded Successfully")
//     })
// });

// app.listen(8000,function(){
//     console.log("App running on port 8000");
// });
const express = require('express');
const fileupload = require('express-fileupload')
const fs =  require('fs');
const app = express();
const cors = require('cors');
const { response } = require('express');
app.use(cors());
app.use(fileupload());
app.use(express.json());
app.post('/update',(req,res)=>{
    if(req.body === null){
        return res.status(400).json({msg: "Empty Details"});
    }
    const dirname = `${__dirname}`.split('\\');
dirname.pop();
const updatedir = dirname.join("\\");
console.log(updatedir);
fs.readFile(`${updatedir}/gokoraput_final/src/data/Testimonials.json`, 'utf-8', function(err, data) {
if (err) throw err
console.log(req.body);
var arrayOfObjects = JSON.parse(data);
arrayOfObjects.push(req.body);
// console.log(arrayOfObjects);
fs.writeFileSync(`${updatedir}/gokoraput_final/src/data/Testimonials.json`, JSON.stringify(arrayOfObjects, null, "\t"), 'utf-8', err =>{
    if(err){
        console.error(err);
        return res.status(500).send(err);
    }
    
});
return res.status(200).json({msg: "Testimonial Updated"});
});
});
app.post('/upload',(req, res)=>{
if(req.files === null){
    return res.status(400).json({msg: "No file uploaded"});
}
const file = req.files.file;
const dirname = `${__dirname}`.split('\\');
dirname.pop();
const uploaddir = dirname.join("\\");
console.log(uploaddir);
file.mv(`${uploaddir}/gokoraput_final/public/images/Testimonials/${file.name}`, err =>{
    if(err){
        console.error(err);
        return res.status(500).send(err);
    }
    res.json({filePath: `/images/Testimonials/${file.name}`});
});
});
app.listen(5000,function() {
    console.log('Express server listening on port 5000');
});