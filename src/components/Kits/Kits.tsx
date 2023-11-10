import Kit from "./Kit";
import { Container, Title, Wrapper, Reviews, StarIcon } from "./styles";

type KitsProps = {
  kits: {
    link: string;
    discount?: string;
    quantity: string;
    tratamentDuration: string;
    image: string;
    costPerBottle: string;
    offers?: string[];
    costKit: string;
  }[];
};

export default ({ kits }: KitsProps) => (
  <Container id="kits">
    <Title>
      Solicite seu Healthy Vitamins® com descontos abaixo enquanto durarem os
      estoques!
    </Title>

    <Wrapper>
      {kits.map(
        (
          {
            link,
            discount,
            quantity,
            tratamentDuration,
            image,
            costPerBottle,
            offers,
            costKit,
          },
          index,
        ) => (
          <Kit
            key={index}
            link={link}
            discount={discount}
            quantity={quantity}
            tratamentDuration={tratamentDuration}
            image={image}
            costPerBottle={costPerBottle}
            offers={offers}
            costKit={costKit}
          />
        ),
      )}
    </Wrapper>

    <Reviews>
      <strong>Avaliação dos nossos clientes</strong>

      <div>
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </div>

      <span>Baseado em avaliações reais de clientes!</span>
    </Reviews>
  </Container>
);
