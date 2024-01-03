import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchExercises, fetchFoods, fetchGoals } from "../../redux/actions";
import "./Dashboard.css";
export const Dashboard = () => {
  const dispatch = useDispatch();
  const exercises = useSelector((state) => state.exercises);
  const foods = useSelector((state) => state.foods);
  const goals = useSelector((state) => state.goals);
  const totalCaloriesBurned = exercises.reduce(
    (acc, curr) => acc + curr.caloriesBurned,
    0
  );
  const totalCaloriesConsumed = foods.reduce(
    (acc, curr) => acc + curr.calories,
    0
  );
  const totalCaloriesGoal = goals.reduce(
    (acc, curr) => acc + curr.targetCalories,
    0
  );
  const caloriesConsumed = Math.abs(
    totalCaloriesConsumed - totalCaloriesBurned
  );
  useEffect(() => {
    dispatch(fetchExercises());
    dispatch(fetchFoods());
    dispatch(fetchGoals());
  }, []);
  return (
    <div className="dashboard">
      <div className="text-left">
        <h2>Your Fitness Metrics</h2>
      </div>

      <div>
        <p>
          Total Calories Burned: <b>{totalCaloriesBurned}</b>
        </p>
        <p>
          Total Calories Consumed: <b>{totalCaloriesConsumed}</b>
        </p>
        <p>
          Total Calories Goal: <b>{totalCaloriesGoal}</b>
        </p>
        <p>
          Remaining Calories to Goal:{" "}
          <b>{totalCaloriesGoal - caloriesConsumed}</b>
        </p>
      </div>
    </div>
  );
};
