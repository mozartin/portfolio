import { Head, Link } from '@inertiajs/react';

export default function Layout({ children, title = 'Portfolio' }) {
    return (
        <>
            <Head title={title} />
            <div className="min-h-screen flex flex-col bg-white">
                {/* Navbar */}
                <nav className="bg-primary-bg text-text-primary">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16 md:h-20">
                            <div className="flex items-center">
                                <Link
                                    href="/"
                                    className="text-xl md:text-2xl font-bold text-text-primary hover:opacity-80 transition-opacity"
                                >
                                    Portfolio
                                </Link>
                            </div>
                            <div className="flex items-center space-x-4 md:space-x-6">
                                <Link
                                    href="/"
                                    className="text-text-primary hover:opacity-70 transition-opacity text-sm md:text-base"
                                >
                                    Home
                                </Link>
                                <Link
                                    href="#work"
                                    className="text-text-primary hover:opacity-70 transition-opacity text-sm md:text-base"
                                >
                                    Work
                                </Link>
                                <Link
                                    href="#about"
                                    className="text-text-primary hover:opacity-70 transition-opacity text-sm md:text-base"
                                >
                                    About
                                </Link>
                                <Link
                                    href="#contact"
                                    className="btn-primary text-sm md:text-base"
                                >
                                    Get in Touch
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Main Content */}
                <main className="flex-grow">{children}</main>

                {/* Footer */}
                <footer className="bg-third-bg text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Portfolio</h3>
                                <p className="text-white/80 text-sm">
                                    Building beautiful and functional websites that make a difference.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                                <ul className="space-y-2 text-sm">
                                    <li>
                                        <Link href="/" className="text-white/80 hover:text-white transition-colors">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#work" className="text-white/80 hover:text-white transition-colors">
                                            Work
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#about" className="text-white/80 hover:text-white transition-colors">
                                            About
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Connect</h3>
                                <ul className="space-y-2 text-sm">
                                    <li>
                                        <a href="mailto:contact@portfolio.com" className="text-white/80 hover:text-white transition-colors">
                                            Email
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-white/80 hover:text-white transition-colors">
                                            LinkedIn
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-white/80 hover:text-white transition-colors">
                                            GitHub
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm text-white/60">
                            <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}

