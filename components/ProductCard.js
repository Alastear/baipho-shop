'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './ProductCard.module.css';

const BADGE_LABELS = {
    new: '✨ ใหม่',
    sale: '🔥 ลดราคา',
    popular: '⭐ ยอดนิยม',
};

export default function ProductCard({ product, index = 0 }) {
    const discount = product.originalPrice
        ? Math.round((1 - product.price / product.originalPrice) * 100)
        : null;

    return (
        <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
        >
            <Link href={`/products/${product.id}`} className={styles.imageWrapper}>
                <img
                    src={product.image}
                    alt={product.name}
                    className={styles.image}
                    loading="lazy"
                />
                {product.badge && (
                    <span className={`${styles.badge} ${styles[product.badge]}`}>
                        {BADGE_LABELS[product.badge]}
                    </span>
                )}
                {discount && (
                    <span className={styles.discount}>-{discount}%</span>
                )}
                <div className={styles.overlay}>
                    <span className={styles.viewBtn}>ดูสินค้า →</span>
                </div>
            </Link>

            <div className={styles.body}>
                <Link href={`/products/${product.id}`}>
                    <h3 className={styles.name}>{product.name}</h3>
                </Link>
                <p className={styles.desc}>{product.description}</p>

                <div className={styles.priceRow}>
                    <div className={styles.prices}>
                        <span className={styles.price}>฿{product.price.toLocaleString()}</span>
                        {product.originalPrice && (
                            <span className={styles.originalPrice}>฿{product.originalPrice.toLocaleString()}</span>
                        )}
                    </div>
                    <motion.button
                        className={styles.addBtn}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="เพิ่มในตะกร้า"
                    >
                        🛒
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}
