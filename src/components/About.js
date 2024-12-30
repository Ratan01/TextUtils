import React from "react";

export default function About(props) {
  return (
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      {/* <h1 style={{ color: 'blue' }}>About Us</h1> */}
      <section className="about-section my-2">
        <h2 style={{ color: 'red' }}>Who We Are</h2>
        <p>
          At TextUtils, we’re dedicated to focus on primary source to manupulate the text form. Founded 
          in 2024.
        </p>
      </section>
      <section className="about-section my-2">
        <h2 style={{ color: 'red' }}>Our Story</h2>
        <p>
          We dont have any story.
        </p>
      </section>
      <section className="about-section my-2">
        <h2 style={{ color: 'red' }}>What We Do</h2>
        <p>
          We specialize in making and manupulating different text.
        </p>
      </section>
      <section className="about-section my2">
        <h2 style={{ color: 'red' }}>Why Choose Us?</h2>
        <p>
          We provide you the most of text manipulation.
        </p>
      </section>
    </div>
  );
}
