import data from "./Component/dummy.js"
import Dashboard from "./Component/Dashboard"
//This will Render the Body class component return the component to index
function App() {
 
  return (
    <div className="App"> 
        <Dashboard />
    </div>
  );
}

//This wiil help us to export the App in other component
export default App;
