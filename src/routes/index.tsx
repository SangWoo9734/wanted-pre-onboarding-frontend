import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "../pages/sign_in";
import SignUp from "../pages/sign_up/SignUp";
import Todo from "../pages/todo";

function ProjectRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/todo" element={<Todo />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="*"
          element={
            <main style={{ fontSize: "3rem", padding: "1rem" }}>
              <p>404: NOT FOUND</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default ProjectRoutes;
