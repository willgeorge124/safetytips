export function ServicesSection() {
  return (
    <section className="py-8 bg-white px-4">
      <div className="max-w-md mx-auto">
        <div className="grid grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                <div className="w-5 h-3 bg-white rounded-sm"></div>
              </div>
              <span className="text-blue-600 font-medium text-sm">Checking</span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="text-blue-600 font-medium text-sm">Savings & CDs</span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                <div className="w-5 h-3 bg-white rounded-sm"></div>
              </div>
              <span className="text-blue-600 font-medium text-sm">Credit Cards</span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded"></div>
              </div>
              <span className="text-blue-600 font-medium text-sm">Home Loans</span>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded"></div>
              </div>
              <span className="text-blue-600 font-medium text-sm">Auto Loans</span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded"></div>
              </div>
              <span className="text-blue-600 font-medium text-sm">Small Business</span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="text-blue-600 font-medium text-sm">Investing</span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded"></div>
              </div>
              <span className="text-blue-600 font-medium text-sm">Student Banking</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
