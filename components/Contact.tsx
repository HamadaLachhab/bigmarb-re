import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
function Contact() {
  const form = useRef();

  const router = useRouter();
  const { locale, defaultLocale, locales, pathname, query, asPath } = router;

  async function handleSubmit(e: any) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast.success("send");
        },
        (error) => {
          toast.error("failed");
        }
      );
  }

  return (
    <div className=" w-full  flex flex-col items-center justify-center  space-y-4 py-24 bg-[url('../public/bg.jpg')] bg-no-repeat bg-cover bg-center">
      <p className=" mx-auto text-3xl text-center font-light text-gray-600 w-11/12">
        {locale === "fr"
          ? "POUR NOUS CONTACTER PAR E-MAIL, REMPLISSEZ"
          : "TO CONTACT US BY EMAIL, COMPLETE  "}
        <br />
        {locale === "fr"
          ? "SOIGNEUSEMENT LE FORMULAIRE CI-DESSOUS."
          : "CAREFULLY THE FORM BELOW."}
      </p>
      <form ref={form} onSubmit={handleSubmit} className="w-full">
        <div className=" mx-auto px-16 lg:grid  lg:grid-cols-2 lg:grid-rows-3 ">
          <div className="col-span-1 row-span-1  p-4 px-8 border">
            <label htmlFor="name" className="block mb-2  text-gray-900 ">
              {locale === "fr" ? "Votre nom" : "Your name"}
            </label>
            <input
              type="text"
              name="name"
              className="text-gray-900  block w-full p-2.5 "
              placeholder="Name"
              required
            />
          </div>
          <div className="col-span-1 row-span-3 p-4  border">
            <label htmlFor="message" className="block mb-2  text-gray-900   ">
              {locale === "fr" ? "Votre message" : "Your message"}
            </label>
            <textarea
              name="message"
              rows={10}
              className="block p-2.5 w-full text-gray-900  "
              placeholder="Leave a message..."
            ></textarea>
          </div>
          <div className="col-span-1 row-span-1  p-4 px-8 border">
            <label htmlFor="email" className="block mb-2  text-gray-900 ">
              {locale === "fr" ? "Votre email" : "Your email"}
            </label>
            <input
              type="email"
              name="email"
              className=" text-gray-900 "
              placeholder="name@example.com"
              required
            />
          </div>
          <div className="col-span-1 row-span-1 p-4 px-8 border">
            <label htmlFor="email" className="block mb-2  text-gray-900 ">
              {locale === "fr" ? "Votre numéro" : "Your Number"}
            </label>
            <input
              type="text"
              name="number"
              className="  text-gray-900 "
              placeholder="+212"
              required
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className=" text-white  bg-red-600 hover:bg-red-800 my-10   rounded-3xl  px-8 py-3 text-center mx-auto max-w-full "
          >
            {locale === "fr" ? "CONTACTEZ-NOUS" : "CONTACT US"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
