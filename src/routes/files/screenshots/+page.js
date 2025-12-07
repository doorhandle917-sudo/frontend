
export function load() {
    // Import all images from src/lib/screenshots
    const modules = import.meta.glob('$lib/screenshots/*.{png,jpg,jpeg,gif,webp,avif}', { eager: true, query: { as: 'url' } });

    // Extract the values (URLs) from the modules object
    const images = Object.values(modules);

    return {
        images
    };
}
