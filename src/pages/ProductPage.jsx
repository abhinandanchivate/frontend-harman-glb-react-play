import React from 'react';
import { useTranslation } from 'react-i18next';
import { formatCurrency, formatDate, formatNumber, getCurrencyForLocale } from '../utils/formatters';

const ProductPage = () => {
  const { t, i18n } = useTranslation();
  const locale = i18n.language;
  const currency = getCurrencyForLocale(locale);
  const product = {
    price: 299.99,
    originalPrice: 399.99,
    stock: 15,
    releaseDate: new Date('2024-01-15'),
    category: 'Electronics',
    deliveryDays: 3,
  };
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div style={{maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', direction: i18n.dir()}}>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px'}}>
        <div style={{height: '400px', background: '#f0f0f0', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px'}}>
          🎧
        </div>
        <div>
          <h1 data-testid="product-title">{t('product.title')}</h1>
          <p data-testid="product-description">{t('product.description')}</p>
          <div style={{fontSize: '28px', fontWeight: 'bold', color: '#2c5282'}} data-testid="product-price">
            {formatCurrency(product.price, locale, currency)}
          </div>
          <div style={{textDecoration: 'line-through', color: '#999'}} data-testid="original-price">
            {formatCurrency(product.originalPrice, locale, currency)}
          </div>
          <div style={{background: '#e53e3e', color: 'white', padding: '4px 12px', display: 'inline-block', borderRadius: '4px'}} data-testid="discount-badge">
            {t('product.discount', { percent: discount })}
          </div>
          <div data-testid="stock-status">{t('product.stock', { count: product.stock })}</div>
          <div data-testid="release-date">{t('product.releaseDate', { date: formatDate(product.releaseDate, locale) })}</div>
          <div data-testid="category" dangerouslySetInnerHTML={{ __html: t('product.category', { category: product.category }) }} />
          <div data-testid="delivery-time">{t('product.deliveryTime', { days: product.deliveryDays })}</div>
          <div data-testid="gender-tag" style={{padding: '6px 12px', background: '#e6fffa', display: 'inline-block', borderRadius: '4px'}}>
            {t('gender.unisex')}
          </div>
          <button style={{width: '100%', padding: '16px', background: '#3182ce', color: 'white', border: 'none', borderRadius: '8px', fontSize: '18px', cursor: 'pointer', marginTop: '20px'}} data-testid="add-to-cart-button">
            {t('product.addToCart')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
