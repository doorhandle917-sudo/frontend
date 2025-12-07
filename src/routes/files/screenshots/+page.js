
export function load() {
    // Import all images from src/lib/screenshots
    const modules = import.meta.glob('/src/lib/screenshots/*.{png,jpg,jpeg,gif,webp,avif}', { eager: true, query: { as: 'url' } });

    // Extract the values (URLs) from the modules object
    const images = Object.values(modules);

    console.log('Loaded images count:', images.length);
    console.log('Loaded images:', images);

    return {
        images
    };
}
