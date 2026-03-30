interface SectionLabelProps {
  children: React.ReactNode;
  dark?: boolean;
}

const SectionLabel = ({ children, dark = false }: SectionLabelProps) => (
  <span
    className={`inline-block font-label font-bold text-xs tracking-[0.2em] uppercase ${
      dark ? "text-accent" : "text-accent"
    }`}
  >
    {children}
  </span>
);

export default SectionLabel;
