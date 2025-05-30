"use client";

import { Box, Container, Typography, Card, CardMedia, Divider } from '@mui/material'
import React from 'react';
import EastIcon from '@mui/icons-material/East';
import CustomButton from '../custom-button/CustomButton';
import ContactInfoComponent from '../home/ContactInfoComponent';
import WhatWeOfferComponent from './WhatWeOfferComponent';
import Image from 'next/image';

const projects = [
    { id: 1, image: "/images/about1.png" },
    { id: 2, image: "/images/about2.png" },
];

export default function AboutComponent() {
    return (
        <>
            <Box px={{ xs: 2, sm: 4, md: 10 }} py={6}>
                <Container>
                    <Box textAlign="center" mb={6}>
                        <Typography
                            variant="subtitle1"
                            color="error"
                            sx={{ fontWeight: 500, fontSize: "18px" }}
                        >
                            Welcome to the sHouss Constructions
                        </Typography>

                        <Typography
                            component="h1"
                            sx={{
                                fontSize: {
                                    xs: '36px',
                                    sm: '48px',
                                    md: '68px',
                                },
                                fontWeight: 'bold',
                                mt: 1,
                            }}
                        >
                            Where We Build Your Visions
                        </Typography>

                        <Typography
                            variant="body1"
                            color="textSecondary"
                            mt={2}
                            maxWidth="md"
                            mx="auto"
                        >
                            At sHouss Design and Build, we bring over 15 years of experience in crafting beautiful,
                            functional residential homes across Bangalore, Karnataka, and Tamil Nadu. From new builds to renovations,
                            we turn your vision into reality with expert design, quality construction, and a smooth, stress-free process.
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: { md: "row", xs: "column" }, gap: "30px", textAlign: "center" }}>
                        <Box>
                            <Image height={352} width={324} src={projects[0].image} alt="img" />
                        </Box>
                        <Box>
                            <Typography
                                component={"h1"}
                                sx={{
                                    fontSize: {
                                        xs: '20px',
                                        sm: '28px',
                                        md: '28px',
                                    },
                                    fontWeight: 500,
                                }}
                            >
                                Let us help you create a home that truly reflects you.
                            </Typography>

                            <Box sx={{ display: "flex", flexDirection: "column", rowGap: "10px", alignItems: "flex-start", marginTop: "30px" }}>
                                <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                    <EastIcon />
                                    <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
                                        Professional Specialist
                                    </Typography>
                                </Box>

                                <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                    <EastIcon />
                                    <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
                                        Brilliant Ideas
                                    </Typography>
                                </Box>

                                <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                    <EastIcon />
                                    <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
                                        Precise Builders
                                    </Typography>
                                </Box>

                                <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                    <EastIcon />
                                    <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
                                        24/7 Assistance
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={{ marginTop: "20px" }}>
                                <CustomButton onClick={() => console.log()} name="Get a Free Quote" width="200px" />
                            </Box>
                        </Box>
                        <Box>
                            <Image height={352} width={324} src={projects[1].image} alt="img" />
                        </Box>
                    </Box>
                </Container>


            </Box>
            <ContactInfoComponent />

            <Box sx={{ backgroundColor: "#000", color: "#FFFF" }}>
                <WhatWeOfferComponent />
                <Divider
                    orientation="horizontal"
                    sx={{
                        borderColor: 'var(--app-primary-color)',
                    }}
                />
            </Box>
        </>
    )
}
