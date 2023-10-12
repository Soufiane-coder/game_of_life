import React, { useState } from "react";
import ReactModal from "react-modal";
import './add-routine-popup.style.scss';
import { Zoom} from "react-reveal";
import PopupWindowRoutine from "../PopupWindowRoutine/PopupWindowRoutine";
export const AddRoutinePopup = () => {
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false)
  };

  return (
    <div className="popup-model">
      <ReactModal
        isOpen={showModal}
        contentLabel="onRequestClose Example"
        onRequestClose={handleCloseModal}
      >
        <Zoom>
          <div className="popup-model__wrapper">
            <PopupWindowRoutine/>
          </div>
        </Zoom>
      </ReactModal> 
    </div>
  );
};
