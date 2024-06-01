import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import User from "@/model/userModel";
import connectDB from "@/lib/connectDB";
const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callback: async (profile, tokens) => {
                await connectDB(); // Wait for the database connection to be established
                console.log("connected to DB");

                const user = {
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture,
                    googleId: profile.sub,
                };

                console.log("Got user info");

                const existingUser = await User.findOne({ email: user.email });
                let localUser;

                if (!existingUser) {
                    // Create a new local user document
                    localUser = new User(user);
                    console.log("local user created");

                    try {
                        await localUser.save();
                    } catch (err) {
                        console.log(err.message);
                    }
                }

                return localUser;
            },
        }),
    ],
    secret: process.env.NEXT_PUBLIC_SECRET,
});

export { handler as GET, handler as POST };
