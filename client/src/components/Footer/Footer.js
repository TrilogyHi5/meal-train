import { useState } from 'react';
import icon from '../../utils/images/icon.png' // import icon image

export default function Footer() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

        return (
            <footer className="bg-gray-900 text-white py-4">
                <div className="container mx-auto text-center">
                    <img src={icon} className="w-9 h-9"></img>
                    <div className="flex-1">
                        <p className="flex items-center h-full text-white font-display text-4xl text-center pl-4" >Meal Train</p>
                    </div>
                    <p>Copyright © 2023</p>
                </div>
            </footer>
        );
    }
