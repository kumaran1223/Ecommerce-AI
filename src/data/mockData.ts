
import { Product } from '@/types';

export const mockProducts: Product[] = [
  // Laptops
  {
    id: '1',
    name: 'MacBook Pro 16" M3',
    description: 'Apple MacBook Pro with M3 chip, 16GB RAM, 512GB SSD',
    price: 2499,
    category: 'Laptops',
    rating: 4.8,
    image_url: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop&auto=format',
    availability: true,
    stock: 15,
    brand: 'Apple',
    discount: 5
  },
  {
    id: '2',
    name: 'Dell XPS 13',
    description: 'Ultra-thin laptop with Intel i7, 16GB RAM, 1TB SSD',
    price: 1299,
    category: 'Laptops',
    rating: 4.6,
    image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop&auto=format',
    availability: true,
    stock: 8,
    brand: 'Dell'
  },
  {
    id: '3',
    name: 'Gaming Laptop ASUS ROG',
    description: 'High-performance gaming laptop with RTX 4070, 32GB RAM',
    price: 1899,
    category: 'Laptops',
    rating: 4.7,
    image_url: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop',
    availability: true,
    stock: 5,
    brand: 'ASUS'
  },

  // Smartphones
  {
    id: '4',
    name: 'iPhone 15 Pro',
    description: 'Latest iPhone with A17 Pro chip, 256GB storage',
    price: 999,
    category: 'Smartphones',
    rating: 4.9,
    image_url: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop&auto=format',
    availability: true,
    stock: 25,
    brand: 'Apple',
    discount: 3
  },
  {
    id: '5',
    name: 'Samsung Galaxy S24 Ultra',
    description: 'Premium Android phone with S Pen, 512GB storage',
    price: 1199,
    category: 'Smartphones',
    rating: 4.7,
    image_url: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=300&fit=crop',
    availability: true,
    stock: 12,
    brand: 'Samsung'
  },
  {
    id: '6',
    name: 'Google Pixel 8 Pro',
    description: 'AI-powered photography, pure Android experience',
    price: 899,
    category: 'Smartphones',
    rating: 4.5,
    image_url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop',
    availability: true,
    stock: 18,
    brand: 'Google'
  },

  // Headphones
  {
    id: '7',
    name: 'AirPods Pro 2',
    description: 'Apple AirPods Pro (2nd generation) with H2 chip, Active Noise Cancellation, Transparency mode, Spatial Audio, and up to 6 hours of listening time',
    price: 249,
    category: 'Audio',
    rating: 4.8,
    image_url: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&h=300&fit=crop&auto=format',
    availability: true,
    stock: 30,
    brand: 'Apple',
    discount: 8
  },
  {
    id: '8',
    name: 'Sony WH-1000XM5',
    description: 'Industry-leading noise cancellation headphones',
    price: 399,
    category: 'Audio',
    rating: 4.8,
    image_url: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop',
    availability: true,
    stock: 20,
    brand: 'Sony'
  },
  {
    id: '9',
    name: 'Bose QuietComfort 45',
    description: 'Premium comfort with excellent noise cancellation',
    price: 329,
    category: 'Audio',
    rating: 4.5,
    image_url: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=300&fit=crop',
    availability: true,
    stock: 15,
    brand: 'Bose'
  },

  // Tablets
  {
    id: '10',
    name: 'iPad Pro 12.9"',
    description: 'M2 chip, 256GB, perfect for creative professionals',
    price: 1099,
    category: 'Tablets',
    rating: 4.7,
    image_url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop',
    availability: true,
    stock: 10,
    brand: 'Apple'
  },
  {
    id: '11',
    name: 'Samsung Galaxy Tab S9',
    description: 'Android tablet with S Pen, 11" display',
    price: 799,
    category: 'Tablets',
    rating: 4.4,
    image_url: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=300&fit=crop',
    availability: true,
    stock: 7,
    brand: 'Samsung'
  },

  // Cameras
  {
    id: '12',
    name: 'Canon EOS R6 Mark II',
    description: 'Professional mirrorless camera with 24.2MP sensor',
    price: 2499,
    category: 'Cameras',
    rating: 4.9,
    image_url: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop',
    availability: true,
    stock: 4,
    brand: 'Canon'
  },
  {
    id: '13',
    name: 'Sony A7 IV',
    description: 'Sony Alpha 7 IV full-frame mirrorless camera with 33MP Exmor R CMOS sensor, 4K 60p video recording, 5-axis image stabilization, and advanced autofocus system',
    price: 2198,
    category: 'Cameras',
    rating: 4.9,
    image_url: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop&auto=format',
    availability: true,
    stock: 8,
    brand: 'Sony',
    discount: 5
  },

  // Gaming
  {
    id: '14',
    name: 'PlayStation 5',
    description: 'Latest gaming console with ultra-fast SSD',
    price: 499,
    category: 'Gaming',
    rating: 4.8,
    image_url: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=400&h=300&fit=crop',
    availability: true,
    stock: 3,
    brand: 'Sony'
  },
  {
    id: '15',
    name: 'Xbox Series X',
    description: 'Powerful gaming console with 12 teraflops',
    price: 499,
    category: 'Gaming',
    rating: 4.7,
    image_url: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=400&h=300&fit=crop',
    availability: true,
    stock: 5,
    brand: 'Microsoft'
  },

  // Smart Home
  {
    id: '16',
    name: 'Amazon Echo Dot 5th Gen',
    description: 'Smart speaker with Alexa voice assistant',
    price: 49,
    category: 'Smart Home',
    rating: 4.3,
    image_url: 'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?w=400&h=300&fit=crop',
    availability: true,
    stock: 50,
    brand: 'Amazon'
  },
  {
    id: '17',
    name: 'Google Nest Hub',
    description: 'Google Nest Hub (2nd Gen) smart display with 7" touchscreen, Google Assistant, sleep sensing, and smart home control hub',
    price: 99,
    category: 'Smart Home',
    rating: 4.5,
    image_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&auto=format',
    availability: true,
    stock: 35,
    brand: 'Google',
    discount: 15
  },

  // Wearables
  {
    id: '18',
    name: 'Apple Watch Series 9',
    description: 'Apple Watch Series 9 with S9 SiP chip, Double Tap gesture, advanced health monitoring, ECG, blood oxygen monitoring, and up to 18 hours battery life',
    price: 399,
    category: 'Wearables',
    rating: 4.7,
    image_url: 'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400&h=300&fit=crop&auto=format',
    availability: true,
    stock: 28,
    brand: 'Apple',
    discount: 10
  },
  {
    id: '19',
    name: 'Samsung Galaxy Watch 6',
    description: 'Comprehensive health tracking with Android integration',
    price: 329,
    category: 'Wearables',
    rating: 4.4,
    image_url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
    availability: true,
    stock: 15,
    brand: 'Samsung'
  },

  // More products to reach 100+
  {
    id: '20',
    name: 'MacBook Air M2',
    description: 'Lightweight laptop with M2 chip, perfect for students',
    price: 1199,
    category: 'Laptops',
    rating: 4.7,
    image_url: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop',
    availability: true,
    stock: 12,
    brand: 'Apple'
  },

  // Additional Laptops
  {
    id: '21',
    name: 'HP Spectre x360',
    description: '2-in-1 convertible laptop with Intel i7, 16GB RAM, 1TB SSD',
    price: 1399,
    category: 'Laptops',
    rating: 4.5,
    image_url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop',
    availability: true,
    stock: 9,
    brand: 'HP'
  },
  {
    id: '22',
    name: 'Lenovo ThinkPad X1 Carbon',
    description: 'Business laptop with Intel i7, 32GB RAM, 1TB SSD',
    price: 1899,
    category: 'Laptops',
    rating: 4.6,
    image_url: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=300&fit=crop',
    availability: true,
    stock: 7,
    brand: 'Lenovo'
  },
  {
    id: '23',
    name: 'Microsoft Surface Laptop 5',
    description: 'Premium laptop with Intel i7, 16GB RAM, 512GB SSD',
    price: 1299,
    category: 'Laptops',
    rating: 4.4,
    image_url: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop',
    availability: true,
    stock: 11,
    brand: 'Microsoft'
  },

  // Additional Smartphones
  {
    id: '24',
    name: 'iPhone 14 Pro Max',
    description: 'Previous generation iPhone with A16 Bionic chip, 256GB storage',
    price: 899,
    category: 'Smartphones',
    rating: 4.8,
    image_url: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop',
    availability: true,
    stock: 18,
    brand: 'Apple',
    discount: 12
  },
  {
    id: '25',
    name: 'OnePlus 11',
    description: 'Flagship Android phone with Snapdragon 8 Gen 2, 256GB storage',
    price: 699,
    category: 'Smartphones',
    rating: 4.5,
    image_url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop',
    availability: true,
    stock: 14,
    brand: 'OnePlus'
  },
  {
    id: '26',
    name: 'Xiaomi 13 Pro',
    description: 'High-performance smartphone with Leica cameras, 512GB storage',
    price: 799,
    category: 'Smartphones',
    rating: 4.4,
    image_url: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=300&fit=crop',
    availability: true,
    stock: 16,
    brand: 'Xiaomi'
  },

  // Additional Audio Products
  {
    id: '27',
    name: 'Sennheiser HD 660S2',
    description: 'Open-back audiophile headphones with exceptional sound quality',
    price: 599,
    category: 'Audio',
    rating: 4.7,
    image_url: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop',
    availability: true,
    stock: 12,
    brand: 'Sennheiser'
  },
  {
    id: '28',
    name: 'Audio-Technica ATH-M50xBT2',
    description: 'Professional wireless headphones with studio-quality sound',
    price: 199,
    category: 'Audio',
    rating: 4.5,
    image_url: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=300&fit=crop',
    availability: true,
    stock: 25,
    brand: 'Audio-Technica'
  },
  {
    id: '29',
    name: 'Beats Studio3 Wireless',
    description: 'Noise-cancelling wireless headphones with Apple W1 chip',
    price: 349,
    category: 'Audio',
    rating: 4.3,
    image_url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
    availability: true,
    stock: 20,
    brand: 'Beats'
  },

  // Additional Tablets
  {
    id: '30',
    name: 'iPad Air 5th Gen',
    description: 'iPad Air with M1 chip, 256GB, 10.9-inch Liquid Retina display',
    price: 749,
    category: 'Tablets',
    rating: 4.6,
    image_url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop',
    availability: true,
    stock: 15,
    brand: 'Apple'
  },
  {
    id: '31',
    name: 'Microsoft Surface Pro 9',
    description: '2-in-1 tablet with Intel i7, 16GB RAM, 512GB SSD',
    price: 1299,
    category: 'Tablets',
    rating: 4.4,
    image_url: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=300&fit=crop',
    availability: true,
    stock: 8,
    brand: 'Microsoft'
  },

  // Additional Cameras
  {
    id: '32',
    name: 'Nikon Z9',
    description: 'Professional mirrorless camera with 45.7MP sensor and 8K video',
    price: 5499,
    category: 'Cameras',
    rating: 4.9,
    image_url: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop',
    availability: true,
    stock: 3,
    brand: 'Nikon'
  },
  {
    id: '33',
    name: 'Fujifilm X-T5',
    description: 'APS-C mirrorless camera with 40.2MP sensor and film simulations',
    price: 1699,
    category: 'Cameras',
    rating: 4.7,
    image_url: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop',
    availability: true,
    stock: 7,
    brand: 'Fujifilm'
  },

  // Additional Gaming Products
  {
    id: '34',
    name: 'Nintendo Switch OLED',
    description: 'Portable gaming console with 7-inch OLED screen',
    price: 349,
    category: 'Gaming',
    rating: 4.6,
    image_url: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=400&h=300&fit=crop',
    availability: true,
    stock: 12,
    brand: 'Nintendo'
  },
  {
    id: '35',
    name: 'Steam Deck',
    description: 'Handheld gaming PC with SteamOS and 512GB storage',
    price: 649,
    category: 'Gaming',
    rating: 4.5,
    image_url: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=400&h=300&fit=crop',
    availability: true,
    stock: 6,
    brand: 'Valve'
  },
  {
    id: '36',
    name: 'Razer DeathAdder V3',
    description: 'Ergonomic gaming mouse with 30K DPI sensor',
    price: 99,
    category: 'Gaming',
    rating: 4.4,
    image_url: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=300&fit=crop',
    availability: true,
    stock: 30,
    brand: 'Razer'
  },
  {
    id: '37',
    name: 'Corsair K95 RGB Platinum',
    description: 'Mechanical gaming keyboard with Cherry MX switches',
    price: 199,
    category: 'Gaming',
    rating: 4.6,
    image_url: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop',
    availability: true,
    stock: 18,
    brand: 'Corsair'
  },

  // Additional Smart Home Products
  {
    id: '38',
    name: 'Philips Hue Starter Kit',
    description: 'Smart LED bulbs with color changing and app control',
    price: 199,
    category: 'Smart Home',
    rating: 4.5,
    image_url: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
    availability: true,
    stock: 22,
    brand: 'Philips'
  },
  {
    id: '39',
    name: 'Ring Video Doorbell Pro 2',
    description: 'Smart doorbell with 1536p HD video and advanced motion detection',
    price: 249,
    category: 'Smart Home',
    rating: 4.3,
    image_url: 'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?w=400&h=300&fit=crop',
    availability: true,
    stock: 15,
    brand: 'Ring'
  },
  {
    id: '40',
    name: 'Nest Thermostat',
    description: 'Smart thermostat with energy-saving features and remote control',
    price: 129,
    category: 'Smart Home',
    rating: 4.4,
    image_url: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
    availability: true,
    stock: 28,
    brand: 'Google'
  },

  // Additional Wearables
  {
    id: '41',
    name: 'Fitbit Charge 5',
    description: 'Advanced fitness tracker with GPS and health monitoring',
    price: 179,
    category: 'Wearables',
    rating: 4.2,
    image_url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
    availability: true,
    stock: 25,
    brand: 'Fitbit'
  },
  {
    id: '42',
    name: 'Garmin Forerunner 955',
    description: 'GPS running watch with advanced training metrics',
    price: 499,
    category: 'Wearables',
    rating: 4.7,
    image_url: 'https://images.unsplash.com/photo-1579586337278-3f436f25d4c8?w=400&h=300&fit=crop',
    availability: true,
    stock: 12,
    brand: 'Garmin'
  },

  // More Laptops
  {
    id: '43',
    name: 'Acer Predator Helios 300',
    description: 'Gaming laptop with RTX 4060, Intel i7, 16GB RAM',
    price: 1399,
    category: 'Laptops',
    rating: 4.3,
    image_url: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop',
    availability: true,
    stock: 8,
    brand: 'Acer'
  },
  {
    id: '44',
    name: 'MSI Creator Z16P',
    description: 'Content creation laptop with RTX 4070, 32GB RAM, 4K display',
    price: 2299,
    category: 'Laptops',
    rating: 4.5,
    image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop',
    availability: true,
    stock: 5,
    brand: 'MSI'
  },

  // More Smartphones
  {
    id: '45',
    name: 'Nothing Phone (2)',
    description: 'Unique transparent design smartphone with Snapdragon 8+ Gen 1',
    price: 599,
    category: 'Smartphones',
    rating: 4.2,
    image_url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop',
    availability: true,
    stock: 20,
    brand: 'Nothing'
  },
  {
    id: '46',
    name: 'iPhone 13 Mini',
    description: 'Compact iPhone with A15 Bionic chip, 128GB storage',
    price: 629,
    category: 'Smartphones',
    rating: 4.6,
    image_url: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop',
    availability: true,
    stock: 15,
    brand: 'Apple',
    discount: 20
  },

  // More Audio Products
  {
    id: '47',
    name: 'JBL Charge 5',
    description: 'Portable Bluetooth speaker with powerbank function',
    price: 179,
    category: 'Audio',
    rating: 4.4,
    image_url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
    availability: true,
    stock: 35,
    brand: 'JBL'
  },
  {
    id: '48',
    name: 'Shure SM7B',
    description: 'Professional dynamic microphone for broadcasting and recording',
    price: 399,
    category: 'Audio',
    rating: 4.8,
    image_url: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop',
    availability: true,
    stock: 10,
    brand: 'Shure'
  },
  {
    id: '49',
    name: 'Marshall Acton III',
    description: 'Compact wireless speaker with classic Marshall design',
    price: 279,
    category: 'Audio',
    rating: 4.3,
    image_url: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=300&fit=crop',
    availability: true,
    stock: 18,
    brand: 'Marshall'
  },

  // More Gaming Products
  {
    id: '50',
    name: 'ASUS ROG Strix RTX 4080',
    description: 'High-end graphics card for 4K gaming and content creation',
    price: 1199,
    category: 'Gaming',
    rating: 4.7,
    image_url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
    availability: true,
    stock: 4,
    brand: 'ASUS'
  },
  {
    id: '51',
    name: 'SteelSeries Arctis 7P',
    description: 'Wireless gaming headset with lossless 2.4GHz connection',
    price: 149,
    category: 'Gaming',
    rating: 4.5,
    image_url: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=300&fit=crop',
    availability: true,
    stock: 22,
    brand: 'SteelSeries'
  },

  // More Smart Home
  {
    id: '52',
    name: 'Arlo Pro 4',
    description: 'Wireless security camera with 2K video and color night vision',
    price: 199,
    category: 'Smart Home',
    rating: 4.2,
    image_url: 'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?w=400&h=300&fit=crop',
    availability: true,
    stock: 16,
    brand: 'Arlo'
  },
  {
    id: '53',
    name: 'Sonos One SL',
    description: 'Compact smart speaker with rich, room-filling sound',
    price: 179,
    category: 'Smart Home',
    rating: 4.4,
    image_url: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
    availability: true,
    stock: 24,
    brand: 'Sonos'
  },

  // More Tablets
  {
    id: '54',
    name: 'Amazon Fire HD 11',
    description: '11-inch tablet with Alexa, perfect for entertainment',
    price: 229,
    category: 'Tablets',
    rating: 4.1,
    image_url: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=300&fit=crop',
    availability: true,
    stock: 30,
    brand: 'Amazon'
  },
  {
    id: '55',
    name: 'Lenovo Tab P11 Pro',
    description: 'Android tablet with OLED display and productivity features',
    price: 499,
    category: 'Tablets',
    rating: 4.3,
    image_url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop',
    availability: true,
    stock: 12,
    brand: 'Lenovo'
  }
];

export const categories = [
  'All',
  'Laptops',
  'Smartphones',
  'Audio',
  'Tablets',
  'Cameras',
  'Gaming',
  'Smart Home',
  'Wearables'
];

export const brands = [
  'All',
  'Apple',
  'Samsung',
  'Sony',
  'Dell',
  'ASUS',
  'Google',
  'Canon',
  'Microsoft',
  'Amazon',
  'Bose',
  'HP',
  'Lenovo',
  'OnePlus',
  'Xiaomi',
  'Sennheiser',
  'Audio-Technica',
  'Beats',
  'Nikon',
  'Fujifilm',
  'Nintendo',
  'Valve',
  'Razer',
  'Corsair',
  'Philips',
  'Ring',
  'Fitbit',
  'Garmin',
  'Acer',
  'MSI',
  'Nothing',
  'JBL',
  'Shure',
  'Marshall',
  'SteelSeries',
  'Arlo',
  'Sonos'
];
