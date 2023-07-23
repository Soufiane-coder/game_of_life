import { RoutinesActionTypes } from "./routines.types";

export const setCurrentRoutines = (routines) => ({
  type: RoutinesActionTypes.SET_CURRENT_ROUTINES,
  payload: routines,
});

export const checkRoutine = (taskId) => ({
  type: RoutinesActionTypes.CHECK_ROUTINE,
  payload: taskId,
});

export const removeRoutine = (taskId) => ({
  type: RoutinesActionTypes.REMOVE_ROUTINE,
  payload: taskId,
});

export const addRoutine = (routine) => ({
  type: RoutinesActionTypes.ADD_ROUTINE,
  payload: routine,
});

export const skipRoutine = (taskId) => ({
  type: RoutinesActionTypes.SKIP_ROUTINE,
  payload: taskId,
});
