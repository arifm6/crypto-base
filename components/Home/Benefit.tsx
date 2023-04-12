import React, { ReactElement } from "react";

type Props = {
  icon: ReactElement;
  title: string;
  mainContent: string;
  mainLink: ReactElement;
};

export default function Benefit({ icon, title, mainContent, mainLink }: Props) {
  return (
    <div className="card  w-72 lg:w-96 bg-base-100  items-center ">
      <div className="text-5xl text-primary ">{icon}</div>
      <div className="card-body items-center text-center space-y-4">
        <h2 className="card-title">{title}</h2>
        <p>{mainContent}</p>
        <div className="card-actions justify-end pt-4 lg:pt-12">
          <div className="link link-primary">{mainLink}</div>
        </div>
      </div>
    </div>
  );
}
