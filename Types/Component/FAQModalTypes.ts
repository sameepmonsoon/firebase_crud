export default interface FAQModalInterface {
  modalState: boolean;
  toggleModal: () => any;
  editDocData: { title?: string | any; body?: string | any };
}
