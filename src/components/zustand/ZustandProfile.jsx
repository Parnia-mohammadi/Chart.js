import useAppStore from "../../store/store";

function ZustandProfile() {
  const { user, setUser, theme } = useAppStore();

  return (
    <div>
      <h2>ZustandProfile</h2>
      <div
        style={{
          border: theme === "light" ? "1px solid black" : "1px solid white",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          marginBottom: "10px",
        }}
      >
        <p>Hello: {user.name}</p>
        <p>your email is: {user.email}</p>
      </div>
      <form
        style={{
          border: theme === "light" ? "1px solid black" : "1px solid white",
          borderRadius: "8px",
          padding: "1rem",
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <div>
          <label htmlFor="name">userName: </label>
          <input
            type="text"
            id="name"
            placeholder="input your name"
            value={user.name}
            onChange={(e) => setUser({ name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="email">email: </label>
          <input
            type="text"
            id="email"
            placeholder="input your email"
            value={user.email}
            onChange={(e) => setUser({ email: e.target.value })}
          />
        </div>
      </form>
    </div>
  );
}

export default ZustandProfile;
