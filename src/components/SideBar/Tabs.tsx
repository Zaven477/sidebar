import type { ITabsChildrensProps } from "./types";

export const TabsChildrens = ({
  childrenTabs,
  goToTab,
}: ITabsChildrensProps) => {
  return (
    <div className="bg-[#00BFFF] max-h-[calc(100vh-60px)] overflow-auto">
      {childrenTabs.map((child) => (
        <div
          className="flex items-center gap-3 w-62.5 hover:bg-[#1E90FF]"
          key={child.id}
          onClick={() => goToTab(child.path)}
        >
          <button
            className={`h-10 text-left ${
              child.path ? "cursor-pointer" : ""
            } text-[white] pl-5 flex items-center`}
          >
            {child.label}
          </button>
          {child.children && (
            <div className="fixed left-full top-0">
              <TabsChildrens childrenTabs={child.children} goToTab={goToTab} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
