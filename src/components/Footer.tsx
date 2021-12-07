import React, { ReactElement } from "react";

interface Props {}

export default function Footer({}: Props): ReactElement {
  return (
    <footer className="wrapper flex items-center md:justify-between w-full">
      <p className="text-lg font-medium">&copy; Saman Manesh 2021</p>
      <div className="ml-auto flex items-center space-x-3">
        <div className="w-8 h-8 rounded-full">
          <a
            href="https://www.linkedin.com/in/saman-manesh-96b257213/"
            target="_blank"
          >
            <img src="./social-github.svg" alt="github" />
          </a>
        </div>
        <div className="w-10 h-10 rounded-full hover:bg-red-400 hover:bg-opacity-5 grid place-items-center transition">
          <a href="https://github.com/samanmanesh" target="_blank">
            <img src="./social-linkedin.svg" alt="linkedin" />
          </a>
        </div>
      </div>
    </footer>
  );
}
