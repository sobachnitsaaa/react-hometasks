import { Header } from "./components/Header/Header";
import { HashRouter, Route, Routes } from "react-router-dom";
import { routes, routesConfig } from "./routes";
import { Layout } from "./components/Layout/Layout";

import "./App.css";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        {routes.slice(1).map((route) => (
          <Route
            key={route}
            path={route}
            element={
              <Layout title={routesConfig[route].description}>
                {routesConfig[route].element}
              </Layout>
            }
          />
        ))}
        {routes.length && (
          <Route
            path={"*"}
            element={
              <Layout title={routesConfig[routes[0]].description}>
                {routesConfig[routes[0]].element}
              </Layout>
            }
          />
        )}
      </Routes>
    </HashRouter>
  );
}

export default App;
