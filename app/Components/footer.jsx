"use client";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white py-6">
      {/* Moving color overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-700/30 via-pink-500/20 to-blue-400/30 blur-3xl opacity-40 pointer-events-none animate-movebg" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col items-center space-y-4 text-center">
        <p className="text-sm sm:text-base font-light tracking-wide">
          Made with{" "}
          <span className="text-red-400 animate-ping-slow hover:animate-pulse cursor-pointer">
            ❤️
          </span>{" "}
          by{" "}
          <span className="font-semibold text-white shimmer-text">
            Muhammad Rehan Ali
          </span>
        </p>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        /* Shimmer on name */
        .shimmer-text {
          background: linear-gradient(90deg, #fff, #999, #fff);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }
        @keyframes shimmer {
          0% {
            background-position: -100% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        /* Slow heart pulse */
        .animate-ping-slow {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        /* Moving gradient background */
        .animate-movebg {
          animation: movebg 15s linear infinite;
          background-size: 200% 200%;
        }
        @keyframes movebg {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </footer>
  );
}
