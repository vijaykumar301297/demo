// import  { useEffect, useState } from 'react';
// import { FaPlay } from "react-icons/fa";
// import { FaHeart } from "react-icons/fa";
// import { IoInformationCircleOutline } from "react-icons/io5";
// import { BsCreditCardFill } from "react-icons/bs";


// import PropTypes from 'prop-types';

// const formatReleaseDate = (releaseDate) => {
//     const [day, month, year] = releaseDate.split(" ");

//     const months = { 
//         Jan: "01",  Feb: "02",  Mar: "03", Apr: "04", 
//         May: "05", Jun: "06",  Jul: "07",  Aug: "08",
//         Sep: "09",  Oct: "10",  Nov: "11",  Dec: "12"
//     };

//     const monthNumber = months[month];

//     return `${day}/${monthNumber}/${year}`;
// };



// const CircularProgressBar = ({ percentage }) => {
//     const radius = 50; 
//     const strokeWidth = 10; 
//     const circumference = 2 * Math.PI * radius; 
//     const strokeDashoffset = circumference - (percentage / 100) * circumference;

//     return (
//         <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
//             <circle
//                 cx="60"
//                 cy="60"
//                 r={radius}
//                 stroke="#e6e6e6"
//                 strokeWidth={strokeWidth}
//                 fill="none"
//             />
//             <circle
//                 cx="60"
//                 cy="60"
//                 r={radius}
//                 stroke="#4db8ff"
//                 strokeWidth={strokeWidth}
//                 fill="none"
//                 strokeDasharray={circumference}
//                 strokeDashoffset={strokeDashoffset}
//                 strokeLinecap="round"
//                 transform="rotate(-90 60 60)" // Rotates to start the progress from top
//             />
//             <text x="50%" y="50%" textAnchor="middle" stroke="#51c5cf" strokeWidth="1px" dy=".3em" fontSize="20">
//                 {percentage}%
//             </text>
//         </svg>
//     );
// };

// export default function Api() {
//     const [movieData, setMovieData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         async function fetchData() {
//             try {
//                 const res = await fetch('');
//                 const data = await res.json();  
//                 setMovieData(data);  
//             } catch (err) {
//                 setError(err);  
//             } finally {
//                 setLoading(false);  
//             }
//         }

//         fetchData();
//     }, []);  
    
//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error: {error.message}</p>;

//     const runtime = movieData.Runtime;
//     const totalMinutes = parseInt(runtime, 10); 
//     const hours = Math.floor(totalMinutes / 60); 
//     const minutes = totalMinutes % 60;
//     const releaseDate = movieData?.Released; 
//     const formattedDate = formatReleaseDate(releaseDate);


//     return (
//         <div className='main' style={{color:'black'}}>
//             <div className="img_block">
//                 <img src={movieData.Poster} alt={`${movieData.Title} image`} />
//             </div>
//             <div>
//                 <h1>{movieData?.Title} ({movieData?.Year})</h1>
//                 <div className="text">
//                     <p className='rated'>{movieData?.Rated}</p>
//                     <p>{`${formattedDate} (IN)`}</p>
//                     <p>{`${movieData?.Genre}`}</p>
//                     <p>{`${hours}h ${minutes}m`}</p> 
//                 </div>
//                 <div>
//                     <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center', gap:'2rem', fontSize:'1.6rem'}}>
//                         <p style={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
//                             <CircularProgressBar percentage={76} /> <span style={{fontSize:'1.4rem'}}>User <br/>Score</span> 
//                         </p>
                        
//                         <div style={{position: 'relative'}}>
//                             <span style={{position: 'absolute', transition: 'transform 0.2s', zIndex:'300'}}>
//                                 <span style={{display: 'inline-block'}} className="emoji">😍</span>
//                             </span>
//                             <span style={{position: 'absolute', left: '1rem', transition: 'transform 0.2s',  zIndex:'200'}}>
//                                 <span style={{display: 'inline-block'}} className="emoji">😁</span>
//                             </span>
//                             <span style={{position: 'absolute', left: '2rem', transition: 'transform 0.2s',  zIndex:'100'}}>
//                                 <span style={{display: 'inline-block'}} className="emoji">🙂</span>
//                             </span>
//                         </div>
//                         <p className='vibe'>What's your vibe? <span title='Logion to use tmbd rating'><IoInformationCircleOutline /></span></p>
//                     </div>
//                     <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center', gap:'2rem', fontSize:'1.6rem'}}>
//                         <p title="Login to create and edit list" style={{padding:'1rem', borderRadius:'100%' , background:'#032541',color: 'white' }}><BsCreditCardFill /></p>
//                         <p style={{padding:'1rem', borderRadius:'100%' , background:'#032541',color: 'white' }}><FaHeart/></p>
//                         <p ><FaPlay /> Play Trailer</p>
//                     </div>
                   
//                     <div style={{fontSize:'1.4rem', margin:'1rem 0'}}>
//                         <p style={{fontWeight:'600'}}>Obviously.</p>
//                         <p  style={{fontWeight:'600'}}>Overview</p>
//                         <p style={{fontSize:'1.rem', letterSpacing:'1px'}}>{movieData?.Plot}</p>
//                         <div>
//                             <p>{movieData?.Director}</p>
//                             <p style={{fontWeight:'600'}}>Director, Writer</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


Api.propTypes = {
    percentage: PropTypes.number.isRequired,
}
