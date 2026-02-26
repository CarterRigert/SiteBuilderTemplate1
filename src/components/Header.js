import React, { useState } from 'react';
import { Box, Typography, Button, CircularProgress } from '@mui/material';
import siteConfig from '../siteConfig';
import heroImage from '../images/hero.jpg';

const Header = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const scrollDown = () => {
        const target = document.getElementById('about') || document.getElementById('services') || document.getElementById('contact');
        target?.scrollIntoView({ behavior: 'smooth' });
    };

    if (!imageLoaded) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <CircularProgress sx={{ color: siteConfig.primaryColor }} />
                <Box
                    component="img"
                    src={heroImage}
                    alt=""
                    onLoad={() => setImageLoaded(true)}
                    sx={{ display: 'none' }}
                />
            </Box>
        );
    }

    return (
        <Box
            component="header"
            sx={{
                position: 'relative',
                width: '100%',
                height: { xs: '50vh', sm: '60vh', md: '70vh' },
                overflow: 'hidden',
            }}
        >
            <Box
                component="img"
                src={heroImage}
                alt={siteConfig.siteName}
                sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'white',
                    textAlign: 'center',
                    width: '90%',
                }}
            >
                <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                        mb: 3,
                        fontSize: { xs: 32, sm: 40 },
                        fontFamily: '"Annie Use Your Telescope", cursive',
                    }}
                >
                    {siteConfig.tagline}
                </Typography>
                <Button
                    onClick={scrollDown}
                    variant="contained"
                    sx={{
                        backgroundColor: 'white',
                        color: siteConfig.primaryColor,
                        fontSize: 18,
                        px: 4,
                        borderRadius: '50px',
                        '&:hover': { backgroundColor: '#f0f0f0' },
                        fontFamily: '"Alumni Sans", sans-serif',
                        boxShadow: 'none',
                    }}
                >
                    Learn More
                </Button>
            </Box>
        </Box>
    );
};

export default Header;
