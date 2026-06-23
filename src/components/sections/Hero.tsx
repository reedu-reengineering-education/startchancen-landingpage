import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroProps {
  title: string;
  subtitle: string;
  bullets?: string[];
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  imageSrc?: string;
  imageAlt?: string;
  /** When true, uses a full-width background image layout instead of side-by-side */
  fullBleed?: boolean;
}

export default function Hero({
  title,
  subtitle,
  bullets,
  ctaPrimary,
  ctaSecondary,
  imageSrc,
  imageAlt = "",
  fullBleed = false,
}: HeroProps) {
  if (fullBleed) {
    return (
      <section className="relative min-h-[520px] flex items-center overflow-hidden bg-gray-900">
        {/* Background image */}
        {imageSrc ? (
          <>
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover object-center"
              priority
            />
            {/* Left gray overlay fading to transparent for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-700/70 via-gray-700/30 to-transparent" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#62A044]/80 to-[#00B4E4]/60" />
        )}

        {/* Content – left-aligned */}
        <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-16 py-20">
          <div className="max-w-2xl">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {title}
            </h1>
            <p className="mt-4 text-lg text-white/90 max-w-xl">{subtitle}</p>
            {bullets && bullets.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                {bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-1.5 text-white/80 text-sm"
                  >
                    <Check size={14} className="text-[#FFDD35] shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            )}
            {(ctaPrimary || ctaSecondary) && (
              <div className="mt-8 flex flex-wrap gap-3">
                {ctaPrimary && (
                  <Link
                    href={ctaPrimary.href}
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "bg-[#62A044] hover:bg-[#4e8335] text-white",
                    )}
                  >
                    {ctaPrimary.label}
                  </Link>
                )}
                {ctaSecondary && (
                  <Link
                    href={ctaSecondary.href}
                    className={cn(
                      buttonVariants({ variant: "secondary", size: "lg" }),
                    )}
                  >
                    {ctaSecondary.label}
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  // Side-by-side layout (default for inner pages)
  return (
    <section className="bg-gray-50 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {title}
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-lg">{subtitle}</p>
            {(ctaPrimary || ctaSecondary) && (
              <div className="mt-8 flex flex-wrap gap-3">
                {ctaPrimary && (
                  <Link
                    href={ctaPrimary.href}
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "bg-[#62A044] hover:bg-[#4e8335] text-white",
                    )}
                  >
                    {ctaPrimary.label}
                  </Link>
                )}
                {ctaSecondary && (
                  <Link
                    href={ctaSecondary.href}
                    className={cn(
                      buttonVariants({ variant: "outline", size: "lg" }),
                    )}
                  >
                    {ctaSecondary.label}
                  </Link>
                )}
              </div>
            )}
          </div>

          {/* Image placeholder */}
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-200">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#62A044]/10 to-[#00B4E4]/10">
                <span className="text-gray-400 text-sm">Bild folgt</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
