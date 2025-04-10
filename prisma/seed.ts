import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

async function seedLanguages () {
  const languages = [
    { code: 'fr', name: 'Français', isDefault: true },
    { code: 'en', name: 'English', isDefault: false }
  ]

  for (const language of languages) {
    const existingLanguage = await prisma.language.findUnique({
      where: { code: language.code }
    })

    if (!existingLanguage) {
      await prisma.language.create({
        data: language
      })
      console.log(`Created language: ${language.name}`)
    } else {
      console.log(`Language already exists: ${language.name}`)
    }
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

  const existingAdmin = await prisma.admin.findUnique({
    where: { email }
  })

  if (!existingAdmin) {
    const hashedPassword = await hash(password, 10)
    await prisma.admin.create({
      data: {
        email,
        password: hashedPassword,
        username,
        role: 'admin'
      }
    })
    console.log('Created admin user')
  } else {
    console.log('Admin user already exists')
  }

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
