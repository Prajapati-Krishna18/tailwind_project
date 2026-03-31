# CodingGita Student LMS Dashboard

A comprehensive Learning Management System (LMS) and student dashboard built with React and Tailwind CSS. This application serves as a portal for students to manage their learning journey, view attendance, assignments, events, and track their overall progress.

## 🚀 Features

- **User Authentication**: Secure Login page for students.
- **Student Dashboard**: A central hub summarizing student activities, features, and quick links.
- **Attendance Management**: Keep track of daily attendance records, and utilize the Leave Page for submitting leave requests.
- **Calendar & Events**: Stay updated with a built-in calendar view and an upcoming events card.
- **Course & Subject Tracking**: View enrolled subjects and current assignments seamlessly.
- **Mentorship & Profile**: Quick access to mentor profiles and student's personal profile information.
- **Integrated Chat**: A built-in chat UI for communication.
- **Modern UI**: Full responsiveness across devices and an intuitive dashboard interface powered by Tailwind CSS and Lucide React.

## 🛠️ Technology Stack

- **Frontend**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Linting**: ESLint

## 📂 Project Structure

- `src/components/`: Reusable UI elements such as `AttendanceCard`, `AssignmentsCard`, `Navbar`, `ProfileCard`, and `MentorsCard`.
- `src/pages/`: Core application views and routing destinations including `studentDashboard`, `Attendence`, `Calender`, `LeavePage`, `Login`, and `Landing`.
- `src/utils/`: General helper utilities.
- `src/assets/`: Static image and media assets.

## 💻 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation & Setup

1. **Navigate to the project directory** (if outside):
   ```bash
   cd CodingGita
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Running Locally**:
   Open your browser and navigate to `http://localhost:5173` to view the application in action.

## 📜 Available Scripts

- `npm run dev`: Starts the development server using Vite.
- `npm run build`: Builds the app for production to the `dist` folder.
- `npm run lint`: Runs ESLint over the project securely.
- `npm run preview`: Previews the deployed static production build locally.
