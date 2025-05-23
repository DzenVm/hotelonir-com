// src/data/siteDetails.ts
export const siteDetails = {
  siteName: 'HotelOnir',
  siteUrl: 'https://hotelonir.com',
  metadata: {
    title: 'HotelOnir – Discover and Book Hotels with Entertainment Lounges',
    description:
      'HotelOnir offers a seamless booking experience for premier hotels featuring in-house gaming and entertainment lounges across Poland—no hidden fees, just exceptional stays.',
  },
  language: 'en-us',
  locale: 'en-US',
  siteLogo: `${process.env.BASE_PATH || ''}/images/logo-hotelonir.png`,
  // Додаємо ID для Google Analytics
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || '', 
};
