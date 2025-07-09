import { Container, Text } from "@mantine/core";

const ContactUsHero = () => {
  return (
    <div>
      <Container>
        <h1>
          Need to{" "}
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            inherit
          >
            reach out?
          </Text>{" "}
          No problem - we'd love to hear from you
        </h1>

        <Text color="dimmed">
          Whether you’ve got a question, feedback, or just want to say hi —
          we’re here to help. GradeGuard is built by students, for students —
          and your voice matters.
        </Text>
      </Container>
    </div>
  );
};

export default ContactUsHero;
