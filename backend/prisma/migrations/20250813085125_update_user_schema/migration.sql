/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Patient` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Patient" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "age" INTEGER NOT NULL DEFAULT 0,
    "gender" TEXT NOT NULL DEFAULT 'not_specified',
    "heightCm" REAL,
    "weightKg" REAL,
    "bloodType" TEXT NOT NULL DEFAULT 'not_specified',
    "smoker" BOOLEAN NOT NULL DEFAULT false,
    "pregnant" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Patient" ("age", "bloodType", "email", "gender", "heightCm", "id", "name", "pregnant", "smoker", "weightKg") SELECT "age", coalesce("bloodType", 'not_specified') AS "bloodType", "email", "gender", "heightCm", "id", "name", "pregnant", "smoker", "weightKg" FROM "Patient";
DROP TABLE "Patient";
ALTER TABLE "new_Patient" RENAME TO "Patient";
CREATE UNIQUE INDEX "Patient_email_key" ON "Patient"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
