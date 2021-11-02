import cn from "classnames";
import { PProps } from "./P.props";
import styles from "./P.module.css";

export const P = ({
  fontSize = "sm",
  children,
  className,
  ...props
}: PProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.md]: fontSize == "md",
        [styles.lg]: fontSize == "lg",
      })}
      {...props}
    >
      {children}
    </p>
  );
};
