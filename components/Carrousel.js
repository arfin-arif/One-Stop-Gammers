// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
const Carrousel = () => {
    return (
        <div>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>
                    <div className="md:bg-[url('https://i.ibb.co/f16dCbV/thumb-1920-1007853.jpg')] bg-cover bg-no-repeat">
                        <div className='block md:hidden'>
                            <img src="https://i.ibb.co/f16dCbV/thumb-1920-1007853.jpg" alt="" className="w-full object-cover h-[300px]" />
                        </div>
                        <div className='block md:flex justify-end md:min-h-screen items-center'>
                            <div className='bg-black/[.7] w-full md:w-5/12  pl-7 rounded-tl-xl rounded-bl-xl text-white p-5'>
                                <h4 className="uppercase my-3"><span className='bg-yellow-300 text-black font-semibold px-2 py-1 text-xl rounded italic'>console-pc</span></h4>
                                <h1 className='uppercase my-3 text-4xl lg:text-6xl mb-3 md:mb-10 font-bold'>gta-v</h1>
                                <h2 className='text-3xl md:text-2xl lg:text-3xl mb-3'>Play and enjoy with your <br /> friends</h2>
                                <button className="btn bg-blue-400 uppercase font-semibold px-10">Get it now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="md:bg-[url('https://i.ibb.co/S0q2nvJ/H2x1-NSwitch-Minecraft-image1600w.jpg')] bg-cover bg-no-repeat">
                        <div className='block md:hidden'>
                            <img src="https://i.ibb.co/S0q2nvJ/H2x1-NSwitch-Minecraft-image1600w.jpg" alt="" className="w-full object-cover h-[300px]" />
                        </div>
                        <div className='flex justify-start md:min-h-screen items-center'>
                            <div className='bg-black/[.7] w-full md:w-5/12 pl-7 rounded-tr-xl rounded-br-xl text-white p-5'>
                                <h4 className="uppercase my-3"><span className='bg-yellow-300 text-black font-semibold px-2 py-1 text-xl rounded italic'>console-pc</span></h4>
                                <h1 className='uppercase my-3 text-4xl lg:text-6xl mb-3 md:mb-10 font-bold'>minecraft</h1>
                                <h2 className='text-3xl md:text-2xl lg:text-3xl mb-3 text'>Play and enjoy with your <br /> friends</h2>
                                <button className="btn bg-blue-400 uppercase font-semibold px-10">Buy now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="md:bg-[url('https://i.ibb.co/0BL9Q7g/fb-image.jpg')] bg-cover bg-no-repeat">
                        <div className='block md:hidden'>
                            <img src="https://i.ibb.co/0BL9Q7g/fb-image.jpg" alt="" className="w-full object-cover h-[300px]" />
                        </div>
                        <div className='flex justify-end md:min-h-screen items-center'>
                            <div className='bg-black/[.7] w-full md:w-5/12  pl-7 rounded-tl-xl rounded-bl-xl text-white p-5'>
                                <h4 className="uppercase my-3"><span className='bg-yellow-300 text-black font-semibold px-2 py-1 text-xl rounded italic'>console-pc</span></h4>
                                <h1 className='uppercase my-3 text-4xl lg:text-6xl mb-3 md:mb-10 font-bold'>euro truck</h1>
                                <h2 className='text-3xl md:text-2xl lg:text-3xl mb-3 text'>Play and enjoy with your <br /> friends</h2>
                                <button className="btn bg-blue-400 uppercase font-semibold px-10">shop now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carrousel;