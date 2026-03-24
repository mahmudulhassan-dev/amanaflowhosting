'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Check, X, Shield, Zap, Server, BarChart, History, Maximize } from 'lucide-react';

export function ComparisonTable() {
  const t = useTranslations('Index.Sections.comparison');

  const rows = [
    { id: 'storage', icon: <Server className="text-primary-600" size={20} /> },
    { id: 'uptime', icon: <BarChart className="text-success-600" size={20} /> },
    { id: 'backup', icon: <History className="text-indigo-600" size={20} /> },
    { id: 'scalability', icon: <Maximize className="text-orange-600" size={20} /> },
    { id: 'acceleration', icon: <Zap className="text-yellow-600" size={20} /> },
    { id: 'security', icon: <Shield className="text-red-600" size={20} /> },
    { id: 'support', icon: <Zap className="text-blue-600" size={20} /> },
  ];

  return (
    <div className="w-full">
      {/* Desktop Table View */}
      <div className="hidden lg:block overflow-hidden rounded-3xl border border-surface-200 dark:border-surface-800 bg-white dark:bg-surface-900 shadow-premium">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-surface-200 dark:border-surface-800 bg-surface-50/50 dark:bg-surface-950/50">
              <th className="py-6 px-8 text-sm font-bold text-surface-900 dark:text-white uppercase tracking-wider w-1/3">
                {t('features')}
              </th>
              <th className="py-6 px-8 text-sm font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wider bg-primary-500/5">
                {t('amanaflow')}
              </th>
              <th className="py-6 px-8 text-sm font-bold text-surface-400 uppercase tracking-wider">
                {t('standard')}
              </th>
            </tr>
          </thead>
          <tbody className="text-surface-700 dark:text-surface-300">
            {rows.map((row) => (
              <tr 
                key={row.id} 
                className="border-b border-surface-100 dark:border-surface-800/50 hover:bg-surface-50 dark:hover:bg-surface-800/20 transition-colors"
              >
                <td className="py-5 px-8 font-semibold flex items-center gap-3">
                  {row.icon}
                  {t(`rows.${row.id}.label`)}
                </td>
                <td className="py-5 px-8 font-bold text-surface-900 dark:text-white bg-primary-500/[0.02]">
                  <div className="flex items-center gap-2">
                    <Check className="text-success-500" size={18} />
                    {t(`rows.${row.id}.amanaflow`)}
                  </div>
                </td>
                <td className="py-5 px-8 text-surface-500">
                   {t(`rows.${row.id}.standard`)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Stackable Card View */}
      <div className="lg:hidden space-y-6">
        {rows.map((row) => (
          <div 
            key={row.id} 
            className="bg-white dark:bg-surface-900 rounded-3xl p-6 border border-surface-200 dark:border-surface-800 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-surface-100 dark:bg-surface-800 flex items-center justify-center">
                {row.icon}
              </div>
              <h3 className="font-black text-lg text-surface-900 dark:text-white tracking-tight">
                {t(`rows.${row.id}.label`)}
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="p-4 rounded-2xl bg-primary-500/5 border border-primary-500/10">
                <p className="text-[10px] uppercase font-bold text-primary-600 dark:text-primary-400 tracking-widest mb-1">
                  {t('amanaflow')}
                </p>
                <p className="font-bold text-surface-900 dark:text-white flex items-center gap-2">
                  <Check size={16} className="text-success-500" />
                  {t(`rows.${row.id}.amanaflow`)}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-surface-50 dark:bg-surface-950 border border-surface-200 dark:border-surface-800">
                <p className="text-[10px] uppercase font-bold text-surface-400 tracking-widest mb-1">
                  {t('standard')}
                </p>
                <p className="font-medium text-surface-600 dark:text-surface-400">
                  {t(`rows.${row.id}.standard`)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
