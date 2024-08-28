import React from 'react'

import IconRating from "../assets/rating.png";
import IconRatingHalf from "../assets/rating-half.png";
import ImgTemp from "../assets/temp-1.jpeg";
import Play from "../assets/play-button.png";

const Banner = () => {
    return (
        <div className='w-full h-[700px] bg-banner bg-center bg-no-repeat bg-cover relative'>
            <div className='absolute w-full h-full top-0 left-0 bg-black opacity-40'></div>
            <div className='w-full h-full flex items-center justify-center space-x-[30px] p-6 relative z-20'>
                <div className='flex flex-col items-baseline w-[50%]'>
                    <p className='text-white bg-gradient-to-r from-red-600 to-red-300 py-2 text-xl px-3'>TV SHOW</p>
                    <div className='flex flex-col space-y-10'>
                        <h2 className='text-white text-3xl font-bold'>Nghe nói em thích tôi</h2>
                        <div className='flex items-center space-x-3'>
                            <img src={IconRating} alt='rating' className='w-8 h-8' />
                            <img src={IconRating} alt='rating' className='w-8 h-8' />
                            <img src={IconRating} alt='rating' className='w-8 h-8' />
                            <img src={IconRating} alt='rating' className='w-8 h-8' />
                            <img src={IconRatingHalf} alt='rating-half' className='w-8 h-8' />
                        </div>
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit. Porro accusantium ipsum
                            laborum reprehenderit fuga quae dolorem commodi,
                            error doloribus repellat!</p>
                        <div className='flex items-center space-x-4'>
                            <button className='p-2 pb-2.5 bg-black text-white font-bold'>Chi tiết</button>
                            <button className='p-2 pb-2.5 bg-red-700 text-white font-bold'>Xem phim</button>
                        </div>
                    </div>
                </div>
                <div className='w-[50%] flex items-center justify-center'>
                    <div className='w-[300px] h-[500px] relative group cursor-pointer'>
                        <img src={ImgTemp} alt='img-temp' className='w-full h-full object-cover' />
                        <div className='absolute w-full h-full flex items-center top-0 left-0 justify-center backdrop-blur-sm opacity-0 group-hover:opacity-60 transition-opacity duration-500 ease-in-out'>
                            <img src={Play} alt='play' className='w-16 h-16' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;

