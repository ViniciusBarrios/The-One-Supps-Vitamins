import { Container, Title, SubTitle, Button, WhatsappIcon } from "./styles";

export default () => (
  <Container>
    <Title>Quer falar com um de nossos atendentes?</Title>

    <SubTitle>
      Se você possui dúvidas e quer falar direto com um de nossos consultores,
      disponibilizamos um Whatsapp Exclusivo, para acessar clique no botão
      abaixo.
    </SubTitle>

    <Button
      target="_blank"
      href="https://wa.me/5511948277772?text=Ol%C3%A1,%20gostaria%20de%20tirar%20uma%20d%C3%BAvida.%20Poderiam%20me%20ajudar?"
    >
      <WhatsappIcon />
      Chamar no Whatsapp
    </Button>
  </Container>
);
