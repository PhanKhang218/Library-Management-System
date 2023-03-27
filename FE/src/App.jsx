import { Route, Router, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route?.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  route?.path == "/student/:id" ? (
                    <Page role={"teacher"} />
                  ) : (
                    <Page />
                  )
                }
              />
            );
          })}
        </Routes>
      </div>
    </>
  );
}

export default App;
