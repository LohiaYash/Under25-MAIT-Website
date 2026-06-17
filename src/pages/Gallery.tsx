import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { useState } from "react";

const images = [
  { src: "https://drive.google.com/file/d/15QWlfIzwIsgxvxnSmsUMrJUJ7TXGmUZM/view?usp=share_link", alt: "Raga" }
  

];

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <Layout>
      <section className="py-24 px-6 min-h-screen">
        <div className="container mx-auto">
          <ScrollReveal>
            <h1 className="font-display text-4xl md:text-5xl font-black text-center glow-cyan text-primary mb-4 tracking-wider">
              GALLERY
            </h1>
            <p className="text-center text-muted-foreground font-body text-lg mb-16 max-w-xl mx-auto">
              Moments that define us
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {images.map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <motion.div
                  className="relative overflow-hidden rounded-lg cursor-pointer group"
                  whileHover={{ scale: 1.03, z: 20 }}
                  onClick={() => setSelected(i)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="font-display text-sm text-primary tracking-wider">{img.alt}</p>
                  </div>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 group-hover:glow-border-cyan rounded-lg transition-all duration-300" />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selected !== null && (
        <motion.div
          className="fixed inset-0 z-50 bg-background/90 backdrop-blur-md flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelected(null)}
        >
          <motion.img
            src={images[selected].src.replace("w=600&h=400", "w=1200&h=800")}
            alt={images[selected].alt}
            className="max-w-full max-h-[80vh] rounded-lg glow-border-cyan"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          />
        </motion.div>
      )}
    </Layout>
  );
};

export default Gallery;
