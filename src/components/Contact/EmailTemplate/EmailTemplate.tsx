import type { ContactFormValues } from '@/types/types';
import {
  Body,
  Head,
  Hr,
  Html,
  Link,
  Section,
  Text
} from "@react-email/components";

export const EmailTemplate = (data: ContactFormValues) => (
  <Html style={main}>
    <Head>
      <title style={text}>CLIENT MAIL!</title>
    </Head>
    <Body style={container}>
      <Section style={logocontainer}>
        <Link style={logo} href='https://www.catevikawebdev.com/' >
          Catevika&nbsp;Web&nbsp;Dev
        </Link>
      </Section>
      <Hr style={hrstyle} />
      <Section>
        <Text style={text}>Name: <span style={bold}>{data.name}</span></Text>
        <Text style={text}>Sender Email: <span style={bold}>{data.email}</span></Text>
      </Section>
      <Hr style={hrstyle} />
      <Section style={sectionstyle}>
        <Text style={textwhite}>{data.message}</Text>
      </Section>
      <Hr style={hrstyle} />
      <Text style={footer}>Catevika Web Dev - 128 Rue de la Boétie - 75008 Paris - FRANCE - © Catevika Web Dev 2024</Text>
    </Body>
  </Html>
);

const main = {
  fontFamily: "oxygen, sans-serif",
  fontSize: "14px",
  fontWeight: "400",
};

const logocontainer = {
  height: "100px",
  margin: "2rem 0 1rem",
  backgroundColor: "#000529",
};

const logo = {
  color: "#f2f2f2",
  fontSize: '2rem',
  fontWeight: '700',
  marginLeft: '2rem',
  paddingLeft: '1rem',
  lineHeight: '1.5rem',
  borderLeft: '3px solid #22ece5',
};

const text = {
  fontSize: "14px",
  color: "#000529",
};

const textwhite = {
  fontSize: "14px",
  color: "#f2f2f2",
};

const bold = {
  fontSize: "14px",
  fontWeight: "700",
  color: "#000529",
};

const hrstyle = {
  borderBottom: '1px solid #000529',
};

const container = {
  fontSize: "14px",
  color: "#000529",
  paddingLeft: "2rem",
  paddingRight: "2rem",
  margin: "0 auto",
  backgroundColor: "#f2f2f2",
};

const sectionstyle = {
  fontSize: "14px",
  color: "#f2f2f2",
  padding: "2rem",
  backgroundColor: "#000529",
};

const footer = {
  fontSize: "10px",
  color: "#000529",
  margin: "0 auto",
};