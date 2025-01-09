export function getAssetPath(path) {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const base = import.meta.env.PROD ? '/test-map' : '';
  return `${base}/${cleanPath}`;
}
