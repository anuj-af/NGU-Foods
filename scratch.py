import re

with open("src/components/pages/HomePage.tsx", "r") as f:
    content = f.read()

# 1. Headings
content = content.replace("Our Delicious Range Of Products", "NGU Foods Premium Collection")
content = content.replace("Discover our most popular snacks that customers love. Quality and taste guaranteed in every bite!", "Explore our finest snacks made with top-quality ingredients.")
content = content.replace("Why Everyone’s Feasting on Yummfeast", "Why Choose NGU Foods?")
content = content.replace("Because your snack time deserves more than just crunch — it\n                deserves personality. Here's why you’ll love munching with us:", "We bring you snacks that combine incredible taste with uncompromising quality.")
content = content.replace("Discover the Yummfeast Brochure", "Discover the NGU Foods Brochure")
content = content.replace("@yummfeast.in", "@ngufoods")

# 2. Features (Lines ~452+)
# Let's replace the features array content. 
features_str = """  const features = [
    {
      icon: Sparkles,
      title: "Incredible Variety",
      description: "From classic to exotic, we offer an incredible variety of flavors to satisfy every craving.",
      image: "/placeholder.svg",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
    },
    {
      icon: Heart,
      title: "Great for Sharing",
      description: "Our snacks bring people together, creating precious moments of joy and connection with loved ones.",
      image: "/placeholder.svg",
      color: "from-pink-500 to-purple-500",
      bgColor: "bg-gradient-to-br from-pink-50 to-purple-50",
    },
    {
      icon: Factory,
      title: "Premium Quality",
      description: "State-of-the-art facilities and rigorous quality control ensure every pack meets our highest standards.",
      image: "/placeholder.svg",
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
    },
  ];"""
content = re.sub(r"const features = \[\s*\{\s*icon: Sparkles.*?\}\s*,\s*\];", features_str, content, flags=re.DOTALL)

# Also there's another `const features = [` on line 197 which is not used locally in HomePage, wait, it IS used by FeatureCard... Wait, the one around 452 overrides it locally. Let's just replace both or remove the second one.
content = re.sub(r'const features = \[\s*\{\s*icon: Sparkles,[\s\S]*?bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",\s*\},\s*\];', features_str, content)

# 3. Comment out News section (line 726 to 849)
# Search for `<section className="py-24 bg-red-600 relative overflow-hidden">` until `/>\n      </div>\n\n      {/* Fun Facts Section */}`
news_pattern = re.compile(r'(<section className="py-24 bg-red-600 relative overflow-hidden">.*?</section>\s*<NewsModal[\s\S]*?/>)', re.DOTALL)
content = news_pattern.sub(r'{/* \1 */}', content)

# 4. Fun facts stats (around line 978)
stat1 = r'(<Counter target=\{)200(\} duration=\{2\.5\} suffix="\+" />\s*</div>\s*<p className="relative z-10">)Regional Snack Varieties(</p>)'
content = re.sub(stat1, r'\g<1>40\g<2>Product Shapes\g<3>', content)

stat2 = r'(<Counter target=\{)1000000000(\} duration=\{2\.5\} suffix="\+B" />\s*</div>\s*<p className="relative z-10">)Snack Packets Monthly(</p>)'
content = re.sub(stat2, r'\g<1>70000\g<2>KG Daily Production Capacity\g<3>', content)
# change suffix="+B" to suffix="+"
content = content.replace('suffix="+B"', 'suffix="+"')

stat3 = r'(\$\s*<Counter target=\{)400000000000(\} duration=\{2\.5\} suffix="\+" />\s*</div>\s*<p className="relative z-10">)Global Snack Market(</p>)'
content = re.sub(r'\$\s*<Counter target=\{400000000000\} duration=\{2\.5\} suffix="\+" />\s*</div>\s*<p className="relative z-10">Global Snack Market</p>', r'Since <Counter target={1996} duration={2.5} suffix="" /></div><p className="relative z-10">28+ Years</p>', content)

# 5. Comment out roller coaster and chips graphic
content = content.replace('<img\n              src="/images/rollerCoaster4.png"', '{/*<img\n              src="/images/rollerCoaster4.png"')
content = content.replace('alt="Roller Coaster Image"\n              className="hidden md:block absolute -top-32 right-16 h-80 w-80 z-20"\n            />', 'alt="Roller Coaster Image"\n              className="hidden md:block absolute -top-32 right-16 h-80 w-80 z-20"\n            />*/}')

content = content.replace('<img\n              src="/images/packet.png"\n              alt="Chips Packet"\n              className="hidden md:block absolute -bottom-32 left-16 h-64 w-64 z-20"\n            />', '{/*<img\n              src="/images/packet.png"\n              alt="Chips Packet"\n              className="hidden md:block absolute -bottom-32 left-16 h-64 w-64 z-20"\n            />*/}')

content = content.replace('<img\n            src="/images/twister.png"\n            alt="Floating chip"\n            className="w-full h-full object-contain drop-shadow-lg"\n          />', '{/*<img\n            src="/images/twister.png"\n            alt="Floating chip"\n            className="w-full h-full object-contain drop-shadow-lg"\n          />*/}')
content = content.replace('<img\n            src="/images/kurkure.png"\n            alt="Floating chip"\n            className="w-full h-full object-contain drop-shadow-lg"\n          />', '{/*<img\n            src="/images/kurkure.png"\n            alt="Floating chip"\n            className="w-full h-full object-contain drop-shadow-lg"\n          />*/}')

# 6. Instagram grid - placeholder image
content = content.replace('src={post.img || "/placeholder.svg"}', 'src={"/placeholder.svg"}')

# 7. Attach NGU catalogue to download brochure button
content = content.replace('href="https://drive.google.com/uc?export=download&id=16aC48pcIz_hk99m8BXcBY9xRSoYEAtea"', 'href="/NGU-catalogue.pdf"')

with open("src/components/pages/HomePage.tsx", "w") as f:
    f.write(content)

