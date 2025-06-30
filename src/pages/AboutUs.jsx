// src/pages/AboutUs.jsx
import EdytaImage from '../assets/team/edyta.png';
import MichalImage from '../assets/team/michal.png';

const AboutUsPage = () => (
    <section id="about-section" className="transition-all duration-500 ease-in-out transform opacity-0 translate-y-4 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8 leading-tight md:pb-1">O Nas</h1>
        <div className="text-lg md:text-xl text-black leading-relaxed mb-10 text-justify space-y-4 w-full px-4 md:px-8">
            <p className="text-justify">EM Holding to zespół ludzi, którzy od lat działają na rynku nieruchomości w Krakowie.</p>
            <p className="text-justify">Zaczynaliśmy od własnych inwestycji – kupowaliśmy mieszkania pod wynajem, remontowaliśmy je, urządzaliśmy, sprzedawaliśmy. Krok po kroku, projekt po projekcie, przechodziliśmy przez wszystkie etapy, zdobywaliśmy doświadczenie i budowaliśmy relacje.</p>
            <p className="text-justify">Dziś robimy to samo dla naszych klientów.</p>
            <p className="text-justify">Dzięki latom praktyki wiemy, jak skutecznie kupić, wynająć i sprzedać nieruchomość.<br/>Ponieważ sami również inwestujemy, znamy ten proces od podszewki – i potrafimy wczuć się w rolę właściciela, inwestora, osoby kupującej pierwsze mieszkanie.</p>
            <p className="text-justify">Dlatego tak dobrze rozumiemy potrzeby naszych klientów.</p>
            <p className="text-justify">Dla nas każda nieruchomość to nowy projekt – wyjątkowy i wymagający indywidualnego podejścia.<br/>Podchodzimy do niego z pełnym zaangażowaniem, niezależnie od tego, czy chodzi o sprzedaż, zakup, wynajem czy doradztwo.</p>
            <p className="font-semibold mt-6 text-justify">To, co nas wyróżnia?</p>
            <ul className="list-none pl-0 mb-4 text-justify">
                <li className="flex items-start gap-2"><span>🔸</span><span>Jesteśmy praktykami, inwestorami i strategami.</span></li>
                <li className="flex items-start gap-2"><span>🔸</span><span>Nie wrzucamy ogłoszenia i nie czekamy, aż “coś się wydarzy”.</span></li>
                <li className="flex items-start gap-2"><span>🔸</span><span>Działamy aktywnie – pozyskujemy klientów, analizujemy rynek, planujemy i realizujemy.</span></li>
                <li className="flex items-start gap-2"><span>🔸</span><span>Na każdym etapie procesu jesteśmy Twoim partnerem, nie tylko pośrednikiem.</span></li>
            </ul>
            <p className="text-justify">Powiedz, czego potrzebujesz – a my znajdziemy najlepsze&nbsp;rozwiązanie.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
            {/* Edyta's Profile */}
            <div className="flex flex-col items-center">
                <div className="w-full flex items-center justify-center mb-4 relative">
                    <img
                        src={EdytaImage}
                        alt="Właściciel 1"
                        className="max-w-xs w-full aspect-square object-cover rounded-2xl shadow-[0_0_40px_0_rgba(205,166,112,0.5)] bg-white"
                        style={{zIndex: 1}}
                    />
                </div>
                <div className="max-w-xs w-full">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 mt-3 text-center break-words">Edyta Augustynczyk-Repska</h3>
                    <p className="text-black font-serif text-justify leading-relaxed space-y-2 break-words hyphens-auto">
                        Współzałożycielka EM Holding. Agentka, inwestorka i strateg. Od lat działa na rynku nieruchomości w Krakowie.
                        <br/><br/>
                        <span className="italic text-[#cda670] border-l-4 border-[#cda670] pl-4 mt-2 block">
                            „Łączę doświadczenie w sprzedaży i marketingu z pasją do aranżacji wnętrz i skutecznych strategii. Przeszłam drogę od własnych inwestycji po kompleksową obsługę klientów. Pomagam podejmować dobre decyzje – czy chodzi o kupno, sprzedaż, wynajem czy inwestycję.”
                        </span>
                    </p>
                </div>
            </div>
            {/* Michał's Profile */}
            <div className="flex flex-col items-center">
                <div className="w-full flex items-center justify-center mb-4 relative">
                    <img
                        src={MichalImage}
                        alt="Właściciel 2"
                        className="max-w-xs w-full aspect-square object-cover rounded-2xl shadow-[0_0_40px_0_rgba(205,166,112,0.5)] bg-white"
                        style={{zIndex: 1}}
                    />
                </div>
                <div className="max-w-xs w-full">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 mt-3 text-center break-words">Michał <br/>Wojak</h3>
                    <p className="text-black font-serif text-justify leading-relaxed space-y-2 break-words hyphens-auto">
                        Współzałożyciel EM Holding. Agent, inwestor i koordynator realizacji od A do Z.
                        <br/><br/>
                        <span className="italic text-[#cda670] border-l-4 border-[#cda670] pl-4 mt-2 block">
                            „Od lat pracuję przy realizacjach – remontach, wykończeniach i przygotowaniu nieruchomości do sprzedaży lub wynajmu. Dbam o to, by każdy projekt był dopięty na ostatni guzik. Łączę praktyczną wiedzę techniczną z doświadczeniem w sprzedaży i zarządzaniu. Wiem, na co zwrócić uwagę – i zawsze działam po stronie klienta.”
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default AboutUsPage;