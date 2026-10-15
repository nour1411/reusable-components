import type { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  image?: string;
  children?: ReactNode;
}

    
export default function Card({title, description, image, children }: CardProps) {
  return (
    <>
     <div className="w-72 rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      {image && (
        <img src={image} alt={title} className="h-40 w-full object-cover" />
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-gray-600">{description}</p>
        {children && <div className="mt-4">{children}</div>}
      </div>
    </div>
    </>
  )
}
