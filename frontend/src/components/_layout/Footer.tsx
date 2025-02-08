import { Box, Typography, Link, Stack } from '@mui/material';
import { LinkedIn, GitHub, Email, Copyright } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{  py: 4, borderTop:"1px solid var(--primary-light)" }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
          <Link href="https://www.linkedin.com/in/leman-gahramanova-0a3b6b2a5/" target="_blank" sx={{ color: 'primary.main', '&:hover': { color: 'primary.main' } }}>
            <LinkedIn sx={{ fontSize: 30 }} />
          </Link>
          <Link href="https://github.com/Gahramanoval301" target="_blank" sx={{ color: 'primary.main', '&:hover': { color: 'primary.main' } }}>
            <GitHub sx={{ fontSize: 30 }} />
          </Link>
          <a href="mailto:gahramanovalamann@gmail.com" style={{ color: 'primary.main' }}>
            <Email sx={{ fontSize: 30 }} />
        </a>
        </Box>

        <Stack gap={1} justifyContent={"center"} alignItems={"center"}>
          <Typography variant="body2" color="primary.main">Copyright</Typography>
          <Copyright sx={{ fontSize: 18, color: 'primary.main' }} />
          <Typography variant="body2" color="primary.main">Gahramanova Leman</Typography>
        </Stack>
    </Box>
  );
};

export default Footer;
