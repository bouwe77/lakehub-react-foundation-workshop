import React from "react";
import "./styles.css";
import createPersistedState from "use-persisted-state";
import exercises from "./exercises";
const useCounterState = createPersistedState("selectedExercise");

export default function App() {
  const [selectedExerciseId, setSelectedExerciseId] = useCounterState(
    Object.keys(exercises)[0]
  );

  const Exercise = exercises[selectedExerciseId];

  return (
    <div className="App">
      <Header>
        <div>
          <select
            style={{ height: "26px" }}
            onChange={(event) =>
              setSelectedExerciseId(event.currentTarget.value)
            }
            value={selectedExerciseId}
          >
            {Object.keys(exercises).map((exerciseId) => (
              <option key={exerciseId} value={exerciseId}>
                {exerciseId}
              </option>
            ))}
          </select>
        </div>
      </Header>

      <div
        style={{
          padding: "30px",
          margin: "15px",
          border: "1px solid #ccc",
          minHeight: "200px"
        }}
      >
        <Exercise />
      </div>

      <Footer />
    </div>
  );
}

function Header({ children }) {
  return (
    <div
      style={{
        padding: "5px",
        margin: "15px"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <div style={{}}>
          <h1>React Foundation Workshop</h1>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      Made for <a href="https://academy.lakehub.co.ke/">LakeHub Academy</a> by{" "}
      <a href="https://bouwe.io">Bouwe</a> &amp;{" "}
      <a href="https://newnexus.nl">New Nexus</a>
    </footer>
  );
}
