/**
 * LucideIcon — Dynamic icon renderer using Lucide React
 * Pass iconName (string from content.ts) and it renders the correct icon.
 */
import {
  Scale,
  Handshake,
  MessageSquare,
  Link2,
  FolderOpen,
  UserPlus,
  ShieldCheck,
  Award,
  Clock,
  Lock,
  Users,
  Zap,
  BadgeDollarSign,
  FileCheck,
  Globe,
  Lightbulb,
  TrendingUp,
  Building2,
  Heart,
  Shield,
  FileText,
  Video,
  UserCheck,
  Briefcase,
  Landmark,
  Home,
  ShoppingCart,
  RefreshCw,
  CheckCircle,
  ArrowRight,
  Star,
  Quote,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Share2,
  PlayCircle,
  AtSign,
  type LucideProps,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Scale,
  Handshake,
  MessageSquare,
  Link2,
  FolderOpen,
  UserPlus,
  ShieldCheck,
  Award,
  Clock,
  Lock,
  Users,
  Zap,
  BadgeDollarSign,
  FileCheck,
  Globe,
  Lightbulb,
  TrendingUp,
  Building2,
  Heart,
  Shield,
  FileText,
  Video,
  UserCheck,
  Briefcase,
  Landmark,
  Home,
  ShoppingCart,
  RefreshCw,
  CheckCircle,
  ArrowRight,
  Star,
  Quote,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  // Social icon aliases
  LinkedIn: Share2,
  Twitter: AtSign,
  YouTube: PlayCircle,
  Share2,
  AtSign,
  PlayCircle,
};

interface LucideIconProps extends LucideProps {
  name: string;
}

export function LucideIcon({ name, ...props }: LucideIconProps) {
  const Icon = iconMap[name];
  if (!Icon) {
    // Fallback: render a circle placeholder if icon not found
    return <span className="w-5 h-5 rounded-full bg-primary/30 inline-block" />;
  }
  return <Icon {...props} />;
}

export default LucideIcon;
