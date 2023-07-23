export const checkRoutine = (routines, taskId) => {
  return routines.map((routine) => {
    if (routine.taskId === taskId) {
      routine.submitted = "1";
      routine.combo = +routine.combo + 1;
    }
    return routine;
  });
};

export const removeRoutine = (routines, taskId) => {
  const index = routines.indexOf(
    routines.find((routine) => routine.taskId === taskId)
  );
  if (index > -1) {
    // only splice array when item is found
    routines.splice(index, 1); // 2nd parameter means remove one item only
  }
  return routines;
};

export const skipRoutine = (routines, taskId) => {
  return routines.map((routine) => {
    if (routine.taskId === taskId) {
      routine.skip = +routine.skip + 1;
    }
    return routine;
  });
};
