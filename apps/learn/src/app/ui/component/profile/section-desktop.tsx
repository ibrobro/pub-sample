import { ProfileSectionData } from "@/app/ui/component/profile/section";

import { kalam } from "@/app/ui/fonts";



export default function ProfileSectionDesktop({ title, text, image }: ProfileSectionData) {

  return (
    <div className="hidden md:grid grid-cols-3 items-start gap-6">
      <div>
        { image }
      </div>
      <div className="col-span-2">
        <h2 className={`${kalam.className} col-span-2 text-red text-4xl`}>{ title }</h2>
        <p>{ text }</p>
      </div>
    </div>
  )
}