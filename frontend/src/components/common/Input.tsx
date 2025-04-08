import { TextField, TextFieldProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface InputProps extends Omit<TextFieldProps, 'variant'> {
  error?: boolean;
  helperText?: string;
}

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.shape.borderRadius,
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
  '& .MuiInputLabel-root': {
    '&.Mui-focused': {
      color: theme.palette.primary.main,
    },
  },
}));

export const Input = ({
  error,
  helperText,
  ...props
}: InputProps) => {
  return (
    <StyledTextField
      variant="outlined"
      error={error}
      helperText={helperText}
      fullWidth
      {...props}
    />
  );
}; 