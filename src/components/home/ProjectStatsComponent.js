// ProjectStats.tsx

import React from "react";
import {
  Box,
  Typography,
  Container,
  Stack,
  Grid
} from "@mui/material";
import {
  Engineering,
  Home,
  Star,
  EmojiEmotions,
} from "@mui/icons-material";

const stats = [
  {
    icon: <Engineering sx={{ fontSize: 68 }} />,
    count: "300+",
    label1: "Finished Design",
    label2: "Projects",
  },
  {
    icon: <Home sx={{ fontSize: 68 }} />,
    count: "12+",
    label1: "Construction",
    label2: "Projects",
  },
  {
    icon: <Star sx={{ fontSize: 68 }} />,
    count: "300+",
    label1: "Satisfied",
    label2: "Customers",
  },
  {
    icon: <EmojiEmotions sx={{ fontSize: 68 }} />,
    count: "2,000+",
    label1: "Happy",
    label2: "Owners",
  },
];

const ProjectStatsComponent = () => {
  return (
    <>
      {/* Stats Section */}
      <Box sx={{ backgroundColor: "#000", color: "#fff", py: 8 }}>
        <Container>
          <Grid container spacing={12} justifyContent="center">
            {stats.map((stat, index) => (
              <Grid key={index} xs={12} sm={6} md={3}>
                <Stack alignItems="center" spacing={2}>
                  <Box
                    sx={{
                      backgroundColor: "var(--app-primary-color)",
                      width: 128,
                      height: 128,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 2,
                    }}
                  >
                    {stat.icon}
                  </Box>
                  <Typography variant="h5" fontWeight="bold" sx={{
                    fontSize: "38px"
                  }}>
                    {stat.count}
                  </Typography>
                  <Typography align="center">
                    {stat.label1}
                    <br />
                    {stat.label2}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ProjectStatsComponent;
