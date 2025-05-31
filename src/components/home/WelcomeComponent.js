'use client';

import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import Image from 'next/image';
import CustomButton from '../custom-button/CustomButton';
import { useRouter } from 'next/navigation';

export default function WelcomeComponent() {
  const router = useRouter();

  return (
    <Box px={{ xs: 2, sm: 4, md: 10 }} py={6}>
      <Container>
        {/* Top Section */}
        <Box textAlign="center" mb={6}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 500, fontSize: "18px", color: "var(--app-primary-color)" }}
          >
            Welcome to the sHouss Constructions
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
            Where We Build Your Visions
          </Typography>

          <Typography
            variant="body1"
            mt={2}
            maxWidth="md"
            mx="auto"
          >
            At sHouss Constructions, we don’t just build structures—we build dreams.
            Whether it’s your dream home, a commercial space, or a renovation project,
            we bring your vision to life with quality craftsmanship and unwavering commitment.
          </Typography>
        </Box>

        {/* Bottom Section with Image and Text */}
        <Grid container spacing={4}>
          {/* Left Image */}
          <Grid size={{ xs: 12, sm: 6, md: 6 }}>
            <Image
              src="/images/welcome-setion-image.png"
              alt="Construction Building"
              width={651}
              height={352}
              style={{ width: '100%', height: 'auto', borderRadius: 12 }}
            />
          </Grid>

          {/* Right Text */}
          <Grid size={{ xs: 12, sm: 6, md: 6 }}>
            <Typography variant="body1" paragraph>
              At sHouss Constructions, we don’t just build structures—we build dreams.
              Whether it’s your dream home, a commercial space, or a renovation project,
              we bring your vision to life with quality craftsmanship and unwavering commitment.
            </Typography>

            <Typography variant="body1" paragraph>
              Let us help you turn your ideas into reality. Explore our services and discover how we can create
              something truly remarkable—together.
            </Typography>

            <Box mt={3}>
              <CustomButton
                onClick={() => router.push('/contact')}
                name="Get a Free Quote"
                width="200px"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
