# Event Discovery Web App

## 📌 Overview
This is an event discovery web application that helps users find recommended and upcoming events. The app features lazy loading, infinite scrolling, and a smooth user experience using modern frontend technologies.

## 🚀 Features
- 🔄 **Infinite Scrolling** for upcoming events
- 🕗 **Lazy Loading** of components and images
- 🔗 **Real-time Data Fetching** from an external API
- 🎨 **Modern UI** with Tailwind CSS
- 🔐 **User Authentication** (Login/Signup with JWT)

## 🛠️ Tech Stack
- **React.js** (Functional Components, Hooks)
- **React Infinite Scroll Component** (Lazy loading and pagination)
- **React Loader Spinner** (Loading indicators)
- **Tailwind CSS** (Styling)
- **API Fetching** (REST API integration)

## 🔧 Installation & Setup

1. **Clone the Repository**
```bash
  git clone https://github.com/your-username/event-discovery-app.git
  cd event-discovery-app
```

2. **Install Dependencies**
```bash
  npm install
```

3. **Run the Development Server**
```bash
  npm start
```

## 📂 Project Structure
```
📦 event-discovery-app
├── 📂 src
│   ├── 📂 components
│   │   ├── EventCard.js
│   │   ├── Home.js
│   │   ├── Loader.js
│   ├── 📂 assets
│   │   ├── images
│   ├── App.js
│   ├── index.js
├── package.json
├── README.md
```

## ⚡ API Integration
This app fetches data from an external API:
```bash
https://gg-backend-assignment.azurewebsites.net/api/Events?code=API_KEY&type=reco
```
Replace `API_KEY` with your actual key if necessary.

## 🌟 Key Implementations
### Lazy Loading Components
```jsx
const EventCard = lazy(() => import("./EventCard"));
<Suspense fallback={<Loader />}>
  <EventCard {...event} />
</Suspense>
```

### Infinite Scroll for Upcoming Events
```jsx
<InfiniteScroll
  dataLength={upcomingEvents.length}
  next={fetchData2}
  hasMore={page <= totalPages}
  loader={<Loader />}
>
  {upcomingEvents.map(event => <EventCard key={event.id} {...event} />)}
</InfiniteScroll>
```



## 📌 Future Improvements

- 📍 **Location-based Event Suggestions**
- 🗂 **Bookmarking & Favorites**
