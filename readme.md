# Furniture Marketplace

🚀🚀**Furniture Marketplace Overview**🚀🚀  


The Furniture Marketplace is a modern, responsive e-commerce platform designed to redefine the online furniture shopping experience. Developed with a focus on scalability, efficiency, and user satisfaction, this platform is a comprehensive solution for showcasing and selling furniture.  

The project builds upon a strong technical foundation, integrating advanced tools and frameworks to deliver a seamless shopping experience. Leveraging **Sanity CMS** for content management and **Next.js** for frontend development, the website ensures a streamlined flow of data between the backend and frontend systems.  

Key features of the platform include:  
- **Dynamic Product Management**: An intuitive data schema supports robust management of furniture products, categories, and inventory.  
- **User-Centric Design**: The interface is crafted for effortless navigation, allowing customers to explore furniture collections with ease.  
- **Efficient Order Processing**: A reliable system for handling orders, shipments, and payments ensures a premium experience for both customers and sellers.  
- **Real-Time Updates**: Content and inventory updates are reflected instantly, enhancing operational efficiency.  

The vision for the Furniture Marketplace is to provide a scalable and user-friendly platform that prioritizes aesthetics and functionality, offering customers a premium shopping journey. This project demonstrates a commitment to innovative technology, thoughtful design, and a seamless blend of form and function in the digital furniture space.  

🚀🚀SYSTEM ARCHITECTURE🚀🚀

### **Pages Overview**  

- **Home Page**:  
  A visually stunning and responsive landing page highlighting featured furniture collections, trending items, and special offers. Designed to captivate users with high-quality visuals and easy navigation.  

- **Shop Page**:  
  A well-organized browsing area allowing users to explore furniture by categories, price range, material, and style. Includes advanced filtering and sorting options for an optimal shopping experience.  

- **Cart Page**:  
  A user-friendly interface for managing selected items, with real-time updates for quantity adjustments and price calculations.  

- **Order Tracking Page**:  
  Provides real-time updates on order status, from confirmation to delivery, offering transparency and peace of mind.  

- **Track Order Page**:  
  Allows users to input their order ID to view detailed tracking information, including shipment status and estimated delivery time.  

- **Checkout Page**:  
  A seamless and secure checkout process integrated with **Stripe**, ensuring a smooth and trustworthy transaction experience.  

- **Thank You Page**:  
  A personalized confirmation page expressing gratitude to customers after successful order placement. Includes details of the purchase and recommendations for related products.  

---

### **Technologies Used**  

#### **Frontend**  
- **Next.js**: For dynamic, server-rendered UIs that enhance user experience and SEO performance.  
- **Tailwind CSS**: To design responsive, modern, and beautiful layouts effortlessly.  
- **Shadcn/UI**: Provides customizable and reusable UI components for a polished user interface.  

#### **Backend**  
- **Sanity CMS**: A robust content management system to structure and manage product catalogs, categories, and other data efficiently.  
- **Clerk**: For secure user authentication, registration, and management.  

#### **APIs**  
- **ShipEngine API**: Enables real-time shipment tracking and delivery management for enhanced customer satisfaction.  
- **Stripe API**: Facilitates secure and seamless payment processing, supporting various payment methods.  

#### **Tools**  
- **GitHub**: Version control and team collaboration for efficient development workflows.  
- **Postman**: API testing and documentation to ensure reliable integration and performance.  
- **Vercel**: Fast, reliable, and globally distributed deployment for optimal performance and scalability.  

---

### **Visuals and User Flow**  
1. **Home Page to Cart Flow**:  
   - A user selects an item from the homepage and adds it to their cart, where they can adjust quantities and see live price updates.  

2. **Checkout Experience**:  
   - Users proceed from the cart to the secure checkout page, complete payment via **Stripe**, and land on the Thank You page with order details.  

3. **Order Tracking Flow**:  
   - Customers access the **Order Tracking Page** to monitor their order’s journey using real-time updates from the **ShipEngine API**.  
   ### API Endpoints for Furniture Marketplace Website

🚀🚀API ENDPOINTS🚀🚀

#### **Authentication**
- **POST** `/api/auth/register`
  - Description: Registers a new user.
  - Payload: `{ "name": "string", "email": "string", "password": "string" }`
  - Response: `{ "userId": "string", "token": "string" }`

- **POST** `/api/auth/login`
  - Description: Authenticates a user and provides a token.
  - Payload: `{ "email": "string", "password": "string" }`
  - Response: `{ "userId": "string", "token": "string" }`

- **GET** `/api/auth/logout`
  - Description: Logs out the current user.

---

#### **Products**
- **GET** `/api/products`
  - Description: Fetches a list of all products.
  - Query Parameters: `?category=string&page=number&limit=number`
  - Response: `[{ "id": "string", "name": "string", "price": "number", "image": "string" }]`

- **GET** `/api/products/:id`
  - Description: Fetches details of a single product by ID.
  - Response: `{ "id": "string", "name": "string", "price": "number", "description": "string", "image": "string", "stock": "number" }`

- **POST** `/api/products`
  - Description: Adds a new product (Admin only).
  - Payload: `{ "name": "string", "price": "number", "description": "string", "category": "string", "image": "string", "stock": "number" }`
  - Response: `{ "message": "Product added successfully" }`

- **PUT** `/api/products/:id`
  - Description: Updates an existing product (Admin only).
  - Payload: `{ "name": "string", "price": "number", "description": "string", "category": "string", "image": "string", "stock": "number" }`
  - Response: `{ "message": "Product updated successfully" }`

- **DELETE** `/api/products/:id`
  - Description: Deletes a product (Admin only).
  - Response: `{ "message": "Product deleted successfully" }`


#### **Cart**
- **GET** `/api/cart`
  - Description: Fetches the cart for the logged-in user.
  - Response: `[{ "productId": "string", "quantity": "number" }]`

- **POST** `/api/cart`
  - Description: Adds a product to the cart.
  - Payload: `{ "productId": "string", "quantity": "number" }`
  - Response: `{ "message": "Product added to cart" }`

- **PUT** `/api/cart/:productId`
  - Description: Updates the quantity of a product in the cart.
  - Payload: `{ "quantity": "number" }`
  - Response: `{ "message": "Cart updated successfully" }`

- **DELETE** `/api/cart/:productId`
  - Description: Removes a product from the cart.
  - Response: `{ "message": "Product removed from cart" }`

---

#### **Orders**
- **POST** `/api/orders`
  - Description: Creates a new order.
  - Payload: `{ "cart": [{ "productId": "string", "quantity": "number" }], "paymentMethod": "string" }`
  - Response: `{ "orderId": "string", "message": "Order created successfully" }`

- **GET** `/api/orders`
  - Description: Fetches all orders for the logged-in user.
  - Response: `[{ "orderId": "string", "status": "string", "total": "number", "createdAt": "date" }]`

- **GET** `/api/orders/:id`
  - Description: Fetches details of a specific order.
  - Response: `{ "orderId": "string", "status": "string", "items": [{ "productId": "string", "quantity": "number" }], "total": "number" }`

- **PUT** `/api/orders/:id/status`
  - Description: Updates the status of an order (Admin only).
  - Payload: `{ "status": "string" }`
  - Response: `{ "message": "Order status updated" }`

---

#### **Shipping**
- **GET** `/api/shipping/:orderId`
  - Description: Fetches shipping details for a specific order.
  - Response: `{ "trackingNumber": "string", "status": "string", "estimatedDelivery": "date" }`

---

#### **Payments**
- **POST** `/api/payments`
  - Description: Initiates a payment using **Stripe**.
  - Payload: `{ "orderId": "string", "paymentMethod": "string" }`
  - Response: `{ "paymentId": "string", "status": "success/failure" }`

## **Sanity and Next.js Interaction Workflow for Furniture Website:**
Content Management in Sanity

Sanity acts as the central content hub for managing your furniture-related data, such as product details (e.g., name, description, images), categories, and pricing.
Fetching Data in Next.js

Next.js fetches data from Sanity via GROQ (GraphQL-like query language) to retrieve structured, content-rich data. This ensures that product information, categories, and other details are always up-to-date.
Server-side Rendering (SSR)

For dynamic pages such as:
Product detail pages.
Individual furniture pieces with specific descriptions, images, and related information.
These pages fetch data on the server side, ensuring that users always receive the most current content.
Static Site Generation (SSG)

Pages such as:
Home page.
Category pages (e.g., "Sofas," "Tables").
These pages are pre-rendered at build time to improve performance and SEO.
Real-time Updates

Sanity's webhooks or event-based updates trigger real-time changes in the Next.js application, ensuring that content is automatically updated without requiring a manual deploy.
Rendering Components

Next.js components dynamically render content based on the data fetched from Sanity. This could include:
Product cards with images and prices.
Category filters.
User reviews and ratings for furniture pieces.
Example Flow:
A user visits a product detail page:

The page makes a server-side request to fetch product data from Sanity.
Details such as name, description, images, and pricing are dynamically rendered in the UI.
On the home page:

A static version of the page is pre-rendered at build time using data fetched from Sanity about popular furniture items, categories, and promotions.
Real-time Updates:

When an administrator updates a product description or adds a new furniture item in Sanity, the application reflects these changes immediately through webhooks.

# **Sanity Schemas for Furniture Website**
Below are example schemas for Product, Customer, Order, Shipment, Category, and Coupon tailored for a furniture website.
# **Product Schema**
{
  "name": "product",
  "title": "Product",
  "type": "document",
  "fields": [
    {
      "name": "title",
      "title": "Title",
      "type": "string"
    },
    {
      "name": "description",
      "title": "Description",
      "type": "text"
    },
    {
      "name": "price",
      "title": "Price",
      "type": "number"
    },
    {
      "name": "category",
      "title": "Category",
      "type": "reference",
      "to": [{ "type": "category" }]
    },
    {
      "name": "image",
      "title": "Image",
      "type": "image",
      "options": { "hotspot": true }
    }
  ]
}
# **Customer Schema**
{
  "name": "customer",
  "title": "Customer",
  "type": "document",
  "fields": [
    {
      "name": "name",
      "title": "Name",
      "type": "string"
    },
    {
      "name": "email",
      "title": "Email",
      "type": "string"
    },
    {
      "name": "phone",
      "title": "Phone",
      "type": "string"
    },
    {
      "name": "address",
      "title": "Address",
      "type": "text"
    }
  ]
}

# **Order Schema**
{
  "name": "order",
  "title": "Order",
  "type": "document",
  "fields": [
    {
      "name": "customer",
      "title": "Customer",
      "type": "reference",
      "to": [{ "type": "customer" }]
    },
    {
      "name": "products",
      "title": "Products",
      "type": "array",
      "of": [{ "type": "reference", "to": [{ "type": "product" }] }]
    },
    {
      "name": "totalPrice",
      "title": "Total Price",
      "type": "number"
    },
    {
      "name": "status",
      "title": "Status",
      "type": "string",
      "options": {
        "list": ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"]
      }
    }
  ]
}
# **Shipment Schema**
{
  "name": "shipment",
  "title": "Shipment",
  "type": "document",
  "fields": [
    {
      "name": "order",
      "title": "Order",
      "type": "reference",
      "to": [{ "type": "order" }]
    },
    {
      "name": "trackingNumber",
      "title": "Tracking Number",
      "type": "string"
    },
    {
      "name": "carrier",
      "title": "Carrier",
      "type": "string"
    },
    {
      "name": "status",
      "title": "Status",
      "type": "string",
      "options": {
        "list": ["Not Shipped", "In Transit", "Delivered", "Returned"]
      }
    }
  ]
}
# **Category Schema**
{
  "name": "category",
  "title": "Category",
  "type": "document",
  "fields": [
    {
      "name": "name",
      "title": "Name",
      "type": "string"
    },
    {
      "name": "description",
      "title": "Description",
      "type": "text"
    }
  ]
},





