import './Clock.scss';

const Clock = () => {

    function getTime() {
        let now = new Date();

        let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

        let diff = now - today;
        const currentSec = Math.round(diff / 1000);

        const seconds = (currentSec / 60) % 1,
            minutes = (currentSec / 3600) % 1,
            hours = (currentSec / 43200) % 1;

        return { seconds, minutes, hours }
    }

    const InitialTime = getTime();

    return (
        <div className="clock">
            <div className="clock__second" style={{ animationDelay: "" + InitialTime.seconds * -1 + "s" }}></div>
            <div className="clock__minute" style={{ animationDelay: "" + 3600 * InitialTime.minutes * -1 + "s" }}></div>
            <div className="clock__hour" style={{ animationDelay: "" + 43200 * InitialTime.hours * -1 + "s" }}></div>
            <div className="clock__axis"></div>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
        </div>
    )
}

export default Clock;