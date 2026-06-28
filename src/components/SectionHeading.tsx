import type { ReactNode } from 'react';

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'center' | 'left';
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}: Props) {
  const alignCls = align === 'center' ? 'mx-auto text-center' : 'text-left';
  return (
    <div className={`max-w-2xl ${alignCls} ${className}`.trim()}>
      {eyebrow && (
        <span className="section-eyebrow reveal">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
          {eyebrow}
        </span>
      )}
      <h2 className="reveal mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-[2.75rem] text-balance">
        {title}
      </h2>
      {description && (
        <p className="reveal mt-4 text-base leading-relaxed text-ink-300 sm:text-lg text-balance">
          {description}
        </p>
      )}
    </div>
  );
}
