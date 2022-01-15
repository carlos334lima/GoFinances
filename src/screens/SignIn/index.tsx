import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";

//@libraries
import { RFValue } from "react-native-responsive-fontsize";

//@assets
import AppleSvg from "../../assets/imgs/facebook.svg";
import GoogleSvg from "../../assets/imgs/google.svg";
import LogoSvg from "../../assets/imgs/logo.svg";

//@components
import { SignInSocialButton } from "../../components/SignInSocialButton";

//@utils
import {
  configureSignInGoogle,
  handleSignInFb,
  handleSignInWithGoogle,
} from "../../utils/SocialMidia";
import { loadUser } from "../../utils/Storage";

//@styles
import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper,
} from "./styles";


export function SignIn() {
  

  

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg width={RFValue(120)} height={RFValue(68)} />

          <Title>
            Controle suas {"\n"}
            finanças de forma {"\n"}
            muito simples
          </Title>
        </TitleWrapper>

        <SignInTitle>
          Faça seu login com {"\n"}
          uma das contas abaixo
        </SignInTitle>
      </Header>

      <Footer>
        <FooterWrapper>
          <SignInSocialButton
            title="Entrar com Google"
            svg={GoogleSvg}
            onPress={handleSignInWithGoogle}
          />

         {/*  <SignInSocialButton
            title="Entrar com Facebook"
            svg={AppleSvg}
            onPress={handleSignInFb}
          /> */}
        </FooterWrapper>
      </Footer>
    </Container>
  );
}
