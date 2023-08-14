import React from "react";
import { Header2 } from "../components/Header2";

export default function layout({ children }) {
  return (
    <div>
      <Header2 />
      {children}
    </div>
  );
}
