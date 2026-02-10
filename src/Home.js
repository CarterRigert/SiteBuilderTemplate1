import Header from './components/Header';
import { useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import siteConfig from './siteConfig';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="Home">
            <Header />
            {siteConfig.aboutText && (
                <Container maxWidth="sm" sx={{ py: 5 }}>
                    <Typography
                        align="center"
                        sx={{
                            fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                            whiteSpace: 'pre-line',
                        }}
                    >
                        {siteConfig.aboutText}
                    </Typography>
                </Container>
            )}
        </div>
    );
};

export default Home;
