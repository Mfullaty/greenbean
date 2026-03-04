import { type Product } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const Icon = product.icon;

    return (
        <div className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 hover:border-primary/30">
            {/* Top gradient bar */}
            <div className="h-1 w-full bg-linear-to-r from-primary via-sage to-forest" />

            <div className="p-6">
                {/* Header with icon and badge */}
                <div className="flex items-start justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                        <Icon className="h-6 w-6" />
                    </div>
                    {product.badge && (
                        <Badge
                            variant="secondary"
                            className="text-xs font-medium bg-primary/10 text-primary border-primary/20 hover:bg-primary/10"
                        >
                            {product.badge}
                        </Badge>
                    )}
                </div>

                {/* Title */}
                <h3 className="font-heading text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {product.description}
                </p>

                {/* Includes (if any) */}
                {product.includes && (
                    <p className="text-xs text-muted-foreground mb-4 px-3 py-2 rounded-lg bg-accent/50">
                        <span className="font-medium text-foreground">Includes:</span> {product.includes}
                    </p>
                )}

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                    <p className="font-heading text-2xl font-bold text-primary">
                        ${product.price}
                    </p>
                    <a
                        href={`https://wa.me/2348035540719?text=${encodeURIComponent(
                            `Hi there,\n\nI am browsing your website and I saw this "${product.name}" listed in your shop's catalogue, I am messaging you to make an enquiry if this is still available, I am interested.\n\nThank you.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2 text-xs font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:shadow-md hover:brightness-110 active:scale-95"
                    >
                        Get Now
                    </a>
                </div>
            </div>
        </div>
    );
}
