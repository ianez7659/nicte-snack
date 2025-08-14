"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
};

export default function Modal({ open, onClose, title, children }: ModalProps) {
  const ref = useRef<HTMLDivElement>(null);

  // ESC to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  const onOverlay = (e: React.MouseEvent) => {
    if (e.target === ref.current) onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={ref}
          onMouseDown={onOverlay}
          className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
          aria-modal="true"
          role="dialog"
          aria-labelledby="modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 grid place-items-center p-4"
            initial={{ scale: 0.98, y: 8, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.98, y: 8, opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            <div className="w-full max-w-2xl rounded-2xl bg-white shadow-xl border border-gray-200">
              <div className="flex items-center justify-between px-5 py-4 border-b">
                <h3
                  id="modal-title"
                  className="text-lg font-bold text-gray-900"
                >
                  {title}
                </h3>
                <button
                  onClick={onClose}
                  aria-label="Close"
                  className="rounded-md p-2 text-gray-500 hover:bg-gray-100"
                >
                  ✕
                </button>
              </div>
              <div className="p-5">{children}</div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
