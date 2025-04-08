import { Box, CircularProgress, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

interface LoadingProps {
  message?: string;
}

const LoadingContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
}));

export const Loading = ({ message = 'Loading...' }: LoadingProps) => {
  return (
    <LoadingContainer>
      <CircularProgress />
      <Typography variant="body1" color="text.secondary">
        {message}
      </Typography>
    </LoadingContainer>
  );
}; 