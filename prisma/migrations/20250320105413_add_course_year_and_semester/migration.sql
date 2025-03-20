/*
  Warnings:

  - Added the required column `credits` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isBinary` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `semester` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `course` ADD COLUMN `credits` INTEGER NOT NULL,
    ADD COLUMN `isBinary` BOOLEAN NOT NULL,
    ADD COLUMN `semester` ENUM('A', 'B', 'Summer') NOT NULL,
    ADD COLUMN `year` ENUM('FIRST', 'SECOND', 'THIRD', 'FOURTH', 'FIFTH', 'SIXTH') NOT NULL;
