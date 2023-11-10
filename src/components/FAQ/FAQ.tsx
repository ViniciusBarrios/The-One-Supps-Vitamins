import CTA from "@components/CTA";

import { Wave } from "@statics/imgs/svgs";

import {
  Container,
  Wrapper,
  Title,
  SubTitle,
  AccordionRoot,
  AccordionItem,
  StyledTrigger,
  ArrowIcon,
  Content,
  ContentText,
  Overlay,
} from "./styles";

const questions = [
  {
    question: "O que são fitoquímicos?",
    answer:
      "Os fitoquímicos são compostos químicos produzidos pelas plantas, destinados a protegê-las contra infecções e consumo por insetos. Além disso, essas substâncias têm impacto direto na saúde humana, contribuindo para o controle do colesterol e da pressão arterial, fortalecendo a imunidade, regulando os hormônios e combatendo doenças como o câncer. Encontrados em frutas e verduras, seu consumo regular em quantidades adequadas pode modificar positivamente o metabolismo humano, prevenindo diversas enfermidades.",
  },
  {
    question: "Por que 3 cápsulas ao dia?",
    answer:
      "Diferente de TODOS os multivitaminicos tradicionais, Healthy Vitamins possui muita substância em cada unidade. Portanto, para chegar aos 100% da Ingestão Diária Recomendada, foram necessárias 3 cápsulas para disponibilizar toda a gama de minerais e vitaminas que o produto promete oferecer.",
  },
  {
    question: "Crianças também podem usar?",
    answer:
      "Sim! Mas antes converse com seu nutricionista. Toda pessoa - independente de idade -, que está carente do consumo de frutas e legumes na sua alimentação normal, deveria fazer suplementação de vitaminas e minerais. Como adultos consomem 3 cápsulas ao dia, crianças poderiam usar de 1 a 2 para suprir suas necessidades.",
  },
  {
    question: "Como posso ter certeza que os ingredientes são naturais?",
    answer:
      "Basta abrir o frasco para sentir o aroma da natureza! Melhor que isto: abra uma cápsula para ver de perto extratos orgânicos e sinta o aroma ainda mais concentrado de ingredientes naturais. Ou seja, o produto não possui característica de substâncias químicas como TODOS os demais do mercado de suplementos. Outro ponto a considerar é o nosso rótulo: as imagens de frutas e verduras na frente do produto são a prova de que os mesmos estão dentro do frasco. A Anvisa (agência de vigilância sanitária) só nos permitiu colocar os desenhos dos mesmos, pela presença real destes ingredientes em nossa fórmula. Além disso, existe ainda a garantia de fábrica.",
  },
  {
    question: "Qual o modo de uso?",
    answer:
      "Como nosso produto possui boa quantidade de elementos e para tanto a indicação de cápsulas diárias é superior a produtos similares do mercado, ingerir 1 cápsula por refeição (desejum, almoço e jantar), de modo que o aproveitamento, como energia e absorção, seja o maior e o melhor possível.",
  },
];

type AccordionTriggerProps = React.ComponentProps<typeof StyledTrigger>;

type AccordionContentProps = React.ComponentProps<typeof Content> & {
  borderBottom: boolean;
};

const AccordionTrigger = ({ children, ...props }: AccordionTriggerProps) => (
  <StyledTrigger {...props}>
    {children}

    <ArrowIcon aria-hidden />
  </StyledTrigger>
);

const AccordionContent = ({
  borderBottom = true,
  children,
  ...props
}: AccordionContentProps) => (
  <Content
    {...props}
    css={{ borderBottom: borderBottom ? "1px solid #E0E7ED" : "none" }}
  >
    <ContentText>{children}</ContentText>
  </Content>
);

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
        <Title>Perguntas Frequentes</Title>

        <SubTitle>
          Veja as principais perguntas de nossos clientes sobre o Healthy
          Vitamins
        </SubTitle>

        <AccordionRoot type="single" collapsible>
          {questions.map(({ question, answer }, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>{question}</AccordionTrigger>

              <AccordionContent borderBottom={index + 1 !== questions.length}>
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </AccordionRoot>

        <CTA
          css={{
            marginTop: "30px",

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
