import Head from "next/head";
import Image from "next/image";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { theme } from "../styles/styled-comp/theme";
import { GlobalStyles } from "../styles/styled-comp/GlobalStyles";
import TestResponsive from "../components/testResponsive/TestResponsive";
import { device } from "../styles/styled-comp/media-querys";

const LogoTheWay = styled.img`
  width: 43rem;

  ${device.phone} {
    width: 33rem;
  }

  ${device.miniPhone} {
    width: 29rem;
  }
`;

const ParentBox = styled.div`
  display: grid;
  /*  grid-template-columns: minmax(91rem, 2fr) min-content; */
  grid-template-columns: minmax(91rem, 2fr);
  align-content: stretch;
  align-items: stretch;
  position: relative;

  ${device.betweenPcAndTabPort2} {
    grid-template-columns: 1fr;
  }
`;

const Box1 = styled.div`
  display: grid;
  grid-template-rows: 100vh;

  ${device.betweenPcAndTabPort2} {
    grid-row: 2 / 3;
    grid-template-rows: min-content;
  }
`;

const Box2 = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  justify-content: center;
  align-items: center;
  position: absolute;
  /*   backdrop-filter: blur(30px); */
  top: 0;
  left: 0;
`;

const WBackgroung = styled.figure`
  display: grid;
  grid-template-rows: minmax(min-content, 100vh);
  justify-self: start;

  ${device.betweenPcAndTabPort2} {
    grid-row: 2 / 3;
  }

  img {
    width: 100%;
    height: 100%;
    display: inline-block;
    justify-self: start;
    object-fit: contain;
    object-position: left;
  }
`;

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <Head>
          <title>The Way Brand Strategy & Design Studio</title>
          <meta
            name="description"
            content="The Way Brand Strategy & Design Studio"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <TestResponsive />
          <div className="content">
            <ParentBox className="parent-box">
              {/*   <Box1>
                <WBackgroung className="w-bg">
                  <img src="/w-bg1.svg" alt="Brand Strategy & Design Studio" />
                </WBackgroung>
              </Box1>
 */}
              <Box2>
                <LogoTheWay
                  src="/logo-circle-1.svg"
                  alt="Logo The Way Brand Strategy & Design Studio"
                />
              </Box2>

              {/*  <Box2 className="box-1">
                <LogoTheWay src="/logo-circle-1.svg" alt="Logo The Way" />
              </Box2> */}
            </ParentBox>
          </div>
        </main>
      </ThemeProvider>
    </>
  );
}
