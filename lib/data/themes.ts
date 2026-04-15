import { gameSlugs, type GameSlug } from "@/types/builds";

export type ThemeSlug =
  | GameSlug
  | "neutral"
  | "witcher-3"
  | "dark-souls-3"
  | "dark-souls-2"
  | "lies-of-p";

export type ThemeFamily =
  | "neutral"
  | "elden"
  | "cyberpunk"
  | "witcher"
  | "dark-souls-3"
  | "dark-souls-2"
  | "lies-of-p";

export interface GameTheme {
  slug: ThemeSlug;
  family: ThemeFamily;
  label: string;
  displayFontClass: string;
  shellClass: string;
  heroClass: string;
  panelClass: string;
  cardClass: string;
  badgeClass: string;
  statChipClass: string;
  accentTextClass: string;
  buttonClass: string;
  primaryButtonClass: string;
  secondaryButtonClass: string;
  backdropClass: string;
  titleClass: string;
  bodyClass: string;
  mutedClass: string;
  softPanelClass: string;
}

export const gameThemes: Record<ThemeSlug, GameTheme> = {
  neutral: {
    slug: "neutral",
    family: "neutral",
    label: "BuildForge",
    displayFontClass: "font-[family-name:var(--font-display-sans)]",
    shellClass:
      "border-white/10 bg-[radial-gradient(circle_at_top,rgba(89,97,255,0.18),transparent_38%),radial-gradient(circle_at_bottom,rgba(10,179,255,0.12),transparent_42%),linear-gradient(180deg,#090b15_0%,#06070c_100%)]",
    heroClass: "from-sky-400/18 via-cyan-400/8 to-transparent",
    panelClass:
      "border-white/10 bg-white/6 shadow-[0_24px_100px_rgba(10,15,35,0.38)] backdrop-blur-xl",
    cardClass:
      "rounded-[28px] border-white/12 bg-white/7 shadow-[0_18px_60px_rgba(4,12,28,0.42)]",
    badgeClass: "border-white/12 bg-white/8 text-slate-100",
    statChipClass: "border-white/10 bg-white/7 text-slate-100",
    accentTextClass: "text-cyan-200",
    buttonClass: "border-white/16 bg-cyan-400/14 text-cyan-50 hover:bg-cyan-400/22",
    primaryButtonClass: "border-white/14 bg-white/5 text-white hover:bg-white/10",
    secondaryButtonClass: "border-white/12 bg-white/4 text-slate-200 hover:bg-white/10",
    backdropClass:
      "before:bg-[radial-gradient(circle_at_20%_10%,rgba(28,215,255,0.12),transparent_28%)] after:bg-[radial-gradient(circle_at_80%_0%,rgba(133,125,255,0.12),transparent_35%)]",
    titleClass: "text-white",
    bodyClass: "text-slate-200/80",
    mutedClass: "text-slate-400",
    softPanelClass: "rounded-2xl border-white/10 bg-white/4 text-slate-300/72",
  },
  "elden-ring": {
    slug: "elden-ring",
    family: "elden",
    label: "Elden Ring",
    displayFontClass: "font-[family-name:var(--font-display-elden)] tracking-[0.06em]",
    shellClass:
      "elden-shell elden-panel border-amber-200/14 bg-[radial-gradient(circle_at_top,rgba(198,168,91,0.14),transparent_30%),linear-gradient(180deg,#0c0a07_0%,#050403_100%)]",
    heroClass: "from-amber-100/14 via-amber-300/6 to-transparent",
    panelClass:
      "elden-panel border-amber-200/14 bg-[linear-gradient(180deg,rgba(23,18,12,0.96),rgba(8,6,4,0.98))] shadow-[0_24px_80px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,235,190,0.05)]",
    cardClass:
      "elden-card rounded-[28px] border-amber-200/16 bg-[linear-gradient(180deg,rgba(28,21,14,0.96),rgba(12,9,7,0.98))] shadow-[0_18px_60px_rgba(0,0,0,0.42)]",
    badgeClass: "border-amber-200/18 bg-[rgba(198,168,91,0.08)] text-amber-50/90",
    statChipClass: "border-amber-200/18 bg-[rgba(198,168,91,0.06)] text-amber-50/92",
    accentTextClass: "text-amber-200",
    buttonClass:
      "elden-button-primary border-amber-200/28 text-amber-50 hover:text-[#fff3cf]",
    primaryButtonClass: "rounded-[10px] elden-button-primary hover:-translate-y-0.5",
    secondaryButtonClass:
      "rounded-[10px] elden-button-secondary text-amber-50/88 hover:text-[#fff3cf]",
    backdropClass:
      "before:bg-[radial-gradient(circle_at_18%_0%,rgba(198,168,91,0.10),transparent_32%)] after:bg-[linear-gradient(180deg,rgba(255,214,139,0.03),transparent_28%)]",
    titleClass: "text-[#f4e2b5]",
    bodyClass: "text-stone-300/78",
    mutedClass: "text-amber-100/56",
    softPanelClass:
      "rounded-[22px] border-amber-200/14 bg-[rgba(14,10,8,0.78)] text-stone-300/78",
  },
  "cyberpunk-2077": {
    slug: "cyberpunk-2077",
    family: "cyberpunk",
    label: "Cyberpunk 2077",
    displayFontClass:
      "font-[family-name:var(--font-display-cyber)] uppercase tracking-[0.14em]",
    shellClass:
      "border-cyan-300/18 bg-[linear-gradient(180deg,#050713_0%,#03040a_100%)] before:absolute before:inset-0 before:bg-[linear-gradient(90deg,rgba(0,255,245,0.07)_0,rgba(0,255,245,0.02)_1px,transparent_1px,transparent_10px)] before:opacity-40 before:content-['']",
    heroClass: "from-cyan-400/22 via-fuchsia-500/10 to-transparent",
    panelClass:
      "cyber-cut-md rounded-none border-cyan-300/22 bg-[linear-gradient(180deg,rgba(7,10,20,0.96),rgba(1,2,7,0.98))] shadow-[0_0_0_1px_rgba(0,255,245,0.08),0_22px_70px_rgba(0,0,0,0.45)]",
    cardClass:
      "cyber-cut-md rounded-none border-cyan-300/24 bg-[linear-gradient(180deg,rgba(8,12,24,0.96),rgba(1,2,7,0.98))] shadow-[0_0_0_1px_rgba(0,255,245,0.08),0_18px_70px_rgba(0,0,0,0.42)]",
    badgeClass: "rounded-none border-cyan-300/24 bg-cyan-300/10 text-cyan-100",
    statChipClass: "rounded-none border-cyan-300/20 bg-black text-cyan-50",
    accentTextClass: "text-cyan-200",
    buttonClass:
      "rounded-none border-cyan-300/30 bg-black text-cyan-100 hover:bg-cyan-300/10",
    primaryButtonClass:
      "rounded-none border-yellow-300 bg-yellow-300 text-black hover:bg-yellow-200",
    secondaryButtonClass:
      "rounded-none border-cyan-300/20 bg-black text-slate-200 hover:bg-cyan-300/10",
    backdropClass:
      "before:bg-[radial-gradient(circle_at_16%_0%,rgba(0,255,245,0.10),transparent_28%)] after:bg-[radial-gradient(circle_at_85%_5%,rgba(255,0,140,0.10),transparent_34%)]",
    titleClass: "text-yellow-200",
    bodyClass: "text-slate-200/80",
    mutedClass: "text-cyan-200/60",
    softPanelClass:
      "cyber-cut-sm rounded-none border-cyan-300/16 bg-black text-cyan-100/72",
  },
  "witcher-3": {
    slug: "witcher-3",
    family: "witcher",
    label: "The Witcher 3",
    displayFontClass: "font-[family-name:var(--font-display-elden)] tracking-[0.05em]",
    shellClass:
      "witcher-shell witcher-panel border-slate-200/14 bg-[radial-gradient(circle_at_top,rgba(126,151,145,0.14),transparent_34%),linear-gradient(180deg,#0d1214_0%,#06090a_100%)]",
    heroClass: "from-emerald-100/14 via-slate-200/8 to-transparent",
    panelClass:
      "witcher-panel border-slate-200/14 bg-[linear-gradient(180deg,rgba(16,21,22,0.96),rgba(8,10,11,0.98))] shadow-[0_24px_90px_rgba(0,0,0,0.45)]",
    cardClass:
      "witcher-card rounded-[30px] border-slate-200/16 bg-[linear-gradient(180deg,rgba(18,24,25,0.96),rgba(9,11,12,0.98))] shadow-[0_20px_72px_rgba(0,0,0,0.44)]",
    badgeClass: "rounded-sm border-slate-200/18 bg-[rgba(173,196,190,0.07)] text-slate-100",
    statChipClass: "border-slate-200/16 bg-[rgba(181,198,194,0.05)] text-slate-100",
    accentTextClass: "text-emerald-200",
    buttonClass:
      "rounded-[12px] border-slate-200/20 bg-[rgba(161,189,183,0.08)] text-slate-100 hover:bg-[rgba(161,189,183,0.14)]",
    primaryButtonClass:
      "rounded-[12px] witcher-button-primary text-[#f7f5ef] hover:-translate-y-0.5",
    secondaryButtonClass:
      "rounded-[12px] witcher-button-secondary text-slate-100 hover:text-white",
    backdropClass:
      "before:bg-[radial-gradient(circle_at_18%_0%,rgba(145,174,165,0.10),transparent_30%)] after:bg-[radial-gradient(circle_at_82%_8%,rgba(212,228,224,0.06),transparent_36%)]",
    titleClass: "text-slate-50",
    bodyClass: "text-slate-200/78",
    mutedClass: "text-emerald-100/58",
    softPanelClass:
      "rounded-[24px] border-slate-200/14 bg-[linear-gradient(180deg,rgba(15,20,22,0.9),rgba(8,11,12,0.94))] text-slate-300/78",
  },
  "dark-souls-3": {
    slug: "dark-souls-3",
    family: "dark-souls-3",
    label: "Dark Souls 3",
    displayFontClass:
      "font-[family-name:var(--font-display-elden)] uppercase tracking-[0.08em]",
    shellClass:
      "ds3-shell ds3-panel border-orange-200/14 bg-[radial-gradient(circle_at_top,rgba(255,143,86,0.12),transparent_32%),linear-gradient(180deg,#120c0b_0%,#070505_100%)]",
    heroClass: "from-orange-100/14 via-orange-300/8 to-transparent",
    panelClass:
      "ds3-panel border-orange-200/16 bg-[linear-gradient(180deg,rgba(24,15,11,0.96),rgba(8,5,5,0.98))] shadow-[0_24px_90px_rgba(0,0,0,0.48)]",
    cardClass:
      "ds3-card rounded-[28px] border-orange-200/16 bg-[linear-gradient(180deg,rgba(23,14,11,0.96),rgba(9,6,6,0.98))] shadow-[0_20px_70px_rgba(0,0,0,0.46)]",
    badgeClass: "rounded-sm border-orange-200/18 bg-[rgba(247,125,76,0.08)] text-orange-50/92",
    statChipClass: "border-orange-200/16 bg-[rgba(247,125,76,0.06)] text-orange-50/92",
    accentTextClass: "text-orange-200",
    buttonClass:
      "rounded-[10px] border-orange-200/20 bg-[rgba(247,125,76,0.08)] text-orange-50/90 hover:bg-[rgba(247,125,76,0.14)]",
    primaryButtonClass:
      "rounded-[10px] ds3-button-primary text-[#fff1e5] hover:-translate-y-0.5",
    secondaryButtonClass:
      "rounded-[10px] ds3-button-secondary text-orange-50/90 hover:text-white",
    backdropClass:
      "before:bg-[radial-gradient(circle_at_18%_0%,rgba(247,125,76,0.10),transparent_28%)] after:bg-[radial-gradient(circle_at_82%_8%,rgba(255,204,169,0.05),transparent_36%)]",
    titleClass: "text-[#f5d9c2]",
    bodyClass: "text-stone-300/78",
    mutedClass: "text-orange-100/56",
    softPanelClass:
      "rounded-[22px] border-orange-200/14 bg-[linear-gradient(180deg,rgba(21,13,10,0.9),rgba(8,5,5,0.94))] text-stone-300/78",
  },
  "dark-souls-2": {
    slug: "dark-souls-2",
    family: "dark-souls-2",
    label: "Dark Souls 2",
    displayFontClass:
      "font-[family-name:var(--font-display-sans)] uppercase tracking-[0.18em]",
    shellClass:
      "ds2-shell ds2-panel border-teal-100/14 bg-[radial-gradient(circle_at_top,rgba(118,153,143,0.12),transparent_34%),linear-gradient(180deg,#0d1012_0%,#050708_100%)]",
    heroClass: "from-teal-100/14 via-stone-200/8 to-transparent",
    panelClass:
      "ds2-panel border-teal-100/14 bg-[linear-gradient(180deg,rgba(15,18,20,0.96),rgba(7,8,10,0.98))] shadow-[0_24px_90px_rgba(0,0,0,0.46)]",
    cardClass:
      "ds2-card rounded-[26px] border-teal-100/14 bg-[linear-gradient(180deg,rgba(16,20,21,0.96),rgba(7,9,10,0.98))] shadow-[0_18px_64px_rgba(0,0,0,0.44)]",
    badgeClass: "rounded-sm border-teal-100/16 bg-[rgba(116,153,145,0.07)] text-teal-50/90",
    statChipClass: "border-teal-100/14 bg-[rgba(116,153,145,0.05)] text-teal-50/90",
    accentTextClass: "text-teal-100",
    buttonClass:
      "rounded-[10px] border-teal-100/18 bg-[rgba(116,153,145,0.08)] text-teal-50/90 hover:bg-[rgba(116,153,145,0.14)]",
    primaryButtonClass:
      "rounded-[10px] ds2-button-primary text-[#f7f3eb] hover:-translate-y-0.5",
    secondaryButtonClass:
      "rounded-[10px] ds2-button-secondary text-teal-50/88 hover:text-white",
    backdropClass:
      "before:bg-[radial-gradient(circle_at_18%_0%,rgba(116,153,145,0.10),transparent_32%)] after:bg-[radial-gradient(circle_at_82%_10%,rgba(204,190,153,0.05),transparent_34%)]",
    titleClass: "text-[#f1e9da]",
    bodyClass: "text-stone-300/78",
    mutedClass: "text-teal-100/56",
    softPanelClass:
      "rounded-[20px] border-teal-100/14 bg-[linear-gradient(180deg,rgba(12,16,18,0.88),rgba(6,8,9,0.94))] text-stone-300/76",
  },
  "lies-of-p": {
    slug: "lies-of-p",
    family: "lies-of-p",
    label: "Lies of P",
    displayFontClass: "font-[family-name:var(--font-display-elden)] tracking-[0.04em]",
    shellClass:
      "lies-shell lies-panel border-rose-200/16 bg-[radial-gradient(circle_at_top,rgba(181,111,86,0.12),transparent_34%),linear-gradient(180deg,#140b0d_0%,#070405_100%)]",
    heroClass: "from-rose-100/16 via-amber-200/10 to-transparent",
    panelClass:
      "lies-panel border-rose-200/16 bg-[linear-gradient(180deg,rgba(24,12,16,0.96),rgba(10,5,7,0.98))] shadow-[0_24px_90px_rgba(0,0,0,0.48)]",
    cardClass:
      "lies-card rounded-[30px] border-rose-200/18 bg-[linear-gradient(180deg,rgba(23,11,15,0.96),rgba(10,5,7,0.98))] shadow-[0_20px_72px_rgba(0,0,0,0.46)]",
    badgeClass: "rounded-[10px] border-rose-200/18 bg-[rgba(198,129,108,0.08)] text-rose-50/92",
    statChipClass: "border-rose-200/16 bg-[rgba(198,129,108,0.06)] text-rose-50/92",
    accentTextClass: "text-amber-100",
    buttonClass:
      "rounded-[14px] border-rose-200/20 bg-[rgba(198,129,108,0.08)] text-rose-50/90 hover:bg-[rgba(198,129,108,0.14)]",
    primaryButtonClass:
      "rounded-[14px] lies-button-primary text-[#fff1e7] hover:-translate-y-0.5",
    secondaryButtonClass:
      "rounded-[14px] lies-button-secondary text-rose-50/88 hover:text-white",
    backdropClass:
      "before:bg-[radial-gradient(circle_at_18%_0%,rgba(198,129,108,0.10),transparent_28%)] after:bg-[radial-gradient(circle_at_82%_6%,rgba(255,220,193,0.05),transparent_34%)]",
    titleClass: "text-[#f3d7c7]",
    bodyClass: "text-rose-50/76",
    mutedClass: "text-amber-100/56",
    softPanelClass:
      "rounded-[24px] border-rose-200/16 bg-[linear-gradient(180deg,rgba(23,11,15,0.9),rgba(9,5,7,0.95))] text-rose-50/76",
  },
};

export function getGameTheme(slug?: string | null) {
  if (!slug) {
    return gameThemes.neutral;
  }

  return gameThemes[slug as ThemeSlug] ?? gameThemes.neutral;
}

export function isGameSlug(value: string): value is GameSlug {
  return gameSlugs.includes(value as GameSlug);
}
