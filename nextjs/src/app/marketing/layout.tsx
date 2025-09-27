import Link from "next/link"

export default function MarketingLayout({children} : {
    children : React.ReactNode
}) {
    return (
        <div>
            <header>
                <nav>
                    <Link href={"/marketing/"}>Home</Link>
                    <Link href={"/marketing/about"}>About</Link>
                    <Link href={"/marketing/contact"}>Contact</Link>
                </nav>
            </header>
            <main>
                {children}
            </main>
        </div>
    )
}