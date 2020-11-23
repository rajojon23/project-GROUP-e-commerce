import React from "react";

export const ItemsContext = React.createContext(null);

export const ItemsProvider = ({ children }) => {
  const [loadingItems, setLoadingItems] = React.useState("loading");
  const [loadingCompanies, setLoadingCompanies] = React.useState("loading");
  const [items, setItems] = React.useState([]);
  const [companies, setCompanies] = React.useState([]);

  React.useEffect(() => {
    fetch("/allitems")
      .then((res) => res.json())
      .then((resp) => {
        setItems([...resp.data]);
        setLoadingItems("loaded");
      })
      .catch((err) => {
        setLoadingItems("error");
        console.log(err);
      });

    fetch("/companies")
      .then((res) => res.json())
      .then((resp) => {
        setCompanies([...resp.data]);
        setLoadingCompanies("loaded");
      })
      .catch((err) => {
        setLoadingCompanies("error");
        console.log(err);
      });

    return function cleanup() {
      setLoadingItems("loading");
      setLoadingCompanies("loading");
    };
  }, []);

  return (
    <ItemsContext.Provider
      value={{
        loadingItems,
        loadingCompanies,
        items,
        companies,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
