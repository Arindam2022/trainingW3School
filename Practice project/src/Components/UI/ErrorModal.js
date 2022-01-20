import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onErrorHandler} />;
};

const Modal = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.msg}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onErrorHandler}>Got It!!</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onErrorHandler={props.onErrorHandler} />,
        document.getElementById("backdrop-port")
      )}
      {ReactDOM.createPortal(
        <Modal
          title={props.title}
          msg={props.msg}
          onErrorHandler={props.onErrorHandler}
        />,
        document.getElementById("modal-port")
      )}
    </React.Fragment>
  );
};
export default ErrorModal;
