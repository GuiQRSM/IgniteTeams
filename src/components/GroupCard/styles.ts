import styled from "styled-components/native";
import {TouchableOpacity} from "react-native";
import {usersThree} from "phosphor-react-native";

export const Container = styled(TouchableOpacity)`
width: 100%;
height: 90px;
background-color: ${({theme}) => theme.COLORS.GRAY_600}
border-radius: 6px;
flex-direction: row;
align-items: center;
padding: 24px;
margin-botton: 12px;
`;

export Title = styled.Text`
font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
color: ${{theme} => theme.COLORS.GRAY_600};
font-family: ${(theme) => theme.FONT_FAMILY.REGULAR};
`;

export const Icon = styled(usersThree).attrs(({theme}) => ({
  size: 32.
  color: theme.COLORS.GREEN_700,
}))`
 margin-right: 20px;
`