import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Factory,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import pprcImage from "@/assets/products/pprc-v2.jpg.asset.json";
import pprcSpecsImage from "@/assets/products/pprc-specs-v2.jpg.asset.json";
import hdpeImage from "@/assets/products/hdpe-v2.jpg.asset.json";
import hdpeSpecsImage from "@/assets/products/hdpe-specs-v2.jpg.asset.json";
import upvcImage from "@/assets/products/upvc-v2.jpg.asset.json";
import upvcSpecsImage from "@/assets/products/upvc-specs-v2.jpg.asset.json";
import corrugatedImage from "@/assets/products/corrugated-v2.jpg.asset.json";
import corrugatedSizesImage from "@/assets/products/corrugated-sizes-v2.jpg.asset.json";
import drainageImage from "@/assets/products/drainage-v2.jpg.asset.json";
import drainageSpecsImage from "@/assets/products/drainage-specs-v2.jpg.asset.json";
import cpvcImage from "@/assets/products/cpvc-v2.jpg.asset.json";

type Product = {
  name: string;
  description: string;
  image: string;
  details: string[];
};

type ProductCategory = {
  name: string;
  summary: string;
  image: string;
  products: Product[];
};

const slides = [
  {
    image: "/lovable-uploads/57419b09-c4f6-4586-b909-3fe62b90c14c.png",
    title: "Al-Ghofran Plastic Factory",
    subtitle: "Leading manufacturer of plastic pipes and fittings since 1996",
  },
  {
    image: "/lovable-uploads/bf94f533-f033-4e25-b305-e6dc8dbcf76e.png",
    title: "PPRC Pipes",
    subtitle: "Hygienic piping for domestic hot and cold water networks",
  },
  {
    image: "/lovable-uploads/ad453382-c59d-4165-8d3e-643eedd17d11.png",
    title: "HDPE Pipes",
    subtitle: "Durable piping for water, sewage, gas, and irrigation networks",
  },
  {
    image: "/lovable-uploads/8efdc249-21bb-4064-a756-3bce47b5e61c.png",
    title: "Electrical Conduits",
    subtitle: "Professional protection for electrical and telecommunications networks",
  },
  {
    image: "/lovable-uploads/fe48dce8-ddca-4737-a7f7-58db8bc3571e.png",
    title: "Drainage & Duct Systems",
    subtitle: "Complete drainage, waste, vent, and cable protection solutions",
  },
];

const categories: ProductCategory[] = [
  {
    name: "PPRC Pipes",
    summary: "Polypropylene random copolymer pipes for hot and cold water systems.",
    image: pprcImage.url,
    products: [
      {
        name: "PPRC PN 10 Pipe",
        description: "A hygienic, non-toxic pipe for domestic cold-water installations and low-pressure networks.",
        image: pprcImage.url,
        details: ["DIN 8077 / DIN 8078", "Socket-weld connection", "Long service life"],
      },
      {
        name: "PPRC PN 16 Pipe",
        description: "A dependable pressure pipe for domestic water distribution, hospitals, and specialist networks.",
        image: pprcSpecsImage.url,
        details: ["Low pressure loss", "Corrosion resistant", "Available in multiple diameters"],
      },
      {
        name: "PPRC PN 20 & PN 25 Pipe",
        description: "Heavy-duty PPRC piping designed for hot-water lines, central heating, and industrial applications.",
        image: pprcImage.url,
        details: ["Hot and cold water", "Frost resistant", "Thermal-weld fittings"],
      },
    ],
  },
  {
    name: "HDPE Pipes",
    summary: "High-density polyethylene pipes for water, sewage, gas, and irrigation.",
    image: hdpeImage.url,
    products: [
      {
        name: "HDPE Water Pipe",
        description: "Flexible black polyethylene pressure pipe for drinking-water distribution and irrigation networks.",
        image: hdpeImage.url,
        details: ["DIN 8074 / DIN 8075", "High impact resistance", "Corrosion resistant"],
      },
      {
        name: "HDPE Sewage Pipe",
        description: "Durable piping for municipal and industrial sewage lines with excellent chemical resistance.",
        image: hdpeSpecsImage.url,
        details: ["Chemical resistant", "Flexible installation", "Multiple pressure ratings"],
      },
      {
        name: "Colored HDPE Utility Pipe",
        description: "Color-coded HDPE pipe for gas, telecom, water, and specialist utility networks.",
        image: hdpeImage.url,
        details: ["Easy network identification", "Long coil lengths", "Outdoor durability"],
      },
    ],
  },
  {
    name: "UPVC Pipes",
    summary: "Rigid UPVC pipes for electrical, telecommunications, and water applications.",
    image: upvcImage.url,
    products: [
      {
        name: "UPVC Electrical Conduit",
        description: "Rigid conduit made to protect electrical wiring in residential, commercial, and industrial projects.",
        image: upvcImage.url,
        details: ["BS 6009 / BS 4607", "Flame retardant", "Light, medium, and heavy grades"],
      },
      {
        name: "UPVC Telecom Conduit",
        description: "Smooth, insulating conduit for telecommunications and structured cabling networks.",
        image: upvcSpecsImage.url,
        details: ["Electrical insulation", "Easy cable pulling", "Multiple wall thicknesses"],
      },
      {
        name: "UPVC Water Pipe",
        description: "Rigid, corrosion-resistant pipe for cold-water supply and pressure applications.",
        image: upvcImage.url,
        details: ["ASTM D-1785 / 1786", "Low maintenance", "Consistent internal bore"],
      },
    ],
  },
  {
    name: "CPVC Pipes",
    summary: "Chlorinated PVC pipes for hot and cold water installations.",
    image: cpvcImage.url,
    products: [
      {
        name: "CPVC Hot Water Pipe",
        description: "Heat-resistant piping for domestic hot-water distribution and commercial plumbing.",
        image: cpvcImage.url,
        details: ["ASTM F-441", "Hot and cold water", "Chemical resistant"],
      },
      {
        name: "CPVC Industrial Pipe",
        description: "A robust CPVC solution for demanding industrial processes and corrosive fluid lines.",
        image: drainageImage.url,
        details: ["High temperature performance", "Low thermal conductivity", "Long service life"],
      },
    ],
  },
  {
    name: "Corrugated Ducts",
    summary: "Flexible corrugated ducts for electrical, telecom, and cable protection.",
    image: corrugatedImage.url,
    products: [
      {
        name: "Electrical Corrugated Duct",
        description: "Flexible duct that shields power cables from impact, moisture, and difficult underground conditions.",
        image: corrugatedImage.url,
        details: ["IS 14930 compliant", "Flexible routing", "Impact resistant"],
      },
      {
        name: "Telecommunications Duct",
        description: "Color-coded duct for protecting data and telecommunications cables across infrastructure networks.",
        image: corrugatedSizesImage.url,
        details: ["8–50 mm sizes", "Weather resistant", "Easy installation"],
      },
      {
        name: "Underground Cable Duct",
        description: "Durable corrugated protection for underground cable runs and concealed utility networks.",
        image: corrugatedImage.url,
        details: ["Long continuous lengths", "Abrasion resistant", "Multiple colors available"],
      },
    ],
  },
  {
    name: "Drainage Systems",
    summary: "Complete soil, waste, drainage, and vent piping solutions.",
    image: drainageImage.url,
    products: [
      {
        name: "Drain, Waste & Vent Pipe",
        description: "A complete DWV solution for carrying wastewater and safely venting residential and commercial systems.",
        image: drainageImage.url,
        details: ["ASTM D-2665", "40–160 mm metric range", "Smooth internal surface"],
      },
      {
        name: "UPVC Drainage Pipe",
        description: "Rigid drainage pipe for soil, waste discharge, and above-ground or underground installations.",
        image: drainageSpecsImage.url,
        details: ["DIN 8061 / 8062", "BS 3505", "Multiple wall thicknesses"],
      },
      {
        name: "Vent Pipe",
        description: "Lightweight vent piping designed to maintain airflow and pressure balance in drainage systems.",
        image: drainageImage.url,
        details: ["Lightweight handling", "Secure jointing", "Low maintenance"],
      },
    ],
  },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((previous) => (previous + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  const category = selectedCategory === null ? null : categories[selectedCategory];
  const product = category?.products[selectedProduct];

  const openCategory = (index: number) => {
    setSelectedCategory(index);
    setSelectedProduct(0);
  };

  const changeProduct = (direction: number) => {
    if (!category) return;
    setSelectedProduct((previous) =>
      (previous + direction + category.products.length) % category.products.length,
    );
  };

  useEffect(() => {
    if (!category) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") changeProduct(1);
      if (event.key === "ArrowLeft") changeProduct(-1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [category]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-primary-foreground/15 bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <a href="#home" className="flex items-center gap-3" aria-label="Al-Ghofran Plastic Factory home">
            <span className="grid h-11 w-14 place-items-center rounded-md bg-primary-foreground text-xl font-bold text-primary">GP</span>
            <span>
              <span className="block text-base font-bold sm:text-xl">AL-Ghofran Plastic Factory</span>
              <span className="block text-sm opacity-85" lang="ar">مصنع الغفران للبلاستيك</span>
            </span>
          </a>
          <nav className="hidden gap-6 md:flex" aria-label="Main navigation">
            {[["Home", "home"], ["About", "about"], ["Products", "products"], ["Contact", "contact"]].map(([label, id]) => (
              <a key={id} href={`#${id}`} className="text-sm font-medium transition-opacity hover:opacity-70">{label}</a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="relative h-[70vh] min-h-[520px] max-h-[700px] overflow-hidden bg-foreground">
          {slides.map((slide, index) => (
            <div key={slide.title} className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? "opacity-100" : "pointer-events-none opacity-0"}`} aria-hidden={index !== currentSlide}>
              <img src={slide.image} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 flex items-end bg-foreground/55">
                <div className="container mx-auto px-6 pb-24 text-primary-foreground">
                  <p className="mb-3 text-sm font-semibold uppercase">Manufacturing in Jordan since 1996</p>
                  <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-6xl">{slide.title}</h1>
                  <p className="mt-4 max-w-2xl text-lg opacity-90 sm:text-2xl">{slide.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
          <Button aria-label="Previous slide" variant="secondary" size="icon" onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)} className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full">
            <ChevronLeft />
          </Button>
          <Button aria-label="Next slide" variant="secondary" size="icon" onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)} className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full">
            <ChevronRight />
          </Button>
          <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 gap-2" aria-label="Choose slide">
            {slides.map((slide, index) => (
              <Button key={slide.title} variant={index === currentSlide ? "secondary" : "outline"} size="icon" aria-label={`Show slide ${index + 1}`} onClick={() => setCurrentSlide(index)} className="h-2 w-8 rounded-full p-0" />
            ))}
          </div>
        </section>

        <section id="about" className="bg-muted py-20">
          <div className="container mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[1.3fr_0.7fr] md:items-center">
            <div>
              <p className="mb-3 font-semibold text-primary">Built for demanding networks</p>
              <h2 className="text-3xl font-bold sm:text-4xl">About Al-Ghofran Plastic Factory</h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">Established in 1996, Al-Ghofran Plastic Factory is one of Jordan’s leading manufacturers of HDPE, MDPE, LDPE, UPVC, CPVC, and PPRC plastic pipes and fittings.</p>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">Our production facilities use modern extrusion and injection machinery under the supervision of qualified engineers, serving industrial and construction sectors with reliable products.</p>
            </div>
            <div className="border-l-4 border-primary bg-background p-8 shadow-sm">
              <Factory className="mb-5 h-10 w-10 text-primary" />
              <p className="text-3xl font-bold">ISO 9001:2015</p>
              <p className="mt-2 text-muted-foreground">Certified quality management supporting consistent products and dependable service.</p>
            </div>
          </div>
        </section>

        <section id="products" className="py-20">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="mb-3 font-semibold text-primary">Product range</p>
                <h2 className="text-3xl font-bold sm:text-4xl">Pipes for every application</h2>
              </div>
              <p className="max-w-xl text-muted-foreground">Select a category to explore the available pipe types, product photography, applications, and standards.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((item, index) => (
                <article key={item.name} className="group overflow-hidden rounded-md border bg-card shadow-sm transition-shadow hover:shadow-lg">
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img src={item.image} alt={`${item.name} manufactured by Al-Ghofran`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold">{item.name}</h3>
                    <p className="mt-2 min-h-12 text-muted-foreground">{item.summary}</p>
                    <Button onClick={() => openCategory(index)} className="mt-6 w-full justify-between">
                      View {item.products.length} products <ArrowRight />
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-foreground py-20 text-background">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">Contact Us</h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <ContactItem icon={<Mail />} title="Email" lines={["info@alghofran-plastic.com", "Ibrahim3212@yahoo.com"]} />
              <ContactItem icon={<Phone />} title="Phone & Fax" lines={["Tel: +962 6 4029554", "Fax: +962 6 4029556"]} />
              <ContactItem icon={<MapPin />} title="Address" lines={["Sahab – King Abdullah II Industrial Estate", "Street 8 – Building 321"]} />
              <ContactItem icon={<Factory />} title="Website" lines={["www.ghofranplasticfactory.com"]} />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-background/15 bg-foreground py-7 text-center text-sm text-background/70">
        <p>© 2026 Al-Ghofran Plastic Factory. All rights reserved.</p>
      </footer>

      <Dialog open={selectedCategory !== null} onOpenChange={(open) => !open && setSelectedCategory(null)}>
        {category && product && (
          <DialogContent className="max-h-[92vh] max-w-6xl overflow-y-auto p-0">
            <DialogHeader className="border-b px-6 py-5 pr-14">
              <DialogTitle className="text-2xl">{category.name}</DialogTitle>
              <DialogDescription>{category.summary}</DialogDescription>
            </DialogHeader>
            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
              <div className="relative flex min-h-[320px] items-center justify-center bg-muted p-4 sm:min-h-[480px]">
                <img src={product.image} alt={product.name} className="max-h-[520px] w-full object-contain" />
                <Button aria-label="Previous product" variant="secondary" size="icon" onClick={() => changeProduct(-1)} className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full shadow-md"><ChevronLeft /></Button>
                <Button aria-label="Next product" variant="secondary" size="icon" onClick={() => changeProduct(1)} className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full shadow-md"><ChevronRight /></Button>
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-10">
                <p className="mb-3 text-sm font-semibold text-primary">Product {selectedProduct + 1} of {category.products.length}</p>
                <h3 className="text-3xl font-bold">{product.name}</h3>
                <p className="mt-4 text-lg leading-7 text-muted-foreground">{product.description}</p>
                <ul className="mt-6 space-y-3">
                  {product.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-primary" />{detail}</li>
                  ))}
                </ul>
                <div className="mt-8 grid grid-cols-3 gap-3">
                  {category.products.map((item, index) => (
                    <Button key={item.name} variant="outline" onClick={() => setSelectedProduct(index)} aria-label={`Show ${item.name}`} aria-pressed={index === selectedProduct} className={`h-auto aspect-[4/3] overflow-hidden p-1 ${index === selectedProduct ? "ring-2 ring-primary" : ""}`}>
                      <img src={item.image} alt="" className="h-full w-full object-cover" />
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
};

const ContactItem = ({ icon, title, lines }: { icon: React.ReactNode; title: string; lines: string[] }) => (
  <div className="text-center">
    <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground">{icon}</div>
    <h3 className="mb-2 text-lg font-bold">{title}</h3>
    {lines.map((line) => <p key={line} className="text-sm leading-6 text-background/70">{line}</p>)}
  </div>
);

export default Index;