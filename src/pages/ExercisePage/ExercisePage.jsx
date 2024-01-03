import { useSelector, useDispatch } from "react-redux";
import { fetchExercises } from "../../redux/actions";
import { useEffect } from "react";
import { ExercisesForm } from "../../components/Exercise/ExercisesForm/ExercisesForm";
import { ExercisesCard } from "../../components/Exercise/ExercisesCard/ExercisesCard";

export const ExercisePage = () => {
  const exercises = useSelector((state) => state.exercises);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loading);
  useEffect(() => {
    dispatch(fetchExercises());
  }, [dispatch]);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!exercises.length > 0) {
    return (
      <div>
        <h1>Exercises</h1>
        <h2>No Exercises Added</h2>
      </div>
    );
  }
  return (
    <div>
      <h1>Exercises</h1>
      <div>
        <ExercisesForm />
      </div>
      <div className="cards-list">
        <h2>Your Exercises</h2>
        <ul>
          {exercises.map((exercise) => (
            <li key={exercise._id}>
              <ExercisesCard exercise={exercise} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
