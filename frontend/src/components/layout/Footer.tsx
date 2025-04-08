import { Box, Typography, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(3),
  marginTop: 'auto',
}));

const FooterContent = styled(Box)(({ theme }) => ({
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: theme.spacing(2),
    textAlign: 'center',
  },
}));

export const Footer = () => {
  return (
    <StyledFooter>
      <FooterContent>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Hitchhikers. All rights reserved.
        </Typography>
        <Box>
          <Link href="#" color="inherit" sx={{ mr: 2 }}>
            Privacy Policy
          </Link>
          <Link href="#" color="inherit" sx={{ mr: 2 }}>
            Terms of Service
          </Link>
          <Link href="#" color="inherit">
            Contact Us
          </Link>
        </Box>
      </FooterContent>
    </StyledFooter>
  );
}; 