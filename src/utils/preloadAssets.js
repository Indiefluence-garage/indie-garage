export function preloadImage(src) {
  if (typeof document === "undefined") return;

  const exists = document.querySelector(
    `link[rel="preload"][href="${src}"]`
  );
  if (exists) return;

  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "image";
  link.href = src;
  document.head.appendChild(link);
}

export function preloadVideo(src, type = "video/webm") {
  if (typeof document === "undefined") return;

  const exists = document.querySelector(
    `link[rel="preload"][href="${src}"]`
  );
  if (exists) return;

  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "video";
  link.href = src;
  link.type = type;
  document.head.appendChild(link);
}
