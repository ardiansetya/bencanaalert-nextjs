import { AppSidebar } from "@/components/app-sidebar";
import { Header } from "@/components/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SidebarProvider>
      <div className="flex w-full">
        <AppSidebar />
        <main className="flex-1 bg-gray-100 overflow-auto">
          <Component {...pageProps} />
        </main>
      </div>
    </SidebarProvider>
  );
}
