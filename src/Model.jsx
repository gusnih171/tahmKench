import React, { useEffect, useRef, forwardRef, useImperativeHandle, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';
import Tahm from '../src/component/tahm.glb';
const Model = forwardRef((props, ref) => {
  const { scene, animations } = useGLTF(Tahm);
  const { actions } = useAnimations(animations, scene);
  const modelRef = useRef();
  const [scale, setScale] = useState([0.9, 0.9, 0.9]);

  // Utility function to stop all current animations
  const stopAllActions = () => {
    if (actions) {
      Object.keys(actions).forEach((actionName) => {
        const action = actions[actionName];
        if (action.isRunning()) {
          action.fadeOut(0.5);  // Smoothly fade out running actions
          action.stop();        // Stop the action
        }
      });
    }
  };

  useImperativeHandle(ref, () => ({
    playSpell4Long() {
      stopAllActions();  // Stop other animations before starting this one
    
      if (actions && actions['Spell4_Long']) {
        const action = actions['Spell4_Long'];
        const lowerDuration = action.getClip().duration / 1.1;
    
        action.reset().play();
        action.clampWhenFinished = true;
        action.loop = THREE.LoopOnce;
    
        // Stop the animation before the last 10%. This to prevent the 3D-model to get stuck.
        setTimeout(() => {
          action.stop();
          if (actions['Idle1']) {
            actions['Idle1'].reset().play();
          }
        }, lowerDuration * 1000);  // Convert to milliseconds
      } else {
        console.error('Spell4_Long animation not found');
      }
    }, 

    playJoke() {
      stopAllActions();  // Stop other animations before starting this one
    
      if (actions && actions['Joke']) {
        const action = actions['Joke'];
        const lowerDuration = action.getClip().duration / 1.1;
    
        action.reset().play();
        action.clampWhenFinished = true;
        action.loop = THREE.LoopOnce;
    
        // Stop the animation before the last 10%. This to prevent the 3D-model to get stuck.
        setTimeout(() => {
          action.stop();
          if (actions['Idle1']) {
            actions['Idle1'].reset().play();
          }
        }, lowerDuration * 1000);  // Convert to milliseconds
      } else {
        console.error('Joke animation not found');
      }
    }, 
    
    playTaunt() {
      stopAllActions();  // Stop other animations before starting this one
    
      if (actions && actions['Taunt']) {
        const action = actions['Taunt'];
        const lowerDuration = action.getClip().duration / 1.1;
    
        action.reset().play();
        action.clampWhenFinished = true;
        action.loop = THREE.LoopOnce;
    
        // Stop the animation before the last 10%. This to prevent the 3D-model to get stuck.
        setTimeout(() => {
          action.stop();
          if (actions['Idle1']) {
            actions['Idle1'].reset().play();
          }
        }, lowerDuration * 1000);  // Convert to milliseconds
      } else {
        console.error('Taunt animation not found');
      }
    }, 

    playR() {
      stopAllActions();  // Stop other animations before starting this one
    
      if (actions && actions['Idle_Aggro_toIdle']) {
        const action = actions['Idle_Aggro_toIdle'];
        const lowerDuration = action.getClip().duration / 1.1;
    
        action.reset().play();
        action.clampWhenFinished = true;
        action.loop = THREE.LoopOnce;
    
        // Stop the animation before the last 10%. This to prevent the 3D-model to get stuck.
        setTimeout(() => {
          action.stop();
          if (actions['Idle1']) {
            actions['Idle1'].reset().play();
          }
        }, lowerDuration * 1000);  // Convert to milliseconds
      } else {
        console.error('Idle_Aggro_toIdle animation not found');
      }
    }, 
    
    playLaugh() {
      stopAllActions();  // Stop other animations before starting this one
    
      if (actions && actions['Laugh']) {
        const action = actions['Laugh'];
        const lowerDuration = action.getClip().duration / 1.1;
    
        action.reset().play();
        action.clampWhenFinished = true;
        action.loop = THREE.LoopOnce;
    
        // Stop the animation before the last 10%. This to prevent the 3D-model to get stuck.
        setTimeout(() => {
          action.stop();
          if (actions['Idle1']) {
            actions['Idle1'].reset().play();
          }
        }, lowerDuration * 1000);  // Convert to milliseconds
      } else {
        console.error('Laugh animation not found');
      }
    }, 

    playE() {
      stopAllActions();  // Stop other animations before starting this one
    
      if (actions && actions['IdleIn']) {
        const action = actions['IdleIn'];
        const lowerDuration = action.getClip().duration / 1.1;
    
        action.reset().play();
        action.clampWhenFinished = true;
        action.loop = THREE.LoopOnce;
    
        // Stop the animation before the last 10%. This to prevent the 3D-model to get stuck.
        setTimeout(() => {
          action.stop();
          if (actions['Idle1']) {
            actions['Idle1'].reset().play();
          }
        }, lowerDuration * 1000);  // Convert to milliseconds
      } else {
        console.error('IdleIn animation not found');
      }
    }, 
  }));

  useEffect(() => {
    if (actions) {
      console.log('Available actions:', actions);

      if (actions['Idle1']) {
        actions['Idle1'].play();
      } else {
        console.error('Idle1 animation not found');
      }
    }

    scene.traverse((object) => {
      if (object.isMesh) {
        object.castShadow = true;
        object.receiveShadow = true;
      }
    });
  }, [actions, scene]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1000) {
        setScale([0.5, 0.5, 0.5]);
      } else {
        setScale([0.9, 0.9, 0.9]);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call handler right away so state gets updated with initial window size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = () => {
    stopAllActions();  // Stop other animations before starting this one
    
    if (actions && actions['Laugh']) {
      const action = actions['Laugh'];
      const lowerDuration = action.getClip().duration / 1.1;
  
      action.reset().play();
      action.clampWhenFinished = true;
      action.loop = THREE.LoopOnce;
  
      // Stop the animation before the last 10%. This to prevent the 3D-model to get stuck.
      setTimeout(() => {
        action.stop();
        if (actions['Idle1']) {
          actions['Idle1'].reset().play();
        }
      }, lowerDuration * 1000);  // Convert to milliseconds
    } else {
      console.error('Laugh animation not found');
    }
  };

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={scale}
      rotation={[0.2, 0.8, 0]}
      onClick={handleClick}
    />
  );
});

export default Model;
