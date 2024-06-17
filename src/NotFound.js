import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found review-info section">
            <h1>Sorry, this page does not exist.</h1>
            <h2 className="tan">Bestie, even we can't find it...</h2>
            <Link className="chia" to="/"><button className="btn-primary">Back to the homepage...</button></Link>
        </div>
    );
}

export default NotFound;