import { Box,CardContent,CardMedia,Typography,typography } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { demoProfilePicture } from "../utils/constants"


const ChannelCard = ({channelDetail}) => {
  return (
   <Box
    sx={{
      boxShadow:'none',
      borderRadius:'20px',
      display:'flex',
      justifyContent:'center',
      width:{xs:'356px',md:'320px'},
      height :'326px',
      margin:'auto'

    }}
   >
    <Link to={`/channel/${channelDetail?.channelId}`}>
      <CardContent
        sx={{
          display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'center',color:'#fff'
        }}
      >

        <CardMedia
          image={channelDetail?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.title}
          sx={{borderRadius:'50%',height:'180px',width:'180px',mb:2,border:'1px solid #e3e3e3'}}
        />
        <Typography variant="h6">
           {channelDetail?.title}
           <CheckCircle sx={{fontSize:14, color:'gray',ml:'5'}}/>
        </Typography>
        {channelDetail?.statistics?.subscribersCount && (
          <Typography>
            {parseInt(channelDetail?.satistics?.subscribersCount).toLocaleString()}
              Subscribers
          </Typography>
        )}
        
        
      </CardContent>
    
    </Link>

   </Box>
  )
}

export default ChannelCard