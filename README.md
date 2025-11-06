# NeoChain

**Le Web3 comme vous ne l'avez jamais vécu**

NeoChain est une application immersive et pédagogique qui permet à tout le monde — sans compétence technique — de découvrir et comprendre les fondamentaux du Web3 en jouant.

## 🚀 Tech Stack

- **Framework**: Vite + React + TypeScript
- **Styling**: Tailwind CSS v4
- **Testing**: 
  - Unit tests: Vitest
  - E2E tests: Playwright (Desktop + Mobile)
- **i18n**: react-i18next (10 languages)
- **Package Manager**: pnpm
- **CI/CD**: GitHub Actions

## 📦 Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Run unit tests
pnpm test

# Run E2E tests
pnpm run e2e:ci

# Build for production
pnpm build
```

## 🧪 Testing

- **Unit Tests**: `pnpm test` or `pnpm run test:ci`
- **E2E Tests**: `pnpm run e2e:ci` (runs on Chromium, Firefox, WebKit, iOS, Android)

## 🌍 Features

- ✅ i18n support (10 languages)
- ✅ Theme toggle (dark/light/system)
- ✅ Language toggle
- ✅ Responsive design (desktop & mobile)
- ✅ Full test coverage (unit + E2E)

## 📝 Scripts

- `pnpm dev` - Start dev server
- `pnpm build` - Build for production
- `pnpm test` - Run unit tests in watch mode
- `pnpm run test:ci` - Run unit tests once
- `pnpm run e2e:ci` - Run E2E tests
- `pnpm run type-check` - Type check
- `pnpm run lint` - Lint code

## 🔧 Development

This project uses:
- **Husky** for git hooks
- **lint-staged** for pre-commit linting
- **Prettier** for code formatting
- **ESLint** for code quality

## 📄 License

Private project
