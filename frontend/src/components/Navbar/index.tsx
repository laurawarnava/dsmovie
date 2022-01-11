import {ReactComponent as GithubIcon} from 'assets/img/github.svg';
import './styles.css';

function Navbar() {

    return (
        <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <a href="https://github.com/laurawarnava">
          <div className="dsmovie-contac-container">
            <GithubIcon />
            <p className="dsmovie-contact-link">/laurawarnava</p>
          </div>
          </a>
        </div>
      </nav>
    </header>
    )
}

export default Navbar;