import { uncheckAllRoutinesBelongToUserInFirebase, updateTheDayOfLastVisitToTodayInFirebase } from "../lib/firebase"

const formattingDate = (inputDateString) => {
    const date = new Date(inputDateString);

    // Get the day, month, and year components
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    const year = date.getFullYear();

    // Create the formatted date string in dd-mm-yyyy format
    return `${day}-${month}-${year}`;
}

export const initialProtocol = async (user, routines) => {
    const {lastVisite: userSLastVisite} = user;
    const lastVisite = formattingDate(userSLastVisite.toDate())

    if(lastVisite !== formattingDate(new Date())){
        await uncheckAllRoutinesBelongToUserInFirebase(user.uid, routines);
        await updateTheDayOfLastVisitToTodayInFirebase(user.uid)
        routines.map(routine => ({isSubmitted: false,...routine}))
    }
    return routines
}