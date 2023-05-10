import React from "react";
import './Card.css';
import { PageTitle } from "../_partials/_PageTitle";



interface Step2Props {}

export const Step2: React.FC<Step2Props> = () => {
  return (
    <div>
        <PageTitle message ="2 / 5" />
        <PageTitle message ="Tell me about you" />
        <br></br>
        <br></br>
        <div className="container">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi risus metus, egestas tempus dui eu, accumsan egestas lacus. Nunc a leo ut velit porttitor mattis et eget nibh. Nunc eget congue sem. Aenean laoreet ultricies hendrerit. Morbi venenatis molestie sagittis. Nullam fringilla rutrum hendrerit. Sed a leo a turpis commodo viverra quis id quam. Nam libero nibh, malesuada non pharetra sit amet, vulputate ut leo. Phasellus nec dolor sem.</p>
        </div>
    </div>
  );
};