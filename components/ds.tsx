// Design system components for layout and prose styling.
// Provides reusable components for structuring pages and formatting rich text content.

import { cn } from "@/lib/utils";

type DSProps = {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  style?: React.CSSProperties;
  dangerouslySetInnerHTML?: { __html: string };
  containerClassName?: string;
  isArticle?: boolean;
  isSpaced?: boolean;
};

export const Section = ({ children, className, id, style }: DSProps) => (
  <section className={cn("py-2 sm:py-4", className)} id={id} style={style}>
    {children}
  </section>
);

export const Container = ({ children, className, id, style }: DSProps) => (
  <div
    className={cn("max-w-5xl mx-auto p-4 sm:p-6", className)}
    id={id}
    style={style}
  >
    {children}
  </div>
);

export const Nav = ({
  children,
  className,
  id,
  style,
  containerClassName,
}: DSProps) => (
  <nav className={cn(className)} id={id} style={style}>
    <div
      id="nav-container"
      className={cn("max-w-5xl mx-auto px-4 sm:px-6 py-2", containerClassName)}
    >
      {children}
    </div>
  </nav>
);

export const Layout = ({ children, className, style }: DSProps) => (
  <html
    lang="en"
    suppressHydrationWarning
    className={cn("scroll-smooth antialiased focus:scroll-auto", className)}
    style={style}
  >
    {children}
  </html>
);

export const Main = ({ children, className, id, style }: DSProps) => (
  <main className={cn(className)} id={id} style={style}>
    {children}
  </main>
);

// Prose component styles
const proseBaseClasses = "antialiased text-base leading-7";

const proseHeadingClasses = [
  "[&_h1]:text-4xl sm:[&_h1]:text-5xl [&_h1]:font-medium [&_h1]:tracking-tight [&_h1]:text-balance",
  "[&_h2]:text-3xl sm:[&_h2]:text-4xl [&_h2]:font-medium [&_h2]:tracking-tight [&_h2]:text-balance",
  "[&_h3]:text-2xl sm:[&_h3]:text-3xl [&_h3]:font-medium [&_h3]:tracking-tight [&_h3]:text-balance",
  "[&_h4]:text-xl sm:[&_h4]:text-2xl [&_h4]:tracking-tight [&_h4]:text-balance",
  "[&_h5]:text-lg sm:[&_h5]:text-xl [&_h5]:tracking-tight [&_h5]:text-balance",
  "[&_h6]:text-base sm:[&_h6]:text-lg [&_h6]:tracking-tight [&_h6]:text-balance",
];

const proseTextClasses = [
  "[&_p]:text-pretty [&_p]:text-base",
  "[&_strong]:font-semibold",
  "[&_muted]:text-muted-foreground",
  "[&_em]:italic",
  "[&_del]:line-through",
  "[&_small]:text-sm [&_small]:leading-snug",
  "[&_sub]:text-sm [&_sub]:align-baseline [&_sup]:text-sm [&_sup]:align-baseline",
];

const proseLinkClasses =
  "[&_a:not(h1_a,h2_a,h3_a,h4_a,h5_a,h6_a,.bookmark-link)]:text-primary dark:[&_a:not(h1_a,h2_a,h3_a,h4_a,h5_a,h6_a,.bookmark-link)]:text-primary [&_a:not(h1_a,h2_a,h3_a,h4_a,h5_a,h6_a,.bookmark-link)]:transition-all [&_a:not(h1_a,h2_a,h3_a,h4_a,h5_a,h6_a,.bookmark-link)]:underline [&_a:not(h1_a,h2_a,h3_a,h4_a,h5_a,h6_a,.bookmark-link)]:hover:underline [&_a:not(h1_a,h2_a,h3_a,h4_a,h5_a,h6_a,.bookmark-link)]:underline-offset-2 [&_a:not(h1_a,h2_a,h3_a,h4_a,h5_a,h6_a,.bookmark-link)]:decoration-primary/50 [&_a:not(h1_a,h2_a,h3_a,h4_a,h5_a,h6_a,.bookmark-link)]:focus-visible:outline-hidden [&_a:not(h1_a,h2_a,h3_a,h4_a,h5_a,h6_a,.bookmark-link)]:focus-visible:ring-2 [&_a:not(h1_a,h2_a,h3_a,h4_a,h5_a,h6_a,.bookmark-link)]:focus-visible:ring-primary/50";

const proseListClasses = [
  "[&_ul]:pl-0 [&_ul]:py-3 [&_ul]:list-none [&_ul]:space-y-1",
  "[&_ul>li]:relative [&_ul>li]:pl-6",
  "[&_ul>li]:before:absolute [&_ul>li]:before:left-1 [&_ul>li]:before:top-[0.6875em] [&_ul>li]:before:h-1.5 [&_ul>li]:before:w-1.5 [&_ul>li]:before:rounded-full [&_ul>li]:before:bg-foreground/80 [&_ul>li]:before:content-['']",
  "[&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:py-3 [&_ol]:space-y-1",
  "[&_ol>ol]:list-[lower-alpha]",
  "[&_ol>ol>ol]:list-[lower-roman]",
  "[&_dl]:py-3 [&_dl]:space-y-1",
  "[&_dt]:font-medium [&_dt]:text-sm [&_dt]:leading-snug [&_dt:not(:first-child)]:mt-3",
  "[&_dd]:text-sm [&_dd]:leading-snug [&_dd]:text-muted-foreground",
  "[&_li]:pl-2 [&_li]:marker:text-foreground/80",
  "[&_li>ul]:mt-2 [&_li>ul]:mb-0 [&_li>ol]:mt-2 [&_li>ol]:mb-0",
  "[&_ul>ul>li]:before:bg-foreground/60",
  "[&_ul>ul>ul>li]:before:bg-foreground/40",
];

const proseCodeClasses = [
  "[&_code:not(pre_code)]:rounded [&_code:not(pre_code)]:border [&_code:not(pre_code)]:bg-muted/50 [&_code:not(pre_code)]:px-1 [&_code:not(pre_code)]:py-px [&_code:not(pre_code)]:font-mono [&_code:not(pre_code)]:text-sm [&_code:not(pre_code)]:font-medium",
  "[&_h1>code:not(pre_code)]:text-inherit [&_h1>code:not(pre_code)]:tracking-tight [&_h1>code:not(pre_code)]:text-4xl sm:[&_h1>code:not(pre_code)]:text-5xl",
  "[&_h2>code:not(pre_code)]:text-inherit [&_h2>code:not(pre_code)]:tracking-tight [&_h2>code:not(pre_code)]:text-3xl sm:[&_h2>code:not(pre_code)]:text-4xl",
  "[&_h3>code:not(pre_code)]:text-inherit [&_h3>code:not(pre_code)]:tracking-tight [&_h3>code:not(pre_code)]:text-2xl sm:[&_h3>code:not(pre_code)]:text-3xl",
  "[&_h4>code:not(pre_code)]:text-inherit [&_h4>code:not(pre_code)]:tracking-tight [&_h4>code:not(pre_code)]:text-xl sm:[&_h4>code:not(pre_code)]:text-2xl",
  "[&_h5>code:not(pre_code)]:text-inherit [&_h5>code:not(pre_code)]:tracking-tight [&_h5>code:not(pre_code)]:text-lg sm:[&_h5>code:not(pre_code)]:text-xl",
  "[&_h6>code:not(pre_code)]:text-inherit [&_h6>code:not(pre_code)]:tracking-tight [&_h6>code:not(pre_code)]:text-base sm:[&_h6>code:not(pre_code)]:text-lg",
  "[&_pre]:overflow-x-auto [&_pre]:rounded-sm [&_pre]:border [&_pre]:bg-muted/50 [&_pre]:p-4 [&_pre]:my-4",
  "[&_pre>code]:bg-transparent [&_pre>code]:p-0",
];

const proseTableClasses = [
  "[&_table]:w-full [&_table]:my-4 [&_table]:overflow-hidden [&_table]:rounded-sm [&_table]:border",
  "[&_thead]:bg-muted/50",
  "[&_tr]:border-b [&_tr:nth-child(even)]:bg-muted/20",
  "[&_th]:px-4 [&_th]:py-3 [&_th]:text-left [&_th]:font-semibold [&_th]:border-r",
  "[&_td]:px-4 [&_td]:py-2 [&_td]:border-r",
];

const proseMediaClasses = [
  "[&_img]:border [&_img]:my-4 [&_img]:max-w-full [&_img]:h-auto [&_img]:rounded-sm",
  "[&_video]:border [&_video]:my-4 [&_video]:max-w-full [&_video]:h-auto [&_video]:rounded-sm",
  "[&_figure]:my-4",
  "[&_figcaption]:text-sm [&_figcaption]:mb-6! [&_figcaption]:text-muted-foreground",
];

const proseBlockClasses = [
  "[&_blockquote]:border-l-4 [&_blockquote]:border-border [&_blockquote]:pl-4! [&_blockquote]:py-2 [&_blockquote]:my-4 [&_blockquote]:text-muted-foreground [&_blockquote]:bg-muted/30",
  "[&_hr]:my-8! [&_hr]:border-t-2 [&_hr]:border-border/50",
  "[&_p:has(>hr)]:my-8! [&_p:has(>hr)]:border-t-2 [&_p:has(>hr)]:border-border/50",
  "[&_details]:rounded-sm [&_details]:border [&_details]:px-4 [&_details]:py-2 [&_details]:my-4",
  "[&_summary]:cursor-pointer [&_summary]:font-semibold focus-visible:[&_summary]:outline-hidden",
];

const proseInteractiveClasses = [
  "[&_kbd]:rounded-sm [&_kbd]:border [&_kbd]:bg-muted [&_kbd]:px-1.5 [&_kbd]:py-0.5 [&_kbd]:text-sm [&_kbd]:font-mono [&_kbd]:shadow-xs [&_kbd]:align-middle",
  "[&_abbr]:border-b [&_abbr]:border-dotted [&_abbr]:decoration-muted-foreground [&_abbr]:underline-offset-2 [&_abbr]:cursor-help",
];

const proseSpacedClasses = [
  "space-y-6",
  "[&_h1:not(:first-child)]:mt-8 [&_h1]:mb-4",
  "[&_h2:not(:first-child)]:mt-8 [&_h2]:mb-4",
  "[&_h3:not(:first-child)]:mt-6 [&_h3]:mb-3",
  "[&_h4:not(:first-child)]:mt-6 [&_h4]:mb-3",
  "[&_h5:not(:first-child)]:mt-6 [&_h5]:mb-2",
  "[&_h6:not(:first-child)]:mt-4 [&_h6]:mb-2",
];

export const Prose = ({
  children,
  className,
  id,
  dangerouslySetInnerHTML,
  style,
  isArticle = false,
  isSpaced = false,
}: DSProps) => {
  const Component = isArticle ? "article" : "div";

  return (
    <Component
      className={cn(
        proseBaseClasses,
        proseHeadingClasses,
        proseTextClasses,
        proseLinkClasses,
        proseListClasses,
        proseCodeClasses,
        proseTableClasses,
        // proseMediaClasses,
        proseBlockClasses,
        proseInteractiveClasses,
        isArticle && "max-w-prose",
        isSpaced && proseSpacedClasses,
        className
      )}
      id={id}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      style={style}
    >
      {children}
    </Component>
  );
};
