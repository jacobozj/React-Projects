import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { LuUserCircle2, LuSettings, LuDownload, LuAlertCircle, LuHistory, LuSearch, LuLayoutDashboard, LuChevronRight, LuChevronLeft, LuMenu } from "react-icons/lu";
import { MdLogout } from "react-icons/md";
import { useNavigate, useLocation  } from 'react-router-dom';



const drawerWidth = 220;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Sidenav() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menuItems = [
    { text: 'Dashboard', icon: <LuLayoutDashboard size={24}/> },
    { text: 'Inspeccion', icon: <LuSearch size={24}/> },
    { text: 'Historial', icon: <LuHistory size={24}/> },
    { text: 'Pendientes', icon: <LuAlertCircle size={24}/> },
    { text: 'Reportes', icon: <LuDownload size={24}/> }
  ];
  const menuItemsBt = [
    { text: 'Perfil', icon: <LuUserCircle2 size={24}/> },
    { text: 'Salir', icon: <MdLogout size={24}/> },
    { text: 'Configuración', icon: <LuSettings size={24}/>
  }
  ];

  const location = useLocation();
  const currentPath = location.pathname.slice(1);
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" elevation={1} sx={{backgroundColor: '#ffffff', color: '#2f2f2f'}} >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={()=>setOpen(!open)}
            edge="start"
            
          >
            <LuMenu />
          </IconButton>
          <img src="/logo.png" alt="brand" className="h-8 w-auto" />
          <Typography variant="h6" color="red" noWrap component="div" className="pt-1 pl-1 !text-base">
            EXTINGUIFY
          </Typography>
          
           
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <LuChevronRight /> : <LuChevronLeft />}
          </IconButton>
        </DrawerHeader>
        
        <List className="flex-1">
          {menuItems.map((menuItem, index) => (
            <ListItem key={menuItem.text} disablePadding sx={{ display: 'block' }} onClick={() => navigate(`/${menuItem.text.toLowerCase()}`)}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  backgroundColor: currentPath === menuItem.text.toLowerCase() ? '#F8D0D1' : 'inherit',
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 2 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {menuItem.icon}
                </ListItemIcon>
                <ListItemText primary={menuItem.text} sx={{ opacity: open ? 1 : 0}} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List className="!pb-10">
          {menuItemsBt.map((menuItemBt, index) => (
            <ListItem key={menuItemBt.text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 2 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {menuItemBt.icon}
                </ListItemIcon>
                <ListItemText primary={menuItemBt.text} sx={{ opacity: open ? 1 : 0}} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}