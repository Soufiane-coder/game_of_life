
import './NotificationPromp.scss';

const NotificationPromp = ({ Icon = () => <div></div>, text = "text", description = "description" }) => {

    return (
        <div className='notification-promp'>
            <div className="notification-promp__icon">
                <Icon />
            </div>
            <div className="notification-promp__text">
                {text}
            </div>
            <div className="notification-promp__description">
                {description}
            </div>
            <button className="notification-promp__cancel">
                cancel
            </button>
            <button className="notification-promp__validation">
                valider
            </button>
        </div>
    )
}

export default NotificationPromp;