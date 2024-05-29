import { kalam } from '@/app/ui/fonts';


/* eslint-disable-next-line */
export interface HeaderSocmedButtonsProps {}


export function HeaderSocmedButtons(props: HeaderSocmedButtonsProps) {
  return (
    <div className="hidden md:block h-5">
      <h2 className={`${kalam.className} text-yellow text-lg font-300`}>Your Social Media Links</h2>
    </div>
  );
}

export default HeaderSocmedButtons;
