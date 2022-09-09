import * as THREE from 'three';
import camera from "../camera/main";
import light from "../lights/main";
import machine from "../machine";
import cube from "../mesh/cube";
import renderer from "../renderer/main";
import resize from "../resize";
import scene from "./main";
import MasterScene from "./MasterScene";
import sceneList from "./sceneList";

class ScreenDemoB extends MasterScene{
    open(){
        console.log(`sceean ${this.instanceName} is opening`);
        setTimeout(()=>{
            this.sceneHandler.goTo(sceneList.screenDemoA);
        }, 1000*1)

        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();
        window.addEventListener('mousemove', this.onMouseMove.bind(this), false);

        scene.add(light);
        scene.add(cube);
        camera.position.set(1, 2, 3);
        camera.lookAt(cube.position);
        resize.start(renderer);
        machine.addCallback(()=>{
            renderer.render(scene, camera);
        })
        machine.start();
    }
    onMouseMove( event ) {
        
        // calculate pointer position in normalized device coordinates
        // (-1 to +1) for both components
    
        this.mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
        this.mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
        this.raycaster.setFromCamera( this.mouse, camera );
        this.raycaster.setFromCamera( this.mouse, camera );

        // calculate objects intersecting the picking ray
        const intersects = this.raycaster.intersectObjects( scene.children );
        for ( let i = 0; i < intersects.length; i ++ ) {
            intersects[ i ].object.material.color.set( 0x0000ff );
        }
    
    }
    close(){
        console.log(`sceean ${this.instanceName} is closing`);
    }
}

const screenDemoB = new ScreenDemoB();

export default screenDemoB;