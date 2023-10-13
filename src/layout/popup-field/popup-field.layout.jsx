
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './popup-field.style.scss';
import { selectCurrentPopup } from '../../redux/popup/popup.selector';
import { popupActionTypes } from '../../redux/popup/popup.types';
import MessageWindow from '../../components/MessageWindow/MessageWindow';
import PopupWindowRoutine from '../../components/PopupWindowRoutine/add-routine-popup.component';
import MessageContent from '../../components/MessageContent/MessageContent';
import { Zoom} from "react-reveal";
import ReactModal from "react-modal";
import { useState } from 'react';
import { hidePopup } from '../../redux/popup/popup.actions';

const PopupField = ({ popup , hidePopup }) => {

    if(popupActionTypes.MESSAGE_POPUP !== popup.type &&
        popupActionTypes.ADD_ROUTINE_POPUP !== popup.type &&
        popupActionTypes.CHECK_POPUP !== popup.type){
            return;
        }

    const handleCloseModal = () => {
      hidePopup()
    };

    const choosePopup = () => {
        switch (popup.type) {
            case popupActionTypes.MESSAGE_POPUP:
                return (
                    <MessageContent routineId={popup.payload} />
                )
            case popupActionTypes.ADD_ROUTINE_POPUP:
                return (
                    <PopupWindowRoutine />
                )
            case popupActionTypes.CHECK_POPUP:
                return (
                    <MessageWindow routineId={popup.payload} />
                )
            case popupActionTypes.HIDE_POPUP:
                return null;
            default:
                return null
        }
    }
    return (
        <div className="popup-model">
          <ReactModal
            isOpen={true}
            contentLabel="onRequestClose Example"
            onRequestClose={handleCloseModal}
            ariaHideApp={false} 
          >
            <Zoom>
              <div className="popup-model__wrapper">
                {
                    choosePopup()
                }
              </div>
            </Zoom>
          </ReactModal> 
        </div>
      );

}
const mapStateToProps = createStructuredSelector({
    popup: selectCurrentPopup
})

const mapDispatchToProps = (dispatch) => ({
    hidePopup: () => dispatch(hidePopup())
})

export default connect(mapStateToProps, mapDispatchToProps)(PopupField);