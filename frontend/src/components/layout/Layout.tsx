import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Header } from './Header';
import { Footer } from './Footer';

const MainContent = styled(Box)(({ theme }) => ({
  minHeight: 'calc(100vh - 64px - 120px)', // viewport height - header - footer
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
}));

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <MainContent>
        {children}
      </MainContent>
      <Footer />
    </Box>
  );
}; 