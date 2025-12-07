import fs from 'fs';
import path from 'path';

export function load() {
    const screenshotsDir = path.resolve('static/screenshots');

    try {
        // Create directory if it doesn't exist
        if (!fs.existsSync(screenshotsDir)) {
            return { images: [] };
        }

        const files = fs.readdirSync(screenshotsDir);

        // Filter for image files
        const images = files.filter(file =>
            /\.(png|jpg|jpeg|gif|webp|avif)$/i.test(file)
        ).map(file => `/screenshots/${file}`);

        return {
            images
        };
    } catch (err) {
        console.error('Error reading screenshots directory:', err);
        return { images: [] };
    }
}
