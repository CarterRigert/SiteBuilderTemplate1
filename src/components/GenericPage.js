import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, CircularProgress } from '@mui/material';
import siteConfig from '../siteConfig';
import page1Image from '../images/page1.jpg';
import page2Image from '../images/page2.jpg';

const images = { page1: page1Image, page2: page2Image };

const GenericPage = ({ title, content, image }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const bannerSrc = images[image];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!imageLoaded) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <CircularProgress sx={{ color: siteConfig.primaryColor }} />
                <Box
                    component="img"
                    src={bannerSrc}
                    alt=""
                    onLoad={() => setImageLoaded(true)}
                    sx={{ display: 'none' }}
                />
            </Box>
        );
    }

    return (
        <>
            <Box
                component="header"
                sx={{
                    position: 'relative',
                    width: '100%',
                    overflow: 'hidden'
                }}
            >
                <Box
                    component="img"
                    src={bannerSrc}
                    alt={title}
                    sx={{
                        width: '100%',
                        height: 'auto',
                        display: 'block'
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
                            fontSize: 40,
                            fontFamily: '"Annie Use Your Telescope", cursive',
                        }}
                    >
                        {title.toUpperCase()}
                    </Typography>
                </Box>
            </Box>

            <Container
                maxWidth="sm"
                sx={{
                    py: 5,
                    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    fontWeight: 400,
                }}
            >
                <Typography
                    align="center"
                    sx={{
                        whiteSpace: 'pre-line',
                        fontFamily: 'inherit',
                    }}
                >
                    {content}
                </Typography>
            </Container>
        </>
    );
};

export default GenericPage;
