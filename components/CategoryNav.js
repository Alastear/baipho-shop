'use client';

import { motion } from 'framer-motion';
import { CATEGORIES } from '@/data/products';
import styles from './CategoryNav.module.css';

export default function CategoryNav({ activeCategory, onSelect }) {
    const all = { id: 'all', name: 'ทั้งหมด', icon: '🏪' };
    const items = [all, ...CATEGORIES];

    return (
        <div className={styles.wrapper}>
            <div className={styles.track}>
                {items.map((cat) => {
                    const isActive = activeCategory === cat.id;
                    return (
                        <motion.button
                            key={cat.id}
                            className={`${styles.pill} ${isActive ? styles.active : ''}`}
                            onClick={() => onSelect(cat.id)}
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                        >
                            <span className={styles.icon}>{cat.icon}</span>
                            <span className={styles.label}>{cat.name}</span>
                            {isActive && (
                                <motion.div
                                    className={styles.activeBg}
                                    layoutId="activePill"
                                    transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                                />
                            )}
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
}
