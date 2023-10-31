import { FC, PropsWithChildren } from "react";

import s from "./styles.module.css";

interface IProps {
  title: string;
}

export const Layout: FC<PropsWithChildren<IProps>> = ({ title, children }) => {
  return (
    <>
      <h2 className={s.title}>{title}</h2>
      <div className={s.container}>{children}</div>
    </>
  );
};
