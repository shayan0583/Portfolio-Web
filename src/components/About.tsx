import { Header } from "./Header";
import aboutPhoto from "../assets/your-photo.jpg"; // مسیر واقعی عکس خودت

interface AboutProps {
  onBack: () => void; // دکمه بازگشت
}

export function About({ onBack }: AboutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="about-section flex flex-wrap items-center justify-center gap-8 p-16">
        {/* متن سمت چپ */}
        <div className="about-text flex-1 min-w-[300px]">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="mb-4 text-gray-700">
            سلام! من [نام شما] هستم، یک توسعه‌دهنده/طراح/مدیر پروژه.
          </p>
          <p className="text-gray-700">
            علاقه زیادی به پروژه‌های خلاقانه دارم و همیشه سعی میکنم بهترین راهکارها رو ارائه کنم.
          </p>
          <button
            className="mt-4 px-4 py-2 bg-primary text-white rounded"
            onClick={onBack}
          >
            Back
          </button>
        </div>

        {/* تصویر سمت راست */}
        <div className="about-image flex-1 min-w-[300px]">
          <img
            src={aboutPhoto}
            alt="About Me"
            className="w-full h-auto rounded-xl"
          />
        </div>
      </section>
    </div>
  );
}
