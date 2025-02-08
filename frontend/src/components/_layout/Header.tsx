import { Stack, Typography } from '@mui/material'
import Navbar from './Navbar'

const Header = () => {
  return (
    <Stack className='section-gap' sx={{ boxShadow: "0 -2px 10px var(--primary-light)", justifyContent: "space-between", alignItems: "center" }}>
      <Typography className='main-heading' component={"h2"} variant='h4' sx={{fontSize:{xs:24, sm:28, md:32}}}>Australia-Sydney Events</Typography>
      <Navbar />
    </Stack>
  )
}

export default Header