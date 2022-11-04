/*
  Warnings:

  - You are about to drop the column `name` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Song` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[title]` on the table `Game` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `Song` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `title` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Song` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Game_name_key";

-- DropIndex
DROP INDEX "Song_name_key";

-- AlterTable
ALTER TABLE "Game" DROP COLUMN "name",
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Song" DROP COLUMN "name",
ADD COLUMN     "title" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Game_title_key" ON "Game"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Song_title_key" ON "Song"("title");
