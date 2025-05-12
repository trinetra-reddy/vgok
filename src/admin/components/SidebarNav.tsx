// SidebarNav.tsx
import { NavLink } from "react-router-dom"
import { cn } from "@/lib/utils"
import { ChevronDown, ChevronsLeft, ChevronsRight, MessageSquare, Layers, ListChecks } from "lucide-react"
import { useState } from "react"

interface SidebarNavProps {
  collapsed: boolean
  toggleCollapsed: () => void
}

export const SidebarNav = ({ collapsed, toggleCollapsed }: SidebarNavProps) => {
  const [openSubNav, setOpenSubNav] = useState(true)

  return (
    <aside
      className={cn(
        "min-h-screen bg-blue-950 text-white p-4 transition-all duration-300",
        collapsed ? "w-20" : "w-64"
      )}
    >
      {/* Collapse button */}
      <div className="flex justify-end mb-4">
        <button onClick={toggleCollapsed} className="text-white hover:text-gray-300">
          {collapsed ? <ChevronsRight size={18} /> : <ChevronsLeft size={18} />}
        </button>
      </div>

      <nav className="space-y-2">
        <NavLink
          to="/admin/forum"
          className={({ isActive }) =>
            cn(
              "flex items-center gap-3 px-4 py-2 rounded hover:bg-blue-900",
              isActive && "bg-blue-900"
            )
          }
        >
          <MessageSquare size={18} />
          {!collapsed && "Forum"}
        </NavLink>

        <NavLink
          to="/admin/categories"
          className={({ isActive }) =>
            cn(
              "flex items-center gap-3 px-4 py-2 rounded hover:bg-blue-900",
              isActive && "bg-blue-900"
            )
          }
        >
          <Layers size={18} />
          {!collapsed && "Categories"}
        </NavLink>

        {/* Manage Topic */}
        <div>
          <button
            onClick={() => setOpenSubNav(!openSubNav)}
            className={cn(
              "w-full flex items-center justify-between px-4 py-2 rounded hover:bg-blue-900",
              openSubNav && "bg-blue-900"
            )}
          >
            <span className="flex items-center gap-3">
              <ListChecks size={18} />
              {!collapsed && "Manage Topic"}
            </span>
            {!collapsed && (
              <ChevronDown
                className={cn("transition-transform", openSubNav ? "rotate-180" : "rotate-0")}
                size={18}
              />
            )}
          </button>

          {!collapsed && openSubNav && (
            <div className="ml-6 mt-2 space-y-1 text-sm">
              <NavLink
                to="/admin/topics/all"
                className={({ isActive }) =>
                  cn(
                    "block px-4 py-1 rounded hover:bg-blue-900",
                    isActive && "bg-blue-900"
                  )
                }
              >
                All Topics
              </NavLink>
              <NavLink
                to="/admin/topics/pending"
                className={({ isActive }) =>
                  cn(
                    "block px-4 py-1 rounded hover:bg-blue-900",
                    isActive && "bg-blue-900"
                  )
                }
              >
                Pending
              </NavLink>
              <NavLink
                to="/admin/topics/approved"
                className={({ isActive }) =>
                  cn(
                    "block px-4 py-1 rounded hover:bg-blue-900",
                    isActive && "bg-blue-900"
                  )
                }
              >
                Approved
              </NavLink>
              <NavLink
                to="/admin/topics/rejected"
                className={({ isActive }) =>
                  cn(
                    "block px-4 py-1 rounded hover:bg-blue-900",
                    isActive && "bg-blue-900"
                  )
                }
              >
                Rejected
              </NavLink>
            </div>
          )}
        </div>
      </nav>
    </aside>
  )
}
