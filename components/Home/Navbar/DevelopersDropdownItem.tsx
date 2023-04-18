import React from "react";

type Props = {
  url: string;
  icon: string;
  iconAlt: string;
  title: string;
  content: string;
};

export default function DevelopersDropdownItem({
  url,
  icon,
  iconAlt,
  title,
  content,
}: Props) {
  return (
    <li className="max-w-[350px]">
      <a href={url} className="group">
        <div className="flex gap-2 items-center">
          <img src={icon} alt={iconAlt} className="w-10 h-10" />
          <div className="flex flex-col">
            <h3 className="text-lg group-hover:text-primary">{title}</h3>
            <p className="text-md opacity-100 font-light group-hover:opacity-80">
              {content}
            </p>
          </div>
        </div>
      </a>
    </li>
  );
}
