export const createScene = () => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); // Black background
    return scene;
};

export const createCamera = () => {
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50;
    return camera;
};

export const createRenderer = () => {
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    return renderer;
};