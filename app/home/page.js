import Link from "next/link"

function page() {
  return (
    < >
      <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/010/803/399/non_2x/background-with-colorful-shopping-bags-illustration-sale-and-discount-concept-vector.jpg')" }}>
        <div>
          <div>
            <div className="flex pt-10 font-semibold ml-20 text-2xl text-black ">
              <div>
              <img className="h-20 w-20 rounded-full " src="https://th.bing.com/th/id/OIP.3oyQCeAhJ4dUCkldndaWTAAAAA?rs=1&pid=ImgDetMain" alt="" />
              </div>
              <div className="pt-6 ml-4"><h1 >Shopify</h1></div>
            </div>
          </div>

          <div>
            <p className="flex justify-center font-bold text-6xl pt-4">Home Page</p>
            <p className="text-center border-2 border-solid border-black rounded-lg font-bold mt-10 mr-40 ml-40 p-4 ">We all know Shopify as the biggest e-commerce platform in the world but what makes Shopify so powerful? The answer is Shopify applications. A Shopify app is an extension of Shopify store functionality to improve customer support, marketing, data analytics, and accounting.
              Shopify applications also extend functionality for digital downloads, subscription services, custom product pages, and shipping options. The main Shopify apps help improve efficiency, increase sales, and enhance customer experience. Common Shopify app examples include:
              Marketing and sales
              Inventory and fulfillment
              Customer support
              Shopify applications are important additions to e-commerce stores because of the various benefits that stores reap from them. This next section covers these benefits in greater detail.
            </p>
            <p className="text-center font-bold p-4">
              To get more information about Shopify, you can click on this button:
              <button className="border-2 border-solid border-black rounded-2xl p-2 m-4 custom-button bg-rgb(104 167 249) hover:bg-cyan-600"><Link href="https://www.shopify.com/">Shopify</Link></button>

            </p>
          </div>

        </div>

      </div>
    </>
  )
}

export default page
