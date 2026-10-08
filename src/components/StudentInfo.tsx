// StudentInfo.tsx
import { useState } from "react";

export function StudentInfo() {
  // State สำหรับควบคุมการเปิด/ปิด Drawer
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 1. ปุ่มกดที่อยู่ใน Footer */}
      <button
        onClick={() => setIsOpen(true)}
        className="text-sm font-medium text-primary hover:underline"
      >
        ข้อมูลนักศึกษา
      </button>

      {/* 2. ตัว Drawer (หน้าจอย่อยเด้งซ้าย) */}
      {/* Background Overlay (ฉากหลังมืด) */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)} // คลิกพื่นหลังเพื่อปิด
      >
        {/* แผงเนื้อหาที่เลื่อนมาจากซ้าย */}
        <div
          className={`fixed inset-y-0 left-0 z-50 w-full max-w-md bg-white p-6 shadow-lg transition-transform duration-300 ease-in-out dark:bg-slate-900 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()} // กันไม่ให้คลิกข้างในแล้วปิด
        >
          {/* หัวข้อ และ ปุ่มปิด */}
          <div className="flex items-center justify-between border-b pb-4">
            <h2 className="text-lg font-semibold">ข้อมูลนักศึกษา</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-md p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              ✕
            </button>
          </div>
          {/* เนื้อหาภายใน Drawer */}
          <div>s</div>
          <div className="mt-6 space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">ชื่อ-นามสกุล</p>
              <p className="font-medium">นายธีรพันทุ์ ไกรทองอยู่</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">รหัสนักศึกษา</p>
              <p className="font-medium">680610684</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">ภาควิชา</p>
              <p className="font-medium">Computer Engineering (CPE207)</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
