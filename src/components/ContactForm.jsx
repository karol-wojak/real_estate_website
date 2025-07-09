import React, { useState } from 'react';

// ContactForm component
const ContactForm = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: '',     // Corresponds to input name="name"
    surname: '',  // Corresponds to input name="surname"
    phone: '',    // Corresponds to input name="phone"
    email: '',    // Corresponds to input name="email"
    request: '',  // Corresponds to input name="request"
  });

  // State for form submission status and message
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  // Web3Forms public access key
  const WEB3FORMS_ACCESS_KEY = "8a9c6fd6-14cc-403c-a7b6-5deb46d22fa5";

  // Handle input changes for all form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // This now correctly updates the state based on input's 'name' attribute
    }));
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    setIsSubmitting(true);
    setMessage('Wysyłanie....'); // Show sending message immediately
    setIsError(false);

    // Create FormData object from the form
    const formDataToSend = new FormData();
    // Manually append fields with their desired Web3Forms names
    formDataToSend.append("access_key", WEB3FORMS_ACCESS_KEY);
    formDataToSend.append("Imię", formData.name);
    formDataToSend.append("Nazwisko", formData.surname);
    formDataToSend.append("Telefon", formData.phone);
    formDataToSend.append("E-mail", formData.email);
    formDataToSend.append("Twoje Zapytanie", formData.request);


    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend, // Use FormData directly
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setMessage('Twoje zapytanie zostało wysłane pomyślnie!');
        setIsError(false);
        // Clear form fields after successful submission
        setFormData({
          name: '',
          surname: '',
          phone: '',
          email: '',
          request: '',
        });
      } else {
        console.error("Error", data); // Log the error for debugging
        setMessage(data.message || 'Wystąpił błąd podczas wysyłania zapytania. Spróbuj ponownie.');
        setIsError(true);
      }
    } catch (error) {
      console.error('Błąd sieci:', error);
      setMessage('Wystąpił błąd sieci. Sprawdź swoje połączenie i spróbuj ponownie.');
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-lg mx-auto"> {/* Added mx-auto for centering */}
      {/* <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">Skontaktuj się z nami</h2> */}
      <p className="text-gray-600 mb-8 text-center">Wypełnij poniższy formularz, a skontaktujemy się z Tobą najszybciej jak to możliwe.</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Imię */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Imię
          </label>
          <input
            type="text"
            id="name"
            name="name" // Changed name to match formData.name
            value={formData.name} // Controlled component
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-200 ease-in-out"
            placeholder="Twoje imię"
          />
        </div>

        {/* Nazwisko */}
        <div>
          <label htmlFor="surname" className="block text-sm font-medium text-gray-700 mb-1">
            Nazwisko
          </label>
          <input
            type="text"
            id="surname"
            name="surname" // Changed name to match formData.surname
            value={formData.surname} // Controlled component
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-200 ease-in-out"
            placeholder="Twoje nazwisko"
          />
        </div>

        {/* Telefon */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone" // Changed name to match formData.phone
            value={formData.phone} // Controlled component
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-200 ease-in-out"
            placeholder="Twój numer telefonu"
          />
        </div>

        {/* E-mail */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email" // Changed name to match formData.email
            value={formData.email} // Controlled component
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-200 ease-in-out"
            placeholder="Twój adres e-mail"
          />
        </div>

        {/* Twoje Zapytanie */}
        <div>
          <label htmlFor="request" className="block text-sm font-medium text-gray-700 mb-1">
            Twoje Zapytanie
          </label>
          <textarea
            id="request"
            name="request" // Changed name to match formData.request
            value={formData.request} // Controlled component
            onChange={handleChange}
            rows="5"
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-200 ease-in-out resize-y"
            placeholder="Wpisz tutaj swoje zapytanie lub wiadomość..."
          ></textarea>
        </div>

        {/* Submission Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full flex justify-center px-8 py-3 rounded-md font-semibold text-lg transition-colors duration-300 bg-black text-white hover:bg-neutral-700 active:bg-neutral-700
              ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'Wysyłanie...' : 'Wyślij Zapytanie'}
          </button>
        </div>

        {/* Submission Message */}
        {message && (
          <div
            className={`mt-4 p-3 rounded-lg text-center text-sm ${
              isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
            }`}
          >
            {message}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
