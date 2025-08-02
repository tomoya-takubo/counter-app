'use client';

import React from 'react';
import { useState } from 'react';
import { Plus, Minus, RotateCcw, Zap } from 'lucide-react';


export default function Home() {
  // カウンターの状態を管理するためのステート
  const [count, setCount] = useState(0);
  // ステップ数を管理するステート
  const [step, setStep] = useState(1);
  // カウンターの値を増やす関数
  const increment = () => setCount(count + step);
  // カウンターの値を減らす関数
  const decrement = () => setCount(count - step);
  // カウンターの値をリセットする関数
  const reset = () => setCount(0);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100">
        <div className='max-w-md w-full'>
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">🔢カウンターアプリ</h1>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 mb-6">
            <div className="text-center mb-8">
              <div className="text-5xl font-bold text-gray-800">{count}</div>
            </div>
            <div className="flex justify-center gap-4 mb-6">
              {/* カウンタを減らすボタン */}
              <button onClick={decrement} className="bg-red-500 text-white w-16 h-16 rounded-full flex items-center justify-center">
                <Minus className= "w-6 h-6" />
              </button>
              {/* カウンタをリセットするボタン */}
              <button onClick={reset} className="bg-gray-500 text-white w-16 h-16 rounded-full flex items-center justify-center">
                <RotateCcw className= "w-6 h-6" />
              </button>
              {/* カウンタを増やすボタン */}
              <button onClick={increment} className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center">
                <Plus className= "w-6 h-6" />
              </button>
            </div>

            <div className='border-t pt-6'>
              <div className='text-center'>
                <label className='text-sm font-medium text-gray-700 mb-2 block'>
                  ステップ数: {step}
                </label>
                <input 
                  type="range"
                  min={1}
                  max={10}
                  value={step}
                  onChange={(e) => setStep(Number(e.target.value))}
                  className='w-full h-2 bg-gray-200 rounded-lg'
                  />
              </div>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-3 mb-6'>
            <button
              onClick={() => setCount(count + 10)}
              className='bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-xl flex items-center justify-center gap-2'
            >
              <Zap className='w-4 h-4' />
              +10
            </button>
            <button
              onClick={() => setCount(count - 10)}
              className='bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-xl flex items-center justify-center gap-2'
            >
              <Zap className='w-4 h-4' />
              -10
            </button>
          </div>

          <div className='bg-white rounded-2xl shadow-lg p-6'>
            <h3 className='text-lg font-smibold text-gray-800 mb-4 text-center'>
              カウント情報
            </h3>
            <div className='grid grid-cols-2 gap-4 text-center'>
              <div className='bg-gray-100 rounded-lg p-3'>
                <div className='text-2xl font-bold text-gray-800'>
                  {Math.abs(count)}
                </div>
                <div>絶対値</div>
              </div>
              <div className='bg-gray-100 rounded-lg p-3'>
                <div className='text-2xl font-bold text-purple-600'>
                  {count % 2 === 0 ? '偶数' : '奇数'}
                </div>
                <div>
                  偶数/奇数
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
