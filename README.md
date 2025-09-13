# Blog Post Project

## Overview
This is a blog post management application built with **Laravel 10** (backend) and **Vue 3** (frontend). It demonstrates a SPA architecture using:
- **VueX** for state management
- **Axios** for API requests
- **Ziggy** for Laravel named route management
- **Vite** as frontend tool
- **SASS/SCSS** for styling

## Installation
1. Install PHP dependencies:
```
composer install
```

3. Install JavaScript dependencies:
```
npm install
```

5. Copy the environment file and configure. Set your database credentials and other environment variables in .env

6. Generate the application key:
```
php artisan key:generate
```

5. Run database migrations (and optionally seed dummy data)
```
php artisan migrate --seed
```

7. Start development servers:
- Frontend (Vite):
  ```
  npm run dev
  ```
- Backend (Laravel + Blade):
  ```
  php artisan serve
  ```

Visit http://127.0.0.1:8000 to view the app.
