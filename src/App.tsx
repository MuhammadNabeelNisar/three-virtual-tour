import { Canvas } from "@react-three/fiber";

const App = () => {
  return (
    <>
      <Canvas style={{ width: "100vw", height: "100vh" }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <mesh scale={[-1, 1, 1]}>
          <sphereBufferGeometry args={[1, 64, 64]} />
          <meshBasicMaterial color="white" />
        </mesh>
      </Canvas>
    </>
  );
};

export default App;
