const DeleteModal = ({
  deleteFAQ,
  closeDeleteModalFunction,
  deleteModalState,
  isLoading,
}) => {
  const handleCloseModal = () => {
    closeDeleteModalFunction();
  };
  return (
    <div
      className={`${
        deleteModalState ? "flex" : "hidden"
      } fixed z-20 w-screen h-screen bg-white/30 backdrop-blur-sm left-0 top-0 flex justify-center items-center`}>
      <div className=" bg-white shadow-md border-[1px] h-40 w-[20rem] rounded-md flex flex-col justify-start items-center ">
        <span className="h-20 w-full  flex justify-center items-center ">
          Are you sure?
        </span>
        <div className="w-full flex-1 flex  justify-center items-center gap-5">
          <button
            disabled={isLoading}
            className="w-[8rem] rounded-md bg-red-600 text-white h-[2.2rem]"
            onClick={() => {
              deleteFAQ();
            }}>
            Yes
          </button>
          <button
            disabled={isLoading}
            onClick={() => {
              handleCloseModal();
            }}
            className="w-[8rem] rounded-md bg-green-600 text-white h-[2.2rem] cursor-pointer">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
