import React, { useState, useContext } from "react";
export const CaptainDataContext = React.createContext();

const CaptainContent = ({ children }) => {
  const [captain, setCaptain] = useState({
    fullname: { firstname: "", lastname: "" },
    email: "",
  });
  return (
    <div>
      <CaptainDataContext.Provider value={{ captain, setCaptain }}>
        {children}
      </CaptainDataContext.Provider>
    </div>
  );
};

export default CaptainContent;
