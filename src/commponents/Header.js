export default function Header() {
    return (
        <header className="flex justify-between px-5 py-3 text-xl bg-primary">
            <a href="#" className="text-white font-bold text-3xl">CODE-FM</a>
            <ul className="flex text-white">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Peojects</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </header>
    )
}