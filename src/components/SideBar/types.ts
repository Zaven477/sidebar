import type { Dispatch, SetStateAction } from "react";

export const Tabs = {
  Express: "express",
  Shoes: "shoes",
  Men: "men",
  House: "house",
  NewYear: "newYear",
  Electronics: "electronics",
  Toys: "toys",
  Furniture: "furniture",
  Products: "products",
  Trousers: "trousers",
  Jeans: "jeans",
  Alcohol: "Alcohol",
  DeliciousGifts: "deliciousGifts",
  Household: "household",
  Рetsupplies: "petsupplies",
  АutoProducts: "autoProducts",
  Shirts: "shirts",
  Shorts: "shorts",
} as const;

export type TCurrentTab = (typeof Tabs)[keyof typeof Tabs];

export type TTabs = {
  id: TCurrentTab;
  label: string;
  path?: string;
  children?: TTabs[];
};

export interface ITabsChildrensProps {
  childrenTabs: TTabs[];
  goToTab: (path?: string) => void;
}

export interface ISideBarProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
