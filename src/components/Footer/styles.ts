import styled from "styled-components";
import { Link } from "react-router-dom";
import { Col, Row } from "antd"

export const FooterSection = styled("footer")`
  background: #f0ece2;
  padding: 2.5rem 0;
`;

export const Title = styled("h4")`
  font-size: 22px;
  text-transform: capitalize;
  color: #113946;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const NavLink = styled(Link)`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.625rem;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: #c7b198;
  }
`;

export const Extra = styled("section")`
  background: #dfd3c3;
  position: relative;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 2rem;
`;

export const Para = styled("div")`
  color: #113946;
  font-size: 14px;
  width: 70%;
`;

export const Large = styled(Link)`
  font-size: 16px;
  color: #113946;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-transform: capitalize;
  line-height: 24px;
  display: block;
  margin-bottom: 0.625rem;
  transition: all 0.3s ease-in-out;
  max-width: max-content;

`;

export const Chat = styled("p")`
  color: #113946;
  max-width: fit-content;
  border-bottom: 1px solid #c7b198;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-bottom: 1px solid #c7b198;
    color: #c7b198;
  }
`;

export const Empty = styled("div")`
  position: relative;
  height: 53px;
`;

export const LogoContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  max-width: 80%%;
  justify-content: center;


  @media only screen and (max-width: 1000px) {
    flex-direction: column-reverse;
    margin-bottom: 0;
    max-width: 100%;
    justify-content: center;
  }
`;

export const FooterContainer = styled("div")`
  display: flex;
  align-items: center;
  max-width: 50%;
  padding-left: 5%;

  a {
    &:hover,
    &:active,
    &:focus {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }
  }

  img {
    width: 30%;
    height: 30%;
  }

  @media only screen and (max-width: 768px) {
    padding-left: 0%;
    text-align: center;
    max-width: 100%;
  }
`;

export const Language = styled("h4")`
  font-size: 22px;
  text-transform: capitalize;
  color: #113946;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const Label = styled("label")`
  font-size: 22px;
  text-transform: capitalize;
  color: #113946;
  display: block;
  margin-bottom: 2rem;
  font-family: "Motiva Sans Bold", serif;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
    margin-bottom: 1rem;
  }
`;

export const LanguageSwitch = styled("div")`
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export const LanguageSwitchContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 85px;
`;

export const LocationContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 0.2rem; /* Adjust the gap between location items */
`;

export const LocationItem = styled("div")`
  color: #113946;
  font-size: 14px;
  line-height: 1.2;
`;

export const CustomCol = styled(Col)`
  max-width: 50%;
`;

export const CustomRow = styled(Row)`
  @media screen and (max-width: 414px) {
    justify-content: center
  }
`;

