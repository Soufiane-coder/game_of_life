import './road-map.scss';
import Goku from '../../assets/badjets/goku_1-stand.gif';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentRoutines } from '../../redux/routines/routines.selector';
import { useHistory, useParams } from 'react-router-dom';
import { useState } from 'react';
import PageHeader from '../../components/PageHeader/page-header';

const goalsArray = [
    {
        goalId: '0',
        lastGoalAchieved: '',
        nextGoalToAchieve: '',
        currentPosition: 0,
        allGoals: ["goal 1", "goal 2"],
        bigGoal: true,
        description: 'description 1'
    },
    {
        goalId: '1',
        lastGoalAchieved: '',
        nextGoalToAchieve: '',
        currentPosition: 0,
        allGoals: ["goal 1", "goal 2"],
        description: 'description 2'
    },
    {
        goalId: '2',
        lastGoalAchieved: '',
        nextGoalToAchieve: '',
        currentPosition: 0,
        allGoals: ["goal 1", "goal 2"],
    },
    {
        goalId: '3',
        lastGoalAchieved: '',
        nextGoalToAchieve: '',
        currentPosition: 0,
        allGoals: ["goal 1", "goal 2"],
        bigGoal: true,
    },
    {
        goalId: '4',
        lastGoalAchieved: '',
        nextGoalToAchieve: '',
        currentPosition: 0,
        allGoals: ["goal 1", "goal 2"],
    },
    {
        goalId: '5',
        lastGoalAchieved: '',
        nextGoalToAchieve: '',
        currentPosition: 0,
        allGoals: ["goal 1", "goal 2"],
    },
    {
        goalId: '6',
        lastGoalAchieved: '',
        nextGoalToAchieve: '',
        currentPosition: 0,
        allGoals: ["goal 1", "goal 2"],
    },
    {
        goalId: '7',
        lastGoalAchieved: '',
        nextGoalToAchieve: '',
        currentPosition: 0,
        allGoals: ["goal 1", "goal 2"],
    },
    {
        goalId: '8',
        lastGoalAchieved: '',
        nextGoalToAchieve: '',
        currentPosition: 0,
        allGoals: ["goal 1", "goal 2"],
    },
    {
        goalId: '9',
        lastGoalAchieved: '',
        nextGoalToAchieve: '',
        currentPosition: 0,
        allGoals: ["goal 1", "goal 2"],
    },
    {
        goalId: '10',
        lastGoalAchieved: '',
        nextGoalToAchieve: '',
        currentPosition: 0,
        allGoals: ["goal 1", "goal 2"],
    },
    {
        goalId: '11',
        lastGoalAchieved: '',
        nextGoalToAchieve: '',
        currentPosition: 0,
        allGoals: ["goal 1", "goal 2"],
    },
    {
        goalId: '12',
        lastGoalAchieved: '',
        nextGoalToAchieve: '',
        currentPosition: 0,
        allGoals: ["goal 1", "goal 2"],
    },
    {
        goalId: '13',
        lastGoalAchieved: '',
        nextGoalToAchieve: '',
        currentPosition: 0,
        allGoals: ["goal 1", "goal 2"],
    },
    {
        goalId: '14',
        lastGoalAchieved: '',
        nextGoalToAchieve: '',
        currentPosition: 0,
        allGoals: ["goal 1", "goal 2"],
    },
    {
        goalId: '15',
        lastGoalAchieved: '',
        nextGoalToAchieve: '',
        currentPosition: 0,
        allGoals: ["goal 1", "goal 2"],
    },
    {
        goalId: '16',
        lastGoalAchieved: '',
        nextGoalToAchieve: '',
        currentPosition: 0,
        allGoals: ["goal 1", "goal 2"],
    },
    {
        goalId: '17',
        lastGoalAchieved: '',
        nextGoalToAchieve: '',
        currentPosition: 0,
        allGoals: ["goal 1", "goal 2"],
    },
    {
        goalId: '18',
        lastGoalAchieved: '',
        nextGoalToAchieve: '',
        currentPosition: 0,
        allGoals: ["goal 1", "goal 2"],
    },
    {
        goalId: '19',
        lastGoalAchieved: '',
        nextGoalToAchieve: '',
        currentPosition: 0,
        allGoals: ["goal 1", "goal 2"],
    },
    {
        goalId: '20',
        lastGoalAchieved: '',
        nextGoalToAchieve: '',
        currentPosition: 0,
        allGoals: ["goal 1", "goal 2"],
    }
]

const RoadMap = ({ routines }) => {
    const params = useParams();
    const history = useHistory();
    if (!params) history.push('/')

    const selectedRoutine = routines.find(routine => routine.taskId === params.routineId);

    if (!selectedRoutine) history.push('/')

    const [goal, setGoal] = useState({});

    const handleClick = (event) => {
        const id = event.target.closest('.road-map__station').id;
        const searchedGoal = goalsArray.find(goal => goal.goalId === id);
        setGoal(searchedGoal);
    }

    const [newGoal, setNewGoal] = useState({
        description: '',
        goalType: 'small-goal',
        subGoal1: '',
        subGoal2: '',
        subGoal3: '',
        subGoal4: '',
        subGoal5: '',
        subGoal6: '',
        subGoal7: '',
        subGoal8: '',
        subGoal9: '',
        subGoal10: '',
    });

    const handleAddGoal = (event) => {
        event.preventDefault();
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewGoal(old => ({ ...old, [name]: value }));
    }

    const getDistanceToGoal = () => (((+goal.goalId + 1) * 10) - selectedRoutine.time)


    return (
        <div className="road-map">
            <PageHeader title={'Road Map'} />
            <div className="road-map__container">
                <img src={Goku} alt="" className="road-map__character" style={{ left: selectedRoutine.time * 2 + 'rem', transform: 'translateX(-50%)' }} />
                {
                    goalsArray.map((goal, index) => (
                        <div key={index} id={goal.goalId} className={`road-map__station ${goal.bigGoal ? 'road-map__station--big-goal' : ''}`} style={{ left: ++index * 20 + 'rem' }} onClick={handleClick}>{+goal.goalId + 1}</div>
                    ))
                }
                <div className="road-map__path" style={{ width: goalsArray.length * 20 + 'rem' }} />
            </div>
            <div className="road-map__dashboard">
                <div className="road-map__goal-description">
                    {
                        goal.goalId ? <>
                            <h1>Goal number : {+ (+goal.goalId + 1)}</h1><p>{goal.description}</p><p>{getDistanceToGoal() <= 0 ? 'It is already done' : `It take : ${getDistanceToGoal()}`}</p>
                        </> :
                            <h1>Click on your goals</h1>

                    }

                </div>
                <div className="road-map__adding-goal">
                    <h1>Add a goal</h1>
                    <textarea className="road-map__adding-description" name='description' value={newGoal.description} onChange={handleChange}></textarea>
                    <select name="goalType"
                        onChange={handleChange}
                        value={newGoal.goalType}>
                        <option value="small-goal"> small goal</option>
                        <option value="big-goal"> big goal</option>
                    </select>
                    <input type="text" name="subGoal1" className="road-map__sub-goal-1" placeholder='sub goal 1'
                        value={newGoal.subGoal1} onChange={handleChange} />
                    <input type="text" name="subGoal2" className="road-map__sub-goal-2" placeholder='sub goal 2'
                        value={newGoal.subGoal2} onChange={handleChange} />
                    <input type="text" name="subGoal3" className="road-map__sub-goal-3" placeholder='sub goal 3'
                        value={newGoal.subGoal3} onChange={handleChange} />
                    <input type="text" name="subGoal4" className="road-map__sub-goal-4" placeholder='sub goal 4'
                        value={newGoal.subGoal4} onChange={handleChange} />
                    <input type="text" name="subGoal5" className="road-map__sub-goal-5" placeholder='sub goal 5'
                        value={newGoal.subGoal5} onChange={handleChange} />
                    <input type="text" name="subGoal6" className="road-map__sub-goal-6" placeholder='sub goal 6'
                        value={newGoal.subGoal6} onChange={handleChange} />
                    <input type="text" name="subGoal7" className="road-map__sub-goal-7" placeholder='sub goal 7'
                        value={newGoal.subGoal7} onChange={handleChange} />
                    <input type="text" name="subGoal8" className="road-map__sub-goal-8" placeholder='sub goal 8'
                        value={newGoal.subGoal8} onChange={handleChange} />
                    <input type="text" name="subGoal9" className="road-map__sub-goal-9" placeholder='sub goal 9'
                        value={newGoal.subGoal9} onChange={handleChange} />
                    <input type="text" name="subGoal10" className="road-map__sub-goal-10" placeholder='sub goal 10'
                        value={newGoal.subGoal10} onChange={handleChange} />
                    <button onClick={handleAddGoal}>Add a goal</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    routines: selectCurrentRoutines
})


export default connect(mapStateToProps)(RoadMap);