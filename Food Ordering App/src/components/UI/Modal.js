import { Fragment } from "react/cjs/react.production.min";
import classes from "./Modal.module.css";
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const port = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, port)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, port)}
    </Fragment>
  );
};

export default Modal;