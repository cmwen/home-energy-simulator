import React, { useState } from 'react';
import { useEnergyStore } from '../../store/energyStore';
import { useTranslation } from '../../i18n';

function ProtocolCard({
  title,
  isOpen,
  onToggle,
  accentColor,
  children,
}: {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  accentColor: string;
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
        borderLeft: `3px solid ${accentColor}`,
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
          color: accentColor,
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

export default function ProtocolsSection() {
  const userLevel = useEnergyStore((s) => s.userLevel);
  const [openSections, setOpenSections] = useState<Set<string>>(new Set());
  const { t, translations } = useTranslation();

  const toggle = (key: string) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  const visibleSections = translations.protocols_sections.filter(
    (section: any) => !section.advancedOnly || userLevel === 'advanced'
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
          {t('protocols_title')}
        </h2>
        <p style={{ margin: 0, fontSize: 13, color: 'var(--text-muted)' }}>
          {userLevel === 'beginner' 
            ? t('protocols_beginner_subtitle') 
            : t('protocols_advanced_subtitle')}
        </p>
      </div>

      {visibleSections.map((section: any) => (
        <ProtocolCard
          key={section.id}
          title={section.title}
          isOpen={openSections.has(section.id)}
          onToggle={() => toggle(section.id)}
          accentColor={section.accentColor}
        >
          {section.content(userLevel)}
        </ProtocolCard>
      ))}
    </div>
  );
}