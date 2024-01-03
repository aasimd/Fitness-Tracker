import { useState } from "react";
import { addGoal } from "../../../redux/actions";
import { useDispatch } from "react-redux";

export const GoalsForm = () => {
  const dispatch = useDispatch();
  const [goalDetails, setGoalDetails] = useState({
    name: "",
    description: "",
    targetDate: "",
    targetCalories: 0,
    status: ""
  });
  const { name, description, targetCalories, targetDate, status } = goalDetails;
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(
            addGoal({
              name: name,
              targetCalories: Number(targetCalories),
              targetDate: targetDate,
              description: description,
              status: status
            })
          );
        }}
      >
        <div>
          <label htmlFor="goal-name">
            Goal name:{" "}
            <input
              required
              type="text"
              value={goalDetails?.name}
              onChange={(event) =>
                setGoalDetails((p) => ({
                  ...p,
                  name: event?.target?.value
                }))
              }
            />
          </label>
        </div>
        <div>
          <label htmlFor="goal-description">
            Description:
            <textarea
              required
              type="text"
              value={goalDetails?.description}
              onChange={(event) =>
                setGoalDetails((p) => ({
                  ...p,
                  description: event?.target?.value
                }))
              }
            />
          </label>
        </div>
        <div>
          <label htmlFor="goal-target-calories">
            Target Calories:{" "}
            <input
              required
              type="number"
              value={goalDetails?.targetCalories}
              onChange={(event) =>
                setGoalDetails((p) => ({
                  ...p,
                  targetCalories: event?.target?.value
                }))
              }
            />
          </label>
        </div>
        <div>
          <label htmlFor="goal-target-date">
            Target Date:{" "}
            <input
              required
              type="date"
              value={goalDetails?.targetDate}
              onChange={(event) =>
                setGoalDetails((p) => ({
                  ...p,
                  targetDate: event?.target?.value
                }))
              }
            />
          </label>
        </div>
        <div>
          <label htmlFor="goal-status">
            Status:{" "}
            <select
              name="status"
              id="status"
              onChange={(event) => {
                setGoalDetails((p) => ({ ...p, status: event.target.value }));
              }}
            >
              <option value="In Progress">In Progress</option>
              <option value="Achieved">Achieved</option>
              <option value="Abandoned">Abandoned</option>
            </select>
          </label>
        </div>
        <div>
          <input type="submit" value="Add New Goal" />
        </div>
      </form>
    </div>
  );
};
