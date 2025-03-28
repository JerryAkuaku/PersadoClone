export default function CertificationIcons() {
  return (
    <div className="flex flex-wrap justify-center gap-8 mt-8">
      {/* GDPR Icon */}
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 overflow-hidden">
        <div className="text-center">
          <span className="block text-xs font-bold text-blue-900">GDPR</span>
          <span className="block text-xs mt-0.5 text-blue-900">★</span>
        </div>
      </div>
      
      {/* ISO 27001 Icon */}
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 overflow-hidden">
        <div className="text-center">
          <span className="block text-[8px] font-bold text-blue-900">ISO</span>
          <span className="block text-xs font-bold text-blue-900">27001</span>
          <span className="block text-[8px] text-blue-900">CERTIFIED</span>
        </div>
      </div>
      
      {/* CCPA Icon */}
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 overflow-hidden">
        <div className="text-center">
          <span className="block text-xs font-bold text-blue-900">CCPA</span>
        </div>
      </div>
      
      {/* SOC 2 Icon */}
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 overflow-hidden">
        <div className="text-center">
          <span className="block text-[10px] font-bold text-blue-900">AICPA</span>
          <span className="block text-xs font-bold text-blue-900">SOC</span>
          <span className="block text-xs mt-[-3px] text-blue-900">2</span>
        </div>
      </div>
    </div>
  );
}