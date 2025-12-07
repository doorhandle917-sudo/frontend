
export function load() {
    // Navigate up 3 levels from src/routes/files/screenshots/ to src/
    // Then into lib/screenshots
    const modules = import.meta.glob('../../../lib/screenshots/*.{png,jpg,jpeg,gif,webp,avif}', { eager: true, query: { as: 'url' } });

    // Extract the values (URLs) from the modules object
    const images = Object.values(modules);

    console.log('Loaded images count:', images.length);
    console.log('Loaded images:', images);

    return {
        images
    };
}
