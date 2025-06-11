import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Image from 'next/image';

const services = [
    {
        title: 'Architectural Design Services',
        description: `Custom architectural planning for residential and commercial properties. We create modern, Vastu-compliant designs that suit your lifestyle, plot size, and budget.`,
        imageUrl: '/images/service1.jpg',
    },
    {
        title: 'Home Construction Services',
        description: `End-to-end construction with premium materials, skilled workmanship, and dedicated site engineers. We specialize in residential buildings, duplex homes, and villa construction—delivered on time with structural warranty.`,
        imageUrl: '/images/service2.png',
    },
    {
        title: 'Interior Design & Turnkey Interiors',
        description: `Smart, elegant, and functional interiors for homes, apartments, and offices. We offer 3D designs, material selection, modular furniture, and full turnkey execution.`,
        imageUrl: '/images/service3.png'
    },
    {
        title: 'Home Renovation & Remodeling',
        description: `Breathe new life into your home with our renovation services—kitchen remodeling, bathroom upgrades, flooring, painting, electrical rewiring, and more.`,
        imageUrl: '/images/service4.jpg'
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
                    variant="body1"
                    mt={2}
                    maxWidth="md"
                    mx="auto"
                    textAlign={"center"}
                >
                    We provide complete home solutions across Bangalore —from design to delivery. Whether you’re building a new house, revamping your interiors, or renovating your existing space, our expert team ensures quality, transparency, and on-time completion.
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

                <Box sx={{ display: "flex", justifyContent: "space-between", gap: "30px", flexDirection: { xs: "column", md: "row" } }}>
                    <Box>
                        <Image height={322} width={536} src={services[3].imageUrl} alt="img" />
                    </Box>
                    <Box>
                        <Typography variant="h6" fontWeight="bold">
                            {services[3].title}
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                            {services[3].description}
                        </Typography>

                        <Typography variant="body1" sx={{ lineHeight: 1.8, marginTop: "20px" }}>
                            {services[3].description}
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export default WhatWeOfferComponent;
