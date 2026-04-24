// این تابع یک عکس ساده (اموجی به صورت SVG) برمی‌گرداند
export default function handler(req, res) {
    // تنظیم هدر برای نمایش تصویر
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'no-cache');
    
    // یک عکس ساده به صورت SVG (اموجی + متن)
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
        <rect width="200" height="200" fill="#4CAF50" rx="20"/>
        <text x="100" y="80" font-size="60" text-anchor="middle" fill="white">✅</text>
        <text x="100" y="140" font-size="20" text-anchor="middle" fill="white">Vercel</text>
        <text x="100" y="165" font-size="16" text-anchor="middle" fill="white">کار می‌کند!</text>
    </svg>`;
    
    res.status(200).send(svg);
}
