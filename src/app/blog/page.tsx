export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6">
      {/* Animated Loader */}
      <div className="relative w-20 h-20 mb-6">
        <div className="absolute inset-0 animate-spin rounded-full border-t-4 border-blue-500 border-solid"></div>
        <div className="absolute inset-0 animate-ping rounded-full bg-blue-500 opacity-30"></div>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Blog is Coming Soon!</h1>

      {/* Description */}
      <p className="text-lg text-gray-600 max-w-lg">
        We're working hard to bring you amazing content. Stay tuned for updates and exciting articles!
      </p>
    </div>
  );
}
