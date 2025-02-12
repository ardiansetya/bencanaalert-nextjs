import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

export function Header() {
  const { isSignedIn } = useUser(); // Cek apakah user sudah login

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white text-gray-800 py-4 mb-4">
      <div className="container mx-auto flex h-14 items-center justify-between px-5">
        <h1 className="text-2xl font-semibold">Formulir Pelaporan Bencana</h1>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>

          {isSignedIn ? <UserButton /> : <SignInButton />}
        </div>
      </div>
    </header>
  );
}
