/* eslint-disable-next-line */
export interface ContentProps {
  children: React.ReactNode
}

export function Content(props: ContentProps) {
  return (
    <div className="grow p-10 pt-24 md:pt-40 min-h-[90vh] bg-red-50">
      {props.children}
    </div>
  );
}

export default Content;
