import {Navbar, Welcome } from "./components" 
import Dock from "./components/Dock"
import { Draggable } from "gsap/all"
import gsap from "gsap";
import Terminal from "./windows/Terminal"


gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock/>
      <Terminal/>
    </main>
  )
}

export default App