import { ReactElement } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function GlobalLayout({ children }: { children: ReactElement }) {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
