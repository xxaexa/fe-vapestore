const Home = () => {
  return (
    < section
      className="relative bg-main-bg bg-cover bg-center bg-no-repeat"
    >
      <div
        className="mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
      >
        <div className="max-w-xl text-center mx-auto">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            <strong className="block font-extrabold text-rose-700"> START VAPING NOW</strong>
          </h1>
          <div className="mt-8 w-32 justify-items-center gap-4 text-center mx-auto">
            <a
              href="product"
              className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              SHOP
            </a>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Home