export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <a className="navbar-brand fs-5" href="#">
              Subscribe
            </a>
            <a className="navbar-brand fs-2" href="#">
              Large
            </a>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button type="button" className="search-btn">
                <img src="src\assets\search.svg" alt="search" />
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
