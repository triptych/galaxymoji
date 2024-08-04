import { createScene, createCamera, createRenderer } from './sceneSetup.js';
import { createGalaxy } from './galaxyCreator.js';

try {
    const scene = createScene();
    const camera = createCamera();
    const renderer = createRenderer();

    console.log('Scene, camera, and renderer created successfully');

    const galaxy = createGalaxy(10000); // Create a galaxy with 10,000 stars
    scene.add(galaxy);

    console.log('Galaxy created and added to the scene');

    const animate = () => {
        requestAnimationFrame(animate);

        galaxy.rotation.y += 0.001; // Slow rotation

        renderer.render(scene, camera);
    };

    animate();

    console.log('Animation loop started');

    // Handle window resizing
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    console.log('Resize event listener added');
} catch (error) {
    console.error('An error occurred:', error);
}