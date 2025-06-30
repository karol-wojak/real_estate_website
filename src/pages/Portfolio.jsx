// src/pages/Portfolio.jsx
import PortfolioCard from '../components/PortfolioCard.jsx';

const PortfolioPage = ({ projects }) => (
    <section id="portfolio-section" className="bg-white rounded-xl transition-all duration-500 ease-in-out transform opacity-0 translate-y-4 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 md:pb-1">Nasze realizacje</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6 text-left md:text-justify mx-auto max-w-4xl">
            To przykłady mieszkań, które przygotowaliśmy na sprzedaż lub wynajem – zarówno z własnych środków, jak i we współpracy z inwestorami.<br/><br/>
            Za każdą z nich stoi konkretna strategia, realny efekt i doświadczenie zdobywane przez lata w pracy z nieruchomościami.
        </p>
        <div className="flex flex-col space-y-8">
            {projects.map((project, idx) => (
                <PortfolioCard key={project.id} project={project} idx={idx} />
            ))}
        </div>
    </section>
);

export default PortfolioPage;

