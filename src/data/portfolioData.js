// src/date/portfolioData.js

export const importProjectImages = (projectName) => {
    const globImports = {
        'czyzewskiego': import.meta.glob('../assets/portfolio/czyzewskiego/*.{jpg,jpeg,webp}', { eager: false }),
        'krowoderskich-zuchow': import.meta.glob('../assets/portfolio/krowoderskich-zuchow/*.{jpg,jpeg,webp}', { eager: false }),
        'miechowity': import.meta.glob('../assets/portfolio/miechowity/*.{jpg,jpeg,webp}', { eager: false }),
        'moderato': import.meta.glob('../assets/portfolio/moderato/*.{jpg,jpeg,webp}', { eager: false }),
    };
    return globImports[projectName] || {};
};

export const portfolioProjects = [
    {
        id: 1,
        name: "Czyżewskiego, Kraków",
        description: "Nowoczesne apartamenty w zielonej okolicy krakowskiej ulicy Czyżewskiego.",
        location: "ul. Czyżewskiego, Kraków",
        completion: "Q4 2023",
        imageFolder: 'czyzewskiego', 
        mainImage: './assets/portfolio/czyzewskiego/main.jpg',
    },
    {
        id: 2,
        name: "Krowoderskich Zuchów, Kraków",
        description: "Ekologiczne przestrzenie biurowe w sercu ulicy Krowoderskich Zuchów w Krakowie.",
        location: "ul. Krowoderskich Zuchów, Kraków",
        completion: "Q2 2024",
        imageFolder: 'krowoderskich-zuchow',
        mainImage: './assets/portfolio/krowoderskich-zuchow/main.jpg',
    },
    {
        id: 3,
        name: "Miechowity, Kraków",
        description: "Współczesne wille miejskie w pobliżu ulicy Miechowity na północ od Krakowa.",
        location: "ul. Miechowity, Kraków",
        completion: "Q1 2023",
        imageFolder: 'miechowity',
        mainImage: './assets/portfolio/miechowity/main.jpg',
    },
    {
        id: 4,
        name: "Moderato",
        description: "Nowoczesne mieszkania w spokojnej okolicy Starogardu Gdańskiego.",
        location: "Starogard Gdański",
        completion: "Q3 2022",
        imageFolder: 'moderato',
        mainImage: './assets/portfolio/moderato/main.jpg',
    },
];

export const currentOffers = [
    {
        id: 1,
        name: "Skyline Penthouse",
        type: "Apartment",
        description: "An exclusive penthouse with panoramic city views and bespoke interiors.",
        location: "City Center, NY",
        price: "$2,500,000",
        bedrooms: 4,
        bathrooms: 3,
        image: "https://via.placeholder.com/600x400/FF0000/FFFFFF?text=Penthouse"
    },
    {
        id: 2,
        name: "Riverside Villa",
        type: "House",
        description: "A spacious villa located by the river, perfect for families.",
        location: "Riverbend, CA",
        price: "$1,800,000",
        bedrooms: 5,
        bathrooms: 4,
        image: "https://via.placeholder.com/600x400/0000FF/FFFFFF?text=Villa"
    },
    {
        id: 3,
        name: "Urban Loft",
        type: "Apartment",
        description: "Modern loft in the bustling urban area, ideal for young professionals.",
        location: "Downtown, IL",
        price: "$750,000",
        bedrooms: 1,
        bathrooms: 1,
        image: "https://via.placeholder.com/600x400/00FF00/FFFFFF?text=Loft"
    },
    {
        id: 4,
        name: "Suburban Family Home",
        type: "House",
        description: "A comfortable family home in a quiet suburban neighborhood with a large backyard.",
        location: "Suburbia, GA",
        price: "$450,000",
        bedrooms: 3,
        bathrooms: 2,
        image: "https://via.placeholder.com/600x400/FFA500/FFFFFF?text=Family+Home"
    }
];