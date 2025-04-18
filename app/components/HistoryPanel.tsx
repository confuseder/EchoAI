import React from 'react';

interface HistoryItem {
  id: string;
  title: string;
  date: string;
}

interface HistoryPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const mockHistory: HistoryItem[] = [
  { id: '1', title: '如何学习React', date: '2024-03-20' },
  { id: '2', title: '什么是Next.js', date: '2024-03-19' },
  { id: '3', title: 'Tailwind CSS教程', date: '2024-03-18' },
];

export default function HistoryPanel({ isOpen, onClose }: HistoryPanelProps) {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={onClose}
        />
      )}
      
      {/* Panel */}
      <div
        className={`fixed top-0 right-0 h-full bg-white/90 backdrop-blur-sm shadow-xl
          transform transition-all duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          w-80 z-50`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-semibold text-gray-800">History</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="space-y-3">
            <div
              className="p-4 bg-[#EBEBDB] rounded-xl hover:opacity-65 cursor-pointer transition-colors duration-200"
            >
              <div className="font-medium text-gray-800">+ New</div>
            </div>
            {mockHistory.map((item) => (
              <div
                key={item.id}
                className="p-4 bg-white rounded-xl hover:bg-gray-50 cursor-pointer transition-colors duration-200"
              >
                <div className="font-medium text-gray-800">{item.title}</div>
                <div className="text-sm text-gray-500 mt-1">{item.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}