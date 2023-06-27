import { useContext, useEffect, useState } from "react";
import { PiSpinnerBold } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";
import { LuImagePlus } from "react-icons/lu";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { firestoreDb } from "../Utils/Firebase";
import { AuthContext } from "../Context/UserAuthContext";
import { validateFAQPost } from "../services/HandleFormValidation/HandleFormValidation";
import {
  toastMessageError,
  toastMessageSuccess,
} from "../services/ToastMessage/ToastMessage";
const FAQModal = ({ modalState, toggleModal, editDocData }) => {
  const { currentUser } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [checked, setChecked] = useState(editDocData?.image ? true : false);
  const [formErrors, setFormErrors] = useState({});

  const [postData, setPostData] = useState({});
  const [image, setImage] = useState(null);
  const handleImageChange = (e) => {
    const { name } = e.target;
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader?.result);
      setPostData({ ...postData, [name]: reader?.result });
    };
    reader?.readAsDataURL(e?.target?.files[0]);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  const handleSubmit = async (e) => {
    setFormErrors(validateFAQPost(postData));

    e.preventDefault();
    setIsLoading(true);

    const submittedData = {
      title: postData?.title,
      body: postData?.body,
      userId: currentUser?.uid,
      ...(image != null && { image: postData?.image }),
    };

    if (
      postData?.postId &&
      postData?.title.trim().length > 0 &&
      postData?.body.trim().length > 0 &&
      Object.keys(validateFAQPost(postData))?.length <= 0
    ) {
      const updateData = doc(firestoreDb, "post", postData?.postId);
      await updateDoc(updateData, submittedData)
        .then(() => {
          toastMessageSuccess("FAQ Updated Successfully");
          setImage(null);
          setPostData({});
          toggleModal();
        })
        .catch(() => {
          toastMessageError("Can't update FAQ.");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
    if (
      !postData?.postId &&
      postData?.title.trim().length > 0 &&
      postData?.body.trim().length > 0 &&
      Object.keys(validateFAQPost(postData)).length === 0
    ) {
      await addDoc(collection(firestoreDb, "post"), submittedData)
        .then(() => {
          toastMessageSuccess("FAQ Added Successfully");
          setImage(null);
          setPostData({});
          toggleModal();
        })
        .catch(() => {
          toastMessageError("Error adding FAQ.");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }

    if (Object.keys(formErrors).length >= 0) {
      setIsLoading(false);
    }
  };

  const handleToggleModal = () => {
    toggleModal();
  };

  useEffect(() => {
    setIsLoading(false);
    setChecked(editDocData?.image ? true : false);
    setFormErrors({});
  }, [toggleModal]);

  useEffect(() => {
    setImage(editDocData?.image);
    setChecked(editDocData?.image ? true : false);
    setPostData({
      ...editDocData,
    });
  }, [editDocData]);

  return (
    <>
      {modalState && (
        <div
          className={`fixed w-full h-full bg-gray-100/10 backdrop-blur-sm top-0 right-0 justify-center items-center ${
            modalState === false ? "hidden" : "flex"
          }`}>
          <form
            onSubmit={handleSubmit}
            className=" w-[45rem] overflow-y-auto overflow-x-hidden h-[42rem] flex flex-col justify-start items-center p-2 bg-blue-600 rounded-md gap-[2rem] py-5 border-2 border-gray-300">
            <p className="relative min-h-[3rem] bg-blue-700 border-[1px] border-blue-400 w-full rounded-md flex justify-center items-center text-2xl font-[500] text-white">
              Create FAQ
              <span
                onClick={handleToggleModal}
                className="absolute right-0 z-10 w-10 h-full bg-red-600 flex justify-center items-center rounded-md cursor-pointer text-white/80 hover:text-white hover:bg-red-600/90">
                <RxCross1 size={25} />
              </span>
            </p>

            <div className="w-[90%] h-auto flex flex-col justify-start items-center gap-10">
              <label
                htmlFor="title"
                className="w-full flex justify-center items-center flex-col">
                <span className="w-full  h-10 flex justify-start items-center text-white  overflow-hidden text-md font-[500]">
                  * FAQ Title
                </span>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={editDocData && postData?.title}
                  required
                  maxLength={30}
                  onChange={handleChange}
                  className="border-[1px] outline-0 p-1 px-3 h-[3rem] w-full rounded-sm focus:outline focus:outline-2 focus:outline-blue-200 focus:outline-offset-1 focus:border-transparent"
                  placeholder="Enter the title"
                />

                {formErrors?.title && (
                  <span className="w-full px-2 h-10 flex justify-start items-center text-rose-400  overflow-hidden text-sm">
                    {formErrors?.title}
                  </span>
                )}
              </label>
              <label
                htmlFor="body"
                className="w-full flex justify-center items-center flex-col">
                <span className="w-full  h-10 flex justify-start items-center text-white  overflow-hidden text-md font-[500]">
                  * FAQ Content
                </span>
                <textarea
                  required
                  name="body"
                  value={editDocData && postData?.body}
                  onChange={handleChange}
                  placeholder="Enter the FAQ Body"
                  className="w-full border-[1px]  px-3 overflow-auto border-purple/30 rounded-sm focus:outline focus:outline-2 focus:outline-blue-200 focus:outline-offset-1 focus:border-transparent p-2 h-auto min-h-[10rem] max-h-none resize-none"></textarea>
                {formErrors?.body && (
                  <span className="w-full px-2 h-10 flex justify-start items-center text-rose-400  overflow-hidden text-sm">
                    {formErrors?.body}
                  </span>
                )}
              </label>

              <div className="flex items-center justify-start w-full px-1 ">
                <input
                  id="checked-checkbox"
                  type="checkbox"
                  onClick={(e) => setChecked(e.target.checked)}
                  className="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label className="ml-2 text-md font-medium  dark:text-gray-300 text-white">
                  Add Image on FAQ
                </label>
              </div>
              {checked && (
                <>
                  {image != null && (
                    <img
                      src={image}
                      alt="Selected Photo"
                      className="h-40 w-40 object-cover"
                    />
                  )}
                  <label
                    htmlFor="image"
                    className="w-full flex justify-center items-center flex-col bg-white h-20 rounded-sm">
                    <span className="flex capitalize flex-col w-full h-auto justify-center items-center text-md font-[500] text-gray-700 gap-1 cursor-pointer">
                      <LuImagePlus size={35} />
                      {image != null ? "Change Image" : "add Image"}
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      id="image"
                      name="image"
                      hidden
                      onChange={handleImageChange}
                    />
                  </label>
                </>
              )}

              <button
                type="submit"
                className="w-full bg-blue-400 flex justify-center  items-center h-[3rem] p-0 rounded-md text-xl font-[500] text-white border-[1px] border-blue-200 hover:bg-blue-500 hover:border-blue-300">
                {isLoading ? (
                  <span className="w-full flex justify-center items-center gap-2 text-lg animate-pulse">
                    <PiSpinnerBold size={30} className="animate-spin " />{" "}
                    Uploading
                  </span>
                ) : (
                  <span className="w-full flex justify-center items-center gap-2 text-lg ">
                    {editDocData ? "Update" : "upload"}
                  </span>
                )}
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default FAQModal;
