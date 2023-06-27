const HomeLayout = ({ children }) => {
  return (
    <div className="h-screen w-full flex flex-col justify-center  items-center overflow-hidden">
      {children}
    </div>
  );
};

export default HomeLayout;
