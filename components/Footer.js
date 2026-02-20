import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    const categories = [
        { href: '/products?cat=school-supplies', label: 'อุปกรณ์การเรียน' },
        { href: '/products?cat=school-uniforms', label: 'ชุดนักเรียน' },
        { href: '/products?cat=school-shoes', label: 'รองเท้านักเรียน' },
        { href: '/products?cat=general-shoes', label: 'รองเท้าทั่วไป' },
        { href: '/products?cat=pet-supplies', label: 'อุปกรณ์สัตว์เลี้ยง' },
        { href: '/products?cat=others', label: 'อื่น ๆ' },
    ];

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    {/* Brand */}
                    <div className={styles.brand}>
                        <div className={styles.logo}>
                            <span className={styles.logoIcon}>🛍️</span>
                            <span className={styles.logoText}>Baipho<span>Shop</span></span>
                        </div>
                        <p className={styles.tagline}>
                            ร้านค้าครบครัน คัดสรรสินค้าคุณภาพดี<br />
                            เพื่อทุกความต้องการของคุณและครอบครัว
                        </p>
                        <div className={styles.socials}>
                            <a href="#" aria-label="Facebook" className={styles.social}>📘</a>
                            <a href="#" aria-label="Line" className={styles.social}>💬</a>
                            <a href="#" aria-label="Instagram" className={styles.social}>📷</a>
                        </div>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className={styles.colTitle}>หมวดหมู่สินค้า</h3>
                        <ul className={styles.linkList}>
                            {categories.map((c) => (
                                <li key={c.href}>
                                    <Link href={c.href} className={styles.footerLink}>{c.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className={styles.colTitle}>ติดต่อเรา</h3>
                        <ul className={styles.contactList}>
                            <li>📍 123 ถ. สุขุมวิท กรุงเทพฯ 10110</li>
                            <li>📞 02-XXX-XXXX</li>
                            <li>📧 hello@baiphoshop.com</li>
                            <li>⏰ จ-ศ 08:00 – 18:00 น.</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>© 2026 BaiphoShop. สงวนลิขสิทธิ์ทุกประการ.</p>
                    <div className={styles.bottomLinks}>
                        <a href="#">นโยบายความเป็นส่วนตัว</a>
                        <a href="#">เงื่อนไขการใช้งาน</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
