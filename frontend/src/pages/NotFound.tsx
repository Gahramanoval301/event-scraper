import { Typography } from "@mui/material"
import { Link } from "react-router"

const NotFound = () => {
  return (
    <Typography mt={2} textAlign="center">Oops! Go to <Link to="/">Home</Link></Typography>
  )
}

export default NotFound