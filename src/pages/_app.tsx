import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider>
      <SidebarProvider>
        <div className="flex w-full">
          <AppSidebar />
          <main className="flex-1 bg-gray-100 overflow-auto">
            <Component {...pageProps} />
          </main>
        </div>
      </SidebarProvider>
    </ClerkProvider>
  );
}
