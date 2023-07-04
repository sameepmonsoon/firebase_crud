export const FaqLoadingSkeleton = () => {
  return (
    <div
      className={`w-full flex justify-around h-20  md:h-[2.8rem] items-center md:flex-row flex-col p-[1px] bg-blue-0 rounded-md border-[1px] border-blue-300`}>
      <div className=" bg-blue-200 w-full h-full rounded-md animate-pulse duration-1000 ease-linear relative flex justify-end items-center gap-2">
        &nbsp;
        <div className="animate-pulse duration-1000 ease-linea w-[1.8rem] h-[65%] bg-blue-400 absolute right-[0.4rem] rounded-md border-[1px] border-blue-500">
          &nbsp;
        </div>
      </div>
    </div>
  );
};
