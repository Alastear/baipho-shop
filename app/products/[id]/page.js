'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PRODUCTS, getCategoryById } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import styles from './page.module.css';

const BADGE_LABELS = {
    new: '✨ ใหม่',
    sale: '🔥 ลดราคา',
    popular: '⭐ ยอดนิยม',
};

export default function ProductDetailPage({ params }) {
    const product = PRODUCTS.find((p) => p.id === Number(params.id));
    if (!product) notFound();

    const category = getCategoryById(product.category);
    const discount = product.originalPrice
        ? Math.round((1 - product.price / product.originalPrice) * 100)
        : null;

    const related = PRODUCTS.filter(
        (p) => p.category === product.category && p.id !== product.id
    ).slice(0, 4);

    return (
        <>
            <div className={styles.pageHeader}>
                <div className="container">
                    <div className={styles.breadcrumb}>
                        <Link href="/">หน้าแรก</Link>
                        <span>/</span>
                        <Link href="/products">สินค้า</Link>
                        <span>/</span>
                        {category && (
                            <>
                                <Link href={`/products?cat=${category.id}`}>{category.name}</Link>
                                <span>/</span>
                            </>
                        )}
                        <span>{product.name}</span>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className={styles.productLayout}>
                    {/* Image */}
                    <motion.div
                        className={styles.imageBox}
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img src={product.image} alt={product.name} className={styles.mainImage} />
                        {product.badge && (
                            <span className={`${styles.badge} ${styles[product.badge]}`}>
                                {BADGE_LABELS[product.badge]}
                            </span>
                        )}
                        {discount && (
                            <span className={styles.discountTag}>-{discount}%</span>
                        )}
                    </motion.div>

                    {/* Info */}
                    <motion.div
                        className={styles.infoBox}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {category && (
                            <Link href={`/products?cat=${category.id}`} className={styles.catTag}>
                                {category.icon} {category.name}
                            </Link>
                        )}

                        <h1 className={styles.productName}>{product.name}</h1>
                        <p className={styles.productDesc}>{product.description}</p>

                        <div className={styles.priceBlock}>
                            <span className={styles.price}>฿{product.price.toLocaleString()}</span>
                            {product.originalPrice && (
                                <>
                                    <span className={styles.originalPrice}>
                                        ฿{product.originalPrice.toLocaleString()}
                                    </span>
                                    <span className={styles.saveBadge}>
                                        ประหยัด ฿{(product.originalPrice - product.price).toLocaleString()}
                                    </span>
                                </>
                            )}
                        </div>

                        <div className={styles.meta}>
                            <div className={styles.metaItem}>
                                <span className={styles.metaIcon}>🚚</span>
                                <span>จัดส่งฟรี เมื่อซื้อครบ ฿500</span>
                            </div>
                            <div className={styles.metaItem}>
                                <span className={styles.metaIcon}>🔄</span>
                                <span>คืนสินค้าได้ภายใน 7 วัน</span>
                            </div>
                            <div className={styles.metaItem}>
                                <span className={styles.metaIcon}>✅</span>
                                <span>สินค้าแท้ รับประกันคุณภาพ</span>
                            </div>
                        </div>

                        <div className={styles.actions}>
                            <motion.button
                                className="btn btn-primary"
                                style={{ flex: 1, justifyContent: 'center' }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                🛒 เพิ่มลงตะกร้า
                            </motion.button>
                            <motion.button
                                className="btn btn-outline"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                ❤️
                            </motion.button>
                        </div>

                        <Link href="/products" className={styles.backLink}>
                            ← กลับไปหน้าสินค้า
                        </Link>
                    </motion.div>
                </div>

                {/* Related Products */}
                {related.length > 0 && (
                    <section className={styles.relatedSection}>
                        <div className="section-header">
                            <h2 className="section-title">สินค้าในหมวดเดียวกัน</h2>
                            <div className="divider" />
                        </div>
                        <div className="grid-products" style={{ marginTop: 24 }}>
                            {related.map((p, i) => (
                                <ProductCard key={p.id} product={p} index={i} />
                            ))}
                        </div>
                    </section>
                )}
                <div style={{ height: 80 }} />
            </div>
        </>
    );
}
