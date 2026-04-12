import {
  LayoutDashboard,
  Package,
  Users,
  BarChart3,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react"

export const ADMIN_MENU = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Packages", href: "/admin/packages", icon: Package },
  { label: "Leads", href: "/admin/leads", icon: Users },
  { label: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { label: "Settings", href: "/admin/settings", icon: Settings },
]

export const FOOTER_MENU = [
  { label: "Support", href: "/admin/support", icon: HelpCircle },
  { label: "Log out", href: "/auth/login", icon: LogOut },
]
