import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import styled from '@emotion/styled';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  boxShadow: 'none',
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  marginLeft: theme.spacing(2),
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

export const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    await logout();
    handleClose();
    navigate('/login');
  };

  return (
    <StyledAppBar position="sticky">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => navigate('/')}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Hitchhikers
        </Typography>
        {isAuthenticated ? (
          <>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <NavButton onClick={() => navigate('/schedules')}>
                Schedules
              </NavButton>
              <NavButton onClick={() => navigate('/requests')}>
                Requests
              </NavButton>
              <NavButton onClick={() => navigate('/profile')}>
                Profile
              </NavButton>
            </Box>
            <IconButton
              onClick={handleMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => { handleClose(); navigate('/profile'); }}>
                Profile
              </MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </>
        ) : (
          <Box>
            <NavButton onClick={() => navigate('/login')}>
              Login
            </NavButton>
            <NavButton onClick={() => navigate('/register')}>
              Register
            </NavButton>
          </Box>
        )}
      </Toolbar>
    </StyledAppBar>
  );
};