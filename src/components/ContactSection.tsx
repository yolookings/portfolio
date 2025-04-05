import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="support" className="min-h-screen py-20">
      <div className="hidden-section max-w-4xl mx-auto text-center">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-gray-900 dark:text-white text-center relative"
          data-aos="fade-up"
        >
          Get In Touch
          <span className="block w-24 h-1 bg-blue-500 dark:bg-blue-400 mx-auto mt-2 rounded-full"></span>
        </h2>
        <p className="dark:text-gray-400 text-gray-600 mb-8" data-aos="fade-up">
          Interested in collaborating? Feel free to contact me.
        </p>
        <div className="container mx-auto mt-10" data-aos="fade-up">
          <h1 className="text-2xl font-bold text-center"></h1>
          <ContactForm />
        </div>
        <div className="mt-16 flex justify-center">
          <p
            className="text-lg dark:text-gray-400 text-gray-600 animate-typing"
            data-aos="fade-up"
          >
            Thanks for your visit! 🚀
          </p>
        </div>
      </div>
    </section>
  );
}
