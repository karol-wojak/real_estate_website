import React from "react";

const Services = () => (
    <section id="services" className="w-full max-w-5xl mx-auto mb-16 px-4">
        <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">EM Holding – Pośrednicy nieruchomości nowej generacji</h2>
            <p className="text-lg md:text-xl text-gray-700 mb-2">Działamy jako agenci, doradcy i inwestorzy. Łączymy wiedzę rynkową z praktyką, byś mógł bezpiecznie i skutecznie kupić, sprzedać lub wynająć swoją nieruchomość.<br/>Nie jesteśmy zwykłą agencją – działamy strategicznie, kompleksowo i z pełnym zaangażowaniem.</p>
            <p className="text-base md:text-lg text-gray-600 mt-4">Masz konkretny cel? A może dopiero szukasz rozwiązania?<br/>Zobacz, co możemy dla Ciebie zrobić:</p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-6">
            {/* Kupujesz */}
            <div className="flex-1 bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center border border-gray-100 hover:shadow-2xl transition">
                <span className="text-5xl mb-4">🏠</span>
                <h3 className="text-xl font-bold mb-2">Kupujesz?</h3>
                <p className="text-gray-700">Znajdziemy nieruchomość idealnie dopasowaną do Twoich potrzeb, stylu życia i budżetu.<br/>Zadbamy o bezpieczeństwo transakcji, sprawdzimy stan prawny, wynegocjujemy warunki i będziemy z Tobą na każdym etapie.</p>
            </div>
            {/* Sprzedajesz */}
            <div className="flex-1 bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center border border-gray-100 hover:shadow-2xl transition">
                <span className="text-5xl mb-4">💼</span>
                <h3 className="text-xl font-bold mb-2">Sprzedajesz?</h3>
                <p className="text-gray-700">Przygotujemy Twoją nieruchomość tak, by przyciągała uwagę i sprzedała się szybko – za możliwie najlepszą cenę.<br/>Zajmiemy się wszystkim: od strategii, marketingu, przez prezentacje aż po negocjacje i finalizację umowy.</p>
            </div>
            {/* Inwestujesz */}
            <div className="flex-1 bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center border border-gray-100 hover:shadow-2xl transition">
                <span className="text-5xl mb-4">💰</span>
                <h3 className="text-xl font-bold mb-2">Inwestujesz?</h3>
                <p className="text-gray-700">Zainwestuj razem z nami.<br/>Nie musisz wiedzieć, od czego zacząć – wystarczy, że się odezwiesz.<br/>Możemy wspólnie zrealizować inwestycję, opracować strategię lub doradzić Ci, jak najlepiej pomnożyć kapitał.</p>
            </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-6 mt-8">
            {/* Masz nieruchomość... */}
            <div className="flex-1 bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center border border-gray-100 hover:shadow-2xl transition">
                <span className="text-5xl mb-4">🧠</span>
                <h3 className="text-xl font-bold mb-2">Masz nieruchomość i zastanawiasz się, co dalej?</h3>
                <p className="text-gray-700">Przeanalizujemy jej potencjał, policzymy opłacalność i przedstawimy możliwe scenariusze.<br/>Najem krótkoterminowy czy długoterminowy? Lokale, pokoje, a może zmiana przeznaczenia?<br/>Ty decydujesz – my realizujemy.</p>
            </div>
            {/* Masz konkretną sprawę... */}
            <div className="flex-1 bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center border border-gray-100 hover:shadow-2xl transition">
                <span className="text-5xl mb-4">🎯</span>
                <h3 className="text-xl font-bold mb-2">Masz konkretną sprawę? A może dopiero szukasz rozwiązania?</h3>
                <p className="text-gray-700">Zadzwoń. Porozmawiamy.<br/>Z nami nieruchomości mają sens.</p>
            </div>
        </div>
    </section>
);

export default Services;
