import NextAuth from 'next-auth';
import nextAuthOptions from '@/app/lib/auth/option';


const handler = NextAuth(nextAuthOptions)
export {handler as GET, handler as POST};
