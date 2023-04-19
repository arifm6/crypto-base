import React, { useMemo } from "react";
import DevelopersDropdownItem from "./DevelopersDropdownItem";
import developersData from "./developersData.json";
type Props = {};

export default function DevelopersDropdown({}: Props) {
  const apiData = useMemo(() => {
    return developersData.apiData;
  }, []);
  const techData = useMemo(() => developersData.techData, []);
  const otherData = useMemo(() => developersData.otherData, []);
  return (
    <div className="developers-dropdown-grid gap-6 ">
      <div className="flex flex-col gap-6 row-span-5">
        <h2 className="text-xl text-center font-medium ">APIs</h2>
        <ul className="flex flex-col gap-6">
          {apiData.map((apiItem) => {
            return (
              <DevelopersDropdownItem
                url={apiItem.url}
                icon={apiItem.icon}
                iconAlt={apiItem.iconAlt}
                title={apiItem.title}
                content={apiItem.content}
              />
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col gap-6 row-span-5">
        <h2 className="text-xl text-center font-medium ">Tech Used</h2>
        <ul className="flex flex-col gap-6">
          {techData.map((techItem) => {
            return (
              <DevelopersDropdownItem
                url={techItem.url}
                icon={techItem.icon}
                iconAlt={techItem.iconAlt}
                title={techItem.title}
                content={techItem.content}
              />
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col gap-6 row-span-5">
        <h2 className="text-xl text-center font-medium ">Other Tools</h2>
        <ul className="flex flex-col gap-6">
          {otherData.map((otherItem) => {
            return (
              <DevelopersDropdownItem
                key={otherItem.title}
                url={otherItem.url}
                icon={otherItem.icon}
                iconAlt={otherItem.iconAlt}
                title={otherItem.title}
                content={otherItem.content}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
