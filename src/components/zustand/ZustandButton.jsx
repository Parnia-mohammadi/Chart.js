import useCounterStore from "../../store/store";

function ZustandButton() {
  const { count, increase, decrease } = useCounterStore();
  return (
    <div>
      <h2>ZustandButton</h2>
      <div
        style={{
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          padding: "1rem",
          borderRadius: "8px",
        }}
      >
        <button onClick={decrease}>-</button>
        <p>{count}</p>
        <button onClick={increase}>+</button>
      </div>
    </div>
  );
}

export default ZustandButton;
