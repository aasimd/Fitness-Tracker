import { useState } from "react";
import { addExercise } from "../../../redux/actions";
import { useDispatch } from "react-redux";

export const ExercisesForm = () => {
  const dispatch = useDispatch();
  const [exercisedetails, setExerciseDetails] = useState({
    name: "",
    caloriesBurned: 0,
    duration: 0
  });
  const { name, caloriesBurned, duration } = exercisedetails;
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(
            addExercise({
              name: name,
              duration: Number(duration),
              caloriesBurned: Number(caloriesBurned)
            })
          );
        }}
      >
        <div>
          <label htmlFor="exercise-name">
            Exercise name:{" "}
            <input
              required
              type="text"
              value={exercisedetails?.name}
              onChange={(event) =>
                setExerciseDetails((p) => ({
                  ...p,
                  name: event?.target?.value
                }))
              }
            />
          </label>
        </div>
        <div>
          <label htmlFor="exercise-name">
            Duration (in minutes):{" "}
            <input
              required
              type="number"
              value={exercisedetails?.duration}
              onChange={(event) =>
                setExerciseDetails((p) => ({
                  ...p,
                  duration: event?.target?.value
                }))
              }
            />
          </label>
        </div>
        <div>
          <label htmlFor="exercise-name">
            Calories Burned:{" "}
            <input
              required
              type="number"
              value={exercisedetails?.caloriesBurned}
              onChange={(event) =>
                setExerciseDetails((p) => ({
                  ...p,
                  caloriesBurned: event?.target?.value
                }))
              }
            />
          </label>
        </div>
        <div>
          <input type="submit" value="Add New Exercise" />
        </div>
      </form>
    </div>
  );
};
