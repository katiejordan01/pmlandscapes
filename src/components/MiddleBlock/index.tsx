import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";
import { SvgIcon } from "../../common/SvgIcon";

interface MiddleBlockProps {
  title: string;
  p1: string;
  button: string;
  id: string
  t: TFunction;
}


const MiddleBlock = ({ title, p1, button, id, t }: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <MiddleBlockSection>
        <Row 
          justify="center" 
          align="middle"
          id={id}
          >
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
            <SvgIcon src={"aboutme.png"} width="35%" height="20%" style={{ borderRadius: "50%" }}/>
              <h6>{t(title)}</h6>
              <Content>{t(p1)}</Content>
              {button && (
                <Button name="submit" onClick={() => scrollTo("media")}>
                  {t(button)}
                </Button>
              )}
            </Col>
          </ContentWrapper>
        </Row>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
