"use client";

import BPF from "@components/BPF";
import CTA from "@components/CTA";
import FAQ from "@components/FAQ";
import Footer from "@components/Footer";
import Header from "@components/Header";
import Ingredients from "@components/Ingredients";
import Kits from "@components/Kits";
import NutritionalInfo from "@components/NutritionalInfo";
import Presentation from "@components/Presentation";
import Whatsapp from "@components/Whatsapp";

import { Stamps, Stamp, Informations } from "@styles/layouts/Vitamins";

const stamps = [
  "/imgs/stamps/1.png",
  "/imgs/stamps/2.png",
  "/imgs/stamps/3.png",
  "/imgs/stamps/4.png",
  "/imgs/stamps/5.png",
  "/imgs/stamps/6.png",
  "/imgs/stamps/7.png",
];

const kits = [
  {
    link: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SZB3AUZ34A8V4",
    discount: "10%",
    quantity: "1 Frasco",
    tratamentDuration: "Para 30 dias",
    image: "/imgs/kits/1.png",
    costPerBottle: "85,41",
    costKit:
      "De <span class='from'>R$ 94,90</span> por <span>R$ 85,41</span> à vista ou <span>3x</span> de <span>28,47</span>",
  },
  {
    link: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=NTBZEYPS8K7V6",
    discount: "30%",
    quantity: "6 Frascos",
    tratamentDuration: "Para 6 meses",
    image: "/imgs/kits/3.png",
    costPerBottle: "66,43",
    offers: ["Frete grátis para todo Brasil"],
    costKit:
      "De <span class='from'>R$ 569,40</span> por <span>R$ 398,58</span> à vista ou <span>3x</span> de <span>132,86</span>",
  },
  {
    link: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QG9V2N4AJ4V54",
    discount: "25%",
    quantity: "3 Frascos",
    tratamentDuration: "Para 3 meses",
    image: "/imgs/kits/2.png",
    costPerBottle: "71,17",
    costKit:
      "De <span class='from'>R$ 284,70</span> por <span>R$ 213,52</span> à vista ou <span>12x</span> de <span>71,17</span>",
  },
];

export default () => (
  <>
    <Header />

    <Presentation />

    <Stamps>
      {stamps.map((stamp, index) => (
        <Stamp
          key={index}
          width={100}
          height={100}
          alt={`Selo ${index + 1}`}
          src={stamp}
        />
      ))}
    </Stamps>

    <Informations>
      <NutritionalInfo />

      <div className="informations">
        <h2>Informação Healthy Vitamins®</h2>

        <div>
          <p>
            VITAMINS, parte da linha HEALTHY da THE ONE SUPPS®, é um
            polivitamínico único com vitaminas orgânicas, minerais orgânicos
            quelatados e carotenoides. Oferece 100% da IDR (exceto Cálcio) e
            combina fontes sintéticas e naturais para suprir carências
            nutricionais, proporcionando inúmeros benefícios para o corpo.
          </p>

          <p>
            Apesar do ideal de uma dieta rica em frutas e vegetais, muitos de
            nós não conseguimos atingir as metas diárias recomendadas de
            vitaminas e minerais devido ao estilo de vida agitado. No Brasil, o
            IBGE relata que nove em cada dez brasileiros consomem menos do que
            as 5 porções de frutas, legumes e verduras recomendadas.
          </p>

          <p>
            Essa lacuna nutricional torna a suplementação com HEALTHY VITAMINS®
            ainda mais essencial, oferecendo suporte abrangente para a saúde
            geral.
          </p>

          <p>
            Contendo bioativos antioxidantes, como Luteína e Licopeno, e
            minerais quelatados de fácil absorção, o produto promove a saúde. As
            cápsulas são vegetais e atendem a diversas preferências dietéticas.
          </p>

          <p>
            HEALTHY VITAMINS® não é apenas mais um multivitamínico, mas uma
            escolha cuidadosa para promover a saúde. É adequado para ambos os
            sexos.
          </p>
        </div>

        <CTA
          css={{
            marginTop: "20px",

            "@bq-800": {
              fontSize: "17px",
            },
          }}
        >
          Eu quero Healthy Vitamins!
        </CTA>
      </div>
    </Informations>

    <Ingredients />

    <BPF />

    <Kits kits={kits} />

    <FAQ />

    <Whatsapp />

    <Footer />
  </>
);
