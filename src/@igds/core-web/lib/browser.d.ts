/**
 * Browser entrypoint (no bundler).
 *
 * This module is intended to be bundled into a single IIFE file (lib/index.min.js)
 * and included via a classic <script> tag.
 *
 * Importing the package executes modules where Lit's @customElement decorator
 * registers all custom elements.
 */
import * as _IGDSCoreWeb from './index';
declare global {
    var IGDSCoreWeb: typeof _IGDSCoreWeb | undefined;
}
