# Jira Email Template Generator

[![Deploy to GitHub Pages](https://github.com/codevalve/jira-email-template/actions/workflows/deploy.yml/badge.svg)](https://github.com/codevalve/jira-email-template/actions/workflows/deploy.yml)

A modern Single Page Application (SPA) for generating professional Jira notification email templates with dynamic customization options.

## Live Demo

Visit the live application: [Jira Email Template Generator](https://codevalve.github.io/jira-email-template/)

## Features

### Product Type Support
- Jira Software templates
- Service Desk templates
- Core templates
- Dynamic field rendering based on product type

### Template Styles
- Full template with comprehensive issue details
- Compact template for concise notifications
- Consistent styling across all templates

### Smart Values Integration
- Toggle between mock data and Jira smart values
- Uses `{{issue.field}}` syntax
- Dynamic field rendering
- HTML support in comments

### Comments Customization
- Toggle comments visibility
- Three display modes:
  - All comments
  - Latest comment only
  - Last 5 comments
- Smart values support in comments
- HTML formatting and user mentions

### UI/UX Features
- Live preview
- Color picker for header customization
- Responsive design
- Modern interface with Tailwind CSS
- Generates minified HTML output

## Development

This project uses Vite for development and building.

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Setup

1. Clone the repository:
```bash
git clone https://github.com/codevalve/jira-email-template.git
cd jira-email-template
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

### Project Structure

```
jira-email-template/
├── src/               # Source files
│   ├── index.html    # Main HTML file
│   ├── main.js       # Main JavaScript file
│   └── style.css     # Styles
├── dist/             # Production build output
├── .github/          # GitHub Actions workflows
├── node_modules/     # Dependencies
├── package.json      # Project configuration
└── vite.config.js    # Vite configuration
```

## Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'feat: add some amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## License

This project is licensed under the ISC License.

## Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Hosted on [GitHub Pages](https://pages.github.com/)
