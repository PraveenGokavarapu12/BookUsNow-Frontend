# Event Discovery Web App

## 📌 Overview
This is an event discovery web application that helps users find recommended and upcoming events. The app features lazy loading, infinite scrolling, and a smooth user experience using modern frontend technologies.

## 🚀 Features
- 📌 **Recommended Events Carousel** using Swiper.js
- 🔄 **Infinite Scrolling** for upcoming events
- 🕗 **Lazy Loading** of components and images
- 🔗 **Real-time Data Fetching** from an external API
- 🎨 **Modern UI** with Tailwind CSS

## 🛠️ Tech Stack
- **React.js** (Functional Components, Hooks)
- **Swiper.js** (Carousel for recommended events)
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

### Swiper.js for Recommended Events
```jsx
<Swiper slidesPerView={3} navigation pagination={{ clickable: true }}>
  {recommendedEvents.map(event => (
    <SwiperSlide key={event.id}><EventCard {...event} /></SwiperSlide>
  ))}
</Swiper>
```

## 📌 Future Improvements
- 🔐 **User Authentication** (Login/Signup with JWT)
- 🎭 **Dark Mode** Toggle
- 📍 **Location-based Event Suggestions**
- 🗂 **Bookmarking & Favorites**

## 🏆 Contributors
- **[Your Name](https://github.com/your-username)**

## 📜 License
This project is licensed under the **MIT License**.

