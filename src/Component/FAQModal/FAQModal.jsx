import { useContext, useEffect, useState } from "react";
import { PiSpinnerBold } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { firestoreDb } from "../../Utils/Firebase";
import { AuthContext } from "../../Context/UserAuthContext";
import {
  isQuillEmpty,
  validateFAQPost,
} from "../../services/HandleFormValidation/HandleFormValidation";
import {
  toastMessageError,
  toastMessageSuccess,
} from "../../services/ToastMessage/ToastMessage";

const FAQModal = ({ modalState, toggleModal, editDocData }) => {
  const { currentUser } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [postData, setPostData] = useState({});
  const [editorContent, setEditorContent] = useState("");

    //handle form value change
  const handleChange = (e) => {
    const { value, name } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  //handle add and update doc function
  function handleUpdateOrAddDoc(updateOrAddFunction, submittedData) {
    return new Promise((resolve, reject) => {
      updateOrAddFunction(submittedData)
        .then(() => {
          toastMessageSuccess("FAQ Added Successfully.");
          setPostData({});
          setEditorContent("");
          toggleModal();
          resolve();
        })
        .catch(() => {
          toastMessageError("Error updating FAQ.");
          reject();
        })
        .finally(() => {
          setIsLoading(false);
        });
    });
  }

  //form submit handler/function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFormErrors(validateFAQPost(postData));
    if (isQuillEmpty(editorContent)) {
      setFormErrors({ ...formErrors, ["body"]: "FAQ content is required" });
      setIsLoading(false);
    }

    const submittedData = {
      title: postData?.title,
      body: editorContent,
      userId: currentUser?.uid,
    };

    if (
      postData?.postId &&
      !isQuillEmpty(editorContent) &&
      postData?.title?.trim()?.length > 0 &&
      Object.keys(validateFAQPost(postData))?.length <= 0
    ) {
      const updateData = doc(firestoreDb, "post", postData?.postId);
      await handleUpdateOrAddDoc(() => updateDoc(updateData, submittedData));
    }
    if (
      !postData?.postId &&
      postData?.title?.trim()?.length > 0 &&
      !isQuillEmpty(editorContent) &&
      Object.keys(validateFAQPost(postData))?.length === 0
    ) {
      await handleUpdateOrAddDoc(() =>
        addDoc(collection(firestoreDb, "post"), submittedData)
      );
    }

    if (Object.keys(formErrors).length >= 0) {
      setIsLoading(false);
    }
  };

  const handleToggleModal = () => {
    toggleModal();
  };

  // Effects
  useEffect(() => {
    setIsLoading(false);
    setFormErrors({});
  }, [toggleModal]);

  useEffect(() => {
    setPostData({
      ...editDocData,
    });
    setEditorContent(editDocData?.body);
  }, [editDocData]);

  return (
    <div
      className={`fixed  w-full overflow-auto z-[100] h-full  backdrop-blur-sm top-0 z-1 right-0 justify-center items-center ${
        modalState === false ? "hidden" : "flex"
      }`}>
      <div
        onClick={handleToggleModal}
        className={`fixed w-full z-1 h-full bg-gray-100/10 backdrop-blur-sm top-0 z-1 right-0 justify-center items-center ${
          modalState === false ? "hidden" : "flex"
        }`}></div>

      {modalState && (
        <form
          id="form"
          onSubmit={handleSubmit}
          className="z-[22] w-[36rem] overflow-y-auto overflow-x-hidden h-[38rem] flex flex-col justify-start items-center p-2 bg-white rounded-md gap-[2rem] py-5 border-[1px] text-blue-600 border-gray-300">
          <p className="relative min-h-[2.5rem] w-full border-b-[1px]  border-blue-400 text-blue-600 flex justify-center items-center text-xl font-[400] ">
            Create FAQ
            <span
              onClick={handleToggleModal}
              className="absolute right-1  hover:bg-red-100/30 rounded-full z-10 w-10 h-full text-red-600 flex justify-center items-center cursor-pointer hover:text-red-900">
              <RxCross1 size={25} />
            </span>
          </p>

          <div className="w-[90%] h-auto flex flex-col justify-start items-center gap-10">
            <label
              htmlFor="title"
              className="w-full flex justify-center items-center flex-col">
              <span className="w-[90%]  h-10 flex justify-start items-center overflow-hidden text-md font-[500]">
                * FAQ Title
              </span>
              <input
                type="text"
                name="title"
                id="title"
                value={editDocData && postData?.title}
                required
                maxLength={60}
                onChange={handleChange}
                className="border-[1px] outline-0 text-black/80  p-1 px-3 h-[2.5rem] border-black/30 w-[90%] rounded-sm focus:outline focus:outline-2 focus:outline-blue-300 focus:outline-offset-1 focus:border-blue-500"
                placeholder="Enter the title"
              />

              {formErrors?.title && (
                <span className="w-[90%] px-2 h-10 flex justify-start items-center text-rose-400  overflow-hidden text-sm">
                  {formErrors?.title}
                </span>
              )}
            </label>
            <div className="w-[90%] flex justify-center items-center flex-col h-auto pb-2">
              <span className="w-full  h-10 flex justify-start items-center  overflow-hidden text-md font-[500]">
                * FAQ Content
              </span>
              <ReactQuill
                id="body"
                name="body"
                theme="snow"
                value={editorContent}
                onChange={setEditorContent}
                modules={{
                  toolbar: [
                    [{ header: [1, 2] }],
                    ["bold", "italic", "underline", "strike"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    ["link", "image"],
                  ],
                  clipboard: {
                    matchVisual: false,
                  },
                }}
                placeholder="Start typing..."
                className="w-full text-black/80"
              />
              {formErrors?.body && (
                <span className="w-full relative top-10 px-2 h-10 flex justify-start items-center text-rose-400  overflow-hidden text-sm">
                  {formErrors?.body}
                </span>
              )}
            </div>

            <button
              disabled={isLoading}
              type="submit"
              className="w-[89%] capitalize bg-blue-700 flex justify-center  items-center h-[2.5rem] p-0 rounded-md text-md font-[500] text-white border-[1px] border-blue-200 hover:bg-blue-500 hover:border-blue-300">
              {isLoading ? (
                <span className="w-full flex justify-center items-center gap-2 animate-pulse">
                  <PiSpinnerBold size={30} className="animate-spin " />{" "}
                  {editDocData ? "Updating" : "uploading"}
                </span>
              ) : (
                <span className="w-full flex justify-center items-center gap-2">
                  {editDocData ? "Update" : "upload"}
                </span>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default FAQModal;
