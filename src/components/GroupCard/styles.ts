import styled from "styled-components/native";
import {TouchableOpacity} from "react-native";

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
color: ${{theme} => theme.COLORS.GRAY_600}
`;