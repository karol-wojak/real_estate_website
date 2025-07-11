import React, { useState } from 'react';

// ContactForm component
const ContactForm = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: '',     // Corresponds to input name="name"
    surname: '',  // Corresponds to input name="surname"
    phone: '',    // Corresponds to input name="phone" - will store formatted 9 digits
    email: '',    // Corresponds to input name="email"
    request: '',  // Corresponds to input name="request"
  });

  // State for form submission status and message
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  // State for validation errors, now including phone and email
  const [fieldErrors, setFieldErrors] = useState({ name: '', surname: '', phone: '', email: '' });

  // Web3Forms public access key
  const WEB3FORMS_ACCESS_KEY = "3e6c466d-ab57-4063-8782-eb6f7c96cc30";

  // Helper function to sanitize input (only removes HTML tags, no trimming here)
  const sanitizeInput = (value) => {
    if (typeof value !== 'string') return '';
    // Remove HTML tags
    return value.replace(/<[^>]*>?/gm, '');
  };

  // Handle input changes for all form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    let processedValue = sanitizeInput(value); // Only remove HTML tags initially
    let errorMsg = '';
    let currentFieldErrors = { ...fieldErrors }; // Create a mutable copy

    // For name and surname, allow only letters (including Polish diacritics), spaces, and hyphens
    if (name === 'name' || name === 'surname') {
      // Check for invalid characters in the original input value for error message
      if (/[^a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s-]/.test(value)) {
        errorMsg = 'Dozwolone są tylko litery, spacje i myślniki.';
      }
      // Sanitize the value for state: keep only allowed characters
      processedValue = processedValue.replace(/[^a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s-]/g, '');
      currentFieldErrors[name] = errorMsg; // Update error for this field
    }
    // For phone, allow only digits, spaces, +, - and parentheses, and validate format
    else if (name === 'phone') {
      // 1. Remove all non-digit characters for internal processing
      const digitsOnly = value.replace(/\D/g, ''); // Keep only digits

      // 2. Limit to 9 digits
      const limitedDigits = digitsOnly.substring(0, 9);

      // 3. Format with spaces: XXX XXX XXX
      let formattedPhone = '';
      for (let i = 0; i < limitedDigits.length; i++) {
        if (i > 0 && i % 3 === 0) {
          formattedPhone += ' ';
        }
        formattedPhone += limitedDigits[i];
      }
      processedValue = formattedPhone; // This is what goes into the input field

      // 4. Validate the length for error message
      if (limitedDigits.length > 0 && limitedDigits.length < 9) {
        errorMsg = 'Numer telefonu musi składać się z 9 cyfr.';
      } else if (limitedDigits.length > 9) {
        // This case should ideally not be hit due to substring, but as a safeguard
        errorMsg = 'Numer telefonu może składać się maksymalnie z 9 cyfr.';
      } else if (limitedDigits.length === 0 && value.length > 0) {
        errorMsg = 'Numer telefonu może zawierać tylko cyfry.';
      } else if (limitedDigits.length === 9) {
          // No error if it's exactly 9 digits
          errorMsg = '';
      }

      currentFieldErrors[name] = errorMsg; // Update error for this field
    }
    // For email, allow standard email characters (letters, numbers, @, ., _, -, +)
    else if (name === 'email') {
      // This regex allows letters, numbers, and common email symbols like @ . _ - +
      if (/[^a-zA-Z0-9@._\-+]/.test(value)) {
        errorMsg = 'Dozwolone są tylko litery, cyfry oraz znaki: @ . _ - +';
      }
      // Sanitize the value for state: keep only allowed email characters
      processedValue = processedValue.replace(/[^a-zA-Z0-9@._\-+]/g, '');
      currentFieldErrors[name] = errorMsg; // Update error for this field
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: processedValue, // Use processedValue for the state
    }));

    setFieldErrors(currentFieldErrors); // Update all field errors at once
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Check for any existing validation errors before submitting
    const hasErrors = Object.values(fieldErrors).some(error => error !== '');
    if (hasErrors) {
      setMessage('Proszę poprawić błędy w formularzu.');
      setIsError(true);
      return; // Prevent submission if there are errors
    }

    // Final check for phone number length before submission
    const digitsOnlyPhone = formData.phone.replace(/\s/g, '');
    if (digitsOnlyPhone.length !== 9) {
        setMessage('Numer telefonu musi składać się z 9 cyfr.');
        setIsError(true);
        setFieldErrors(prev => ({ ...prev, phone: 'Numer telefonu musi składać się z 9 cyfr.' }));
        return;
    }


    setIsSubmitting(true);
    setMessage('Wysyłanie....'); // Show sending message immediately
    setIsError(false);

    // Sanitize and trim all fields before sending
    const sanitizedData = {
      name: sanitizeInput(formData.name).replace(/[^a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s-]/g, '').trim(),
      surname: sanitizeInput(formData.surname).replace(/[^a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s-]/g, '').trim(),
      // For phone, prepend +48 to the cleaned 9 digits
      phone: '+48' + formData.phone.replace(/\s/g, '').trim(),
      email: sanitizeInput(formData.email).trim(), // Trim email as well
      request: sanitizeInput(formData.request).trim(),
    };

    // Create FormData object from the form
    const formDataToSend = new FormData();
    // Manually append fields with their desired Web3Forms names
    formDataToSend.append("access_key", WEB3FORMS_ACCESS_KEY);
    formDataToSend.append("Imię", sanitizedData.name);
    formDataToSend.append("Nazwisko", sanitizedData.surname);
    formDataToSend.append("Telefon", sanitizedData.phone); // Send the +48 prefixed number
    formDataToSend.append("E-mail", sanitizedData.email);
    formDataToSend.append("Twoje Zapytanie", sanitizedData.request);


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
        setFieldErrors({ name: '', surname: '', phone: '', email: '' }); // Clear all field errors on success
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
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">Skontaktuj się z nami</h2>
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
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-200 ease-in-out"
            placeholder="Twoje imię"
          />
          {fieldErrors.name && (
            <p className="text-red-600 text-xs mt-1">{fieldErrors.name}</p>
          )}
        </div>

        {/* Nazwisko */}
        <div>
          <label htmlFor="surname" className="block text-sm font-medium text-gray-700 mb-1">
            Nazwisko
          </label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-200 ease-in-out"
            placeholder="Twoje nazwisko"
          />
          {fieldErrors.surname && (
            <p className="text-red-600 text-xs mt-1">{fieldErrors.surname}</p>
          )}
        </div>

        {/* Telefon */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Telefon
          </label>
          <div className="flex items-center mt-1">
            <span className="inline-flex items-center px-3 py-2 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
              +48
            </span>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="block w-full px-4 py-2 border border-gray-300 rounded-r-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-200 ease-in-out"
              placeholder="XXX XXX XXX" // Updated placeholder
              maxLength="11" // 9 digits + 2 spaces
            />
          </div>
          {fieldErrors.phone && (
            <p className="text-red-600 text-xs mt-1">{fieldErrors.phone}</p>
          )}
        </div>

        {/* E-mail */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-200 ease-in-out"
            placeholder="Twój adres e-mail"
          />
          {fieldErrors.email && (
            <p className="text-red-600 text-xs mt-1">{fieldErrors.email}</p>
          )}
        </div>

        {/* Twoje Zapytanie */}
        <div>
          <label htmlFor="request" className="block text-sm font-medium text-gray-700 mb-1">
            Twoje Zapytanie
          </label>
          <textarea
            id="request"
            name="request"
            value={formData.request}
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
            disabled={isSubmitting || Object.values(fieldErrors).some(error => error !== '')} // Disable if any field has an error
            className={`w-full flex justify-center px-8 py-3 rounded-md font-semibold text-lg transition-colors duration-300 bg-black text-white hover:bg-neutral-700 active:bg-neutral-700
              ${isSubmitting || Object.values(fieldErrors).some(error => error !== '') ? 'opacity-50 cursor-not-allowed' : ''}`}
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
