import logo from './pictures/img.png'
function Header() {

    return(
        <header className="header">
            <div className="header__geoquiz">Choose your <strong className="header__geoquiz-strong">GeoQuiz</strong></div>
            <img className="header__img" src={logo} alt="logo"/>
            <hr />
        </header>
    );
}

export default Header