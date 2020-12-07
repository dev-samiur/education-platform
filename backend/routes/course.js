const express= require('express')
const router= express.Router()
const CourseController= require('../controllers/CourseController')
const upload= require('../middlewares/FileUploadMiddleware')

router.get('/', CourseController.index)
router.post('/', upload, CourseController.store)
router.patch('/:id', upload, CourseController.update)
router.delete('/:id', CourseController.destroy)

module.exports= router