import { ReactElement } from "react";
import { Page1 } from "./pages/Page1/Page1";
import { Page2 } from "./pages/Page2/Page2";

interface IRoute {
  title: string;
  description: string;
  element: ReactElement;
}

export const routesConfig: Record<string, IRoute> = {
  ["/page1"]: {
    title: "Страница1",
    description: "Описание для страницы 1",
    element: <Page1 />,
  },
  ["/page2"]: {
    title: "Страница2",
    description: "Описание для страницы 2",
    element: <Page2 />,
  },
};

export const routes = Object.keys(routesConfig);
