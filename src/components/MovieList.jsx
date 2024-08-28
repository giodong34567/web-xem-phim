import React from 'react';
import PropTypes from 'prop-types';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from 'react';
import Modal from "react-modal";
import YouTube from 'react-youtube';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1200 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1200, min: 600 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 1
    }
};

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
    overlay: {
        position: "fixed",
        zIndex: "9999"
    }
};


const opts = {
    height: '390',
    width: '640',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
    },
};
const MovieList = (props) => {
    const { title, data } = props;
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [trailerKey, setTrailerKey] = useState("");

    const handleTrailer = async (id) => {
        setTrailerKey("");
        try {
            const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
                }
            };

            const movieKey = await fetch(url, options);
            const data = await movieKey.json();
            setTrailerKey(data.results[0].key);
            setModalIsOpen(true);
        } catch (error) {
            setModalIsOpen(false);
            console.log(error)
        }
    }
    return (
        <div className='bg-black text-white p-10'>
            <h2 className='uppercase font-bold text-3xl mb-[50px]'>{title}</h2>
            <Carousel responsive={responsive} className='flex items-center space-x-4'>
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
            </Carousel>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <YouTube videoId={trailerKey} opts={opts} />;
            </Modal>
        </div>
    );
}

MovieList.propTypes = {
    title: PropTypes.string.isRequired
}

export default MovieList;