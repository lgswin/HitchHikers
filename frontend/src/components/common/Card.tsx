import { Card as MuiCard, CardProps as MuiCardProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface CardProps extends MuiCardProps {
  elevation?: number;
}

const StyledCard = styled(MuiCard)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  transition: 'box-shadow 0.2s ease-in-out',
  '&:hover': {
    boxShadow: theme.shadows[4],
  },
}));

export const Card = ({
  children,
  elevation = 1,
  ...props
}: CardProps) => {
  return (
    <StyledCard
      elevation={elevation}
      {...props}
    >
      {children}
    </StyledCard>
  );
}; 