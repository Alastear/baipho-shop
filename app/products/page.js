'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '@/components/ProductCard';
import CategoryNav from '@/components/CategoryNav';
import styles from './page.module.css';
import { PRODUCTS, getCategoryById } from '@/data/products';

function ProductsContent() {
    const searchParams = useSearchParams();
    const initialCat = searchParams.get('cat') || 'all';

    const [activeCategory, setActiveCategory] = useState(initialCat);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('default');

    useEffect(() => {
        const cat = searchParams.get('cat') || 'all';
        setActiveCategory(cat);
    }, [searchParams]);

    const filteredProducts = PRODUCTS
        .filter((p) => {
            const matchCat = activeCategory === 'all' || p.category === activeCategory;
            const matchSearch =
                p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchCat && matchSearch;
        })
        .sort((a, b) => {
            if (sortBy === 'price-asc') return a.price - b.price;
            if (sortBy === 'price-desc') return b.price - a.price;
            return 0;
        });

    const activeCategoryData = getCategoryById(activeCategory);

    return (
        <>
            {/* Page header */}
            <div className={styles.pageHeader}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className={styles.breadcrumb}>
                            <a href="/">หน้าแรก</a> <span>/</span>
                            <span>สินค้าทั้งหมด</span>
                            {activeCategoryData && (
                                <>
                                    <span>/</span>
                                    <span>{activeCategoryData.name}</span>
                                </>
                            )}
                        </div>
                        <h1 className={styles.pageTitle}>
                            {activeCategoryData ? (
                                <>
                                    <span>{activeCategoryData.icon}</span> {activeCategoryData.name}
                                </>
                            ) : (
                                '🛍️ สินค้าทั้งหมด'
                            )}
                        </h1>
                        <p className={styles.pageSubtitle}>
                            พบ {filteredProducts.length} รายการ
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container">
                {/* Category filter */}
                <div className={styles.filterSection}>
                    <CategoryNav
                        activeCategory={activeCategory}
                        onSelect={(id) => {
                            setActiveCategory(id);
                            window.history.pushState({}, '', id === 'all' ? '/products' : `/products?cat=${id}`);
                        }}
                    />
                </div>

                {/* Search + Sort bar */}
                <div className={styles.controlsBar}>
                    <div className={styles.searchWrapper}>
                        <span className={styles.searchIcon}>🔍</span>
                        <input
                            type="text"
                            placeholder="ค้นหาสินค้า..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className={styles.searchInput}
                        />
                        {searchQuery && (
                            <button
                                className={styles.clearSearch}
                                onClick={() => setSearchQuery('')}
                                aria-label="ล้างการค้นหา"
                            >
                                ✕
                            </button>
                        )}
                    </div>

                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className={styles.sortSelect}
                    >
                        <option value="default">เรียงตาม: ค่าเริ่มต้น</option>
                        <option value="price-asc">ราคา: น้อย → มาก</option>
                        <option value="price-desc">ราคา: มาก → น้อย</option>
                    </select>
                </div>

                {/* Products grid */}
                {filteredProducts.length === 0 ? (
                    <motion.div
                        className={styles.empty}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <span className={styles.emptyIcon}>🔍</span>
                        <h3>ไม่พบสินค้าที่ตรงกับการค้นหา</h3>
                        <p>ลองเปลี่ยนคำค้นหาหรือเลือกหมวดหมู่อื่น</p>
                    </motion.div>
                ) : (
                    <motion.div
                        className="grid-products"
                        key={activeCategory + searchQuery}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProducts.map((product, i) => (
                                <ProductCard key={product.id} product={product} index={i} />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                )}

                <div style={{ height: 80 }} />
            </div>
        </>
    );
}

export default function ProductsPage() {
    return (
        <Suspense fallback={<div style={{ minHeight: '80vh' }} />}>
            <ProductsContent />
        </Suspense>
    );
}
