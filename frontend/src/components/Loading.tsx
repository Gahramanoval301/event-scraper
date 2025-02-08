import { Stack } from '@mui/material'


const Loading = () => {
  return (
    <Stack sx={{minHeight:"80vh"}} justifyContent={"center"} alignItems={"center"}>

    <span className="loader"></span>
    </Stack>
  )
}

export default Loading