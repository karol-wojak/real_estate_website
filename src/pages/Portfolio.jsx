// src/pages/Portfolio.jsx
import PortfolioCard from '../components/PortfolioCard.jsx';

const PortfolioPage = ({ projects }) => (
    <section id="portfolio-section" className="bg-white rounded-xl transition-all duration-500 ease-in-out transform opacity-0 translate-y-4 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 md:pb-1">Realizacje</h1>
        <div className="flex flex-col space-y-8">
            {projects.map((project, idx) => (
                <PortfolioCard key={project.id} project={project} idx={idx} />
            ))}
        </div>
    </section>
);

export default PortfolioPage;