import { kalam } from "@/app/ui/fonts";
import React from 'react';


export interface HomeInfoGridProps {
  title: string;
  image: React.ReactNode;
  content: string;
}


export default function HomeInfoGrid({title, content, image}: HomeInfoGridProps) {
  return (
    <div className="flex flex-col items-center mb-10">
      {image}
      <h3 className={`${kalam.className} text-2xl font-bold text-blue`}>{title}</h3>
      <p>
        {content}
      </p>
    </div>
  )
}