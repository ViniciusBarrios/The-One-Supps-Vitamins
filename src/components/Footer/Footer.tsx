import { Container } from "./styles";

export default () => (
  <Container>
    <p>
      Copywriting © {new Date().getFullYear()} - The One Supps Suplementos LTDA
      - Todos os direitos reservados.
    </p>

    <p className="business_info">
      09.437.662/0001-06 - Rua Vergueiro 1353 BLOCO B SALA 1209 - 04.101-000 -
      Vila Mariana - São Paulo - SP
    </p>
  </Container>
);
