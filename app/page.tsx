import dynamic from 'next/dynamic';
import { Box, Container, Stack, Typography } from "@mui/material";

// Dynamically import the components
const Navbar = dynamic(() => import("@/components/layouts/Navbar"));
const Footer = dynamic(() => import("@/components/layouts/Footer"));
const PhoneStyle = dynamic(() => import("@/components/layouts/PhoneStyle"));
const About = dynamic(() => import("@/components/sections/About"));
const App = dynamic(() => import("@/components/sections/Gallary"));
const Links = dynamic(() => import("@/components/sections/Links"));
const Services = dynamic(() => import("@/components/sections/Services"));

export default function Home() {
  return (
    <>
      <Navbar />
      <Box bgcolor="secondary.main" mt={8} py={10} id="home">
        <Container maxWidth="md">
          <Stack
            spacing={4}
            border={1}
            borderColor="primary.main"
            borderRadius={2}
            p={5}
            textAlign="center"
          >
            <Typography variant="h1" fontSize={40} color="primary.main">
              <strong>صباغ الكويت</strong>
            </Typography>
            <Typography color="#000" variant="body1" lineHeight={1.7}>
              مرحبًا بكم في خدمات <strong>صباغ الكويت</strong>، حيث نقدم خدمات صباغة
              متكاملة تتميز بالجودة والاحترافية. نحن متخصصون في تقديم حلول صباغة
              في الكويت عالية الجودة ونسعى دائمًا لتقديم أفضل خدمة لعملائنا.
            </Typography>
            <Typography color="#000" variant="body1" lineHeight={1.7}>
              فريقنا في <strong>صباغ الكويت</strong> يتألف من خبراء ذوي كفاءة عالية،
              والذين يستخدمون أحدث التقنيات لتقديم أفضل النتائج. نحن هنا لتحقيق
              رؤيتكم وتلبية احتياجاتكم بأعلى مستوى من الرضا.
            </Typography>
            <Typography color="#000" variant="body1" lineHeight={1.7}>
              نحن في <strong>صباغ الكويت</strong> نؤمن بأهمية التفاصيل وجودة العمل. لهذا،
              نحرص على توفير ألوان نابضة بالحياة وتجربة صباغة مميزة.
            </Typography>
          </Stack>
          <PhoneStyle />
        </Container>
      </Box>
      <About />
      <App />
      <Links />
      <Services />
      <Footer />
    </>
  );
}
