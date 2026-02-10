import React from 'react';
import { Box, Container, Typography, Link, Stack } from '@mui/material';
import { EmailOutlined, PhoneOutlined, LocationOnOutlined } from '@mui/icons-material';
import siteConfig from '../siteConfig';

const Contact = () => {
    const { email, phone, address } = siteConfig.contact;

    return (
        <Box component="section" sx={{ py: 4 }}>
            <Container>
                <Typography
                    fontSize={30}
                    sx={{
                        fontWeight: 400,
                        letterSpacing: 0,
                        fontFamily: 'Alumni Sans',
                        color: '#31312C'
                    }}
                >
                    CONTACT
                </Typography>

                <Stack spacing={2}>
                    {email && (
                        <Link
                            href={`mailto:${email}`}
                            underline="none"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.5,
                                color: '#31312C',
                                fontFamily: 'Alumni Sans',
                            }}
                        >
                            <EmailOutlined sx={{ fontSize: 24 }} />
                            <Typography
                                fontSize={18}
                                sx={{
                                    color: '#31312C',
                                    lineHeight: 1,
                                    '&:hover': { color: siteConfig.primaryColor }
                                }}
                            >
                                {email}
                            </Typography>
                        </Link>
                    )}

                    {phone && (
                        <Link
                            href={`tel:${phone}`}
                            underline="none"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.5,
                                color: '#31312C',
                                fontFamily: 'Alumni Sans',
                            }}
                        >
                            <PhoneOutlined sx={{ fontSize: 24 }} />
                            <Typography
                                fontSize={18}
                                sx={{
                                    color: '#31312C',
                                    lineHeight: 1,
                                    '&:hover': { color: siteConfig.primaryColor }
                                }}
                            >
                                {phone}
                            </Typography>
                        </Link>
                    )}

                    {address && (
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.5,
                                color: '#31312C',
                                fontFamily: 'Alumni Sans',
                            }}
                        >
                            <LocationOnOutlined sx={{ fontSize: 24 }} />
                            <Typography
                                fontSize={18}
                                sx={{ color: '#31312C' }}
                            >
                                {address}
                            </Typography>
                        </Box>
                    )}
                </Stack>
            </Container>
        </Box>
    );
};

export default Contact;
