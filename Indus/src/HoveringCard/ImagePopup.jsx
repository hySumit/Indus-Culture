import React from "react";
import { MdCancel } from "react-icons/md";


const ImagePopup = ({ image, onClose }) => {
  return (
    <div className={`modal-overlay ${image ? 'active' : ''}`} onClick={onClose}>
      <div className={`modal-content ${image ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
        <button className="cancel-button" onClick={onClose}>
          <MdCancel />
        </button>
        <img className="w-[370px] p-[40px]" src={image} alt="" />
      </div>
    </div>
  );
};

export default ImagePopup;
