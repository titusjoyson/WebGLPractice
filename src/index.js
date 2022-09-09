import _ from 'lodash';
import * as THREE from 'three';
import cube from './mesh/cube';
import scene from './scenes/main';
import camera from './camera/main';
import renderer from './renderer/main';
import light from './lights/main';
import resize from './resize';
import machine from './machine';
import keyListner from './KeyListner';
import eventBus from './EventBus';
import model from './Loader';
import Animator from './Animator';
import XBot, { modes } from './models/XBot';
import CharectorControler from './CharectorControler';
import mouse from './Mouse';
import SceneHandler from './scenes/SceneHandler';
import sceneList from './scenes/sceneList';

function main() {
    Ammo().then( function ( AmmoLib ) {

        Ammo = AmmoLib;

        const sceneHandler = new SceneHandler(sceneList);
        sceneHandler.goTo(sceneList.screenDemoB);
    } );
    
    // scene.add(cube);
    // scene.add(light);
    // camera.position.set(1, 2, 5);
    // camera.lookAt(cube.position);
    // resize.start(renderer);

    // machine.addCallback(() => {
    //     cube.rotation.y += 0.01;
    //     renderer.render(scene, camera);
    // })
    // machine.start();

    // // model.then(object => {
    // //     scene.add(object[0]);
    // //     let s = 0.01;
    // //     object[0].scale.set(s, s, s);
    // //     object[0].animations = object[1].animations;
        
    // //     let animator = new Animator(object[0]);
    // //     animator.action(0)
    // //     animator.start();
    // // });

    // XBot.then(object=>{
    //     scene.add(object);
    //     let cc = new CharectorControler(object, modes);
    //     cc.start()
    //     cc.run('idle');
    //     // setTimeout(()=>{
    //     //     cc.run('left')
    //     // }, 1000)
    //     // let animator = new Animator(object);
    //     // let id = 0;
    //     // setInterval(()=>{
    //     //     animator.action(id, 1, false);
    //     //     id++;
    //     //     if(id>=9) {id = 0}
    //     // }, 1000)
    //     // animator.start();
    // })

    // // keyListner.start();

    // // eventBus.subscribe('keyListner', (arr) => {
    // //     if (arr[1]) {
    // //         console.log(`pressing the key with keycode ${arr[0]}`);
    // //     } else {
    // //         console.log(`releasing the key with keycode ${arr[0]}`);
    // //     }
    // // })

    // // const caster = (arr) => {
    // //     eventBus.dispatch('keyListner', arr)
    // // }
    // // keyListner.setCaster(caster);

    // mouse.setCanvas(document.querySelector('canvas'));
    // mouse.start()
};

main();