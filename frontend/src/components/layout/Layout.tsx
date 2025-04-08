import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const MainContent = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(3),
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
}));

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </Box>
  );
}; 