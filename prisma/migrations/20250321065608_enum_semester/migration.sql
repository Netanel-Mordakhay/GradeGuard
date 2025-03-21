/*
  Warnings:

  - The values [Summer] on the enum `Course_semester` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `course` MODIFY `semester` ENUM('A', 'B', 'SUMMER') NULL;
