import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <header>
      <nav className="w-screen bg-zinc-50 shadow shadow-gray-600 flex py-4 justify-between items-center">
        <h1 className="pl-5 text-3xl">ShopPlan</h1>
        <a
          href="https://github.com/dylan-brackett/shopping-planner"
          target="_blank"
          rel="noreferrer"
        >
          <div className="text-5xl pr-5">
            <FontAwesomeIcon icon={faGithub} />
          </div>
        </a>
      </nav>
    </header>
  );
}
