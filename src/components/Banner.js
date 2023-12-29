import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
// import headerImg from "../assets/img/my.jpeg";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  // Deleting the typing words
  const [isDeleteing, setIsDeleteing] = useState(false);
  const toRotate = [" Associate Software Engineer"];
  // const toRotate = [" Associate Software Engineer", "Web Desinger", "UI/UX Engineer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleteing
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (isDeleteing) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleteing && updateText === fullText) {
      setIsDeleteing(true);
      setDelta(period);
    } else if (isDeleteing && updateText === "") {
      setIsDeleteing(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-item-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio !</span>
            <h2>{`Hey, I am Sanduni Abeyrathna,`}</h2>
            <h1>
              <span className="wrap">{text}</span>
            </h1>
            <p>
              As an Associate Software Engineer, I contribute to the development
              and maintenance of software applications, working collaboratively
              within a dynamic team environment.
            </p>
            <button onClick={() => console.log("connect")}>
              Let's Get In Touch <ArrowRightCircle size={25}></ArrowRightCircle>
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={""} alt="Headder Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
