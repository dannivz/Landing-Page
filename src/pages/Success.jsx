import { CONFIG } from "../config/config";

function Success() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-12 text-center">
        <div className="text-7xl mb-6 animate-bounce" aria-label="Celebration">
          🎉
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Payment Successful!
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          Congratulations! You now have lifetime access to{" "}
          <span className="font-bold text-purple-700">
            {CONFIG.productName || "our program"}.
          </span>
        </p>

        {/* ✅ What's Next Section */}
        <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 mb-8">
          <h3 className="font-bold text-lg text-gray-900 mb-3">What's Next?</h3>
          <ul className="text-left space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-green-600 mr-3 text-xl">✓</span>
              <span>Check your email for login credentials</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-3 text-xl">✓</span>
              <span>Access the private community immediately</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-3 text-xl">✓</span>
              <span>Download all bonus materials</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-3 text-xl">✓</span>
              <span>Start with Module 1 right now</span>
            </li>
          </ul>
        </div>

        {/* 🚀 CTA */}
        <a
          href="/"
          className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all shadow-xl"
        >
          Go to Course Dashboard
        </a>

        <p className="mt-6 text-gray-500 text-sm">
          Need help? Email us at{" "}
          <a
            href={`mailto:${CONFIG.email || "support@example.com"}`}
            className="text-purple-600 font-medium hover:underline"
          >
            {CONFIG.email || "support@example.com"}
          </a>
        </p>
      </div>
    </div>
  );
}

export default Success;
