import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Container, Box, Stack } from '@mui/material';
import siteConfig from '../siteConfig';
import Logo from '../images/logo.png';

const Navbar = () => {
    return (
        <AppBar position="sticky" sx={{ backgroundColor: 'white', boxShadow: 'none', zIndex: 1000 }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ justifyContent: 'center', flexDirection: 'column', py: 1 }}>
                    <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <Box
                            component="img"
                            src={Logo}
                            alt={siteConfig.siteName}
                            sx={{ height: 50 }}
                        />
                    </Link>

                    {(siteConfig.page1 || siteConfig.page2) && (
                        <Stack direction="row" spacing={2} sx={{ mt: 0.5 }}>
                            {siteConfig.page1 && (
                                <Link
                                    to="/page1"
                                    style={{
                                        textDecoration: 'none',
                                        color: siteConfig.primaryColor,
                                        fontFamily: 'Alumni Sans',
                                        fontSize: 16
                                    }}
                                >
                                    {siteConfig.page1.title}
                                </Link>
                            )}
                            {siteConfig.page2 && (
                                <Link
                                    to="/page2"
                                    style={{
                                        textDecoration: 'none',
                                        color: siteConfig.primaryColor,
                                        fontFamily: 'Alumni Sans',
                                        fontSize: 16
                                    }}
                                >
                                    {siteConfig.page2.title}
                                </Link>
                            )}
                        </Stack>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
