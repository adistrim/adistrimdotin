import ModeToggle from "@/components/theme-toggle";
import HeaderClient from "./HeaderClient";

export default async function Header() {
  return (
    <aside className="mb-10">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex items-center justify-between relative"
          id="nav"
          aria-label="Main navigation"
        >
          <HeaderClient />
          <div>
            <ModeToggle />
          </div>
        </nav>
      </div>
    </aside>
  );
}
