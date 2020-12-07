import React, { useState, useEffect} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import ReactPlayer from 'react-player/lazy'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      background: theme.palette.primary.dark,
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center', 
      alignItems: 'center',
    },
    content: {
      display: 'flex',
      justifyContent: 'center', 
      alignItems: 'center',
      height: '100%',
      width: '100%',
      maxWidth: 1920,
      overflow: 'hidden',
    },
    appBar: {
      position: 'relative',
      background: theme.palette.primary.light,
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  }),
);

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface lessonType {
  id: number,
  thumbnail:string,
  video:string,
  duration:string,
  title:string,
  description:string
}

interface showLessonProps{
  showLessonModal: boolean,
  lesson:lessonType
  handleShowLessonModal(e:boolean):void,

}

const FullScreenDialog: React.FC<showLessonProps>= ({showLessonModal, lesson, handleShowLessonModal}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    handleShowLessonModal(false)
  };

  useEffect( () => {
    setOpen(showLessonModal)
  }, [showLessonModal])

  return (
    <div>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {lesson.title}
            </Typography>
          </Toolbar>
        </AppBar>
        <Box className={classes.wrapper}>
          <Box className={classes.content}>
              <ReactPlayer 
                url={lesson.video} 
                width="95%"
                height="95%"
                controls={true}
              />
          </Box>
        </Box>
      </Dialog>
    </div>
  );
}

export default FullScreenDialog