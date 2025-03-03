import { CiMenuBurger } from "react-icons/ci";
import "./styles.css";
import logoImg from "../../assets/images/logo.png";

export const MenuHamburguer = () => {
  return (
    <div className="container-fluid">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasDarkNavbar"
        aria-controls="offcanvasDarkNavbar"
        aria-label="Toggle navigation"
      >
        <CiMenuBurger />
      </button>
      <div
        className="offcanvas offcanvas-end text-bg-dark"
        tabindex="-1"
        id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel"
      >
        <div className="offcanvas-header">
          <img src={logoImg} alt="" />
          <h5 className="logo offcanvas-title" id="offcanvasDarkNavbarLabel">
            Cosmo<strong>News</strong>
          </h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Notícias
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contato">
                Contato
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/galeria">
                Galeria
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
