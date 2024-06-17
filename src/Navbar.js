import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar glass">
            <div className="navbar-div-title">
                <Link to="/"><h1 className="beige">iCONICQUÉ</h1></Link>
                <p className="beige">deep cuts, reviewed; for <span style={{ textDecoration: "underline" }}>real icons</span> only.</p>
            </div>
            <nav>
                <Link to="/">Home</Link>
                {/* <Link to="/review/:id">Review</Link> */}
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div >
    );
}

export default Navbar;