import React, { Component } from "react";
import PropTypes from "prop-types";
import s from "./Modal.module.css";

class Modal extends Component {
  static propTypes = {
    largeImageUrl: PropTypes.string.isRequired,
    onModalClose: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onModalClose();
    }
  };

  handleOverlayClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      this.props.onModalClose();
    }
  };

  render() {
    const { largeImageUrl } = this.props;

    return (
      <div className={s.overlay} onClick={this.handleOverlayClick}>
        <div className={s.modal}>
          <img src={largeImageUrl} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
