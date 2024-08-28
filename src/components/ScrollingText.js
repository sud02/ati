import React, { useEffect } from 'react';
import './ScrollingText.css';

const ScrollingText = () => {
    useEffect(() => {
        const scrollingText = document.querySelector('.scrolling-text');
        if (scrollingText) {
            // Duplicate the content of the scrolling text
            scrollingText.innerHTML += scrollingText.innerHTML;
        }
    }, []);

    return (
        <div className="scrolling-text-container">
            <div className="scrolling-text">
                <p>
                    FREE DELIVERY  •  FREE DELIVERY  •  FREE DELIVERY  •  FREE DELIVERY  •  
                    FREE DELIVERY  •  FREE DELIVERY  •  FREE DELIVERY  •  FREE DELIVERY  •  
                    FREE DELIVERY  •  FREE DELIVERY  •  FREE DELIVERY  •  FREE DELIVERY  •  
                    FREE DELIVERY  •  FREE DELIVERY  •  FREE DELIVERY  •  FREE DELIVERY  •  
                    FREE DELIVERY  •  FREE DELIVERY  •  FREE DELIVERY  •  FREE DELIVERY  •  
                    FREE DELIVERY  •  FREE DELIVERY  •  FREE DELIVERY  •  FREE DELIVERY  •  
                    FREE DELIVERY  •  FREE DELIVERY  •  FREE DELIVERY  •  FREE DELIVERY  •  
                    FREE DELIVERY  •  FREE DELIVERY  •  FREE DELIVERY  •  FREE DELIVERY  •  
                    FREE DELIVERY  •  FREE DELIVERY  •  FREE DELIVERY  •  FREE DELIVERY  •  
                    FREE DELIVERY  •  FREE DELIVERY  •  FREE DELIVERY  •  FREE DELIVERY  •  
                </p>
                <p>
                    FREE DELIVERY  •  FREE DELIVERY  •  FREE DELIVERY  •  FREE DELIVERY  •  
                    FREE DELIVERY  •  FREE DELIVERY  •  FREE DELIVERY  •  FREE DELIVERY  •  
                    FREE DELIVERY  •  FREE DELIVERY  •  FREE DELIVERY  •  FREE DELIVERY  •  
                    FREE DELIVERY  •  FREE DELIVERY  •  FREE DELIVERY  •  FREE DELIVERY  •  
                    FREE DELIVERY  •  FREE DELIVERY  •  FREE DELIVERY  •  FREE DELIVERY  •  
                    FREE DELIVERY  •  FREE DELIVERY  •  FREE DELIVERY  •  FREE DELIVERY  •  
                    FREE DELIVERY  •  FREE DELIVERY  •  FREE DELIVERY  •  FREE DELIVERY  •  
                    FREE DELIVERY  •  FREE DELIVERY  •  FREE DELIVERY  •  FREE DELIVERY  •  
                    FREE DELIVERY  •  FREE DELIVERY  •  FREE DELIVERY  •  FREE DELIVERY  •  
                    FREE DELIVERY  •  FREE DELIVERY  •  FREE DELIVERY  •  FREE DELIVERY  •  
                </p>
            </div>
        </div>
    );
};

export default ScrollingText;
