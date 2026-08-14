/**
 * TANTA ARGENTINA - Interactive Website Engine
 * Multilingual Support (ES/EN), Category Filtering, Dynamic Render
 */

// Global State
let currentLang = 'es';
let activeCategory = 'piqueos';

// Data Source - Translated & Structured
const translations = {
    es: {
        topBar: "📍 Esmeralda 938, Buenos Aires — Sabor peruano de autor",
        navAbout: "El Lugar",
        navMenu: "Carta",
        navReviews: "Reseñas",
        navContact: "Contacto",
        btnCall: "Llamar",
        heroReviewsCount: "(8.700+ reseñas)",
        heroTitle: "Cocina Peruana Criolla con Sello de Autor",
        heroSubtitle: "La calidez de la mesa hogareña peruana en una arquitectura de vanguardia rodeada de vegetación y elegancia en el corazón de Buenos Aires.",
        btnViewMenu: "Ver la Carta Completa",
        btnReserve: "Reservar por Teléfono",
        feat1: "Ambiente de Vanguardia",
        feat2: "Cebiches y Pisco Bar",
        feat3: "Firma Gastón Acurio",
        atmosTag: "Atmósfera Tanta",
        atmosTitle: "Un oasis contemporáneo en el Microcentro",
        card1Title: "Naturaleza & Diseño",
        card1Desc: "Un concepto espacial donde los tonos cálidos, la iluminación tenue y jardines vitrina integrados crean un refugio único.",
        card2Title: "Firmeza del Mar & Ají",
        card2Desc: "Cebiches clásicos, tiraditos y causas preparados al instante con materia prima seleccionada.",
        card3Title: "Coctelería de Autor & Pisco",
        card3Desc: "Nuestra barra ofrece el Pisco Sour perfecto e infusiones botánicas diseñadas para maridar cada plato.",
        menuTag: "Gastronomía Peruana",
        menuTitle: "Nuestra Carta",
        menuSubtitle: "Precios expresados en Pesos Argentinos ($ ARS). Todos los platos se preparan al momento.",
        searchPlaceholder: "Buscar plato por nombre o ingrediente...",
        catPiqueos: "🥟 Los Piqueos",
        catPeruanos: "🇵🇪 Platos Peruanos",
        catTanta: "🔥 Platos de Tanta",
        catPastas: "🍝 Las Pastas",
        catSanguches: "🥪 Sánguches & Ensaladas",
        catPostres: "🍰 Los Postres",
        revTag: "Testimonios Realmente Auténticos",
        revTitle: "Lo que dicen nuestros comensales",
        revSub: "Basado en más de 8.700 reseñas verificadas",
        locTag: "Visítanos",
        locTitle: "Ubicación y Horarios",
        hoursTitle: "Horarios de Atención",
        btnMaps: "Abrir en Google Maps",
        badgePeruvian: "Experiencia Peruana Auténtica",
        stickyCall: "Llamar para Reservar (+54 11 7617-6632)",
        footerDesc: "Sabores auténticos peruanos con la calidez del hogar y el diseño contemporáneo en Buenos Aires.",
        footContactTitle: "Contacto & Dirección",
        footSocialTitle: "Síguenos",
        days: {
            monThu: "Lunes a Jueves",
            friSat: "Viernes y Sábados",
            sun: "Domingos"
        }
    },
    en: {
        topBar: "📍 Esmeralda 938, Buenos Aires — Signature Peruvian Cuisine",
        navAbout: "Atmosphere",
        navMenu: "Menu",
        navReviews: "Reviews",
        navContact: "Location",
        btnCall: "Call Us",
        heroReviewsCount: "(8,700+ reviews)",
        heroTitle: "Signature Peruvian Cuisine & Creole Flavors",
        heroSubtitle: "The warmth of a Peruvian home-cooked meal set in avant-garde architecture with lush greenery in downtown Buenos Aires.",
        btnViewMenu: "Explore Full Menu",
        btnReserve: "Call to Reserve",
        feat1: "Avant-Garde Space",
        feat2: "Ceviche & Pisco Bar",
        feat3: "Chef Gastón Acurio",
        atmosTag: "The Atmosphere",
        atmosTitle: "A Modern Urban Oasis in Downtown",
        card1Title: "Nature & Architecture",
        card1Desc: "A spatial concept where warm earthy tones, soft lighting, and glass terrarium green gardens create an inviting refuge.",
        card2Title: "Fresh Ocean & Chili Peppers",
        card2Desc: "Classic ceviches, tiraditos, and causes made fresh with carefully selected ingredients.",
        card3Title: "Craft Cocktails & Pisco",
        card3Desc: "Our bar serves the signature Pisco Sour and botanical cocktails created to complement every dish.",
        menuTag: "Peruvian Culinary Heritage",
        menuTitle: "Our Menu",
        menuSubtitle: "Prices shown in Argentine Pesos ($ ARS). All dishes are freshly made.",
        searchPlaceholder: "Search dish by name or ingredient...",
        catPiqueos: "🥟 Starters & Bites",
        catPeruanos: "🇵🇪 Peruvian Classics",
        catTanta: "🔥 Tanta Specials",
        catPastas: "🍝 Handcrafted Pastas",
        catSanguches: "🥪 Sandwiches & Salads",
        catPostres: "🍰 Desserts",
        revTag: "Verified Guest Reviews",
        revTitle: "Loved by Guests & Travelers",
        revSub: "Based on more than 8,700 verified reviews",
        locTag: "Visit Us",
        locTitle: "Location & Opening Hours",
        hoursTitle: "Opening Hours",
        btnMaps: "Open in Google Maps",
        badgePeruvian: "Authentic Peruvian Culinary Art",
        stickyCall: "Call to Reserve (+54 11 7617-6632)",
        footerDesc: "Authentic Peruvian flavors with home warmth and contemporary design in Buenos Aires.",
        footContactTitle: "Contact & Location",
        footSocialTitle: "Follow Us",
        days: {
            monThu: "Monday to Thursday",
            friSat: "Friday & Saturday",
            sun: "Sunday"
        }
    }
};

const hoursData = [
    { key: 'monThu', time: "12:00 PM – 12:00 AM" },
    { key: 'friSat', time: "12:00 PM – 12:30 AM" },
    { key: 'sun', time: "12:00 PM – 12:00 AM" }
];

const menuData = [
    // PIQUEOS
    {
        category: 'piqueos',
        price: '$19.600',
        title: { es: 'Las Croquetas de Choclo con Queso', en: 'Corn & Cheese Croquettes' },
        desc: { es: 'Acompañadas de salsa de rocoto.', en: 'Accompanied by spicy rocoto sauce.' }
    },
    {
        category: 'piqueos',
        price: '$19.000',
        title: { es: 'Las Gyozas', en: 'Grilled Gyozas' },
        desc: { es: 'Doraditas a la plancha, rellenas de pollo y salsa Tokio.', en: 'Pan-seared golden gyozas filled with chicken and Tokyo sauce.' }
    },
    {
        category: 'piqueos',
        price: '$14.000',
        title: { es: 'La Tortilla de Papas', en: 'Peruvian Potato Omelet' },
        desc: { es: 'De papa y cebolla con huevos de corral y pancito grillado.', en: 'Potato and onion Spanish-style omelet with free-range eggs and grilled bread.' }
    },
    {
        category: 'piqueos',
        price: '$21.500',
        title: { es: 'Los Wantanes de Langostinos', en: 'Shrimp Wontons' },
        desc: { es: 'Con su cremita estilo chifa.', en: 'Crispy wontons filled with prawns, served with Peruvian-Chinese chifa dip.' }
    },
    {
        category: 'piqueos',
        price: '$28.000',
        title: { es: 'Tiradito Chifero', en: 'Chifa-Style Trout Tiradito' },
        desc: { es: 'De trucha con leche de tigre chifera con tamarindo y sésamo.', en: 'Trout sashimi with Peruvian-Chinese tiger’s milk, tamarind, and sesame.' }
    },
    {
        category: 'piqueos',
        price: '$19.000',
        title: { es: 'Los Tequeños Limeños', en: 'Limeño Tequeños' },
        desc: { es: 'De lomo saltado.', en: 'Crispy wonton rolls stuffed with juicy stir-fried beef tenderloin (lomo saltado).' }
    },
    {
        category: 'piqueos',
        price: '$9.500',
        title: { es: 'La Empanada', en: 'Lomo Saltado Empanada' },
        desc: { es: 'De lomo saltado, espolvoreada con azúcar impalpable.', en: 'Filled with savory lomo saltado, dusted with powdered sugar.' }
    },
    {
        category: 'piqueos',
        price: '$16.500',
        title: { es: 'Las Wings Pop Bróster', en: 'Korean-Limeño Glazed Wings' },
        desc: { es: 'Glaseadas en salsa coreano-limeña dulce y picante.', en: 'Crispy fried chicken wings glazed in sweet & spicy Korean-Peruvian fusion sauce.' }
    },

    // PERUANOS
    {
        category: 'peruanos',
        price: '$25.000',
        title: { es: 'Cebiche Clásico', en: 'Classic Peruvian Cebiche' },
        desc: { es: 'De pescado en su versión clásica limeña al ají limo.', en: 'Fresh catch of the day cured in lime juice with ají limo pepper, sweet potato, and choclo corn.' }
    },
    {
        category: 'peruanos',
        price: '$24.000',
        title: { es: 'Tiradito Dos Cremas', en: 'Two-Cream Fish Tiradito' },
        desc: { es: 'De pescado, bañado con sus dos cremas de ají amarillo y rocoto.', en: 'Sashimi-cut fish smothered in yellow ají and spicy rocoto creams.' }
    },
    {
        category: 'peruanos',
        price: '$25.000',
        title: { es: 'La Papa a la Huancaína', en: 'Papa a la Huancaína' },
        desc: { es: 'La amarilla cremosita con su huevo y aceituna.', en: 'Creamy yellow potatoes topped with velvety yellow pepper sauce, boiled egg, and black olive.' }
    },
    {
        category: 'peruanos',
        price: '$21.300 – $25.000',
        title: { es: 'Las Causas Limeñas', en: 'Classic Potato Causas' },
        desc: { es: 'Opciones: Atún ($21.300), Pollo ($20.300) o Langostinos ($25.000). Layered yellow potato terrine.', en: 'Options: Tuna ($21,300), Chicken ($20,300), or Prawns ($25,000).' }
    },
    {
        category: 'peruanos',
        price: '$14.500',
        title: { es: 'Papas Rellenas', en: 'Stuffed Potato Croquettes' },
        desc: { es: 'Con su criolla, ocopa y crema de rocoto (Dúo).', en: 'Stuffed golden potatoes served with salsa criolla, ocopa, and rocoto dip.' }
    },
    {
        category: 'peruanos',
        price: '$19.300',
        title: { es: 'Anticuchos de Corazón', en: 'Traditional Beef Heart Skewers' },
        desc: { es: 'Con papas doradas, choclo y salsas.', en: 'Marinated grilled beef heart skewers served with golden potatoes and Peruvian corn.' }
    },
    {
        category: 'peruanos',
        price: '$41.000',
        title: { es: 'Piqueo Criollo Tanta', en: 'Tanta Sampler Platter' },
        desc: { es: 'Para compartir: tamalito verde, papa rellena, anticuchines, papa huancaína, yuca y causa de pollo.', en: 'To share: green tamale, stuffed potato, beef skewers, huancaína potato, fried cassava, and chicken causa.' }
    },
    {
        category: 'peruanos',
        price: '$27.500',
        title: { es: 'Ají de Gallina', en: 'Traditional Ají de Gallina' },
        desc: { es: 'Hecho según receta antigua, acompañado de papa y arroz con choclo.', en: 'Shredded chicken in rich creamy yellow pepper sauce, served with potato and corn rice.' }
    },
    {
        category: 'peruanos',
        price: '$32.000 – $35.900',
        title: { es: 'Tallarines Saltados Criollos', en: 'Wok Stir-Fried Noodles' },
        desc: { es: 'Al wok. De Pollo ($32.000) o Lomo ($35.900).', en: 'Wok-stir-fried noodles with onions and tomatoes. Choice of Chicken ($32,000) or Tenderloin Beef ($35,900).' }
    },
    {
        category: 'peruanos',
        price: '$30.000 – $36.000',
        title: { es: 'Saltados Criollos de Siempre', en: 'Classic Lomo Saltado' },
        desc: { es: 'Con cebollas, tomates, ajíes, papas amarillas fritas y arroz con choclo. Pollo ($30.000) / Lomo Fino ($36.000).', en: 'Sautéed with red onions, tomatoes, crispy fries, and rice. Chicken ($30,000) or Beef Tenderloin ($36,000).' }
    },

    // TANTA
    {
        category: 'tanta',
        price: '$35.000',
        title: { es: 'El Aeropuerto de Quinua', en: 'Quinoa Aeropuerto Chaufa' },
        desc: { es: 'Chaufa aeropuerto de quinua orgánica con pollo y verduras, cubierto de tortilla y salsa de ajo picante.', en: 'Organic quinoa fried rice wok-tossed with chicken, veggies, topped with omelet and spicy garlic sauce.' }
    },
    {
        category: 'tanta',
        price: '$25.000',
        title: { es: 'El Chanchito Taiwán', en: 'Taiwanese Crispy Pork' },
        desc: { es: 'Con chanchito crocante a la miel spicy, huevo frito, ensalada de pepino, sobre chaufa blanco.', en: 'Crispy honey-spiced pork belly with fried egg and cucumber salad over white chaufa rice.' }
    },
    {
        category: 'tanta',
        price: '$32.000',
        title: { es: 'El Arroz con Chancho', en: 'Wok Pork Rice' },
        desc: { es: 'Arroz al wok con adobo de cerdo, chicharrón, chorizo, choclo, pimientos, col y salsa criolla.', en: 'Wok-fried rice with marinated pork belly, pork crackling, sausage, corn, peppers, and avocado radish criolla.' }
    },
    {
        category: 'tanta',
        price: '$28.000',
        title: { es: 'El Pollo de la Infancia', en: 'Home-Style Roasted Chicken' },
        desc: { es: 'Pollo al horno en su jugo, con arroz con choclo y ensalada rusa.', en: 'Oven-roasted chicken in rich pan gravy, served with corn rice and potato salad.' }
    },
    {
        category: 'tanta',
        price: '$28.000',
        title: { es: 'El Asado de la Abuela', en: 'Grandma’s Braised Beef', },
        desc: { es: 'Asado mechado y guisado en su salsa con puré de papa amarilla, arroz con choclo y criolla.', en: 'Slow-braised pot roast beef in rich gravy with yellow potato mash, corn rice, and criolla.' }
    },
    {
        category: 'tanta',
        price: '$30.000',
        title: { es: 'El Risotto de Chupe', en: 'Prawn Chowder Risotto' },
        desc: { es: 'Cremoso risotto de poros, arverjas y choclito en salsa de chupe de langostinos.', en: 'Creamy leek and green pea risotto enriched with traditional prawn chowder bisque.' }
    },
    {
        category: 'tanta',
        price: '$32.000',
        title: { es: 'Estofado de Res al Vino Tinto', en: 'Red Wine Beef Stew' },
        desc: { es: 'Con cebollitas, champiñones y tocino, acompañado con fettuccine a la crema.', en: 'Slow-cooked beef stew in red wine with pearl onions, bacon, served with creamy fettuccine.' }
    },
    {
        category: 'tanta',
        price: '$35.000',
        title: { es: 'Trucha a la Meunier', en: 'Pan-Seared Trout Meunier' },
        desc: { es: 'Con papa dorada, salsa meunier, crutones y aceite de oliva.', en: 'Pan-seared trout in classic lemon-butter meunier sauce with golden potatoes and croutons.' }
    },

    // PASTAS
    {
        category: 'pastas',
        price: '$25.800',
        title: { es: 'Fettuccine de Infancia', en: 'Creamy Childhood Fettuccine' },
        desc: { es: 'Fettuccine a la crema con pollo, jamón y champiñones gratinados con queso parmesano.', en: 'Creamy fettuccine with chicken, ham, mushrooms, baked with parmesan cheese.' }
    },
    {
        category: 'pastas',
        price: '$27.000',
        title: { es: 'La Pasta de la Nonna', en: 'Nonna’s Wine Stew Pasta' },
        desc: { es: 'En salsa de estofado de carne al vino con champiñones, mantequilla y parmesano.', en: 'Pasta tossed in rich red wine beef stew sauce with butter and parmesan.' }
    },
    {
        category: 'pastas',
        price: '$36.000',
        title: { es: 'Coditos con Milanesa Huancayo Napoli', en: 'Huancaína Elbow Macaroni & Milanesa' },
        desc: { es: 'Con crema a la huancaína y cubiertos de una milanesa de pollo a la napolitana.', en: 'Elbow pasta in creamy yellow pepper sauce topped with chicken milanese Napolitana.' }
    },
    {
        category: 'pastas',
        price: '$31.000',
        title: { es: 'Tallarines Caseros al Pesto', en: 'Homemade Pesto Noodles & Milanesa' },
        desc: { es: 'Con pollo, crema de pesto limeño, cubiertos por una milanesa y un toque de huancaína.', en: 'Handmade noodles in Limeño pesto cream topped with chicken milanese and huancaína drizzle.' }
    },
    {
        category: 'pastas',
        price: '$29.500',
        title: { es: 'Ravioles de Asado', en: 'Braised Beef Ravioli' },
        desc: { es: 'Bañados en su propio jugo al vino tinto, con cremita de mostaza y parmesano.', en: 'Ravioli stuffed with braised beef in red wine reduction and mustard cream.' }
    },
    {
        category: 'pastas',
        price: '$24.500',
        title: { es: 'Ravioles de los Andes', en: 'Andean Sweet Corn Ravioli' },
        desc: { es: 'De choclo con mantequilla y huacatay.', en: 'Peruvian choclo corn ravioli tossed in brown butter and fragrant huacatay herb.' }
    },

    // SANGUCHES & ENSALADAS
    {
        category: 'sanguches',
        price: '$19.500',
        title: { es: 'El Cordon Bleu Sandwich', en: 'Chicken Cordon Bleu Sandwich' },
        desc: { es: 'Con milanesa de pollo rellena de jamón y queso en pan ciabatta.', en: 'Crispy chicken milanese stuffed with ham and cheese on toasted ciabatta bread.' }
    },
    {
        category: 'sanguches',
        price: '$20.500',
        title: { es: 'La Hamburguesa Tanta', en: 'Tanta Signature Burger' },
        desc: { es: 'Con queso, salsa Tanta, lechuga, tomate, cebolla, pickles, papas al hilo y papitas fritas.', en: 'Beef patty with house cheese, Tanta sauce, shoestring potatoes, served with french fries.' }
    },
    {
        category: 'sanguches',
        price: '$26.000',
        title: { es: 'Ensalada Barranco', en: 'Barranco Quinoa & Avocado Salad' },
        desc: { es: 'Quinua, tomate, pepino, aceitunas, queso fresco, choclo, palta, frijolitos, hummus de habas y pita chips.', en: 'Quinoa, fresh cheese, avocado, cucumber, corn, black beans, fava bean hummus, and pita chips.' }
    },
    {
        category: 'sanguches',
        price: '$20.300',
        title: { es: 'Ensalada Cesars Bróster', en: 'Crispy Chicken Caesar Salad' },
        desc: { es: 'Pechugas de pollo bróster, lechuga romana, crutones, láminas de parmesano y vinagreta Cesars.', en: 'Peruvian crispy chicken breast, romaine, croutons, parmesan shavings, and Caesar dressing.' }
    },
    {
        category: 'sanguches',
        price: '$24.500',
        title: { es: 'Ensalada Cobb', en: 'Classic Cobb Salad' },
        desc: { es: 'Pechuga de pollo, queso azul, lechugas, tocino, palta, champiñones, tomate, huevo y vinagreta Dijon.', en: 'Chicken breast, blue cheese, bacon, avocado, mushrooms, tomato, boiled egg, and Dijon dressing.' }
    },

    // POSTRES
    {
        category: 'postres',
        price: '$15.500',
        title: { es: 'Lucumita', en: 'Lúcuma & Chocolate Tart' },
        desc: { es: 'Tarta de cacao rellena de cremoso de chocolate con leche, nibs y quenelles de lúcuma.', en: 'Cocoa tart filled with milk chocolate creamy center and delicious lúcuma fruit quenelles.' }
    },
    {
        category: 'postres',
        price: '$11.000',
        title: { es: 'Bombón Sublime', en: 'Sublime Peanut & Chocolate Bombón' },
        desc: { es: 'Base de crocante con mousse de maní bañado en chocolate y ganache de caramelo salado.', en: 'Crunchy base topped with peanut mousse, dark chocolate coat, and salted caramel ganache.' }
    },
    {
        category: 'postres',
        price: '$13.000',
        title: { es: 'Torta Tres Leches con Dulce de Leche', en: 'Tres Leches & Dulce de Leche Cake' },
        desc: { es: 'Bizcochuelo húmedo en tres leches de dulce de leche, relleno con dulce de leche y chantilly.', en: 'Sponge cake soaked in dulce de leche milk blend, filled with dulce de leche and whipped cream.' }
    },
    {
        category: 'postres',
        price: '$11.000',
        title: { es: 'La Caribeña', en: 'La Caribeña Passion Fruit & Coconut Mousse' },
        desc: { es: 'Mousse de dulce de leche, crema de maracuyá, ananá y mousse de coco con brillo de maracuyá.', en: 'Dulce de leche mousse with passionfruit cream, pineapple compote, and coconut mousse.' }
    },
    {
        category: 'postres',
        price: '$11.000',
        title: { es: 'Crema Volteada', en: 'Peruvian Caramel Flan (Crema Volteada)' },
        desc: { es: 'Flan cremoso de leche condensada y evaporada, coronado con crema y dulce de leche.', en: 'Silky milk flan topped with fresh whipped cream and dulce de leche.' }
    },
    {
        category: 'postres',
        price: '$13.000',
        title: { es: 'Tres Leches Clásico', en: 'Classic Tres Leches Cake' },
        desc: { es: 'Bizcochuelo esponjoso bañado en tres leches acompañado de chantilly de vainilla.', en: 'Moist classic sponge cake soaked in three milks with vanilla chantilly.' }
    },
    {
        category: 'postres',
        price: '$13.000',
        title: { es: 'Suspiro Limeño', en: 'Suspiro a la Limeña' },
        desc: { es: 'Reducción de leche evaporada y condensada con yemas y merengue italiano al Malamado.', en: 'Classic caramel cream topped with port wine Italian meringue.' }
    },
    {
        category: 'postres',
        price: '$14.000',
        title: { es: 'Esfera de Chocolate', en: 'Dark Chocolate & Toffee Sphere' },
        desc: { es: 'Mousse de chocolate amargo, almendras garrapiñadas, toffee, base de galleta de coco y macarrón.', en: 'Dark chocolate mousse sphere filled with caramelized almonds, toffee, coconut crust, and macaron.' }
    }
];

const reviewsData = [
    {
        author: "Clayton",
        stars: 5,
        text: {
            es: "Si te gusta la comida asiática y la latina, y la idea de que ambas se unan en una fusión de sabores, este lugar es para ti. La decoración es impresionante y el servicio muy bueno. Recomendadísima la paella 🥘 (¡asegúrate de pronunciarla bien o te mirarán raro! 😂).",
            en: "If you like Asian food and you like Latin food, and you like the idea of the two married together, becoming one infused flavor, then this place is for you. And the decor is stunning. The service is really good. I recommend the Paella 🥘! Loving the whole experience."
        }
    },
    {
        author: "Caitlynne Goodlett",
        stars: 4,
        text: {
            es: "Una experiencia maravillosa en general. La comida estuvo deliciosa (probamos el cebiche clásico, tiradito dos cremas y el lomo saltado). El pisco sour es imperdible y altamente recomendado. El ambiente es hermoso para compartir en grupo.",
            en: "Overall a wonderful experience. The food was delicious (we had the Classico ceviche, dos cremas ceviche, and lomo saltado). The pisco sour hit and I highly recommend. Beautiful space and would likely recommend again."
        }
    },
    {
        author: "Robert Thijssen",
        stars: 4,
        text: {
            es: "Excelente interior. Muy bien organizado y elegante, con un espacio verde exterior rodeado de cristal que te hace sentir sentado junto a un mini bosque. Las porciones tienen el tamaño adecuado y el ambiente es ideal.",
            en: "Great interior. Well organized, stylish with an outside green space surrounded by glass so it feels like you’re sitting with a mini forest next to your table. Portions were just right size."
        }
    },
    {
        author: "banana root",
        stars: 5,
        text: {
            es: "Ayer visitamos Tanta Argentina y fue un lugar verdaderamente acogedor. La atmósfera fue genial y disfrutamos mucho la velada. El servicio fue excelente, ¡especialmente Ariana cuidó cada detalle! La comida deliciosa y las porciones perfectas.",
            en: "We visited Tanta Argentina yesterday, and it was a truly cozy and welcoming place. The atmosphere was great! The service was excellent; we were especially well taken care of by Ariana! Food was delicious."
        }
    }
];

// Initialize DOM
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    setupNavigation();
    setupMenuTabs();
    setupSearch();
    renderContent();
});

function setLanguage(lang) {
    if (currentLang === lang) return;
    currentLang = lang;

    // Toggle active buttons
    document.getElementById('lang-es').classList.toggle('active', lang === 'es');
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');

    renderContent();
}

function renderContent() {
    const t = translations[currentLang];

    // Static Data Translation
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) el.setAttribute('placeholder', t[key]);
    });

    renderHours();
    renderMenu();
    renderReviews();
}

function renderHours() {
    const hoursList = document.getElementById('hoursList');
    const t = translations[currentLang].days;

    hoursList.innerHTML = hoursData.map(h => `
        <li class="hours-row">
            <span class="hours-day">${t[h.key]}</span>
            <span class="hours-time">${h.time}</span>
        </li>
    `).join('');
}

function renderMenu() {
    const menuGrid = document.getElementById('menuGrid');
    const searchVal = document.getElementById('menuSearchInput').value.toLowerCase().trim();

    const filtered = menuData.filter(item => {
        const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
        const titleText = item.title[currentLang].toLowerCase();
        const descText = item.desc[currentLang].toLowerCase();
        const matchesSearch = !searchVal || titleText.includes(searchVal) || descText.includes(searchVal);
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        menuGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
                ${currentLang === 'es' ? 'No se encontraron platos con esa búsqueda.' : 'No dishes found matching your search.'}
            </div>
        `;
        return;
    }

    menuGrid.innerHTML = filtered.map(item => `
        <div class="menu-item-card">
            <div class="menu-item-header">
                <h3 class="menu-item-title">${item.title[currentLang]}</h3>
                <span class="menu-item-price">${item.price}</span>
            </div>
            <p class="menu-item-desc">${item.desc[currentLang]}</p>
        </div>
    `).join('');
}

function renderReviews() {
    const grid = document.getElementById('reviewsGrid');
    grid.innerHTML = reviewsData.map(r => `
        <div class="review-card">
            <div class="review-header">
                <span class="review-author">${r.author}</span>
                <span class="review-stars">${'★'.repeat(r.stars)}</span>
            </div>
            <p class="review-text">"${r.text[currentLang]}"</p>
        </div>
    `).join('');
}

function setupMenuTabs() {
    const tabsContainer = document.getElementById('menuTabs');
    tabsContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.menu-tab-btn');
        if (!btn) return;

        document.querySelectorAll('.menu-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        activeCategory = btn.getAttribute('data-category');
        renderMenu();
    });
}

function setupSearch() {
    const input = document.getElementById('menuSearchInput');
    input.addEventListener('input', () => {
        renderMenu();
    });
}

function setupNavigation() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    const navOverlay = document.getElementById('navOverlay');

    function toggleMenu() {
        navMenu.classList.toggle('active');
        navOverlay.classList.toggle('active');
    }

    mobileToggle.addEventListener('click', toggleMenu);
    navOverlay.addEventListener('click', toggleMenu);

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
}