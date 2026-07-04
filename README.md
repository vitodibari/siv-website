<div align="center">
  <img src="public/logo.png" alt="Summer Is Volley Logo" width="200" />
</div>

# Summer Is Volley

Official website of the **Summer Is Volley** tournament, organized by **A.S.D. Iuno**.

This project is a web application built with **Astro**, designed to provide participants and spectators with quick access to results, schedules, rankings, and a dynamic photo gallery of the event.

## 🚀 Key Features

- **Intuitive Landing Page**: Immediate access to the key sections of the tournament.
- **Dynamic Photo Gallery**: Images grouped automatically by creation date, with **PhotoSwipe** integration for full-screen view and download support.
- **External Hub Integration**: Direct links to schedules, groups, matches, and rankings, updated in real time.
- **Responsive Design**: Fully optimized for mobile devices.
- **High Performance**: Automatic image optimization and asset compression.
- **Sponsor Showcase**: Animated carousel for displaying event partners.

## 🛠️ Tech Stack

- **Framework**: [Astro v6+](https://astro.build/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Libraries**: [PhotoSwipe](https://photoswipe.com/) for gallery viewing.
- **Deployment**: Docker + Nginx.

## 📂 Project Structure

```text
/
├── public/             # Public static assets
├── src/
│   ├── assets/         # Images, icons, and gallery folders
│   ├── components/     # Reusable Astro components
│   ├── layouts/        # Base layout templates
│   ├── pages/          # Application routes (index, galleria, 404, 500)
│   ├── scripts/        # Client-side scripts (PhotoSwipe, Navigation)
│   ├── styles/         # Global CSS stylesheets
│   └── consts.ts       # Global constants (Title, Description, Paths)
├── Dockerfile          # Configuration for containerization
├── nginx.conf          # Nginx production routing configuration
└── astro.config.mjs    # Astro configuration
```

## ⚙️ Environment Variables

The project uses environment variables for configuration. Copy `.env.example` to `.env` to configure your local setup:

```sh
cp .env.example .env
```

| Variable | Description | Default                         |
|----------|-------------|---------------------------------|
| `PUBLIC_PHP_SERVER_HOST` | Hostname of the PHP server hosting the tournament hub pages (schedules, rankings, etc.). | `https://summerisvolley.it/hub` |
| `BASE_URL` | Base URL path where the Astro website is served (useful for subpath hosting). | `/`                             |

## ⌨️ Local Development

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm or yarn

### Installation

```sh
# Install dependencies
npm install
```

### Running Development Server

```sh
# Start the development server with hot-reloading
npm run dev
```

The website will be accessible at `http://localhost:4321` (or your configured `BASE_URL`).

### Building for Production

```sh
# Build static assets in the ./dist directory
npm run build
```

## 🐳 Deployment with Docker

The project is ready to be containerized and served using Nginx:

```sh
# Build the image
docker build -t siv-website .

# Run the container
docker run -p 3000:3000 siv-website
```

The application will be served by Nginx on port `3000`.

### Gallery Notes (v1)

* **Docker Asset Bundling**: In the current version (v1), all local gallery images (located in `src/assets/gallery/`) are copied, optimized, and bundled directly into the Docker image during the build process. This ensures that the gallery remains self-contained inside the container deployment.
