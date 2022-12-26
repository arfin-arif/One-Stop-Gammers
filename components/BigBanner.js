import React from 'react';

const BigBanner = () => {
    return (
        <div className='my-10 mt-24'>
            <div className='grid md:grid-rows-3 grid-cols-1 md:grid-cols-3 md:grid-flow-col gap-2 min-h-screen'>
                <div className=" md:row-span-3 ">
                    <img src="https://i.ibb.co/NrGTswc/call-of-duty-mobile-poster-4010.webp" className='w-full cursor-pointer h-full' alt="" />
                </div>

                <div className=" md:col-span-2">
                    <img src="https://i.ibb.co/mSVd9pD/thumb-1920-709880.jpg" className='w-full h-[320px] object-fill md:object-cover cursor-pointer' alt="" />
                </div>
                <div className="">
                    <img src="https://i.ibb.co/8jdK0Qn/2020acranking.jpg" className='w-full cursor-pointer h-full object-cover' alt="" />
                </div>
                <div className="">
                    <img src="https://i.ibb.co/C0bN1wQ/16546d2379fa3b47e85934301bcc0340.jpg" className='w-full cursor-pointer h-full object-fill md:object-cover cursor-pointer' alt="" />
                </div>
                <div className=" md:row-span-2">
                    <img src="https://i.ibb.co/4NvVJMn/2333873.webp" className='w-full h-[648px] cursor-pointer' alt="" />
                </div>
            </div>
        </div>
    );
};

export default BigBanner;