import { AiOutlineMinus } from "react-icons/ai";
import { MdAdd, MdDeleteOutline } from "react-icons/md";
import HomeLayout from "../Layout/HomeLayout";
import { FiEdit } from "react-icons/fi";
import { IoAdd, IoLogOutOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import FAQModal from "../Component/FAQModal";
import { AuthContext } from "../Context/UserAuthContext";
import { useContext } from "react";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { firestoreDb } from "../Utils/Firebase";
import {
  toastMessageError,
  toastMessageSuccess,
} from "../services/ToastMessage/ToastMessage";
const HomePage = () => {
  const { isAdminRole, logOut, isLoading } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [currentData, setCurrentData] = useState([]);
  const [selctedIndex, setSelectedIndex] = useState(null);
  const [editData, setEditData] = useState(null);
  const handleModalToggle = () => {
    setOpenModal(!openModal);
  };

  const handleAccordionToggle = (index) => {
    if (selctedIndex === index) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(index);
    }
  };

  const handleDelete = async (id) => {
    setIsButtonDisabled(true);
    const deleteDocument = doc(firestoreDb, "post", id);
    await deleteDoc(deleteDocument)
      .then(() => {
        toastMessageSuccess("FAQ Deleted.");
      })
      .catch(() => {
        toastMessageError("Error deleting FAQ.");
      })
      .finally(() => {
        setIsButtonDisabled(false);
      });

    fetchFAQ();
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

  async function fetchFAQ() {
    const allFAQData = await getDocs(collection(firestoreDb, "post"));
    const data = allFAQData?.docs?.map((doc) => doc);
    console.log(data);
    setCurrentData(data);
  }
  useEffect(() => {
    fetchFAQ();
  }, [openModal]);
  console.log(isAdminRole);
  console.log(isLoading);
  return (
    <HomeLayout>
      <div className="w-[60%] h-[45rem] bg-blue-800 flex justify-start items-start relative top-0 flex-col gap-[1.5rem] p-2 m-1 rounded-[3px] overflow-y-auto overflow-x-hidden">
        <p className="md:min-h-[3rem]  min-h-[4rem] relative w-full flex flex-col  md:flex-row justify-start md:justify-center gap-2 md:gap-10  items-start md:items-center text-md sm:text-xl md:text-3xl font-[500] text-white">
          Frequently Asked Question
          {isAdminRole && (
            <span
              onClick={handeAddNewFAQ}
              className="sm:w-[8rem] h-[1.8rem] sm:h-[3rem] flex justify-start items-center  text-sm sm:text-[1.1rem] lg:text-lg border-[2px] rounded-md p-1 cursor-pointer hover:text-white text-gray-100/90 hover:border-white border-gray-100/90">
              <IoAdd size={30} className="group-hover:text-blue-800" />
              New FAQ
            </span>
          )}
        </p>
        <FAQModal
          toggleModal={handleModalToggle}
          modalState={openModal}
          editDocData={editData}
        />
        {/* accordion */}
        {currentData?.map((data, index) => {
          const postId = data.id;
          const currentPostData = data.data();
          return (
            <div
              key={index}
              className=" h-auto bg-white w-full flex flex-col justify-around items-center rounded-sm ">
              <div className="w-full flex justify-around h-40 md:h-20 items-center md:flex-row flex-col p-1">
                <div className="order-1 w-full md:w-auto md:flex-1  flex justify-start px-2 items-center h-full text-[16px]  sm:text-[18px] overflow-hidden ">
                  {currentPostData?.title}
                </div>
                <div className="order-2 w-auto h-40 md:h-20 flex justify-start items-center gap-2 flex-wrap">
                  {isAdminRole && (
                    <span
                      onClick={() => {
                        handleEdit(postId, index, currentPostData);
                      }}
                      className="  text-emerald-600 sm:w-[4rem] sm:h-[80%] flex justify-center items-center cursor-pointer group border-2 rounded-md border-emerald-400">
                      <FiEdit
                        size={30}
                        className="group-hover:text-green-800"
                      />
                    </span>
                  )}
                  {isAdminRole && (
                    <button
                      disabled={isButtonDisabled}
                      onClick={() => handleDelete(postId)}
                      className={` text-red-600 sm:w-[4rem] sm:h-[80%] flex justify-center items-center ${
                        isButtonDisabled
                          ? "cursor-not-allowed"
                          : "cursor-pointer"
                      } group border-2 rounded-md border-red-700`}>
                      <MdDeleteOutline
                        size={30}
                        className="group-hover:text-red-800 text-red-600"
                      />
                    </button>
                  )}
                  <span
                    className="  text-blue-900 sm:w-[4rem] w-[2.1rem] h-[43%] sm:h-[80%] flex justify-center items-center cursor-pointer group border-2 rounded-md border-blue-800"
                    onClick={() => handleAccordionToggle(index)}>
                    {selctedIndex === index ? (
                      <AiOutlineMinus
                        size={35}
                        className="group-hover:text-blue-800 "
                      />
                    ) : (
                      <MdAdd size={38} className="group-hover:text-blue-800" />
                    )}
                  </span>
                </div>
              </div>
              {selctedIndex === index && (
                <div className="w-full  min-h-[4rem] text-gray-600 p-1 py-2 flex justify-start items-center flex-wrap text-[14px] sm:text-[17px] flex-col border-t-[2px] border-blue-800">
                  {currentPostData?.image && (
                    <img
                      src={currentPostData?.image}
                      alt=""
                      className="w-[14rem] h-[14rem]"
                    />
                  )}
                  {currentPostData?.body}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div
        onClick={() => logOut()}
        className="absolute bottom-2 cursor-pointer right-5 bg-red-900 w-[8rem] h-[2.8rem] rounded-md flex justify-evenly items-center text-white text-xl uppercase font-[500]">
        <IoLogOutOutline size={35} /> Logout
      </div>
    </HomeLayout>
  );
};

export default HomePage;
