const Header = () => {
    return (
        <nav className="header">
            <div className="container">
                <a href="#" className="brand-logo">TestApp</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="sass.html">Repo</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;