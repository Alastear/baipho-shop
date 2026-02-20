import { notFound } from 'next/navigation';
import { PRODUCTS, getCategoryById } from '@/data/products';
import ProductDetailClient from './ProductDetailClient';

export default async function ProductDetailPage({ params }) {
    const { id } = await params;
    const product = PRODUCTS.find((p) => p.id === Number(id));
    if (!product) notFound();

    const category = getCategoryById(product.category);
    const related = PRODUCTS.filter(
        (p) => p.category === product.category && p.id !== product.id
    ).slice(0, 4);

    return <ProductDetailClient product={product} category={category} related={related} />;
}
