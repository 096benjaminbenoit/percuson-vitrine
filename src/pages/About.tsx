import { useEffect } from "react";
import GlobalLayout from "../layouts/GlobalLayout";

export default function About() {
  useEffect(() => {
    document.title = "Percuson - A Propos";
  }, []);

  return (
    <>
      <GlobalLayout>
        <h1>A propos</h1>
      </GlobalLayout>
    </>
  );
}
