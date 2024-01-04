import { Logo_Component } from "./Logo_Component";

const Navbar_Component = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top p-3">
        <div className="container">
          <a className="navbar-brand" href="#"><Logo_Component /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Shop</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Mens</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pages</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href=""><i className="bi bi-cart-check-fill "></i>Items</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href=""><i className="bi bi-search"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export { Navbar_Component };
