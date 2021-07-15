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
          <ServiceH2>Groupens</ServiceH2>
          <ServiceP>Bring a large group with you and get a discount</ServiceP>
        </ServiceCard>
        <ServiceCard>
          <ServiceIcon src={Icon2} />
          <ServiceH2>Take your pick</ServiceH2>
          <ServiceP>Pick from a large range of options</ServiceP>
        </ServiceCard>
        <ServiceCard>
          <ServiceIcon src={Icon3} />
          <ServiceH2>Easy Access</ServiceH2>
          <ServiceP>Rent from our website or mobile application</ServiceP>
        </ServiceCard>
      </ServiceWrapper>
    </ServiceContainer>
  );
};

export default Service;
