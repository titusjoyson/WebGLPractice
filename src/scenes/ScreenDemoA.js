import * as THREE from 'three';
import camera from "../camera/main";
import light from "../lights/main";
import machine from "../machine";
import cube from "../mesh/cube";
import addGround from "../physics/Ground";
import initPhysics from "../physics/initPhysics";
import addPhysicsBox from '../physics/PhysicsBox';
import updatePhysics from "../physics/UpdatePhysics";
import renderer from "../renderer/main";
import resize from "../resize";
import scene from "./main";
import MasterScene from "./MasterScene";
import sceneList from "./sceneList";
import keyListner from "../KeyListner";
import createRigidBody, { rigidBodies } from '../physics/RigidBodies';

class ScreenDemoA extends MasterScene{
    open(){
        scene.add(light);
        scene.add(cube);
        cube.position.y = .5;
        camera.position.set(1, 2, -3);
        camera.lookAt(cube.position);
        resize.start(renderer);
        initPhysics();
        addGround();
        addPhysicsBox();
        const clock = new THREE.Clock();
        keyListner.start();
        machine.addCallback(()=>{
            const deltaTime = clock.getDelta();
            updatePhysics(deltaTime);
            let speed = 1;
            let [x, y, z] = [0, 0, 0];
            if(keyListner.isPressed(87)) z = speed;
            if(keyListner.isPressed(83)) z = -speed;
            if(keyListner.isPressed(65)) x = speed;
            if(keyListner.isPressed(68)) x = -speed;
            if(x != 0 || z != 0){
                // rigidBodies[0].userData.physicsBody.applyImpulse(new Ammo.btVector3(x, y, z));
                // rigidBodies[0].userData.physicsBody.applyCentralInpulse(new Ammo.btVector3(x, y, z));
                rigidBodies[0].userData.physicsBody.setLinearVelocity(new Ammo.btVector3(x, y, z));
                // rigidBodies[0].userData.physicsBody.setAngularVelocity(new Ammo.btVector3(x, y, z));
            }
            camera.lookAt(rigidBodies[0].position);
            renderer.render(scene, camera);
            
        })
        machine.start();
    }
    close(){
        console.log(`sceean ${this.instanceName} is closing`);
    }
}

const screenDemoA = new ScreenDemoA();

export default screenDemoA;