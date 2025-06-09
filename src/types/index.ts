
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  rating: number;
  image_url: string;
  availability: boolean;
  stock?: number;
  brand?: string;
  discount?: number;
}

export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  products?: Product[];
  type?: 'text' | 'product-suggestion' | 'product-list';
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

export interface ChatContextType {
  messages: ChatMessage[];
  addMessage: (message: Omit<ChatMessage, 'id' | 'timestamp'>) => void;
  clearChat: () => void;
  isTyping: boolean;
  setIsTyping: (typing: boolean) => void;
  processUserMessage: (content: string) => Promise<void>;
}
