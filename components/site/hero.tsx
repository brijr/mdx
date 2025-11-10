import { Section, Container, Prose } from "@/components/ds";
import { Logo } from "@/components/site/logo";

export const Hero = () => {
  return (
    <Section className="bg-muted/50 border-b">
      <Container className="grid gap-6">
        <Logo width={24} />
        <Prose isSpaced>
          <h1>Markdown Blog Starter Template</h1>
          <p>
            A modern MDX and Next.js starter made by{" "}
            <a href="https://brijr.dev">brijr</a>. Built with Next.js, Velite,
            and Tailwind CSS. View it on{" "}
            <a href="https://github.com/brijr/mdx">GitHub</a>.
          </p>
        </Prose>
      </Container>
    </Section>
  );
};
