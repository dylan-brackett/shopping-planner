import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <header>
      <nav className="w-screen bg-red-500 flex py-4 justify-between items-center">
        <h1 className="pl-5 text-3xl">ShopTrack</h1>
        <a href="https://github.com/dylan-brackett/shopping-planner">
          <div className="text-5xl pr-5">
            <FontAwesomeIcon icon={faGithub} />
          </div>
        </a>
      </nav>
    </header>
  );
}
