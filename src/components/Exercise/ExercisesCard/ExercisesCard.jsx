import { deleteExercise } from "../../../redux/actions";
import { useDispatch } from "react-redux";

export const ExercisesCard = ({ exercise }) => {
  const { name, duration, caloriesBurned, _id } = exercise;
  const dispatch = useDispatch();
  return (
    <div>
      <h3>{name}</h3>
      <p>
        <b>Duration: </b>
        {duration} minutes <br />
        <b>Calories Burned: </b>
        {caloriesBurned} cals
      </p>
      <button onClick={() => dispatch(deleteExercise(_id))}>Delete</button>
    </div>
  );
};
