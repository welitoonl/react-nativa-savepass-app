import styled from 'styled-components/native';
import { css } from 'styled-components';
import Feather from '@expo/vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  min-height: ${RFValue(80)}px;
  width: 100%;
  border-radius: 4px;
  margin-bottom: 8px;
  background-color: #ffffff;
`;

export const ShowPasswordButton = styled.TouchableOpacity``;

export const DeleteButton = styled.TouchableOpacity`
  margin-left: auto;
`;

export const Icon = styled(Feather).attrs({
  size: 24,
})`
  margin-right: 20px;
  margin-left: 20px;
  opacity: 0.6;
`;

export const PassData = styled.View`
  max-width: 243px;
`;

export const Title = styled.Text`
  margin-bottom: ${RFValue(4)}px;
  font-family: 'Rubik_400Regular';
  font-size: ${RFValue(13)}px;
  color: #888D97;
`;

export const Password = styled.Text`
  font-family: 'Rubik_500Medium';
  font-size: ${RFValue(15)}px;
  color: #6200ee;
`;

export const LoginData = styled.View`
  max-width: 243px;
`;

export const BoldTitle = styled.Text`
  margin-bottom: ${RFValue(4)}px;
  font-family: 'Rubik_500Medium';
  font-size: ${RFValue(15)}px;
  color: #3D434D;
`;

export const Email = styled.Text`
  font-family: 'Rubik_400Regular';
  font-size: ${RFValue(13)}px;
  color: #888D97;
`;
