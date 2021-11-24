import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css";
import { Menu } from "..";

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
  return (
    <div {...props}>
      <img src="logo.png" alt="Logo" />
      <div className="">Поиск</div>
      <Menu />
    </div>
  );
};
