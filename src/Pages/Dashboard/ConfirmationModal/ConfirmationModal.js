import React from 'react';

const ConfirmationModal = ({title,message,closeModal,successAction,successButtonName,data}) => {
    return (
        <div>
           
           <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">{title}</h3>
    <p className="py-4">{message}</p>
    <div className="modal-action">
      <label onClick={()=>successAction(data)} htmlFor="confirmation-modal" className="btn btn-secondary text-white">{successButtonName}</label>
      <label  onClick={closeModal} className="btn outline btn-error text-white">Cancel</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default ConfirmationModal;