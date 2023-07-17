export default interface DeleteFAQModalInterface {
  deleteFAQ: () => {};
  closeDeleteModalFunction: () => any;
  deleteModalState?: boolean;
  isLoading?: boolean;
  deleteModalTitle?: string;
}
