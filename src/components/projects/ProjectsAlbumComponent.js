"use client";

import { Box, Container, Grid, Typography, Tab, Tabs } from '@mui/material';
import React from 'react';
import ProjectGrid from './ProjectGrid';
import Project3dGrid from './Project3dGrid';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </Box>
    );
}

export default function ProjectsAlbumComponent() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ backgroundColor: "#000", color: "#fff", pt: "35px", marginTop: "20px" }}>
            <Container>
                <Grid container spacing={4} alignItems="center">
                    <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                        <Typography
                            variant="subtitle2"
                            sx={{ color: "var(--app-primary-color)", fontWeight: 500 }}
                        >
                            Crafting Spaces, Creating Futures
                        </Typography>
                        <Typography
                            variant="h3"
                            component="h2"
                            sx={{ fontWeight: "bold", mt: 1 }}
                        >
                            Our Projects
                        </Typography>
                    </Grid>
                </Grid>
                <Box sx={{ width: '100%' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        centered
                        textColor="inherit"
                        slotProps={{
                            indicator: {
                                sx: {
                                    backgroundColor: 'var(--app-primary-color)', // red underline for active tab
                                },
                            },
                        }}
                    >
                        <Tab
                            label="Architectural Portfolio"
                            sx={{
                                color: value === 0 ? 'var(--app-primary-color)' : '#fff',
                                fontWeight: value === 0 ? 'bold' : 'normal',
                            }}
                        />
                        <Tab
                            label="3D Designs"
                            sx={{
                                color: value === 1 ? 'var(--app-primary-color)' : '#fff',
                                fontWeight: value === 1 ? 'bold' : 'normal',
                            }}
                        />
                    </Tabs>

                    <TabPanel value={value} index={0}>
                        <ProjectGrid />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Project3dGrid />
                    </TabPanel>
                </Box>


            </Container>
        </Box>
    )
}
