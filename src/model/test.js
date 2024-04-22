const data = [
    {
        title: "iPhone-X Case",
        price: 27,
        description:
            "Enhance your smartphone's look with this ultra-sleek mirror finish phone case. Designed to offer style with protection, the case features a reflective surface that adds a touch of elegance while keeping your device safe from scratches and impacts. Perfect for those who love a minimalist and modern aesthetic.",
        imageUrl: "https://i.imgur.com/yb9UQKL.jpeg",
        category: "Electronics",
    },
    {
        title: "Smartwatch with Display",
        price: 16,
        description:
            "Experience modern timekeeping with our high-tech smartwatch, featuring a vivid touch screen display, customizable watch faces, and a comfortable blue silicone strap. This smartwatch keeps you connected with notifications and fitness tracking while showcasing exceptional style and versatility.",
        imageUrl: "https://i.imgur.com/LGk9Jn2.jpeg",
        category: "Electronics",
    },
    {
        title: "Modern Leather Sofa",
        price: 53,
        description:
            "Enhance the elegance of your living space with our Sleek Modern Leather Sofa. Designed with a minimalist aesthetic, it features clean lines and a luxurious leather finish. The robust metal legs provide stability and support, while the plush cushions ensure comfort. Perfect for contemporary homes or office waiting areas, this sofa is a statement piece that combines style with practicality.",
        imageUrl: "https://i.imgur.com/Qphac99.jpeg",

        category: "Furniture",
    },
    {
        title: "Mid-Century Dining Table",
        price: 24,
        description:
            "Elevate your dining room with this sleek Mid-Century Modern dining table, featuring an elegant walnut finish and tapered legs for a timeless aesthetic. Its sturdy wood construction and minimalist design make it a versatile piece that fits with a variety of decor styles. Perfect for intimate dinners or as a stylish spot for your morning coffee.",
        imageUrl: "https://i.imgur.com/DMQHGA0.jpeg",

        category: "Furniture",
    },
    {
        title: " Golden-Base Dining Table",
        price: 66,
        description:
            "Elevate your dining space with this luxurious table, featuring a sturdy golden metal base with an intricate rod design that provides both stability and chic elegance. The smooth stone top in a sleek round shape offers a robust surface for your dining pleasure. Perfect for both everyday meals and special occasions, this table easily complements any modern or glam decor.",
        imageUrl: "https://i.imgur.com/NWIJKUj.jpeg",

        category: "Furniture",
    },
    {
        title: "Modern Teal Armchair",
        price: 25,
        description:
            "Elevate your living space with this beautifully crafted armchair, featuring a sleek wooden frame that complements its vibrant teal upholstery. Ideal for adding a pop of color and contemporary style to any room, this chair provides both superb comfort and sophisticated design. Perfect for reading, relaxing, or creating a cozy conversation nook.",
        imageUrl: "https://i.imgur.com/6wkyyIN.jpeg",

        category: "Furniture",
    },
    {
        title: "Solid Wood Dining Table",
        price: 67,
        description:
            "Enhance your dining space with this sleek, contemporary dining table, crafted from high-quality solid wood with a warm finish. Its sturdy construction and minimalist design make it a perfect addition for any home looking for a touch of elegance. Accommodates up to six guests comfortably and includes a striking fruit bowl centerpiece. The overhead lighting is not included.",
        imageUrl: "https://i.imgur.com/4lTaHfF.jpeg",

        category: "Furniture",
    },
    {
        title: "Minimal Workstation Setup",
        price: 312,
        description:
            "Elevate your home office with our Modern Minimalist Workstation Setup, featuring a sleek wooden desk topped with an elegant computer, stylish adjustable wooden desk lamp, and complimentary accessories for a clean, productive workspace. This setup is perfect for professionals seeking a contemporary look that combines functionality with design.",
        imageUrl: "https://i.imgur.com/3oXNBst.jpeg",

        category: "Furniture",
    },
    {
        title: "Modern Office Chair",
        price: 71,
        description:
            "Elevate your office space with this sleek and comfortable Modern Ergonomic Office Chair. Designed to provide optimal support throughout the workday, it features an adjustable height mechanism, smooth-rolling casters for easy mobility, and a cushioned seat for extended comfort. The clean lines and minimalist white design make it a versatile addition to any contemporary workspace.",
        imageUrl: "https://i.imgur.com/3dU0m72.jpeg",

        category: "Furniture",
    },
    {
        title: "Imperial Soccer Boot",
        price: 39,
        description:
            "Step onto the field and stand out from the crowd with these eye-catching holographic soccer cleats. Designed for the modern player, these cleats feature a sleek silhouette, lightweight construction for maximum agility, and durable studs for optimal traction. The shimmering holographic finish reflects a rainbow of colors as you move, ensuring that you'll be noticed for both your skills and style. Perfect for the fashion-forward athlete who wants to make a statement.",
        imageUrl: "https://i.imgur.com/qNOjJje.jpeg",

        category: "Shoes",
    },

    {
        title: "Rainbow High Heels",
        price: 19,
        description:
            "Step into the spotlight with these eye-catching rainbow glitter high heels. Designed to dazzle, each shoe boasts a kaleidoscope of shimmering colors that catch and reflect light with every step. Perfect for special occasions or a night out, these stunners are sure to turn heads and elevate any ensemble.",
        imageUrl: "https://i.imgur.com/62gGzeF.jpeg",

        category: "Shoes",
    },
    {
        title: "Chic Summer Sandals",
        price: 9,
        description:
            "Step into summer with style in our denim espadrille sandals. Featuring a braided jute sole for a classic touch and adjustable denim straps for a snug fit, these sandals offer both comfort and a fashionable edge. The easy slip-on design ensures convenience for beach days or casual outings.",
        imageUrl: "https://i.imgur.com/9qrmE1b.jpeg",

        category: "Shoes",
    },
    {
        title: "Vibrant Runners Sneakers",
        price: 27,
        description:
            "Step into style with these eye-catching sneakers featuring a striking combination of orange and blue hues. Designed for both comfort and fashion, these shoes come with flexible soles and cushioned insoles, perfect for active individuals who don't compromise on style. The reflective silver accents add a touch of modernity, making them a standout accessory for your workout or casual wear.",
        imageUrl: "https://i.imgur.com/hKcMNJs.jpeg",

        category: "Shoes",
    },
    {
        title: "Pink All-star Sneakers",
        price: 84,
        description:
            "Step into style with our Vibrant Pink Classic Sneakers! These eye-catching shoes feature a bold pink hue with iconic white detailing, offering a sleek, timeless design. Constructed with durable materials and a comfortable fit, they are perfect for those seeking a pop of color in their everyday footwear. Grab a pair today and add some vibrancy to your step!",
        imageUrl: "https://i.imgur.com/mcW42Gi.jpeg",

        category: "Shoes",
    },
    {
        title: "Futuristic High-Top Sneaker",
        price: 68,
        description:
            "Step into the future with this eye-catching high-top sneaker, designed for those who dare to stand out. The sneaker features a sleek silver body with striking gold accents, offering a modern twist on classic footwear. Its high-top design provides support and style, making it the perfect addition to any avant-garde fashion collection. Grab a pair today and elevate your shoe game!",
        imageUrl: "https://i.imgur.com/npLfCGq.jpeg",

        category: "Shoes",
    },
    {
        title: "Futuristic High-Heel Boots",
        price: 36,
        description:
            "Elevate your style with our cutting-edge high-heel boots that blend bold design with avant-garde aesthetics. These boots feature a unique color-block heel, a sleek silhouette, and a versatile light grey finish that pairs easily with any cutting-edge outfit. Crafted for the fashion-forward individual, these boots are sure to make a statement.",
        imageUrl: "https://i.imgur.com/HqYqLnW.jpeg",

        category: "Shoes",
    },
    {
        title: "Silver Patent Leather Heel",
        price: 53,
        description:
            "Step into sophistication with these chic peep-toe pumps, showcasing a lustrous patent leather finish and an eye-catching gold-tone block heel. The ornate buckle detail adds a touch of glamour, perfect for elevating your evening attire or complementing a polished daytime look.",
        imageUrl: "https://i.imgur.com/AzAY4Ed.jpeg",

        category: "Shoes",
    },
    {
        title: "Purple Leather Shoe",
        price: 17,
        description:
            "Step into sophistication with our Elegant Purple Leather Loafers, perfect for making a bold statement. Crafted from high-quality leather with a vibrant purple finish, these shoes feature a classic loafer silhouette that's been updated with a contemporary twist. The comfortable slip-on design and durable soles ensure both style and functionality for the modern man.",
        imageUrl: "https://i.imgur.com/Au8J9sX.jpeg",

        category: "Shoes",
    },
    {
        title: "Classic Blue Suede Shoes",
        price: 19,
        description:
            "Step into comfort with our Classic Blue Suede Casual Shoes, perfect for everyday wear. These shoes feature a stylish blue suede upper, durable rubber soles for superior traction, and classic lace-up fronts for a snug fit. The sleek design pairs well with both jeans and chinos, making them a versatile addition to any wardrobe.",
        imageUrl: "https://i.imgur.com/sC0ztOB.jpeg",

        category: "Shoes",
    },
    {
        title: "Futuristic Electric Bicycle",
        price: 122,
        description:
            "This modern electric bicycle combines style and efficiency with its unique design and top-notch performance features. Equipped with a durable frame, enhanced battery life, and integrated tech capabilities, it's perfect for the eco-conscious commuter looking to navigate the city with ease.",
        imageUrl: "https://i.imgur.com/BG8J0Fj.jpg",

        category: "Miscellaneous",
    },
    {
        title: "All-Terrain Go-Kart",
        price: 437,
        description:
            "Experience the thrill of outdoor adventures with our Sleek All-Terrain Go-Kart, featuring a durable frame, comfortable racing seat, and robust, large-tread tires perfect for handling a variety of terrains. Designed for fun-seekers of all ages, this go-kart is an ideal choice for backyard racing or exploring local trails.",
        imageUrl: "https://i.imgur.com/Ex5x3IU.jpg",

        category: "Miscellaneous",
    },
    {
        title: "Radiant Citrus Eau de Parfum",
        price: 73,
        description:
            "Indulge in the essence of summer with this vibrant citrus-scented Eau de Parfum. Encased in a sleek glass bottle with a bold orange cap, this fragrance embodies freshness and elegance. Perfect for daily wear, it's an olfactory delight that leaves a lasting, zesty impression.",
        imageUrl: "https://i.imgur.com/xPDwUb3.jpg",

        category: "Miscellaneous",
    },
    {
        title: "Olive-Green Luggage Bag",
        price: 48,
        description:
            "Travel in style with our durable hardshell carry-on, perfect for weekend getaways and business trips. This sleek olive green suitcase features smooth gliding wheels for easy airport navigation, a sturdy telescopic handle, and a secure zippered compartment to keep your belongings safe. Its compact size meets most airline overhead bin requirements, ensuring a hassle-free flying experience.",
        imageUrl: "https://i.imgur.com/jVfoZnP.jpg",

        category: "Miscellaneous",
    },
    {
        title: "Transparent Handbag",
        price: 61,
        description:
            "Elevate your style with our Chic Transparent Fashion Handbag, perfect for showcasing your essentials with a clear, modern edge. This trendy accessory features durable acrylic construction, luxe gold-tone hardware, and an elegant chain strap. Its compact size ensures you can carry your day-to-day items with ease and sophistication.",
        imageUrl: "https://i.imgur.com/Lqaqz59.jpg",

        category: "Miscellaneous",
    },
    {
        title: "Pink-Tinted Sunglasses",
        price: 38,
        description:
            "Step up your style game with these fashionable black-framed, pink-tinted sunglasses. Perfect for making a statement while protecting your eyes from the glare. Their bold color and contemporary design make these shades a must-have accessory for any trendsetter looking to add a pop of color to their ensemble.",
        imageUrl: "https://i.imgur.com/0qQBkxX.jpg",

        category: "Miscellaneous",
    },
    {
        title: "Glass Tumbler Set",
        price: 50,
        description:
            "Enhance your drinkware collection with our sophisticated set of glass tumblers, perfect for serving your favorite beverages. This versatile set includes both clear and subtly tinted glasses, lending a modern touch to any table setting. Crafted with quality materials, these durable tumblers are designed to withstand daily use while maintaining their elegant appeal.",
        imageUrl: "https://i.imgur.com/TF0pXdL.jpg",

        category: "Miscellaneous",
    },
];

export default data;
