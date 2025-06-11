import React from "react";
import {
    Box,
    Typography,
    Card,
    CardMedia,
    Container,
    Grid
} from "@mui/material";
import ProjectStatsComponent from "./ProjectStatsComponent";

const projects = [
    { id: 1, image: "/images/RecentProject/project1.jpg" },
    { id: 2, image: "/images/RecentProject/project2.jpg" },
    { id: 3, image: "/images/RecentProject/project3.jpg" },
    { id: 4, image: "/images/RecentProject/project4.jpg" },
];

const RecentProjects = () => {
    return (
        <Box sx={{ backgroundColor: "#000", color: "#fff", pt: 8 }}>
            <Container>
                {/* Header Section */}
                <Grid container spacing={4} alignItems="center">
                    <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                        <Typography
                            variant="subtitle2"
                            sx={{ color: "var(--app-primary-color)", fontWeight: 500 }}
                        >
                            Crafting Spaces, Creating Futures
                        </Typography>
                        <Typography
                            variant="h3"
                            component="h2"
                            sx={{ fontWeight: "bold", mt: 1 }}
                        >
                            Our Recent Projects
                        </Typography>
                    </Grid>
                </Grid>

                {/* Project Cards Section */}
                <Grid container spacing={4} sx={{ mt: 4 }}>
                    <Grid key={projects[0].id} size={{ xs: 12, sm: 6, md: 7 }}>
                        <Card sx={{ borderRadius: 2, overflow: "hidden" }}>
                            <CardMedia
                                component="img"
                                image={projects[0].image}
                                alt={`projects ${projects[0].id}`}
                                sx={{
                                    width: "100%",
                                    height: 394,
                                    objectFit: "cover",
                                }}
                            />
                        </Card>
                    </Grid>

                    <Grid key={projects[1].id} size={{ xs: 12, sm: 6, md: 5 }}>
                        <Card sx={{ borderRadius: 2, overflow: "hidden" }}>
                            <CardMedia
                                component="img"
                                image={projects[1].image}
                                alt={`projects ${projects[1].id}`}
                                sx={{
                                    width: "100%",
                                    height: 394,
                                    objectFit: "cover",
                                }}
                            />
                        </Card>
                    </Grid>

                    <Grid key={projects[3].id} size={{ xs: 12, sm: 6, md: 5 }}>
                        <Card sx={{ borderRadius: 2, overflow: "hidden" }}>
                            <CardMedia
                                component="img"
                                image={projects[3].image}
                                alt={`projects ${projects[3].id}`}
                                sx={{
                                    width: "100%",
                                    height: 394,
                                    objectFit: "cover",
                                }}
                            />
                        </Card>
                    </Grid>

                    <Grid key={projects[2].id} size={{ xs: 12, sm: 6, md: 7 }}>
                        <Card sx={{ borderRadius: 2, overflow: "hidden" }}>
                            <CardMedia
                                component="img"
                                image={projects[2].image}
                                alt={`projects ${projects[2].id}`}
                                sx={{
                                    width: "100%",
                                    height: 394,
                                    objectFit: "cover",
                                }}
                            />
                        </Card>
                    </Grid>
                </Grid>
                <ProjectStatsComponent />
            </Container>
        </Box>
    );
};

export default RecentProjects;
