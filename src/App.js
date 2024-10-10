import React, { useState, useEffect, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/Header/Header';
import HeaderAll from './components/Header/HeaderAll'; // Import HeaderAll
import SideNav from './components/SideNav';
import HeroSection from './components/HeroSection';
import ProductSection from './components/ProductSection';
import ProductPage from './components/ProductPage/ProductPage';
// import ScrollingText from './components/Footer/ScrollingText';
import Footer from './components/Footer/Footer';
import LoginForm from './components/Login/LoginForm';
import SignupForm from './components/Login/SignupForm';
import Cart from './components/Cart/Cart';
import { CartProvider } from './components/Cart/CartContext';
import ScrollToTop from './components/ScrollToTop'; 
import ExchangePolicy from './pages/ExchangePolicy';
import Shipping from './pages/Shipping';
import Terms from './pages/Terms'; 
import Account from './pages/Account';
import Checkout from './pages/checkout';
import ExchangeRequestForm from './pages/ExchangeRequestForm';
import ContactUs from './pages/ContactUs'; 


function App() {
    const [isSideNavOpen, setSideNavOpen] = useState(false);
    const headerRef = useRef(null);
    const heroTextRef = useRef(null);
    const location = useLocation();

    const toggleSideNav = () => {
        setSideNavOpen(prevState => !prevState);
    };

    const closeSideNav = () => {
        setSideNavOpen(false);
    };

    const handleScroll = () => {
        const header = headerRef.current;
        const heroText = heroTextRef.current;
        const threshold = header ? header.offsetHeight : 0;

        if (header) {
            if (window.scrollY > threshold) {
                header.classList.add('visible');
                header.classList.remove('pre-scroll');
            } else {
                header.classList.remove('visible');
                header.classList.add('pre-scroll');
            }
        }

        if (heroText) {
            if (window.scrollY >= threshold) {
                heroText.classList.add('sticky');
            } else {
                heroText.classList.remove('sticky');
            }
        }
    };

    useEffect(() => {
        if (headerRef.current) {
            headerRef.current.classList.add('pre-scroll');
        }
        window.addEventListener('scroll', handleScroll);

        // Call handleScroll manually to set the initial state
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location.pathname]); 

    const shouldShowFooter = location.pathname !== '/login' && location.pathname !== '/signup' && location.pathname !== '/exchangePolicy';

    return (
        <CartProvider>
            <ScrollToTop /> {/* Add ScrollToTop to ensure every page starts from the top */}
            <div className="App">
                {location.pathname === '/' ? (
                    <Header toggleSideNav={toggleSideNav} ref={headerRef} />
                ) : (
                    <HeaderAll toggleSideNav={toggleSideNav} ref={headerRef} /> 
                )}
                <SideNav isOpen={isSideNavOpen} closeSideNav={closeSideNav} />
                <Routes>
                    <Route path="/" element={
                        <>
                            <HeroSection ref={heroTextRef} />
                            <ProductSection />
                            {/* <ScrollingText /> */}
                        </>
                    } />
                    <Route path="/product/:id" element={<ProductPage />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/signup" element={<SignupForm />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/ExchnagePolicy" element={<ExchangePolicy />} /> 
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/shipping" element={<Shipping />} />                     <Route path="/account" component={Account} />
                    <Route path="/exchange" element={<ExchangeRequestForm />} />
                     <Route path="/contact" element={<ContactUs />} /> 
                </Routes>
                {shouldShowFooter && <Footer />}
            </div>
        </CartProvider>
    );
}

export default App;