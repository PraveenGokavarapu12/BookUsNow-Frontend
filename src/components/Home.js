import { useEffect, useState } from "react";

import InfiniteScroll from "react-infinite-scroll-component";
import { RotatingLines } from 'react-loader-spinner'
import Navbar from "./NavBar";
import React, { Suspense, lazy } from "react";

const EventCard=lazy(()=>import('./EventCard'))



const Home = () => {
  const [recommendedEvents, setRecommendedEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [page, setPage] = useState(1);
  const totalPages = 5; // Adjust based on API data

  const url1 = `https://gg-backend-assignment.azurewebsites.net/api/Events?code=${process.env.SECRET_KEY}==&type=reco`;

  const loader = () => {
    return (
      <div className="flex justify-center m-2 items-center">
        <RotatingLines
          visible={true}
          height="30"
          width="30"
          color="grey"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>)
  }
  const fetchData1 = async () => {
    setLoading1(true);
    try {
      const res = await fetch(url1);
      const data = await res.json();
      setTimeout(() => {
        setRecommendedEvents(data.events);
        setLoading1(false);
      }, 1500); // 1.5s delay
    } catch (error) {
      console.log(error);
      setLoading1(false);
    }
  };

  const fetchData2 = async () => {
    if (loading2 || page > totalPages) return;

    setLoading2(true);
    const url2 = `https://gg-backend-assignment.azurewebsites.net/api/Events?code=${process.env.SECRET_KEY}==&page=${page}&type=upcoming`;

    try {
      const res = await fetch(url2);
      const data = await res.json();
      setTimeout(() => {
        setUpcomingEvents(prev => [...prev, ...data.events]);
        setPage(prev => prev + 1);
        setLoading2(false);
      }, 1500); // 1.5s delay
    } catch (error) {
      console.log(error);
      setLoading2(false);
    }
  };

  useEffect(() => {
    fetchData1();
    fetchData2();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <Navbar/>
      <div className="p-6">
      <div className="relative w-full h-[400px] bg-cover bg-center " style={{ backgroundImage: `url("images/Front screen.svg")` }}>
        <div className="absolute inset-0 bg-black flex flex-col justify-center items-center text-white text-center p-6 bg-opacity-50">
          <h2 className="text-3xl font-bold">Discover Exciting Events Near You</h2>
          <p className="mt-2 text-lg">Stay updated with the latest events happening in your city!</p>
        </div>
      </div>

      {/* Recommended Events */}
      <h2 className="text-2xl font-bold mt-6">Recommended Shows</h2>
      {loading1 ? (
        loader()
      ) : (
        <div className="flex overflow-x-auto gap-4 mt-4 scrollbar-hide">
          {recommendedEvents.map((event, index) => (
            <div key={index} className="min-w-[250px]">
              <Suspense fallback={<div><p>Loading..</p></div>}>
              <EventCard {...event} />
              </Suspense>
              
            </div>
          ))}
        </div>
      )}

      {/* Upcoming Events */}
      <h2 className="text-2xl font-bold mt-6">Upcoming Events →</h2>


      <InfiniteScroll
        dataLength={upcomingEvents.length}
        next={fetchData2}
        hasMore={page <= totalPages}
        loader={loader()
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {upcomingEvents.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </InfiniteScroll>

      </div>

      
    </div>
  );
};

export default Home;
