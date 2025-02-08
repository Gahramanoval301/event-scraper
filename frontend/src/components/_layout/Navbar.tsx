import { Stack } from '@mui/material'
import { NavLink } from 'react-router'
import { NAV_LINKS } from '../../constants/NAV_LINKS'

const Navbar = () => {
  return (
    <Stack gap={2} flexDirection={"row"} >
      {NAV_LINKS.map(({ id, label, to }) => {
        return (
          <NavLink target={id == 1 ? "_blank" : "_self"} key={id} to={to} className={({ isPending, isActive }) => isPending ? "pending..." : isActive ? "active" : ""}>{label}</NavLink>
        )
      })}
    </Stack>
  )
}


export default Navbar