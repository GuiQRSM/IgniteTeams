import { Container, Title, Subtitle } from "./style";

type Props = {
  title: string;
  subtitle: string;
};

export function Highlight({ title, subtitle }: Props) {
  return (
    <Container>
      <Title>{Title}</Title>

      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}
