// src/components/FAQ.jsx
import React, { useState } from 'react';

const faqData = [
  {
    question: "Czy jesteście agencją nieruchomości?",
    answer: `Tak – działamy jako pośrednicy w obrocie nieruchomościami.
Pomagamy w sprzedaży, zakupie i wynajmie mieszkań i domów. Współpracujemy zarówno z osobami prywatnymi, jak i inwestorami.
Pracujemy wyłącznie na zlecenie klienta – indywidualnie, strategicznie, z pełnym zaangażowaniem.`,
  },
  {
    question: "Czym różni się Wasza firma od tradycyjnej agencji?",
    answer: `Nie jesteśmy typowym biurem nieruchomości.
Jesteśmy zespołem praktyków, inwestorów i doradców, którzy przeprowadzili dziesiątki własnych transakcji i projektów.
Nie ograniczamy się do wystawienia ogłoszenia – tworzymy strategię, analizujemy dane, przygotowujemy nieruchomość i aktywnie szukamy najlepszego rozwiązania.
Działamy kompleksowo: od analizy i przygotowania, przez marketing, po negocjacje i finalizację transakcji.`,
  },
  {
    question: "Czy mogę zlecić Wam sprzedaż mojej nieruchomości?",
    answer: `Tak. Zajmujemy się sprzedażą od A do Z:
opracowujemy strategię,
przygotowujemy nieruchomość (home staging, lifting, metamorfoza, a jeśli trzeba – remont),
📌 organizujemy sesję zdjęciową, marketing, prezentacje i negocjacje.
Naszym celem jest sprzedaż skuteczna, bezpieczna i możliwie najlepsza cenowo.`,
  },
  {
    question: "Pomagacie też w zakupie mieszkania?",
    answer: `Tak – wyszukujemy nieruchomości na zlecenie klienta.
Bierzemy pod uwagę styl życia, potrzeby, możliwości finansowe, bezpieczeństwo prawne i potencjał inwestycyjny.
Działamy strategicznie i odpowiedzialnie – tak, jakbyśmy kupowali dla siebie.`,
  },
  {
    question: "Czy mogę z Wami zainwestować w nieruchomość?",
    answer: `Oczywiście. Możemy przygotować wspólny projekt inwestycyjny (np. pod wynajem krótko- lub długoterminowy) albo doradzić Ci, jak zainwestować samodzielnie – bezpiecznie i z zyskiem.
Liczymy, analizujemy i dobieramy najlepszy scenariusz dla Twojego kapitału.`,
  },
  {
    question: "Mam nieruchomość, ale nie wiem, jak ją najlepiej wykorzystać. Czy możecie doradzić?",
    answer: `Zdecydowanie tak.
Zajmujemy się analizą potencjału nieruchomości i lokalizacji.
Przedstawimy Ci możliwe scenariusze: sprzedaż, wynajem, lifting, remont, przekształcenie, strategia inwestycyjna.
Ty podejmujesz decyzję, a my dajemy Ci liczby, wiedzę i praktykę.`,
  },
  {
    question: "Czy zajmujecie się też wynajmem?",
    answer: `Tak. Przygotowujemy mieszkania do najmu i pomagamy w znalezieniu odpowiednich najemców.
Działamy zarówno na rynku najmu długoterminowego, jak i krótkoterminowego (np. Booking, Airbnb).
Możemy też przejąć pełną obsługę najmu.`,
  },
  {
    question: "Czy działacie tylko w Krakowie?",
    answer: `Naszą bazą operacyjną jest Kraków i okolice, ale mamy też realizacje w innych miastach – np. w Starogardzie Gdańskim.
Jeśli projekt ma sens – jesteśmy otwarci na działanie również poza Krakowem.`,
  },
  {
    question: "Czy zajmujecie się także remontami?",
    answer: `Tak.
Koordynujemy remonty i liftingi w ramach realizowanych projektów.
Mamy sprawdzone ekipy, które wiedzą, co robią – jesteśmy w stanie przeprowadzić pełny remont:
📌 od koncepcji i projektu,
📌 przez działania wykonawcze,
📌 po meble na wymiar i detale wykończeniowe.
Oferujemy zarówno kompleksową usługę, jak i doradztwo przy konkretnych etapach.`,
  },
  {
    question: "Ile kosztują Wasze usługi?",
    answer: `Nasze ceny są rynkowe i ustalane indywidualnie, w zależności od zakresu współpracy i celu klienta.
Zawsze działamy transparentnie – już na początku jasno określamy zasady, zakres i sposób rozliczenia.
Zależy nam, aby każda złotówka wydana na współpracę z nami przyniosła realną wartość – czy to w postaci wyższej ceny sprzedaży, szybszego wynajmu, bezpiecznego zakupu czy zyskownej inwestycji.
Nie bierzemy pieniędzy za nic – nasi klienci płacą za konkretny efekt.`,
  },
  {
    question: "Czy możecie pomóc również w finansowaniu zakupu lub wykończenia mieszkania?",
    answer: `Tak – współpracujemy ze sprawdzonymi specjalistami, dzięki którym możemy zaproponować wsparcie także w zakresie:
🏦 kredytów hipotecznych,
🛡 ubezpieczeń,
📐 projektowania wnętrz,
🧰 wykończeń pod klucz.

Jeśli chcesz – skoordynujemy dla Ciebie cały proces, od pomysłu po odbiór.
U nas załatwisz wszystko w jednym miejscu – bez stresu i bez zbędnych pośredników.`,
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8">Najczęściej zadawane pytania</h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-md p-4 cursor-pointer transition-shadow hover:shadow-md"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-xl font-semibold text-gray-900 flex justify-between items-center">
              {item.question}
              <span className="font-bold" style={{ color: '#e0bc88' }}>{openIndex === index ? '-' : '+'}</span>
            </h3>
            {openIndex === index && (
              <p className="mt-2 text-gray-700 whitespace-pre-line">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
      <div className="mt-10 text-center text-lg text-gray-800 font-medium">
        Nie musisz mieć gotowego planu.<br/>
        Czasem wystarczy jedno pytanie, by znaleźć rozwiązanie – porozmawiajmy.
      </div>
    </section>
  );
};

export default FAQ;
