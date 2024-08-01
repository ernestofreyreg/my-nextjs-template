import { Lato } from "next/font/google";
import "./globals.css";
import { getUser } from "@/services/getUser";
import { MyLink } from "@/components/MyLink";
import { Signout } from "@/components/Signout";

const inter = Lato({ subsets: ["latin"], weight: "400" });

export default async function RootLayout({ children }) {
  const user = await getUser();

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-10/12 mx-auto flex flex-col">
          <div className="py-4 flex flex-row justify-between items-center">
            <div>MyApp</div>
            <div>
              {user ? (
                <Signout user={user} />
              ) : (
                <MyLink href="/login">Login</MyLink>
              )}
            </div>
          </div>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
