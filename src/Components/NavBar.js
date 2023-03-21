import { Link } from "react-router-dom";


const NavBar = ()=>{

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <h5 className="navbar-brand mb-0 px-3">Blogs</h5>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link to="/" className="nav-link" >Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/new-blog" className="nav-link">Create Blog</Link>
                </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar