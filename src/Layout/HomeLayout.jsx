const HomeLayout = ({ children }) => {
  return (
    <div className="h-screen w-full flex flex-col justify-center  items-center overflow--x-hidden overflow-y-scroll">
      {children}
    </div>
  );
};

export default HomeLayout;
