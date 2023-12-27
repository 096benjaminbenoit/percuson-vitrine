import { useEffect } from "react";
import Header from "../components/Header";

export default function ErrorPage() {
  useEffect(() => {
    document.title = "Percuson - Oups";
  }, []);
  return (
    <>
      <Header />
      <section className="bg-center bg-cover h-screen bg-no-repeat bg-[url('https://images.pexels.com/photos/66100/pexels-photo-66100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Erreur 404
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            La page que vous avez demandé semble ne pas avoir été trouvée.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="/"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black bg-white rounded-lg focus:ring-4"
            >
              Retourner à l'accueil
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
