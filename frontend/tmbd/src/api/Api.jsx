import { useEffect, useState } from 'react';
import { FaPlay, FaHeart } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";
import { BsCreditCardFill } from "react-icons/bs";
import PropTypes from 'prop-types';


const formatReleaseDate = (releaseDate) => {
    const [day, month, year] = releaseDate.split(" ");
    const months = {
        Jan: "01", Feb: "02", Mar: "03", Apr: "04", 
        May: "05", Jun: "06", Jul: "07", Aug: "08", 
        Sep: "09", Oct: "10", Nov: "11", Dec: "12"
    };
    return `${day}/${months[month]}/${year}`;
};


const CircularProgressBar = ({ percentage }) => {
    const radius = 50;
    const strokeWidth = 10;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r={radius} stroke="#e6e6e6" strokeWidth={strokeWidth} fill="none" />
            <circle 
                cx="60" cy="60" r={radius} stroke="#4db8ff" strokeWidth={strokeWidth} fill="none" 
                strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} strokeLinecap="round" 
                transform="rotate(-90 60 60)" 
            />
            <text x="50%" y="50%" textAnchor="middle" stroke="#51c5cf" strokeWidth="1px" dy=".3em" fontSize="20">
                {percentage}%
            </text>
        </svg>
    );
};


export default function Api() {
    const [movieData, setMovieData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('http://localhost:8000/api/movies/');
                if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
                const data = await res.json();
                setMovieData(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    if (loading) return <div className="loading-spinner">Loading...</div>;
    if (error) return <div style={{ color: 'red' }}>Error fetching movie data: {error.message}</div>;

    const movie = movieData?.results?.[0];
    if (!movie) return <p>No movie data available</p>;

    const { Title, Year, Rated, Released, Genre, Runtime, Plot, Director, Poster } = movie;
    const totalMinutes = parseInt(Runtime, 10);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    const formattedDate = formatReleaseDate(Released);

    return (
        <div className="main">
            <div className="img_block">
                <img src={Poster} alt={`${Title} image`} />
            </div>
            <div>
                <h1>{Title} ({Year})</h1>
                <div className="text">
                    <p className='rated'>{Rated}</p>
                    <p>{`${formattedDate} (IN)`}</p>
                    <p>{Genre}</p>
                    <p>{`${hours}h ${minutes}m`}</p>
                </div>
                <div className="icon-actions">
                    <CircularProgressBar percentage={76} />
                    <div className="emoji-wrapper">
                        <span className="emoji" title="😍" role="img" aria-label="heart-eyes">😍</span>
                        <span className="emoji" title="😁" role="img" aria-label="grinning">😁</span>
                        <span className="emoji" title="🙂" role="img" aria-label="slightly smiling">🙂</span>
                    </div>
                    <p className="vibe">What's your vibe? <IoInformationCircleOutline /></p>
                </div>
                <div className="actions">
                    <BsCreditCardFill title="Login to create/edit list" />
                    <FaHeart title="Add to favorites" />
                    <p><FaPlay /> Play Trailer</p>
                </div>
                <div className="overview">
                    <p style={{ fontWeight: '600' }}>Overview</p>
                    <p>{Plot}</p>
                    <div>
                        <p>{Director}</p>
                        <p style={{ fontWeight: '600' }}>Director, Writer</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

Api.propTypes = {
    percentage: PropTypes.number,
};
