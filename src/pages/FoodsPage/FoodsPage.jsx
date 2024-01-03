import { FoodsForm } from "../../components/Food/FoodsForm/FoodsForm";
import { useSelector, useDispatch } from "react-redux";
import { fetchFoods } from "../../redux/actions";
import { useEffect } from "react";
import { FoodsCard } from "../../components/Food/FoodsCard/FoodsCard";

export const FoodsPage = () => {
  const foods = useSelector((state) => state.foods);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loading);
  useEffect(() => {
    dispatch(fetchFoods());
  }, [dispatch]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>Foods</h1>
      <div>
        <FoodsForm />
      </div>
      <div className="cards-list">
        <h2>Your Foods</h2>
        {foods.length > 0 ? (
          <ul>
            {foods.map((food) => (
              <li key={food._id}>
                <FoodsCard food={food} />
              </li>
            ))}
          </ul>
        ) : (
          <h2>No Foods Added</h2>
        )}
      </div>
    </div>
  );
};
