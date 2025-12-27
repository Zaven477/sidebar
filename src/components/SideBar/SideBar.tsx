import { type ISideBarProps, type TCurrentTab, type TTabs } from "./types";
import { TabsChildrens } from "./Tabs";
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const SideBar = ({ setIsOpen }: ISideBarProps) => {
  const tabs: TTabs[] = [
    {
      id: "express",
      label: "Экспресс",
      children: [
        { id: "toys", label: "Игрушки" },
        { id: "furniture", label: "Мебель" },
        { id: "household", label: "Бытовая техника", path: "/" },
        { id: "petsupplies", label: "Зоотовары" },
        {
          id: "autoProducts",
          label: "Автотовары",
        },
      ],
    },
    {
      id: "shoes",
      label: "Обувь",
    },
    {
      id: "men",
      label: "Мужчинам",
      children: [
        { id: "trousers", label: "Брюки" },
        { id: "jeans", label: "Джинсы" },
        { id: "shirts", label: "Футболки", path: "/shirts" },
        { id: "shorts", label: "Шорты" },
      ],
    },
    {
      id: "house",
      label: "Дом",
    },
    {
      id: "newYear",
      label: "Новый год",
    },
    {
      id: "electronics",
      label: "Электроника",
    },
  ];

  const [activeTab, setActiveTab] = useState<TCurrentTab | null>(null);
  const navigate = useNavigate();

  const goToTab = (path?: string) => {
    if (path) {
      navigate(path);
      setActiveTab(null);
      setIsOpen(false);
    }
  };

  const enterTab = (id: TCurrentTab) => {
    setActiveTab(id);
  };

  const leaveTab = (arg: null) => {
    setActiveTab(arg);
  };

  return (
    <div className="w-62.5 bg-[#00BFFF] h-[calc(100vh-60px)] overflow-auto">
      {tabs.map((currentTab, index) => (
        <div
          className="flex items-center gap-3 hover:bg-[#1E90FF] hover:[&_.iconRight]:block"
          key={currentTab.id}
          onClick={() => goToTab(currentTab.path)}
          onMouseEnter={() => enterTab(currentTab.id)}
          onMouseLeave={() => leaveTab(null)}
        >
          <button
            className={`h-10 text-left pl-5 ${
              currentTab.path ? "cursor-pointer" : ""
            } text-[white] flex items-center`}
          >
            {currentTab.label}
            {currentTab.children && (
              <div className="iconRight hidden">
                <FaAngleRight size={20} color="white" className="ml-25" />
              </div>
            )}
          </button>
          {currentTab.children && currentTab.id === activeTab && (
            <div className={`fixed left-full top-${index * 10}`}>
              <TabsChildrens
                childrenTabs={currentTab.children}
                goToTab={goToTab}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
