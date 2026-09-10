"use client";

import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    icon: React.ReactNode;
    description: string;
    details: string;
    features: string[];
  };
}

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-[#0c0d12] rounded-[2rem] border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.8)] max-w-lg w-full max-h-[85vh] overflow-y-auto z-10 p-6 md:p-8"
          >
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  {service.icon}
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-400">Program Overview</span>
                  <h3 className="text-xl md:text-2xl font-black text-white">{service.title}</h3>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>
            
            <div className="py-6 space-y-6">
              <p className="text-slate-200 text-base leading-relaxed font-medium">
                {service.description}
              </p>
              
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5">
                <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-300 mb-2">Program Details</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {service.details}
                </p>
              </div>
              
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-300 mb-4">Key Offerings & Highlights</h4>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-300 text-sm">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full mt-1.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="pt-6 border-t border-white/10 flex items-center gap-3">
              <button
                onClick={onClose}
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs uppercase tracking-[0.2em] py-4 px-6 rounded-2xl transition-all shadow-lg hover:shadow-indigo-500/25"
              >
                Close Overview
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


