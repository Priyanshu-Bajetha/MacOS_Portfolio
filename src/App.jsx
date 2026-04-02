import {Navbar, Welcome } from "./components" 
import Dock from "./components/Dock"
import { Draggable } from "gsap/all"
import gsap from "gsap";
import Terminal from "./windows/Terminal"
import ResumeWindow, { Resume } from "./windows/Resume";
import FinderWindow, { Finder } from "./windows/Finder";


gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock/>
      <Terminal/>
      <ResumeWindow/>
      <FinderWindow />

    </main>
  )
}

export default App