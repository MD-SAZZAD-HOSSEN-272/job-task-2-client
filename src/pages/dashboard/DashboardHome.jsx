import React from 'react';
import { NavLink, Outlet } from 'react-router';

const DashboardHome = () => {
    return (
        <div className='grid grid-cols-5 justify-center gap-5'>
            <nav className='col-span-1 bg-[#0b1c0bd8] min-h-screen pt-10 pl-15 flex flex-col gap-3'>
                <NavLink className='text-white w-fit p-5 rounded bg-[#0b1c0b]'>Add Task</NavLink>
                <NavLink to='my_posted_Jobs' className='text-white w-fit p-5 rounded bg-[#0b1c0b]'>My Posted Task</NavLink>
            </nav>
            <main className='col-span-4'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default DashboardHome;