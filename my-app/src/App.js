import './App.css';
import RenderingLists from "./components/RenderingLists";
import Clock from './components/Clock';
import LifeCyclesCDM from "./components/LifeCyclesCDM";
import LifeCyclesCDU from "./components/LifeCyclesCDU";
import LifeCyclesCWU from "./components/LifeCyclesCWU";
import ControlledForm from './components/ControlledForm';


function App() {
  return (
    <div className="App">
      <ControlledForm/>
      <RenderingLists />
      <Clock/>
      <LifeCyclesCDM/>
      <LifeCyclesCDU/>
      <LifeCyclesCWU/>
    </div>
  );
}

export default App;
