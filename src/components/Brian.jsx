import { useEffect, useState } from "react";

const Brian = () => {
  const [timeRemaining, setTimeRemaining] = useState("");

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const easternTimeOffset = new Date().getTimezoneOffset() - 300; // Eastern Time is UTC-5
      const easternNow = new Date(
        now.getTime() + easternTimeOffset * 60 * 1000
      );

      const christmas = new Date(easternNow.getFullYear(), 11, 25, 0, 0, 0); // Dec 25, 12:00 AM
      if (easternNow > christmas) {
        // If it's past Christmas, calculate for next year's Christmas
        christmas.setFullYear(christmas.getFullYear() + 1);
      }

      const difference = christmas - easternNow;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeRemaining(
        `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
      );
    };

    const interval = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div>
      <img src="/snowy.jpg" className="w-screen h-screen blur absolute z-0" />
      <div className="h-screen w-screen absolute z-20 flex flex-col items-center pt-12 px-8">
        <div className="flex flex-col items-center p-8 bg-zinc-800 rounded shadow-xl">
          <h1 className="text-xl font-bold text-center">
            Hi Brian!!! Merry Christmas :D
          </h1>
          <img src="/gift.gif" className="h-36 w-36" />
          <div className="flex flex-col items-center pt-2">
            <p className="font-medium">Gift Opens In:</p>
            <p className="text-lg mt-2 text-center">{timeRemaining}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brian;
