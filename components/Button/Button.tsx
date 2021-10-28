import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";

export const Button = ({ appearance, children }: ButtonProps): JSX.Element => {
  return <button>{children}</button>;
};
