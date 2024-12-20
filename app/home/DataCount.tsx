"use client";
import NumberTicker from "@/components/ui/number-ticker";
import React from "react";


const DataCount = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border sm:border-base-300  rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
            <div className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0">
              <h2 className="text-4xl font-bold flex flex-row">
              <NumberTicker value={10}/> +
              </h2>
              <p className="text-base-content text-base">Projects</p>
            </div>
            <div className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0">
              <h2 className="text-4xl font-bold flex flex-row">
              0-<NumberTicker value={1}/>
              </h2>
              <p className="text-base-content text-base">Experience (Years)</p>
            </div>
            <div className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0">
              <h2 className="text-4xl font-bold flex flex-row">
              <NumberTicker value={16}/>
              </h2>
              <p className="text-base-content text-base">Education (Years)</p>
            </div>
            <div className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0">
              <h2 className="text-4xl font-bold flex flex-row">
              <NumberTicker value={5}/>+
              </h2>
              <p className="text-base-content text-base">Certification</p>
            </div>
      </div>
    </div>
  );
};

export default DataCount;
