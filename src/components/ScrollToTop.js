import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const scrollPositionKey = `scroll-position-${pathname}`;

        // Check if it's the first time visiting the route
        const savedScrollPosition = localStorage.getItem(scrollPositionKey);

        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        // Scroll to the saved position, or top if it's the first visit
        if (savedScrollPosition) {
            window.scrollTo({
                top: parseInt(savedScrollPosition, 10),
                left: 0,
                behavior: 'auto' // Ensure no animation happens, "auto" is the default
            });
        } else {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'auto' // Ensure no animation happens
            });
        }
        

        // Save the scroll position when the user navigates away
        const handleScroll = () => {
            localStorage.setItem(scrollPositionKey, window.scrollY.toString());
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [pathname]);

    return null;
};

export default ScrollToTop;
