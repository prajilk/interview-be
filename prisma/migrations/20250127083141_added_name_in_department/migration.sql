/*
  Warnings:

  - Added the required column `name` to the `department` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `department` ADD COLUMN `name` VARCHAR(191) NOT NULL;
