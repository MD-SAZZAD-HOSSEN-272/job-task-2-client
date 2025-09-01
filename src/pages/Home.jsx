import React from 'react';
import AllJobsList from '../Components/AllJobsList';

const Home = () => {
    return (
        <div>
            <p className='text-2xl font-bold text-center mt-5'>Welcome Our Portal you can Add Task remove task and update your task</p>
            <AllJobsList></AllJobsList>
        </div>
    );
};

export default Home;