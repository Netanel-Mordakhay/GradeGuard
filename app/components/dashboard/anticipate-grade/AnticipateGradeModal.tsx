import { Modal, Text } from "@mantine/core";
import React, { useEffect, useState } from "react";

interface Props {
  opened: boolean;
  onClose: () => void;
}

const AnticipateGradeModal = ({ opened, onClose }: Props) => {
  const [grade, setGrade] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [showGrade, setShowGrade] = useState(false);

  useEffect(() => {
    if (opened) {
      setLoading(true);
      setGrade(null);
      setShowGrade(false);
      const fetchGrade = async () => {
        try {
          const response = await fetch("/api/functions/anticipated-grade");
          const data = await response.json();
          setGrade(data.anticipatedGrade);
          setTimeout(() => {
            setShowGrade(true);
          }, 2000);
        } catch (err) {
          console.error("Error fetching grade", err);
        } finally {
          setLoading(false);
        }
      };
      fetchGrade();
    }
  }, [opened]);

  return (
    <Modal
      opened={opened}
      onClose={() => {
        onClose();
        setGrade(null);
      }}
      title="Anticipate my Grade!"
    >
      <Text size="lg">
        {grade !== null
          ? `Your anticipated grade is: ${grade.toFixed()}`
          : "No grade found."}
      </Text>
    </Modal>
  );
};

export default AnticipateGradeModal;
