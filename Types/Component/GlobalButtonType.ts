export default interface GlobalButtonInterface {
  handleClick?: () => any;
  buttonIcon?: React.ReactNode;
  buttonTitle?: string;
  colorType: string;
  size?: string | any;
}
