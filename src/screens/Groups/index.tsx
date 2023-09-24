import * as S from "./styles";
import { Header } from "@components/Header";
import { HighLight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";

export function Groups() {
  return (
    <S.Container>
      <Header showBackButton />
      <HighLight title="Turmas" subtitle="Jogue com a sua turma!" />
      <GroupCard title="Calma Cara!" />
    </S.Container>
  );
}
