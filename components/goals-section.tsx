import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function GoalsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Your financial goals matter</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We can help you achieve them through Better Money Habits® financial education and programs that make
            communities stronger.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="overflow-hidden">
            <div className="h-48 relative">
              <img
                src="/financial-goals-woman.png"
                alt="Better Money Habits - Woman with financial planning"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2">
                <img src="/bank-of-america-shield.png" alt="Bank of America Shield" className="w-8 h-8" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-semibold mb-2">Better Money Habits®</h3>
              <p className="text-sm text-gray-600 mb-4">
                Financial guidance to help you get on the path to your goals.
              </p>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <div className="h-48 bg-red-600 flex items-center justify-center">
              <img src="/bank-of-america-red-calendar-icon.png" alt="Homebuyer Calendar" className="w-24 h-24" />
            </div>
            <div className="p-6">
              <h3 className="font-semibold mb-2">Homebuyer and homeowner tools</h3>
              <p className="text-sm text-gray-600 mb-4">Tools and resources to help you buy or refinance your home.</p>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <div className="h-48 relative">
              <img
                src="/small-business-owner-banking.png"
                alt="Small Business Banking"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 right-2">
                <img src="/business-building-icon-red.png" alt="Business Building Icon" className="w-8 h-8" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-semibold mb-2">Build a portfolio of financial products</h3>
              <p className="text-sm text-gray-600 mb-4">
                See how our financial products can help you reach your goals.
              </p>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <div className="h-48 bg-blue-600 flex items-center justify-center">
              <img src="/white-lightbulb-idea-icon.png" alt="Financial Checkup Ideas" className="w-24 h-24" />
            </div>
            <div className="p-6">
              <h3 className="font-semibold mb-2">Use a Financial Checkup</h3>
              <p className="text-sm text-gray-600 mb-4">Get a personalized view of your financial picture.</p>
            </div>
          </Card>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">Explore more topics and build your financial know-how.</p>
          <Button className="bg-red-600 hover:bg-red-700 text-white">Visit Better Money Habits®</Button>
        </div>
      </div>
    </section>
  )
}
