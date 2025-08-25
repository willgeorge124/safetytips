export function Footer() {
  return (
    <footer className="bg-white border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Disclaimer boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="border border-gray-300 p-4 text-sm">
            <h4 className="font-semibold mb-2">Are Not FDIC Insured</h4>
            <p className="text-gray-600">Are Not Bank Guaranteed</p>
          </div>
          <div className="border border-gray-300 p-4 text-sm">
            <h4 className="font-semibold mb-2">Are Not Insured by Any Federal Government Agency</h4>
          </div>
          <div className="border border-gray-300 p-4 text-sm">
            <h4 className="font-semibold mb-2">May Lose Value</h4>
          </div>
        </div>

        {/* Footer links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-8">
          <div>
            <h5 className="font-semibold mb-3">Locations</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-primary">
                  Find a location
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-3">Contact Us</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-primary">
                  Customer service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-3">Help & Support</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-primary">
                  Online banking
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-3">Security</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-primary">
                  Security center
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-3">Privacy</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-primary">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-3">Careers</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-primary">
                  Working with us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-600 mb-4 md:mb-0">
              © 2024 Bank of America Corporation. All rights reserved.
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary">
                <span className="sr-only">Facebook</span>
                <div className="w-6 h-6 bg-secondary rounded"></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <span className="sr-only">Twitter</span>
                <div className="w-6 h-6 bg-secondary rounded"></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <span className="sr-only">LinkedIn</span>
                <div className="w-6 h-6 bg-secondary rounded"></div>
              </a>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-8 p-4 bg-red-50 rounded-lg">
          <p className="text-sm">
            <span className="text-primary font-semibold">Choose a checking account that's right for you.</span>
            <a href="#" className="text-secondary hover:underline ml-2">
              Open an account →
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
