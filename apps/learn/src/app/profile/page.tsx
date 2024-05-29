import ProfileSection from "../ui/component/profile/section";
import ProfileSectionDesktop from "../ui/component/profile/section-desktop";
import Cog6ToothIcon from "@heroicons/react/24/solid/esm/Cog6ToothIcon";
import BriefcaseIcon from "@heroicons/react/24/solid/esm/BriefcaseIcon";


export default function Page() {
  return (
    <div className="grid md:grid-cols-3 gap-4 mt-10">
      <ProfileSection 
        title="How we built this?"
        text="asdfasd"
        image={ <Cog6ToothIcon className="size-20 text-red" /> }
      />
      <ProfileSectionDesktop
        title="How we built this?"
         text="asdf" 
         image={ <Cog6ToothIcon className="size-40 text-red" /> }
       />
      <ProfileSection 
        title="Ingredients"
        text="asd"
        image={ <BriefcaseIcon className="size-20 text-red" /> }
      />
      <ProfileSectionDesktop
        title="Ingredients"
         text="asdf" 
         image={ <BriefcaseIcon className="size-40 text-red" /> }
       />
       <ProfileSection 
        title="Ingredients"
        text="asd"
        image={ <BriefcaseIcon className="size-20 text-red" /> }
      />
      <ProfileSectionDesktop
        title="Ingredients"
         text="asd" 
         image={ <BriefcaseIcon className="size-40 text-red" /> }
       />
    </div>
  )
}
