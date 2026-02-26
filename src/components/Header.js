import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button, Stack, CircularProgress } from '@mui/material';
import siteConfig from '../siteConfig';
import heroImage from '../images/hero.jpg';

const Header = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

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
                onLoad={() => setImageLoaded(true)}
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
                    width: '90%'
                }}
            >
                <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                        mb: 2,
                        fontSize: { xs: 32, sm: 40 },
                        fontFamily: '"Annie Use Your Telescope", cursive',
                    }}
                >
                    {siteConfig.tagline}
                </Typography>

                {(siteConfig.page1 || siteConfig.page2) && (
                    <Stack
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                        alignItems="center"
                    >
                        {siteConfig.page1 && (
                            <Button
                                component={Link}
                                to="/page1"
                                variant="contained"
                                sx={{
                                    backgroundColor: 'white',
                                    color: siteConfig.primaryColor,
                                    fontSize: 18,
                                    width: 120,
                                    textDecoration: 'none',
                                    borderRadius: '50px',
                                    '&:hover': { backgroundColor: '#f0f0f0' },
                                    fontFamily: 'Alumni Sans',
                                }}
                            >
                                {siteConfig.page1.title}
                            </Button>
                        )}
                        {siteConfig.page2 && (
                            <Button
                                component={Link}
                                to="/page2"
                                variant="contained"
                                sx={{
                                    backgroundColor: 'white',
                                    color: siteConfig.primaryColor,
                                    fontSize: 18,
                                    width: 120,
                                    textDecoration: 'none',
                                    borderRadius: '50px',
                                    '&:hover': { backgroundColor: '#f0f0f0' },
                                    fontFamily: 'Alumni Sans',
                                }}
                            >
                                {siteConfig.page2.title}
                            </Button>
                        )}
                    </Stack>
                )}
            </Box>
        </Box>
    );
};

export default Header;
