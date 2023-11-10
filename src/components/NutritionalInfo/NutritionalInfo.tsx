import { useState } from "react";
import { IoIosArrowDown as ArrowIcon } from "react-icons/io";

import {
  Container,
  Title,
  SubTitle,
  Spacer,
  Head,
  Content,
  Row,
  Text,
} from "./styles";

const informations = [
  { name: "Vitamina A (Betacaroteno)", quantity: "600mcg", idr: "100%" },
  { name: "Vitamina B1 (Tiamina)", quantity: "1,2mg", idr: "100%" },
  { name: "Vitamina B2 (Riboflavina)", quantity: "1,3mg", idr: "100%" },
  { name: "Vitamina B3 (Niacina)", quantity: "16mg", idr: "100%" },
  { name: "Vitamina B5 (Ácido Pantotenico)", quantity: "5mcg", idr: "100%" },
  { name: "Vitamina B6 (Piridoxina)", quantity: "1,3mg", idr: "100%" },
  { name: "Vitamina B9 (Ácido Fólico)", quantity: "240mcg", idr: "100%" },
  { name: "Vitamina B12 (Cianocobalamina)", quantity: "2,4mg", idr: "100%" },
  { name: "Vitamina C (Ácido Ascórbico)", quantity: "45mg", idr: "100%" },
  { name: "Vitamina D (Colicalciferol) ", quantity: "5mcg", idr: "100%" },
  { name: "Vitamina E (Alfa Tocoferol)", quantity: "10mg", idr: "100%" },
  { name: "Vitamina H (Biotina)", quantity: "30mcg", idr: "100%" },
  { name: "Vitamina K (Menadiona)", quantity: "65mcg", idr: "100%" },
  { name: "Calcio (Bisglicinato)", quantity: "250mg", idr: "25%" },
  { name: "Cloro", quantity: "320mcg", idr: "****" },
  { name: "Cobre (Aspartato)", quantity: "900mcg", idr: "100%" },
  { name: "Cromo (Picolinato)", quantity: "35mcg", idr: "100%" },
  { name: "Ferro (Bisglicinato)", quantity: "14mg", idr: "100%" },
  { name: "Iodo (Bisglicinato)", quantity: "130mcg", idr: "100%" },
  { name: "Licopeno", quantity: "350mg", idr: "****" },
  { name: "Luteína", quantity: "300mg", idr: "****" },
  { name: "Magnésio (Bisglicinato)", quantity: "260mg", idr: "100%" },
  { name: "Manganês (Bisglicinato)", quantity: "2,3mg", idr: "100%" },
  { name: "Selênio (L-Selenometionina)", quantity: "34mcg", idr: "100%" },
  { name: "Zinco (Aspartato)", quantity: "7,0mg", idr: "100%" },
];

export default () => {
  const [viewMore, setViewMore] = useState(false);

  return (
    <Container>
      <Title>INFORMAÇÕES NUTRICIONAIS</Title>

      <SubTitle>Por porção de 2,25g (3 cápsulas)</SubTitle>

      <Spacer />

      <Head>
        <strong>Quantidade por Porção</strong>

        <strong>% VD</strong>
      </Head>

      <Spacer />

      <Content>
        <div
          className="items"
          style={{
            ...(!viewMore && {
              maxHeight: "320px",
            }),
          }}
        >
          {informations.map(({ name, quantity, idr }, index) => (
            <div key={index}>
              <Row>
                <strong>{name}</strong>

                <p>{quantity}</p>

                <span>{idr}</span>
              </Row>

              {informations.length !== index + 1 && (
                <Spacer css={{ height: "2px", opacity: 0.2 }} />
              )}
            </div>
          ))}
        </div>

        {!viewMore && (
          <button className="view_more" onClick={() => setViewMore(!viewMore)}>
            Ver Mais
            <span style={{ display: "flex", margin: "1px 0 0 3px" }}>
              <ArrowIcon />
            </span>
          </button>
        )}
      </Content>

      <Spacer />

      <Text>
        Não contém quantidades significativas de Valor Energético, Proteínas,
        Carboidratos, Gorduras totais, Saturadas e Trans, Fibra Alimentar.
      </Text>

      <Spacer css={{ height: "2px", opacity: 0.2 }} />

      <Text>
        Valores Diários de Referência com base em uma dieta de 2000 kcal ou 8400
        kj. Seus valores diários podem ser maiores ou menores dependendo de suas
        necessidades energéticas. **** Valor Não Estabelecido.{" "}
      </Text>

      <Text css={{ marginTop: "10px", fontWeight: 700 }}>
        Produto em conformidade com a RDC ANVISA 27/2010
      </Text>
    </Container>
  );
};
