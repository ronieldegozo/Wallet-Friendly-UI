import React, { Component, useContext } from 'react';
import {Box, IconButton, useTheme} from '@mui/material';
import { ColorModeContext,  tokens } from '../../theme';
import InputBase from "@mui/material/InputBase";
import LightModeOutlineIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlineIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const NavBar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorsMode = useContext(ColorModeContext);


    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
                <IconButton type="button" sx={{ p: 1 }}>
                    <SearchIcon />
                </IconButton>
            </Box>
            <Box display="flex">
                <IconButton onClick={colorsMode.toggleColorMode} sx={{ ml: 2 }}>
                    {theme.palette.mode === 'dark' ? 
                        // If the theme is dark, show the dark mode icon
                        <DarkModeOutlineIcon /> : (
                        // If the theme is light, show the light mode icon
                        <LightModeOutlineIcon />
                    )
                    }
                </IconButton>
                <IconButton sx={{ ml: 2 }}>
                    <NotificationsNoneOutlinedIcon />
                </IconButton>
                <IconButton sx={{ ml: 2 }}>
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton sx={{ ml: 2 }}>
                    <PersonOutlineIcon />
                </IconButton>
            </Box>
        </Box>
    );
}

export default NavBar;
