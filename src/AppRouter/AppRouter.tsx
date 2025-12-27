import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "../App";
import { MyComponent } from "../components/MyComponent/MyComponent";
import { Component } from "../components/Component/Component";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<MyComponent />} />
          <Route path="/shirts" element={<Component />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
