import { Menu } from "antd";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import { routes, routesConfig } from "../../routes";

export const Header = () => {
  const location = useLocation();

  const selectedKeys = useMemo(() => {
    const selectedKey =
      routes.find((route) => location.pathname.endsWith(route)) || routes[0];
    return [selectedKey];
  }, [location.pathname]);

  return (
    <Menu
      selectedKeys={selectedKeys}
      mode="horizontal"
      items={routes.map((route) => ({
        label: <Link to={route}>{routesConfig[route].title}</Link>,
        key: route,
      }))}
    />
  );
};
