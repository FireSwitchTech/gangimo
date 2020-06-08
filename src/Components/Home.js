import React, { Component } from "react";
import "../../src/css/style.css";
import "../../src/css/navbar-top-fixed.css";
import write from "../../src/write.mp4";
import newgangimo from "../../src/images/newgangimo.png";
import books from "../../src/images/books.jpg";
import newgangimologo from "../../src/images/newgangimologo.png";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <>
        <div className="container" id="one">
          {/* <div className="container" id="two">
            <nav className="navbar navbar-light navbar-fixed" id="three">
              <Link to="/" id="im">
                <img
                  src={newgangimo}
                  width="25%"
                  alt="Gangimo"
                  id="s1"
                  className="gangi"
                />
              </Link>
              <div className="inline">
                <Link to="" id="four" className="lin">
                  Subscribe
                </Link>
                <Link to="/write" id="four" className="lin">
                  Write
                </Link>
                <Link to="/login" id="four" className="lin">
                  Sign in
                </Link>
                <Link to="/register">
                  <button className="btn my-2 my-sm-0" type="submit" id="five">
                    Sign Up
                  </button>
                </Link>
              </div>
            </nav>
          </div> */}

          <header className="container v-header">
            <div className="header-content">
              <h1>Expand your knowledge</h1>
              <p>Write to be Understood, Read to grow</p>
              <Link to="/login">
                <button className="btn1 my-2 my-sm-0" type="submit" id="six">
                  Get Started
                </button>
              </Link>
            </div>
            <div className="fullscreen" id="seven">
              <video
                src={write}
                loop
                autoplay
                muted
                playsinline
                width="100%;"
                min-height="50%"
                className="video-background"
              ></video>
            </div>
            <div className="overlay"></div>
          </header>

          <div className="item">
            <div className="container fle">
              <div className="wrapper">
                <div id="eight">
                  <i className="fa fa-laptop" id="e-one"></i>
                  <a href="signin.html">Technology</a>
                </div>
                <div id="s2">
                  <i className="fa fa-heart" id="e-two"></i>
                  <a href="signin.html"> Relationship</a>
                </div>
                <div id="s2">
                  <i className="fa fa-hashtag" id="s4"></i> Politics
                </div>
                <div id="s2">
                  <i className="fa fa-hashtag" id="s5"></i> Culture
                </div>
              </div>
            </div>

            <div className="container fle2">
              <div className="wrapper">
                <div id="s2">
                  <i className="fa fa-hashtag" id="s6"></i> Politics
                </div>
                <div id="s2">
                  <i className="fa fa-hashtag" id="s7"></i> Money
                </div>
                <div id="s2">
                  <i className="fa fa-camera" id="s8"></i>Photography
                </div>
                <div id="s2">
                  <i className="fa fa-hashtag" id="s9"></i> Design
                </div>
                <div id="s2">
                  <i className="fa fa-hashtag" id="s10"></i> Food
                </div>
              </div>
            </div>

            <div className="container fle3">
              <div className="wrapper">
                <div id="s2">
                  <i className="fa fa-hashtag" id="s11"></i> Business
                </div>
                <div id="s2">
                  <i className="fa fa-book" id="s12"></i> Books
                </div>
                <div id="s2">
                  <i className="fa fa-medkit" id="s13"></i> Medicine
                </div>
                <div id="s2">
                  <i className="fa fa-hashtag" id="s14"></i> Electronics
                </div>
              </div>
            </div>
          </div>

          <br id="brr" />

          <section className="int" id="nine">
            <h4>
              <b>
                What's your interest? We help you find great things to read.
              </b>
            </h4>
            <a href="signin.html">
              <button className="btn my-2 my-sm-0" id="ten" type="submit">
                Get Started
              </button>
            </a>
            <p id="s15">
              Already have an account?{" "}
              <a href="signin.html" id="o-ten">
                <b>Sign in.</b>
              </a>
            </p>
          </section>

          <section id="ele">
            <div className="container">
              <h1 id="t1">
                <b>No worries!!!</b>
              </h1>
              <h5 id="t2">
                Your privacy stays yours. We don’t sell your data or target you
                with ads.
              </h5>
              <div className="row">
                <div className="col-md-6">
                  <img src={books} id="t3" alt="Read or Write" width="50%" />
                  <div>
                    <a href="signin.html">
                      <button
                        className="btn3 my-2 my-sm-0"
                        id="twe"
                        type="submit"
                      >
                        Get Started
                      </button>
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <h3 id="t4">We do things to your taste.</h3>
                  <h4 id="t5">
                    Gangimo is not like any other platform on the internet. Our
                    sole purpose is to help you find compelling ideas,
                    knowledge, and perspectives.
                  </h4>
                  <br />
                  <h4 id="t5">
                    We don’t serve ads—we serve you, the curious reader who
                    loves to learn new things.
                  </h4>
                  <br />
                  <h4 id="t6">
                    Medium is home to thousands of independent voices, and we
                    combine humans and technology to find the best reading for
                    you—and filter out the rest.
                  </h4>
                </div>
              </div>
            </div>
          </section>
        </div>

        <footer
          className="page-footer font-small stylish-color-dark pt-4"
          id="fo"
        >
          <div className="container text-center text-md-left">
            <div className="row">
              <div className="col-md-4 mx-auto">
                <a href="index.html" id="im">
                  <img
                    src={newgangimo}
                    width="25%"
                    alt="Gangimo"
                    id="in"
                    className="gangi"
                  />
                </a>
              </div>

              <div className="col-md-2 mx-auto">
                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
                  <Link to="#" id="di">
                    Subscribe
                  </Link>
                </h5>
              </div>

              <div className="col-md-2 mx-auto">
                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
                  <Link to="#" id="di">
                    Write
                  </Link>
                </h5>
              </div>

              <div className="col-md-2 mx-auto">
                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
                  <Link to="#" id="di">
                    Get Started
                  </Link>
                </h5>
              </div>
            </div>
          </div>

          <hr id="hh" />

          <ul className="list-unstyled list-inline text-center py-2">
            <li className="list-inline-item">
              <h5 className="mb-1" id="hhh">
                Register for free
              </h5>
            </li>
            <li className="list-inline-item">
              <a href="#!" className="btn btn-rounded" id="lii">
                Sign up!
              </a>
            </li>
          </ul>

          <hr id="hh" />

          <ul className="list-unstyled list-inline text-center">
            <li className="list-inline-item">
              <Link to="£" className="btn-floating btn-fb mx-1">
                <i className="fa fa-facebook-f" id="fac">
                  {" "}
                </i>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="£" className="btn-floating btn-tw mx-1">
                <i className="fa fa-twitter" id="fac">
                  {" "}
                </i>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="£" className="btn-floating btn-dribbble mx-1">
                <i className="fa fa-instagram" id="fac">
                  {" "}
                </i>
              </Link>
            </li>
          </ul>

          <div className="footer-copyright text-center py-3" id="fac2">
            © 2020 Copyright:
            <Link to="#">
              <img
                src={newgangimologo}
                width="16px"
                className="gang"
                alt="logo"
              />
            </Link>
          </div>
        </footer>
      </>
    );
  }
}

export default Home;
