const EventCard = ({ eventName, cityName, imgUrl }) => {
  
  function extractDriveFileId(url) {
    if (!url || typeof url !== "string") return null;
    const match = url.match(/(?:\/d\/|id=)([a-zA-Z0-9_-]+)/);
    return match ? match[1] : null;
  }

  const imageId = extractDriveFileId(imgUrl);
  const driveImageUrl =`https://drive.google.com/uc?export=view&id=${imageId}` 
    

  console.log("Extracted ID:", imageId, "Image URL:", driveImageUrl);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img 
        src={driveImageUrl} 
        alt={eventName} 
        className="w-full h-48 object-cover" 
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{eventName}</h3>
        <p className="text-sm text-gray-500">{cityName}</p>
      </div>
    </div>
  );
};

export default EventCard;
