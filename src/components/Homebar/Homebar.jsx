import React from "react";
import "./Homebar.css";
import image from "./Fesem.png";
import Header from "../Header/Header";

function Homebar() {
  return (
    <>
        <div className="header">
        <div className="logo"></div>
        <h1>FESEM</h1>
        <div className="links">
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>
      </div>
    <hr />
      <h2 className="about-heading">About</h2>
      <div className="content"
      >
        <div className="about">
          <h2 style={{ fontWeight: "bold" }}>MIED FESEM Machine</h2>
          <br />
          <ul>
            <li>
              Officer/Lab In-charge -{" "}
              <span style={{ fontWeight: "bold" }}>Dr Kaushik Pal </span>
            </li>
            <li>
              In-charge Email/Phone -{" "}
              <span style={{ fontWeight: "bold" }}>
                fesem@me.iitr.ac.in
              </span>
            </li>
            <li>
              Location -{" "}
              <span style={{ fontWeight: "bold" }}>
                MIED West Block (ground floor)
              </span>
            </li>
            <li>
              Status - <span style={{ fontWeight: "bold" }}>Active</span>
            </li>
            <li>
              Sample Requirements - <br />
              <ol style={{ fontWeight: "bold" }}>
                <li>Fine Powder Sample</li>
                <br />
                <li>Solid Sample of maximum size 1cm x 1cm x 1cm</li>
              </ol>
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Specifications</span>
              <br />
              <ul>
                <li>Source:- Thermal field emission type</li>
                <li>Stability:- better than 0.2%/h</li>
                <li>
                  <span>Make:-</span> Carl Zeiss
                </li>
                <li>
                  <span>Make:-</span> Gemini 1 (Sigma 300)
                </li>
                <li>
                  <span>Year of Installation:-</span>2022
                </li>
                <li>
                  <span>Magnification:-</span>
                  <br />
                  <ul>
                    <li>37X - 1,00,000X (SE)</li>
                    <li>80X - 2,50,000X (Inlens)</li>
                    <li>100X - 1,00,000X (BSE)</li>
                  </ul>
                </li>
                <li>
                  <span>Resolution:-</span> up to 1nm
                </li>
              </ul>
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Accessories</span>
              <br />
              <ul>
                <li>Gold/Chromium/Carbon Coating:-</li>
                <li>SE detector:-</li>
                <li>BSE detector:-</li>
                <li>EDS detector:-</li>
                <li>EBSD detector:-</li>
              </ul>
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Additional Accessories</span>
              <br />
              <ul>
                <li>Useful magnification:- Default</li>
              </ul>
            </li>
          </ul>
          <br />
        </div>
        <br />

        <div className="wrapper">
          <img className="image" src={image} />
        </div>
      </div>
    </>
  );
}

export default Homebar;
