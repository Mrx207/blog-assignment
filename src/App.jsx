// Import our custom CSS
import "./scss/styles.scss";

// Import all of Bootstrap's JS
import "./App.css";
import Navbar from "./components/Navbar";
import NewsHeaderList from "./components/NewsHeaderList";
import { CARD_DETAILS } from "./utils/lists";
import Card from "./components/Card";
import { Link } from "react-router-dom";
import BlogForm from "./components/BlogForm";
import { UserContextProvider } from "./context/userContext";
import Blog from "./components/Blog";
import {
  HistpryContextProvider,
  historyContext,
} from "./context/historyContext";

function App() {
  const { formDataHistory } = historyContext();
  return (
    <>
      <UserContextProvider>
        <HistpryContextProvider>
          {" "}
          <Navbar />
          <NewsHeaderList />
          <div className=" bg-dark text-secondary px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div className="col-10 col-sm-8 col-lg-6"></div>
              <div className="col-lg-6">
                <h1 className="display-5 fw-bold lh-1 mb-3">
                  Title of a longer featured blog post
                </h1>
                <p className="lead">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups.
                </p>
              </div>
            </div>
          </div>
          <BlogForm />
          <div className="d-flex flex-row card-gap">
            {CARD_DETAILS.map(({ title, subtitle, desc }) => (
              <Card title={title} subtitle={subtitle} desc={desc} key={title} />
            ))}
          </div>
          <div className="row mx-3">
            <div className="col-9">
              <div>Firebase</div>
              <h3>Sample blog post</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                {" "}
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <h3>Heading</h3>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <h4>Sub-heading</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>{" "}
              <p>
                Gravida dictum fusce ut placerat. Ornare quam viverra orci
                sagittis eu volutpat odio facilisis mauris.
              </p>
              <h3>Sub-heading</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Gravida dictum fusce ut placerat. Ornare quam viverra orci
                sagittis eu volutpat odio facilisis mauris.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              {formDataHistory.map(({ title, content }, index) => (
                <Blog key={index} title={title} content={content} />
              ))}
            </div>

            <div className="col-1">
              <h4>About</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu
                dictum varius duis at. Vitae auctor eu augue ut. Neque vitae
                tempus quam pellentesque nec. Ipsum dolor sit amet consectetur.
                Habitasse platea dictumst quisque sagittis purus sit amet
                volutpat. Et tortor consequat id porta
              </p>
              <h4 className="mt-5">Archieves</h4>
              <ul className="list-group">
                <li>
                  <Link to={"/"}>March 2014</Link>
                </li>
              </ul>
              <h4 className="mt-5">Elsewhere</h4>
              <ul className="list-group">
                <li>
                  <Link to={"/"}>March 2014</Link>
                </li>
              </ul>
            </div>
          </div>
        </HistpryContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
