import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import EastIcon from '@mui/icons-material/East';

export default function WhyChooseUsComponent() {
    return (
        <Container>
            <Box sx={{ py: 3 }}>
                <Typography variant="subtitle1" sx={{ color: 'var(--app-primary-color)', textAlign: 'center', mb: 1, fontSize: "18px", fontWeight: 500 }}>
                    Why Choose Us?
                </Typography>
                <Typography
                    variant="body1"
                    mt={2}
                    maxWidth="md"
                    mx="auto"
                    textAlign={"center"}
                >
                    From blueprint to handover, we ensure a hassle-free building experience with full transparency and expert guidance every step of the way.
                </Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center", pb: 3 }}>
                <Box sx={{ display: "flex", flexDirection: "column", rowGap: "10px", alignItems: "flex-start" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <EastIcon />
                        <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
                            Bangalore-Based Team with Local Expertise
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <EastIcon />
                        <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
                            Transparent Pricing & No Hidden Costs
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <EastIcon />
                        <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
                            Regular Site Updates & Supervision
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <EastIcon />
                        <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
                            Premium-Quality Materials
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <EastIcon />
                        <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
                            Upto 10-Year Warranty on Structural Work
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <EastIcon />
                        <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
                            24/7 Customer Support
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}
