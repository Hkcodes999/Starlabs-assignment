# 🎉 Local Event Finder

A modern, responsive web application for discovering and managing local events in your area. Built with React, Vite, and Tailwind CSS.

![Event Finder Screenshot](./public/Screenshot%202025-09-10%20015614.png)

## ✨ Features

- 🔍 **Smart Search & Filtering** - Find events by type, date, location, or keywords
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- 🎯 **Event Categories** - Music, Sports, Workshops, Meetups, and more
- 📅 **Date-based Filtering** - Filter events by specific dates
- 📍 **Location-based Search** - Find events in your city
- 💫 **Modern UI** - Beautiful gradient backgrounds and smooth animations
- 🎨 **Interactive Design** - Hover effects and smooth transitions
- 📱 **Mobile-First** - Optimized mobile experience with slide-out filters

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/starlabs-event-app.git
   cd starlabs-event-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 📱 Responsive Design

### Desktop (1024px+)
- Full sidebar filter panel
- Large event cards with detailed information
- Optimal spacing and typography

### Tablet (768px - 1024px)
- Compact sidebar filter
- Responsive grid layout
- Touch-friendly interface

### Mobile (< 768px)
- Slide-out filter overlay
- Full-width event cards
- Mobile-optimized navigation

## 🎨 Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: React Context API
- **Icons**: React Icons
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Cards.jsx       # Event card component
│   ├── Details.jsx     # Event details page
│   ├── Filter1.jsx     # Main filter component
│   ├── Home.jsx        # Home page layout
│   ├── Main.jsx        # Main content area
│   ├── Nav.jsx         # Navigation bar
│   └── Rsvp.jsx        # RSVP functionality
├── context/            # React Context
│   └── EventContext.jsx # Global state management
├── data/               # Static data
│   └── events.json     # Event data
├── Routing/            # Routing configuration
│   └── Routing.jsx     # Route definitions
├── App.jsx             # Main App component
├── main.jsx            # Application entry point
└── index.css           # Global styles
```

## 🎯 Features in Detail

### Event Discovery
- Browse through 20+ curated local events
- Filter by event type (Music, Sports, Workshops, etc.)
- Search by location (Bangalore, Mumbai, Delhi, etc.)
- Filter by specific dates

### User Experience
- Intuitive navigation with sticky header
- Smooth animations and transitions
- Mobile-responsive design
- Fast loading with optimized assets

### Event Management
- View detailed event information
- RSVP functionality (client-side)
- Add new events (demo feature)
- Clear all filters with one click

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Harekrishna Manna**
- GitHub: [@Hkcodes999](https://github.com/Hkcodes999)
- Email: Swmikrishna150@gmail.com

## 🙏 Acknowledgments

- Event data sourced from various local event platforms
- Icons provided by React Icons
- Images from Unsplash
- Built with ❤️ using React and Vite

---

**Happy Event Hunting! 🎉**
