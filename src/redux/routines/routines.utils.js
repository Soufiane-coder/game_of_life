export const checkRoutine = (routines, routineId) => {
  return routines.map((routine) => {
    if (routine.routineId === routineId) {
      routine.isSubmitted = true;
      routine.combo = +routine.combo + 1;
    }
    return routine;
  });
};

export const removeRoutine = (routines, routineId) => {
  const index = routines.indexOf(
    routines.find((routine) => routine.routineId === routineId)
  );
  if (index > -1) {
    // only splice array when item is found
    routines.splice(index, 1); // 2nd parameter means remove one item only
  }
  return routines;
};

export const skipRoutine = (routines, routineId) => {
  return routines.map((routine) => {
    if (routine.routineId === routineId) {
      routine.skip = +routine.skip + 1;
    }
    return routine;
  });
};
