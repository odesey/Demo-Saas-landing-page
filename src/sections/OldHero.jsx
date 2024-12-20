export const OldHero = () => {
  return (
    <section className="relative overflow-hidden">
      <HeaderGrid />
      <Beams />

      <motion.div
        initial={{
          y: 25,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: 1.25,
          ease: "easeInOut"
        }}
        className="px-8 pt-16 mx-auto md:px-12 lg:px-36 lg:pt-32 pb-6 relative"
      >
        <div
          className="text-left max-w-xl z-500 bg-red-600"
          data-aos="fade-down"
          data-aos-duration="3000"
        >
          <h1 className="text-4xl lg:text-7xl dark:text-white font-display  md:text-7xl my-4 font-bold ">
            Bridge your Church's communication gap with the
            <span className="block text-primeBlue-500 pt-2"> GenesisApp</span>
          </h1>
          <p className="text-onyx-300 mt-4">
            A simple and modern software platform for all churches.
          </p>
        </div>

        <div className="px-8 mx-auto pt-8 max-w-7xl relative">
          <div
            className="text-center mx-auto"
            data-aos="fade-down"
            data-aos-duration="3000"
          >
            <div className="flex flex-wrap gap-2 sm:gap-10 justify-center items-center mb-6">
              <a
                href="/"
                title="link to your page"
                aria-label="your label"
                className="mx-2 my-2 inline-flex items-center h-12 justify-center w-full sm:w-auto px-7 py-3 text-sm text-center shadow-mdbl dark:shadow-big duration-500 ease-in-out transform text-onyx-950-700 rounded-xl bg-primeBlue-50 border border-white dark:border-onyx-800 dark:bg-onyx-900"
              >
                <div className="logo">
                  <svg
                    className="w-6 h-6 fill-black dark:fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="419.955"
                    height="512"
                    viewBox="0 0 419.955 512"
                  >
                    <g transform="translate(-46.022)">
                      <path d="M185.255,512c-76.2-.439-139.233-155.991-139.233-235.21,0-129.4,97.075-157.734,134.487-157.734,16.86,0,34.863,6.621,50.742,12.48,11.1,4.087,22.588,8.306,28.975,8.306,3.823,0,12.832-3.589,20.786-6.738,16.963-6.753,38.071-15.146,62.651-15.146h.146c18.354,0,74,4.028,107.461,54.272l7.837,11.777-11.279,8.511c-16.113,12.158-45.513,34.336-45.513,78.267,0,52.031,33.3,72.041,49.292,81.665,7.061,4.248,14.37,8.628,14.37,18.208,0,6.255-49.922,140.566-122.417,140.566-17.739,0-30.278-5.332-41.338-10.034-11.191-4.761-20.845-8.862-36.8-8.862-8.086,0-18.311,3.823-29.136,7.881C221.5,505.73,204.752,512,185.753,512Z" />
                      <path d="M351.343,0c1.888,68.076-46.8,115.3-95.425,112.342C247.9,58.015,304.54,0,351.343,0Z" />
                    </g>
                  </svg>
                </div>
                <div className="text">
                  <p className=" text-sm sm:text-lg font-semibold dark:text-primeBlue-50 pl-4">
                    Apple Store
                  </p>
                </div>
              </a>
              <a
                href="#benefits"
                title="link to your page"
                aria-label="your label"
                className="mx-2 my-2 inline-flex items-center h-12 justify-center w-full sm:w-auto px-6 py-3 text-sm text-center shadow-mdbl dark:shadow-big duration-500 ease-in-out transform text-onyx-950-700 rounded-xl bg-primeBlue-50 border border-white dark:border-onyx-800 dark:bg-onyx-900"
              >
                <div className="image">
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    width="436.057"
                    height="469.847"
                    viewBox="0 0 436.057 469.847"
                  >
                    <g transform="translate(-16.896)">
                      <path
                        d="M270.336,234.965,34.39,462.165A40.146,40.146,0,0,1,16.9,428.672V41.258A40.146,40.146,0,0,1,34.39,7.765Z"
                        fill="#2196f3"
                      />
                      <path
                        d="M352.9,155.6l-82.56,79.36L34.39,7.765a31.446,31.446,0,0,1,2.773-1.92A40.363,40.363,0,0,1,77.91,5.2Z"
                        fill="#4caf50"
                      />
                      <path
                        d="M452.95,234.965a40.791,40.791,0,0,1-21.333,36.267L352.9,314.325l-82.56-79.36L352.9,155.6l78.72,43.093A40.791,40.791,0,0,1,452.95,234.965Z"
                        fill="#ffc107"
                      />
                      <path
                        d="M352.9,314.325,77.91,464.725a40.9,40.9,0,0,1-40.747-.64,31.44,31.44,0,0,1-2.773-1.92l235.947-227.2Z"
                        fill="#f44336"
                      />
                    </g>
                  </svg>
                </div>
                <div className="text">
                  <p className="text-lg font-semibold dark:text-primeBlue-50 pl-4">
                    Google Play
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
