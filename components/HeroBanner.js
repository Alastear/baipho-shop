'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './HeroBanner.module.css';

const floatVariants = {
    initial: { y: 0 },
    animate: {
        y: [-8, 8, -8],
        transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
    },
};

export default function HeroBanner() {
    return (
        <section className={styles.hero}>
            {/* Background blobs */}
            <div className={styles.blob1} />
            <div className={styles.blob2} />
            <div className={styles.blob3} />

            <div className="container">
                <div className={styles.inner}>
                    {/* Text side */}
                    <div className={styles.textSide}>
                        <motion.div
                            className={styles.badge}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            🎉 ยินดีต้อนรับสู่ Baipho Shop
                        </motion.div>

                        <motion.h1
                            className={styles.headline}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            สินค้าครบ
                            <br />
                            <span className={styles.highlight}>คุณภาพดี</span>
                            <br />
                            ราคาคุ้มค่า
                        </motion.h1>

                        <motion.p
                            className={styles.sub}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            อุปกรณ์การเรียน ชุดนักเรียน รองเท้า และสินค้าสัตว์เลี้ยง
                            ครบครันในที่เดียว คัดสรรคุณภาพเพื่อคุณและครอบครัว
                        </motion.p>

                        <motion.div
                            className={styles.actions}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.65 }}
                        >
                            <Link href="/products" className="btn btn-primary">
                                🛍️ ดูสินค้าทั้งหมด
                            </Link>
                            <Link href="/products?cat=school-supplies" className="btn btn-outline">
                                📚 อุปกรณ์การเรียน
                            </Link>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            className={styles.stats}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            {[
                                { n: '6', label: 'หมวดหมู่สินค้า' },
                                { n: '30+', label: 'รายการสินค้า' },
                                { n: '100%', label: 'สินค้าคุณภาพ' },
                            ].map((s) => (
                                <div key={s.label} className={styles.stat}>
                                    <span className={styles.statNum}>{s.n}</span>
                                    <span className={styles.statLabel}>{s.label}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Visual side */}
                    <div className={styles.visualSide}>
                        <motion.div
                            className={styles.mainCard}
                            initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ delay: 0.4, duration: 0.7, type: 'spring' }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&q=80"
                                alt="สินค้าแนะนำ"
                                className={styles.mainImg}
                            />
                            <div className={styles.cardOverlay}>
                                <span className={styles.cardTag}>⭐ สินค้ายอดนิยม</span>
                            </div>
                        </motion.div>

                        {/* Floating mini cards */}
                        <motion.div
                            className={`${styles.miniCard} ${styles.mini1}`}
                            variants={floatVariants}
                            initial="initial"
                            animate="animate"
                        >
                            <span>📚</span> อุปกรณ์การเรียน
                        </motion.div>
                        <motion.div
                            className={`${styles.miniCard} ${styles.mini2}`}
                            variants={floatVariants}
                            initial="initial"
                            animate={{ y: [8, -8, 8], transition: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' } }}
                        >
                            <span>🐾</span> Pet Shop
                        </motion.div>
                        <motion.div
                            className={`${styles.miniCard} ${styles.mini3}`}
                            variants={floatVariants}
                            initial="initial"
                            animate={{ y: [-6, 10, -6], transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
                        >
                            <span>👟</span> รองเท้า
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
