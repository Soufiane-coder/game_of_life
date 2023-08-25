import './road-map.scss';
import Goku from '../../assets/badjets/goku_0-stand.gif';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentRoutines } from '../../redux/routines/routines.selector';
import { useHistory, useParams } from 'react-router-dom';
import { useState } from 'react';
import PageHeader from '../../components/PageHeader/page-header';

const goalsArray = [
    {
        goalId: '4',
        lastGoalAchieved: '',
        nextGoalToAchieve: '',
        type: 'sub-goal',
        acomplished: true,
    },
    {
        goalId: '4',
        lastGoalAchieved: '',
        nextGoalToAchieve: '',
        currentPosition: 0,
        type: 'sub-goal',
    },
    {
        goalId: '4',
        lastGoalAchieved: '',
        nextGoalToAchieve: '',
        currentPosition: 0,
        type: 'sub-goal',
    },
    {
        goalId: '4',
        lastGoalAchieved: '',
        nextGoalToAchieve: '',
        currentPosition: 0,
        type: 'sub-goal',
    },
    {
        goalId: '4',
        lastGoalAchieved: '',
        nextGoalToAchieve: '',
        currentPosition: 0,
        type: 'sub-goal',
    },
    {
        goalId: '0',
        lastGoalAchieved: '',
        nextGoalToAchieve: '',
        currentPosition: 0,
        type: 'small-goal',
        description: 'description 1'
    },
    {
        goalId: '1',
        lastGoalAchieved: '',
        nextGoalToAchieve: '',
        currentPosition: 0,
        type: 'big-goal',
        description: 'description 2'
    },
    {
        goalId: '2',
        lastGoalAchieved: '',
        nextGoalToAchieve: '',
        currentPosition: 0,
        type: 'big-goal',
    },
    {
        goalId: '3',
        lastGoalAchieved: '',
        nextGoalToAchieve: '',
        currentPosition: 0,
        type: 'sub-goal',
    },
    {
        goalId: '4',
        lastGoalAchieved: '',
        nextGoalToAchieve: '',
        currentPosition: 0,
        type: 'sub-goal',
    },

]

const RoadMap = ({ routines }) => {
    const params = useParams();
    const history = useHistory();
    if (!params) history.push('/')

    const selectedRoutine = routines.find(routine => routine.taskId === params.routineId);

    if (!selectedRoutine) history.push('/')

    const [goal, setGoal] = useState({});
    const [newGoal, setNewGoal] = useState({
        goalId: '30',
        description: '',
        type: 'sub-goal',
    });
    const [goals, setGoals] = useState(goalsArray);

    const handleClick = (event) => {
        const { id } = event.target.closest('.road-map__station');
        const searchedGoal = goals.find(goal => goal.goalId === id);
        setGoal(searchedGoal);
    }


    const handleAddGoal = (event) => {
        event.preventDefault();
        goals.push({ ...newGoal })
        setGoals(old => [...old])
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewGoal(old => ({ ...old, [name]: value }));
    }

    const getDistanceToGoal = (((+goal.goalId + 1) * 10) - selectedRoutine.time)

    return (
        <div className="road-map">
            <PageHeader title={'Road Map'} />
            <div className="road-map__container">
                <img src={Goku} alt="" className="road-map__character"
                    style={
                        {
                            left: (selectedRoutine.time * 8 <= goals.length ? selectedRoutine.time : goals.length) * 8 + 'rem',
                            transform: 'translateX(-50%)',
                        }
                    } />
                {
                    goals.map((goal, index) => (
                        <div key={index} id={goal.goalId}
                            className={`road-map__station road-map__station--${goal.type}`}
                            style={
                                { left: ++index * 8 + 'rem' }
                            }
                            onClick={handleClick}>
                            {+goal.goalId + 1}
                        </div>
                    ))
                }
                <div className="road-map__path" style={{ width: goals.length * 20 + 'rem' }} />
            </div>
            <div className="road-map__dashboard">
                <div className="road-map__adding-goal">
                    <h1>Add a goal</h1>
                    <textarea className="road-map__adding-description" name='description' value={newGoal.description} onChange={handleChange} placeholder='Write a description of your goal'></textarea>
                    <select name="type"
                        onChange={handleChange}
                        value={newGoal.type}>
                        <option value="sub-goal"> sub goal</option>
                        <option value="small-goal"> small goal</option>
                        <option value="big-goal"> big goal</option>
                    </select>
                    <button className="road-map__adding-button" onClick={handleAddGoal}>Add a goal</button>
                </div>
                <div className="road-map__goal-description">
                    {
                        goal.goalId ? <>
                            <h1>Goal number : {+ (+goal.goalId + 1)}</h1><p>{goal.description}</p><p>{getDistanceToGoal <= 0 ? 'It is already done' : `It take : ${getDistanceToGoal}`}</p>
                        </> :
                            <h1>Click on your goals</h1>
                    }

                </div>

            </div>
        </div >
    )
}

const mapStateToProps = createStructuredSelector({
    routines: selectCurrentRoutines
})


export default connect(mapStateToProps)(RoadMap);