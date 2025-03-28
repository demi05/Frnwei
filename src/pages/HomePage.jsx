import vid from "../assets/HomeVid.mp4";

const Home = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-end text-white p-5">
      {/* ✅ Correct Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline // ✅ Ensures autoplay works on iPhones
      >
        <source src={vid} type="video/mp4" />
      </video>

      {/* ✅ Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* ✅ Text Content */}
      <div className="relative z-10 flex w-[60%] sm:w-[50%] md:w-[45%] lg:w-[35%] xl:w-[27%] font-medium gap-12 text-[13px]">
        <div>
          <p>FRNWEI.CO IS</p>
          <p>COMING SOON</p>
        </div>
        <div>
          <p>GET IN TOUCH</p>
          <a href="mailto:info@frnwei.co" className="text-white underline">
            INFO@FRNWEI.CO
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
