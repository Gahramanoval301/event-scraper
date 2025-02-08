import { Stack, Typography } from '@mui/material'
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';

const Badge = () => {
  return (
      <Stack gap={2} justifyContent={"start"} alignItems={"center"} sx={{width:"170px", backgroundColor: "primary.light", p: 0.5, borderRadius: "6px" }}>
          <LocalFireDepartmentOutlinedIcon color='primary'/>
          <Typography fontSize={15} fontWeight={600} color='secondary.light'>Few tickets left</Typography>
    </Stack>
  )
}

export default Badge