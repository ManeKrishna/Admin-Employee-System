# Admin Employee System

A modern, responsive admin panel for managing employee data built with React and Firebase. This application provides a comprehensive solution for HR departments and administrators to efficiently manage employee information, track performance, and handle administrative tasks.

## 🚀 Features

- **Employee Management**: Add, edit, view, and delete employee records
- **Real-time Database**: Powered by Firebase for instant data synchronization
- **Responsive Design**: Built with Tailwind CSS for optimal viewing on all devices
- **Interactive UI**: Enhanced with Lottie animations and particle effects
- **Modern Architecture**: Built with React 19 and Vite for optimal performance
- **Icon Library**: Comprehensive icon set using Lucide React

## 🛠️ Tech Stack

- **Frontend**: React 19.1.0
- **Build Tool**: Vite 7.0.4
- **Styling**: Tailwind CSS 4.1.11
- **Database**: Firebase 11.10.0
- **Icons**: Lucide React
- **Animations**: Lottie Files DotLottie React
- **Effects**: React TSParticles
- **Deployment**: Vercel

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (version 16 or higher)
- npm or yarn
- Git

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ManeKrishna/admin-employee-system.git
   cd admin-employee-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase configuration**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Firestore Database
   - Copy your Firebase config
   - Create a `.env` file in the root directory and add your Firebase configuration:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 📂 Project Structure

```
admin-employee-system/
├── public/                 # Static assets
├── src/                    # Source code
│   ├── components/        # Reusable React components
│   ├── pages/             # Application pages
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Utility functions
│   ├── firebase/          # Firebase configuration
│   └── styles/            # CSS and styling files
├── index.html             # Main HTML template
├── package.json           # Dependencies and scripts
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── eslint.config.js      # ESLint configuration
└── vercel.json           # Vercel deployment configuration
```

## 🚀 Deployment

This project is configured for deployment on Vercel:

1. **Deploy to Vercel**
   ```bash
   # Install Vercel CLI (if not already installed)
   npm install -g vercel
   
   # Deploy
   vercel
   ```

2. **Environment Variables**
   - Add your Firebase configuration variables in the Vercel dashboard
   - Go to your project settings → Environment Variables
   - Add all the `VITE_FIREBASE_*` variables

## 🎨 Features Overview

### Employee Management
- Create new employee profiles with detailed information
- Update existing employee data
- View comprehensive employee listings
- Delete employee records with confirmation

### Dashboard
- Real-time statistics and metrics
- Visual data representation
- Quick access to common actions
- Responsive layout for all screen sizes

### Authentication & Security
- Secure Firebase authentication
- Role-based access control
- Data validation and sanitization

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## 👨‍💻 Author

**ManeKrishna**
- GitHub: [@ManeKrishna](https://github.com/ManeKrishna)
- Profile: [GitHub Profile](https://github.com/ManeKrishna)

## 🙏 Acknowledgments

- React team for the amazing framework
- Firebase for the robust backend services
- Tailwind CSS for the utility-first CSS framework
- Vite for the fast build tool
- All open-source contributors whose libraries made this project possible

## 📞 Support

If you encounter any issues or have questions, please:
1. Check the existing issues on GitHub
2. Create a new issue with detailed information
3. Provide steps to reproduce any bugs

---

⭐ If you found this project helpful, please give it a star on GitHub!