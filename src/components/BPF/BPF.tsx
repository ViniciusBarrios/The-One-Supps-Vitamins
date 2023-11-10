import CTA from "@components/CTA";

import { Wave } from "@statics/imgs/svgs";

import {
  Container,
  Wrapper,
  Title,
  Content,
  Image,
  Description,
  Overlay,
} from "./styles";

export default () => (
  <>
    <Wave
      css={{
        transform: "rotateX(180deg)",
        marginBottom: "-5px",
      }}
    />

    <Container>
      <Wrapper>
        <Title>Boas Práticas de Fabricação</Title>

        <Content>
          <Image alt="Boas Práticas de Fabricação" src="/imgs/bpf.png" />

          <Description>
            Healthy Vitamins: Cápsulas de saúde infundidas com as Boas Práticas
            de Fabricação. Cada comprimido é o resultado de rigorosos padrões de
            qualidade, oferecendo nutrição confiável para o seu bem-estar
            diário.
          </Description>
        </Content>

        <CTA
          css={{
            "@bq-700": {
              fontSize: "17px",
            },
          }}
        >
          Eu quero Healthy Vitamins!
        </CTA>
      </Wrapper>

      <Overlay />
    </Container>

    <Wave
      css={{
        marginTop: "-1px",
      }}
    />
  </>
);
