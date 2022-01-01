import "./styles.css";
import Loader from "../src/App/Loader/Loader";
import WavyLoader from "../src/App/WavyLoader/WavyLoader";
import CircularLoder from "./App/CircularLOader";
import DotLoader from "./App/DotLoader/DotLoader";
import MixedLoader from "./App/MixedLoader/index";

export default function App() {
  return (
    <div className="App">
      <Loader />
      <WavyLoader />
      <CircularLoder />
      <DotLoader />
      {/* <MixedLoader/> */}
    </div>
  );
}
