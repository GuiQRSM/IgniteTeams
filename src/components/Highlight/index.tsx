import { Container, Title, Subtitle } from "./styles";

type Props = {
  title: String;
  subtitle: String;
};

export function Highlight({ title, subtitle }: Props) {
  return (
    <Container>
      <Title>{Title}</Title>

      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}
