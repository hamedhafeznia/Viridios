import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <ul>
        <li>
          <Link to="sdgs">Countries</Link>
        </li>
        <li>
            <Link to="markdown">Markdown</Link>
        </li>
        <li>
            <Link>Carbon Intensity</Link>
        </li>
      </ul>
    </div>
  );
};
