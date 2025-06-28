// src/pages/AboutUs.jsx
import EdytaImage from '../assets/team/edyta.png';
import MichalImage from '../assets/team/michal.png';

const AboutUsPage = () => (
    <section id="about-section" className="transition-all duration-500 ease-in-out transform opacity-0 translate-y-4 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8 leading-tight md:pb-1">O Nas</h1>
        <div className="text-lg md:text-xl text-black leading-relaxed mb-10 text-justify space-y-4">
            <p>EM Holding to zespół ludzi, którzy od lat działają na rynku nieruchomości w Krakowie.</p>
            <p>Zaczynaliśmy od własnych inwestycji – kupowaliśmy mieszkania pod wynajem, remontowaliśmy je, urządzaliśmy, sprzedawaliśmy.<br/>Krok po kroku, projekt po projekcie, przechodziliśmy przez wszystkie etapy, zdobywaliśmy doświadczenie i budowaliśmy relacje.</p>
            <p>Dziś robimy to samo dla naszych klientów.</p>
            <p>Dzięki latom praktyki wiemy, jak skutecznie kupić, wynająć i sprzedać nieruchomość.<br/>Ponieważ sami również inwestujemy, znamy ten proces od podszewki – i potrafimy wczuć się w rolę właściciela, inwestora, osoby kupującej pierwsze mieszkanie.</p>
            <p>Dlatego tak dobrze rozumiemy potrzeby naszych klientów.</p>
            <p>Dla nas każda nieruchomość to nowy projekt – wyjątkowy i wymagający indywidualnego podejścia.<br/>Podchodzimy do niego z pełnym zaangażowaniem, niezależnie od tego, czy chodzi o sprzedaż, zakup, wynajem czy doradztwo.</p>
            <p className="font-semibold mt-6">To, co nas wyróżnia?</p>
            <ul className="list-none pl-0 mb-4">
                <li className="flex items-start gap-2"><span>🔸</span><span>Jesteśmy praktykami, inwestorami i strategami.</span></li>
                <li className="flex items-start gap-2"><span>🔸</span><span>Nie wrzucamy ogłoszenia i nie czekamy, aż “coś się wydarzy”.</span></li>
                <li className="flex items-start gap-2"><span>🔸</span><span>Działamy aktywnie – pozyskujemy klientów, analizujemy rynek, planujemy i realizujemy.</span></li>
                <li className="flex items-start gap-2"><span>🔸</span><span>Na każdym etapie procesu jesteśmy Twoim partnerem, nie tylko pośrednikiem.</span></li>
            </ul>
            <p>Powiedz, czego potrzebujesz – a my znajdziemy najlepsze&nbsp;rozwiązanie.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
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
                        Współzałożycielka EM Holding, strateg, inwestorka i agentka nieruchomości z wieloletnim doświadczeniem w sprzedaży i marketingu.<br/><br/>
                        <span className="italic text-[#cda670] border-l-4 border-[#cda670] pl-4 mt-2 block">
                            “Zanim weszłam na rynek nieruchomości, przez wiele lat pracowałam w strukturach sprzedażowych i trade marketingowych w międzynarodowych firmach – co dziś przekłada się na skuteczność w działaniach, które przynoszą realne rezultaty.
                        </span>
                        <br/><br/>
                        Specjalizuję się w analizie rynku, wyszukiwaniu mieszkań z potencjałem oraz dopasowywaniu ofert do indywidualnych potrzeb klientów.<br/>
                        Prowadzę procesy zakupu i sprzedaży – od pierwszej rozmowy, przez negocjacje, aż po bezpieczne domknięcie transakcji.
                        <br/><br/>
                        Zajmuję się również estetyką wnętrz i koncepcjami wykończenia – wiem, jak przygotować nieruchomość, by działała zarówno wizualnie, jak i inwestycyjnie.<br/><br/>
                        Łączę wiedzę rynkową z praktyką inwestorską – potrafię myśleć jak kupujący, jak właściciel i jak inwestor jednocześnie.<br/><br/>
                        Działam z wyczuciem, planem i zaangażowaniem – bo wiem, że zaufanie klientów buduje się działaniem,&nbsp;nie&nbsp;słowami”.
                    </p>
                </div>
            </div>
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
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 mt-3 text-center break-words">Michał Wojak</h3>
                    <p className="text-black font-serif text-justify leading-relaxed space-y-2 break-words hyphens-auto">
                        Współzałożyciel EM Holding, agent nieruchomości, inwestor i osoba, która dba o to, by każda nieruchomość była dopracowana w szczegółach.<br/><br/>
                        <span className="italic text-[#cda670] border-l-4 border-[#cda670] pl-4 mt-2 block">
                            „Zanim wszedłem w świat nieruchomości, przez wiele lat pracowałem w sprzedaży i zarządzaniu – w różnych firmach, zespołach i warunkach. To nauczyło mnie, jak planować, jak rozmawiać z ludźmi i jak dowozić konkretny efekt.
                        </span>
                        <br/><br/>
                        Dziś wykorzystuję to w codziennej pracy – pomagam klientom kupować i sprzedawać mieszkania, wspieram ich w podejmowaniu decyzji, analizuję, podpowiadam, liczę.
                        <br/><br/>
                        Zajmuję się też koordynacją remontów – wiem, na co zwrócić uwagę technicznie, jak rozplanować prace, co warto zrobić, a co będzie tylko generować niepotrzebne koszty.
                        <br/><br/>
                        Lubię działać konkretnie i skutecznie. Mieszkanie to nie tylko ściany – to strategia, liczby i emocje. A ja dbam o to, żeby wszystko się w&nbsp;tym&nbsp;zgadzało.”
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default AboutUsPage;