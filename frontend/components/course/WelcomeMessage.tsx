import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import DetailsIcon from '@material-ui/icons/Details'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import VideocamIcon from '@material-ui/icons/Videocam';

const useStyles = makeStyles((theme) => ({

    container:{
        height: 'calc( 100vh - 120px )',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: theme.palette.secondary.light,
        backgroundImage: 'url(https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80)',
    },
    backdrop: {
        zIndex: 1,
        color: '#fff',
        background: '#212121',
        opacity: .4,
        width: '100%',
        height: '100vh'
    },
    contentOverlay: {
        padding: '0px 5px',
        position: 'absolute',
        zIndex: 2,
        color: '#FFF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 20,
    },
    paper: {
        display: 'flex',
        alignItems: 'center',
        width: 550,
        height: 60,
        [theme.breakpoints.down('xs')]: {
            width: '100%',
          },
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
    button: {
        padding: theme.spacing(2),
    },
}))

export default function WelcomeMessage() {

    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('xs'));

    return (
        
            <Grid
                container
                direction="column"
                justify="flex-end"
                alignItems="center"
                className={classes.container}
            >
                <div className={classes.backdrop}></div>
                
                <Box className={classes.contentOverlay}>
                    <Box mt={1}><Typography  variant={matches ? "h2" : "h1"} style={{fontWeight: 600}}>David J.</Typography></Box>
                    <Box><Typography  variant={matches ? "h2" : "h1"} style={{fontWeight: 600}}>Malan</Typography></Box>
                    <Box mt={1}><DetailsIcon color="primary" fontSize="large" /></Box>
                    <Box mt={1}><Typography variant="h5" style={{textAlign: 'center'}}>Teaches Artificial Intelligence</Typography></Box>
                    <Box mt={2}>
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<PlayArrowIcon />}
                            style={{fontWeight: 600}}
                            className={classes.button}
                        >
                            Start Class
                        </Button>
                        <Button
                            variant="contained"
                            style={{background: '#191919', marginLeft: 20, color: '#fff', fontWeight: 600}}
                            startIcon={<VideocamIcon />}
                            className={classes.button}
                        >
                            Trailer
                        </Button>
                    </Box>
                </Box>
            </Grid>
    )
}
