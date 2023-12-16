import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import {
  FooterSection,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Chat,
  LocationContainer,
  LocationItem,
  FooterContainer,
  Language,
  CustomCol,
  CustomRow
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}


const Footer = ({ t }: { t: TFunction }) => {
  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <CustomRow >
            <CustomCol>
              <Language>{t("Contact")}</Language>
              <Para>
                {t(`Do you have any questions? Feel free to reach out.`)}
              </Para>
              <a href="mailto:pmlscapes@gmail.com">
                <Chat>{t(`Let's Chat`)}</Chat>
              </a>
            </CustomCol>
            <CustomCol>
              <Language>{t("Locations")}</Language>
              <LocationContainer>
                <LocationItem>Snellville, GA</LocationItem>
                <LocationItem>Cumming, GA</LocationItem>
                <LocationItem>Dawsonville, GA</LocationItem>
              </LocationContainer>
            </CustomCol>
          </CustomRow>
        </Container>
      </FooterSection>
      <Extra>
      <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="tan-logo.png"
                  aria-label="homepage"
                  width="80%"
                  height="80%"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://www.instagram.com/pmlscapes/"
                src="instagram.png"
              />
              <SocialLink
                href="https://www.facebook.com/PMLscapes"
                src="facebook.png"
              />
              <SocialLink
                href="https://www.youtube.com/@justinjordan6109"
                src="youtube.png"
              />
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
