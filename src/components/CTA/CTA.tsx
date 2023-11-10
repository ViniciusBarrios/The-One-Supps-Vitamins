import { Container } from "./styles";

type CTAType = React.ComponentProps<typeof Container> & {};

export default ({ children, ...props }: CTAType) => (
  <Container onClick={() => (location.href = "#kits")} {...props}>
    {children}
  </Container>
);
