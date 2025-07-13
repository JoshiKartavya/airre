const projects: {
    _id: string;
    slug: string;
    preview: string;
    title: string;
    description: string;
    client: string;
    date: string;
    price: string;
    tech?: string[]; // Optional
    link?: string; // Optional
}[] = [
    {
        _id: "1",
        slug: "anthrope-london",
        preview: "./pro1.png",
        title: "Anthrope London Restaurant & Hotel Website",
        description: "Anthrope is a premium restaurant that redefines fine dining with an exquisite fusion of flavors, world-class service, and an ambiance of timeless elegance. Complementing its culinary mastery, Anthrope also offers luxurious 5-star hotels, providing guests with an unparalleled experience of sophistication, comfort, and hospitality. Whether indulging in a gourmet feast or unwinding in opulent accommodations, Anthrope promises an unforgettable journey of taste and luxury.",
        client: "Anthrope London",
        tech: ["React", "Next.js", "Tailwind CSS"],
        link: "https://anthrope-london.vercel.app/",
        date: "2023-12-18",
        price: '850'
    },
    {
        _id: "2",
        slug: "3d-helmet",
        preview: "/pro3.png",
        title: "Futuristic 3D Helmet Showcase",
        description: "Explore a high-definition 3D helmet that rotates with your cursor, delivering a seamless, interactive showcase. Built with WebGL and Three.js, it offers realistic textures and smooth animations, making every detail come to life.",
        client: "Cyberpunk 2077",
        tech: ["React", "Tailwind CSS", "Three.js" ,"React Three Fiber"],
        link: "https://cyberpunk-2077-one.vercel.app/",
        date: "2024-03-12",
        price: '1199'
    },
    {
        _id: "3",
        slug: "clear-consent",
        preview: "/pro3.png",
        title: "Professional Logo For Clear Consent",
        description: "I designed a professional and modern logo for Clear Consent, a cybersecurity company committed to digital safety and user privacy. The logo embodies security, trust, and transparency, using a sleek and minimalistic design that reflects the company's mission. With a strong yet clean typography and a shield-inspired icon, the design conveys protection and reliability. The color palette was carefully chosen to evoke a sense of authority and trustworthiness, making it a perfect fit for the cybersecurity industry.",
        client: "Jasmin Patel",
        date: "2025-01-05",
        price: '200'
    }
]

export default projects;