import CTA from "@components/CTA";

import Ingredient from "./Ingredient";
import { Container, Title, SubTitle, Wrapper } from "./styles";

const ingredients = [
  {
    image: "/imgs/ingredients/1.png",
    name: "Acerola",
    scientificName: "Malpighia Emarginata",
    benefits: ["Reforço imunológico.", "Ação antioxidante."],
  },
  {
    image: "/imgs/ingredients/2.png",
    name: "Tomate",
    scientificName: "Solanum Lycopersicum",
    benefits: [
      "Suporte à saúde cardiovascular.",
      "Potencial redução do risco de câncer.",
    ],
  },
  {
    image: "/imgs/ingredients/3.png",
    name: "Cranberry",
    scientificName: "Vaccinium Macrocarpon",
    benefits: ["Suporte à saúde do trato urinário.", "Ação antioxidante."],
  },
  {
    image: "/imgs/ingredients/4.png",
    name: "Açaí",
    scientificName: "Euterpe Oleracea",
    benefits: ["Alto teor de antioxidantes.", "Energia."],
  },
  {
    image: "/imgs/ingredients/5.png",
    name: "Romã",
    scientificName: "Punica Granatum",
    benefits: ["Proteção das células.", "Possível efeito anticancerígeno."],
  },
  {
    image: "/imgs/ingredients/6.png",
    name: "Blueberry",
    scientificName: "Vaccinium Corymbosum",
    benefits: ["Melhora da saúde cognitiva.", "Ação antioxidante."],
  },
  {
    image: "/imgs/ingredients/7.png",
    name: "Brócolis",
    scientificName: "Brassica Oleracea",
    benefits: ["Possível prevenção de câncer.", "Nutrientes essenciais."],
  },
  {
    image: "/imgs/ingredients/8.png",
    name: "Espinafre",
    scientificName: "Spinacia Oleracea",
    benefits: ["Apoio à saúde ocular e óssea.", "Rico em ferro."],
  },
  {
    image: "/imgs/ingredients/9.png",
    name: "Couve",
    scientificName: "Brassica Oleracea",
    benefits: [
      "Apoio à coagulação sanguínea e saúde óssea.",
      "Fonte de vitamina K.",
    ],
  },
  {
    image: "/imgs/ingredients/10.png",
    name: "Beterraba",
    scientificName: "Beta Vulgaris",
    benefits: [
      "Melhora do desempenho físico (nitratos).",
      "Potencial controle da pressão arterial.",
    ],
  },
  {
    image: "/imgs/ingredients/11.png",
    name: "Cenoura",
    scientificName: "Daucus Carota",
    benefits: ["Benefícios para a saúde dos olhos.", "Apoio à saúde geral."],
  },
  {
    image: "/imgs/ingredients/12.png",
    name: "Abóbora",
    scientificName: "Cucurbita Pepo",
    benefits: ["Suporte à saúde ocular e digestão.", "Rica em vitamina A."],
  },
  {
    image: "/imgs/ingredients/13.png",
    name: "Uva",
    scientificName: "Vitis Vinifera",
    benefits: [
      "Apoio à saúde cardíaca (resveratrol).",
      "Potencial efeito antienvelhecimento.",
    ],
  },
  {
    image: "/imgs/ingredients/14.png",
    name: "Maçã",
    scientificName: "Malus Domestica",
    benefits: ["Melhora da saúde do coração e digestão."],
  },
  {
    image: "/imgs/ingredients/15.png",
    name: "Repolho",
    scientificName: "Brassica Oleracea",
    benefits: ["Suporte à saúde digestiva e imunológica."],
  },
  {
    image: "/imgs/ingredients/16.png",
    name: "Cebola",
    scientificName: "Allium Cepa",
    benefits: [
      "Benefícios para a saúde cardíaca e imunidade.",
      "Ação antioxidante.",
    ],
  },
];

export default () => (
  <Container>
    <Title>Dentro de cada cápsula você encontrará:</Title>

    <SubTitle>16 ingredientes naturais concentrados...</SubTitle>

    <Wrapper>
      {ingredients.map(({ image, name, scientificName, benefits }, index) => (
        <Ingredient
          key={index}
          image={image}
          name={name}
          scientificName={scientificName}
          benefits={benefits}
        />
      ))}
    </Wrapper>

    <CTA
      css={{
        marginTop: "40px",

        "@bq-700": {
          fontSize: "17px",
        },
      }}
    >
      Eu quero Healthy Vitamins!
    </CTA>
  </Container>
);
