import { MdDeleteOutline } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import React from "react";
import { useEffect, useState } from "react";
import DeleteFAQModalInterface from "../../../Types/Component/DeleteFAQModalTypes";
const DeleteModal: React.FC<DeleteFAQModalInterface> = (
  props: DeleteFAQModalInterface
) => {
  const {
    deleteFAQ,
    closeDeleteModalFunction,
    deleteModalState,
    isLoading,
    deleteModalTitle,
  } = props;
  const [currentModalState, setCurrentModalState] = useState(deleteModalState);
  useEffect(() => {
    setCurrentModalState(deleteModalState);
  }, [deleteModalState, setCurrentModalState]);
  return (
    <div
      className={`${
        currentModalState ? "flex" : "hidden"
      } fixed z-10 w-screen h-screen bg-black/10 backdrop-blur-sm left-0 top-0 flex justify-center items-center `}>
      <div
        className={` absolute h-full w-full z-[20]`}
        onClick={() => {
          setCurrentModalState(false);
          closeDeleteModalFunction();
        }}>
        &nbsp;
      </div>

      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[30] bg-white shadow-md border-[1px] h-40 w-[20rem] rounded-md flex flex-col justify-start items-center overflow-hidden">
        <span className="h-20 w-full text-xl flex justify-center items-center overflow-hidden">
          {deleteModalTitle ? deleteModalTitle : " Are you sure?"}
        </span>
        <div className="w-full flex-1 flex  justify-center items-center gap-5">
          <button
            disabled={isLoading}
            className={`${
              isLoading ? "bg-red-300" : "bg-red-600"
            } w-[8rem] rounded-sm  text-white h-[2.2rem] flex justify-center items-center`}
            onClick={deleteFAQ}>
            <span className="flex-1 text-lg">Delete</span>
            <span className="w-10 h-full justify-center items-center flex rounded-r-md">
              <MdDeleteOutline size={25} />
            </span>
          </button>
          <button
            disabled={isLoading}
            onClick={() => {
              setCurrentModalState(false);
              closeDeleteModalFunction();
            }}
            className={`${
              isLoading ? "bg-green-300" : "bg-green-600"
            } w-[8rem] rounded-sm  text-white h-[2.2rem] flex justify-center items-center`}>
            <span className="flex-1 text-lg">Cancel</span>
            <span className="w-10  h-full justify-center items-center flex rounded-r-sm">
              <RxCross1 size={23} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
