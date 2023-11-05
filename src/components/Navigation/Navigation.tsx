import { Link } from "react-router-dom";
import { FC } from "react";
import { routes, routesConfig } from "../../routes";
import { useCurrentRoute } from "../../hooks/useCurrentRoute";
import cn from "classnames";

import s from "./Navigation.module.css";

interface IProps {
  className?: string;
}

export const Navigation: FC<IProps> = ({ className }) => {
  const currentRoute = useCurrentRoute();

  return (
    <ul className={cn(className, s.root)}>
      {routes.map((route) => (
        <li key={route}>
          <Link
            className={currentRoute.route === route ? s.linkActive : s.link}
            to={route}
          >
            {routesConfig[route].title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
