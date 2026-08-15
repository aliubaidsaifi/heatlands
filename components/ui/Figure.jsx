import Image from 'next/image';

/**
 * Figure — every photograph goes through here so crop, sizing and
 * loading behaviour stay consistent across the site.
 */
export default function Figure({
  src,
  alt,
  ratio,
  zoom = true,
  priority = false,
  sizes = '(max-width: 760px) 100vw, (max-width: 1280px) 50vw, 40vw',
  className = '',
  quality = 80,
}) {
  return (
    <div
      className={`fig ${zoom ? 'fig-zoom' : ''} ${className}`}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        quality={quality}
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
}
