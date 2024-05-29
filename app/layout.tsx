import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import CourseItems from "./components/courseitems/CourseItems";

export const metadata: Metadata = {
  title: "Silicon",
  description: "Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://kit.fontawesome.com/e83f67faa0.css" crossOrigin="anonymous"/>
        <Header/>
      </head>
      <body>
        <div className="wrapper">
          <CourseItems/>
        </div>
        {children}

        <Footer/>
      </body>
    </html>
  );
}
