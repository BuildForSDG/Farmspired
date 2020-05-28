/* eslint-disable class-methods-use-this */
/* eslint-disable semi */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  MDBBtn,
  MDBJumbotron,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBIcon,
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
  MDBAnimation
} from 'mdbreact';
import './HomePage.css';
import soil from '../assets/soil.jpg';
import agric from '../assets/agric.jpg';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  scrollToTop() {
    return this.window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <MDBJumbotron fluid>
          <MDBContainer className="text-white text-center mt-5" style={{ height: '70vh' }}>
            <h1 className="h1-responsive display-2">Welcome to FarmSpired</h1>
            <hr />

            <p className="display-5 mx-5 mb-5">Eco-friendly farm produce.Digitalized database.The future of farming.</p>
            <MDBBtn href="#" className="home-btn" color="white">
              START NOW
            </MDBBtn>
          </MDBContainer>
        </MDBJumbotron>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="12" className="mt-4">
              <h2 className="text-center my-5 font-weight-bold">What We Are About</h2>
            </MDBCol>
            <MDBCol md="6">
              <p className="mb-1">
                Farmspired helps bring agriculture in Nigeria in a new light.The digitalized way.We provide trainings
                for upcoming farmers,databases to store farmers digitally whoa are in need of funds or otherr benefits
                and so much more
              </p>
              <p className="text-muted mb-1">
                lorem ipsum dalum lorem ipsum dalum ipsum lorem ipsum dalum lorem ipsum dalum ipsum lorem ipsum dalum
                lorem ipsum dalum ipsum
              </p>
              <p className=" text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quam hic, debitis blanditiis, eum similique
                itaque maiores error cumque in corrupti, omnis fugit magni magnam quo necessitatibus amet harum vel!
              </p>
              <hr className="my-5 " />
            </MDBCol>
            <MDBCol md="6">
              <img src={agric} alt="" className="img-fluid" width="800" />
              <hr className="my-5" />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="4">
              <MDBAnimation reveal type="fadeInLeft">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBCardImage cascade className="img-fluid" />
                  <MDBCardBody cascade className="text-center">
                    <MDBCardTitle>
                      <MDBIcon icon="bars" className="pink-text pr-2" />
                      <strong>CAPITAL FORUM</strong>
                    </MDBCardTitle>
                    <MDBCardText>
                      We set farmers who are not financialy capable to start their business with government
                      offiials,NGOs or other organizations <br></br> for provision of capital.
                    </MDBCardText>
                    <MDBBtn href="#" className="more-btn" gradient="forestgreen" rounded>
                      More
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="4">
              <MDBAnimation reveal type="fadeInLeft">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBCardImage cascade className="img-fluid" />
                  <MDBCardBody cascade className="text-center">
                    <MDBCardTitle>
                      <MDBIcon icon="css3" brand className="pink-text pr-2" />
                      <strong>DATABASE</strong>
                    </MDBCardTitle>
                    <MDBCardText>
                      As a platform we register Farmers in order to get funding or other benefits from either the
                      government or private bodies and they go to the right people who need them, no partiality.
                    </MDBCardText>
                    <MDBBtn href="#" className="more-btn" gradient="forestgreen" rounded>
                      More
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="4">
              <MDBAnimation reveal type="fadeInDown">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBCardImage cascade className="img-fluid" />
                  <MDBCardBody cascade className="text-center">
                    <MDBCardTitle>
                      <MDBIcon icon="cubes" className="blue-text pr-2" />
                      <strong>TRAININGS</strong>
                    </MDBCardTitle>
                    <MDBCardText>
                      We offer farmers who lack the necessary skill to run an advanced farming system trainings and
                      orientation programs which would be beneficial to the farmers in various areas
                    </MDBCardText>
                    <MDBBtn href="#" className="more-btn" gradient="forestgreen" rounded>
                      More
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>

            <MDBCol md="4">
              <MDBAnimation reveal type="fadeIn">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBCardImage cascade className="img-fluid" />
                  <MDBCardBody cascade className="text-center">
                    <MDBCardTitle>
                      <MDBIcon icon="css3" brand className="pink-text pr-2" />
                      <strong>PURCHASE/MARKETING</strong>
                    </MDBCardTitle>
                    <MDBCardText>
                      We link farmers to sellers of various raw materials and farm equipments We also link the farmers
                      to their potential customers
                    </MDBCardText>
                    <MDBBtn href="#" className="more-btn" gradient="forestgreen" rounded>
                      More
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="4">
              <MDBAnimation reveal type="fadeInRight">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBCardImage cascade className="img-fluid" />
                  <MDBCardBody cascade className="text-center">
                    <MDBCardTitle>
                      <MDBIcon icon="table" className="green-text pr-2" />
                      <strong>ADVANCED MACHINERY HIRING</strong>
                    </MDBCardTitle>
                    <MDBCardText>
                      This is a forum where registered farmers can rent heavy machinery , tools or equipments for your
                      farm work and return at an agreed date.
                    </MDBCardText>
                    <MDBBtn href="#" className="more-btn" gradient="forestgreen" rounded>
                      More
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="4">
              <MDBAnimation reveal type="fadeInUp">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBCardImage cascade className="img-fluid" />
                  <MDBCardBody cascade className="text-center">
                    <MDBCardTitle>
                      <MDBIcon icon="arrows-alt" className="blue-text pr-2" />
                      <strong>iMPROVED SEED /FERTILIZERS</strong>
                    </MDBCardTitle>
                    <MDBCardText>
                      Since we already have a database, the government can provide seeds to the farmers for free or at a
                      subsidized rate through the seed servicing forum
                    </MDBCardText>

                    <MDBBtn className="more-btn" gradient="forestgreen">
                      More
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}
export default HomePage;
