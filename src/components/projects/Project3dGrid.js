'use client';
import React from 'react';
import { Box, CardActionArea } from '@mui/material';

const projectData = [
    {
        title: 'Twin Villa – Karaikudi',
        description: 'This modern twin villa was successfully delivered to a client in Karaikudi. With striking lines and warm wood accents, it offers a blend of elegance and contemporary living.',
        imageUrl: 'https://yourdigitalfirm.com/shouss/media/04-Sourav50x70/210726_06_3D_SouravResidence.jpg',
    },
    {
        title: 'Urban Elevation Residence',
        description: 'A sophisticated three-storey urban home designed with minimalist textures and premium finishes. This project showcases our commitment to modern design and functional elegance.',
        imageUrl: 'https://yourdigitalfirm.com/shouss/media/04-Sourav50x70/01_3D_SouravResidence.jpg',
    },
    {
        title: 'Elegant Duplex Retreat',
        description: 'This stylish duplex home blends natural textures with a minimalist white exterior. Designed for modern family living, it features open terraces, warm wooden ceilings, and a lush vertical garden for a refreshing urban escape.',
        imageUrl: 'https://yourdigitalfirm.com/shouss/media/16-3DFloorPlans/1-GF.jpg',
    },
    {
        title: 'Modern Corner Duplex',
        description: 'This neatly designed corner plot home combines functionality with a sleek urban aesthetic. The dual-access staircase and rooftop terrace offer flexible living, perfect for families who value both style and practicality.',
        imageUrl: 'https://yourdigitalfirm.com/shouss/media/16-3DFloorPlans/2-FF.jpg',
    },
    {
        title: 'Contemporary Urban Residence',
        description: 'This vibrant, multi-level home features a striking design with bold yellow accents and clean lines. Its modern aesthetic and smart use of space make it ideal for stylish city living.',
        imageUrl: 'https://yourdigitalfirm.com/shouss/media/16-3DFloorPlans/2-GF.jpg',
    },
    {
        title: 'Heritage-Inspired Family Home',
        description: 'This residence draws inspiration from traditional Indian homes, evident in its pitched roof and welcoming outdoor spaces. It provides a spacious and culturally rich environment for family life in India.',
        imageUrl: 'https://yourdigitalfirm.com/shouss/media/16-3DFloorPlans/3-FF.jpg',
    },
    {
        title: 'Elegant Modern Duplex',
        description: 'This stylish duplex features a clean, minimalist design with multiple balconies and a contemporary facade, offering bright and spacious living areas. Its refined aesthetic is perfect for upscale urban lifestyles.',
        imageUrl: 'https://yourdigitalfirm.com/shouss/media/16-3DFloorPlans/3-GF.jpg',
    },
    {
        title: 'Neoclassical Inspired Residence',
        description: 'This grand home showcases a classic, elegant design with prominent pillars, decorative window frames, and wrought-iron balconies, evoking a sense of timeless sophistication.',
        imageUrl: 'https://yourdigitalfirm.com/shouss/media/16-3DFloorPlans/5-FF.jpg',
    },
    {
        title: 'Charming South Indian Villa',
        description: 'This inviting home features a blend of contemporary design with subtle traditional elements, including a distinctive red-tiled roof and well-integrated balconies. It offers a comfortable and stylish living space, ideal for a modern Indian family.',
        imageUrl: 'https://yourdigitalfirm.com/shouss/media/16-3DFloorPlans/5-FF.jpg',
    },
];

export default function Project3dGrid() {
    const handleClick = (index) => {
        alert(`You clicked on project ${index + 1}`);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 3,
                py: 3,
                backgroundColor: '#000',
                justifyContent: 'center',
            }}
        >
            {projectData.map((project, index) => (
                <CardActionArea
                    key={index}
                    sx={{
                        position: 'relative',
                        width: { xs: '100%', sm: 'calc(50% - 12px)', md: 'calc(50% - 12px)' },
                        height: 350,
                        borderRadius: 2,
                        overflow: 'hidden',
                        backgroundImage: `url(${project.imageUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: 'flex',
                        alignItems: 'flex-end',
                        '&:hover .hoverOverlay': {
                            opacity: 1,
                            transform: 'translateY(0)',
                        },
                    }}
                >
                    {/* Gradient overlay */}
                    {/* <Box
                        sx={{
                            position: 'absolute',
                            width: '100%',
                            height: '32%',
                            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), rgb(0 0 0 / 34%))',
                            zIndex: 1,
                        }}
                    /> */}

                    {/* Info Section */}
                    {/* <Box
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            p: 2,
                            color: 'white',
                            zIndex: 2,
                        }}
                    >
                        <Typography variant="subtitle1" fontWeight="bold">
                            {project.title}
                        </Typography>
                        <Typography variant="body2">{project.description}</Typography>
                    </Box> */}

                    {/* Hover Overlay */}
                    {/* <Box
                        className="hoverOverlay"
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0,0,0,0.6)',
                            color: '#fff',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            opacity: 0,
                            transition: 'opacity 0.3s ease, transform 0.3s ease',
                            transform: 'translateY(10px)',
                            zIndex: 3,
                            cursor: 'pointer',
                            fontSize: '18px',
                            fontWeight: '500',

                            // Always show for mobile view
                            '@media (max-width:600px)': {
                                opacity: 1,
                                transform: 'translateY(0)',
                            },
                        }}
                        onClick={() => handleClick(index)}
                    >
                        <VisibilityIcon sx={{ mr: 1 }} />
                        <Typography variant="body1" fontWeight={500}>
                            View Project
                        </Typography>
                    </Box> */}

                </CardActionArea>

            ))}
        </Box>
    );
}
