import { GoalsForm } from "../../components/Goal/GoalsForm/GoalsForm";
import { useSelector, useDispatch } from "react-redux";
import { fetchGoals } from "../../redux/actions";
import { useEffect } from "react";
import { GoalsCard } from "../../components/Goal/GoalCard/GoalCard";

export const GoalsPage = () => {
  const goals = useSelector((state) => state.goals);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loading);
  useEffect(() => {
    dispatch(fetchGoals());
  }, [dispatch]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>Goals</h1>
      <div>
        <GoalsForm />
      </div>
      <div className="cards-list">
        <h2>Your Goals</h2>
        {goals.length > 0 ? (
          <ul>
            {goals.map((goal) => (
              <li key={goal._id}>
                <GoalsCard goal={goal} />
              </li>
            ))}
          </ul>
        ) : (
          <h2>No Goals Added</h2>
        )}
      </div>
    </div>
  );
};
