import React from "react";
import { Box, Typography, Paper, Container } from "@mui/material";
import Image from "next/image";

const services = [
    {
        title: "Architecture",
        description:
            "Designing innovative and sustainable structures that combine function with aesthetic excellence.",
        icon: "/icons/Ruler.png",
    },
    {
        title: "Exterior Design",
        description:
            "Creating visually striking exteriors that reflect your vision and enhance curb appeal.",
        icon: "/icons/Brick Wall.png",
    },
    {
        title: "Landscape Design",
        description:
            "Transforming outdoor spaces into beautiful, functional environments that connect with nature.",
        icon: "/icons/Path.png",
    },
    {
        title: "Site Planning",
        description:
            "Strategic site layouts that optimize space, access, and environmental impact.",
        icon: "/icons/Blueprint.png",
    },
    {
        title: "Interior Design",
        description:
            "Crafting elegant, comfortable interiors tailored to your lifestyle and needs.",
        icon: "/icons/Archway.png",
    },
];

const ServicesGridComponent = () => {
    return (
        <Container sx={{ py: 6 }}>
            <Box
                display="flex"
                flexWrap="wrap"
                gap={3}
                justifyContent="center"
            >
                {services.map((service, index) =>
                    service.isImage ? (
                        <Paper
                            key={index}
                            elevation={0}
                            sx={{
                                width: 406,
                                height: 302,
                                p: 2,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: 2,
                                border: "1px solid #e0e0e0",
                            }}
                        >
                            <Box
                                component="img"
                                src={service.imageUrl}
                                alt="Service Visual"
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    borderRadius: 1,
                                }}
                            />
                        </Paper>
                    ) : (
                        <Paper
                            key={index}
                            elevation={0}
                            sx={{
                                width: 406,
                                height: 302,
                                p: 4,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-start",
                                gap: 2,
                                backgroundColor: "#EAE7E7",
                                borderRadius: 2,
                            }}
                        >
                            <Image
                                src={service.icon}
                                alt="logo"
                                width={64}
                                height={64}
                            />
                            <Typography variant="h6" sx={{ fontSize: "30px", fontWeight: 600 }}>
                                {service.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {service.description}
                            </Typography>
                        </Paper>
                    )
                )}
            </Box>
        </Container>
    );
};

export default ServicesGridComponent;
