// src/components/ReviewsCarousel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const reviews = [
  {
    name: "Anna Kowalska",
    review: "Współpraca była doskonała od początku do końca. Polecam firmę z całego serca!"
  },
  {
    name: "Jan Nowak",
    review: "Profesjonalizm na najwyższym poziomie. Jestem bardzo zadowolony z efektu końcowego."
  },
  {
    name: "Katarzyna Wiśniewska",
    review: "Świetny kontakt, terminowość i jakość usług. Dziękujemy!"
  },
  {
    name: "Marek Zieliński",
    review: "Firma spełniła wszystkie moje oczekiwania. Z pewnością skorzystam ponownie."
  }
];

const ReviewsCarousel = () => {
  return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8">Opinie naszych klientów</h2>
      <div className="max-w-3xl mx-auto px-4">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={30}
        >
          {reviews.map((r, index) => (
            <SwiperSlide key={index}>
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8 text-center">
                <div className="flex justify-center mb-4">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                    className="w-8 h-8"
                    style={{ color: '#e0bc88' }}
                >
                    <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
                </svg>
                </div>
                <p className="italic text-lg text-gray-700">"{r.review}"</p>
                <p className="mt-4 font-semibold text-black">— {r.name}</p>
            </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
