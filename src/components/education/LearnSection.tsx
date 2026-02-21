import React, { useState } from 'react';
import { useEnergyStore } from '../../store/energyStore';
import { useTranslation } from '../../i18n';

function AccordionCard({
  title,
  isOpen,
  onToggle,
  children,
}: {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderRadius: 8,
        marginBottom: 10,
        overflow: 'hidden',
        border: '1px solid var(--bg-card)',
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '14px 18px',
          backgroundColor: isOpen ? 'var(--bg-card-hover)' : 'transparent',
          border: 'none',
          cursor: 'pointer',
          color: 'var(--color-primary)',
          fontSize: 15,
          fontWeight: 600,
          textAlign: 'left',
          transition: 'background-color 0.2s',
        }}
      >
        <span>{title}</span>
        <span
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s',
            fontSize: 12,
          }}
        >
          ▼
        </span>
      </button>
      {isOpen && (
        <div
          style={{
            padding: '14px 18px',
            color: 'var(--text-primary)',
            fontSize: 14,
            lineHeight: 1.7,
            borderTop: '1px solid var(--bg-card)',
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default function LearnSection() {
  const userLevel = useEnergyStore((s) => s.userLevel);
  const [openSections, setOpenSections] = useState<Set<number>>(new Set());
  const { t, translations } = useTranslation();

  const toggle = (index: number) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const visibleSections = translations.learn_sections.filter(
    (s: any) => !s.advancedOnly || userLevel === 'advanced'
  );

  return (
    <div style={{ padding: '0 4px' }}>
      <div style={{ marginBottom: 16 }}>
        <h2
          style={{
            margin: '0 0 6px',
            fontSize: 20,
            fontWeight: 700,
            color: 'var(--text-primary)',
          }}
        >
          {t('learn_title')}
        </h2>
        <p style={{ margin: 0, fontSize: 13, color: 'var(--text-muted)' }}>
          {userLevel === 'beginner'
            ? t('learn_beginner_subtitle')
            : t('learn_advanced_subtitle')}
        </p>
      </div>
      {visibleSections.map((section: any, idx: number) => (
        <AccordionCard
          key={idx}
          title={section.title}
          isOpen={openSections.has(idx)}
          onToggle={() => toggle(idx)}
        >
          {typeof section.content === 'function' ? section.content(userLevel) : section.content}
        </AccordionCard>
      ))}
    </div>
  );
}