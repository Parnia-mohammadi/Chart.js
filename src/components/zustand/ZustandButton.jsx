import useAppStore from "../../store/store";

function ZustandButton() {
  const { count, increase, decrease, theme } = useAppStore();
  return (
    <div>
      <h2>ZustandButton</h2>
      <div
        style={{
          border: theme === "light" ? "1px solid black" : "1px solid white",
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
