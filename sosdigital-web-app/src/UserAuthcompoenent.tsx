
import { useState } from "react";
import { useRef } from "react";
import { api_url } from "./store/app_consts";


function UserAuthcompoenent({ manageUserId }: { manageUserId: (_userid: number | undefined) => void }) {
  const [islogged, setislogged] = useState(true);
  const [email, setEmail] = useState('');
  const [fullname, setfullname] = useState('');
  const [error, setError] = useState('');
  const [password, setpassword] = useState('');
  const [reenterpassword, setreenterpassword] = useState('');
  const [showValidation, setShowValidation] = useState(false);
  const [uuid, setUuid] = useState('');
  const [validationMessage, setValidationMessage] = useState('');



  // Secondary logic to show different forms
  //const [userAuthState, setUserAuthState] = useState<userAuthStates>(userAuthStates.login);
  const closeBtnRef = useRef<HTMLButtonElement>(null);


  const handleloginsubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email || !password) {
      setError('Please fill in both fields');
      return;
    }

    try {
      const response = await fetch(`${api_url}/views/authenticate/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const userid = data.user_id;  // Assume the response contains the user ID
        manageUserId(userid);
        closeBtnRef.current?.click();

      } else {
        const data = await response.json();
        setError(data.error || 'Login failed');
      }
    } catch (error) {
      setError('Something went wrong' + error);
    }
  };



  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validate inputs (optional)
    if (!email || !fullname) {
      setError('Please fill in both fields');
      return;
    }

    // Send user details to the backend API (Assuming POST /register)
    try {
      const response = await fetch(`${api_url}/views/register/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          name: fullname,
          groups: [],
        }),
      });


      if (response.ok) {
        await response.text();

        // On successful registration, redirect to the login page

      } else {
        const data = await response.text();

        setError(data || 'Registration failed');
      }
    } catch (error) {
      setError('Something went wrong' + error);
    }
  };

  const handleresendemail = async (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();

    try {

      // Correct URL with email appended
      const url = `${api_url}/views/resend_validation_email/?email=${email}`;

      // Sending a GET request (since you're sending email in the query parameter)
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.text();
      if (!response.ok) {
        console.error(result);
      }
    } catch (error) {
      console.error('Error sending validation key:', error);
      alert('Failed to send validation key');
    }
  };

  const handleresetpassword = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(handleresetpassword);

    if (!password || !reenterpassword || !uuid) {
      setError("Please fill in all the required fields.");
      return;
    }

    if (password.length < 10 || password.length > 12) {
      setValidationMessage('Password must be between 10 and 12 characters.');
      return;
    }

    if (password !== reenterpassword) {
      setValidationMessage('Passwords do not match.');
      return;
    }
    setValidationMessage('');
    setError('');

    try {
      const response = await fetch(`${api_url}/views/reset/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({

          password: password,
          uuid: uuid,
        }),
      });

      if (response.ok) {
        await response.text();


      } else {
        const data = await response.text();
        setError(data || 'Password reset failed');
      }
    } catch (error) {
      setError('Something went wrong' + error);
    }
  };



  return (
    <div className="modal fade" id="loginModal" tabIndex={-1}
      data-bs-backdrop="static" data-bs-keyboard="false"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-fullscreen-sm-down">
        <div className="modal-content">
          <div className="modal-header">
            <div className="d-flex w-100">
              {/* <h1 className="modal-title fs-5" id="exampleModalLabel">Register New</h1> */}
              {/* Button for toggling login */}
              <button type="button" className="btn btn-outline-primary flex-fill" onClick={() => { setislogged(true); setShowValidation(false); }}>Login</button>

              {/* Button for toggling validation */}
              <button type="button" className="btn btn-outline-warning flex-fill" onClick={() => { setShowValidation(true); setislogged(false); }}>Validation</button>
            </div>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body d-flex ">

            <img
              src="https://www.learningspiral.co.in/wp-content/uploads/2021/04/slider.png"
              className="sFlh5c FyHeAf iPVvYb"
              style={{ maxWidth: "650px", height: "200px", margin: "1px 0px", width: "400px" }}
              alt="UCanAssess | Online Examination System | Online Exam Solution"
              aria-hidden="false"
            />
            <div className="flex-grow-1 ms-3">
              {/* Conditional Rendering for Forms */}
              {islogged && (
                <form onSubmit={handleloginsubmit}>
                  <div className="container">
                    <h5>Login</h5>

                    <input type="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control form-control-sm " /><br />

                    <input type="password" id="password" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)} className="form-control form-control-sm" /><br />
                    <a href="#" onClick={() => { setislogged(false); setShowValidation(true); }}>Forgot Password </a><br />
                    <p>Not a member? <a href="#" onClick={() => { setislogged(false); }}>Register Now</a></p>
                    <button type="submit" className="btn btn-primary  mx-auto d-block ">Login</button>
                  </div>
                </form>
              )}

              {showValidation && (
                <>
                  <form onSubmit={handleresetpassword}>

                    <div>
                      <h5>Validation/Reset Password</h5>
                      <div className="d-flex mb-3">
                        <button className="btn btn-light m-0" disabled><i className="bi bi-envelope-fill"></i></button>
                        <input type="email" id="reset_email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control form-control-sm" />
                      </div>
                      <div className="mb-3">
                        <a href="#"
                          onClick={handleresendemail}>
                          Send Validation Key</a></div>
                      <div className="d-flex mb-3">
                        <button className="btn  btn-light m-0" disabled><i className="bi bi-lock-fill"></i></button>
                        <input type="password" placeholder=" password " value={password} required={true} onChange={(e) => setpassword(e.target.value)} className="form-control form-control-sm" /><br />
                      </div>
                      <div className="d-flex mb-3">
                        <button className="btn btn-light m-0" disabled><i className="bi bi-unlock-fill"></i></button>
                        <input type="password" placeholder=" re-enter password" required={true} value={reenterpassword} onChange={(e) => setreenterpassword(e.target.value)} className="form-control form-control-sm" /><br />
                      </div>
                      <div className="d-flex mb-3">
                        <button className="btn btn-light m-0" disabled><i className="bi bi-key-fill"></i></button>
                        <input type="validate key" placeholder=" validate key" value={uuid} required={true} onChange={(e) => setUuid(e.target.value)} className="form-control form-control-sm" /><br />
                      </div>
                      <button type="submit" className="btn btn-warning  mx-auto d-block">Validate and Set Password</button>

                    </div>
                  </form>

                  {validationMessage && <p className="text-danger">{validationMessage}</p>}
                  {error && <p className="text-danger">{error}</p>}
                </>


              )}

              {!islogged && !showValidation && (
                <form onSubmit={handleSubmit}>
                  <div className="container">
                    <h5>Registration</h5>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control form-control-sm" /><br />

                    <input type="text" placeholder="Full Name" value={fullname} onChange={(e) => setfullname(e.target.value)} className="form-control form-control-sm" /><br />
                    <p>Back to <a href="#" onClick={() => { setislogged(true); setShowValidation(false) }}>Sign in?</a></p>
                    <button type="submit" className="btn btn-light w-40 mx-auto d-block ">Register</button>
                  </div>
                </form>
              )}
            </div>
          </div>

          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={closeBtnRef} hidden>Close</button>
        </div>
      </div>
    </div >
  );
}

export default UserAuthcompoenent;