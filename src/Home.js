import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Card from "./Card";

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://script.google.com/macros/s/AKfycbzKSYR_PtQXeDMSd7USY1mrCrAxgvpgjR_l3ywV4ZgGATSVHekOCTM1vAnZLg3uQuFS/exec')
            .then(response => response.json())
            .then(data => setData(data.data));
    }, []);

    console.log(data);

    return (
        <div className="home">
            <div className="section">
                <h1>Top Reviews</h1>
                <div className="gallery">
                    {(data.length < 1) && <h1>Loading...</h1>}
                    {(data.length > 0) && data.map((item, i) => (
                        <Link to={`/review/${i}`} key={i}>
                            <div className="card">
                                <img src={item.image} />
                                <div className="card-details">
                                    <h2 className="gold">{item.title}</h2>
                                    <h4 className="beige">{item.artist}</h4>
                                    <p className="tan">reviewed by {item.author}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <hr />
        </div>
    );
}

export default Home;