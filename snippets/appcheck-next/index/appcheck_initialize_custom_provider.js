// This snippet file was generated by processing the source file:
// ./appcheck-next/index.js
//
// To update the snippets in this file, edit the source and then run
// 'npm run snippets'.

// [START appcheck_initialize_custom_provider_modular]
import { initializeApp } from "firebase/app";
import { initializeAppCheck } from "firebase/app-check";

const app = initializeApp({
  // Your firebase configuration object
});

const appCheck = initializeAppCheck(app, {
  provider: appCheckCustomProvider,

  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  isTokenAutoRefreshEnabled: true    
});
// [END appcheck_initialize_custom_provider_modular]