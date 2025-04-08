import { Box, Container, Typography, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderTop: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(3, 0),
  marginTop: 'auto',
}));

const FooterContent = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

export const Footer = () => {
  return (
    <StyledFooter component="footer">
      <FooterContent>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Hitchhikers. All rights reserved.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Link href="/privacy" color="text.secondary" underline="hover">
            Privacy Policy
          </Link>
          <Link href="/terms" color="text.secondary" underline="hover">
            Terms of Service
          </Link>
          <Link href="/contact" color="text.secondary" underline="hover">
            Contact Us
          </Link>
        </Box>
      </FooterContent>
    </StyledFooter>
  );
}; 