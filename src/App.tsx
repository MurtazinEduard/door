import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import './App.css'
import Scene from "./components/Scene";

function App() {

  return (
    <div className="App">
      <Canvas shadows>
        <Scene/>
      </Canvas>
      <Loader/>
    </div>
  )
}

export default App
