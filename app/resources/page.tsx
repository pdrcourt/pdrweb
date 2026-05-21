import React from 'react';
import { Metadata } from 'next';
import ResourcesClientPage from './ResourcesClientPage';

export const metadata: Metadata = {
  title: 'Resources & Legal | PDR COURT',
  description: 'Read our Rules, Policies, Terms, and Legal Disclaimers to understand how we maintain a just system for society and businesses.',
};

export default function ResourcesPage() {
  return <ResourcesClientPage />;
}
