'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import HeroBanner from '@/components/HeroBanner';
import ProductCard from '@/components/ProductCard';
import styles from './page.module.css';
import { CATEGORIES, getFeaturedProducts } from '@/data/products';

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HomePage() {
  const featured = getFeaturedProducts(8);

  return (
    <>
      <HeroBanner />

      {/* ===== Categories Section ===== */}
      <section className="section">
        <div className="container">
          <div className="section-header centered">
            <h2 className="section-title">หมวดหมู่สินค้า</h2>
            <p className="section-subtitle">เลือกดูสินค้าตามหมวดหมู่ที่คุณสนใจ</p>
            <div className="divider centered" />
          </div>

          <motion.div
            className={styles.categoryGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            {CATEGORIES.map((cat) => (
              <motion.div key={cat.id} variants={itemVariants}>
                <Link href={`/products?cat=${cat.id}`} className={styles.categoryCard}>
                  <motion.div
                    className={styles.catIconWrapper}
                    style={{ background: cat.colorLight, color: cat.color }}
                    whileHover={{ scale: 1.12, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <span className={styles.catIcon}>{cat.icon}</span>
                  </motion.div>
                  <h3 className={styles.catName}>{cat.name}</h3>
                  <p className={styles.catDesc}>{cat.description}</p>
                  <span className={styles.catArrow}>→</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== Featured Products Section ===== */}
      <section className={`section ${styles.featuredSection}`}>
        <div className="container">
          <div className={styles.featuredHeader}>
            <div>
              <h2 className="section-title">สินค้าแนะนำ</h2>
              <p className="section-subtitle">สินค้ายอดนิยม ลดราคา และของใหม่</p>
              <div className="divider" />
            </div>
            <Link href="/products" className="btn btn-outline">
              ดูทั้งหมด →
            </Link>
          </div>

          <div className="grid-products">
            {featured.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA Banner ===== */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <motion.div
            className={styles.ctaInner}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.ctaText}>
              <h2>พบสินค้าที่ใช่กว่า 30 รายการ</h2>
              <p>ครบทุกหมวดหมู่ คัดสรรมาเพื่อคุณโดยเฉพาะ</p>
            </div>
            <Link href="/products" className="btn btn-primary" style={{ fontSize: '1rem', padding: '14px 36px' }}>
              🛍️ เลือกซื้อสินค้าเลย
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
