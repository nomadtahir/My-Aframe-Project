var sceneEl = document.querySelector('a-scene').object3D;
var scene = sceneEl
var loader = new THREE.GLTFLoader();
const pickableObjects = []
const lod = new THREE.LOD();
loader.load('https://cdn.glitch.me/00f2d644-93e9-43db-b8e5-cac6ced4b897%2FtestNew4LOD.glb?', function (gltf) {
    var model = gltf.scene
    model.traverse(function (o) {
        if (o instanceof THREE.Mesh) {
            pickableObjects.push(o)

        }
    });
    let theResult0 = new THREE.Object3D();
    let theResult1 = new THREE.Object3D();
    let theResult2 = new THREE.Object3D();

    theResult0.add(gltf.scene.getObjectByName("Object_LOD0"))
    theResult1.add(gltf.scene.getObjectByName("Object_LOD1"))
    theResult2.add(gltf.scene.getObjectByName("Object_LOD2"))

    lod.addLevel(theResult0, 30)
    lod.addLevel(theResult1, 60)
    lod.addLevel(theResult2, 80)
    lod.scale.set(0.01, 0.01, 0.01)
    lod.rotation.set(0, -1.5, 1.555)
    lod.position.set(-0.7, 1, -5)
    scene.add(lod)
    // scene.add(gltf.scene);

});
