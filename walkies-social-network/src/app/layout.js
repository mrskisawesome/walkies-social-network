import { Urbanist } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/page";

const urbanist = Urbanist({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Walkies - the social network for dog walkers",
  description:
    "A social network for those who love short and long walks with their loyal canine companions",
};

export default function RootLayout({ children }) {
  return (
    <div>
      <html lang="en">
        <body className={urbanist.className}>
          <Header />
          {children}
        </body>
      </html>
    </div>
  );
}
