"use client";

import { Box, Typography } from '@mui/material';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function SubHeaderComponent() {
    const pathName = usePathname();

    return (
        <Box sx={{ padding: "0 15px" }}>
            <Box
                sx={{
                    backgroundColor: '#000',
                    color: '#fff',
                    textAlign: 'center',
                    borderBottomRightRadius: pathName === '/' ? 0 : "10px",
                    borderBottomLeftRadius: pathName === '/' ? 0 : "10px",
                }}
            >
                <Typography
                    variant="subtitle1"
                    sx={{
                        color: '#D32F2F', mb: 2,
                        fontSize: {
                            xs: '13px',
                            sm: '18px',
                            md: '18px',
                        },
                    }}
                >
                    {pathName === '/' ? 'Building Trust With Quality Work' : pathName.split('/')[1].toUpperCase()}
                </Typography>

                <Typography
                    variant="h2"
                    component="h1"
                    fontWeight="bold"
                    sx={{
                        fontSize: {
                            xs: '25px',
                            sm: '48px',
                            md: '68px',
                        },
                        fontWeight: 'bold',
                        lineHeight: 1.2,
                    }}
                >
                    {pathName === '/packages' ? "Find the Perfect Fit" : "Bengaluru’s No.1"}
                </Typography>

                <Typography
                    variant="h2"
                    component="h1"
                    fontWeight="bold"
                    sx={{
                        mb: pathName === '/' ? 1 : 1,
                        pb: pathName === '/' ? 0 : 10,
                        fontSize: {
                            xs: '25px',
                            sm: '38px',
                            md: '68px',
                        },
                        fontWeight: 'bold',
                        lineHeight: 1.2,
                    }}
                >
                    {pathName === '/packages' ? "for Your Budget" : "Home construction company!"}
                </Typography>

                {pathName === '/' && (
                    <Typography
                        variant="subtitle1"
                        sx={{
                            fontSize: {
                                xs: '13px',
                                sm: '18px',
                                md: '18px',
                            },
                        }}
                    >
                        The simple way to build a home starts here
                    </Typography>
                )}
            </Box>
        </Box>
    )
}
