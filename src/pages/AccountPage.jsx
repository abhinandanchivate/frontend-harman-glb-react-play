import React from 'react';
import { useTranslation } from 'react-i18next';
import { formatDate, formatNumber } from '../utils/formatters';

const AccountPage = () => {
  const { t, i18n } = useTranslation();
  const locale = i18n.language;
  const user = {
    name: 'محمد أحمد',
    memberSince: new Date('2023-03-15'),
    orderCount: 42,
    loyaltyPoints: 8750,
  };

  return (
    <div style={{maxWidth: '800px', margin: '0 auto', padding: '40px 20px', direction: i18n.dir()}}>
      <div style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '40px', borderRadius: '12px', marginBottom: '32px'}} data-testid="welcome-section">
        <h1 style={{fontSize: '36px', margin: '0 0 16px 0'}} data-testid="welcome-message">
          {t('account.welcome', { name: user.name })}
        </h1>
        <div data-testid="member-since">
          {t('account.memberSince', { date: formatDate(user.memberSince, locale) })}
        </div>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px'}}>
        <div style={{background: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', borderLeft: '4px solid #3182ce'}} data-testid="orders-card">
          <div style={{fontSize: '32px', fontWeight: 'bold', color: '#2d3748'}} data-testid="order-count">
            {formatNumber(user.orderCount, locale)}
          </div>
          <div style={{fontSize: '14px', color: '#718096'}} data-testid="order-label">
            {t('account.orderHistory', { count: user.orderCount })}
          </div>
        </div>
        <div style={{background: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', borderLeft: '4px solid #38a169'}} data-testid="points-card">
          <div style={{fontSize: '32px', fontWeight: 'bold', color: '#2d3748'}} data-testid="loyalty-points">
            {formatNumber(user.loyaltyPoints, locale)}
          </div>
          <div style={{fontSize: '14px', color: '#718096'}}>
            Loyalty Points
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
