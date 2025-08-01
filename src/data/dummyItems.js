const dummyItems = {
  "coffee-table": [
    { id: 1,name: "Modern Coffee Table",image: "https://plus.unsplash.com/premium_photo-1680546330888-f995d2d64571?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",price: 7999,     },
       { id: 2, name: "Rustic Coffee Table", image: "https://images.pexels.com/photos/2079455/pexels-photo-2079455.jpeg", price: 5999 },
       { id: 3, name: "Glass Coffee Table", image: "https://images.unsplash.com/photo-1571422065917-030a0f0e6350?q=80&w=775&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 8999},
       { id: 4, name: "Wooden Coffee Table", image: "https://images.unsplash.com/photo-1619911013257-8f1fbc919fc9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 6999},
       { id: 5, name: "Industrial Coffee Table", image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 8999},
  ],
  "sofas": [
    { id: 1, name: "Leather Sofa", image: "/src/assets/sofa2.jpg", price: 12999 },
    { id: 2, name: "Fabric Sofa", image: "/src/assets/lounge.jpg", price: 8999 },
    { id: 3, name: "Sectional Sofa", image: "/src/assets/so1.jpg", price: 15999 },
    { id: 4, name: "Recliner Sofa", image: "/src/assets/so3.jpg", price: 17999 },
    { id: 5, name: "Sleeper Sofa", image: "/src/assets/so2.jpg", price: 13999 },
  ],
  "bar-cabinet": [
    { id: 1, name: "Mini Bar Cabinet", image: "/src/assets/bar.jpg", price: 6499 },
    { id: 2, name: "Classic Wooden Bar", image: "https://images.pexels.com/photos/5669288/pexels-photo-5669288.jpeg", price: 10499 },
    { id: 3, name: "Modern Bar Cabinet", image: "https://images.woodenstreet.de/image/data/bar-cabinets/loire-bar-cabinet-revised/honey/updated/new-logo/1.jpg", price: 8999 },
    { id: 4, name: "Glass Front Bar", image: "https://images.woodenstreet.de/image/data/bar-cabinets/kyler-bar-cabinet-walnut-finish/updated/up/new-logo/2.jpg", price: 11999 },
    { id: 5, name: "Industrial Bar Cabinet", image: "https://images.woodenstreet.de/image/cache/data/bar-cabinets/holger-wall-mounted-bar-cabinet/revised/honey/updated/new-logo/1-810x702.jpg", price: 13999 },
    { id: 6, name: "Vintage Bar Cabinet", image: "/src/assets/bar6.jpg", price: 15999 },
  ],
  "dining-table": [
    { id: 1, name: "Round Dining Table", image: "https://images.pexels.com/photos/2092058/pexels-photo-2092058.jpeg", price: 8999 },
    { id: 2, name: "Rectangular Dining Table", image: "https://images.pexels.com/photos/3144581/pexels-photo-3144581.jpeg", price: 10999 },
    { id: 3, name: "Extendable Dining Table", image: "https://images.pexels.com/photos/534172/pexels-photo-534172.jpeg", price: 12999 },
    { id: 4, name: "Glass Top Dining Table", image: "https://images.pexels.com/photos/13978438/pexels-photo-13978438.jpeg", price: 14999 },
    { id: 5, name: "Wooden Dining Table", image: "https://images.pexels.com/photos/271696/pexels-photo-271696.jpeg", price: 11999 },
    { id: 6, name: "Marble Dining Table", image: "https://images.unsplash.com/photo-1505409628601-edc9af17fda6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 15999 },
    { id: 7, name: "Industrial Dining Table", image: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg", price: 17999 },
    { id: 8, name: "Vintage Dining Table", image: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg", price: 13999 },
    { id: 9, name: "Scandinavian Dining Table", image: "/src/assets/dining.webp", price: 15999 },
  ],
  "clocks": [
    {id: 1, name: "Wall Clock", image: "/src/assets/clock.webp", price: 999 },
    {id: 2, name: "Table Clock", image: "/src/assets/c2.jpg", price: 1299 },
    {id: 3, name: "Vintage Clock", image: "/src/assets/c3.jpg", price: 1499 },
    {id: 4, name: "Digital Clock", image: "/src/assets/c4.jpg", price: 799 },
    {id: 5, name: "Grandfather Clock", image: "/src/assets/c5.jpg", price: 2499 },
    {id: 6, name: "Smart Clock", image: "/src/assets/c6.jpg", price: 1999 },

  ],


  showpieces: [
    { id: 1, name: "Ceramic Vase", image: "/src/assets/s1.jpg", price: 499 },
    { id: 2, name: "Wooden Sculpture", image: "/src/assets/s2.jpg", price: 799 },
    { id: 3, name: "Glass Figurine", image: "/src/assets/s3.jpg", price: 1299 },
    { id: 4, name: "Metal Art Piece", image: "/src/assets/s4.jpg", price: 1599 },
    { id: 5, name: "Decorative Bowl", image: "/src/assets/s5.jpg", price: 699 },
    { id: 6, name: "Wall Hanging", image: "/src/assets/s6.jpg", price: 899 },

  ],
  "table-lamps" : [
    { id: 1, name: "Table Lamp", image: "/src/assets/l1.jpg", price: 899 },
    { id: 2, name: "Floor Lamp", image: "/src/assets/l5.jpg", price: 1499 },
    { id: 3, name: "Wall Lamp", image: "/src/assets/l3.jpg", price: 1199 },
    { id: 4, name: "Pendant Light", image: "/src/assets/l4.jpg", price: 1999 },
    { id: 5, name: "Chandelier", image: "/src/assets/l2.jpg", price: 2999 },
    { id: 6, name: "LED Strip Light", image: "/src/assets/l6.jpg", price: 499 },
  ],
  vase:[
    { id: 1, name: "Ceramic Vase", image: "/src/assets/v1.jpg", price: 499 },
    { id: 2, name: "Glass Vase", image: "/src/assets/v2.jpg", price: 799 },
    { id: 3, name: "Metal Vase", image: "/src/assets/v3.jpg", price: 1299 },
    { id: 4, name: "Wooden Vase", image: "/src/assets/v4.jpg", price: 1599 },
    { id: 5, name: "Decorative Vase", image: "/src/assets/v5.jpg", price: 699 },
    { id: 6, name: "Flower Vase", image: "/src/assets/v6.jpg", price: 899 },
  ],
  "pendant-lights": [
    { id: 1, name: "Modern Pendant Light", image: "/src/assets/l1.jpg", price: 1999 },
    { id: 2, name: "Vintage Pendant Light", image: "/src/assets/l5.jpg", price: 2499 },
    { id: 3, name: "Industrial Pendant Light", image: "/src/assets/l3.jpg", price: 2999 },
    { id: 4, name: "Glass Pendant Light", image: "/src/assets/l4.jpg", price: 1799 },
    { id: 5, name: "LED Pendant Light", image: "/src/assets/l2.jpg", price: 1599 },
    { id: 6, name: "Crystal Pendant Light", image: "/src/assets/l6.jpg", price: 3499 },
  ],
  "side-table": [
    { id: 1, name: "Wooden Side Table", image: "https://plus.unsplash.com/premium_photo-1680546330888-f995d2d64571?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 1999 },
    { id: 2, name: "Glass Side Table", image: "https://images.pexels.com/photos/2079455/pexels-photo-2079455.jpeg", price: 2499 },
    { id: 3, name: "Metal Side Table", image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 2999 },
    { id: 4, name: "Marble Side Table", image: "https://images.unsplash.com/photo-1619911013257-8f1fbc919fc9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 3499 },
    
    
  ],
};

export default dummyItems;