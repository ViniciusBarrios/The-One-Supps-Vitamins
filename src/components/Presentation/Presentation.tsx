import CTA from "@components/CTA";

import { Wave } from "@statics/imgs/svgs";

import {
  Container,
  Wrapper,
  ProductImage,
  Stamp,
  CheckIcon,
  Overlay,
} from "./styles";

const productInformations = [
  "26 Ingredientes",
  "Vitaminas",
  "Minerais",
  "Único do mercado com fitoquímicos",
];

const benefits = [
  "Apoio à saúde geral: A combinação de vitaminas e minerais fornece suporte abrangente para a saúde do organismo como um todo.",
  "Reforço do sistema imunológico",
  "Saúde óssea: Prevenção da osteoporose e manutenção da densidade óssea.",
  "Função cardíaca",
  "Saúde dos olhos",
  "Metabolismo energético",
  "Antioxidante",
  "Função da tireoide",
  "Saúde da pele, cabelo e unhas",
  "Regulação dos níveis de glicose",
];

export default () => (
  <>
    <Container>
      <Wrapper>
        <div className="product">
          <ProductImage
            alt="Apresentação do Produto"
            src="imgs/presentation.png"
          />

          <div className="product_informations">
            <Stamp
              width={110}
              height={110}
              alt="Extratos Orgânicos"
              src="/imgs/stamps/organic-extracts.png"
            />

            <ul>
              {productInformations.map((text, index) => (
                <li key={index}>
                  <CheckIcon css={{ fontSize: "20px" }} />

                  <p>{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="informations">
          <h1>
            O <span>poder de uma alimentação saudável</span> em cápsulas...
          </h1>

          <ul>
            {benefits.map((text, index) => (
              <li key={index}>
                <CheckIcon css={{ fontSize: "22px" }} />

                <p>{text}</p>
              </li>
            ))}
          </ul>

          <CTA
            css={{
              marginTop: "30px",

              "@bq-700": {
                fontSize: "17px",
              },
            }}
          >
            Eu quero esses benefícios!
          </CTA>
        </div>
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
