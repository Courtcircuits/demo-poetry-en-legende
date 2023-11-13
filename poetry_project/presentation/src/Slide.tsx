import { ReactNode } from "react";
import "./Slide.css";

export default function Slide(props: { title: string, children: ReactNode }) {
  return (
    <div className="slide">
      <h1>{props.title}</h1>
      <div className="slide-content">
      {props.children}
      </div>
    </div>
  )
}
