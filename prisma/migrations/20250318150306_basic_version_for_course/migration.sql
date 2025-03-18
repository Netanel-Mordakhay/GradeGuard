/*
  Warnings:

  - You are about to drop the column `semester` on the `course` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `course` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `course` DROP COLUMN `semester`,
    DROP COLUMN `year`;
