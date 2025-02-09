import { Home, Bell, Map, BarChart, Settings, HelpCircle } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const menuItems = [
  { icon: Home, title: "Dashboard", href: "/" },
  { icon: Bell, title: "Alerts", href: "/alerts" },
  { icon: Map, title: "Map", href: "/map" },
  { icon: BarChart, title: "Statistics", href: "/statistics" },
  { icon: Settings, title: "Settings", href: "/settings" },
  { icon: HelpCircle, title: "Help", href: "/help" },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="p-4">
        <h1 className="text-2xl font-bold text-sidebar-foreground transition-all duration-300 group-data-[collapsible=icon]:opacity-0 group-data-[collapsible=icon]:invisible group-data-[collapsible=icon]:h-0 group-data-[collapsible=icon]:overflow-hidden">
          Bencana Alert
        </h1>
      </SidebarHeader>
      <SidebarContent className="p-4">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <a href={item.href} className="flex items-center gap-2">
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
