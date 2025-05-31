# Lumyz - AI-Powered Solutions Platform

A modern React application with Supabase authentication for AI-powered solutions in Education, Healthcare, and Agriculture.

## Features

- 🔐 **Authentication System**: Complete login/signup functionality with Supabase
- 🎨 **Modern UI**: Beautiful, responsive design with Framer Motion animations
- 👤 **User Profiles**: Automatic profile creation and management
- 🔒 **Security**: Row Level Security (RLS) enabled for data protection
- 📱 **Mobile Responsive**: Optimized for all device sizes

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Authentication**: Supabase Auth
- **Database**: Supabase (PostgreSQL)
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd project
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Authentication Features

### User Registration

- Email and password signup
- Automatic profile creation
- Email verification (optional)
- Full name collection during signup

### User Login

- Email and password authentication
- Persistent sessions
- Automatic profile loading
- Error handling and validation

### User Interface

- **Header**: Shows login button for guests, user dropdown for authenticated users
- **Hero Section**: Personalized greeting and content for logged-in users
- **Modal System**: Beautiful login/signup modal with smooth animations
- **User Dropdown**: Profile access, settings, and logout functionality

## Database Schema

### Profiles Table

```sql
CREATE TABLE public.profiles (
  id uuid REFERENCES auth.users ON DELETE CASCADE,
  updated_at timestamp with time zone,
  username text UNIQUE,
  full_name text,
  avatar_url text,
  website text,
  PRIMARY KEY (id)
);
```

### Security

- Row Level Security (RLS) enabled
- Users can only access their own profiles
- Public profiles viewable by everyone
- Automatic profile creation on user signup

## Project Structure

```
src/
├── components/
│   ├── Auth/
│   │   ├── LoginModal.tsx      # Login/Signup modal
│   │   └── UserDropdown.tsx    # User profile dropdown
│   ├── Header.tsx              # Main navigation
│   ├── Hero.tsx                # Hero section with auth awareness
│   └── ...
├── contexts/
│   └── AuthContext.tsx         # Authentication state management
├── lib/
│   └── supabase.ts            # Supabase client and helpers
├── types/
│   └── supabase.ts            # TypeScript types for database
└── App.tsx                    # Main app component
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Environment Variables

The Supabase configuration is currently hardcoded. For production, create a `.env` file:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.
