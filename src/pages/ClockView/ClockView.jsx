
import './ClockView.scss';
import ClockContainer from '../../components/ClockContainer/ClockContainer';

const data = [
    {
        startRoutine: '00:00:00',
        endRoutine: '06:00:00',
        bgEmojiColor: 'red'
    },
    {
        startRoutine: '06:00:00',
        endRoutine: '09:00:00',
        bgEmojiColor: 'black'
    },
    {
        startRoutine: '09:00:00',
        endRoutine: '15:00:00',
        bgEmojiColor: '#403504'
    }
];

const ClockView = () => {
    return (
        <div className='clock-view-page'>
            <ClockContainer data={data} am />
            <ClockContainer data={data} pm />
        </div>
    )
}

export default ClockView;