import { Section, Container } from "@/components/ds";

export const Footer = () => {
  return (
    <footer>
      <Section>
        <Container className="text-muted-foreground flex justify-between items-center">
          <p>&copy; {new Date().getFullYear()} brijr/mdx</p>
          <a href="https://bridgertower.com">Bridger Tower</a>
        </Container>
      </Section>
    </footer>
  );
};
