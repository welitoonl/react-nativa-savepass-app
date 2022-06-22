import React from 'react';
import { useNavigation } from '@react-navigation/native';


import {
  Container,
  AboutUser,
  Avatar,
  TextContainer,
  HelloMessage,
  BoldText,
  SecondaryMessage,
  AddButton,
  Icon,
  BackButton,
  Title,
} from './styles';
import { StackNavigationProp } from '@react-navigation/stack';

interface HeaderProps {
  user?: {
    name: string;
    avatar_url: string;
  }
}

type RootStackParamList = {
  Home: undefined;
  RegisterLoginData: undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList>;

export function Header({ user }: HeaderProps) {
  const { navigate, goBack } = useNavigation<NavigationProps>();

  function handleAddPass() {
    navigate('RegisterLoginData');
  }

  return (
    <Container
      hasUserData={!!user}
      style={{
        ...(user
          ? {
            backgroundColor: '#6200ee'
          }
          : {
            backgroundColor: '#38077d'
          })
      }}
    >
      {user ? (
        <>
          <AboutUser>

            <TextContainer>
              <HelloMessage>
                Falaa, <BoldText>{user.name}</BoldText>
              </HelloMessage>

              <SecondaryMessage>
                Nunca mais esqueça as suas senhas!
              </SecondaryMessage>
            </TextContainer>
          </AboutUser>

          <AddButton onPress={handleAddPass}>
            <Icon
              name="plus"
              color="#ffffff"
              size={24}
            />
          </AddButton>
        </>
      ) : (
        <>
          <BackButton onPress={goBack}>
            <Icon
              name="chevron-left"
              color="#ffffff"
              size={28}
            />
          </BackButton>

          <Title>Salvar uma Senha</Title>
        </>
      )}
    </Container>
  );
}