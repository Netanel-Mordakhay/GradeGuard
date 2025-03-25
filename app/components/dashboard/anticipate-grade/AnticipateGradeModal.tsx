import { Modal } from "@mantine/core";
import React from "react";

interface Props {
  opened: boolean;
  onClose: () => void;
}

const AnticipateGradeModal = ({ opened, onClose }: Props) => {
  return (
    <Modal opened={opened} onClose={onClose} title="Authentication">
      {/* Modal content */}
    </Modal>
  );
};

export default AnticipateGradeModal;
