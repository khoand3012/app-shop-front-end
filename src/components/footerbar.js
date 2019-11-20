import React, { useState } from "react";
import logo from './images/express-delivery-services.png'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterBar = () => {
  return (
    <MDBFooter className="font-smaller pt-4 mt-4 footer container-fluid bg-info">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
            <h5 className="title">About Us</h5>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare
              ac urna vel volutpat. Duis placerat mi molestie, ullamcorper nibh
              nec, pellentesque nibh. Pellentesque vel consectetur tortor.
              Suspendisse vitae nisl quis nibh luctus pretium. Curabitur tempor
              nibh odio, id sollicitudin nisi convallis eget&nbsp;
              <a href="#">Read more...</a>
            </p>
          </MDBCol>
          <MDBCol md="4">
            <h5 className="title">Contact Us</h5>
            <ul className="row">
              <a className="text-decoration-none" href="#">
                <li className="list-unstyled btn btn-info">
                  <i className="fa fa-facebook-square"></i>&nbsp;
                  <span>Facebook</span>
                </li>
              </a>
              <a className="text-decoration-none" href="#">
                <li className="list-unstyled btn btn-info">
                  <i className="fa fa-twitter-square"></i>&nbsp;
                  <span>Twitter</span>
                </li>
              </a>
              <a className="text-decoration-none" href="#">
                <li className="list-unstyled btn btn-info">
                  <i className="fa fa-instagram"></i>&nbsp;
                  <span>Instagram</span>
                </li>{" "}
              </a>
              <a className="text-decoration-none" href="#">
                <li className="list-unstyled btn btn-info">
                  <i className="fa fa-envelope-square"></i>&nbsp;
                  <span href="#!">Email</span>
                </li>{" "}
              </a>
            </ul>
          </MDBCol>
          <MDBCol md="4">
              <h5 className="title">Delivery</h5>
              <img src={logo} className="logo"></img>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" Nguyen Duong Khoa"}          
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};
export default FooterBar;
