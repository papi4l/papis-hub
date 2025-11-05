import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Success() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 7000); // Auto redirect after 7 seconds
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-[var(--neutral)] text-center">
      <div className="p-10 rounded-2xl shadow-lg bg-white fade-in max-w-md w-full">
        <div className="success-circle mb-6 mx-auto"></div>
        <h1 className="text-3xl font-bold text-[var(--primary)] mb-2">
          Payment Successful 🎉
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you for your payment! Your transaction was completed successfully.
        </p>
        <button
          onClick={() => router.push("/")}
          className="px-6 py-3 rounded-lg bg-[var(--accent)] text-white font-semibold hover:bg-[var(--primary)] transition-all"
        >
          Return to Home
        </button>
        <p className="text-sm text-gray-500 mt-4">
          Redirecting automatically in a few seconds...
        </p>
      </div>

      <style jsx>{`
        :root {
          --primary: #006d77;
          --accent: #d4a373;
          --neutral: #f7f3eb;
          --highlight: #ff6b6b;
        }

        .fade-in {
          opacity: 0;
          animation: fadeIn 0.8s ease forwards;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }

        .success-circle {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .success-circle::after {
          content: "";
          width: 40px;
          height: 20px;
          border-left: 4px solid white;
          border-bottom: 4px solid white;
          transform: rotate(-45deg);
          position: absolute;
          animation: drawCheck 0.6s ease forwards 0.3s;
          opacity: 0;
        }

        @keyframes drawCheck {
          0% {
            transform: scale(0.5) rotate(-45deg);
            opacity: 0;
          }
          100% {
            transform: scale(1) rotate(-45deg);
            opacity: 1;
          }
        }
      `}</style>
    </main>
  );
}

