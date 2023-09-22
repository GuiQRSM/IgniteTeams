import * as S from "./styles";
import { Header } from "@components/Header";
import { HighLight } from "@components/Highlight";

export function Groups() {
  return (
    <S.Container>
      <Header showBackButton />
      <HighLight title="Turmas" subtitle="Jogue com a sua turma!" />
    </S.Container>
  );
}
