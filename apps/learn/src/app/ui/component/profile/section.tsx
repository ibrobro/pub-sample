import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { BriefcaseIcon } from "@heroicons/react/24/solid";
import { kalam } from "@/app/ui/fonts";

export interface ProfileSectionData {
  title: string;
  text: string;
  image: React.ReactNode;
}


export default function ProfileSection({ title, text, image }: ProfileSectionData) {

  return (
    <div className="md:hidden mb-16">
      <div className="grid grid-cols-3 items-center">
        { image }
        <h2 className={`${kalam.className} col-span-2 text-red text-4xl`}>{ title }</h2>
      </div>
      <p className="mt-10">{ text }</p>
    </div>
  )
}