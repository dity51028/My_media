import { Stack,Box } from "@mui/material"
import VideoCard from "./VideoCard"
import ChannelCard from "./ChannelCard"

const Videos = ({videos}) => {
    
  return (
    <Stack direction="row" flexWrap="wrap"
    justifyContent="start" gap="2">
      {
        videos.map(({video})=>(
          <Box>
           <VideoCard video={video}/>
           <ChannelCard channelDetail={video}/>
          </Box>
        ))
      }
  
    </Stack>
  )
}

export default Videos