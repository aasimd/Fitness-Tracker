const SET_EXERCISES = "setExercises";
const SET_GOALS = "setGoals";
const SET_FOODS = "setFoods";
const SET_LOADING = "setLoading";
const SET_FAIL = "fetchFail";

// Exercises
export const fetchExercises = () => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await fetch(
      "https://fitnesstracker.aasimd.repl.co/exercises"
    );
    const data = await response.json();
    dispatch({ type: SET_EXERCISES, payload: data.data });
  } catch (e) {
    dispatch({ type: SET_FAIL, payload: "Error fetching data" });
  }
  dispatch({ type: SET_LOADING, payload: false });
};

export const addExercise = (exerciseInfo) => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await fetch(
      "https://fitnesstracker.aasimd.repl.co/exercises",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(exerciseInfo)
      }
    );
    const data = await response.json();
    console.log("Added new Exercise", data);
    dispatch(fetchExercises());
  } catch (e) {
    console.error(e);
    dispatch({ type: SET_FAIL, payload: "Error Adding new exercise" });
  }
  dispatch({ type: SET_LOADING, payload: false });
};

export const deleteExercise = (id) => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING, payload: true });
    await fetch(`https://fitnesstracker.aasimd.repl.co/exercises/${id}`, {
      method: "DELETE"
    });
    dispatch(fetchExercises());
    console.log("Deleted Exercise");
  } catch (e) {
    dispatch({ type: SET_FAIL, payload: "Error Deleting exercise" });
  }
  dispatch({ type: SET_LOADING, payload: false });
};

// Goals
export const fetchGoals = () => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await fetch("https://fitnesstracker.aasimd.repl.co/goals");
    const data = await response.json();
    dispatch({ type: SET_GOALS, payload: data.data });
  } catch (e) {
    dispatch({ type: SET_FAIL, payload: "Error fetching data" });
  }
  dispatch({ type: SET_LOADING, payload: false });
};

export const addGoal = (goalInfo) => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await fetch(
      "https://fitnesstracker.aasimd.repl.co/goals",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(goalInfo)
      }
    );
    const data = await response.json();
    console.log("Added new Goal", data);
    dispatch(fetchGoals());
  } catch (e) {
    console.error(e);
    dispatch({ type: SET_FAIL, payload: "Error Adding new Goal" });
  }
  dispatch({ type: SET_LOADING, payload: false });
};

export const deleteGoal = (id) => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    await fetch(`https://fitnesstracker.aasimd.repl.co/goals/${id}`, {
      method: "DELETE"
    });
    dispatch(fetchGoals());
    console.log("Deleted Goal");
  } catch (e) {
    dispatch({ type: SET_FAIL, payload: "Error Deleting goal" });
  }
  dispatch({ type: SET_LOADING, payload: false });
};

// Foods
export const fetchFoods = () => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await fetch("https://fitnesstracker.aasimd.repl.co/foods");
    const data = await response.json();
    dispatch({ type: SET_FOODS, payload: data.data });
  } catch (e) {
    dispatch({ type: SET_FAIL, payload: "Error fetching data" });
  }
  dispatch({ type: SET_LOADING, payload: false });
};

export const addFood = (foodInfo) => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await fetch(
      "https://fitnesstracker.aasimd.repl.co/foods",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(foodInfo)
      }
    );
    const data = await response.json();
    console.log("Added new Food", data);
    dispatch(fetchFoods());
  } catch (e) {
    console.error(e);
    dispatch({ type: SET_FAIL, payload: "Error Adding new Goal" });
  }
  dispatch({ type: SET_LOADING, payload: false });
};

export const deleteFood = (id) => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    await fetch(`https://fitnesstracker.aasimd.repl.co/foods/${id}`, {
      method: "DELETE"
    });
    dispatch(fetchFoods());
    console.log("Deleted Food");
  } catch (e) {
    dispatch({ type: SET_FAIL, payload: "Error Deleting food" });
  }
  dispatch({ type: SET_LOADING, payload: false });
};
