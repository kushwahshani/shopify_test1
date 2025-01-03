export default function homeLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta name="shopify-api-key" content="fe56c0cf0d804e83ddbbce365e1c2353" />
                <script src="https://cdn.shopify.com/shopifycloud/app-bridge.js"></script>
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                {/* Layout UI */}
                {/* Place children where you want to render a page or nested layout */}
                {children}
            </body>
        </html>
    )
}