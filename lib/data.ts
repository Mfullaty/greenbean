import {
  BookOpen,
  Heart,
  Briefcase,
  Salad,
  Brain,
  TrendingUp,
  Leaf,
  Sparkles,
  Target,
  type LucideIcon,
} from "lucide-react";

// ==================== NAVIGATION ====================
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

// ==================== FEATURES ====================
export const features = [
  {
    icon: Leaf,
    title: "Wellness First",
    description:
      "Science-backed resources to build sustainable health habits and nourish your body from the inside out.",
  },
  {
    icon: Sparkles,
    title: "Instant Access",
    description:
      "All digital products are available for instant download, start transforming your life the moment you purchase.",
  },
  {
    icon: Target,
    title: "Actionable & Practical",
    description:
      "No fluff. Every planner, guide, and course is designed with real, step-by-step strategies you can implement today.",
  },
  {
    icon: TrendingUp,
    title: "Income Growth",
    description:
      "Build passive income streams and launch your own digital product business with our proven templates and courses.",
  },
];

// ==================== PRODUCT CATEGORIES ====================
export interface ProductCategory {
  id: string;
  icon: LucideIcon;
  title: string;
  emoji: string;
  description: string;
  color: string;
}

export const productCategories: ProductCategory[] = [
  {
    id: "health",
    icon: Heart,
    title: "Health & Nutrition",
    emoji: "🌿",
    description:
      "Meal planners, healthy recipe ebooks, weight management guides, and gut health programs.",
    color: "from-green-500 to-emerald-600",
  },
  {
    id: "wellbeing",
    icon: Brain,
    title: "Wellbeing & Lifestyle",
    emoji: "🧘",
    description:
      "Habit trackers, self-care journals, mental wellness workbooks, and stress management courses.",
    color: "from-teal-500 to-cyan-600",
  },
  {
    id: "business",
    icon: Briefcase,
    title: "Business & Productivity",
    emoji: "💼",
    description:
      "Business plan templates, social media planners, passive income guides, and freelancing starter kits.",
    color: "from-emerald-500 to-green-600",
  },
];

// ==================== PRODUCTS ====================
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: "health" | "wellbeing" | "business" | "courses";
  icon: LucideIcon;
  badge?: string;
  includes?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "30 Healthy Recipes Ebook",
    price: 9,
    description: "Quick, nourishing recipes for busy lifestyles.",
    category: "health",
    icon: Salad,
  },
  {
    id: 2,
    name: "21-Day Weight Management Guide",
    price: 15,
    description: "A comprehensive program with meal plan, tracker, and lifestyle tips.",
    category: "health",
    icon: Heart,
    includes: "Meal plan, tracker, lifestyle tips",
  },
  {
    id: 3,
    name: "Gut Health Reset Plan",
    price: 19,
    description: "14-day reset with food list, symptom tracker, and guided plan.",
    category: "health",
    icon: Leaf,
    includes: "14-day reset, food list, symptom tracker",
    badge: "Popular",
  },
  {
    id: 4,
    name: "Ultimate Wellness Planner",
    price: 12,
    description: "Printable & digital wellness planner to organize your healthy lifestyle.",
    category: "wellbeing",
    icon: BookOpen,
  },
  {
    id: 5,
    name: "Self-Care Journal",
    price: 8,
    description: "A guided journal for daily self-care practices and reflection.",
    category: "wellbeing",
    icon: Sparkles,
  },
  {
    id: 6,
    name: "21-Day Habit Tracker Bundle",
    price: 10,
    description: "Build lasting habits with our structured 21-day tracking system.",
    category: "wellbeing",
    icon: Target,
  },
  {
    id: 7,
    name: "Stress Management Workbook",
    price: 14,
    description: "Practical exercises and techniques for managing daily stress effectively.",
    category: "wellbeing",
    icon: Brain,
    badge: "Best Seller",
  },
  {
    id: 8,
    name: "Passive Income Starter Kit",
    price: 25,
    description: "Everything you need to launch your first passive income stream.",
    category: "business",
    icon: TrendingUp,
    badge: "Popular",
  },
  {
    id: 9,
    name: "Business Plan Template Bundle",
    price: 18,
    description: "Professional business plan templates for launching your venture.",
    category: "business",
    icon: Briefcase,
  },
  {
    id: 10,
    name: "Social Media Content Planner",
    price: 12,
    description: "Plan and schedule your social media content like a pro.",
    category: "business",
    icon: BookOpen,
  },
  {
    id: 11,
    name: "Freelance Starter Kit",
    price: 20,
    description: "Templates, guides, and tools to kickstart your freelancing career.",
    category: "business",
    icon: Sparkles,
  },
  {
    id: 12,
    name: "Build Your Wellness Routine Course",
    price: 39,
    description: "A comprehensive self-paced course to build your perfect wellness routine.",
    category: "courses",
    icon: Heart,
    badge: "Course",
  },
  {
    id: 13,
    name: "Start a Digital Product Business Course",
    price: 59,
    description: "Step-by-step course for building and selling your own digital products.",
    category: "courses",
    icon: TrendingUp,
    badge: "Course",
  },
];

// ==================== TESTIMONIALS ====================
export interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Ada",
    location: "Nigeria",
    text: "GreenBean completely changed how I manage my health and productivity. The wellness planner keeps me consistent.",
    rating: 5,
  },
  {
    name: "Tolu",
    location: "UK",
    text: "The Passive Income Kit helped me launch my first digital product in 2 weeks!",
    rating: 5,
  },
  {
    name: "Miriam",
    location: "Canada",
    text: "Simple, practical, and life-changing resources. Highly recommended.",
    rating: 5,
  },
  {
    name: "Chiamaka",
    location: "Nigeria",
    text: "The recipes are easy and healthy, perfect for my busy schedule.",
    rating: 5,
  },
];

// ==================== FAQ ====================
export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "Are your products physical?",
    answer:
      "No, all our products are digital downloads. You can access them instantly from any device after purchase.",
  },
  {
    question: "Can I get a refund?",
    answer:
      "Due to the nature of digital products, refunds are not available. However, we stand behind the quality of every product we create.",
  },
  {
    question: "How do I access my purchase?",
    answer:
      "You will receive an instant download link after payment. Simply click the link and your product will be ready to use.",
  },
  {
    question: "Can I print the planners and journals?",
    answer:
      "Yes! Many of our planners and journals come in printable PDF formats designed for standard paper sizes.",
  },
  {
    question: "Do you offer bundle discounts?",
    answer:
      "Yes, we frequently offer bundle deals and seasonal promotions. Follow us on Instagram to stay updated on the latest offers.",
  },
];

// ==================== SERVICES ====================
export const services = [
  "Digital wellness tools",
  "Business growth resources",
  "Online self-paced courses",
  "Printable planners & trackers",
  "Educational ebooks",
];

// ==================== CONTACT INFO ====================
export const contactInfo = {
  email: "hellogreenbeanwellness@gmail.com",
  phones: ["+234 8055926243", "+234 8035540719"],
  hours: "Mon–Fri | 9 AM – 5 PM (WAT)",
  instagram: "https://www.instagram.com/yournutritionist8?igsh=Znd5NWwyNGt2bG8y",
  instagramHandle: "@yournutritionist8",
};
