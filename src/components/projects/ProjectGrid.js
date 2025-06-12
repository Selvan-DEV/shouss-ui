'use client';
import React, { useState } from 'react';
import { Box, Typography, CardActionArea } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ProjectsImageModal from './ProjectsImageModal';

const projectData = [
    {
        title: 'Twin Villa – Karaikudi',
        description: 'This modern twin villa was successfully delivered to a client in Karaikudi. With striking lines and warm wood accents, it offers a blend of elegance and contemporary living.',
        imageUrl: 'https://yourdigitalfirm.com/shouss/media/01-GowdwinKaraikudi/R1_Sample_Karaikudi150924.jpg',
        projectDetails: {
            squarFit: "2000/sq.ft",
            projectImages: [
                "https://yourdigitalfirm.com/shouss/media/01-GowdwinKaraikudi/Dr.SandeepRevised2025.jpg",
                "https://yourdigitalfirm.com/shouss/media/01-GowdwinKaraikudi/R1_Sample_Karaikudi150924.jpg"
            ]
        }
    },
    {
        title: 'Urban Elevation Residence',
        description: 'A sophisticated three-storey urban home designed with minimalist textures and premium finishes. This project showcases our commitment to modern design and functional elegance.',
        imageUrl: 'https://yourdigitalfirm.com/shouss/media/02-Prapul/01_8_Photo.jpg',
        projectDetails: {
            squarFit: "2000/sq.ft",
            projectImages: [
                "https://yourdigitalfirm.com/shouss/media/02-Prapul/01_8_Photo.jpg",
                "https://yourdigitalfirm.com/shouss/media/02-Prapul/01_9_Photo.jpg",
                "https://yourdigitalfirm.com/shouss/media/02-Prapul/01_10_Photo.jpg",
                "https://yourdigitalfirm.com/shouss/media/02-Prapul/01_11_Photo.jpg",
            ]
        }
    },
    {
        title: 'Elegant Duplex Retreat',
        description: 'This stylish duplex home blends natural textures with a minimalist white exterior. Designed for modern family living, it features open terraces, warm wooden ceilings, and a lush vertical garden for a refreshing urban escape.',
        imageUrl: 'https://yourdigitalfirm.com/shouss/media/06-JenarthanCoimbatore/PosterQuality_Jena_Original.jpg',
        projectDetails: {
            squarFit: "2000/sq.ft",
            projectImages: []
        }
    },
    {
        title: 'Modern Corner Duplex',
        description: 'This neatly designed corner plot home combines functionality with a sleek urban aesthetic. The dual-access staircase and rooftop terrace offer flexible living, perfect for families who value both style and practicality.',
        imageUrl: 'https://yourdigitalfirm.com/shouss/media/07-MalliBangalore/MALLIKARJUNA.jpg',
        projectDetails: {
            squarFit: "2000/sq.ft",
            projectImages: [
                "https://yourdigitalfirm.com/shouss/media/07-MalliBangalore/MALLIKARJUNA.jpg",
                "https://yourdigitalfirm.com/shouss/media/07-MalliBangalore/MALLIKARJUNA_2.jpg",
                "https://yourdigitalfirm.com/shouss/media/07-MalliBangalore/MALLKARJUNAfinalrender27-10..jpg",
            ]
        }
    },
    {
        title: 'Contemporary Urban Residence',
        description: 'This vibrant, multi-level home features a striking design with bold yellow accents and clean lines. Its modern aesthetic and smart use of space make it ideal for stylish city living.',
        imageUrl: 'https://yourdigitalfirm.com/shouss/media/08-SaranNagercoil/IMG-20170206-WA0036.jpg',
        projectDetails: {
            squarFit: "2000/sq.ft",
            projectImages: [
                "https://yourdigitalfirm.com/shouss/media/08-SaranNagercoil/IMG-20170206-WA0036.jpg",
                "https://yourdigitalfirm.com/shouss/media/08-SaranNagercoil/IMG-20170206-WA0034.jpg",
                "https://yourdigitalfirm.com/shouss/media/08-SaranNagercoil/IMG-20170206-WA0035.jpg",
                "https://yourdigitalfirm.com/shouss/media/08-SaranNagercoil/IMG-20170206-WA0033.jpg",
            ]
        }
    },
    {
        title: 'Heritage-Inspired Family Home',
        description: 'This residence draws inspiration from traditional Indian homes, evident in its pitched roof and welcoming outdoor spaces. It provides a spacious and culturally rich environment for family life in India.',
        imageUrl: 'https://yourdigitalfirm.com/shouss/media/09-SeetharamNagercoil/Seetha_Finalevening_Revised102023.jpg',
        projectDetails: {
            squarFit: "2000/sq.ft",
            projectImages: [
                "https://yourdigitalfirm.com/shouss/media/09-SeetharamNagercoil/A1.jpg",
                "https://yourdigitalfirm.com/shouss/media/09-SeetharamNagercoil/CTM_Exterior_241223.jpg",
                "https://yourdigitalfirm.com/shouss/media/09-SeetharamNagercoil/CTM_ExteriorF_241223.jpg",
                "https://yourdigitalfirm.com/shouss/media/09-SeetharamNagercoil/CTM_ExteriorR_241223.jpg",
                "https://yourdigitalfirm.com/shouss/media/09-SeetharamNagercoil/CTM_Rev_120124_02_FinalE.jpg",
                "https://yourdigitalfirm.com/shouss/media/09-SeetharamNagercoil/Prem_06012024.jpg",
                "https://yourdigitalfirm.com/shouss/media/09-SeetharamNagercoil/Seetha_FinalDayFrontFinal_Render29032023.jpg",
                "https://yourdigitalfirm.com/shouss/media/09-SeetharamNagercoil/Seetha_Finalevening_Revised102023.jpg",
            ]
        }
    },
    {
        title: 'Elegant Modern Duplex',
        description: 'This stylish duplex features a clean, minimalist design with multiple balconies and a contemporary facade, offering bright and spacious living areas. Its refined aesthetic is perfect for upscale urban lifestyles.',
        imageUrl: 'https://yourdigitalfirm.com/shouss/media/13-AarushNagercoil/df.jpg',
        projectDetails: {
            squarFit: "2000/sq.ft",
            projectImages: [
                "https://yourdigitalfirm.com/shouss/media/13-AarushNagercoil/m11.jpg",
                "https://yourdigitalfirm.com/shouss/media/13-AarushNagercoil/m1_1.jpg",
                "https://yourdigitalfirm.com/shouss/media/13-AarushNagercoil/df.jpg",
            ]
        }
    },
    {
        title: 'Neoclassical Inspired Residence',
        description: 'This grand home showcases a classic, elegant design with prominent pillars, decorative window frames, and wrought-iron balconies, evoking a sense of timeless sophistication.',
        imageUrl: 'https://yourdigitalfirm.com/shouss/media/14-RakeshBangalure/RAKESHBASIFINAL.bmp',
        projectDetails: {
            squarFit: "2000/sq.ft",
            projectImages: [
                "https://yourdigitalfirm.com/shouss/media/14-RakeshBangalure/RAKESHBASIFINAL.bmp",
                "https://yourdigitalfirm.com/shouss/media/14-RakeshBangalure/RAKESHBASIGARDENDESIGN_1_1.jpg",
                "https://yourdigitalfirm.com/shouss/media/14-RakeshBangalure/RAKESHBASIGARDENDESIGN_2.jpg",
                "https://yourdigitalfirm.com/shouss/media/14-RakeshBangalure/RAKESHBASIGARDENDESIGN_3.jpg",
            ]
        }
    },
    {
        title: 'Charming South Indian Villa',
        description: 'This inviting home features a blend of contemporary design with subtle traditional elements, including a distinctive red-tiled roof and well-integrated balconies. It offers a comfortable and stylish living space, ideal for a modern Indian family.',
        imageUrl: 'https://yourdigitalfirm.com/shouss/media/15-DeviAnandh/01_10_Photo.jpg',
        projectDetails: {
            squarFit: "2000/sq.ft",
            projectImages: [
                "https://yourdigitalfirm.com/shouss/media/15-DeviAnandh/01_10_Photo.jpg",
                "https://yourdigitalfirm.com/shouss/media/15-DeviAnandh/01_7_Photo.jpg",
                "https://yourdigitalfirm.com/shouss/media/15-DeviAnandh/01_8_Photo.jpg",
                "https://yourdigitalfirm.com/shouss/media/15-DeviAnandh/01_9_Photo.jpg",
            ]
        }
    },
    {
        title: 'Mediterranean-Inspired Villa',
        description: 'This charming home features a distinctive blend of warm stone cladding, an arched entrance, and a red-tiled roof, exuding a Mediterranean charm.',
        imageUrl: 'https://yourdigitalfirm.com/shouss/media/17-VillaProjectsBangalore/222.jpg',
        projectDetails: {
            squarFit: "2000/sq.ft",
            projectImages: [
                "https://yourdigitalfirm.com/shouss/media/17-VillaProjectsBangalore/222.jpg",
                "https://yourdigitalfirm.com/shouss/media/17-VillaProjectsBangalore/sHAJA_1.jpg",
            ]
        }
    },
    {
        title: 'Expansive Suburban Residence',
        description: 'This sprawling home boasts a classic yet contemporary design with multiple rooflines and extensive verandas, blending seamlessly into a lush, green setting.',
        imageUrl: 'https://yourdigitalfirm.com/shouss/media/18-AnupGosh/F1HQ.jpg',
        projectDetails: {
            squarFit: "2000/sq.ft",
            projectImages: [
                "https://yourdigitalfirm.com/shouss/media/18-AnupGosh/F1HQ.jpg",
                "https://yourdigitalfirm.com/shouss/media/18-AnupGosh/F3.jpg",
            ]
        }
    },
    {
        title: 'Stylish Compact Residence',
        description: 'This modern house offers a contemporary design with a minimalist aesthetic, featuring a flat roofline and a integrated garage.',
        imageUrl: 'https://yourdigitalfirm.com/shouss/media/20-VigneshNagercoil/V2-edit.jpg',
        projectDetails: {
            squarFit: "2000/sq.ft",
            projectImages: [
                "https://yourdigitalfirm.com/shouss/media/20-VigneshNagercoil/V2-edit.jpg",
                "https://yourdigitalfirm.com/shouss/media/20-VigneshNagercoil/Vignesh_villa.jpg",
            ]
        }
    },
    {
        title: 'Contemporary Budget Villa',
        description: 'This modern villa features a clean, minimalist design with contrasting textures and a prominent car porch, offering a contemporary aesthetic within a practical layout. It provides a stylish yet economical living solution, perfect for those seeking modern design on a budget in India.',
        imageUrl: 'https://yourdigitalfirm.com/shouss/media/21-BudgetHomeNagercoil/C2.jpg',
        projectDetails: {
            squarFit: "2000/sq.ft",
            projectImages: [
                "https://yourdigitalfirm.com/shouss/media/21-BudgetHomeNagercoil/12CC.jpg",
                "https://yourdigitalfirm.com/shouss/media/21-BudgetHomeNagercoil/angle_heaven.bmp",
                "https://yourdigitalfirm.com/shouss/media/21-BudgetHomeNagercoil/Heavenbycendrol.bmp",
                "https://yourdigitalfirm.com/shouss/media/21-BudgetHomeNagercoil/LEFTJPEG.jpg",
                "https://yourdigitalfirm.com/shouss/media/21-BudgetHomeNagercoil/MALLKARJUNAfinalrender_27-10.jpg",
                "https://yourdigitalfirm.com/shouss/media/21-BudgetHomeNagercoil/RIGHT.jpg",
                "https://yourdigitalfirm.com/shouss/media/21-BudgetHomeNagercoil/w4.jpg",
                "https://yourdigitalfirm.com/shouss/media/21-BudgetHomeNagercoil/C2.jpg",
            ]
        }
    },
    {
        title: 'Modern Vertical Home',
        description: 'This striking home features a unique vertical design with a prominent peaked roof and intricate screen patterns, blending contemporary aesthetics with traditional Indian architectural cues.',
        imageUrl: 'https://yourdigitalfirm.com/shouss/media/22-SanthoshBangalore/Mr.Santhosh_002.jpg',
        projectDetails: {
            squarFit: "2000/sq.ft",
            projectImages: []
        }
    },
];

export default function ProjectGrid() {
    const [open, setOpen] = useState(false);
    const [selectedProject, onSelectProject] = useState(null);


    const handleClick = (index) => {
        const project = projectData[index];
        if (project.projectDetails.projectImages.length === 0) {
            return;
        }
        onSelectProject(project);
        setOpen(true);
    };

    return (
        <>
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
                        <Box
                            sx={{
                                position: 'absolute',
                                width: '100%',
                                height: '32%',
                                background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), rgb(0 0 0 / 34%))',
                                zIndex: 1,
                            }}
                        />

                        {/* Info Section */}
                        <Box
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
                        </Box>

                        {/* Hover Overlay */}
                        <Box
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
                        </Box>

                    </CardActionArea>
                ))}

            </Box>
            <ProjectsImageModal open={open} setOpen={setOpen} selectedProject={selectedProject} />
        </>
    );
}
