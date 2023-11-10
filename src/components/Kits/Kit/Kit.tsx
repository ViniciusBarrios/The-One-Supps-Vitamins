import { OfferStar } from "@statics/imgs/svgs";

import {
  Container,
  Wrapper,
  Discount,
  Quantity,
  TratamentDurarion,
  KitImg,
  CostPerBottle,
  CheckList,
  ListItem,
  CheckIcon,
  Button,
  CostKit,
} from "./styles";

type KitProps = {
  link: string;
  discount?: string;
  quantity: string;
  tratamentDuration: string;
  image: string;
  costPerBottle: string;
  offers?: string[];
  costKit: string;
};

export default ({
  link,
  discount,
  quantity,
  tratamentDuration,
  image,
  costPerBottle,
  offers,
  costKit,
}: KitProps) => (
  <Container>
    <Wrapper href={link} target="_blank">
      {discount && (
        <Discount>
          <OfferStar css={{ width: "100%", height: "100%" }} />

          <div>
            <strong>{discount}</strong>
            <span>OFF</span>
          </div>
        </Discount>
      )}

      <Quantity>{quantity}</Quantity>

      <TratamentDurarion>{tratamentDuration}</TratamentDurarion>

      <KitImg alt={tratamentDuration} src={image} />

      <CostPerBottle>
        <span className="bottle">Frasco |</span>

        <span className="currency">R$</span>

        <div className="cost">
          {costPerBottle.split(",")[0]}
          {costPerBottle.split(",")[1] && (
            <span className="float">{costPerBottle.split(",")[1]}</span>
          )}
        </div>
      </CostPerBottle>

      {offers && (
        <CheckList>
          {offers.map((offer, index) => (
            <ListItem
              key={index}
              css={{ ...(index !== 0 && { marginTop: "5px" }) }}
            >
              <CheckIcon />
              <span>{offer}</span>
            </ListItem>
          ))}
        </CheckList>
      )}

      <Button>COMPRAR AGORA</Button>

      <CostKit dangerouslySetInnerHTML={{ __html: costKit }} />
    </Wrapper>
  </Container>
);
