import { ActionIcon, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { ReactNode } from "react";

interface ModalButtonProps {
  children: ReactNode;
}

const ModalButton = ({ children }: ModalButtonProps) => {
  const [opened, { open, close }] = useDisclosure(false);

  const [child1, child2] = React.Children.toArray(children);

  return (
    <>
      <Modal opened={opened} onClose={close}>
        {child1}
      </Modal>

      <ActionIcon
        variant="filled"
        aria-label="Open Modal"
        size={20}
        onClick={open}
      >
        {child2}
      </ActionIcon>
    </>
  );
};

export default ModalButton;
