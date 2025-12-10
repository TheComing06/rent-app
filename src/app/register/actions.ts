'use server'

import { prisma } from '@/lib/prisma'

export async function registerUser(formData: FormData) {
  const login = formData.get('login') as string
  const password = formData.get('password') as string
  const firstName = formData.get('firstName') as string
  const secondName = formData.get('secondName') as string
  const thirdName = formData.get('thirdName') as string
  const email = formData.get('email') as string
  const phone = formData.get('phone') as string
  
  await prisma.user.create({ data: { login, password, firstName, secondName, thirdName, email, phone } })
}
