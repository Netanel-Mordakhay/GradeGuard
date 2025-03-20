/*
  Warnings:

  - Made the column `credits` on table `course` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `course` MODIFY `credits` INTEGER NOT NULL DEFAULT 0;
