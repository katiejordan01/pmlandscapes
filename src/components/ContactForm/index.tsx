import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide} from "react-awesome-reveal";
import { ContactProps } from "./types";
import { Button } from "../../common/Button";
import Block from "../Block";
import { ContactContainer, ButtonContainer, ContactInfo } from "./styles";

const Contact = ({ title, content, id, t }: ContactProps) => {
  const handleEmailClick = () => {
    const jobName = 'Consultation Request: [Service/Job Name]'; // Replace with actual job name
    const email = 'pmlscapes@gmail.com'; // Replace with your email

    const subject = encodeURIComponent(jobName);
    const body = encodeURIComponent('Provide job details here...');

    const mailToLink = `mailto:${email}?subject=${subject}&body=${body}`;

    window.location.href = mailToLink;
  };

  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left" triggerOnce>
            <Block title={title} content={content} />
            <ContactInfo>
              <p>
              Email: <a href="mailto:pmlscapes@gmail.com?subject=Consultation Request: [Service/Job Name]&body=Provide job details here..." >PMLscapes@gmail.com</a>
              </p>
              <br />
              <p>
              Call: <a href="tel:6783828164">678-382-8164</a>
              </p>
            </ContactInfo>
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <ButtonContainer>
            <Button name="submit" onClick={handleEmailClick}>{t("Email")}</Button>
          </ButtonContainer>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
