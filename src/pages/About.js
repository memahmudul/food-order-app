import React from 'react';
import '../styles/About.css'
import image from "../assets/chhola.jpg";

function About() {
  return (
      <section className="about">
          <h1 className="heading">About Us</h1>
          <div className="row">
              <div className="image">
                  <img src={image} alt="" />
              </div>
              <div className="content">
              <h3>we take care of your healthy life</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            commodi nisi iusto doloribus delectus sapiente repellat. Odio autem
            neque beatae excepturi, nihil deleniti odit nostrum sunt placeat,
            quos eius optio.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aliquam
            maiores doloribus a nobis, illum nisi reiciendis obcaecati dolores
            ipsum.
          </p>

              </div>
          </div>
      </section>
  );
}

export default About;
