import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import Image from 'material-ui-image'
import TextTruncate from 'react-text-truncate'
import CourseForm from 'components/admin/courses/CourseForm'
import CourseCard from 'components/admin/courses/CourseCard'
import SnackBar from 'components/shared/SnackBar'

const useStyles = makeStyles((theme) => ({
    
}))

interface CourseType{
    _id?: number,
    title?: string,
    description?: string
    thumbnail?: string
    trailer?: string,
    cover_photo: string,
}

const Courses: React.FC= () => {

    const [snackBarVal, setSnackBarVal]= useState<any>(null)

    const [showCourseForm, setShowCourseForm]= useState<boolean>(false)

    const [courses, setCourses]= useState<CourseType | any>(null) //all courses from db

    const [course, setCourse]= useState<CourseType | any>(null)

    const handleShowCourseModal= (e:boolean) => {
        setShowCourseForm(e)
    }

    const handleSnackBar= (e:any) => {
        setSnackBarVal(null)
        setSnackBarVal(e)
    }

    const retrieveCourses= () => {
        axios({
            method: 'GET',
            url: 'http://localhost:5000/api/course',
        })
        .then( response => {
            setCourses(response.data)
        })
        .catch (err => {
            setSnackBarVal('Error')
        })
    }

    useEffect( () => {
        retrieveCourses()
    }, [snackBarVal])

    const handleDelete= (id:any) => {

    }

    const handleEdit= (course:CourseType) => {
        // setEditNews(news)
        // setShowNewsForm(true)
    }

    return (
        <Container maxWidth="xl">

            <Box display="flex" justifyContent="flex-end" mt={2}>
                <Button
                    variant="outlined"
                    color="primary"
                    startIcon={<AddCircleIcon />}
                    onClick={ () => handleShowCourseModal(true)}
                >
                    Add Course
                </Button>
            </Box>

            <Box mt={5}>
                <Typography variant="h4" color="primary">Courses</Typography>
            </Box>

            <Box mt={10}>
                {
                    courses ? courses.map( (course:CourseType) => (
                        <Box mt={10} style={{cursor: 'pointer'}}><CourseCard course={course} handleDelete={handleDelete} handleEdit={handleEdit} /></Box>
                    )) : null
                }
            </Box>

            <CourseForm show={showCourseForm} handleShowCourseModal={handleShowCourseModal} course={course} handleSnackBar={handleSnackBar} />

            {
                snackBarVal !== null ? <SnackBar state="true" msg={snackBarVal} /> : null
            }

        </Container>
    )
}

export default Courses
