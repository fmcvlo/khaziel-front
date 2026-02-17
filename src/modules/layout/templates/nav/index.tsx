import { Suspense } from "react"
import { listRegions } from "@lib/data/regions"
import { listLocales } from "@lib/data/locales"
import { getLocale } from "@lib/data/locale-actions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import { listCategories } from "@lib/data/categories"
import { Search, User, ShoppingBag } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "components/ui/navigation-menu"
import NavbarWrapper from "./navbar-wrapper"

import { getDictionary } from "@lib/util/get-dictionary"

export default async function Nav() {
  const [regions, locales, currentLocale, categories] = await Promise.all([
    listRegions().then((regions: StoreRegion[]) => regions),
    listLocales(),
    getLocale(),
    listCategories(),
  ])

  const dict = await getDictionary(currentLocale || "es")

  return (
    <NavbarWrapper>
      <header className="relative h-16 mx-auto transition-all ">
        <nav className="w-full h-full">
          <div className="flex items-center justify-between w-full h-full">
            {/* Left: Desktop Menu */}
            <div className="flex-1 basis-0 h-full hidden small:flex items-center gap-6 lg:ml-6">
              <NavigationMenu className="h-full">
                <NavigationMenuList className="gap-6 space-x-0 h-full items-center">
                  <NavigationMenuItem className="h-full flex items-center">
                    <NavigationMenuTrigger className="uppercase tracking-[0.2em] text-[11px] bg-transparent hover:bg-transparent data-[state=open]:bg-transparent p-0 h-auto font-bold">
                      {dict.nav.shop}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="flex flex-col gap-2 p-6 w-[240px] transition-colors duration-300 group-data-[scrolled=true]:text-black group-data-[scrolled=false]:text-white">
                        <li className="mb-2">
                          <LocalizedClientLink
                            href="/store"
                            className="block select-none py-2 px-0 leading-none no-underline outline-none transition-colors hover:opacity-70 uppercase tracking-[0.1em] text-[11px] font-bold"
                          >
                            {dict.nav.all_products || "View all"}
                          </LocalizedClientLink>
                        </li>
                        {categories?.slice(0, 8).map((category) => (
                          <li key={category.id}>
                            <NavigationMenuLink asChild>
                              <LocalizedClientLink
                                href={`/categories/${category.handle}`}
                                className="block select-none py-2 px-0 leading-none no-underline outline-none transition-colors hover:opacity-70 uppercase tracking-[0.1em] text-[11px]"
                              >
                                {category.name}
                              </LocalizedClientLink>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="h-full flex items-center ">
                    <NavigationMenuLink asChild>
                      <LocalizedClientLink
                        href="/store"
                        className="uppercase tracking-[0.2em] text-[11px] font-bold hover:opacity-70 transition-opacity"
                      >
                        {dict.nav.all_products}
                      </LocalizedClientLink>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            {/* Mobile Menu Button */}
            <div className="flex-1 basis-0 h-full flex items-center justify-center small:hidden sm:justify-start sm:ml-10 ">
              <SideMenu
                regions={regions}
                locales={locales}
                currentLocale={currentLocale}
                dict={dict}
              />
            </div>

            {/* Center: Huge Logo */}
            <div className="flex-1 basis-0 flex items-center justify-center h-full ">
              <LocalizedClientLink
                href="/"
                className="uppercase tracking-[0.4em] text-2xl font-bold flex items-center gap-2"
                data-testid="nav-store-link"
              >
                KHAZIEL
              </LocalizedClientLink>
            </div>
            {/* Right: Icons */}
            <div className="flex-1 basis-0 flex items-center gap-x-6 h-full justify-center sm:justify-end sm:mr-10 lg:mr-6">
              <div className="hidden small:flex items-center gap-x-6 h-full uppercase tracking-[0.1em] text-[10px]">
                <LocalizedClientLink
                  className="hover:opacity-70 transition-opacity flex items-center gap-1"
                  href="/search"
                >
                  <Search size={20} strokeWidth={1.2} />
                </LocalizedClientLink>
                <LocalizedClientLink
                  className="hover:opacity-70 transition-opacity flex items-center gap-1"
                  href="/account"
                  data-testid="nav-account-link"
                >
                  <User size={20} strokeWidth={1.2} />
                </LocalizedClientLink>
              </div>
              <Suspense
                fallback={
                  <LocalizedClientLink
                    className="hover:opacity-70 transition-opacity flex gap-2 uppercase tracking-[0.1em] text-[10px]"
                    href="/cart"
                    data-testid="nav-cart-link"
                  >
                    <ShoppingBag size={20} strokeWidth={1.2} /> (0)
                  </LocalizedClientLink>
                }
              >
                <CartButton dict={dict} />
              </Suspense>
            </div>
          </div>
        </nav>
      </header>
    </NavbarWrapper>
  )
}
