import { FC, PropsWithChildren } from "react";
import { Navigation } from "../Navigation/Navigation";
import { useCurrentRoute } from "../../hooks/useCurrentRoute";

import s from "./styles.module.css";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { title, description } = useCurrentRoute();

  return (
    <div className={s.root}>
      <Navigation className={s.navigation} />
      <div className={s.container}>
        <h2 className={s.title}>{description || title}</h2>
        {children}
      </div>
    </div>
  );
};
