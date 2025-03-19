import { Alert } from "@mantine/core";
import { IconProgressCheck } from "@tabler/icons-react";
import React, { useState } from "react";

const SuccessMessage = ({ children }: { children: React.ReactNode }) => {
  const [visible, setVisible] = useState(true);
  const icon = <IconProgressCheck />;

  if (!visible) return null;

  return (
    <Alert
      variant="light"
      color="blue"
      withCloseButton
      title="Course created!"
      icon={icon}
      onClose={() => setVisible(false)}
    >
      {children}
    </Alert>
  );
};

export default SuccessMessage;
