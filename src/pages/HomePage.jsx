import vid from "../assets/HomeVid.mp4";

const Home = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-end text-white p-5">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
      >
        <source src={vid} type="video/mp4" />
        {/* Your browser does not support the video tag. */}
      </video>

      <div className="absolute inset-0 bg-black opacity-20"></div>

<div className="relative z-10 flex w-50% sm:w-[50%] md:w-[45%] lg:w-[35%] xl:w-[27%] font-semibold gap-12">
      <div>
        <p>FRNWEI.CO IS</p>
        <p>COMING SOON</p>
      </div>
      <div>
        <p>GET IN TOUCH</p>
        <p>INFO@FRNWEI.CO</p>
      </div>
</div>
    </div>
  );
};

export default Home;
