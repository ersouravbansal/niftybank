import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center bg-white shadow-md p-4  ">
          <Link href="/" passHref>
            <div className="flex shrink-0 items-center gap-1.5 lg:gap-2">
              <svg
                width="30"
                height="30"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="scale-90 md:scale-100"
              >
                <rect width="46" height="46" fill="url(#pattern0)" />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_102_9415"
                      transform="scale(0.00961538)"
                    />
                  </pattern>
                  <image
                    id="image0_102_9415"
                    width="104"
                    height="104"
                    xlinkHref="data:image/png;base64,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"
                  />
                </defs>
              </svg>
              <p className="text-lg font-medium tracking-heading text-primaryBlack-750 lg:text-xl lg:font-semibold">
                AlgoTest
              </p>
            </div>
          </Link>
        <div className="flex-grow text-center font-thin items-center ">
          {" "}
          Leap Into the Future of Trading With {" "}
          <span className="text-blue-600 text-lg font-bold pl-1 "> Algo Trading</span>
        </div>
      </header>
    </>
  );
};

export default Header;
