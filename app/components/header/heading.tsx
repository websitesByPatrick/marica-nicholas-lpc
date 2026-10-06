const Heading = () => {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <img
        src="/marica.avif"
        alt="Marica Nicholas portrait"
        className="h-16 w-16 rounded-full object-cover object-center bg-slate-100 ring-2 ring-slate-200 shadow-sm sm:h-20 sm:w-20"
        style={{ objectPosition: "center 18%" }}
      />

      <div className="flex min-w-0 flex-col">
        <h1 className="font-roboto text-2xl font-bold tracking-tight text-slate-700 sm:text-3xl">
          Marica Nicholas
        </h1>
        <h2 className="font-merienda text-sm text-slate-700 sm:text-base">
          Licensed Professional Counselor
        </h2>
      </div>
    </div>
  );
};

export default Heading;
