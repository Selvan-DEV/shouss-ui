"use client";

import React from 'react';
import {
    Box,
    Grid,
    Typography,
    TextField,
    Paper,
    Container,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
    Email as EmailIcon,
    LocationOn as LocationIcon,
} from '@mui/icons-material';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import CustomButton from '../custom-button/CustomButton';
import { AppContants } from '@/constants/AppConstants';

const schema = yup.object({
    fullName: yup.string().required('Full name is required'),
    phone: yup.string().required('Phone number is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    message: yup.string().required('Please describe your project'),
});

const ContactUsComponent = (props) => {
    const { isModal, handleClose } = props;
    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            fullName: '',
            phone: '',
            email: '',
            message: '',
        },
    });

    const onSubmit = async (data) => {
        const res = await fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify({
                name: data.fullName,
                email: data.email,
                message: data.message,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const result = await res.json();
        if (result.success) {
            reset();
            if (handleClose) {
                handleClose();
            }
        } else {
            console.error("Failed to send. Try again.");
        }

    };

    return (
        <Box sx={{ padding: '0 15px', marginTop: !isModal ? "-30px" : "10px" }}>
            {/* Contact Form */}
            <Box sx={{
                backgroundColor: !isModal ? "var(--foreground)" : "#FFFF",
                paddingBottom: "20px", borderBottomRightRadius: "10px", borderBottomLeftRadius: "10px"
            }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Container>
                        <Grid container spacing={2} maxWidth={"md"} mx="auto">
                            <Grid size={{ xs: 12 }}>
                                <Controller
                                    name="fullName"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            label="Your Full Name"
                                            variant="outlined"
                                            error={!!errors.fullName}
                                            helperText={errors.fullName?.message}
                                            sx={{
                                                "& .MuiOutlinedInput-root": {
                                                    backgroundColor: !isModal ? "#000" : "#FFFF",
                                                    borderRadius: 1,
                                                    "& fieldset": {
                                                        borderColor: "gray",
                                                    },
                                                    "&:hover fieldset": {
                                                        borderColor: "var(--app-primary-color)",
                                                    },
                                                    "&.Mui-focused fieldset": {
                                                        borderColor: "var(--app-primary-color)",
                                                    },
                                                },
                                                "& .MuiInputBase-input": {
                                                    color: !isModal ? "white" : "#000",
                                                },
                                                "& .MuiInputLabel-root": {
                                                    color: "#aaa",
                                                },
                                                "& label.Mui-focused": {
                                                    color: "#e53935",
                                                },
                                            }}
                                        />
                                    )}
                                />
                            </Grid>

                            <Grid size={{ xs: 12 }}>
                                <Controller
                                    name="phone"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            label="Your Phone"
                                            variant="outlined"
                                            error={!!errors.phone}
                                            helperText={errors.phone?.message}
                                            sx={{
                                                "& .MuiOutlinedInput-root": {
                                                    backgroundColor: !isModal ? "#000" : "#FFFF",
                                                    borderRadius: 1,
                                                    "& fieldset": {
                                                        borderColor: "gray",
                                                    },
                                                    "&:hover fieldset": {
                                                        borderColor: "var(--app-primary-color)",
                                                    },
                                                    "&.Mui-focused fieldset": {
                                                        borderColor: "var(--app-primary-color)",
                                                    },
                                                },
                                                "& .MuiInputBase-input": {
                                                    color: !isModal ? "white" : "#000",
                                                },
                                                "& .MuiInputLabel-root": {
                                                    color: "#aaa",
                                                },
                                                "& label.Mui-focused": {
                                                    color: "#e53935",
                                                },
                                            }}
                                        />
                                    )}
                                />
                            </Grid>

                            <Grid size={{ xs: 12 }}>
                                <Controller
                                    name="email"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            label="Your Email"
                                            variant="outlined"
                                            error={!!errors.email}
                                            helperText={errors.email?.message}
                                            sx={{
                                                "& .MuiOutlinedInput-root": {
                                                    backgroundColor: !isModal ? "#000" : "#FFFF",
                                                    borderRadius: 1,
                                                    "& fieldset": {
                                                        borderColor: "gray",
                                                    },
                                                    "&:hover fieldset": {
                                                        borderColor: "var(--app-primary-color)",
                                                    },
                                                    "&.Mui-focused fieldset": {
                                                        borderColor: "var(--app-primary-color)",
                                                    },
                                                },
                                                "& .MuiInputBase-input": {
                                                    color: !isModal ? "white" : "#000",
                                                },
                                                "& .MuiInputLabel-root": {
                                                    color: "#aaa",
                                                },
                                                "& label.Mui-focused": {
                                                    color: "#e53935",
                                                },
                                            }}
                                        />
                                    )}
                                />

                            </Grid>

                            <Grid size={{ xs: 12 }}>
                                <Controller
                                    name="message"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            label="Describe about your dream project"
                                            variant="outlined"
                                            multiline
                                            rows={4}
                                            error={!!errors.message}
                                            helperText={errors.message?.message}
                                            sx={{
                                                "& .MuiOutlinedInput-root": {
                                                    backgroundColor: !isModal ? "#000" : "#FFFF",
                                                    borderRadius: 1,
                                                    "& fieldset": {
                                                        borderColor: "gray",
                                                    },
                                                    "&:hover fieldset": {
                                                        borderColor: "var(--app-primary-color)",
                                                    },
                                                    "&.Mui-focused fieldset": {
                                                        borderColor: "var(--app-primary-color)",
                                                    },
                                                },
                                                "& .MuiInputBase-input": {
                                                    color: !isModal ? "white" : "#000",
                                                },
                                                "& .MuiInputLabel-root": {
                                                    color: "#aaa",
                                                },
                                                "& label.Mui-focused": {
                                                    color: "#e53935",
                                                },
                                            }}
                                        />
                                    )}
                                />
                            </Grid>

                            <Grid size={{ xs: 12, sm: 6 }} py={3}>
                                <CustomButton name="Submit" width="182px" />
                            </Grid>
                        </Grid>
                    </Container>
                </form>
            </Box>
            {!isModal && (
                <Container>
                    {/* Contact Info Cards */}
                    <Box sx={{ p: 4, backgroundColor: '#fff' }}>
                        <Typography
                            variant="subtitle1"
                            textAlign={"center"}
                            sx={{ fontWeight: 500, fontSize: "18px", color: "var(--app-primary-color)", mb: 4 }}
                        >
                            Reach Us
                        </Typography>

                        <Grid container spacing={3} justifyContent="center">
                            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                                <Paper
                                    sx={{
                                        backgroundColor: '#c72d3d',
                                        height: '100%',
                                        color: 'white',
                                        p: 3,
                                        borderRadius: 2,
                                        textAlign: "center"
                                    }}
                                    elevation={4}
                                >

                                    <PermPhoneMsgIcon fontSize="large" />
                                    <Typography variant="subtitle1" mt={1}>
                                        Call Us
                                    </Typography>
                                    <Typography variant="body1" sx={{ fontSize: "18px" }}>+91 938 098 8205</Typography>
                                    <Typography variant="body1" sx={{ fontSize: "18px" }}>+91 636 960 7513</Typography>

                                </Paper>
                            </Grid>

                            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                                <Paper
                                    sx={{
                                        backgroundColor: '#c72d3d',
                                        color: 'white',
                                        height: '100%',
                                        p: 3,
                                        borderRadius: 2,
                                        textAlign: 'center',
                                    }}
                                    elevation={4}
                                >
                                    <EmailIcon fontSize="large" />
                                    <Typography variant="subtitle1" mt={1}>
                                        Our Email
                                    </Typography>
                                    <Typography variant="body1">{AppContants.PrimaryEmail}</Typography>
                                    <Typography variant="body1">{AppContants.SecondaryEmail}</Typography>
                                </Paper>
                            </Grid>

                            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                                <Paper
                                    sx={{
                                        backgroundColor: '#c72d3d',
                                        color: 'white',
                                        height: '100%',
                                        p: 3,
                                        borderRadius: 2,
                                        textAlign: 'center',
                                    }}
                                    elevation={4}
                                >
                                    <LocationIcon fontSize="large" />
                                    <Typography variant="subtitle1" mt={1}>
                                        Our Location
                                    </Typography>
                                    <Typography variant="body1">
                                        164, 1st Cross Rd, Judicial Colony,<br />
                                        AECS Layout 1st Stage, Sanjayanagara, <br />
                                        Bengaluru, Karnataka-560094
                                    </Typography>
                                </Paper>
                            </Grid>
                        </Grid>

                        <Box sx={{ my: 6 }}>
                            <iframe
                                title="Google Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0549542996687!2d77.57137708417649!3d13.032172480789862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17c2f7d39563%3A0x743d5290889a943b!2s164%2C%201st%20Cross%20Rd%2C%20Judicial%20Colony%2C%20AECS%20Layout%201st%20Stage%2C%20Sanjayanagara%2C%20Bengaluru%2C%20Karnataka%20560094!5e0!3m2!1sen!2sin!4v1749650894295!5m2!1sen!2sin"
                                width="100%"
                                height="500"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </Box>
                    </Box>
                </Container>
            )}

        </Box>
    );
};

export default ContactUsComponent;
