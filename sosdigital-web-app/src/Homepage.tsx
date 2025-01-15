import loginImg from './images/login.jpg';
import studentImg from './images/student.jpg';
import educationImg from './images/Education.jpg';
import laptomImg from './images/laptop.jpg';
import education1Img from './images/education1.jpg';
import classesImg from './images/classes.jpg';
import onlineTestImg from './images/onlinetest.jpg';
import validationImg from './images/validation.jpg';

function Homepage() {
  return <>
    <section id="title" className="gradient-background">
      <div className="container col-xxl-8 pt-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 pt-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={studentImg} className="d-block mx-lg-auto img-fluid" alt="student.png" height="400"
              loading="lazy" />
          </div>
          <div className="col-lg-6">
            <p>Welcome to Sos digital </p>
            <p> To get starded for Homepage clicked Login Button</p>
            Learn on your terms anytimes,anywhere.
            <h5 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            </h5>

            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-apple"
                  viewBox="0 0 16 16">
                  <path
                    d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                  <path
                    d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                </svg>

              </button>

              <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                  <path
                    d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            className="bi bi-book"
            viewBox="0 0 16 16"
          >
            <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
            <use xlinkHref="#collection"></use>
          </svg>
        </div>
        <h3 className="  text-body-emphasis text"> Mock Tests & Practice Exams</h3>
        <p>Mock tests and practice exams are integral components of online
          education, providing students with opportunities to assess their
          understanding, prepare for final exams,their
          learning</p>
        <a href="#" className="icon-link">
          Call to action
          <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
        </a>
      </div>
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            className="bi bi-chat-dots"
            viewBox="0 0 16 16"
          >
            <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
            <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2" />
          </svg>
        </div>
        <h3 className="  text-body-emphasis text">Instant Test Results with Comprehensive Solutions</h3>
        <p>Providing instant test results with comprehensive solutions is one
          of the most valuable features of modern online education platforms.</p>
        <a href="#" className="icon-link">
          Call to action
          <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
        </a>
      </div>
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            className="bi bi-chat-right-text"
            viewBox="0 0 16 16"
          >
            <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
            <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
          </svg>
        </div>
        <h3 className="  text-body-emphasis text">Interactive Learning Materials</h3>
        <p>Interactive learning materials are educational tools that engage
          students through active participation, rather than passive
          reception.</p>
        <a href="#" className="icon-link">
          Call to action
          <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
        </a>
      </div>
    </div>


    <section id="testimonial">
      <div className="my-1">
        <div className=" text-center bg-body-tertiary">
          <div className="container">
            <h5 className="title1 ">Choose your path to success</h5>
            <div className="row justify-content-center">
              <div className="col-auto">
                <img className="profile-img" src={educationImg} alt="Education.jpg" />
              </div>
              <div className="col-auto">
                <img className="profile-img" src={laptomImg} alt="laptop.jpg" />
              </div>
              <div className="col-auto">
                <img className="profile-img" src={education1Img} alt="laptop.jpg" />
              </div>
              <div className="col-auto">
                <img className="profile-img" src={classesImg} alt="laptop.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="p-5 text-center bg-body-tertiary">
      <div className="container py-5">
        <h5 className="text-body-emphasis ">"Secure Student Portal: Register, Login, and Track Your Progress"</h5>
        <p className="col-lg-8 mx-auto lead">
          The registration process collects essential information from the student, such as their name, email, and password. When they submit the form, a unique user ID is generated for each student.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4">
        <img className="loginimage " src={loginImg} alt="login.jpg" />
        <h2 className="fw-normal text"> Credentials Login details </h2>
        <p><li>kindly put usename is borkar3232@gmail.com </li>
          <li>kindly put password is snehaborkar1 </li></p>
        <p><a className="btn btn-outline-secondary" href="#" >View details »</a></p>
      </div>
      <div className="col-lg-4">
        <img className="loginimage " src={onlineTestImg} alt="onlinetest.jpg" />

        <h2 className="fw-normal text">Test page </h2>
        <p>clicked on Enter Button on test page and start your test which you want.</p>
        <p><a className="btn btn-outline-secondary" href="#">View details »</a></p>
      </div>
      <div className="col-lg-4">
        <img className="loginimage " src={validationImg} alt="validation.jpg" />

        <h2 className="fw-normal text">Validation</h2>
        <p >Validation is encyption key Ensure that the API key corresponds to an active and authorized account or service.</p>
        <p><a className="btn btn-outline-secondary" href="#">View details »</a></p>
      </div>
    </div>


    <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
      <h1 className="word">Courses & Fee Structure for 11th and 12th Science Stream</h1>
      <p className="fs-5 text-body-secondary">
        The Science stream at the 11th and 12th levels offers a variety of courses that provide students with a strong foundation in fields such as Engineering, Medicine, Pharmacy, and Pure Sciences. Below is a comprehensive overview of the key subjects, popular undergraduate courses, and their associated fee structures.
      </p>
    </div>

    <div className="row row-cols-1 row-cols-md-3 g-4 text-center">
      {/* Card 1 */}
      <div className="col ">
        <div className="card mb-4 rounded-3 shadow-sm card1">
          <div className="card-header">
            <h4 className="my-0 fw-normal">11th Science</h4>
          </div>
          <div className="card-body p-3">
            <h1 className="card-title pricing-card-title">$50
              <small className="text-body-secondary fw-light">/mo</small>
            </h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>Maths</li>
              <li>Science</li>
              <li>Chemistry</li>
              <li>Physics, Biology</li>
            </ul>
            <button type="button" className="w-100 btn btn-sm btn-outline-primary">Sign up for free</button>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm ">
          <div className="card-header">
            <h4 className="my-0 fw-normal">12th Science</h4>
          </div>
          <div className="card-body p-3">
            <h1 className="card-title pricing-card-title">$60
              <small className="text-body-secondary fw-light">/mo</small>
            </h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>PCM Group</li>
              <li>PCMB Group</li>
              <li>Computer Science</li>
              <li>Information Technology</li>
            </ul>
            <button type="button" className="w-100 btn btn-sm btn-outline-primary">Get started</button>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm ">
          <div className="card-header">
            <h4 className="my-0 fw-normal">Top Exam</h4>
          </div>
          <div className="card-body p-3">
            <h1 className="card-title pricing-card-title">$70
              <small className="text-body-secondary fw-light">/mo</small>
            </h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>JEE Main, JEE Advanced</li>
              <li>NEET UG, NEET PG, AIIMS MBBS</li>
              <li>NEST, IIT JAM, </li>
              <li>JEST</li>
            </ul>
            <button type="button" className="w-100 btn btn-sm btn-outline-primary">Contact us</button>
          </div>
        </div>
      </div>
    </div>

    <footer className="py-5  gradient-background" >
      <div className="row ">
        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
          </ul>
        </div>

        <div className="col-md-5 offset-md-1 mb-3">
          <form>
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
              <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
              <button className="btn btn-primary" type="button">Subscribe</button>
            </div>
          </form>
        </div>
      </div>

      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>© 2025 Company, Inc. All rights reserved,SOS Digital.com</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3"><a className="link-body-emphasis" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
            <use xlinkHref="#twitter"></use></svg></a></li>
          <li className="ms-3"><a className="link-body-emphasis" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
            <use xlinkHref="#instagram"></use></svg></a></li>
          <li className="ms-3"><a className="link-body-emphasis" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
            <use xlinkHref="#facebook"></use></svg></a></li>
        </ul>
      </div>
    </footer>
  </>
}
export default Homepage;