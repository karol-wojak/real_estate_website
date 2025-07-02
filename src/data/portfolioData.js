// src/data/portfolioData.js

// --- Statically import the main image for each project ---
import imperialMain from '../assets/portfolio/imperial/main.webp';
import krowoderskichZuchowMain from '../assets/portfolio/krowoderskich-zuchow/main.webp';
import wilenskaMain from '../assets/portfolio/wilenska/main.webp';
import radzikowskiegoMain from '../assets/portfolio/radzikowskiego/main.webp';
import miechowityMain from '../assets/portfolio/miechowity/main.webp';
import pachonskiegoMain from '../assets/portfolio/pachonskiego/main.webp';
import wieliczkaMain from '../assets/portfolio/wieliczka/main.webp';
import jagiellonskieMain from '../assets/portfolio/jagiellonskie/main.webp';
import bajecznaMain from '../assets/portfolio/bajeczna/main.webp';
import strusiaMain from '../assets/portfolio/strusia/main.webp';
import aviaMain from '../assets/portfolio/avia/main.webp';
import moderatoMain from '../assets/portfolio/moderato/main.webp';
import zagonczykaMain from '../assets/portfolio/zagonczyka/main.webp';
import czyzewskiegoMain from '../assets/portfolio/czyzewskiego/main.webp';


export const importProjectImages = (projectName) => {
    const globImports = {
        'imperial': import.meta.glob('../assets/portfolio/imperial/*.webp', { eager: false }),
        'krowoderskich-zuchow': import.meta.glob('../assets/portfolio/krowoderskich-zuchow/*.webp', { eager: false }),
        'wilenska': import.meta.glob('../assets/portfolio/wilenska/*.webp', { eager: false }),
        'radzikowskiego': import.meta.glob('../assets/portfolio/radzikowskiego/*.webp', { eager: false }),
        'miechowity': import.meta.glob('../assets/portfolio/miechowity/*.webp', { eager: false }),
        'pachonskiego': import.meta.glob('../assets/portfolio/pachonskiego/*.webp', { eager: false }),
        'wieliczka': import.meta.glob('../assets/portfolio/wieliczka/*.webp', { eager: false }),
        'jagiellonskie': import.meta.glob('../assets/portfolio/jagiellonskie/*.webp', { eager: false }),
        'bajeczna': import.meta.glob('../assets/portfolio/bajeczna/*.webp', { eager: false }),
        'strusia': import.meta.glob('../assets/portfolio/strusia/*.webp', { eager: false }),
        'avia': import.meta.glob('../assets/portfolio/avia/*.webp', { eager: false }),
        'moderato': import.meta.glob('../assets/portfolio/moderato/*.webp', { eager: false }),
        'zagonczyka': import.meta.glob('../assets/portfolio/zagonczyka/*.webp', { eager: false }),
        'czyzewskiego': import.meta.glob('../assets/portfolio/czyzewskiego/*.webp', { eager: false }),
    };
    if (projectName === 'avia') {
        // Exclude main.webp from Avia
        const all = globImports['avia'];
        const filtered = {};
        for (const key in all) {
            if (!key.endsWith('/main.webp')) filtered[key] = all[key];
        }
        return filtered;
    }
    return globImports[projectName] || {};
};


export const portfolioProjects = [
    {
        id: 1,
        name: "Imperial City Yes, Kraków",
        description: "Na sprzedaż | Urządzenie ze stanu deweloperskiego\nSprawna transakcja po pełnym przygotowaniu.",
        location: "Kraków",
        completion: "Q3 2024",
        imageFolder: 'imperial',
        mainImage: imperialMain,
        area: 38,
    },
    {
        id: 2,
        name: "Krowoderskich Zuchów, Kraków",
        description: "Na sprzedaż | Remont generalny\nSzybka sprzedaż po zakończeniu prac.",
        location: "Kraków",
        completion: "Q2 2024",
        imageFolder: 'krowoderskich-zuchow',
        mainImage: krowoderskichZuchowMain,
        area: 52,
    },
    {
        id: 3,
        name: "Wileńska, Kraków",
        description: "Na wynajem | Lifting wnętrza\nWynajęte zaraz po przygotowaniu.",
        location: "Kraków",
        completion: "Q4 2025",
        imageFolder: 'wilenska',
        mainImage: wilenskaMain,
        area: 60,
    },
    {
        id: 4,
        name: "Radzikowskiego, Kraków",
        description: "Na sprzedaż | Lifting pod sprzedaż\nSprzedane szybko po skutecznym przygotowaniu.",
        location: "Kraków",
        completion: "Q4 2024",
        imageFolder: 'radzikowskiego',
        mainImage: radzikowskiegoMain,
        area: 49,
    },
    {
        id: 5,
        name: "Miechowity, Kraków",
        description: "Na sprzedaż | Remont generalny\nZrealizowana strategia sprzedażowa zakończona ponadprzeciętnym zyskiem.",
        location: "Kraków",
        completion: "Q1 2023",
        imageFolder: 'miechowity',
        mainImage: miechowityMain,
        area: 43,
    },
    {
        id: 6,
        name: "Pachońskiego, Kraków",
        description: "Na wynajem | Urządzenie ze stanu deweloperskiego\nWynajęte pierwszemu zainteresowanemu po zakończeniu prac.",
        location: "Kraków",
        completion: "Q3 2025",
        imageFolder: 'pachonskiego',
        mainImage: pachonskiegoMain,
        area: 29,
    },
    {
        id: 7,
        name: "Wieliczka Park",
        description: "Na sprzedaż | Urządzenie ze stanu deweloperskiego\nWnętrze dopasowane do potrzeb rynku – skutecznie sprzedane.",
        location: "Wieliczka",
        completion: "Q3 2023",
        imageFolder: 'wieliczka',
        mainImage: wieliczkaMain,
        area: 51,
    },
    {
        id: 8,
        name: "Osiedle Jagiellońskie, Kraków",
        description: "Na sprzedaż | Remont generalny\nPrzygotowane z myślą o docelowym odbiorcy – trafione w punkt.",
        location: "Kraków",
        completion: "Q1 2024",
        imageFolder: 'jagiellonskie',
        mainImage: jagiellonskieMain,
        area: 37,
    },
    {
        id: 9,
        name: "Bajeczna, Kraków (2 mieszkania)",
        description: "Na sprzedaż | Remont generalny\nKupione i sprzedane niemal w tym samym czasie – zrealizowane równolegle.",
        location: "Kraków",
        completion: "Q2 2025",
        imageFolder: 'bajeczna',
        mainImage: bajecznaMain,
        area: 27,
    },
    {
        id: 10,
        name: "Osiedle Strusia, Kraków",
        description: "Na sprzedaż | Remont generalny\nZrealizowane zgodnie z założonym planem.",
        location: "Kraków",
        completion: "Q2 2023",
        imageFolder: 'strusia',
        mainImage: strusiaMain,
        area: 43,
    },
    {
        id: 11,
        name: "Avia, Kraków",
        description: "Pod najem | Urządzenie ze stanu deweloperskiego\nWynajęte pierwszemu najemcy po zakończeniu prac.",
        location: "Kraków",
        completion: "Q2 2024",
        imageFolder: 'avia',
        mainImage: aviaMain,
        area: 36,
    },
    {
        id: 12,
        name: "Moderato, Starogard Gdański",
        description: "Pod najem krótkoterminowy | Urządzenie ze stanu deweloperskiego\nPrzestrzeń zaprojektowana z myślą o maksymalnym komforcie – gotowa do wynajmu od pierwszego dnia.",
        location: "Starogard Gdański",
        completion: "Q3 2024",
        imageFolder: 'moderato',
        mainImage: moderatoMain,
        area: 38,
    },
    {
        id: 13,
        name: "Zagończyka, Starogard Gdański",
        description: "Pod najem | Urządzenie ze stanu deweloperskiego\nNieruchomość dostosowana do potrzeb lokalnego rynku.",
        location: "Starogard Gdański",
        completion: "Q1 2026",
        imageFolder: 'zagonczyka',
        mainImage: zagonczykaMain,
        area: 37,
    },
    {
        id: 14,
        name: "Czyżewskiego, Kraków",
        description: "Pod najem | Urządzenie ze stanu deweloperskiego\nProjekt zrealizowany w pełnym zakresie – od odbioru do gotowości do najmu.",
        location: "Kraków",
        completion: "Q4 2023",
        imageFolder: 'czyzewskiego',
        mainImage: czyzewskiegoMain,
        area: 43,
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
    }
];