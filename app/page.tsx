'use client';

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br front-pupple200 from-purple-100 to-pink-100">
        <div>
          <div className="text-center mb-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800">🔢カウンターアプリ</h1>
            </div>
          </div>
        </div>
        <div>0</div>
        <button>-</button>
        <button>+</button>
      </div>
    </>
  );
}
