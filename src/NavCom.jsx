import { Link } from "react-router-dom";
import "./styles/nav.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg " data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          My App
        </a>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/TicTac">
                Tic-Tac-Toe
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/CustomeHook">
                Custome Hook
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/UseReducer">
                useState/useReducer
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/UseEffect">
                use - Effect/Layout/Insertion
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/UseRef">
                useRef
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/UseMemo">
                UseMemo
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/UseContext">
                useContext
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ReduxToolKit">
                ReduxToolKitComp
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ToDoComp">
                To Do List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Poll">
                Poll Voting
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/InputBox">
                State Lifting
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
