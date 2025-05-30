"use client";

import React from 'react';
import { Box, Grid, Typography, Button, Paper, Container } from '@mui/material';
import CustomButton from '../custom-button/CustomButton';

const plans = [
    {
        title: 'Standard',
        price: '1850/sq.ft',
        features: [
            'Professional Specialist',
            'Brilliant Ideas',
            'Precise Builders',
            '24/7 Assistance',
            'Professional Specialist',
            'Brilliant Ideas',
            'Precise Builders',
            '24/7 Assistance',
        ],
    },
    {
        title: 'Premium',
        price: '1999/sq.ft',
        features: [
            'Professional Specialist',
            'Brilliant Ideas',
            'Precise Builders',
            '24/7 Assistance',
            'Professional Specialist',
            'Brilliant Ideas',
            'Precise Builders',
            '24/7 Assistance',
        ],
    },
    {
        title: 'Luxury',
        price: '2500/sq.ft',
        features: [
            'Professional Specialist',
            'Brilliant Ideas',
            'Precise Builders',
            '24/7 Assistance',
            'Professional Specialist',
            'Brilliant Ideas',
            'Precise Builders',
            '24/7 Assistance',
        ],
    },
];

const PricingCardsComponent = () => {

    return (
        <Box sx={{ flexGrow: 1, py: 4, backgroundColor: '#fff' }}>
            <Container>
                <Grid container spacing={4} justifyContent="center">
                    {plans.map((plan, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                            <Paper elevation={4} sx={{ borderRadius: 3, overflow: 'hidden' }}>
                                {/* Top Section */}
                                <Box sx={{ backgroundColor: 'var(--app-primary-color)', p: 2, textAlign: 'center' }}>
                                    <Typography variant="subtitle1" color="white" sx={{ fontSize: "18px" }}>
                                        {plan.price}
                                    </Typography>
                                    <Typography variant="h4" fontWeight="bold" color="white" sx={{ fontSize: "48px" }}>
                                        {plan.title}
                                    </Typography>
                                </Box>

                                {/* Feature Section */}
                                <Box sx={{ backgroundColor: 'black', color: 'white', p: 3 }}>
                                    <Typography variant="h6" gutterBottom>
                                        Let us help you create a home that truly reflects you.
                                    </Typography>
                                    <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, mt: 3 }}>
                                        {plan.features.map((feature, i) => (
                                            <li key={i}>
                                                <Typography sx={{ display: 'flex', alignItems: 'center', mb: 2, fontWeight: 500 }}>
                                                    <Box component="span" sx={{ mr: 1 }}>➜</Box>
                                                    {feature}
                                                </Typography>
                                            </li>
                                        ))}
                                    </Box>

                                    {/* Button */}
                                    <Box mt={3} mb={2} textAlign="center">
                                        <CustomButton width="200px" name="Get a Free Qoute" />
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default PricingCardsComponent;
