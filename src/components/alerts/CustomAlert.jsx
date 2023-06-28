import React, { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

export default function CustomAlert({ message, show, duration, onDismiss, redirectPath }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (show && duration) {
      const timeoutId = setTimeout(() => {
        onDismiss();
      }, duration);

      if (show && duration && redirectPath) {
        setTimeout(() => {
          navigate(redirectPath);
        }, duration);
      }

      return () => {
        if (timeoutId) {
          clearTimeout(timeoutId);
        };
      }
    }
  }, [show, duration, onDismiss]);

  const handleClose = () => {
    onDismiss();
    navigate(redirectPath);
  };

  return (
    <Modal show={show} onHide={handleClose} centered className='d-flex justify-content-center align-items-center m-0 p-0'>
      <Modal.Header className="bg-warning text-white">
        <Modal.Title>Info</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
    </Modal>
  );
}

CustomAlert.propTypes = {
  message: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  duration: PropTypes.number.isRequired,
  onDismiss: PropTypes.func.isRequired,
  redirectPath: PropTypes.string.isRequired
};