import React from "react";
import $ from 'jquery';
import { ReactComponent as Done } from '../../assets/icons/done.svg';
import { ReactComponent as Remove } from '../../assets/icons/remove.svg';
import { ReactComponent as Skip } from '../../assets/icons/skip.svg';
import { ReactComponent as Undone } from '../../assets/icons/undone.svg';
import { ReactComponent as MessageIcon } from '../../assets/icons/message.svg';
import { ReactComponent as MoreOptionsIcon } from '../../assets/icons/more.svg';
import './Routine.scss';
import { connect } from "react-redux";
import { selectCurrentRoutines } from "../../redux/routines/routines.selector";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { removeRoutine, skipRoutine, setArchivedOption } from "../../redux/routines/routines.actions";
import { buySkip } from '../../redux/user/user.actions';
import myServer from "../server/server";
import { useState } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { ReactComponent as GoalIcon } from '../../assets/icons/goal.svg';
import { useHistory } from "react-router-dom";
import { displayCheckPopupState, displayMessagePopupState } from "../../redux/popup/popup.actions";
import { ReactComponent as Cracks } from '../../assets/cracks.svg';
import { setArchivedOptionInFirebase } from "../../../lib/firebase";
import { deleteRoutineFromFirebase } from "../../../lib/firebase";

const Routine = (
	{ 
		user, routine, removeRoutine, setArchivedOption,
		skipRoutine, buySkip,
		displayCheckPopupState, displayMessagePopupState, notificationSystem
	}) => {
	const history = useHistory();


	const [showOtherOptions, setShowOtherOptions] = useState(false);
	const [deleteLoading, setDeleteLoading] = useState(false);
	const [skipLoading, setSkipLoading] = useState(false);

	const handleDone = async (event) => {
		const id = event.target.closest('.routine').id;
		displayCheckPopupState(id);
	}

	const handleSkip = async (event) => {
		setSkipLoading(true);
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
		} finally {
			setSkipLoading(false);
		}

	}

	const handleRemoveRoutine = async (routineId) => {
		setDeleteLoading(true);
		try{
			await deleteRoutineFromFirebase(user.uid, routineId);
			removeRoutine(routineId);
		}
		catch(err){
			console.error(err)
		}
		finally{
			setDeleteLoading(false)
		}
	}

	const handleRemove = async (event) => {
		event.preventDefault();
		const { id } = event.target.closest('.routine');
		const notification = notificationSystem.current;
		notification.addNotification({
			title: 'Do you really want to delete this item',
			message: routine.title,
			level: 'warning',
			autoDismiss: 0,
			children : (
				<div style={{display: 'flex', justifyContent: 'space-between'}}>
					<button style={{border: 'none'}}>cancel</button>
					<button onClick={() => handleRemoveRoutine(id)} style={{backgroundColor: '#ebad1a',color: '#fff', border: 'none'}}>Delete this rouitne</button>
				</div>
			),
			position: 'tc',
		});
	}

	const handleMessage = (event) => {
		const id = event.target.closest('.routine').id;
		displayMessagePopupState(id);
	}

	const handleRoadMapClick = (event) => {
		const { id } = event.target.closest('.routine');
		history.push(`/road-map/${id}`)
	}
	return (
		
			<div className='routine' id={routine.routineId}>
				
				{
					routine.priority === 'important' && <div className="important"></div>
				}
				{
					routine.priority === 'medium' && <div className="medium"></div>
				}
				{/* {
					<Cracks style={{ width: '100%', position: 'absolute', zIndex: '0', height: '100%', top: '0', left: '0' }} />
				} */}

				<div className="emoji" style={{ backgroundColor: routine.bgEmojiColor }}>{deleteLoading ? <LoadingSpinner /> : routine.emoji}</div>
				<div className="title">{routine.title}</div>
				<div className="description">{routine.description}</div>
				<div className="extra">
					<div className="combo">{routine.combo === 0 ? "" : `⚡${routine.combo}`}</div>
					<div className="skip-num">{routine.skip === 0 ? "" : `↪️${routine.skip}`}</div>
					<div className="level">🎚️{routine.level}</div>
				</div>
				<div className="buttons">
					{
						routine.isSubmitted === false ?
							<button className="btn btn-success done" onClick={handleDone}><Done /></button>
							:
							<button className="btn btn-secondary done" disabled><Undone /></button>
					}
					<button className="btn btn-info skip" disabled={user.coins < 10} onClick={handleSkip}>
						{
							skipLoading ? <LoadingSpinner /> : <Skip />
						}
					</button>
					<button className="btn btn-message message" onClick={handleMessage} >
						<MessageIcon />
					</button>
					<button className="btn btn-danger remove  " onClick={handleRoadMapClick} >
						<GoalIcon />
					</button>
					<button className="routine__other-options " onClick={() => setShowOtherOptions(!showOtherOptions)}>

						<ul className="routine__other-options-list" style={!showOtherOptions ? { display: 'none' } : {}}>
							<li className="routine__other-options-item"
								onClick={async () => {
									await setArchivedOptionInFirebase(user.uid, routine.routineId, !routine.isArchived)
									setArchivedOption(routine.routineId, !routine.isArchived)
								}}>{routine.isArchived ? "Desarchive" : "Archive"}</li>
							<li className="routine__other-options-item">Edit</li>
							<li className="routine__other-options-item"
							onClick={handleRemove}>Delete</li>
						</ul>
						< MoreOptionsIcon />
					</button>
				</div>
			</div>
	)
}

const mapStateToProps = createStructuredSelector({
	routinesCollection: selectCurrentRoutines,
	user: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => ({
	removeRoutine: (routineId) => dispatch(removeRoutine(routineId)),
	skipRoutine: (routineId) => dispatch(skipRoutine(routineId)),
	buySkip: () => dispatch(buySkip()),
	displayCheckPopupState: (state) => dispatch(displayCheckPopupState(state)),
	displayMessagePopupState: (state) => dispatch(displayMessagePopupState(state)),
	setArchivedOption: (routineId, archivedId) => dispatch(setArchivedOption(routineId, archivedId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Routine);