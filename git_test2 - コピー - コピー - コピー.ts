
//―――――――――OBJ_Git――――――――――-----―――

const Git = new Entity()
Git.addComponent(new GLTFShape("models/6.Youtube_Studio_gltf.gltf"))   
Git.addComponent(new Transform({
    position: new Vector3(8.08, -0.066, 7.932),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1) 
}))

engine.addEntity(Git)


