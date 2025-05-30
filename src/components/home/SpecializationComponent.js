import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import ServicesGridComponent from './ServicesGridComponent'

export default function SpecializationComponent() {
    return (
        <Box px={{ xs: 2, sm: 4, md: 10 }} py={6}>
            <Container>
                <Box textAlign="center" mb={6}>
                    <Typography
                        variant="subtitle1"
                        color="error"
                        sx={{ fontWeight: 500, fontSize: "18px" }}
                    >
                        Our Specialization
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
                        Where Quality Meets Innovation
                    </Typography>

                    <Typography
                        variant="body1"
                        color="textSecondary"
                        mt={2}
                        maxWidth="md"
                        mx="auto"
                    >
                        We specialize in turning your vision into reality by providing end-to-end construction solutions tailored to your needs.
                        From residential buildings to commercial spaces, our experienced team ensures every project is handled with precision, quality,
                        and care. We focus on innovation, sustainability, and delivering results that exceed expectations — on time and within budget.
                    </Typography>
                </Box>
                <Box sx={{
                    backgroundImage: 'url("/images/bg-services.png")',
                    backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: "#FFFF"
                }}>
                    <Container>
                        <ServicesGridComponent />
                    </Container>
                </Box>
            </Container>
        </Box>
    )
}
