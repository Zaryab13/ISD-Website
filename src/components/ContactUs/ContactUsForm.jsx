const ContactUsForm = () => {
  return (
    <div className=" flex justify-center order-last md:order-first items-center py-6">
      <form className="w-2/4 3xl:w-3/4">
        <div className="mb-5">
          <label
            for="name"
            className="block mb-2 text-sm font-medium text-slate-100"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border-none text-gray-900 text-sm rounded-lg  block w-full p-2 focus:outline-primary"
            required
          />
        </div>
        <div className="mb-5">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-slate-100"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border-none focus:outline-primary text-gray-900 text-sm rounded-lg  block w-full p-2"
            placeholder=""
            required
          />
        </div>
        <div className="mb-5">
          <label
            for="email"
            className="block mb-2 text-sm font-medium  text-slate-100 dark:text-white"
          >
            Your Message
          </label>
          <textarea
            id="email"
            className="bg-gray-50 text-gray-900 text-sm rounded-lg  block w-full p-2 focus:outline-primary"
            placeholder=""
            required
          />
        </div>
        <button
          type="submit"
          className=" text-white border border-primary bg-transparent hover:bg-primary font-medium rounded-2xl text-sm w-full px-5 py-2.5 text-center transition-all duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUsForm;
