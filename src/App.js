import "./styles.css";
import Loader from "../src/App/Loader/Loader";
import WavyLoader from "../src/App/WavyLoader/WavyLoader";
import CircularLoder from "./App/CircularLOader";
import DotLoader from "./App/DotLoader/DotLoader";
import ProgressBarLoader from "./App/ProgressBarLoader/index";
import EasyInOutLoader from "./App/EasyInOutLoader/index";
import RingLoader from "./App/RingLoader/index";

export default function App() {
  return (
    <div className="App">
      <a href="https://blog.hubspot.com/website/css-loading-animation">
        LINK FOR ANIMATION
      </a>
      <Loader />
      <WavyLoader />
      <CircularLoder />
      <DotLoader />
      <ProgressBarLoader />
      <EasyInOutLoader />
      <RingLoader />
    </div>
  );
}
