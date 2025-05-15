import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin } from "lucide-react";


export default function Contact() {
  useEffect(() => {
    document.title = 'ShopHub | Contact';
  }, []);

  const form = useRef();
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = ({ user_name, user_email, message, honey }) => {
    const errs = {};
    if (honey) errs.honey = "Bot detected";
    if (!user_name.trim()) errs.user_name = "Name is required";
    if (!user_email.trim()) {
      errs.user_email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user_email)) {
      errs.user_email = "Invalid email format";
    }
    if (!message.trim()) errs.message = "Message is required";
    else if (message.length > 1000)
      errs.message = "Message must be under 1000 characters";
    return errs;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (sending) return;

    const data = {
      user_name: form.current.user_name.value,
      user_email: form.current.user_email.value,
      message: form.current.message.value,
      honey: form.current.honey.value,
    };

    const errs = validate(data);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setSending(true);

    emailjs
      .sendForm(
        "service_5p2nj9m",    // your EmailJS service ID
        "elio123",            // your EmailJS template ID
        form.current,
        "kLGuKHDTc--RzYINt"   // your EmailJS public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        () => {
          alert("Something went wrong. Please try again later.");
        }
      )
      .finally(() => setSending(false));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* ——— Form Column ——— */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            {/* Honeypot (hidden) */}
            <input type="text" name="honey" autoComplete="off" tabIndex="-1" className="hidden" />

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.user_name && (
                <p className="text-red-600 text-sm mt-1">{errors.user_name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.user_email && (
                <p className="text-red-600 text-sm mt-1">{errors.user_email}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.message && (
                <p className="text-red-600 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={sending}
              className={`w-full py-2 rounded-md text-white ${sending ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
                }`}
            >
              {sending ? "Sending…" : "Send Message"}
            </button>
          </form>
        </div>

        {/* ——— Info Column ——— */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <Mail className="w-6 h-6 text-blue-600 mr-4" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-600">support@shophub.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="w-6 h-6 text-blue-600 mr-4" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-gray-600">(555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="w-6 h-6 text-blue-600 mr-4" />
              <div>
                <h3 className="font-medium">Address</h3>
                <p className="text-gray-600">
                  123 Shop Street
                  <br />
                  City, Country
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-6">Business Hours</h2>
            <div className="space-y-2">
              <p>
                <span className="font-medium">Monday – Friday:</span> 9:00 AM – 6:00 PM
              </p>
              <p>
                <span className="font-medium">Saturday:</span> 10:00 AM – 4:00 PM
              </p>
              <p>
                <span className="font-medium">Sunday:</span> Closed
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
