import type { Metadata } from "next";
import UnlockedClient from "./UnlockedClient";

export const metadata: Metadata = {
  title: "VAULT // UNLOCKED",
  description: "Acceso concedido al vault secreto.",
};

export default function Page() {
  return <UnlockedClient />;
}
