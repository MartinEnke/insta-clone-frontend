import { NavLink, Outlet } from "react-router";

export default function ProfileLayout() {
  return (
    <div>
      <div className="flex justify-center items-center border-b mb-4 bg-gray-900 text-white">
        <NavLink
          to="/profile/posts/grid"
          className={({ isActive }) =>
            `flex-1 text-center p-4 transition 
             ${isActive ? "border-b-2 border-pink-400 text-pink-300 font-semibold" : "text-gray-300"}`
          }
        >
          Posts
        </NavLink>

        <NavLink
          to="/profile/reels/grid"
          className={({ isActive }) =>
            `flex-1 text-center p-4 transition 
             ${isActive ? "border-b-2 border-pink-400 text-pink-300 font-semibold" : "text-gray-300"}`
          }
        >
          Reels
        </NavLink>

        <NavLink
          to="/profile/tagged/grid"
          className={({ isActive }) =>
            `flex-1 text-center p-4 transition 
             ${isActive ? "border-b-2 border-pink-400 text-pink-300 font-semibold" : "text-gray-300"}`
          }
        >
          Tagged
        </NavLink>

        <NavLink
          to="/profile/highlights"
          className={({ isActive }) =>
            `flex-1 text-center p-4 transition 
             ${isActive ? "border-b-2 border-pink-400 text-pink-300 font-semibold" : "text-gray-300"}`
          }
        >
          Highlights
        </NavLink>
      </div>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
