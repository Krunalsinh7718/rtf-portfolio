import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import { Leva } from "leva";
import * as THREE from 'three';

export default function PortfolioMain() {
    return <>
        <Leva  />
        <Canvas
            className="r3f"
            gl={{
                toneMapping: THREE.NoToneMapping
            }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 2000,
                position: [-3, 1.5, 4]

            }}>
            <Experience />
        </Canvas>
    </>;
}
