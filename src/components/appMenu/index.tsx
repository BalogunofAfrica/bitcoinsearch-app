import { AppItem } from "./AppItem";
import { menuApps } from "./data";

export function AppMenu() {
  return (
    <div className="ml-10 mb-[1000px] bg-white py-5 rounded-2xl border border-custom-grey-light w-[402px] max-w-xs xl:max-w-[402px] max-h-[70vh] overflow-scroll">
      <AppItem {...menuApps[0]} />
      <div className="mx-7 my-3 border border-custom-grey-light"></div>
      {menuApps.slice(1).map((item) => (
        <AppItem key={item.title} {...item} />
      ))}
    </div>
  );
}
