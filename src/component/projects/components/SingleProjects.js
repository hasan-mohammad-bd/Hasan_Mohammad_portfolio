"use client";
import React from "react";
import { PinContainer } from "../../../components/ui/3d-pin";





export function SingleProjects({title, href, heading, description, img, technology}) {
  return ( 
    <div className="!h-full w-full flex items-center justify-center my-16">
      <PinContainer
        title={title}
        href={href}
        className="w-full h-full"
      >
        <div className="flex justify-between basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-full ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {heading}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              {description}
            </span>
            <div className="text-base !m-0 !p-0 font-normal ">
            Technology: <span className="text-slate-500">{technology}</span>
          </div>
          </div>

  
            <img src={img} className="rounded-xl  mt-3" alt="" />
    
        </div>
      </PinContainer>
    </div>
  );
}
