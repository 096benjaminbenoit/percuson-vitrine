import { useEffect } from "react";
import GlobalLayout from "../layouts/GlobalLayout";

export default function Home() {
  useEffect(() => {
    document.title = "Percuson - Accueil";
  }, []);

  return (
    <>
      <GlobalLayout>
        <main>
          <section className="bg-center bg-no-repeat bg-[url('../img/magasin.jpeg')] bg-gray-600 bg-blend-multiply">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                Votre spécialiste du rythme depuis 15 ans
              </h1>
              <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                Depuis 2009 nous vous accueillons avec plaisir dans notre
                magasin et nous nous efforçons de vous accompagner au mieux !
              </p>
            </div>
          </section>

          <section className="bg-white">
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
              <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3">
                <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      fill="black"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                      <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                    </svg>
                  </dt>
                  <dd className="font-light text-black py-3">
                    Paiement jusqu'à 4x sans frais
                  </dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      fill="black"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
                    </svg>
                  </dt>
                  <dd className="font-light text-black py-3">
                    Livraison dans toute la France
                  </dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-3xl md:text-4xl font-extrabold text-black">
                    150m2
                  </dt>
                  <dd className="font-light text-black py-3">
                    Pour votre plus grand plaisir
                  </dd>
                </div>
              </dl>
            </div>
          </section>

          <section className="bg-slate-50 pb-8">
            <div className="gap-16 items-center pt-8 px-4 mx-auto max-w-screen-xl py-8 lg:py-0 lg:grid lg:grid-cols-2 lg:px-6">
              <div className="font-light text-gray-500 sm:text-lg">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
                  Matériel neuf et d'occasion
                </h2>
                <p className="mb-4">
                  Que ce soit pour votre kit acoustique, votre batterie
                  électronique, vos percussions ou votre matériel de
                  sonorisation, nous vous proposons tout ce dont vous avez
                  besoin que ce soit en neuf ou en occasion.
                </p>
                <p>Tout le matériel en magasin peut être essayé sur place !</p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <img
                  className="w-full rounded-lg shadow-md"
                  src="../img/neuf.jpg"
                  alt="office content 1"
                />
                <img
                  className="mt-4 w-full lg:mt-10 rounded-lg shadow-md"
                  src="../img/neuf2.jpeg"
                  alt="office content 2"
                />
              </div>
            </div>
            <div className="lg:gap-16 items-center px-4 mx-auto max-w-screen-xl flex flex-col-reverse py-8 lg:py-0 lg:grid lg:grid-cols-2 lg:px-6">
              <div className="grid grid-cols-2 gap-4 mt-8">
                <img
                  className="w-full rounded-lg shadow-md"
                  src="../img/occasion2.jpeg"
                  alt="office content 1"
                />
                <img
                  className="mt-4 w-full lg:mt-10 rounded-lg shadow-md"
                  src="../img/occasion.jpeg"
                  alt="office content 2"
                />
              </div>
              <div className="font-light text-gray-500 sm:text-lg">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
                  Reprise et dépôt vente de votre matériel
                </h2>
                <p className="mb-4">
                  Nous donnons une seconde vie à votre matériel en vous
                  proposant de le reprendre et de déduire le prix de votre
                  prochain achat ou de laisser votre matériel en dépôt vente
                  pour qu'un heureux acquéreur puisse en profiter !
                </p>
                <p>
                  Les prix de reprise et de dépôt vente sont calculés sur la
                  base du prix neuf sur le marché et sur l'état du matériel.
                </p>
              </div>
            </div>
            <div className="lg:gap-16 items-center pb-8 px-4 mx-auto max-w-screen-xl py-8 lg:py-0 lg:grid lg:grid-cols-2 lg:px-6">
              <div className="font-light text-gray-500 sm:text-lg">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
                  Location et backline
                </h2>
                <p className="mb-4">
                  Que ce soit pour un événement ou pour un besoin ponctuel, nous
                  vous proposons à la location du matériel de sonorisation
                  professionnel ainsi que tout le matériel nécessaire pour
                  batteurs et percussionnistes !
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <img
                  className="w-full rounded-lg shadow-md"
                  src="../img/backline.jpg"
                  alt="office content 1"
                />
                <img
                  className="mt-4 w-full lg:mt-10 rounded-lg shadow-md"
                  src="../img/backline2.jpg"
                  alt="office content 2"
                />
              </div>
            </div>
          </section>
        </main>
      </GlobalLayout>
    </>
  );
}
