import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Image from 'next/image';

const services = [
    {
        title: 'We Understand Requirements',
        description: `Sed sit amet sapien sit amet odio lobortis ullamcorper quis vel nisl. 
      Nam blandit maximus tristique. Sed sit amet sapien sit amet odio lobortis ullamcorper quis vel nisl. 
      Nam blandit maximus tristique.`,
        imageUrl: '/images/service1.jpg',
    },
    {
        title: 'We Work Precisely',
        description: `Sed sit amet sapien sit amet odio lobortis ullamcorper quis vel nisl. 
      Nam blandit maximus tristique. Sed sit amet sapien sit amet odio lobortis ullamcorper quis vel nisl. 
      Nam blandit maximus tristique.`,
        imageUrl: '/images/service2.png',
    },
    {
        title: 'We Deliver Best Output',
        description: `Sed sit amet sapien sit amet odio lobortis ullamcorper quis vel nisl. 
      Nam blandit maximus tristique. Sed sit amet sapien sit amet odio lobortis ullamcorper quis vel nisl. 
      Nam blandit maximus tristique.`,
        imageUrl: '/images/service3.png'
    },
];

const WhatWeOfferComponent = () => {

    return (
        <>
            <Container sx={{ py: 6 }}>
                <Typography variant="subtitle1" sx={{ color: 'var(--app-primary-color)', textAlign: 'center', mb: 1, fontSize: "18px", fontWeight: 500 }}>
                    What We Offer
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
                        mb: 3
                    }}
                >
                    Complete Construction Services
                </Typography>


                <Box sx={{ display: "flex", justifyContent: "space-between", gap: "30px", marginBottom: "30px", flexDirection: { xs: "column", md: "row" } }}>
                    <Box>
                        <Typography variant="h6" fontWeight="bold">
                            {services[0].title}
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                            {services[0].description}
                        </Typography>

                        <Typography variant="body1" sx={{ lineHeight: 1.8, marginTop: "20px" }}>
                            {services[0].description}
                        </Typography>
                    </Box>

                    <Box>
                        <Image height={322} width={536} src={services[0].imageUrl} alt="img" />
                    </Box>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-between", gap: "30px", marginBottom: "30px", flexDirection: { xs: "column", md: "row" } }}>
                    <Box>
                        <Image height={322} width={536} src={services[1].imageUrl} alt="img" />
                    </Box>
                    <Box>
                        <Typography variant="h6" fontWeight="bold">
                            {services[1].title}
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                            {services[1].description}
                        </Typography>

                        <Typography variant="body1" sx={{ lineHeight: 1.8, marginTop: "20px" }}>
                            {services[0].description}
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-between", gap: "30px", flexDirection: { xs: "column", md: "row" } }}>
                    <Box>
                        <Typography variant="h6" fontWeight="bold">
                            {services[2].title}
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                            {services[2].description}
                        </Typography>

                        <Typography variant="body1" sx={{ lineHeight: 1.8, marginTop: "20px" }}>
                            {services[2].description}
                        </Typography>
                    </Box>
                    <Box>
                        <Image height={322} width={536} src={services[2].imageUrl} alt="img" />
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export default WhatWeOfferComponent;
