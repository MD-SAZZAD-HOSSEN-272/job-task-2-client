import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const HomeLayout = () => {
    return (
       <div>
        <nav>
            <Navbar></Navbar>
        </nav>
        <main>
            <Outlet></Outlet>
        </main>
        <footer>
            <Footer></Footer>
        </footer>
       </div>
    );
};

export default HomeLayout;