import { LoginPage } from "@/presentation/pages";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Router(): React.ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/login' Component={LoginPage} />
      </Routes>
    </BrowserRouter>
  );
}
