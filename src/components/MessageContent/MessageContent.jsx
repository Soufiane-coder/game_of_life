
import './MessageContent.scss';
import { ReactComponent as MessageIcon } from '../../assets/icons/message.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import { Zoom } from 'react-reveal';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectMessage } from '../../redux/routines/routines.selector';

const MessageContent = ({ setShowMessageContentPopUp, showMessageContentPopUp, message }) => {
    return (
        <div className='message-content__window'>
            <Zoom duration={500}>
                <div className="message-content__popup">
                    <div className="message-content__head">
                        <MessageIcon className="message-content__message-icon" />
                        <h2 className="message-content__title">Your Message</h2>
                        <CloseIcon className="message-content__close-icon" onClick={() => setShowMessageContentPopUp(false)} />
                    </div>
                    <p className="message-content__message">
                        {
                            message(String(showMessageContentPopUp))
                        }
                    </p>
                </div>
            </Zoom>

        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    message: selectMessage
})

export default connect(mapStateToProps)(MessageContent);