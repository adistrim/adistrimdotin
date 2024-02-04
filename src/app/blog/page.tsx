import React from 'react';


const Blog = () => {
    return (
        <div className='font-mons antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto'>
            <div className='flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0'>
                <section>
                    <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
                    <p className="text-gray-600 mb-8">Yeah, I'm a bit lazy</p>
                </section>
            </div>
        </div>
    );
};

export default Blog;
