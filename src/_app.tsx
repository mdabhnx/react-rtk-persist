import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "./app/store";
import { decrement, increment } from "./src/features/counter/counterSlice";

const App: React.FC = () => {
  const counterValue = useSelector((state: RootState) => state.counter.value);
  console.log(counterValue);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increament</button>
      <button onClick={() => dispatch(decrement())}>Decreament</button>
    </div>
  );
};

export default App;
