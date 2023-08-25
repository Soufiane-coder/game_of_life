import './UserBar.scss';
import DisplayModeSwitcher from '../../components/DisplayModeSwitcher/DisplayModeSwitcher';
import Goku from '../../assets/badjets/goku_1-stand.gif';
const UserBar = ({ username }) => {

    return (
        <div className="user-bar">
            {/* <div className="user-bar__tree-lines">
                <div className="user-bar__line-one" />
                <div className="user-bar__line-two" />
                <div className="user-bar__line-three" />
            </div> */}
            <DisplayModeSwitcher />
            <div className="user-bar__rate">
                <div className="et checked">★</div>
                <div className="et">★</div>
                <div className="et">★</div>
                <div className="et">★</div>
                <div className="et">★</div>
            </div>
            <img src="" alt="user" className="user-bar__user-img" />
            {/* <img className="user-bar__character" src={Goku} alt="" /> */}
            <div className="user-bar__username">{username}</div>
        </div>
    )

}

export default UserBar;