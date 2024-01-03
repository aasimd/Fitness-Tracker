import { useState } from "react";
import { addFood } from "../../../redux/actions";
import { useDispatch } from "react-redux";

export const FoodsForm = () => {
  const dispatch = useDispatch();
  const [foodDetails, setFoodDetails] = useState({
    name: "",
    calories: 0,
    protein: 0,
    carbohydrates: 0,
    fat: 0
  });
  const { name, calories, protein, carbohydrates, fat } = foodDetails;
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(
            addFood({
              name: name,
              calories: Number(calories),
              protein: Number(protein),
              carbohydrates: Number(carbohydrates),
              fat: Number(fat)
            })
          );
        }}
      >
        <div>
          <label htmlFor="food-name">
            Food name:{" "}
            <input
              required
              type="text"
              value={name}
              onChange={(event) =>
                setFoodDetails((p) => ({
                  ...p,
                  name: event?.target?.value
                }))
              }
            />
          </label>
        </div>
        <div>
          <label htmlFor="food-calories">
            Calories:{" "}
            <input
              required
              type="number"
              value={calories}
              onChange={(event) =>
                setFoodDetails((p) => ({
                  ...p,
                  calories: event?.target?.value
                }))
              }
            />
          </label>
        </div>
        <div>
          <label htmlFor="food-carbohydrates">
            Carbohydrates(in gm):{" "}
            <input
              required
              type="number"
              value={carbohydrates}
              onChange={(event) =>
                setFoodDetails((p) => ({
                  ...p,
                  carbohydrates: event?.target?.value
                }))
              }
            />
          </label>
        </div>
        <div>
          <label htmlFor="food-protein">
            Protein (in gm):{" "}
            <input
              required
              type="number"
              value={protein}
              onChange={(event) =>
                setFoodDetails((p) => ({
                  ...p,
                  protein: event?.target?.value
                }))
              }
            />
          </label>
        </div>
        <div>
          <label htmlFor="food-fat">
            Fat (in gm):{" "}
            <input
              required
              type="number"
              value={fat}
              onChange={(event) =>
                setFoodDetails((p) => ({
                  ...p,
                  fat: event?.target?.value
                }))
              }
            />
          </label>
        </div>
        <div>
          <input type="submit" value="Add New Food" />
        </div>
      </form>
    </div>
  );
};
