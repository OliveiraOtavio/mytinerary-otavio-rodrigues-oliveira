import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-300 lg:bg-[url('/img/map-airplane.png')]">
      <NavBar />
      {/* NAVBAR BACKGROUND */}
      <div className="flex-grow w-full   ">
        <div className=" w-[95vw] my-[2em] mx-auto flex justify-center p-[2em] rounded ">
          <img
            className="z-0 flex justify-center rounded w-[100vw] h-[32vh] object-cover absolute top-0
                       md:h-[23vh]
                       lg:h-[55vh]
                       2xl:h-[43vh] "
            src="/img/bw-city.jpg"
            alt="City Landscape black and white"
          />
        </div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
