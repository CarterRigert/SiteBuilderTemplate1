import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import Layout from './components/Layout';
import GenericPage from './components/GenericPage';
import siteConfig from './siteConfig';
import { HashRouter, Routes, Route } from 'react-router-dom';

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    {siteConfig.page1 && (
                        <Route
                            path="page1"
                            element={
                                <GenericPage
                                    title={siteConfig.page1.title}
                                    content={siteConfig.page1.content}
                                    image="page1"
                                />
                            }
                        />
                    )}
                    {siteConfig.page2 && (
                        <Route
                            path="page2"
                            element={
                                <GenericPage
                                    title={siteConfig.page2.title}
                                    content={siteConfig.page2.content}
                                    image="page2"
                                />
                            }
                        />
                    )}
                    <Route path="*" element="Page Not Found" />
                </Route>
            </Routes>
        </HashRouter>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
