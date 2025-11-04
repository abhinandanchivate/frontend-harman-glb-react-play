import React from 'react';
import { useTranslation } from 'react-i18next';
import { formatCurrency, getCurrencyForLocale } from '../utils/formatters';

const CheckoutPage = () => {
  const { t, i18n } = useTranslation();
  const locale = i18n.language;
  const currency = getCurrencyForLocale(locale);
  const order = { items: 3, subtotal: 599.97, tax: 52.50, shipping: 15.00 };
  const total = order.subtotal + order.tax + order.shipping;

  return (
    <div style={{maxWidth: '1000px', margin: '0 auto', padding: '40px 20px', direction: i18n.dir()}}>
      <h1 data-testid="checkout-title">{t('checkout.title')}</h1>
      <div style={{background: '#f7fafc', borderRadius: '8px', padding: '24px'}} data-testid="order-summary">
        <h2>{t('checkout.orderSummary')}</h2>
        <div data-testid="item-count">{t('checkout.itemCount', { count: order.items })}</div>
        <div style={{display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #e2e8f0'}}>
          <span data-testid="subtotal-label">{t('checkout.subtotal')}</span>
          <span data-testid="subtotal-value">{formatCurrency(order.subtotal, locale, currency)}</span>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #e2e8f0'}}>
          <span data-testid="tax-label">{t('checkout.tax')}</span>
          <span data-testid="tax-value">{formatCurrency(order.tax, locale, currency)}</span>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #e2e8f0'}}>
          <span data-testid="shipping-label">{t('checkout.shipping')}</span>
          <span data-testid="shipping-value">{formatCurrency(order.shipping, locale, currency)}</span>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', padding: '12px 0', fontSize: '20px', fontWeight: 'bold', borderTop: '2px solid #2d3748', marginTop: '12px'}}>
          <span data-testid="total-label">{t('checkout.total')}</span>
          <span data-testid="total-value">{formatCurrency(total, locale, currency)}</span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
