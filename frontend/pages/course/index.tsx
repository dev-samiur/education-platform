import React, { useState } from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import AppBar from 'components/shared/nav/AppBar'
import SubHeader from 'components/shared/nav/SubHeader'
import Welcome from 'components/course/WelcomeMessage'
import CourseCard from 'components/course/CourseCard'
import ShowLesson from 'components/shared/ShowLesson'

interface lessonType {
    id: number,
    thumbnail:string,
    video:string,
    duration:string,
    title:string,
    description:string
}


const Course: React.FC = () => {

    const [lessons, setLessons] = useState<Array<lessonType>>([
        {
            id: 1,
            thumbnail: 'ai-1.jpeg',
            video: 'https://www.youtube.com/watch?v=gR8QvFmNuLE&list',
            duration: '01:53',
            title: 'What is AI?',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            id: 2,
            thumbnail: 'ai-2.jpeg',
            video: 'https://www.youtube.com/watch?v=WbzNRTTrX0g&list',
            duration: '1:49:30',
            title: 'AI and Society',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            id: 3,
            thumbnail: 'ai-3.jpeg',
            video: 'https://www.youtube.com/watch?v=qK46ET1xk2A&list',
            duration: '1:47:44',
            title: 'AI Concepts, Terminology, and Application Areas',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            id: 4,
            thumbnail: 'ai-4.jpeg',
            video: 'https://www.youtube.com/watch?v=D8RRq3TbtHU&list',
            duration: '1:49:45',
            title: 'AI: Issues, Concerns and Ethical Considerations',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            id: 5,
            thumbnail: 'ai-5.jpeg',
            video: 'https://www.youtube.com/watch?v=J1QD9hLDEDY&list',
            duration: '1:45:12',
            title: 'Neural Networks',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            id: 6,
            thumbnail: 'ai-6.jpeg',
            video: 'https://www.youtube.com/watch?v=qK46ET1xk2A&list',
            duration: '50:20',
            title: 'The Future with AI, and AI in Action',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
    ])

    const [showLessonModal, setShowLessonModal]= useState<boolean>(false)
    const [lessonDetails, setLessonDetails]= useState<lessonType>({id: 0, thumbnail: '', video:'', duration: '', title: '', description: ''})
    

    const showLesson= (lesson:lessonType) => {
        setLessonDetails(lesson)
        handleShowLessonModal(true)
    }

    const handleShowLessonModal= (e:boolean) => {
        setShowLessonModal(e)
    }

    return (
        <>
            <AppBar/>
            <SubHeader/>
            <Welcome />
            <Container maxWidth="md" style={{paddingTop: 20, paddingBottom: 100}}>
                <Box>
                    {
                        lessons ? lessons.map( (lesson, index) => (
                            <Box mt={10}><CourseCard key={index} lesson={lesson} count={++index} showLessonModal={showLesson} /></Box>
                        )) : null
                    }
                </Box>
            </Container>

            <ShowLesson showLessonModal={showLessonModal} lesson={lessonDetails} handleShowLessonModal={handleShowLessonModal} />

        </>
    )
}

export default Course
