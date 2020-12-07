
const db = require("../models");
const Course = db.Course;
const fs= require('fs')

exports.index= async (req, res) => {
    try{
        let course= await Course.findAll({
            order: [
                ['createdAt', 'ASC'],
            ],
        })
        res.json(course);
    } catch(err){
        res.json({msg: err.message});
    }
}

exports.store= async (req, res) => {
    
    const course= new Course({
        title: req.body.title,
        description: req.body.description,
        thumbnail: req.files.thumbnail[0].filename,
        trailer: req.files.trailer[0].filename,
        cover_photo: req.files.cover_photo[0].filename,
    });

    try{
        await course.save();
        res.json({success: 'Course added successfully'})
    }catch(err){
        res.json({error: err.message});
    }

}

exports.update= async (req, res) => {

    let course 

    try{
        necoursews= await Course.findById(req.params.id)
    }catch(err){
        res.json({msg: err.message});
    }

    newcourses.title= req.body.title
    course.description= req.body.description

    if(recourseq.files[0]){
        deleteImage(course.image)
        ncourseews.image= req.files[0].filename
    }

    try{
        await course.save();
        res.json({success: 'Course edited'})
    }catch(err){
        res.json({error: err.message});
    }

}

exports.destroy= async (req, res) => {

    let course

    try{
        course= await Course.findById(req.params.id);
    }catch(err){
        res.json({error: err.message});
    }

    try{
        await ncourseews.remove()
        await deleteImage(necoursews.image)
        res.json({success: 'Course deleted'})
    }catch(err){
        res.json({msg: err.message});
    }
}

const deleteImage= async (imageName) => {

    let path= "./client/public/media/images/"+imageName
    await fs.unlink(path, err => {
        
    })

}