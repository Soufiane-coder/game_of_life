import './MessageWindow.scss';
import { ReactComponent as MessageIcon } from '../../assets/icons/message.svg';
import { useState } from 'react';
import myServer from "../server/server";
import $ from 'jquery';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { checkRoutine } from '../../redux/routines/routines.actions';
import { Zoom } from 'react-reveal';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { hidePopup } from '../../redux/popup/popup.actions';

const MessageWindow = ({ user, checkRoutine, routineId, hidePopup }) => {
    const [messageInput, setMessageInput] = useState('');

    const [isLoading, setIsLoading] = useState(false);



    const handleChange = (event) => {
        const { value } = event.target;
        setMessageInput(value);
    }

    const handleCheckRoutine = async () => {
        setIsLoading(true);
        try {
            await $.ajax({
                url: `${myServer}/addOne.php`,
                method: 'get',
                data: {
                    id: routineId,
                    userID: user.userId,
                    message: messageInput,
                }
            });
            checkRoutine(routineId);
            hidePopup()
        } catch (err) {
            console.error(`Error cannot checked this routine`, err.message);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="message-window">
            <Zoom duration={500}>
                <div className="message-window__popup">
                    <div className="message-window__head">
                        <MessageIcon className='message-window__message-icon' />
                        <h2 className='message-window__title'>Write message</h2>
                    </div>
                    <p className="message-window__description">
                        Write a message for future you to motivate, noting the progress or planing the next step
                    </p>
                    <textarea type="text" className='message-window__input-text' value={messageInput.message} onChange={handleChange} />
                    <div className="message-window__buttons">
                        <button className="message-window__button message-window__button--filled" onClick={handleCheckRoutine}>
                            {
                                isLoading ? <LoadingSpinner /> : "Check this routine"
                            }
                        </button>
                        <button className="message-window__button message-window__button--outlined" onClick={() => hidePopup()}>Cancel</button>
                    </div>
                </div>
            </Zoom>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
    checkRoutine: routineId => dispatch(checkRoutine(routineId)),
    hidePopup: () => dispatch(hidePopup())
})

export default connect(mapStateToProps, mapDispatchToProps)(MessageWindow);