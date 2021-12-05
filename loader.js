AFRAME.registerComponent('modify-materials', {
    init: function () {
      // Wait for model to load.
      this.el.addEventListener('model-loaded', () => {
        // Grab the mesh / scene.
        console.log("hi")
        //const obj = this.el.getObject3D('mesh');
        // Go over the submeshes and modify materials we want.

      });
    }
  });