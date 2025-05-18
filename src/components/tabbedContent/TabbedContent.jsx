import React, { useState } from "react";
import Info from "../Info/Info";

function TabbedContent() {
  const [activeTab, setActiveTab] = useState("renting");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "renting":
        return <Info />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Historique de reservation</h1>
      <nav>
        <button onClick={() => handleTabClick("renting")}>Renting</button>
        <button onClick={() => handleTabClick("tab2")}>Tab 2</button>
        <button onClick={() => handleTabClick("tab3")}>Tab 3</button>
      </nav>
      <div>{renderTabContent()}</div>
    </div>
  );
}

export default TabbedContent;
