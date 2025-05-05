import { NavLink } from "react-router-dom"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export const SidebarNav = () => {
  const [openSubNav, setOpenSubNav] = useState(true)

  return (
    <aside className="w-64 min-h-screen bg-blue-950 text-white p-4">      
      <nav className="space-y-2">
        <NavLink
          to="/admin/forum"
          className={({ isActive }) =>
            cn(
              "block px-4 py-2 rounded hover:bg-blue-900",
              isActive && "bg-blue-900"
            )
          }
        >
          Forum
        </NavLink>

        <NavLink
          to="/admin/categories"
          className={({ isActive }) =>
            cn(
              "block px-4 py-2 rounded hover:bg-blue-900",
              isActive && "bg-blue-900"
            )
          }
        >
          Categories
        </NavLink>

        {/* Manage Topic with Subnav */}
        <div>
          <button
            onClick={() => setOpenSubNav(!openSubNav)}
            className="w-full flex items-center justify-between px-4 py-2 rounded hover:bg-blue-900"
          >
            <span>Manage Topic</span>
            <ChevronDown
              className={cn(
                "transition-transform",
                openSubNav ? "rotate-180" : "rotate-0"
              )}
              size={18}
            />
          </button>

          {openSubNav && (
            <div className="ml-4 mt-2 space-y-1">
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
                Pending Topics
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
                Approved Topics
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
                Rejected Topics
              </NavLink>
            </div>
          )}
        </div>
      </nav>
    </aside>
  )
}