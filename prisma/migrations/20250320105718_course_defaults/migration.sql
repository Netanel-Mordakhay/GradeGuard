-- AlterTable
ALTER TABLE `course` MODIFY `credits` INTEGER NOT NULL DEFAULT 0,
    MODIFY `isBinary` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `semester` ENUM('A', 'B', 'Summer') NULL,
    MODIFY `year` ENUM('FIRST', 'SECOND', 'THIRD', 'FOURTH', 'FIFTH', 'SIXTH') NULL;
