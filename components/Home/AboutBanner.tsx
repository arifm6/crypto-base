import React from "react";
import AnimatedCounter from "../Global/AnimatedCounter";

type Props = {};

export default function AboutBanner({}: Props) {
  return (
    <div className="w-full bg-primary text-primary-content  ">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-4 justify-evenly items-center h-[520px] sm:h-[216px] text-center ">
        <div className="space-y-2">
          <h1 className="text-5xl font-bold">
            $<AnimatedCounter from={0} to={320} />B
          </h1>
          <p className="font-light">Quarterly Volume Traded</p>
        </div>
        <div className="space-y-2">
          <h1 className="text-5xl font-bold">
            <AnimatedCounter from={0} to={97} />+
          </h1>
          <p className="font-light">Countries Supported</p>
        </div>
        <div className="space-y-2">
          <h1 className="text-5xl font-bold">
            <AnimatedCounter from={0} to={200} />
            M+
          </h1>
          <p className="font-light">Verified users</p>
        </div>
      </div>
    </div>
  );
}
