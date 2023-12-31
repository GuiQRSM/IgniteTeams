import { Container } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";

export function Groups() {
  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma!" />
      <GroupCard title="Calma Cara!" />
    </Container>
  );
}
