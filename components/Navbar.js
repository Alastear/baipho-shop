'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/', label: 'หน้าแรก' },
        { href: '/products', label: 'สินค้าทั้งหมด' },
        { href: '/products?cat=school-supplies', label: 'อุปกรณ์การเรียน' },
        { href: '/products?cat=pet-supplies', label: 'สัตว์เลี้ยง' },
    ];

    return (
        <motion.nav
            className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <div className="container">
                <div className={styles.inner}>
                    {/* Logo */}
                    <Link href="/" className={styles.logo}>
                        <motion.div
                            className={styles.logoIcon}
                            whileHover={{ rotate: 10, scale: 1.1 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            🛍️
                        </motion.div>
                        <span className={styles.brandText}>
                            Baipho<span className={styles.brandAccent}>Shop</span>
                        </span>
                    </Link>

                    {/* Desktop links */}
                    <ul className={styles.navLinks}>
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} className={styles.navLink}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* CTA */}
                    <div className={styles.actions}>
                        <Link href="/products" className="btn btn-primary" style={{ padding: '9px 22px', fontSize: '0.88rem' }}>
                            🔍 ค้นหาสินค้า
                        </Link>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className={styles.hamburger}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`${styles.bar} ${menuOpen ? styles.bar1Open : ''}`} />
                        <span className={`${styles.bar} ${menuOpen ? styles.bar2Open : ''}`} />
                        <span className={`${styles.bar} ${menuOpen ? styles.bar3Open : ''}`} />
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className={styles.mobileMenu}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        {navLinks.map((link, i) => (
                            <motion.div
                                key={link.href}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: i * 0.06 }}
                            >
                                <Link
                                    href={link.href}
                                    className={styles.mobileLink}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
