/* eslint-disable object-curly-newline */
import React from 'react';
import { MDBContainer, MDBCard, MDBBtn, MDBRow } from 'mdbreact';
import './LoginPage.css';

function LoginPage() {
  return (
    <div className="formPage">
      <MDBContainer>
        <MDBCard>
          <div className="header pt-1 blue-gradient">
            <MDBRow className="d-flex justify-content-center">
              <h3 className="white-text mb-3 pt-3 font-weight-bold">SIGN IN</h3>
            </MDBRow>
          </div>
          <form className="text-center border border-light p-5" action="#!">
            <input type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="E-mail" />

            <input type="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Password" />

            <div className="text-center">
              <div>
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember" />
                  <label className="custom-control-label" htmlFor="defaultLoginFormRemember">
                    Remember me
                  </label>
                </div>
              </div>
              <br />
            </div>
            <MDBBtn className="btn btn-block my-4" type="submit">
              SIGN IN
            </MDBBtn>

            <p>
              Not a member?
              <br />
              <a href="/registrationPage">Sign Up</a>
            </p>

            <p>or sign up with:</p>

            <a href="#" className="mx-2" role="button">
              <i className="fab fa-facebook-f light-blue-text"></i>
            </a>
            <a href="#" className="mx-2" role="button">
              <i className="fab fa-twitter light-blue-text"></i>
            </a>
            <a href="#" className="mx-2" role="button">
              <i className="fab fa-linkedin-in light-blue-text"></i>
            </a>
            <a href="#" className="mx-2" role="button">
              <i className="fab fa-github light-blue-text"></i>
            </a>
          </form>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default LoginPage;
