import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"
import { Icons } from "./icons"

export function Header() {
  return (
    <header className="w-full body-font text-white bg-background border-b">
      <div className="container flex flex-row items-start justify-between px-2 py-4 mx-auto">
        <div>
          <Image src="/paragon_logo.svg" alt="Paragon logomark" width={32} height={32} />
        </div>

        <div className="space-x-2">
          <Button variant="outline" asChild>
            <Link href="http://parfgc.to/CSC" target="_blank">
              Matcherino
              <Icons.externalLink className="w-3 ml-1" />
            </Link>
          </Button>
          <Button asChild>
            <Link href="http://parfgc.to/JayEazy" target="_blank">
              Bracket
              <Icons.externalLink className="w-3 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
