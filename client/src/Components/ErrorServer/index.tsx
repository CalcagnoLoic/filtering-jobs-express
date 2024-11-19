const Component = () => {
  return (
    <div className="absolute left-1/2 top-[50%] -translate-x-[50%] text-center">
      <h1 className="text-breakerBay text-3xl">Page Not Found</h1>

      <p className="text-breakerBay mt-5 text-xl">
        The page you seem to be reaching has either been modified, replaced or
        deleted. Please try again later or contact the site administrator, thank
        you!
      </p>

      <button className="bg-outerSpace mt-5 rounded-xl p-5 text-lg capitalize italic text-white duration-300 ease-in-out">
        Refresh
      </button>
    </div>
  );
};

export default Component;
