export const DropDown = () => {
    return (
        <div className="dropdown">
              <button
                className="btn text-light dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categorias
              </button>
              <ul class="dropdown-menu bg-dark p-2">
                <li>
                  <a className="link" href="#">
                    Nasa
                  </a>
                </li>
                <li>
                  <a className="link" href="#">
                    SpaceX
                  </a>
                </li>
                <li>
                  <a className="link" href="#">
                    SpaceNews
                  </a>
                </li>
              </ul>
            </div>
    )
}