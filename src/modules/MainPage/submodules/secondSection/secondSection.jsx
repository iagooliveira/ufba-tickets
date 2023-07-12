import * as S from "./secondSectionStyles";

export default function SecondSection() {
  return (
    <S.SecondSectionDiv id="sobreNos">
      <h1>Sobre o UFBA-TICKETS</h1>
      <S.InsideDiv>
        <S.Div1>
          <p>Um App para você:</p>
        </S.Div1>
        <S.Div2>
          <h2>
            O UFBA-TICKETS surgiu com a motivação de proporcionar momentos
            únicos para todos os tipos de público, seja ele infantil, adulto,
            experiente, mas principalmente, para o público universitário...
            Nosso objetivo é conectar pessoas e experiências para proporcionar
            momentos de diversão e alegria. A ideia nasceu em 2023 e já está
            sendo colocada em prática! Encontre agora mesmo o seu rolê
            preferido! Ou, se não sabe o que fazer, tente algo novo :D
          </h2>
        </S.Div2>
      </S.InsideDiv>
    </S.SecondSectionDiv>
  );
}
