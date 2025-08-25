import { Button } from "@/components/ui/button"

export function CheckingAccountSection() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="bg-blue-600 text-white p-8 rounded-lg relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-4">Choose a checking account that's right for you</h2>
              <p className="mb-6">Our checking accounts provide easy to use digital tools and convenient features.</p>
              <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Open an account →
              </Button>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/2">
              <img
                src="/bank-of-america-app.png"
                alt="Bank of America Mobile App"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-4 text-red-600">From one Champion to another</h2>
              <p className="text-gray-700 mb-6">
                Exclusive solutions deliver Better Money Habits® to current Olympic and Paralympic athletes.
              </p>
              <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent">
                Watch now →
              </Button>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/2">
              <img
                src="/olympic-athlete-usa.png"
                alt="Olympic Athlete"
                className="h-full w-full object-cover rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
