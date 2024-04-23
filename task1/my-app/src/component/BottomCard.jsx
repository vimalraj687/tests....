import React from "react";
import imgPlaceHolders from "../assets/new2.jpg";
import ClientInfo from "./ClientInfo";
const BottomCard = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ClientInfo
          heading="Clients"
          clientsCount="7500+"
          description="Our track record speaks for itself – a vast clientele places their trust in us for their application processing needs."
        />
        <ClientInfo
          heading="Destinations"
          clientsCount="40+"
          description=" Our comprehensive visa consultancy services extend to over 40
            countries worldwide."
        />
        <ClientInfo
          heading="Happiness"
          imageSrc={imgPlaceHolders}
          description="HappinessFrom exhilarating desert safaris to romantic dinner cruises along
              the Dubai Creek,."
        />
      </div>
    </>
  );
};

export default BottomCard;
