
  # Creative Personal Website

  This is a code bundle for Creative Personal Website. The original project is available at https://www.figma.com/design/jwRvZHfK9AQENFx07zPdZJ/Creative-Personal-Website.

  ## Features

  - Modern React/TypeScript portfolio website
  - Visitor tracking and analytics
  - Password-protected admin dashboard
  - Responsive design with animations
  - Dark/light theme support

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Environment Variables

  Create a `.env` file in the root directory with the following variables:

  ```env
  VITE_ADMIN_PASSWORD=your_secure_password_here
  ```

  **Security Note**: The `.env` file is already included in `.gitignore` to prevent committing sensitive data. Make sure to use a strong password for production.

  ## Admin Dashboard

  Access the admin dashboard at `/admin` to view visitor analytics and statistics. The default password is `admin123` (change this in your `.env` file).
  