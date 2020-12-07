import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Image from 'material-ui-image'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import TextTruncate from 'react-text-truncate'

const useStyles = makeStyles((theme) => ({
    videoOverlay: {
        cursor: 'pointer',
        opacity: 0,
        transition: 'all 1s',
        '&:hover':{
            opacity: 1,
        }
    }

}))

interface lessonType {
    id:number,
    thumbnail:string,
    video:string,
    duration:string,
    title:string,
    description:string
}

interface CourseCardProps {
    lesson: lessonType,
    count: number,
    showLessonModal(e:lessonType):void
}

const CourseCard: React.FC<CourseCardProps>= ({lesson, count, showLessonModal})=>  {

    const classes = useStyles()
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box display="flex" flexDirection={matches ? 'column' : 'row' }>
            <Box position="relative" flex={matches ? "" : "0 0 250px"} display="flex" alignItems="center" width="250px" height="200px" borderRadius={5} style={{overflow: 'hidden'}}>
                <Image
                    src={`/media/images/courses/ai/${lesson.thumbnail}`}
                    style={{objectFit: 'contain', width:'100%', height: '100%'}}
                    color="#27293D"
                />
                <Box position="absolute" borderRadius={10} style={{background: '#191919', right: 10, bottom: 10, padding: 5}}>
                    <Typography variant="body2" style={{color: '#F6F6F6', fontWeight: 600}}>{lesson.duration}</Typography>
                </Box>
                <Box position="absolute" width="250px" height="200px" className={classes.videoOverlay} onClick={()=> showLessonModal(lesson)}>
                    <Box zIndex={9} width="250px" height="200px" position="absolute" display="flex" justifyContent="center" alignItems="center" style={{background: '#191919', opacity: .6}}></Box>
                    <Box zIndex={9} width="250px" height="200px" position="absolute" display="flex" justifyContent="center" alignItems="center"><PlayCircleOutlineIcon color="primary" style={{width: 50, height: 50}} /></Box>
                </Box>
            </Box>
            <Box ml={matches ? 0 : 3} mt={matches ? 3 : 0} height={matches ? 'auto' : 200} maxWidth="600" display="flex" flexDirection="column" justifyContent={matches ? "flex-start" : "center"}>
                <Box>
                    <Typography variant="h6" style={{fontWeight: 600, color: '#F6F6F6', cursor: 'pointer'}} onClick={()=> showLessonModal(lesson)} >
                        <TextTruncate
                            line={3}
                            element="span"
                            truncateText="…"
                            text={count+". "+lesson.title}
                        />
                    </Typography>
                </Box>
                <Box mt={1}>
                    <Typography variant="body1" style={{color: '#7f7f7f'}}>
                        <TextTruncate
                            line={4}
                            element="span"
                            truncateText="…"
                            text={lesson.description}
                        />
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default CourseCard