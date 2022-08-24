import './App.css';
import RenderingLists from "./components/RenderingLists";
import Clock from './components/Clock';
import LifeCyclesCDM from "./components/LifeCyclesCDM";
import LifeCyclesCDU from "./components/LifeCyclesCDU";
import LifeCyclesCWU from "./components/LifeCyclesCWU";
import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';


function App() {
  return (
    <div className="App">
      <UncontrolledForm/>
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
