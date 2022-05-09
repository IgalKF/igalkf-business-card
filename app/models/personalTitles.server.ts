import { prisma } from "~/db.server";

export async function getPersonalTitles(): Promise<string[]> {
  return [
    'Full-Stack Developer',
    'Data Science B.Sc Student',
    'R&D Team Leader',
    'Graphic Designer',
  ];
}
