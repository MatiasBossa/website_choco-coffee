import { React } from 'react';
import './Layout.css'
import Navbar from '../partials/Navbar/Navbar'
import Footer from '../partials/Footer/Footer'


function Layout({ children }) {
    
    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout;