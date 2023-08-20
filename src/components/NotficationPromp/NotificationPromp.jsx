
import { connect } from 'react-redux';
import './NotificationPromp.scss';
import { setNotificationPrompState, callNotificationPrompCallback } from '../../redux/notification-promp/notification-promp.action';
import { createStructuredSelector } from 'reselect';
import { selectCurrentNotificationPrompState } from '../../redux/notification-promp/notification-promp.selector';

const NotificationPromp = ({ Icon = () => <div></div>, text = "text", description = "description", currentNotificationPrompState, setNotificationPrompState, callNotificationPrompCallback }) => {

    const handleCancel = (event) => {
        event.preventDefault();
        setNotificationPrompState({ ...currentNotificationPrompState, display: false });
    }

    const handleValidation = (event) => {
        event.preventDefault();
        callNotificationPrompCallback();
        setNotificationPrompState({ ...currentNotificationPrompState, display: false });
    }

    return (
        <div className='notification-promp' style={{
            marginTop: currentNotificationPrompState.display ? '0' : '-140px'
        }}>
            <div className="notification-promp__icon">
                <Icon />
            </div>
            <div className="notification-promp__text">
                {text}
            </div>
            <div className="notification-promp__description">
                {description}
            </div>
            <button className="notification-promp__cancel" onClick={handleCancel}>
                cancel
            </button>
            <button className="notification-promp__validation" onClick={handleValidation}>
                valider
            </button>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentNotificationPrompState: selectCurrentNotificationPrompState
})

const mapDispatchToProps = (dispatch) => ({
    setNotificationPrompState: (stateShow) => dispatch(setNotificationPrompState(stateShow)),
    callNotificationPrompCallback: () => dispatch(callNotificationPrompCallback()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NotificationPromp);