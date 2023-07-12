import React from "react";
import * as S from "./thirdSectionStyle";
import Containers from "./containers";

export default function UltimaSecao() {
  return (
    <S.ThirdSectionDiv>
      <h1>O que nós oferecemos?</h1>
      <Containers
        title="Busque eventos sem sair do sofá"
        content="Com o
             UFBA-TICKETS, você pode achar qualquer evento de seu gosto. Selecione os filtros de sua 
            escolha e, com apenas alguns cliques, ache o rolê de sua escolha! Separe por localidade, tipo, avaliação, atrações, horário e muito mais"
        content2="Experiências para todos: com o plano grátis, você obtém a grande maioria da funcionalidades do app!"
      />
      <Containers
        title="Disponibilize rolês e eventos"
        content="Você tem um 
            espaço para disponibilizar, ou quer fazer algo mais caseiro, 
            mas conhecer novas pessoas? Com o UFBA-TICKETS, você pode marcar rolês, 
            marcar eventos, chamar atrações, e fazer festas personalizadas para todos os gostos! 
            Tenha seu perfil verificado por nossa equipe e comece já a ser um(a) organizador(a) de eventos. Quanto melhor for sua avaliação, mais seus eventos serão recomendados para os usuários"
        content2="Se conecte com outros organizadores para formar uma rede"
      />
      <h3>
        Gostou? Então baixe o app na sua loja de aplicativos e se divirta! :D
      </h3>
    </S.ThirdSectionDiv>
  );
}
