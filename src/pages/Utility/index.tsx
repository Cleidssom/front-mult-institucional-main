import Header from "../../components/Header";
import Main from "../../components/Main";
import Card from "../../components/Card";

import { useEffect, useState } from "react";
import { IHeaderProps } from "../../Interfaces";
import { UtilityService } from "../../helpers/Services/UtilityService";


const utilityService = new UtilityService();

const Utility = ({ isOpen, setIsOpen, onClose }: IHeaderProps) => {
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    utilityService.getAll().then((response) => {
      setCards(response.data);
    });
  });
  
  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} onClose={onClose} />
      <Main>
        {cards.map((element) => {
          return <Card content={element} />;
        })}
      </Main>
    </>
  );
};

export default Utility;