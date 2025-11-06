# NeoChain Design System

## Overview

NeoChain uses a modern, tech-forward design system with support for both **light** and **dark** themes. The design emphasizes clarity, accessibility, and an immersive Web3 learning experience.

## Color System

### Color Format
We use **OKLCH** color format for better color consistency and perceptual uniformity across themes.

### Light Theme (`:root`)

#### Base Colors
```css
--background: oklch(0.98 0 0);           /* Near white background */
--foreground: oklch(0.15 0 0);           /* Dark text */
--card: oklch(1 0 0);                     /* Pure white cards */
--card-foreground: oklch(0.15 0 0);      /* Dark text on cards */
```

#### Primary Colors
```css
--primary: oklch(0.5 0.22 200);          /* Electric cyan - main brand color */
--primary-foreground: oklch(0.98 0 0);   /* White text on primary */
```

#### Secondary Colors
```css
--secondary: oklch(0.95 0.02 260);       /* Light purple-gray */
--secondary-foreground: oklch(0.15 0 0);  /* Dark text on secondary */
```

#### Accent Colors
```css
--accent: oklch(0.95 0.15 300);          /* Neon magenta - highlights */
--accent-foreground: oklch(0.15 0 0);    /* Dark text on accent */
```

#### Muted Colors
```css
--muted: oklch(0.96 0 0);                /* Very light gray */
--muted-foreground: oklch(0.55 0 0);     /* Medium gray text */
```

#### Semantic Colors
```css
--destructive: oklch(0.577 0.245 27.325);     /* Red for errors */
--destructive-foreground: oklch(0.98 0 0);     /* White text on destructive */
--border: oklch(0.92 0 0);                     /* Light borders */
--input: oklch(0.95 0 0);                      /* Input backgrounds */
--ring: oklch(0.5 0.22 200);                  /* Focus ring (cyan) */
```

### Dark Theme (`.dark`)

#### Base Colors
```css
--background: oklch(0.08 0 0);           /* Deep navy black */
--foreground: oklch(0.95 0 0);           /* Near white text */
--card: oklch(0.12 0.02 240);            /* Dark navy cards */
--card-foreground: oklch(0.95 0 0);      /* Light text on cards */
```

#### Primary Colors
```css
--primary: oklch(0.5 0.22 200);          /* Electric cyan - same as light */
--primary-foreground: oklch(0.08 0 0);   /* Dark text on primary */
```

#### Secondary Colors
```css
--secondary: oklch(0.2 0.08 260);        /* Deep purple */
--secondary-foreground: oklch(0.95 0 0); /* Light text on secondary */
```

#### Accent Colors
```css
--accent: oklch(0.95 0.15 300);          /* Neon magenta - same as light */
--accent-foreground: oklch(0.08 0 0);    /* Dark text on accent */
```

#### Muted Colors
```css
--muted: oklch(0.25 0.03 240);           /* Dark gray */
--muted-foreground: oklch(0.65 0.05 240); /* Medium gray text */
```

#### Semantic Colors
```css
--destructive: oklch(0.396 0.141 25.723);     /* Darker red for dark theme */
--destructive-foreground: oklch(0.637 0.237 25.331); /* Light text */
--border: oklch(0.18 0.03 240);               /* Dark borders */
--input: oklch(0.15 0.02 240);                /* Dark input backgrounds */
--ring: oklch(0.5 0.22 200);                  /* Focus ring (cyan) */
```

### Chart Colors

Both themes use the same vibrant chart colors:
```css
--chart-1: oklch(0.5 0.22 200);   /* Cyan */
--chart-2: oklch(0.95 0.15 300);  /* Magenta */
--chart-3: oklch(0.6 0.18 180);   /* Teal */
--chart-4: oklch(0.7 0.15 120);   /* Green */
--chart-5: oklch(0.45 0.2 50);    /* Yellow */
```

## Typography

### Font Families
```css
--font-sans: "Geist", "Geist Fallback";
--font-mono: "Geist Mono", "Geist Mono Fallback";
```

### Font Sizes
- **Display**: `text-4xl` (2.25rem / 36px) - Main headings
- **Heading 1**: `text-3xl` (1.875rem / 30px) - Section titles
- **Heading 2**: `text-2xl` (1.5rem / 24px) - Subsection titles
- **Heading 3**: `text-xl` (1.25rem / 20px) - Card titles
- **Body**: `text-base` (1rem / 16px) - Default text
- **Small**: `text-sm` (0.875rem / 14px) - Secondary text
- **Tiny**: `text-xs` (0.75rem / 12px) - Labels, captions

### Font Weights
- **Bold**: `font-bold` (700) - Headings, emphasis
- **Semibold**: `font-semibold` (600) - Subheadings
- **Medium**: `font-medium` (500) - Buttons, labels
- **Regular**: `font-normal` (400) - Body text

## Spacing

### Scale (Tailwind default)
- `0` - 0px
- `1` - 0.25rem (4px)
- `2` - 0.5rem (8px)
- `4` - 1rem (16px)
- `6` - 1.5rem (24px)
- `8` - 2rem (32px)
- `12` - 3rem (48px)
- `16` - 4rem (64px)

## Border Radius

```css
--radius: 0.625rem;              /* 10px - default */
--radius-sm: calc(var(--radius) - 4px);  /* 6px */
--radius-md: calc(var(--radius) - 2px);  /* 8px */
--radius-lg: var(--radius);               /* 10px */
--radius-xl: calc(var(--radius) + 4px);  /* 14px */
```

## Components

### Buttons

**Variants:**
- `default` - Primary action (cyan background)
- `secondary` - Secondary action (purple-gray)
- `outline` - Outlined button
- `ghost` - Transparent background
- `destructive` - Destructive actions (red)

**Sizes:**
- `sm` - Small (h-8)
- `default` - Default (h-9)
- `lg` - Large (h-10)
- `icon` - Icon only (size-9)

### Cards

- Background: `bg-card`
- Border: `border border-border`
- Padding: `p-6`
- Radius: `rounded-xl`

### Inputs

- Background: `bg-input`
- Border: `border border-border`
- Focus: `ring-2 ring-ring`
- Radius: `rounded-md`

## Animations

### Glow Effect
```css
@keyframes glow {
  0%, 100% {
    text-shadow: 0 0 10px rgba(91, 218, 255, 0.5);
  }
  50% {
    text-shadow: 0 0 20px rgba(91, 218, 255, 0.8);
  }
}
```

### Float Animation
```css
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
}
```

**Usage:**
- `.text-glow` - Applies glow animation to text
- `.float-animation` - Applies float animation to elements

## Theme Switching

The design system supports three theme modes:
1. **Light** - Always light theme
2. **Dark** - Always dark theme
3. **System** - Follows OS preference

Theme is applied via the `.dark` class on the root element.

## Accessibility

### Color Contrast
- All text meets WCAG AA standards (4.5:1 for normal text, 3:1 for large text)
- Focus indicators are clearly visible in both themes
- Interactive elements have sufficient contrast

### Focus States
- Focus ring: `ring-2 ring-ring` with cyan color
- Outline: `outline-ring/50`

## Usage Examples

### Light Theme Card
```tsx
<div className="bg-card border border-border rounded-xl p-6">
  <h3 className="text-2xl font-semibold text-foreground">Card Title</h3>
  <p className="text-muted-foreground">Card content</p>
</div>
```

### Dark Theme Button
```tsx
<button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2">
  Click me
</button>
```

### Theme-Aware Component
```tsx
<div className="bg-background text-foreground">
  {/* Automatically adapts to current theme */}
</div>
```

