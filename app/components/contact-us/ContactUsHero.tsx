import { Container, Stack, Text } from "@mantine/core";
import Logo from "../global/Logo";

const ContactUsHero = () => {
  return (
    <div>
      <Stack align="center" gap={5}>
        <Logo large={true} />

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
      </Stack>
    </div>
  );
};

export default ContactUsHero;
