import GoogleProvider from 'next-auth/providers/google'
import type { NextAuthOptions } from "next-auth"
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient, User } from '@prisma/client'
import { prisma } from './prisma_client'

export const authOptions: NextAuthOptions = {
        adapter: PrismaAdapter(prisma),
        providers: [
            GoogleProvider({
                clientId: process.env.GOOGLE_ID!,
                clientSecret: process.env.GOOGLE_SECRET!
            })
        ],
        session: {
            strategy:"jwt",
            maxAge: 60 * 60 * 24 * 30,
    
        },
        events: {
            signIn: async (message) => {
                console.log("\n\n<<<SIGN IN>>>")
            },
            createUser: async (message) => {
                let a = await prisma.gameList.create({
                    data: {
                        name: "basic list",
                        users: {
                            connect: [{id: `${message.user.id}`}]
                        }
                    }
                })
            }
        }
}