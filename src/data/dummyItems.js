const dummyItems = {
  "coffee-table": [
    { id: 1,name: "Modern Coffee Table",image: "https://plus.unsplash.com/premium_photo-1680546330888-f995d2d64571?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",price: 7999,     },
       { id: 2, name: "Rustic Coffee Table", image: "https://images.pexels.com/photos/2079455/pexels-photo-2079455.jpeg", price: 5999 },
       { id: 3, name: "Glass Coffee Table", image: "https://images.unsplash.com/photo-1571422065917-030a0f0e6350?q=80&w=775&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 8999},
       { id: 4, name: "Wooden Coffee Table", image: "https://images.unsplash.com/photo-1619911013257-8f1fbc919fc9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 6999},
       { id: 5, name: "Industrial Coffee Table", image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 8999},
  ],
  "sofas": [
    { id: 1, name: "Leather Sofa", image: "/sofa2.jpg", price: 12999 },
    { id: 2, name: "Fabric Sofa", image: "/lounge.jpg", price: 8999 },
    { id: 3, name: "Sectional Sofa", image: "/so1.jpg", price: 15999 },
    { id: 4, name: "Recliner Sofa", image: "/so3.jpg", price: 17999 },
    { id: 5, name: "Sleeper Sofa", image: "/so2.jpg", price: 13999 },
  ],
  "bar-cabinet": [
    { id: 1, name: "Mini Bar Cabinet", image: "/bar.jpg", price: 6499 },
    { id: 2, name: "Classic Wooden Bar", image: "https://images.pexels.com/photos/5669288/pexels-photo-5669288.jpeg", price: 10499 },
    { id: 3, name: "Modern Bar Cabinet", image: "https://images.woodenstreet.de/image/data/bar-cabinets/loire-bar-cabinet-revised/honey/updated/new-logo/1.jpg", price: 8999 },
    { id: 4, name: "Glass Front Bar", image: "https://images.woodenstreet.de/image/data/bar-cabinets/kyler-bar-cabinet-walnut-finish/updated/up/new-logo/2.jpg", price: 11999 },
    { id: 5, name: "Industrial Bar Cabinet", image: "https://images.woodenstreet.de/image/cache/data/bar-cabinets/holger-wall-mounted-bar-cabinet/revised/honey/updated/new-logo/1-810x702.jpg", price: 13999 },
    { id: 6, name: "Vintage Bar Cabinet", image: "/bar6.jpg", price: 15999 },
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
    { id: 9, name: "Scandinavian Dining Table", image: "/dining.webp", price: 15999 },
  ],
  "clocks": [
    {id: 1, name: "Wall Clock", image: "/clock.webp", price: 999 },
    {id: 2, name: "Table Clock", image: "/c2.jpg", price: 1299 },
    {id: 3, name: "Vintage Clock", image: "/c3.jpg", price: 1499 },
    {id: 4, name: "Digital Clock", image: "/c4.jpg", price: 799 },
    {id: 5, name: "Grandfather Clock", image: "/c5.jpg", price: 2499 },
    {id: 6, name: "Smart Clock", image: "/c6.jpg", price: 1999 },

  ],


  showpieces: [
    { id: 1, name: "Ceramic Vase", image: "/s1.jpg", price: 499 },
    { id: 2, name: "Wooden Sculpture", image: "/s2.jpg", price: 799 },
    { id: 3, name: "Glass Figurine", image: "/s3.jpg", price: 1299 },
    { id: 4, name: "Metal Art Piece", image: "/s4.jpg", price: 1599 },
    { id: 5, name: "Decorative Bowl", image: "/s5.jpg", price: 699 },
    { id: 6, name: "Wall Hanging", image: "/s6.jpg", price: 899 },

  ],
  "table-lamps" : [
    { id: 1, name: "Table Lamp", image: "/l1.jpg", price: 899 },
    { id: 2, name: "Floor Lamp", image: "/l5.jpg", price: 1499 },
    { id: 3, name: "Wall Lamp", image: "/l3.jpg", price: 1199 },
    { id: 4, name: "Pendant Light", image: "/l4.jpg", price: 1999 },
    { id: 5, name: "Chandelier", image: "/l2.jpg", price: 2999 },
    { id: 6, name: "LED Strip Light", image: "/l6.jpg", price: 499 },
  ],
  vase:[
    { id: 1, name: "Ceramic Vase", image: "/v1.jpg", price: 499 },
    { id: 2, name: "Glass Vase", image: "/v2.jpg", price: 799 },
    { id: 3, name: "Metal Vase", image: "/v3.jpg", price: 1299 },
    { id: 4, name: "Wooden Vase", image: "/v4.jpg", price: 1599 },
    { id: 5, name: "Decorative Vase", image: "/v5.jpg", price: 699 },
    { id: 6, name: "Flower Vase", image: "/v6.jpg", price: 899 },
  ],
  "pendant-lights": [
    { id: 1, name: "Modern Pendant Light", image: "/l1.jpg", price: 1999 },
    { id: 2, name: "Vintage Pendant Light", image: "/l5.jpg", price: 2499 },
    { id: 3, name: "Industrial Pendant Light", image: "/l3.jpg", price: 2999 },
    { id: 4, name: "Glass Pendant Light", image: "/l4.jpg", price: 1799 },
    { id: 5, name: "LED Pendant Light", image: "/l2.jpg", price: 1599 },
    { id: 6, name: "Crystal Pendant Light", image: "/l6.jpg", price: 3499 },
  ],
  "side-table": [
    { id: 1, name: "Wooden Side Table", image: "https://plus.unsplash.com/premium_photo-1680546330888-f995d2d64571?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 1999 },
    { id: 2, name: "Glass Side Table", image: "https://images.pexels.com/photos/2079455/pexels-photo-2079455.jpeg", price: 2499 },
    { id: 3, name: "Metal Side Table", image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 2999 },
    { id: 4, name: "Marble Side Table", image: "https://images.unsplash.com/photo-1619911013257-8f1fbc919fc9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 3499 },
    
    
  ],
  "decorative-mirrors": [
    { id: 1, name: "Round Mirror", image: "/mirror.jpg", price: 999 },
    { id: 2, name: "Wall Mirror", image: "/m1.jpg", price: 1299 },
    { id: 3, name: "Floor Mirror", image: "/m3.jpg", price: 1999 },
    { id: 4, name: "Decorative Mirror", image: "/m4.jpg", price: 1599 },
    { id: 5, name: "Vintage Mirror", image: "/m2.jpg", price: 2499 },
    { id: 6, name: "Framed Mirror", image: "/m5.jpg", price: 899 },
  ],
  "kitchen-storage": [
    { id: 1, name: "Wooden Cabinet", image: "/k1.jpg", price: 2999 },
    { id: 2, name: "Metal Shelves", image: "/k2.jpg", price: 1999 },
    { id: 3, name: "Glass Jars Set", image: "/k4.jpg", price: 799 },
    { id: 4, name: "Spice Rack", image: "/k3.jpg", price: 1299 },
    { id: 5, name: "Pantry Organizer", image: "/k5.jpg", price: 1599 },
    { id: 6, name: "Kitchen Trolley", image: "/k6.jpg", price: 2499 },
  ],
};

export default dummyItems;