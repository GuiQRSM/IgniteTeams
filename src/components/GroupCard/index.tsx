import { Container, Icon, Title } from "./styles";

type Props = {
  title: String;
};

export function GroupCard({ title }: Props) {
  return (
    <Container>
      <Icon />
      <Title>{title}</Title>
    </Container>
  );
}
