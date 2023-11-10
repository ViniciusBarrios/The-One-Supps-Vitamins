import { Montserrat } from "next/font/google";

import ServerStylesheet from "./ServerStylesheet";

const montserrat = Montserrat({ subsets: ["latin"] });

export default ({ children }: { children: React.ReactNode }) => (
  <html lang="pt-br">
    <head></head>

    <body className={montserrat.className}>
      <ServerStylesheet>{children}</ServerStylesheet>
    </body>
  </html>
);
