import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section className={`column flex-align-centr ${styles.section}`}>
      <Card className={`text-center column flex-align-centr ${styles.card}`}>
        <Card.Img
          className={`${styles.cardImg}`}
          src="https://picsum.photos/id/200/200"
        />
        <Card.Body className="column flex-align-centr">
          <Card.Text>
            Hello, I'm
            <span className={`${styles.myName}`}> Pavel Naumovic</span>.
            <br />
            I'm a Web Developer.
          </Card.Text>
          <Button
            onClick={() => {
              window.open(
                "https://pavsteruk.github.io/react-portfolio/#/portfolio","_self"
              );
            }}
            className={`${styles.btn}`}
          >
            View my work
          </Button>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Home;
