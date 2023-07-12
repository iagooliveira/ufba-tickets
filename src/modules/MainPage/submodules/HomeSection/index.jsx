import * as S from "./style";
import Logo from "./party_photo.jpg";

const FirstSection = () => {
  return (
    <S.MainDiv id="homeSection">
      <S.LeftDiv>
        <h1>Quer sair para se divertir, mas não sabe quando, nem onde?</h1>
        <h2>
          Para isso, apresento-lhes o UFBA-TICKETS: O lugar onde você pode, com
          poucos cliques, encontrar festas, eventos, shows e locais para você
          fazer o seu rolê. Sabe aquele dia chato, que você não tem nada para
          fazer, mas quer sair, seja sozinho ou com alguns amigos? Então,
          encontre, com facilidade, novos ambientes, novas pessoas e toda uma
          vibe para você!
        </h2>
        <S.Button>
          <p>Saiba mais</p>
        </S.Button>
      </S.LeftDiv>
      <S.RightDiv>
        <img src={Logo} alt="festa" />
      </S.RightDiv>
    </S.MainDiv>
  );
};

export default FirstSection;
