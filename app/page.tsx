'use client';

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br front-pupple200 from-purple-100 to-pink-100">
        <h1>🔢カウンターアプリ</h1>
        <div>0</div>
        <button>-</button>
        <button>+</button>
      </div>
    </>
  );
}
