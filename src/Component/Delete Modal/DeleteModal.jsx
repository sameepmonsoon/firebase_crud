import { MdDeleteOutline } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import PropTypes from "prop-types";
const DeleteModal = (props) => {
  const {
    deleteFAQ,
    closeDeleteModalFunction,
    deleteModalState,
    isLoading,
    deleteModalTitle,
  } = props;

  return (
    <div
      className={`${
        deleteModalState ? "flex" : "hidden"
      } fixed z-20 w-screen h-screen bg-black/10 backdrop-blur-sm left-0 top-0 flex justify-center items-center `}>
      <div className=" bg-white shadow-md border-[1px] h-40 w-[20rem] rounded-md flex flex-col justify-start items-center overflow-hidden">
        <span className="h-20 w-full text-xl flex justify-center items-center overflow-hidden">
          {deleteModalTitle ? deleteModalTitle : " Are you sure?"}
        </span>
        <div className="w-full flex-1 flex  justify-center items-center gap-5">
          <button
            disabled={isLoading}
            className="w-[8rem] rounded-sm bg-red-600 text-white h-[2.2rem] flex justify-center items-center"
            onClick={deleteFAQ}>
            <span className="flex-1 text-lg">Delete</span>
            <span className="w-10 h-full justify-center items-center flex rounded-r-md">
              <MdDeleteOutline size={25} />
            </span>
          </button>
          <button
            disabled={isLoading}
            onClick={closeDeleteModalFunction}
            className="w-[8rem] rounded-sm bg-green-600 text-white h-[2.2rem] flex justify-center items-center">
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

DeleteModal.propTypes = {
  deleteModalState: PropTypes.bool,
  closeDeleteModalFunction: PropTypes.func,
  deleteFAQ: PropTypes.func,
  isLoading: PropTypes.bool,
  deleteModalTitle: PropTypes.string,
};

export default DeleteModal;
