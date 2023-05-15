const Title = () => {

  return (
    <div
      className="title fixed inset-0 pointer-events-none flex flex-col items-center justify-center gap-[10vw] max-sm:mt-4 sm:mb-[5vw]">
      <h1
        className="text-white max-sm:text-5xl sm:text-[10vw] z-10 w-screen text-center overflow-hidden font-bold">
        <span className="block translate-y-full transition-transform duration-1000 ease-in-out">
        Arcadia
        </span>
      </h1>
      <h2
        className="text-white max-sm:text-2xl sm:text-[3vw] z-10 w-screen text-center overflow-hidden">
        <span className="block translate-y-full transition-transform duration-1000 ease-in-out">
        Nouveau nom
        de navette
        </span>
      </h2>
    </div>
  );
}

export default Title