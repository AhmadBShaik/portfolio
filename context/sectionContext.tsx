"use client";
import {
  Dispatch,
  SetStateAction,
  createContext,
  ReactNode,
  useState,
  useContext,
} from "react";

interface SectionContextProps {
  sectionName: string;
  setSectionName: Dispatch<SetStateAction<string>>;
}

const SectionContext = createContext<SectionContextProps>({
  sectionName: "",
  setSectionName: () => "",
});

export const SectionContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [sectionName, setSectionName] = useState<string>("");
  return (
    <SectionContext.Provider value={{ sectionName, setSectionName }}>
      {children}
    </SectionContext.Provider>
  );
};

export const useSectionContext = () => {
  const context = useContext(SectionContext);
  if (!context) throw new Error("Error while initializing context!");
  return context;
};
