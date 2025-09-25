import "./App.css";
import TeamsDashboard from "./components/teams-dashboard/TeamsDashboard";

function App() {
  return (
    <div className="App">
      <div>
        <h1>FairSplit</h1>
      </div>
      <div>
        <TeamsDashboard />
      </div>
    </div>
  );
}

export default App;
