export default interface UserAuthContextTypes {
  isLoading: boolean;
  currentUser: object;
  login: (email: string, password: string) => any;
  signUp: (email: string, password: string) => any;
  logOut: () => any;
  isAdminRole: boolean;
}
