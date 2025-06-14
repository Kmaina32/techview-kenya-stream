
import VideoCard from './VideoCard';

// Expanded mock data for tech and engineering videos
const videos = [
  {
    id: 1,
    title: "Kenya's AI Revolution: How Local Startups Are Changing Africa",
    channel: "TechView Kenya",
    views: "1.2M views",
    duration: "15:42",
    timestamp: "3 days ago",
    thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Building Mobile Apps in Nairobi: Developer Success Stories",
    channel: "Kenya Code",
    views: "850K views",
    duration: "22:15",
    timestamp: "1 week ago",
    thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "M-Pesa Evolution: The Future of Digital Payments in Africa",
    channel: "Fintech Focus",
    views: "2.1M views",
    duration: "18:30",
    timestamp: "5 days ago",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Kenyan Farmers Embrace IoT: Smart Agriculture Solutions",
    channel: "AgriTech Kenya",
    views: "650K views",
    duration: "12:45",
    timestamp: "2 days ago",
    thumbnail: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Blockchain in Kenya: Beyond Cryptocurrency",
    channel: "Crypto Kenya",
    views: "420K views",
    duration: "25:10",
    timestamp: "1 week ago",
    thumbnail: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Nairobi Tech Hub: Inside iHub's Innovation Center",
    channel: "Innovation Kenya",
    views: "980K views",
    duration: "16:20",
    timestamp: "4 days ago",
    thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    title: "Cybersecurity in East Africa: Protecting Digital Infrastructure",
    channel: "SecureKenya",
    views: "340K views",
    duration: "19:55",
    timestamp: "6 days ago",
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    title: "Women in Tech Kenya: Breaking Barriers and Building Future",
    channel: "DiversityTech",
    views: "760K views",
    duration: "21:40",
    timestamp: "3 days ago",
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    title: "5G Network Rollout in Kenya: What It Means for Developers",
    channel: "Network Kenya",
    views: "1.5M views",
    duration: "14:30",
    timestamp: "2 days ago",
    thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 10,
    title: "Machine Learning in Healthcare: Kenyan Innovations",
    channel: "HealthTech Africa",
    views: "890K views",
    duration: "20:15",
    timestamp: "1 day ago",
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 11,
    title: "Drone Technology for Wildlife Conservation in Kenya",
    channel: "ConservationTech",
    views: "520K views",
    duration: "17:45",
    timestamp: "5 days ago",
    thumbnail: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 12,
    title: "Solar Energy Engineering: Powering Rural Kenya",
    channel: "GreenTech Kenya",
    views: "1.1M views",
    duration: "23:20",
    timestamp: "1 week ago",
    thumbnail: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const VideoGrid = () => {
  return (
    <section className="container px-4 md:px-6 py-8 pb-20 md:pb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            id={video.id}
            title={video.title}
            channel={video.channel}
            views={video.views}
            duration={video.duration}
            timestamp={video.timestamp}
            thumbnail={video.thumbnail}
          />
        ))}
      </div>
    </section>
  );
};

export default VideoGrid;
