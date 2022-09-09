import * as THREE from 'three';
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";


class Loader{
    constructor(modelFileUrl, urlAnimationList, scale){
        this.loader = new FBXLoader();
        this.animationPromises = [];
        let animations = [];

        const modelPromis = new Promise((res, rej) => {
            this.loader.load(modelFileUrl, function (object) {
                object.scale.set(scale, scale, scale)
                object.traverse(function (child) {
                    if (child.isMesh) {
                        child.castShadow = true;
                        child.receiveShadow = true;
                    }
                });
                res(object);
            })
        })

        urlAnimationList.forEach((animationUrl, idx)=>{
            this.animationPromises[idx] = new Promise((res, rej) => {
                this.loader.load(animationUrl, function (object) {
                    object.scale.set(scale, scale, scale);
                    animations[idx] = object.animations[0];
                    res(idx);
                });
            })

            const joinerPromiss = Promise.all(this.animationPromises);
            this.model = new Promise((res, rej) => {
                Promise.all([modelPromis, joinerPromiss]).then(data=>{
                    const object = data[0];
                    if (animations.length > 0) {
                        object.animations = animations;
                    }
                    res(object);
                })
            })
        })
    }

    getModel(){
        return this.model;
    } 
}

// model

// const model = new Promise((res, rej) => {
//     const loader = new FBXLoader();
//     loader.load('src/models/fbx/Y Bot.fbx', function (object) {
//         object.traverse(function (child) {
//             if (child.isMesh) {
//                 child.castShadow = true;
//                 child.receiveShadow = true;
//             }
//         });

//         res(object);

//     });
// })

// const animation = new Promise((res, rej) => {
//     const loader = new FBXLoader();
//     loader.load('src/models/animations/idle.fbx', function (object) {
//         res(object);
//     });
// })

// const combo = Promise.all([model, animation]);

export default Loader;