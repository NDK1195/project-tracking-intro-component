import NavBar from "./NavBar";
import illustration from "./images/illustration-devices.svg";

function App() {
  return (
    <>
      <div className="absolute right-0 top-0 -z-10 min-h-[425px] min-w-[191px] rounded-bl-[60px] bg-light-grayish-blue lg:min-w-[705px]"></div>
      <div className="pb-[92px] pt-[38px] xl:pb-[125px] xl:pt-16">
        <NavBar />

        <main className="mt-16 flex flex-col items-center gap-[87px] overflow-hidden xl:mt-32 xl:flex-row-reverse xl:gap-0 2xl:gap-[160px] 3xl:justify-center">
          {/* illustration */}
          <div className="-mr-[139px] min-w-[482px] max-w-[916px] 2xl:-mr-[268px] 2xl:min-w-[916px] 3xl:mr-0">
            <img
              src={illustration}
              alt="illustration devices"
              className="w-full"
            />
          </div>
          {/* illustration */}

          {/* content */}
          <div className="max-w-[470px] px-8 text-very-dark-blue 2xl:px-0">
            <p className="mb-4 flex items-center gap-4 text-[15px] leading-none">
              <span className="max-h-[25px] max-w-12 rounded-[12.5px] bg-very-dark-blue px-[11px] py-[5px] font-bold tracking-[1px] text-white">
                NEW
              </span>
              <span className="tracking-[5px] opacity-50">
                MONOGRAPH DASHBOARD
              </span>
            </p>

            <h1 className="mb-4 text-[40px] font-bold leading-none xl:mb-8 xl:text-[64px]">
              POWERFUL INSIGHTS INTO YOUR TEAM
            </h1>

            <p className="mb-7 max-w-[268px] font-barlow text-xl leading-[26px] opacity-75 xl:mb-16">
              Project planning and time tracking for agile teams
            </p>

            <div className="flex max-w-[381px] items-center gap-5 text-sm leading-none xl:gap-6">
              <button className="rounded-[5px] bg-red px-6 py-3 font-bold tracking-[0.933px] text-white transition-opacity hover:opacity-[0.2473] xl:px-8 xl:py-[14px] xl:text-base xl:tracking-[1.067px]">
                SCHEDULE A DEMO
              </button>
              <p className="tracking-[2.5px] opacity-50 xl:text-[15px] xl:tracking-[5px]">
                TO SEE A PREVIEW
              </p>
            </div>
          </div>
          {/* content */}
        </main>
      </div>
    </>
  );
}
export default App;
