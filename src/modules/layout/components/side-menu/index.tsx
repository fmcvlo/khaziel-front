"use client"

import { Popover, PopoverPanel, Transition } from "@headlessui/react"
import { ArrowRightMini, XMark } from "@medusajs/icons"
import { Text, clx, useToggleState } from "@medusajs/ui"
import { Fragment } from "react"
import { Menu } from "lucide-react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CountrySelect from "../country-select"
import LanguageSelect from "../language-select"
import { HttpTypes } from "@medusajs/types"
import { Locale } from "@lib/data/locales"

type SideMenuProps = {
  regions: HttpTypes.StoreRegion[] | null
  locales: Locale[] | null
  currentLocale: string | null
  dict: any
}

const SideMenu = ({ regions, locales, currentLocale, dict }: SideMenuProps) => {
  const countryToggleState = useToggleState()
  const languageToggleState = useToggleState()

  const SideMenuItems = {
    [dict.nav.shop]: "/store",
    [dict.nav.account]: "/account",
    [dict.nav.cart]: "/cart",
  }

  return (
    <div className="h-full font-syne">
      <div className="flex items-center h-full">
        <Popover className="h-full flex">
          {({ open, close }) => (
            <>
              <div className="relative flex h-full">
                <Popover.Button
                  data-testid="nav-menu-button"
                  className="relative h-full flex items-center transition-all ease-out duration-200 focus:outline-none hover:opacity-70 uppercase tracking-[0.2em] text-[10px]"
                >
                  <Menu size={20} strokeWidth={1} className="mr-2" />
                </Popover.Button>
              </div>

              {open && (
                <div
                  className="fixed inset-0 z-[50] bg-white pointer-events-auto"
                  onClick={close}
                  data-testid="side-menu-backdrop"
                />
              )}

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-300"
                enterFrom="opacity-0 translate-x-[-100%]"
                enterTo="opacity-100 translate-x-0"
                leave="transition ease-in duration-200"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 translate-x-[-100%]"
              >
                <PopoverPanel className="flex flex-col fixed inset-0 z-[51] w-full h-full bg-white text-black font-syne">
                  <div
                    data-testid="nav-menu-popup"
                    className="flex flex-col h-full justify-between p-6"
                  >
                    <div
                      className="flex justify-between items-center"
                      id="xmark"
                    >
                      <LocalizedClientLink
                        href="/"
                        className="uppercase tracking-[0.3em] text-sm font-bold"
                        onClick={close}
                      >
                        KHAZIEL
                      </LocalizedClientLink>
                      <button data-testid="close-menu-button" onClick={close}>
                        <XMark />
                      </button>
                    </div>
                    <ul className="flex flex-col gap-8 items-center justify-center flex-grow">
                      {Object.entries(SideMenuItems).map(([name, href]) => {
                        return (
                          <li key={name}>
                            <LocalizedClientLink
                              href={href}
                              className="text-4xl uppercase tracking-[0.2em] hover:text-gray-500 transition-colors"
                              onClick={close}
                              data-testid={`${name.toLowerCase()}-link`}
                            >
                              {name}
                            </LocalizedClientLink>
                          </li>
                        )
                      })}
                    </ul>
                    <div className="flex flex-col gap-y-6 border-t pt-6">
                      <div className="grid grid-cols-2 gap-4 uppercase tracking-[0.1em] text-[10px]">
                        {!!locales?.length && (
                          <div
                            className="flex justify-between border p-3 items-center"
                            onMouseEnter={languageToggleState.open}
                            onMouseLeave={languageToggleState.close}
                          >
                            <LanguageSelect
                              toggleState={languageToggleState}
                              locales={locales}
                              currentLocale={currentLocale}
                            />
                            <ArrowRightMini
                              className={clx(
                                "transition-transform duration-150",
                                languageToggleState.state ? "-rotate-90" : ""
                              )}
                            />
                          </div>
                        )}
                        <div
                          className="flex justify-between border p-3 items-center"
                          onMouseEnter={countryToggleState.open}
                          onMouseLeave={countryToggleState.close}
                        >
                          {regions && (
                            <CountrySelect
                              toggleState={countryToggleState}
                              regions={regions}
                            />
                          )}
                          <ArrowRightMini
                            className={clx(
                              "transition-transform duration-150",
                              countryToggleState.state ? "-rotate-90" : ""
                            )}
                          />
                        </div>
                      </div>
                      <Text className="text-center txt-compact-small uppercase tracking-[0.1em] text-[8px] text-gray-400">
                        © {new Date().getFullYear()} KHAZIEL. All rights
                        reserved.
                      </Text>
                    </div>
                  </div>
                </PopoverPanel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  )
}

export default SideMenu
