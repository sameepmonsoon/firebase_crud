type RequestObjectType = { email: string; uid: string; displayName: string };

export default interface RequestInterface {
  user: RequestObjectType;
  User: any;
}
