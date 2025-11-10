import { Section, Container } from "@/components/ds";

export const Footer = () => {
  return (
    <footer>
      <Section>
        <Container className="text-muted-foreground flex justify-start gap-2 sm:gap-4 items-center">
          <p>&copy; {new Date().getFullYear()} brijr/mdx</p>
          <span className="text-muted-foreground/40">|</span>
          <a href="https://bridgertower.com">Bridger Tower</a>
        </Container>
      </Section>
    </footer>
  );
};
