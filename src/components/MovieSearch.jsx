import React from 'react'

const MovieSearch = (props) => {
    const { title, data } = props;
    return (
        <div className='bg-black text-white p-10'>
            <h2 className='uppercase font-bold text-3xl mb-[50px]'>{title}</h2>
            <div className='grid grid-cols-4 gap-x-4 gap-y-10'>
                {data.length > 0 && data.map((item, index) => (
                    <div key={index} className='w-[300px] h-[400px] bg-red-700 relative group cursor-pointer' onClick={() => handleTrailer(item.id)}>
                        <div className='group-hover:scale-110 transition:scale duration-500 ease-in-out w-full h-full'>
                            <div className='absolute w-full h-full top-0 left-0 bg-black opacity-30' />
                            <img src={`${import.meta.env.VITE_IMG_URL + item.backdrop_path}`} alt={item.title} className='w-full h-full object-cover' />
                            <div className='absolute bottom-4 flex justify-center w-full'>
                                <p className='uppercase text-md'>{item.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MovieSearch
