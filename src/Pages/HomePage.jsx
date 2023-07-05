import { AiOutlineMinus } from "react-icons/ai";
import { MdAdd, MdDeleteOutline } from "react-icons/md";
import HomeLayout from "../Layout/HomeLayout";
import { FiEdit } from "react-icons/fi";
import { IoAdd, IoLogOutOutline } from "react-icons/io5";
import { useState } from "react";
import FAQModal from "../Component/FAQModal/FAQModal";
import { AuthContext } from "../Context/UserAuthContext";
import { useContext } from "react";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { firestoreDb } from "../Utils/Firebase";
import {
  toastMessageError,
  toastMessageSuccess,
} from "../services/ToastMessage/ToastMessage";
import DeleteModal from "../Component/Delete Modal/DeleteModal";
import ReactQuill from "react-quill";
import { useQuery } from "@tanstack/react-query";
import { FaqLoadingSkeleton } from "../Component/FAQ_loading_skeleton/FaqLoadingSkeleton";
const HomePage = () => {
  const { isAdminRole, logOut } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  // const [currentData, setCurrentData] = useState([]);
  const [selctedIndex, setSelectedIndex] = useState(null);
  const [editData, setEditData] = useState(null);
  const [deleteFaqId, setDeleteFaqId] = useState(null);
  const [previewImageUrl, setPreviewImageUrl] = useState([]);
  const handleModalToggle = () => {
    setOpenModal(!openModal);
  };

  const { data, isFetching, refetch } = useQuery({
    queryKey: ["faq"],
    queryFn: async () => {
      const allFAQData = await getDocs(collection(firestoreDb, "post"));
      const data = allFAQData?.docs?.map((doc) => doc);
      return data;
    },
    refetchOnWindowFocus: true,
  });

  const handleAccordionToggle = (index) => {
    if (selctedIndex === index) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(index);
    }
  };

  //function to set the delete id
  const handleDelete = async (id) => {
    setIsButtonDisabled(true);
    setOpenDeleteModal(!openDeleteModal);
    setDeleteFaqId(id);
  };

  //function that deletes the faq
  const deleteFAQ = async () => {
    setIsButtonDisabled(true);
    if (deleteFaqId) {
      const deleteDocument = doc(firestoreDb, "post", deleteFaqId);
      await deleteDoc(deleteDocument)
        .then(() => {
          toastMessageSuccess("FAQ Deleted.");
          refetch();
        })
        .catch(() => {
          toastMessageError("Error deleting FAQ.");
        })
        .finally(() => {
          setIsButtonDisabled(false);
          toggleDeleteModal();
        });
    }
  };
  const toggleDeleteModal = () => {
    setOpenDeleteModal(!openDeleteModal);
    if (openDeleteModal) {
      setIsButtonDisabled(false);
    }
    if (!openDeleteModal) {
      setIsButtonDisabled(true);
    }
  };
  const handleEdit = async (id, index, data) => {
    setEditData({
      ...editData,
      ["postId"]: id,
      ["title"]: data?.title,
      ["body"]: data?.body,
      ["image"]: data?.image,
    });
    handleModalToggle();
  };

  const handeAddNewFAQ = () => {
    setEditData(null);
    handleModalToggle();
  };

  //handles image preview when clicked react-quill body/faq
  const handleFAQContentClick = (event) => {
    const clickedElement = event.target;
    if (clickedElement.tagName === "IMG") {
      setPreviewImageUrl([clickedElement.src]);
      document?.getElementById("imagePreview")?.requestFullscreen();
    }
  };

  //remove image preview
  const removePreviewImage = () => {
    const element = document.getElementById("imagePreview");
    element?.remove();
    setPreviewImageUrl("");
  };

  return (
    <HomeLayout>
      {previewImageUrl.length > 0 && (
        <div
          className="fixed w-full h-full z-[200] bg-black/40 backdrop-blur-sm flex justify-center items-center"
          onClick={removePreviewImage}>
          {previewImageUrl.map((item, index) => (
            <img
              key={index}
              src={item}
              id="imagePreview"
              className="w-[50%] h-[60%] z-[200] object-contain"
            />
          ))}
          <span
            onClick={removePreviewImage}
            className="h-10 w-[12rem] cursor-pointer bg-black rounded-full text-white flex justify-center items-center absolute top-10">
            Click Anywhere To Exit
          </span>
        </div>
      )}
      <div
        id="home"
        className="w-[90%] md:w-[60%] lg:w-[70%]  min-h-[17rem] max-h-[45rem] bg-white text-black border-[1px] shadow-lg flex justify-start items-start absolute top-3 flex-col gap-[0.8rem] p-2 m-1 rounded-[3px] overflow-y-auto overflow-x-hidden">
        <div className="md:min-h-[3rem] bg-blue-600 p-2 md:p-1 min-h-[5.5rem] relative w-full flex flex-col  md:flex-row justify-start md:justify-between gap-2 md:gap-10  items-start md:items-center text-md sm:text-xl font-[500] text-white">
          Frequently Asked Questions
          {isAdminRole && (
            <div
              onClick={handeAddNewFAQ}
              className="sm:w-[7rem] h-[1.8rem] font-[400] hover:bg-blue-700 gap-0 sm:h-[2.2rem] flex justify-start items-center text-sm sm:text-[1rem] lg:text-md border-[1px] rounded-[0.2rem] cursor-pointer text-white  hover:border-white border-gray-100/90">
              <span className="h-full w-[70%] flex justify-center items-center">
                Add FAQ
              </span>
              <span className="w-[2rem]  h-full flex justify-center items-center rounded-r-sm ">
                <IoAdd size={25} className="group-hover:text-blue-800" />
              </span>
            </div>
          )}
        </div>
        <FAQModal
          toggleModal={handleModalToggle}
          modalState={openModal}
          editDocData={editData}
        />

        <DeleteModal
          deleteModalState={openDeleteModal}
          closeDeleteModalFunction={toggleDeleteModal}
          deleteFAQ={deleteFAQ}
          isLoading={!isButtonDisabled}
        />
        {/* accordion */}
        {isFetching ? (
          <div className="w-full h-full flex flex-col justify-start text-[44px] font-[500] items-start gap-4">
            <FaqLoadingSkeleton />
            <FaqLoadingSkeleton />
            <FaqLoadingSkeleton />
          </div>
        ) : (
          <>
            {data?.map((data, index) => {
              const postId = data.id;
              const currentPostData = data.data();
              return (
                <div
                onClick={() => handleAccordionToggle(index)}
                  key={index}
                  className={`h-auto  cursor-pointer bg-white border-[1px] ${
                    selctedIndex === index &&
                    "border-blue-400 outline outline-2 outline-offset-1 outline-blue-200 shadow-sm shadow-black/30"
                  } border-blue-200 w-full flex flex-col justify-around items-center rounded-md `}>
                  <div
                    className={`w-full hover:bg-blue-100 flex justify-around h-40  md:h-[2.8rem] items-center md:flex-row flex-col p-1  ${
                      selctedIndex === index && "bg-blue-100 rounded-t-md"
                    }`}>
                    <div
                      className={`order-1 w-full md:w-auto md:flex-1 flex-wrap  flex justify-start px-2 items-center h-full text-[16px]  sm:text-[16px] overflow-hidden `}>
                      {currentPostData?.title}
                    </div>

                    <div className="order-2 w-auto h-40 md:h-[2.5rem] flex justify-start items-center gap-2 flex-wrap" >
                      {isAdminRole && (
                        <span
                          onClick={() => {
                            handleEdit(postId, index, currentPostData);
                          }}
                          className="  text-emerald-600 sm:w-[2rem] sm:h-[80%] flex justify-center items-center cursor-pointer group border-[0px] rounded-md border-emerald-400">
                          <FiEdit
                            size={25}
                            className="group-hover:text-green-800"
                          />
                        </span>
                      )}
                      {isAdminRole && (
                        <button
                          disabled={isButtonDisabled}
                          onClick={() => handleDelete(postId)}
                          className={` text-red-600 sm:w-[2rem] sm:h-[80%] flex justify-center items-center ${
                            isButtonDisabled
                              ? "cursor-not-allowed"
                              : "cursor-pointer"
                          } group border-[0px] rounded-md border-red-700`}>
                          <MdDeleteOutline
                            size={25}
                            className="group-hover:text-red-800 text-red-600"
                          />
                        </button>
                      )}
                      <span
                        className="  text-blue-900 sm:w-[2rem] w-[1.8rem] h-[38%] sm:h-[80%] flex justify-center items-center cursor-pointer group border-[0px] rounded-md border-blue-800"
                        onClick={() => handleAccordionToggle(index)}>
                        {selctedIndex === index ? (
                          <AiOutlineMinus
                            size={25}
                            className="group-hover:text-blue-800 "
                          />
                        ) : (
                          <MdAdd
                            size={25}
                            className="group-hover:text-blue-800"
                          />
                        )}
                      </span>
                    </div>
                  </div>
                  {selctedIndex === index && (
                    <div className="w-full min-h-[4rem] text-gray-600 p-1 py-2 flex justify-start items-center flex-wrap text-[14px] sm:text-[17px] flex-col border-t-[1px] border-blue-200">
                      <div
                        className="w-full z-1"
                        onClick={(e) => {
                          handleFAQContentClick(e);
                        }}>
                        <ReactQuill
                          value={currentPostData?.body}
                          readOnly={true}
                          theme={"snow"}
                          modules={{
                            toolbar: null,
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </>
        )}
      </div>

      <button
        onClick={() => logOut()}
        className=" absolute bottom-3 w-[8rem] rounded-sm right-5 bg-red-700 text-white h-[2.4rem] flex justify-center items-center">
        <span className="flex-1 text-lg">Logout</span>
        <span className="w-10  h-full justify-center items-center flex rounded-r-sm">
          <IoLogOutOutline size={25} />
        </span>
      </button>
    </HomeLayout>
  );
};

export default HomePage;
