import { Button, Input, InputWrapper, Stack } from "@mantine/core";
import React from "react";

const NewCourseForm = () => {
  return (
    <Stack>
      <InputWrapper label="Course name">
        <Input placeholder="name" />
      </InputWrapper>
      <InputWrapper label="Course grade" description="optional">
        <Input placeholder="0-100" />
      </InputWrapper>
      <Button>Create course</Button>
    </Stack>
  );
};

export default NewCourseForm;
