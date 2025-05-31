# Lumyz - AI Solutions Platform

A modern React application built with TypeScript, featuring comprehensive authentication system with user types (Student, Faculty, Admin) and multi-page routing.

## 🚀 Features

### Authentication System

- **Multi-User Types**: Support for Students, Faculty, and Admin users
- **Secure Authentication**: Powered by Supabase Auth
- **User Profiles**: Comprehensive profile management with role-specific fields
- **Session Management**: Persistent login sessions with automatic token refresh
- **Form Validation**: Client-side validation with error handling

### User Types & Fields

#### Student Users

- Student ID (required)
- Year of Study (1st-5th year)
- Department selection
- Full name and email

#### Faculty Users

- Employee ID (required)
- Specialization field
- Department selection
- Full name and email

#### Admin Users

- Basic profile information
- Administrative privileges
- Full name and email

### Pages & Routing

- **Home Page**: Landing page with all main sections
- **About Page**: Company information, mission, values, and team
- **Services Page**: Detailed AI services (Education, Healthcare, Agriculture)
- **Industries Page**: Industries served with statistics
- **Blog Page**: AI insights and articles with category filtering
- **Contact Page**: Contact form and business information

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Authentication**: Supabase Auth
- **Database**: Supabase PostgreSQL
- **Build Tool**: Vite

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Lumyz_internship/project
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the project root:

   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## 🗄️ Database Schema

### Profiles Table

```sql
CREATE TABLE public.profiles (
  id uuid REFERENCES auth.users ON DELETE CASCADE,
  full_name text,
  username text,
  avatar_url text,
  website text,
  user_type user_type NOT NULL DEFAULT 'student',
  student_id text UNIQUE,
  employee_id text UNIQUE,
  department text,
  specialization text,
  year_of_study integer,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  PRIMARY KEY (id)
);
```

### User Type Enum

```sql
CREATE TYPE user_type AS ENUM ('student', 'faculty', 'admin');
```

## 🔐 Authentication Flow

1. **Sign Up Process**:

   - User selects account type (Student/Faculty/Admin)
   - Fills in type-specific information
   - Account created with email verification
   - Profile automatically created via database trigger

2. **Sign In Process**:

   - Email/password authentication
   - Session established with Supabase
   - User profile fetched and stored in context
   - Redirected to appropriate dashboard

3. **Session Management**:
   - Automatic token refresh
   - Persistent login across browser sessions
   - Secure logout with session cleanup

## 🎨 UI Components

### Authentication Components

- `LoginModal`: Comprehensive login/signup modal with animations
- `UserDropdown`: User profile dropdown with logout functionality
- `AuthContext`: Global authentication state management

### Layout Components

- `Header`: Navigation with authentication-aware UI
- `Hero`: Dynamic hero section with personalized content
- Responsive design with mobile-first approach

## 🚦 Routing Structure

```
/ (Home)           - Landing page with all sections
/about            - About Lumyz, mission, values, team
/services         - AI services detailed breakdown
/industries       - Industries served showcase
/blog             - AI insights blog with filtering
/contact          - Contact form and information
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler

### Code Structure

```
src/
├── components/          # Reusable UI components
│   ├── Auth/           # Authentication components
│   ├── Header.tsx      # Navigation header
│   └── ...
├── contexts/           # React contexts
│   └── AuthContext.tsx # Authentication context
├── lib/               # Utility libraries
│   └── supabase.ts    # Supabase client
├── pages/             # Page components
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   └── ...
├── types/             # TypeScript type definitions
│   └── supabase.ts    # Database types
└── App.tsx            # Main application component
```

## 🔒 Security Features

- **Row Level Security (RLS)**: Database-level security policies
- **Type-safe API calls**: TypeScript integration with Supabase
- **Input validation**: Client and server-side validation
- **Secure authentication**: Industry-standard JWT tokens
- **CSRF protection**: Built-in Supabase security measures

## 🎯 User Experience

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Framer Motion for enhanced UX
- **Loading States**: Proper loading indicators throughout
- **Error Handling**: User-friendly error messages
- **Accessibility**: ARIA labels and keyboard navigation

## 📱 Mobile Support

- Responsive navigation with mobile menu
- Touch-friendly interface elements
- Optimized forms for mobile input
- Progressive Web App capabilities

## 🚀 Deployment

The application is ready for deployment on platforms like:

- Vercel (recommended for React apps)
- Netlify
- AWS Amplify
- Any static hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:

- Email: contact@lumyz.ai
- Documentation: [Project Wiki]
- Issues: [GitHub Issues]

---

Built with ❤️ by the Lumyz team
