import { deleteGoal } from "../../../redux/actions";
import { useDispatch } from "react-redux";

export const GoalsCard = ({ goal }) => {
  const { name, description, targetDate, targetCalories, status, _id } = goal;
  const dispatch = useDispatch();
  return (
    <div>
      <p>
        <h3>{name}</h3>
        {status}
        <br />
        {description} <br />
        <b>Target Date: </b>
        {targetDate || "N.A."}
        <br />
        <b>Target Calories: </b>
        {targetCalories}
      </p>
      <button onClick={() => dispatch(deleteGoal(_id))}>Delete</button>
    </div>
  );
};
