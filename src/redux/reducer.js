const initialState = {
  loading: false,
  exercises: [],
  goals: [],
  foods: [],
  error: null
};

export const fitnessTrackerReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "setLoading":
      return { ...state, loading: payload };
    case "setExercises":
      return { ...state, exercises: payload };
    case "setGoals":
      return { ...state, goals: payload };
    case "setFoods":
      return { ...state, foods: payload };
    case "fetchFail":
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};
