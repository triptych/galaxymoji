const createStellarEmoji = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    ctx.font = '28px Arial';
    ctx.fillText('⭐', 0, 28);
    
    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.SpriteMaterial({ map: texture });
    return new THREE.Sprite(material);
};

export const createGalaxy = (starCount) => {
    const galaxy = new THREE.Group();

    for (let i = 0; i < starCount; i++) {
        const star = createStellarEmoji();
        
        // Calculate spiral position
        const t = i / starCount;
        const angle = 10 * Math.PI * t;
        const radius = 40 * t;
        
        star.position.set(
            radius * Math.cos(angle),
            (Math.random() - 0.5) * 10,
            radius * Math.sin(angle)
        );
        
        star.scale.setScalar(Math.random() * 0.5 + 0.5);
        galaxy.add(star);
    }

    return galaxy;
};