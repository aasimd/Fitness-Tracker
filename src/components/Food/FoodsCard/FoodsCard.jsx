import { deleteFood } from "../../../redux/actions";
import { useDispatch } from "react-redux";

export const FoodsCard = ({ food }) => {
  const { name, calories, protein, carbohydrates, fat, _id } = food;
  const dispatch = useDispatch();
  return (
    <div>
      <h3>{name}</h3>
      <p>
        <b>Calories: </b>
        {calories}
        <br />
        <b>Protein: </b>
        {protein}
        <br />
        <b>Carbohydrates: </b>
        {carbohydrates}
        <br />
        <b>Fat: </b>
        {fat}
      </p>
      <button onClick={() => dispatch(deleteFood(_id))}>Delete</button>
    </div>
  );
};
