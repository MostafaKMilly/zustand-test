import { useCounterState } from "./state/Counter";

function App() {
  const { count, decrement, increment } = useCounterState();
  return (
    <div>
      <p>Dummy count {count}</p>
      <div style={{ display: "flex" }}>
        <button onClick={() => increment(2)}>Increment</button>
        <button onClick={() => decrement(2)}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
