# 🏋️ Advanced Gym Management System - MERN Stack

A comprehensive and modern gym management system built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring an intuitive and responsive UI/UX design for managing all aspects of fitness center operations.

## ✨ Features

### 👥 Member Management
- Complete member registration and profile management
- Membership plans and subscription tracking
- Member check-in/check-out system
- Progress tracking and fitness goal management
- Attendance history and analytics

### 💳 Payment & Billing
- Secure payment processing integration
- Automated billing and invoice generation
- Multiple payment methods support
- Membership renewal notifications
- Financial reporting and analytics

### 🏃‍♂️ Class & Training Management
- Group fitness class scheduling
- Personal trainer assignment and booking
- Class capacity management
- Instructor management system
- Equipment reservation system

### 📊 Analytics & Reporting
- Real-time dashboard with key metrics
- Member retention analytics
- Revenue and financial reports
- Equipment usage statistics
- Staff performance tracking

### 🔐 Role-Based Access Control
- Admin, Manager, Trainer, and Member roles
- Secure authentication and authorization
- Permission-based feature access
- User activity logging

### 📱 Modern UI/UX
- Responsive design for all devices
- Intuitive and user-friendly interface
- Dark/Light theme support
- Mobile-first approach
- Accessibility compliance

## 🚀 Technology Stack

### Frontend
- **React 18** - Modern UI library with hooks
- **Redux Toolkit** - State management
- **Material-UI / Chakra UI** - Component library
- **React Router** - Navigation and routing
- **Axios** - HTTP client for API calls
- **Chart.js / Recharts** - Data visualization

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication tokens
- **Bcrypt** - Password hashing
- **Multer** - File upload handling

### Additional Tools
- **Stripe/PayPal API** - Payment processing
- **Nodemailer** - Email notifications
- **Socket.io** - Real-time communication
- **Cloudinary** - Image storage and optimization
- **Jest & Cypress** - Testing frameworks

## 🎨 Key Highlights

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Real-time Updates**: Live notifications and data synchronization
- **Advanced Search**: Filter and search members, classes, and equipment
- **Data Visualization**: Interactive charts and graphs for insights
- **Automated Workflows**: Smart notifications and scheduling
- **Security First**: Encrypted data transmission and secure authentication

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v16 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn package manager
- Git for version control

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/YASHRAJ1012108/advanced-gym-management-mern.git
   cd advanced-gym-management-mern
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

4. **Environment Configuration**
   Create `.env` files in both backend and frontend directories:
   
   **Backend (.env)**
   ```env
   MONGODB_URI=mongodb://localhost:27017/gym-management
   JWT_SECRET=your-secret-key
   STRIPE_SECRET_KEY=your-stripe-secret
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-email-password
   CLOUDINARY_NAME=your-cloudinary-name
   CLOUDINARY_API_KEY=your-api-key
   CLOUDINARY_API_SECRET=your-api-secret
   ```

5. **Start the development servers**
   
   **Backend server**
   ```bash
   cd backend
   npm run dev
   ```
   
   **Frontend server**
   ```bash
   cd frontend
   npm start
   ```

6. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 📁 Project Structure

```
advanced-gym-management-mern/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── services/
│   │   ├── utils/
│   │   └── App.js
│   └── package.json
├── docs/
├── README.md
└── package.json
```

## 🧪 Testing

Run the test suite:

```bash
# Backend tests
cd backend && npm test

# Frontend tests
cd frontend && npm test

# E2E tests
npm run test:e2e
```

## 🚀 Deployment

The application can be deployed on various platforms:

- **Frontend**: Vercel, Netlify, or AWS S3
- **Backend**: Heroku, AWS EC2, or DigitalOcean
- **Database**: MongoDB Atlas or AWS DocumentDB

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Yashraj Rathod**
- GitHub: [@YASHRAJ1012108](https://github.com/YASHRAJ1012108)
- Email: rathodyashraj2004@gmail.com

## 🙏 Acknowledgments

- Thanks to the open-source community for the amazing tools and libraries
- Inspired by modern gym management needs and user experience principles
- Built with ❤️ for fitness enthusiasts and gym owners

---

⭐ **If you found this project helpful, please give it a star!** ⭐
