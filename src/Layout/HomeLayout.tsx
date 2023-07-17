import React from "react";

type propsType = {
  children: string | JSX.Element | JSX.Element[];
};
const HomeLayout: React.FC<propsType> = (props: propsType) => {
  const { children } = props;
  return (
    <div className="h-screen w-full flex flex-col justify-center  items-center overflow-hidden">
      {children}
    </div>
  );
};

export default HomeLayout;
