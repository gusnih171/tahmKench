import React, { Suspense, useEffect, useRef, forwardRef, useImperativeHandle, useState, useReducer  } from 'react';
import { Canvas, extend } from '@react-three/fiber';
import { PlaneGeometry } from 'three';
import Model from './Model';
import '../src/Tahm3D.css';

// Extend the THREE namespace with PlaneGeometry
extend({ PlaneGeometry });

const Tahm3D = forwardRef((props, ref) => {
  const modelRef = useRef();
  useEffect(() => {
    const handleContextLost = (event) => {
      event.preventDefault();
      console.log('WebGL context lost');
    };

    const handleContextRestored = () => {
      console.log('WebGL context restored');
    };

    const canvas = document.querySelector('canvas');
    canvas.addEventListener('webglcontextlost', handleContextLost, false);
    canvas.addEventListener('webglcontextrestored', handleContextRestored, false);

    return () => {
      canvas.removeEventListener('webglcontextlost', handleContextLost);
      canvas.removeEventListener('webglcontextrestored', handleContextRestored);
    };
  }, []);



  useImperativeHandle(ref, () => ({
    playSpell4Long: () => {
      if (modelRef.current) {
        modelRef.current.playSpell4Long();
      }
    },
    playLaugh: () => {
      if (modelRef.current) {
        modelRef.current.playLaugh();
      }
    },
    playJoke: () => {
      if (modelRef.current) {
        modelRef.current.playJoke();
      }
    },
    playTaunt: () => {
      if (modelRef.current) {
        modelRef.current.playTaunt();
      }
    },
    playE: () => {
      if (modelRef.current) {
        modelRef.current.playE();
      }
    },
    playR: () => {
      if (modelRef.current) {
        modelRef.current.playR();
      }
    },
  }));

  return (
    <div className="canvas-container">
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight
          castShadow
          position={[2.5, 8, 5]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Model ref={modelRef} />
        </Suspense>
        <mesh receiveShadow position={[0, -1, 0]} >
          <planeGeometry attach="geometry" args={[100, 100]} />
          <shadowMaterial attach="material" opacity={0.5} />
        </mesh>
      </Canvas>
    </div>
  );
});

export default Tahm3D;
