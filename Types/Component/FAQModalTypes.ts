export interface editDocDataTypes {
  title?: string;
  body?: string;
  postId?: string;
  image?: string;
}
export default interface FAQModalInterface {
  modalState: boolean;
  toggleModal: () => any;
  editDocData: editDocDataTypes;
}
