import React from 'react'
import { Link } from 'react-router-dom'
import { Typography,Card,CardContent,CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl,demoVideoUrl,demoChannelUrl,demoVideoTitle,demoChannelTitle } from '../utils/constants'


const VideoCard = ({video:{videoId,thumbnails}} ) => {
  console.log(videoId,thumbnails)
  return (
   <Card sx={{width:{md:'320px',xs:'100%'},boxShadow:'none',borderRadius:0}}>

    <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
    <CardMedia 
      image={thumbnails?.high?.url}
      alt={thumbnails?.title}
      sx={{height:358,height:180}}
    />
    </Link>


    <CardContent sx={{backgroundColor:'#1e1e1e',height:'106px'}}>
      <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
        <Typography variant='subtitle1' fontWeight='bold' color='#FFF'>
          {thumbnails?.title.slice(0,60)||demoVideoTitle.slice(0,60)}
        </Typography>
      </Link>
   
    </CardContent>

   </Card>
  
  )
}

export default VideoCard


 /** 
      <Link to={channelId?`/video/${channelId}`:demoChannelUrl}>
        <Typography variant='subtitle2' fontWeight='bold' color='gray'>
          {thumbnails?.title.slice(0,60)||demoChannelTitle.slice(0,60)}
          <CheckCircle sx={{fontSize:12, color:'gray',ml:'5'}}/>
        </Typography>
      </Link>
      */