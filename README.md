# 🎥 YouTube Clone

A fully functional YouTube clone built with React, Redux, and the YouTube Data API v3. Features include video browsing, searching, watch history, liked videos, watch later functionality, and a collapsible sidebar.

[![Live Demo](https://img.shields.io/badge/Demo-Live-success?style=for-the-badge&logo=vercel)](https://you-tube-clone-smoky-phi.vercel.app)
[![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Redux](https://img.shields.io/badge/Redux-4.2.0-purple?style=for-the-badge&logo=redux)](https://redux.js.org/)

## 🌐 Live Demo

**[Visit Live Site →](https://you-tube-clone-smoky-phi.vercel.app)**

## ✨ Features

### Core Features
- 🏠 **Home Page** - Browse trending and popular videos with responsive grid layout
- 🔍 **Search** - Search for videos using the YouTube Data API with real-time results
- 📺 **Video Player** - Watch videos with full controls, description, and recommendations
- ❤️ **Like/Unlike Videos** - Save your favorite videos with visual feedback
- ⏰ **Watch Later** - Add/remove videos to watch later queue
- 📜 **History** - Automatic tracking of your viewing history
- 🎯 **Collapsible Sidebar** - Toggle sidebar on/off for better viewing experience
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile

### UI/UX Features
- ✅ Clean, professional YouTube-like interface
- ✅ Smooth animations and hover effects
- ✅ Fixed height video player page with scrollable sections
- ✅ Share popup with social media integration (Facebook, Twitter, WhatsApp, LinkedIn, Email)
- ✅ Copy link functionality with success feedback
- ✅ Delete individual videos from lists
- ✅ Clear all functionality for lists
- ✅ Empty states with helpful messages
- ✅ Like count and view count formatting (1.5M, 234K)
- ✅ Relative timestamps (2 hours ago, 3 days ago)

## 🖼️ Screenshots

### Home Page
Browse trending videos in a responsive grid layout with collapsible sidebar.

### Video Player
Watch videos with description, like/unlike, share, and "Up Next" recommendations.

### Liked Videos
View all your liked videos in a grid layout with delete functionality.

### Watch Later & History
Manage your saved videos and viewing history with ease.

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- YouTube Data API v3 key

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd you-tube-clone
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

The optimized build will be created in the `build` folder.

## 🛠️ Technologies Used

- **React** (18.2.0) - UI library
- **Redux** - State management with redux-thunk and redux-logger
- **React Router** (6.3.0) - Navigation
- **Axios** - HTTP client for API calls
- **React Player** (2.10.1) - Video player component
- **Ant Design Icons** (4.7.0) - Icon library
- **Luxon** (3.0.3) - Date/time formatting
- **YouTube Data API v3** - Video data and search

## 📁 Project Structure

```
src/
├── Actions/           # Redux action creators
│   └── index.js
├── Components/        # React components
│   ├── Header.js
│   ├── Home.js
│   ├── Video.js
│   ├── RecommendedVideos.js
│   ├── SideBar.js
│   ├── SideBarRow.js
│   ├── SearchBar.js
│   ├── LikeVideo.js
│   ├── WatchLater.js
│   └── History.js
├── Reducers/          # Redux reducers
│   ├── index.js
│   ├── likeVideo_reducer.js
│   ├── watchlater_reducer.js
│   └── History_reducer.js
├── context/           # React Context
│   └── SidebarContext.js
├── App.js             # Main app component
├── App.css            # Global styles
├── Store.js           # Redux store configuration
└── index.js           # App entry point
```

## 🎯 Key Functionalities

### Video Management
- **Like/Unlike**: Toggle like status with visual feedback (filled red heart when liked)
- **Watch Later**: Add/remove videos with toggle functionality
- **History**: Automatic tracking when videos are watched
- **Delete**: Remove individual videos from any list
- **Clear All**: Clear entire lists with one click

### Search
- Real-time search using YouTube API
- Results display in grid layout
- Clickable video cards navigate to video player

### Sidebar
- Collapsible on all pages
- State persists across navigation
- Auto-hides on mobile devices
- Smooth animation

### Video Player
- Fixed height layout
- Scrollable description section
- Scrollable "Up Next" recommendations
- Share functionality with social media integration
- Like count and view count display

## 🔧 State Management

### Redux Store Structure
```javascript
{
  w_reducer: {
    WatchLaterList: [ /* video objects */ ]
  },
  L_reducer: {
    likeVideoList: [ /* video objects */ ]
  },
  H_reducer: {
    historylist: [ /* video objects */ ]
  }
}
```

### Context
- **SidebarContext**: Manages global sidebar open/close state

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px - Full layout with sidebar
- **Tablet**: 768px - 1024px - Adjusted grid, collapsible sidebar
- **Mobile**: < 768px - Stacked layout, sidebar hidden by default

## 🎨 Design Features

### Color Scheme
- **Primary**: #ff0000 (YouTube Red)
- **Text Dark**: #030303
- **Text Gray**: #606060
- **Background**: #f9f9f9
- **Hover**: #f2f2f2

### Typography
- System font stack for native feel
- Sizes: 18px (titles), 14px (body), 12px (metadata)
- Weights: 400 (regular), 500 (medium), 600 (semibold)

## 🚀 Deployment

The app is deployed on Vercel at: **https://you-tube-clone-smoky-phi.vercel.app**

### Deploy Your Own

1. Fork this repository
2. Create a Vercel account
3. Import your forked repository
4. Deploy with default settings
5. Your site will be live!

## 📝 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Runs the test suite
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🐛 Known Issues

- Browser data warning (caniuse-lite) - Run `npx update-browserslist-db@latest` to update
- Some ESLint warnings for missing dependencies (non-critical)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- YouTube Data API v3 for providing video data
- React and Redux communities
- All open-source libraries used in this project
- Vercel for hosting

## 📞 Support

For issues or questions, please open an issue on GitHub.

---

**Made with ❤️ using React and Redux**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/you-tube-clone)
