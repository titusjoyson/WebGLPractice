import * as THREE from 'three';
import createParalellepiped from './paralellepiped';

let addPhysicsBox = () => {
    const pos = new THREE.Vector3();
    const quat = new THREE.Quaternion();

    // Ground
    pos.set(0, 2, 0);
    quat.set(0, 0, 0, 1);
    const box = createParalellepiped(1, 1, 1, .1, pos, quat, new THREE.MeshPhongMaterial({ color: 0xFFFFFF }));
    box.castShadow = true;
    box.receiveShadow = true;
    // textureLoader.load('textures/grid.png', function (texture) {

    //     texture.wrapS = THREE.RepeatWrapping;
    //     texture.wrapT = THREE.RepeatWrapping;
    //     texture.repeat.set(40, 40);
    //     ground.material.map = texture;
    //     ground.material.needsUpdate = true;
    // })
}

export default addPhysicsBox;