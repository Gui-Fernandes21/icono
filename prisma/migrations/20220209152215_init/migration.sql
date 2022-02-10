/*
  Warnings:

  - You are about to drop the column `gym_id` on the `user` table. All the data in the column will be lost.
  - Added the required column `gym_id` to the `Staff` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gym_id` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_gym_id_fkey`;

-- AlterTable
ALTER TABLE `staff` ADD COLUMN `gym_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `student` ADD COLUMN `gym_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `gym_id`;

-- AddForeignKey
ALTER TABLE `Student` ADD CONSTRAINT `Student_gym_id_fkey` FOREIGN KEY (`gym_id`) REFERENCES `Academy`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Staff` ADD CONSTRAINT `Staff_gym_id_fkey` FOREIGN KEY (`gym_id`) REFERENCES `Academy`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
