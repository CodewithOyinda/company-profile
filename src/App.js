import { useState } from "react";
import "./App.css";
import Details from "./Details";
import { ProfileUsers } from "./ProfileUsers";
const keys = ["firstName", "lastName"];

export const App = () => {
  const [query, setQuery] = useState("");

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };
  return (
    <div className="app">
      <input
        type="text"
        placeholder="Search by name..."
        className="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Details data={search(ProfileUsers)} />
    </div>
  );
};

export default App;
