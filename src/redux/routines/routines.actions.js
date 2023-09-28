import { RoutinesActionTypes } from "./routines.types";

export const setCurrentRoutines = (routines) => ({
  type: RoutinesActionTypes.SET_CURRENT_ROUTINES,
  payload: routines,
});

export const checkRoutine = (routineId) => ({
  type: RoutinesActionTypes.CHECK_ROUTINE,
  payload: routineId,
});

export const removeRoutine = (routineId) => ({
  type: RoutinesActionTypes.REMOVE_ROUTINE,
  payload: routineId,
});

export const addRoutine = (routine) => ({
  type: RoutinesActionTypes.ADD_ROUTINE,
  payload: routine,
});

export const skipRoutine = (routineId) => ({
  type: RoutinesActionTypes.SKIP_ROUTINE,
  payload: routineId,
});
