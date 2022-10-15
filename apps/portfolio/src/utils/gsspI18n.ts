import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../../next-i18next.config';

export const gsspI18n = async (locale?: string) => {
  return serverSideTranslations(locale || 'en', ['common'], nextI18NextConfig);
};
