"use client";

import React from 'react';
import { Box, Grid, Typography, Paper, Container, Button } from '@mui/material';
import CustomButton from '../custom-button/CustomButton';
import { useRouter } from 'next/navigation';
import { styled, keyframes } from '@mui/system';

// Animation for the radiant blinking effect
// Animation for glowing dot along the border
const moveDot = keyframes`
  0%   { top: 0; left: 0; }
  25%  { top: 0; left: 100%; transform: translate(-50%, 0); }
  50%  { top: 100%; left: 100%; transform: translate(-50%, -50%); }
  75%  { top: 100%; left: 0; transform: translate(0, -50%); }
  100% { top: 0; left: 0; }
`;

// Styled Button with animated dot
const AnimatedBorderButton = styled(Button)(({ theme }) => ({
    position: 'relative',
    background: 'var(--app-primary-color)',
    color: '#fff',
    padding: '8px 24px',
    fontWeight: 'bold',
    textTransform: 'none',
    overflow: 'hidden',
    width: "100%",
    letterSpacing: "3px",
    fontSize: "15px",

    '&::before': {
        content: '""',
        position: 'absolute',
        width: '8px',
        height: '8px',
        backgroundColor: '#fff',
        borderRadius: '50%',
        boxShadow: '0 0 8px 4px rgba(255, 255, 255, 0.6)',
        animation: `${moveDot} 5s linear infinite`,
        zIndex: 1,
    },

    // '&:hover': {
    //     background: 'linear-gradient(to top, #d32f2f, #ff6659)',
    // },
}));

const plans = [
    {
        title: 'Standard',
        price: 'Rs.1830/sq.ft',
        subTitle: 'Affordable, Reliable, Functional',
        description: "Perfect for budget-conscious homeowners who want quality construction with essential features:",
        features: [
            'Customised Architectural Design',
            'RCC Framed Structure',
            'Site Engineer for Daily Supervision',
            'Quality-Checked Materials',
            'Up to 10-Year Structural Warranty',
            '24/7 Customer Support',
            'Basic Vitrified Flooring',
            'Branded Electrical & Plumbing Material',
            'Cement-Based Waterproofing',
            'Timely Project Updates'
        ],
    },
    {
        title: 'Premium',
        price: 'Rs.1970/sq.ft',
        subTitle: 'Stylish, Durable, Comfortable',
        description: "A great balance between quality and aesthetics – upgraded materials, better finishes, and modern features:",
        features: [
            'Everything in Standard, plus:',
            '3D Elevation & Interior Concepts',
            'Premium Flooring (Granite/Vitrified/Combination)',
            'Modular Kitchen Setup',
            'Designer Bathroom Fixtures (Jaquar/Equivalent)',
            'False Ceiling in Living & Bedrooms',
            'UPVC Windows with Mesh',
            'Branded Modular Switches (Anchor/Legrand)',
            'Enhanced Waterproofing System',
            'Improved Paint & Finishing (Premium Emulsion)',
            'Project Manager Support'
        ],
    },
    {
        title: 'Luxury',
        price: 'Rs.2270/sq.ft',
        subTitle: 'Elegant, Bespoke, Top-tier',
        description: "For those who seek the finest – high-end finishes, premium materials, and personalized design options:",
        features: [
            'Everything in Premium, plus:',
            'Bespoke Architecture + Luxury Interior Design',
            'Italian Marble / Wooden Flooring',
            'Full Smart Home Integration',
            'Kohler/Grohe Fixtures',
            'Designer Main Door & Wardrobes',
            'Advanced Home Automation (Lighting, Security)',
            'Imported False Ceiling with Cove Lighting',
            'Complete Modular Kitchen with Appliances',
            'Solar Power & Rainwater Harvesting Setup',
            'Dedicated Relationship Manager',
            'Up to 15-Year Warranty'
        ],
    },
];

const PricingCardsComponent = () => {

    const router = useRouter();

    return (
        <Box sx={{ flexGrow: 1, py: 4, backgroundColor: '#fff' }}>
            <Container>
                <Grid container spacing={4} justifyContent="center">
                    {plans.map((plan, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                            <Box sx={{ height: "40px", borderRadius: "5px", marginBottom: "20px", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {plan.title === 'Premium' ? <AnimatedBorderButton>Recommended</AnimatedBorderButton> : ''}
                            </Box>
                            <Paper elevation={4} sx={{ borderRadius: 3, overflow: 'hidden' }}>
                                {/* Top Section */}
                                <Box sx={{ backgroundColor: 'var(--app-primary-color)', p: 2, textAlign: 'center' }}>
                                    <Typography variant="subtitle1" color="white" sx={{ fontSize: "18px" }}>
                                        {plan.price}
                                    </Typography>
                                    <Typography variant="h4" fontWeight="bold" color="white" sx={{ fontSize: "48px" }}>
                                        {plan.title}
                                    </Typography>
                                    <Typography variant="subtitle1" color="white" sx={{ fontSize: "18px" }}>
                                        {plan.subTitle}
                                    </Typography>
                                </Box>

                                {/* Feature Section */}
                                <Box sx={{ backgroundColor: 'black', color: 'white', p: 3, minHeight: '815px' }}>
                                    <Typography variant="h6" gutterBottom sx={{ fontSize: "15px" }}>
                                        {plan.description}
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
                                    <Box mt={'auto'} mb={2} textAlign="center">
                                        <CustomButton width="200px" name="Get a Free Quote" onClick={() => router.push('contact')} />
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
