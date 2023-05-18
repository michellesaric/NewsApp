import React, { createContext, useState } from "react";

type SearchContextType = {
  searchText: string | null;
  setSearchText: React.Dispatch<React.SetStateAction<string | null>>;
};

export const SearchContext = createContext<SearchContextType>({
  searchText: "",
  setSearchText: () => {},
});

const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [searchText, setSearchText] = useState<string | null>("");

  return (
    <SearchContext.Provider value={{ searchText, setSearchText }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
