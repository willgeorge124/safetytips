import { Button } from "@/components/ui/button"

export function SecuritySection() {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Your news and information</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Level up your account security</h3>
              <p className="text-gray-600 mb-6">
                Watch your security meter rise as you take action against fraud. See it in the Security Center in Mobile
                and Online Banking.
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white">Check it out</Button>
            </div>

            <div className="flex justify-center">
              <img
                src="/bank-of-america-security-center.png"
                alt="Bank of America Security Center Mobile App"
                className="max-w-sm w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Secure, convenient banking with our Mobile app</h3>
              <p className="mb-6 opacity-90">
                Bank safely and conveniently with features like mobile check deposit, account alerts, and more.
              </p>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
              >
                Explore our app
              </Button>
            </div>

            <div className="flex justify-center">
              <img
                src="/bank-of-america-app-dashboard.png"
                alt="Bank of America Mobile App Dashboard"
                className="max-w-sm w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
