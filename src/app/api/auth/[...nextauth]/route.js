import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import User from "@/model/userSchema";
import connectDB from "@/lib/connectDB";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callback: async (profile, tokens) => {
                // Create a new local user document
                const user = {
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture,
                    googleId: profile.sub,
                };

                (async () => {
                    await connectDB();
                    const existingUser = await User.find({
                        email: user.email,
                    });
                    const localUser =
                        !existingUser &&
                        new User({
                            name: user.name,
                            email: user.email,
                            image: user.image,
                        });

                    try {
                        await localUser.save();
                    } catch (err) {
                        console.log(err.message);
                    }
                })();
            },
        }),
    ],
    secret: process.env.NEXT_PUBLIC_SECRET,
});

export { handler as GET, handler as POST };
