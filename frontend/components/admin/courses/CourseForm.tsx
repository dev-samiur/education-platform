import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MediaPreview from '../../shared/MediaPreview'

import Badge from '@material-ui/core/Badge';
import CancelTwoToneIcon from '@material-ui/icons/CancelTwoTone';

const useStyles = makeStyles((theme) => ({
  dialog: {
      background: theme.palette.primary.light,
  },
  formControl: {
    marginTop: 10,
    minWidth: 120,
  },
  textField: {
      fontSize: 14, 
      color: '#7f7f7f'
  }
}));

interface CourseType{
  _id?: number,
  title?: string,
  description?: string
  thumbnail?: string
  trailer?: string,
  cover_photo: string
}

interface CourseFormProps{
  show: boolean
  course:  CourseType | any
  handleShowCourseModal(e:boolean): void,
  handleSnackBar(e:any):void
}

const CourseForm: React.FC<CourseFormProps> = ({show, course, handleShowCourseModal, handleSnackBar}) => {

  const classes = useStyles();

  const [open, setOpen] = useState<boolean>(false)
  const [id, setId]= useState<number>(-1)
  const [title, setTitle]= useState<string>('')
  const [description, setDescription]= useState<string>('')
  const [thumbnail, setThumbnail]= useState<string>('')
  const [trailer, setTrailer]= useState<string>('')
  const [cover, setCover]= useState<string>('')

  const [currThumbnail, setCurrThumbnail]= useState<string>('')
  const [currTrailer, setCurrTrailer]= useState<string>('')
  const [currCover, setCurrCover]= useState<string>('')

  const handleClose = () => {
    setId(-1)
    setTitle('')
    setDescription('')
    setThumbnail('')
    setTrailer('')
    setCover('')
    setCurrThumbnail('')
    setCurrTrailer('')
    setCurrCover('')
    handleShowCourseModal(false)
    setOpen(false)
  }

  const handleThumbnailUpload= (e:any) => {
    setThumbnail(e)
  }

  const handleTrailerUpload= (e:any) => {
    setTrailer(e)
  }

  const handleCoverUpload= (e:any) => {
    setCover(e)
  }

  const removeCurrThumbnail= () => {
    setCurrThumbnail('')
  }

  const removeCurrTrailer= () => {
    setCurrTrailer('')
  }

  const removeCurrCover= () => {
    setCurrCover('')
  }

  useEffect( () => {
    setOpen(show)
  }, [show])

  useEffect( () => {
    if(course !== null){
      setId(course._id)
      setTitle(course.title)
      setDescription(course.description)
      setCurrThumbnail(course.thumbnail)
      setCurrTrailer(course.trailer)
      setCurrCover(course.cover)
    }
  }, [course])

  const isEmptyOrSpaces= (str:string) => {
    return str === null || str.match(/^ *$/) !== null
  }

  const isDisabled= () => {

      if(title && !isEmptyOrSpaces(title) && description && !isEmptyOrSpaces(description) && (thumbnail || currThumbnail) &&
      (trailer || currTrailer) && (cover || currCover))
          return false
      
          return true
  }

  const handleSubmit= () => {

    let formData = new FormData()

    formData.append('title', title)
    formData.append('description', description)
    formData.append('thumbnail', thumbnail[0])
    formData.append('trailer', trailer[0])
    formData.append('cover_photo', cover[0])

    axios({
      method: 'POST',
      url: '/api/course',
      data: formData
    })
    .then( response => {

        if(response.data.success){
          handleSnackBar(response.data.success) 
        }

        else{
          handleSnackBar(response.data.error)
        }
        handleClose()
    })
    .catch( err => {
      handleSnackBar('Error')
      handleClose()
    })
}

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" style={{background: '#191919', color: '#1E88F7'}} >Add Course</DialogTitle>
        <DialogContent className={classes.dialog}>
          <Box>
            <TextField
              autoFocus
              defaultValue={title}
              margin="dense"
              id="title"
              label="Tilte"
              type="text"
              fullWidth
              onChange={ (e) => setTitle(e.target.value) }
              InputProps={{
                  className: classes.textField,
              }}
            />
            <TextField
              defaultValue={description}
              margin="dense"
              id="description"
              label="description"
              type="text"
              fullWidth
              multiline
              rows={5}
              onChange={ (e) => setDescription(e.target.value) }
              InputProps={{
                  className: classes.textField,
              }}
              style={{marginTop: 20}}
            />
            <Box>
              {
                currThumbnail ? 
                (
                  <Badge style={{marginRight: 20}} badgeContent={<CancelTwoToneIcon color="primary"  style={{cursor: 'pointer'}} onClick={ () => removeCurrThumbnail() } />}>
                      <Box style={{width: 80, height: 80}}><img style={{width: '100%', height: '100%', objectFit: 'cover'}} src={`/media/images/${currThumbnail}`}/></Box>
                  </Badge> 
                ) : 
                (
                  <MediaPreview handleImageUpload={handleThumbnailUpload} caption="Trailer Thumbnail" />
                )
              }
              {
                currTrailer ? 
                (
                  <Badge style={{marginRight: 20}} badgeContent={<CancelTwoToneIcon color="primary"  style={{cursor: 'pointer'}} onClick={ () => removeCurrTrailer() } />}>
                      <Box style={{width: 80, height: 80}}><img style={{width: '100%', height: '100%', objectFit: 'cover'}} src={`/media/images/${currTrailer}`}/></Box>
                  </Badge> 
                ) : 
                (
                  <MediaPreview handleImageUpload={handleTrailerUpload} caption="Course Trailer" />
                )
              }
              {
                currCover ? 
                (
                  <Badge style={{marginRight: 20}} badgeContent={<CancelTwoToneIcon color="primary"  style={{cursor: 'pointer'}} onClick={ () => removeCurrCover() } />}>
                      <Box style={{width: 80, height: 80}}><img style={{width: '100%', height: '100%', objectFit: 'cover'}} src={`/media/images/${currCover}`}/></Box>
                  </Badge> 
                ) : 
                (
                  <MediaPreview handleImageUpload={handleCoverUpload} caption="Cover Photo" />
                )
              }
            </Box>
          </Box>
        </DialogContent>
        <DialogActions className={classes.dialog} style={{paddingTop: 10}} >
          <Button onClick={handleClose} color="primary" variant="outlined" >
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary" disabled={isDisabled()} variant="outlined" >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CourseForm
