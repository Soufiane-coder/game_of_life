
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './popup-field.style.scss';
import { selectCurrentPopup } from '../../redux/popup/popup.selector';
import { popupActionTypes } from '../../redux/popup/popup.types';
import MessageWindow from '../../components/MessageWindow/MessageWindow';
import PopupWindowRoutine from '../../components/PopupWindowRoutine/PopupWindowRoutine';
import MessageContent from '../../components/MessageContent/MessageContent';

const PopupField = ({ popup }) => {

    switch (popup) {
        case popupActionTypes.MESSAGE_POPUP:
            return (
                <MessageContent /> // todo have to be adopted
            )
        case popupActionTypes.ADD_ROUTINE_POPUP:
            return (
                <PopupWindowRoutine />
            )
        case popupActionTypes.CHECK_POPUP:
            return (
                <MessageWindow />
            )
        default: return null;
    }
}
const mapStateToProps = createStructuredSelector({
    popup: selectCurrentPopup
})
export default connect(mapStateToProps)(PopupField);