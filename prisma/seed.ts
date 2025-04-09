import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

async function seedLanguages () {
  const languages = [
    { code: 'fr', name: 'Français', isDefault: true },
    { code: 'en', name: 'English', isDefault: false }
  ]

  for (const language of languages) {
    await prisma.language.upsert({
      where: { code: language.code },
      update: language,
      create: language
    })
  }
}

async function main () {
  const email = process.env.ADMIN_EMAIL
  const password = process.env.ADMIN_PASSWORD
  const username = process.env.ADMIN_USERNAME

  if (!email || !password || !username) {
    throw new Error(
      'Missing required environment variables: ADMIN_EMAIL, ADMIN_PASSWORD, ADMIN_USERNAME'
    )
  }

  const hashedPassword = await hash(password, 10)

  const admin = await prisma.admin.upsert({
    where: { email },
    update: {},
    create: {
      email,
      password: hashedPassword,
      username,
      role: 'admin'
    }
  })

  await seedLanguages()
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
