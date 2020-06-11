/* eslint-disable object-curly-newline */
import React from 'react';
import { MDBContainer, MDBCard, MDBBtn, MDBRow } from 'mdbreact';

function RegistrationPage() {
  return (
    <div className="formPage">
      <MDBContainer sm="12">
        <MDBCard>
          <div className="header pt-3 blue-gradient">
            <MDBRow className="d-flex justify-content-center">
              <h3 className="white-text mb-3 pt-3 font-weight-bold">SIGN UP</h3>
            </MDBRow>
          </div>
          <form className="text-center border border-light p-5" action="#!">
            <input
              required
              type="text"
              id="defaultLoginFormText"
              className="form-control mb-4"
              placeholder="Enter First Name"
            />
            <input
              required
              type="text"
              id="defaultLoginFormText"
              className="form-control mb-4"
              placeholder="Enter Second Name"
            />
            <input required type="text" id="defaultLoginFormText" className="form-control mb-4" placeholder="Address" />
            <input
              required
              type="email"
              id="defaultLoginFormEmail"
              className="form-control mb-4"
              placeholder="E-mail"
            />
            <input
              required
              type="password"
              id="defaultLoginFormPassword"
              className="form-control mb-4"
              placeholder="Password"
            />
            <MDBBtn className="btn btn-block my-4" type="submit">
              SIGN UP
            </MDBBtn>

            <p>
              Already a member?
              <br />
              <a href="/login">Click to sign in</a>
            </p>

            <p>or sign in with:</p>

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

export default RegistrationPage;
