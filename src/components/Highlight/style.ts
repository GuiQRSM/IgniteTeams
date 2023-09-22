import styled from "styled-components/native";

export const Container = styled.View`
width: %;
margin: 32px 0;
`;

export const Title = styled.Text`
text-align: center;
font-size: ${(theme) => theme.FONT.SIZE.XL}px;
font-family: ${(theme) => theme.FONT.FAMILY.BOLD};
color: ${(theme) => theme.FONT.COLORS.WHITE}
`

export const Subtitle = styled.Text`
text-align: center;
font-size: ${(theme) => theme.FONT.SIZE.MD}px;
font-family: ${(theme) => theme.FONT.FAMILY.REGULAR};
color: ${(theme) => theme.FONT.COLORS.GRAY_300}
`