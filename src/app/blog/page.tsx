import React from 'react';
import Head from 'next/head';
import BlogList from '../components/blogs';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen container">
            <h1 className="text-[2rem] dark:text-gray-200 font-bold mb-8">Latest Blogs</h1>
            <BlogList />
        </div>
    );
};

export default Home;
