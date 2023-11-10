import {
  Container,
  Ingredient,
  IngredientImg,
  Name,
  ScientificName,
  CheckList,
  ListItem,
  CheckIcon,
} from "./styles";

type IngredientProps = {
  image: string;
  name: string;
  scientificName: string;
  benefits: string[];
};

export default ({ image, name, scientificName, benefits }: IngredientProps) => (
  <Container>
    <Ingredient>
      <IngredientImg alt={name} width={150} height={150} src={image} />
    </Ingredient>

    <Name>{name}</Name>

    <ScientificName>{scientificName}</ScientificName>

    <CheckList>
      {benefits.map((benefit, index) => (
        <ListItem key={index}>
          <CheckIcon />
          <span>{benefit}</span>
        </ListItem>
      ))}
    </CheckList>
  </Container>
);
