import type { Props as SearchbarProps } from "../../components/search/Searchbar.tsx";
import { MenuButton } from "../../islands/Header/Buttons.tsx";
import { usePlatform } from "../../sdk/usePlatform.tsx";
import type { SiteNavigationElement } from "apps/commerce/types.ts";
import Image from "apps/website/components/Image.tsx";
import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";
import { Buttons, Logo } from "../../components/header/Header.tsx";

// Make it sure to render it on the server only. DO NOT render it on an island
function Navbar(
  { items, logo, device }: {
    items: SiteNavigationElement[];
    searchbar?: SearchbarProps;
    logo?: Logo;
    buttons?: Buttons;
    logoPosition?: "left" | "center";
    device: "mobile" | "desktop" | "tablet";
  },
) {
  const platform = usePlatform();

  // Mobile header
  if (device === "mobile") {
    return (
      <div
        style={{ height: navbarHeight }}
        class="lg:hidden grid grid-cols-3 justify-between items-center border-b border-base-200 w-full px-6 pb-6 gap-2"
      >
        <MenuButton />
        {logo && (
          <a
            href="/"
            class="flex-grow inline-flex items-center justify-center"
            style={{ minHeight: navbarHeight }}
            aria-label="Store logo"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width || 100}
              height={logo.height || 13}
            />
          </a>
        )}
      </div>
    );
  }

  // Desktop header
  return (
    <div class="hidden m-auto max-w-screen-2xl sm:grid sm:grid-cols-2 items-center justify-between w-full px-20">
      {logo && (
        <a
          href="/"
          aria-label="Store logo"
          class="block"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width || 100}
            height={logo.height || 13}
          />
        </a>
      )}

      <ul
        class={`flex gap-6 col-span-1 justify-end
        }`}
      >
        {items.map((item) => <NavItem item={item} />)}
      </ul>
    </div>
  );
}

export default Navbar;
