import { Box, Container, Stack, Typography } from '@mui/material';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import React from 'react';

export default function ContactInfoComponent() {
    return (
        <Box
            sx={{
                backgroundColor: "var(--app-primary-color)",
                color: "var(--background)",
                py: 3,
            }}
        >
            <Container>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "30px", flexDirection: { xs: "column", md: "row" } }}>
                    <Box>
                        <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "30px" }}>
                            Have a question?
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: "16px" }}>
                            Call us today for expert assistance.
                        </Typography>
                    </Box>
                    <Box>
                        <Stack direction="row" spacing={2} alignItems="center" mt={{ xs: 2, md: 0 }}>
                            <PermPhoneMsgIcon sx={{ fontSize: 68 }} />
                            <Box>
                                <Typography variant="body1" sx={{ fontSize: { md: "30px", xs: "25px", sm: "25px" }, fontWeight: "bold" }}>+91 938 098 8205</Typography>
                                <Typography variant="body1" sx={{ fontSize: { md: "30px", xs: "25px", sm: "25px" }, fontWeight: "bold" }}>+91 636 960 7513</Typography>
                            </Box>
                        </Stack>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
