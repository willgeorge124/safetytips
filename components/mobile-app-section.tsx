import { Button } from "@/components/ui/button"
import { Smartphone } from "lucide-react"

export function MobileAppSection() {
  return (
    <section className="py-16 bg-secondary text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Secure, convenient banking with our Mobile app</h2>
            <p className="text-blue-100 mb-6">
              Bank on the go with our award-winning mobile app. Deposit checks, pay bills, and manage your accounts
              securely.
            </p>
            <Button variant="secondary" className="bg-white text-secondary hover:bg-gray-100">
              Explore our app
            </Button>
          </div>

          <div className="flex justify-center">
            <div className="w-64 h-96 bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="h-full bg-gradient-to-b from-blue-50 to-white p-6 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-secondary font-bold">Bank of America</div>
                  <div className="w-6 h-6 bg-primary rounded-full"></div>
                </div>
                <div className="flex-1 flex flex-col justify-center items-center">
                  <Smartphone className="w-16 h-16 text-secondary mb-4" />
                  <div className="text-center text-secondary">
                    <h4 className="font-semibold mb-2">Mobile Banking</h4>
                    <p className="text-sm">Secure and convenient banking at your fingertips</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
