import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "./app/store";
import { useGetAllUsersQuery, useGetUserQuery } from "./services/userService";
import { decrement, increment } from "./src/features/counter/counterSlice";

const App: React.FC = () => {
  const counterValue = useSelector((state: RootState) => state.counter.value);
  const [userId, setUserId] = useState<string | undefined>(undefined);
  const dispatch = useDispatch();

  // const { data, isLoading, error } = useGetAllUsersQuery(undefined);
  const {
    data: userData,
    isLoading,
    error,
  } = useGetUserQuery(userId, { skip: userId === undefined ? true : false });

  console.log(userData, isLoading, error);

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increament</button>
      <button onClick={() => dispatch(decrement())}>Decreament</button>
      <button
        onClick={() => {
          let userID = Math.floor(Math.random() * 10);
          if (userID === 0) userID = 1;
          setUserId(userID.toString());
        }}
      >
        Get User Information
      </button>
    </div>
  );
};

export default App;
