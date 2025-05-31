"use client";

import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Image from 'next/image';
import CustomButton from '../custom-button/CustomButton';
import { usePathname, useRouter } from 'next/navigation';

const navItems = [
  { page: "Home", url: "/" },
  { page: "About Us", url: "/about" },
  { page: "Services", url: "/services" },
  { page: "Packages", url: "/packages" },
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const router = useRouter();
  const pathName = usePathname();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.page} disablePadding>
            <ListItemButton onClick={() => router.push(item.url)}>
              <ListItemText primary={item.page} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider orientation="horizontal" sx={{ my: 1 }} />
      <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", py: 2 }}>
        <Box>
          <CustomButton
            onClick={() => router.push("/contact")}
            name="Let’s Build"
          />
        </Box>
      </Box>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', padding: "20px 15px 0 15px" }}>
      <CssBaseline />
      <AppBar component="nav" position="static" sx={{
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        backgroundColor: "var(--foreground)",
      }}
      >
        <Toolbar sx={{ margin: "30px" }}>
          <Box sx={{ flexGrow: 1, display: { sm: 'block' } }}>
            <Image
              src="/logo/logo.png"
              alt="logo"
              width={200}
              height={47}
              priority
            />
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: "20px", alignItems: "center" }}>
            {navItems.map((item) => (
              <Button key={item.page} sx={{ color: pathName === item.url ? 'var(--app-primary-color)' : '#fff' }} onClick={() => router.push(item.url)}>
                {item.page}
              </Button>
            ))}

            <CustomButton
              onClick={() => router.push('/contact')}
              name="Let’s Build"
            />

            <Box className='vertical-line'></Box>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          anchor='top'
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box >
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;