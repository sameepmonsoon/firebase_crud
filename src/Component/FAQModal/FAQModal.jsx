import { useEffect, useRef, useState } from "react";
import { PiSpinnerBold } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";
import { BsImages } from "react-icons/bs";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { firestoreDb } from "../../Utils/Firebase";
import "./FAQModal.css";
import PropTypes from "prop-types";
import {
  isQuillEmpty,
  validateFAQPost,
} from "../../services/HandleFormValidation/HandleFormValidation";
import {
  toastMessageError,
  toastMessageSuccess,
} from "../../services/ToastMessage/ToastMessage";
import { ReactQuillCompressor } from "../../services/ReactQuillCompressor/ReactQuillCompressor";
import { QueryClient } from "@tanstack/react-query";
// import { useSelector } from "react-redux";
const FAQModal = (props) => {
  const queryClient = new QueryClient({});
  const { modalState, toggleModal, editDocData } = props;
  // const { currentuser } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [postData, setPostData] = useState({});
  const [editorContent, setEditorContent] = useState("");
  // refs
  const inputRef = useRef();
  const quillRef = useRef();

  //function
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
          queryClient.invalidateQueries({ queryKey: ["faq"] });
          resolve();
        })
        .catch(() => {
          toastMessageError("File to large to upload.");
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
    const updatedContent = await ReactQuillCompressor(editorContent);
    const submittedData = {
      title: postData?.title,
      body: updatedContent,
      // userId: currentuser?.uid,
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
    setEditorContent("");
    toggleModal();
  };

  //fucntion for image change in editor quill
  const handleImageChange = (e) => {
    const files = e.target.files;
    if (files.length > 5) {
      toastMessageError(`You can only add 5 images at once.`);
    } else
      for (let i = -0; i < files.length; i++) {
        const query = document.querySelector(".ql-editor");
        const newImage = document.createElement("img");
        newImage.src = URL.createObjectURL(files[i]);
        const newHtml = newImage;
        query.append(newHtml);
      }
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

  useEffect(() => {
    if (formErrors?.title) {
      inputRef.current.scrollIntoView({ behavior: "smooth", top: "0" });
    }
  }, [formErrors]);

  useEffect(() => {
    if (Object.keys(formErrors).length > 0) {
      setIsLoading(false);
    }
  }, [formErrors]);

  // return <h1>Hello</h1>;

  return (
    <div
      className={`fixed  w-full overflow-auto z-[100] h-full  backdrop-blur-sm top-0 z-1 right-0 justify-center items-center ${
        modalState === false ? "hidden" : "flex"
      }`}>
      <div
        onClick={handleToggleModal}
        className={`fixed w-full z-1 h-full bg-black/20 backdrop-blur-sm top-0 z-1 right-0 justify-center items-center ${
          modalState === false ? "hidden" : "flex"
        }`}></div>

      {modalState && (
        <form
          id="form"
          onSubmit={handleSubmit}
          className="z-[22] relative w-[36rem] overflow-y-auto overflow-x-hidden h-[38rem] flex flex-col justify-start items-center p-2 bg-white rounded-sm gap-[2rem] py-5 border-[1px] text-blue-600 border-gray-300">
          <div className="relative min-h-[2.5rem] w-full border-b-[1px]  border-blue-400 text-blue-600 flex justify-center items-center text-xl font-[400] ">
            Create FAQ
            <span
              onClick={handleToggleModal}
              className="absolute right-1  hover:bg-red-100/30 rounded-full z-10 w-10 h-full text-red-600 flex justify-center items-center cursor-pointer hover:text-red-900">
              <RxCross1 size={25} />
            </span>
          </div>

          <div className="w-[90%] h-auto flex flex-col justify-start items-center gap-20 lg:gap-10">
            <label
              htmlFor="title"
              className="w-full flex justify-center items-center flex-col">
              <span className="w-[90%]  h-10 flex justify-start items-center overflow-hidden text-md font-[500]">
                * FAQ Title
              </span>
              <input
                ref={inputRef}
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
            <div className="relative w-[90%] flex justify-center items-center flex-col h-auto pb-2">
              <span className="w-full  h-10 flex justify-start items-center  overflow-hidden text-md font-[500]">
                * FAQ Content
              </span>
              <label
                htmlFor="multipleImage"
                className="absolute top-[3.4rem] right-[4rem] sm:right-[5.2rem] h-[15px] w-[15px] cursor-pointer text-black z-10 hover:text-blue-700">
                <BsImages className="" />
              </label>
              <input
                id="multipleImage"
                type="file"
                multiple
                hidden
                accept="image/*"
                onChange={handleImageChange}
              />
              <ReactQuill
                id="body"
                name="body"
                theme="snow"
                ref={quillRef}
                value={editorContent}
                onChange={setEditorContent}
                modules={{
                  toolbar: [
                    [{ header: [1, 2] }],
                    ["bold", "italic", "underline"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    ["link", "code-block"],
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
              className="w-[90%] capitalize bg-blue-700 flex justify-center  items-center h-[2.5rem] p-0 rounded-[0.2rem] text-md font-[400] text-white border-[1px] border-blue-200 hover:bg-blue-500 hover:border-blue-300">
              {isLoading ? (
                <span className="w-full flex justify-center items-center gap-2 animate-pulse">
                  <PiSpinnerBold size={30} className="animate-spin " />{" "}
                  {editDocData ? "Updating FAQ" : "uploading FAQ"}
                </span>
              ) : (
                <span className="w-full flex justify-center items-center gap-2">
                  {editDocData ? "Update FAQ" : "upload FAQ"}
                </span>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

FAQModal.propTypes = {
  modalState: PropTypes.bool,
  toggleModal: PropTypes.func,
  editDocData: PropTypes.object,
};

export default FAQModal;
