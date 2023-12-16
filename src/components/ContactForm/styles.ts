import styled from "styled-components";

export const ContactContainer = styled("div")`
  padding: 5rem 0;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`;

export const FormGroup = styled("form")`
  width: 100%;
  max-width: 520px;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`;

export const Span = styled("span")`
  display: block;
  font-weight: 600;
  color: #c7b198;
  height: 0.775rem;
  padding: 0 0.675rem;
`;

export const ButtonContainer = styled("div")`
  display: flex;
  justify-content: flex-end; /* Aligns content to the right */
  align-items: center;
  height: 100%;
  margin-right: auto; /* Pushes the button to the right as much as possible */
  max-width: 50%; /* Adjust this value to control the button's width */

  @media only screen and (max-width: 768px) {
    max-width: 100%; /* Set to 100% on smaller screens */
    justify-content: center;
    padding-top: 0.75rem;
  }
`;

export const ContactInfo = styled.p`
  font-size: 20px;
  color: #113946;
  margin-bottom: 10px;
  p {
    margin: -5px 0; /* Adjust the margin as needed */
  }

  a {
    text-decoration: underline;
    color: #113946;
    transition: color 0.3s ease-in-out;

    &:hover {
      text-decoration: underline;
      color: #c7b198; /* Remove !important */
    }
  }
`;
