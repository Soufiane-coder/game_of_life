import React from "react";
import $ from 'jquery';
import { ReactComponent as Done } from '../../assets/icons/done.svg';
import { ReactComponent as Remove } from '../../assets/icons/remove.svg';
import { ReactComponent as Skip } from '../../assets/icons/skip.svg';
import { ReactComponent as Undone } from '../../assets/icons/undone.svg';
import { ReactComponent as MessageIcon } from '../../assets/icons/message.svg';
import './Routine.scss';
import { connect } from "react-redux";
import { selectCurrentRoutines } from "../../redux/routines/routines.selector";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { removeRoutine, skipRoutine } from "../../redux/routines/routines.actions";
import { buySkip } from '../../redux/user/user.actions';
import myServer from "../server/server";



const Routine = ({ user, routine, removeRoutine, skipRoutine, buySkip, setShowMessagePopUp, setShowMessageContentPopUp }) => {
	const handleDone = async (event) => {
		const id = event.target.closest('.routine').id;
		setShowMessagePopUp(id);
	}

	const handleSkip = async (event) => {
		const id = event.target.closest('.routine').id;
		try {
			await $.ajax({
				url: `${myServer}/skipTaskDay.php`,
				method: "get",
				data: {
					id: id,
					userId: user.userId
				}
			});
			skipRoutine(id);
			buySkip();
		} catch (err) {
			console.error(`Error cannot send skip sign to the data base`, err.message);
			return;
		}

	}

	const handleRemove = async (event) => {
		if (!window.confirm("Do realy want to remove this item")) return;
		const id = event.target.closest('.routine').id;
		try {
			await $.ajax({
				url: `${myServer}/deleteRoutine.php`,
				method: 'get',
				data: {
					id: id,
				}
			});
			removeRoutine(id);
		} catch (err) {
			console.error(`Error cannot checked this routine`, err.message);
			return;
		}
	}

	const handleMessage = (event) => {
		const id = event.target.closest('.routine').id;
		setShowMessageContentPopUp(id);
	}

	return (
		<div className='routine' id={routine.taskId} style={
			routine.submitted === "1" ? {
				transform: "translateY(1.5rem)",
				boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.262)",
			}
				: {}
		}>
			{
				routine.priority === 'important' ? <div className="important"></div> : ""
			}

			{
				routine.combo !== '0' ? <div className="comboed"></div> : ""
			}
			<div className="emoji">{routine.emoji}</div>
			<div className="title">{routine.title}</div>
			<div className="description">{routine.description}</div>
			<div className="extra">
				<div className="combo">{routine.combo === '0' ? "" : `⚡${routine.combo}`}</div>
				<div className="skip-num">{routine.skip === '0' ? "" : `↪️${routine.skip}`}</div>
				<div className="level">🎚️{routine.level}</div>
			</div>
			<div className="buttons">
				{
					routine.submitted === '0' ?
						<button className="btn btn-success done" onClick={handleDone}><Done /></button>
						:
						<button className="btn btn-secondary done" disabled><Undone /></button>
				}
				<button className="btn btn-info skip" disabled={user.coin < 10} onClick={handleSkip}><Skip /></button>
				<button className="btn btn-message message "><MessageIcon onClick={handleMessage} /></button>
				<button className="btn btn-danger remove  " onClick={handleRemove}><Remove /></button>
			</div>
		</div>
	)

}

const mapStateToProps = createStructuredSelector({
	routinesCollection: selectCurrentRoutines,
	user: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => ({
	removeRoutine: (taskId) => dispatch(removeRoutine(taskId)),
	skipRoutine: (taskId) => dispatch(skipRoutine(taskId)),
	buySkip: () => dispatch(buySkip()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Routine);