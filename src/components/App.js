import React, { Component } from 'react';
import Counter from './counter';
import Nav from  './Nav';
import { Link, Route, BrowserRouter as Router  } from 'react-router-dom';
import '../style.scss';




class App extends Component {
  render() {
    return (
            <div>
                <Nav />
               <div className="card">
                <h5 className="card-header info-color white-text text-center py-4">
                <strong>Sign up</strong>
                </h5>
                <div className="card-body px-lg-5 pt-0">
                <form className="text-center">
                <div className="form-row">
                <div className="col">
                    <div className="md-form">
                        <input type="text" id="materialRegisterFormFirstName" className="form-control" />
                        <label>First name</label>
                    </div>
                </div>
                <div className="col">
                    <div className="md-form">
                        <input type="email" id="materialRegisterFormLastName" className="form-control" />
                        <label>Last name</label>
                    </div>
                </div>
                </div>
            <div className="md-form mt-0">
                <input type="email" id="materialRegisterFormEmail" className="form-control" />
                <label>E-mail</label>
            </div>
            <div className="md-form">
                <input type="password" id="materialRegisterFormPassword" className="form-control" aria-describedby="materialRegisterFormPasswordHelpBlock" />
                <label>Password</label>
                <small id="materialRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
                    At least 8 characters and 1 digit
                </small>
            </div>
            <div className="md-form">
                <input type="password" id="materialRegisterFormPhone" className="form-control" aria-describedby="materialRegisterFormPhoneHelpBlock" />
                <label>Phone number</label>
                <small id="materialRegisterFormPhoneHelpBlock" className="form-text text-muted mb-4">
                    Optional - for two step authentication
                </small>
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="materialRegisterFormNewsletter" />
                <label className="form-check-label">Subscribe to our newsletter</label>
            </div>
            <button className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Sign in</button>
            <p>or sign up with:</p>
            <a type="button" className="btn-floating btn-fb btn-sm">
                <i className="fab fa-facebook-f"></i>
            </a>
            <a type="button" className="btn-floating btn-tw btn-sm">
                <i className="fab fa-twitter"></i>
            </a>
            <a type="button" className="btn-floating btn-li btn-sm">
                <i className="fab fa-linkedin-in"></i>
            </a>
            <a type="button" className="btn-floating btn-git btn-sm">
                <i className="fab fa-github"></i>
            </a>
            <p>By clicking
                <em>Sign up</em> you agree to our
                <a href="" target="_blank">terms of service</a>
              </p> </form>
    </div>

</div>
<Counter />
            </div>
    )
  }
}
export default App;