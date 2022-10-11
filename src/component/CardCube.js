import { React, Suspense } from "react";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

const Cube = () => {
  const meshAll = useRef();
  const mesh1 = useRef();
  const mesh2 = useRef();
  const mesh3 = useRef();
  const mesh4 = useRef();
  const mesh5 = useRef();
  const mesh6 = useRef();

  // const ref = useRef();
  // const envMap = useCubeTexture(
  //   ["px.PNG", "nx.PNG", "py.PNG", "ny.PNG", "pz.PNG", "nz.PNG"],
  //   { path: process.env.PUBLIC_URL + "/textures/" }
  // );

  // const texture1 = useTexture(process.env.PUBLIC_URL + "/textures/px.PNG");

  const [texture1, texture2, texture3, texture4, texture5, texture6] =
    useTexture([
      process.env.PUBLIC_URL + "/textures/px.PNG",
      process.env.PUBLIC_URL + "/textures/py.PNG",
      process.env.PUBLIC_URL + "/textures/pz.PNG",
      process.env.PUBLIC_URL + "/textures/nx.PNG",
      process.env.PUBLIC_URL + "/textures/ny.PNG",
      process.env.PUBLIC_URL + "/textures/nz.PNG",
    ]);

  var initial = 0;
  var isRotate = false;
  var isDoneLoading = false;

  useFrame(() => {
    initial += 0.01;
    mesh1.current.rotation.x = 1.5708;
    mesh2.current.rotation.x = 0;
    mesh3.current.rotation.x = 0;
    mesh4.current.rotation.x = 1.5708;
    isRotate
      ? (mesh5.current.rotation.y = initial + 0.01)
      : (mesh5.current.rotation.y = 1.5708);
    isRotate
      ? (mesh6.current.rotation.y = initial + 0.01)
      : (mesh6.current.rotation.y = 1.5708);

    isDoneLoading ? <null /> : (meshAll.current.rotation.x += 0.01);
    isDoneLoading ? <null /> : (meshAll.current.rotation.y += 0.01);

    setTimeout(() => {
      isDoneLoading ? <null /> : (mesh1.current.position.y -= 0.01);
      isDoneLoading ? <null /> : (mesh2.current.position.z += 0.01);
      isDoneLoading ? <null /> : (mesh3.current.position.z -= 0.01);
      isDoneLoading ? <null /> : (mesh4.current.position.y += 0.01);
      isDoneLoading ? <null /> : (mesh5.current.position.x += 0.01);
      isDoneLoading ? <null /> : (mesh6.current.position.x -= 0.01);
    }, 1500);

    setTimeout(() => {
      isDoneLoading ? <null /> : (mesh1.current.rotation.y = initial + 0.01);
      isDoneLoading ? <null /> : (mesh2.current.rotation.y = initial + 0.01);
      isDoneLoading ? <null /> : (mesh3.current.rotation.y = initial + 0.01);
      isDoneLoading ? <null /> : (mesh4.current.rotation.y = initial + 0.01);
      initial += 0.05;
      isRotate = true;
    }, 3500);

    setTimeout(() => {
      isDoneLoading = true;
    }, 5600);
  });

  return (
    <mesh ref={meshAll}>
      <mesh ref={mesh1} position={[0, 0, 0]}>
        <boxBufferGeometry attach="geometry" args={[1.5, 1.5, 0.01]} />
        <meshStandardMaterial map={texture1} />
      </mesh>
      <mesh ref={mesh2} position={[0, 0.75, 0.75]}>
        <boxBufferGeometry attach="geometry" args={[1.5, 1.5, 0.01]} />
        <meshStandardMaterial map={texture2} />
      </mesh>
      <mesh ref={mesh3} position={[0, 0.75, -0.75]}>
        <boxBufferGeometry attach="geometry" args={[1.5, 1.5, 0.01]} />
        <meshStandardMaterial map={texture3} />
      </mesh>
      <mesh ref={mesh4} position={[0, 1.5, 0]}>
        <boxBufferGeometry attach="geometry" args={[1.5, 1.5, 0.01]} />
        <meshStandardMaterial map={texture4} />
      </mesh>
      <mesh ref={mesh5} position={[0.75, 0.75, 0]}>
        <boxBufferGeometry attach="geometry" args={[1.5, 1.5, 0.01]} />
        <meshStandardMaterial map={texture5} />
      </mesh>
      <mesh ref={mesh6} position={[-0.75, 0.75, 0]}>
        <boxBufferGeometry attach="geometry" args={[1.5, 1.5, 0.01]} />
        <meshStandardMaterial map={texture6} />
      </mesh>
    </mesh>
  );
};

const CardCube = () => {
  return (
    <div className="h-screen invert">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Cube />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default CardCube;
