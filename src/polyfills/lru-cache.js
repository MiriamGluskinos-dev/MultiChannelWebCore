  src/polyfills/lru-cache.js

class FakeLRUCache {
  constructor() {}
  get() { return undefined; }
  set() {}
  has() { return false; }
}

export default FakeLRUCache;

// Note: This is a temporary polyfill for lru-cache until we can properly
// resolve the dependency issues with Vite and React 19. Once those issues are
// resolved, we can remove this polyfill and use the actual lru-cache package.