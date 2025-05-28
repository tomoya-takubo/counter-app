'use client';

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100">
        <div>
          <div className="text-center mb-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800">🔢カウンターアプリ</h1>
            </div>
            <div className="text-center mb-8">
              <div className="text-5xl font-bold text-gray-800">0</div>
            </div>
            <div className="flex justify-center gap-4">
              <button className="bg-red-500 text-white w-16 h-16 rounded-full">-</button>
              <button className="bg-green-500 text-white w-16 h-16 rounded-full">+</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
