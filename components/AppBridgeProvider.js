// "use client"

// import { createApp } from "@shopify/app-bridge"
// import { createContext, useContext, useEffect, useState } from "react"

// const ShopifyAppContext = createContext();

// export function AppBridgeProvider({ children }) {
//   const [appBridgeConfig, setAppBridgeConfi] = useState(null);

//   useEffect(() => {
//     const queryParms = new URLSearchParams(window.location.search);
//     const shop = queryParms.get("shop");
//     const host = queryParms.get("host");

//     if (shop && host) {
//       setAppBridgeConfi({
//         apiKey: "fe56c0cf0d804e83ddbbce365e1c2353",
//         host,
//         forceRedirect: true,
//       });
//     }

//   },[]);

//   if(!appBridgeConfig) return null;

//   const app = createApp(appBridgeConfig);

//   return (
//     <>
//       <AppBridgeProvider config = {appBridgeConfig}>
//         <ShopifyAppContext.Provider value={app}>
//           {children}
//         </ShopifyAppContext.Provider>
//       </AppBridgeProvider>
//     </>
//   );
// };

// export const useShopifyApp = () => useContext(ShopifyAppContext);


