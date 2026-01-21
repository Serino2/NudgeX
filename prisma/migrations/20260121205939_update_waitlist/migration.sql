/*
  Warnings:

  - You are about to alter the column `email` on the `WaitlistEntry` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(254)`.
  - You are about to alter the column `source` on the `WaitlistEntry` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- AlterTable
ALTER TABLE "WaitlistEntry" ALTER COLUMN "email" SET DATA TYPE VARCHAR(254),
ALTER COLUMN "source" SET DATA TYPE VARCHAR(50);

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "User";
