import Picture from "../picture";

const About = () => (
  <div className="about">
    <div className="about__img">
      <Picture
        webP="images/spiralStairs.webp"
        jpg="images/spiralStairs.jpeg"
        alt="Spiral staircase"
      />
    </div>

    <div>
      <p>
        The Fibonacci sequence is a series of numbers where a number is the
        addition of the last two numbers, starting with 0, and 1. For example,
        the early part of the sequence is 0, 1, 1, 2, 3, 5, 8, 13, 21... The
        mathematical equation describing it is:
      </p>
      <h3>Xn+2= Xn+1 + Xn</h3>
      <p>
        The Fibonacci sequence was discovered back in 1202, and is still used in
        a variety of different ways apart from mathematics- including image
        composition to stock trading!
      </p>
    </div>
  </div>
);

export default About;
