import React from "react";
import Icon1 from "../../images/svg-4.svg";
import Icon2 from "../../images/svg-5.svg";
import Icon3 from "../../images/svg-6.svg";
import {
  ServiceContainer,
  ServiceH1,
  ServiceWrapper,
  ServiceH2,
  ServiceCard,
  ServiceIcon,
  ServiceP,
} from "./ServiceElements";
const Service = ({ id }) => {
  return (
    <ServiceContainer id={id}>
      <ServiceH1>Our Service </ServiceH1>
      <ServiceWrapper>
        <ServiceCard>
          <ServiceIcon src={Icon1} />
          <ServiceH2>Reduce expenses </ServiceH2>
          <ServiceP>
            We help reduce your fees and increase your overall revenue
          </ServiceP>
        </ServiceCard>
        <ServiceCard>
          <ServiceIcon src={Icon2} />
          <ServiceH2>Virtual Offices</ServiceH2>
          <ServiceP>
            You can access our platform online anywhere in the world
          </ServiceP>
        </ServiceCard>
        <ServiceCard>
          <ServiceIcon src={Icon3} />
          <ServiceH2>Premium Benefits</ServiceH2>
          <ServiceP>
            Unlock our special membership card that returns 5% cash back
          </ServiceP>
        </ServiceCard>
      </ServiceWrapper>
    </ServiceContainer>
  );
};

export default Service;
