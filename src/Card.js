const Card = ({ title, artist, author, score, url, image, quote, text }) => {
    return (
        <div className="card">
            <img src={image} />
            <div className="card-details">
                <h2 className="gold">{title}</h2>
                <h4 className="beige">{artist}</h4>
                <p className="tan">reviewed by {author}</p>
            </div>
        </div>
    );
}

export default Card;