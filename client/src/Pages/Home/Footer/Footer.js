import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="text-center">
                <small>&copy; Creative Agency, {new Date().getFullYear()}. All right reserved || Developed by Abdul Hadi</small>
            </footer>
        </div>
    );
};

export default Footer;