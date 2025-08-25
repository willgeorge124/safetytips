export function CreditCardSection() {
  return (
    <section className="bg-white py-8 px-4">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Choose the card that works for you</h2>

        <div className="space-y-4">
          {/* Customized Cash Rewards */}
          <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-gray-200">
            <div className="relative">
              <div className="absolute -top-1 -left-1 bg-blue-600 text-white text-xs px-2 py-1 rounded text-[10px] font-medium z-10">
                NEW OFFER
              </div>
              <img
                src="/cards/customized-cash-rewards.png"
                alt="Customized Cash Rewards Card"
                className="w-20 h-12 rounded-md object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="text-blue-600 font-medium">$200 online bonus →</div>
              <div className="text-xs text-gray-500 mt-1">Customized Cash Rewards</div>
              <div className="text-xs text-gray-500">No annual fee</div>
            </div>
          </div>

          {/* Unlimited Cash Rewards */}
          <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-gray-200">
            <div className="relative">
              <div className="absolute -top-1 -left-1 bg-blue-600 text-white text-xs px-2 py-1 rounded text-[10px] font-medium z-10">
                NEW OFFER
              </div>
              <img
                src="/cards/unlimited-cash-rewards.png"
                alt="Unlimited Cash Rewards Card"
                className="w-20 h-12 rounded-md object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="text-blue-600 font-medium">$200 online bonus →</div>
              <div className="text-xs text-gray-500 mt-1">Unlimited Cash Rewards</div>
              <div className="text-xs text-gray-500">No annual fee</div>
            </div>
          </div>

          {/* Travel Rewards */}
          <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-gray-200">
            <img
              src="/cards/travel-rewards.png"
              alt="Travel Rewards Card"
              className="w-20 h-12 rounded-md object-cover"
            />
            <div className="flex-1">
              <div className="text-blue-600 font-medium">25,000 online bonus points offer →</div>
              <div className="text-xs text-gray-500 mt-1">Travel Rewards</div>
              <div className="text-xs text-gray-500">No annual fee</div>
            </div>
          </div>

          {/* BankAmericard */}
          <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-gray-200">
            <img src="/cards/bankamericard.png" alt="BankAmericard" className="w-20 h-12 rounded-md object-cover" />
            <div className="flex-1">
              <div className="text-blue-600 font-medium">Intro APR offer for 18 billing cycles</div>
              <div className="text-xs text-gray-500 mt-1">BankAmericard®</div>
              <div className="text-xs text-gray-500">No annual fee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
