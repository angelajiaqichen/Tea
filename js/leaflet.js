var map = L.map('map').setView([30, 10], 2);
map.scrollWheelZoom.disable();
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    // attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const teaInfo = {
  "Colombia": {
    "title": "Colombian Tea",
    "overview": "Colombian tea has a rich history and culture, and a variety of unique tea types. The country's tea culture has been influenced by its indigenous people, Spanish colonizers, and African slaves. Today, Colombian tea is an important part of the country's economy and cultural heritage.",
    "history": "Tea was introduced to Colombia in the 19th century by Spanish colonizers, who planted tea bushes in the country's high-altitude regions. However, the industry did not take off until the 1950s, when the Colombian government began promoting tea cultivation as a way to diversify the country's agricultural exports. Today, Colombia is one of the world's leading producers of high-quality black tea, and also produces green tea and herbal infusions.",
    "culture": "Tea drinking is an important part of Colombian social culture, with tea traditionally served at family gatherings, business meetings, and other social events. Colombian tea culture has been influenced by the country's indigenous people, who have used medicinal plants for centuries, as well as by African slaves who brought with them the tradition of drinking herbal infusions. Today, Colombian tea culture is a unique blend of indigenous, African, and Spanish influences.",
    "types": "Colombia is known for its high-quality black teas, which are grown in the country's high-altitude regions. The most famous Colombian tea is the tippy golden-flowery-orange-pekoe (TGFOP), which is known for its delicate flavor and aroma. Colombia also produces green teas, including gunpowder and jasmine, as well as a variety of herbal infusions, such as chamomile, mint, and lemongrass.",
    "teaser_photo": "img/colombia.png"
    },
    
    "Brazil": {
    "title": "Brazilian Tea",
    "overview": "Brazilian tea has a rich history and culture, and a variety of unique tea types. The country's tea culture has been influenced by its indigenous people, Portuguese colonizers, and African slaves. Today, Brazilian tea is an important part of the country's economy and cultural heritage.",
    "history": "Tea was first introduced to Brazil in the 19th century by Portuguese colonizers, who planted tea bushes in the country's high-altitude regions. However, the industry did not take off until the 20th century, when tea cultivation was encouraged as a way to replace coffee production, which had been devastated by disease. Today, Brazil is one of the world's leading producers of mate, a caffeine-rich tea-like beverage made from the leaves of the yerba mate plant.",
    "culture": "Mate drinking is an important part of Brazilian social culture, with mate traditionally served in a shared gourd with a metal straw called a bombilla. Brazilian mate culture has been influenced by the country's indigenous people, who have used yerba mate for centuries, as well as by African slaves who brought with them the tradition of communal drinking. Today, Brazilian mate culture is a unique blend of indigenous, African, and Portuguese influences.",
    "types": "Brazil is known for its yerba mate, which is typically consumed as a hot or cold infusion. Brazilian mate is often flavored with herbs such as mint, lemon, and ginger, and is also used as an ingredient in energy drinks and other beverages. In addition to mate, Brazil also produces a variety of herbal infusions, such as chamomile, fennel, and lemon balm.",
    "teaser_photo": "img/brazil.png"
    },
    
    "Argentina": {
    "title": "Argentinian Tea",
    "overview": "Argentinian tea has a rich history and culture, and a variety of unique tea types. The country's tea culture has been influenced by its indigenous people, Spanish colonizers, and British immigrants. Today, Argentinian tea is an important part of the country's economy and cultural heritage.",
    "history": "Tea was introduced to Argentina in the 19th century by British immigrants, who brought with them their tea-drinking customs. However, the industry did not take off until the 20th century, when tea cultivation was encouraged as a way to diversify the country's agricultural exports. Today, Argentina is one of the world's leading producers of yerba mate, a caffeine-rich tea-like beverage made from the leaves of the yerba mate plant.",
    "culture": "Mate drinking is an important part of Argentinian social culture, with mate traditionally served in a shared gourd with a metal straw called a bombilla. Argentinian mate culture has been influenced by the country's indigenous people, who have used yerba mate for centuries, as well as by Spanish colonizers and British immigrants who brought with them the tradition of tea-drinking. Today, Argentinian mate culture is a unique blend of indigenous, Spanish, and British influences.",
    "types": "Argentina is known for its yerba mate, which is typically consumed as a hot or cold infusion. Argentinian mate is often flavored with herbs such as mint, lemon, and ginger, and is also used as an ingredient in energy drinks and other beverages. In addition to mate, Argentina also produces a variety of herbal infusions, such as chamomile, fennel, and lemon balm.",
    "teaser_photo": "img/argentina.png"
    },
    
    "South Africa": {
    "title": "South African Tea",
    "overview": "South African tea has a rich history and culture, and a variety of unique tea types. The country's tea culture has been influenced by its indigenous people, Dutch colonizers, and British immigrants. Today, South African tea is an important part of the country's economy and cultural heritage.",
    "history": "Tea was introduced to South Africa in the 17th century by Dutch colonizers, who brought with them tea bushes from their colonies in Asia. However, the industry did not take off until the 19th century, when British immigrants began cultivating tea in the country's high-altitude regions. Today, South Africa is known for its rooibos tea, a caffeine-free herbal infusion made from the leaves of the Aspalathus linearis plant.",
    "culture": "Rooibos tea drinking is an important part of South African social culture, with rooibos traditionally served as a hot or cold beverage with milk and sugar. South African tea culture has been influenced by the country's indigenous people, who have used rooibos for centuries as a medicinal herb, as well as by Dutch and British colonizers who brought with them the tradition of tea-drinking. Today, South African tea culture is a unique blend of indigenous, Dutch, and British influences.",
    "types": "South Africa is known for its rooibos tea, which is typically consumed as a hot or cold infusion. Rooibos tea is caffeine-free and is often flavored with herbs such as cinnamon, vanilla, and honeybush. In addition to rooibos tea, South Africa also produces honeybush tea, another caffeine-free herbal infusion.",
    "teaser_photo": "img/south-africa.png"
    },
    
    "Kenya": {
    "title": "Kenyan Tea",
    "overview": "Kenyan tea has a rich history and culture, and a variety of unique tea types. The country's tea culture has been influenced by its indigenous people, British colonizers, and Indian immigrants. Today, Kenyan tea is an important part of the country's economy and cultural heritage.",
    "history": "Tea was introduced to Kenya in the early 20th century by British colonizers, who saw the country's high-altitude regions as ideal for tea cultivation. The industry grew rapidly, and by the mid-20th century, tea had become Kenya's leading agricultural export. Today, Kenya is known for its high-quality black teas, which are prized for their strong flavor and aroma.",
    "culture": "Tea drinking is an important part of Kenyan social culture, with tea traditionally served in a communal setting with milk and sugar. Kenyan tea culture has been influenced by the country's indigenous people, who have used medicinal plants for centuries, as well as by British colonizers and Indian immigrants who brought with them the tradition of tea-drinking. Today, Kenyan tea culture is a unique blend of indigenous, British, and Indian influences.",
    "types": "Kenya is known for its high-quality black teas, which are grown in the country's high-altitude regions. The most famous Kenyan tea is the golden broken orange pekoe (GBOP), which is known for its robust flavor and aroma. Kenya also produces green teas, including gunpowder and jasmine, as well as a variety of herbal infusions, such as chamomile, mint, and lemongrass.",
    "teaser_photo": "img/kenya.png"
    },

    "Rwanda": {
    "title": "Rwandan Tea",
    "overview": "Rwandan tea has a rich history and culture, and a variety of unique tea types. The country's tea culture has been influenced by its indigenous people, German and Belgian colonizers, and Indian immigrants. Today, Rwandan tea is an important part of the country's economy and cultural heritage.",
    "history": "Tea was introduced to Rwanda in the early 20th century by German and Belgian colonizers, who saw the country's high-altitude regions as ideal for tea cultivation. The industry grew rapidly, and by the mid-20th century, tea had become Rwanda's leading agricultural export. Today, Rwanda is known for its high-quality black teas, which are prized for their strong flavor and aroma.",
    "culture": "Tea drinking is an important part of Rwandan social culture, with tea traditionally served in a communal setting with milk and sugar. Rwandan tea culture has been influenced by the country's indigenous people, who have used medicinal plants for centuries, as well as by German and Belgian colonizers and Indian immigrants who brought with them the tradition of tea-drinking. Today, Rwandan tea culture is a unique blend of indigenous, German, Belgian, and Indian influences.",
    "types": "Rwanda is known for its high-quality black teas, which are grown in the country's high-altitude regions. The most famous Rwandan tea is the broken orange pekoe (BOP), which is known for its robust flavor and aroma. Rwanda also produces green teas, including gunpowder and jasmine, as well as a variety of herbal infusions, such as chamomile, mint, and lemongrass.",
    "teaser_photo": "img/rwanda.png"
    },
    
    "Tanzania": {
    "title": "Tanzanian Tea",
    "overview": "Tanzanian tea has a rich history and culture, and a variety of unique tea types. The country's tea culture has been influenced by its indigenous people, German and British colonizers, and Indian immigrants. Today, Tanzanian tea is an important part of the country's economy and cultural heritage.",
    "history": "Tea was introduced to Tanzania in the late 19th century by German and British colonizers, who saw the country's high-altitude regions as ideal for tea cultivation. The industry grew rapidly, and by the mid-20th century, tea had become Tanzania's leading agricultural export. Today, Tanzania is known for its high-quality black teas, which are prized for their strong flavor and aroma.",
    "culture": "Tea drinking is an important part of Tanzanian social culture, with tea traditionally served in a communal setting with milk and sugar. Tanzanian tea culture has been influenced by the country's indigenous people, who have used medicinal plants for centuries, as well as by German and British colonizers and Indian immigrants who brought with them the tradition of tea-drinking. Today, Tanzanian tea culture is a unique blend of indigenous, German, British, and Indian influences.",
    "types": "Tanzania is known for its high-quality black teas, which are grown in the country's high-altitude regions. The most famous Tanzanian tea is the broken orange pekoe (BOP), which is known for its robust flavor and aroma. Tanzania also produces green teas, including gunpowder and jasmine, as well as a variety of herbal infusions, such as chamomile, mint, and lemongrass.",
    "teaser_photo": "img/tanzania.png"
    },
    
    "Burundi": {
    "title": "Burundian Tea",
    "overview": "Burundian tea has a rich history and culture, and a variety of unique tea types. The country's tea culture has been influenced by its indigenous people, Belgian colonizers, and Indian immigrants. Today, Burundian tea is an important part of the country's economy and cultural heritage.",
    "history": "Tea was introduced to Burundi in the early 20th century by Belgian colonizers, who saw the country's high-altitude regions as ideal for tea cultivation. The industry grew rapidly, and by the mid-20th century, tea had become Burundi's leading agricultural export. Today, Burundi is known for its high-quality black teas, which are prized for their strong flavor and aroma.",
    "culture": "Tea drinking is an important part of Burundian social culture, with tea traditionally served in a communal setting with milk and sugar. Burundian tea culture has been influenced by the country's indigenous people, who have used medicinal plants for centuries, as well as by Belgian colonizers and Indian immigrants who brought with them the tradition of tea-drinking. Today, Burundian tea culture is a unique blend of indigenous, Belgian, and Indian influences.",
    "types": "Burundi is known for its high-quality black teas, which are grown in the country's high-altitude regions. The most famous Burundian tea is the broken orange pekoe (BOP), which is known for its robust flavor and aroma. Burundi also produces green teas, including gunpowder and jasmine, as well as a variety of herbal infusions, such as chamomile, mint, and lemongrass.",
    "teaser_photo": "img/burundi.png"
    },
    
    "Georgia": {
    "title": "Georgian Tea",
    "overview": "Georgian tea has a rich history and culture, and a variety of unique tea types. The country's tea culture has been influenced by its indigenous people, Persian and Russian colonizers, and Chinese traders. Today, Georgian tea is an important part of the country's economy and cultural heritage.",
    "history": "Tea was introduced to Georgia in the 19th century by Persian and Russian colonizers, who saw the country's humid climate and fertile soil as ideal for tea cultivation. The industry grew rapidly, and by the mid-20th century, tea had become one of Georgia's leading agricultural exports. Today, Georgia is known for its high-quality black teas, which are prized for their strong flavor and aroma.",
    "culture": "Tea drinking is an important part of Georgian social culture, with tea traditionally served in a communal setting with sugar or honey. Georgian tea culture has been influenced by the country's indigenous people, who have used medicinal plants for centuries, as well as by Persian and Russian colonizers and Chinese traders who brought with them the tradition of tea-drinking. Today, Georgian tea culture is a unique blend of indigenous, Persian, Russian, and Chinese influences.",
    "types": "Georgia is known for its high-quality black teas, which are grown in the country's humid climate and fertile soil. The most famous Georgian tea is the black tea blend known as Georgian Caravan, which is made with black tea, cinnamon, cloves, and other spices. Georgia also produces a variety of herbal infusions, such as chamomile, mint, and rosehip.",
    "teaser_photo": "img/georgia.png"
    },
    
    "India": {
    "title": "Indian Tea",
    "overview": "Indian tea has a long and storied history, with a rich culture and a variety of unique tea types. The country's tea culture has been influenced by its indigenous people, British colonizers, and Chinese traders. Today, Indian tea is one of the country's most important agricultural exports, and a central part of its cultural heritage.",
    "history": "Tea has been grown in India for thousands of years, with references to tea-drinking dating back to ancient texts. However, the modern Indian tea industry was established in the 19th century by British colonizers, who saw the country's climate and soil as ideal for tea cultivation. The industry grew rapidly, and by the mid-20th century, India had become one of the world's leading tea producers. Today, India is known for its high-quality black teas, which are prized for their strong flavor and aroma.",
    "culture": "Tea drinking is an integral part of Indian culture, with tea traditionally served in a communal setting with milk and sugar. Indian tea culture has been influenced by the country's indigenous people, who have used medicinal plants for centuries, as well as by British colonizers and Chinese traders who brought with them the tradition of tea-drinking. Today, Indian tea culture is a unique blend of indigenous, British, and Chinese influences.",
    "types": "India is known for its diverse tea types, including black, green, white, and oolong teas. The most famous Indian tea is Darjeeling, a black tea grown in the Darjeeling district of West Bengal. India also produces a variety of spiced teas, such as masala chai, which is made with black tea, milk, and a blend of spices including cardamom, cinnamon, and ginger.",
    "teaser_photo": "img/india.png"
    },

    "Nepal": {
    "title": "Nepalese Tea",
    "overview": "Nepalese tea has a rich history and culture, and a variety of unique tea types. The country's tea culture has been influenced by its indigenous people, British colonizers, and Chinese traders. Today, Nepalese tea is an important part of the country's economy and cultural heritage.",
    "history": "Tea was introduced to Nepal in the 19th century by British colonizers, who saw the country's high-altitude regions as ideal for tea cultivation. The industry grew rapidly, and by the mid-20th century, tea had become one of Nepal's leading agricultural exports. Today, Nepal is known for its high-quality black teas, which are prized for their strong flavor and aroma.",
    "culture": "Tea drinking is an important part of Nepalese social culture, with tea traditionally served in a communal setting with milk and sugar. Nepalese tea culture has been influenced by the country's indigenous people, who have used medicinal plants for centuries, as well as by British colonizers and Chinese traders who brought with them the tradition of tea-drinking. Today, Nepalese tea culture is a unique blend of indigenous, British, and Chinese influences.",
    "types": "Nepal is known for its high-quality black teas, which are grown in the country's high-altitude regions. The most famous Nepalese tea is the Ilam tea, which is known for its unique floral and fruity flavor. Nepal also produces green teas, white teas, and oolong teas, as well as a variety of herbal infusions, such as chamomile, mint, and lemongrass.",
    "teaser_photo": "img/nepal.png"
    },
    
    "China": {
    "title": "Chinese Tea",
    "overview": "Chinese tea has a long and storied history, with a rich culture and a variety of unique tea types. The country's tea culture has been influenced by its indigenous people, Buddhist monks, and imperial dynasties. Today, Chinese tea is one of the country's most important cultural exports.",
    "history": "Tea has been grown in China for thousands of years, with references to tea-drinking dating back to ancient texts. The tea industry reached its height during the Tang dynasty (618-907 AD), when tea became a symbol of wealth and status. Today, China is known for its high-quality green teas, which are prized for their delicate flavor and aroma.",
    "culture": "Tea drinking is an integral part of Chinese culture, with tea ceremonies and rituals dating back to ancient times. Chinese tea culture has been influenced by Buddhist monks, who introduced the concept of tea as a spiritual practice, as well as by imperial dynasties, who developed elaborate tea ceremonies and rituals. Today, Chinese tea culture is a unique blend of ancient traditions and modern innovations.",
    "types": "China is known for its diverse tea types, including green, black, white, yellow, and oolong teas. The most famous Chinese teas include Longjing (Dragonwell), a green tea from Hangzhou, and Keemun, a black tea from Anhui. China also produces a variety of scented teas, such as jasmine and rose, as well as herbal infusions, such as chrysanthemum and honeysuckle.",
    "teaser_photo": "img/china.png"
    },
    
    "South Korea": {
    "title": "Korean Tea",
    "overview": "Korean tea has a rich history and culture, and a variety of unique tea types. The country's tea culture has been influenced by its indigenous people, Buddhist monks, and Confucian scholars. Today, Korean tea is an important part of the country's cultural heritage.",
    "history": "Tea was introduced to Korea in the 7th century by Buddhist monks, who saw tea as a way to promote meditation and mindfulness. The tea industry grew rapidly during the Joseon dynasty (1392-1910), when tea became an important part of Confucian culture. Today, Korea is known for its high-quality green teas, which are prized for their fresh flavor and aroma.",
    "culture": "Tea drinking is an integral part of Korean culture, with tea ceremonies and rituals playing an important role in traditional Korean life. Korean tea culture has been influenced by Buddhist monks, who introduced the concept of tea as a spiritual practice, as well as by Confucian scholars, who developed elaborate tea ceremonies and rituals. Today, Korean tea culture is a unique blend of ancient traditions and modern innovations.",
    "types": "Korea is known for its high-quality green teas, including Sejak and Jungjak, which are made from young tea leaves and have a fresh, delicate flavor. Korea also produces a variety of herbal infusions, such as omija (five-flavor berry) and yuja (citrus). In addition, Korean tea culture has a unique tradition of roasting tea, which creates a rich, nutty flavor.",
    "teaser_photo": "img/korea.png"
    },
    
    "Japan": {
    "title": "Japanese Tea",
    "overview": "Japanese tea has a long and storied history, with a rich culture and a variety of unique tea types. The country's tea culture has been influenced by its indigenous people, Buddhist monks, and samurai warriors. Today, Japanese tea is one of the country's most important cultural exports.",
    "history": "Tea was introduced to Japan in the 9th century by Buddhist monks, who saw tea as a way to promote meditation and mindfulness. The tea industry reached its height during the Edo period (1603-1868), when tea ceremonies became an important part of samurai culture. Today, Japan is known for its high-quality green teas, which are prized for their fresh, grassy flavor and aroma.",
    "culture": "Tea drinking is an integral part of Japanese culture, with tea ceremonies and rituals playing an important role in traditional Japanese life. Japanese tea culture has been influenced by Buddhist monks, who introduced the concept of tea as a spiritual practice, as well as by samurai warriors, who developed elaborate tea ceremonies and rituals. Today, Japanese tea culture is a unique blend of ancient traditions and modern innovations.",
    "types": "Japan is known for its high-quality green teas, including sencha, gyokuro, and matcha. Sencha is the most popular Japanese tea and has a fresh, grassy flavor. Gyokuro is a premium tea that is shaded before harvesting, giving it a rich, umami flavor. Matcha is a powdered green tea that is used in traditional tea ceremonies. Japan also produces a variety of scented teas, such as jasmine and cherry blossom, as well as herbal infusions, such as roasted barley tea.",
    "teaser_photo": "img/japan.png"
    },
    
    "Vietnam": {
    "title": "Vietnamese Tea",
    "overview": "Vietnamese tea has a rich history and culture, and a variety of unique tea types. The country's tea culture has been influenced by its indigenous people, Chinese traders, and French colonizers. Today, Vietnamese tea is an important part of the country's cultural heritage.",
    "history": "Tea was introduced to Vietnam in the 10th century by Chinese traders, who saw the country's high-altitude regions as ideal for tea cultivation. The industry grew rapidly during the French colonial period (1858-1954), when tea became an important export commodity. Today, Vietnam is known for its high-quality black teas, which are prized for their strong, bold flavor.",
    "culture": "Tea drinking is an important part of Vietnamese social culture, with tea traditionally served in a communal setting with family and friends. Vietnamese tea culture has been influenced by the country's indigenous people, who have used medicinal plants for centuries, as well as by Chinese traders and French colonizers who brought with them the tradition of tea-drinking. Today, Vietnamese tea culture is a unique blend of indigenous, Chinese, and French influences.",
    "types": "Vietnam is known for its high-quality black teas, which are grown in the country's high-altitude regions. The most famous Vietnamese tea is the Imperial Hue Tea, a green tea that has a light and fresh flavor. Vietnam also produces green teas, white teas, and oolong teas, as well as a variety of herbal infusions, such as lotus and ginger.",
    "teaser_photo": "img/vietnam.png"
    },
    
    "Indonesia": {
    "title": "Indonesian Tea",
    "overview": "Indonesian tea has a rich history and culture, and a variety of unique tea types. The country's tea culture has been influenced by its indigenous people, Dutch colonizers, and Chinese traders. Today, Indonesian tea is an important part of the country's cultural heritage.",
    "history": "Tea was introduced to Indonesia in the 17th century by Dutch colonizers, who saw the country's fertile soil as ideal for tea cultivation. The industry grew rapidly during the Dutch colonial period (1816-1949), when tea became an important export commodity. Today, Indonesia is known for its high-quality black teas, which are prized for their rich flavor and aroma.",
    "culture": "Tea drinking is an important part of Indonesian social culture, with tea traditionally served in a communal setting with family and friends. Indonesian tea culture has been influenced by the country's indigenous people, who have used medicinal plants for centuries, as well as by Dutch colonizers and Chinese traders who brought with them the tradition of tea-drinking. Today, Indonesian tea culture is a unique blend of indigenous, Dutch, and Chinese influences.",
    "types": "Indonesia is known for its high-quality black teas, which are grown in the country's fertile soil. The most famous Indonesian tea is the Indonesian black tea, which has a strong, full-bodied flavor. Indonesia also produces green teas, white teas, and oolong teas, as well as a variety of herbal infusions, such as ginger and lemongrass.",
    "teaser_photo": "img/indonesia.png"
    },
    
    "Sri Lanka": {
    "title": "Sri Lankan Tea",
    "overview": "Sri Lankan tea has a rich history and culture, and a variety of unique tea types. The country's tea culture has been influenced by its colonial past, indigenous people, and geographic location. Today, Sri Lankan tea is an important part of the country's economy and cultural heritage.",
    "history": "Tea was introduced to Sri Lanka in the 19th century by British colonizers, who saw the country's high-altitude regions as ideal for tea cultivation. The industry grew rapidly, and by the early 20th century, tea had become one of Sri Lanka's leading agricultural exports. Today, Sri Lanka is the world's fourth-largest tea producer.",
    "culture": "Tea drinking is an important part of Sri Lankan social culture, with tea traditionally served in a communal setting with family and friends. Sri Lankan tea culture has been influenced by the country's colonial past, as well as by its indigenous people, who have used herbal teas for centuries. Today, Sri Lankan tea culture is a unique blend of ancient traditions and modern innovations.",
    "types": "Sri Lanka is known for its high-quality black teas, which are grown in the country's high-altitude regions. The most famous Sri Lankan tea is Ceylon tea, which has a bold, full-bodied flavor. Sri Lanka also produces green teas, white teas, and oolong teas, as well as a variety of herbal infusions, such as cinnamon and cardamom.",
    "teaser_photo": "img/sri_lanka.png"
    },
    
    "New Zealand": {
    "title": "New Zealand Tea",
    "overview": "New Zealand tea has a short but unique history, with a growing tea culture and a variety of unique tea types. The country's tea culture has been influenced by its indigenous Maori people, British settlers, and its geographic location. Today, New Zealand tea is an emerging part of the country's agricultural and cultural heritage.",
    "history": "Tea was first grown in New Zealand in the mid-19th century by British settlers, but the industry never took off due to the country's challenging growing conditions. In recent years, however, tea farming has seen a resurgence, with several small-scale tea farms and producers popping up across the country.",
    "culture": "Tea drinking is an emerging part of New Zealand social culture, with tea traditionally served in a communal setting with family and friends. New Zealand tea culture has been influenced by the country's indigenous Maori people, who have used native plants and herbs in traditional medicine for centuries. Today, New Zealand tea culture is a unique blend of ancient traditions and modern innovations.",
    "types": "New Zealand produces a variety of unique tea types, including green teas, black teas, and herbal infusions made from native plants such as manuka and kawakawa. New Zealand's tea industry is still in its early stages, but it is growing rapidly and gaining recognition for its unique flavors and high quality.",
    "teaser_photo": "img/new_zealand.png"
    },
    
    "Russia": {
    "title": "Russian Tea",
    "overview": "Russian tea has a long and complex history, with a rich culture and a variety of unique tea types. The country's tea culture has been influenced by its geographic location, its imperial past, and its political and social upheavals. Today, Russian tea is an important part of the country's cultural heritage.",
    "history": "Tea was introduced to Russia in the 17th century by Chinese traders, who brought tea to Moscow via the Silk Road. The tea industry grew rapidly during the 18th and 19th centuries, when tea became a symbol of wealth and status among the Russian aristocracy. Today, tea is still an important part of Russian culture, and Russia is one of the world's largest tea consumers.",
    "culture": "Tea drinking is an integral part of Russian social culture, with tea traditionally served in a communal setting with sweets and snacks. Russian tea culture has been influenced by the country's imperial past, as well as by its political and social upheavals, such as the Soviet era. Today, Russian tea culture is a unique blend of ancient traditions and modern innovations.",
    "types": "Russia produces a variety of unique tea types, including black teas, green teas, and herbal infusions, such as Ivan Chai (made from fireweed) and Karkade (made from hibiscus). The most famous Russian tea is the Russian Caravan tea, a black tea blend that has a smoky, robust flavor.",
    "teaser_photo": "img/russia.png"
    },
    
    "Iran": {
    "title": "Iranian Tea",
    "overview": "Iranian tea has a long and rich history, with a unique culture and a variety of tea types. The country's tea culture has been influenced by its geographic location, its ancient Persian heritage, and its Islamic traditions. Today, Iranian tea is an important part of the country's social and cultural life.",
    "history": "Tea was introduced to Iran in the 16th century by Persian traders, who brought tea from China via the Silk Road. The tea industry grew rapidly, and by the 19th century, tea had become an important part of Persian social culture. Today, Iran is known for its high-quality black teas, which are prized for their strong, bold flavor.",
    "culture": "Tea drinking is an integral part of Iranian social culture, with tea traditionally served in a communal setting with sweets and snacks. Iranian tea culture has been influenced by the country's ancient Persian heritage, which placed a high value on hospitality and social interaction, as well as by its Islamic traditions, which prohibit the consumption of alcohol. Today, Iranian tea culture is a unique blend of ancient traditions and modern innovations.",
    "types": "Iran is known for its high-quality black teas, which are grown in the northern regions of the country. The most famous Iranian tea is the Persian tea, which is typically brewed strong and served with sugar cubes. Iran also produces green teas, white teas, and a variety of herbal infusions, such as saffron and mint.",
    "teaser_photo": "img/iran.png"
    },
    
    "Turkey": {
    "title": "Turkish Tea",
    "overview": "Turkish tea has a long and rich history, with a unique culture and a variety of tea types. The country's tea culture has been influenced by its Ottoman past, its geographic location, and its social and economic changes. Today, Turkish tea is an important part of the country's social and cultural life.",
    "history": "Tea was introduced to Turkey in the 19th century by British traders, who saw the country's Black Sea region as ideal for tea cultivation. The tea industry grew rapidly, and by the mid-20th century, tea had become an important part of Turkish social culture. Today, Turkey is one of the world's largest tea consumers.",
    "culture": "Tea drinking is an integral part of Turkish social culture, with tea traditionally served in a communal setting with sweets and snacks. Turkish tea culture has been influenced by the country's Ottoman past, which placed a high value on hospitality and social interaction, as well as by its social and economic changes. Today, Turkish tea culture is a unique blend of ancient traditions and modern innovations.",
    "types": "Turkey is known for its strong, black teas, which are typically brewed strong and served in small glasses. The most famous Turkish tea is the Turkish çay, which is typically brewed in a special double teapot and served with sugar cubes. Turkey also produces green teas, white teas, and a variety of herbal infusions, such as apple and rosehip.",
    "teaser_photo": "img/turkey.png"
    }
}

var points = [    
  ["Brazil", -15.67, -47.43],
  ["Colombia", 4.61, -74.08],
  ["Argentina", -34.61, -58.38],
  ["South Africa", -25.73, 28.22],
  ["Kenya", -1.28, 36.81],
  ["Rwanda", -1.95, 30.06],
  ["Tanzania", -6.17, 35.74],
  ["Burundi", -3.38, 29.36],
  ["Georgia", 41.71, 44.79],
  ["India", 20.59, 78.96],
  ["Nepal", 28.39, 84.12],
  ["China", 35.86, 104.16],
  ["South Korea", 37.57, 126.98],
  ["Japan", 35.68, 139.76],
  ["Vietnam", 21.03, 105.85],
  ["Indonesia", -6.21, 106.85],
  ["Sri Lanka", 6.93, 79.85],
  ["New Zealand", -41.29, 174.78],
  ["Russia", 55.75, 37.62],
  ["Iran", 35.69, 51.39],
  ["Turkey", 39.93, 32.86]
];

var greenIcon = new L.icon({
  iconUrl: 'https://github.com/angelajiaqichen/Tea/blob/main/img/roundicon3.png?raw=true',
  // shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [20, 20],
  // iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  // shadowSize: [41, 41]
});

// create an empty layer group
var markers = L.layerGroup().addTo(map);

var selectedCity = undefined;


for (var i = 0; i < points.length; i++) { // create each location marker
  let name = points[i][0]
  let p = L.marker([points[i][1], points[i][2]], {icon: greenIcon}).bindPopup(name)
  p.addTo(map);
  p.addEventListener('click', () => _markerOnClick(name))
}


// // add a click event listener to the markers
// REFERENCE: http://jsfiddle.net/ve2huzxw/74/, 
// https://gis.stackexchange.com/questions/172508/add-an-event-listener-on-a-marker-in-leaflet
// https://tomickigrzegorz.github.io/leaflet-examples/#05.coordinates-after-clicking-on-the-map

function _markerOnClick(title) {
  console.log("Clicked on marker ", title);
  selectedCity = title

  // updatedata()

  // access city info in dict
  const myInfo = cityInfo[title]

  console.log(myInfo)
  document.getElementById("info_detail").innerHTML = myInfo.overview;
}


// // Add a GeoJSON layer to the map
// const geojsonLayer = L.geoJSON(worldGeoJSON).addTo(map);

// // Add a click event listener to the GeoJSON layer
// geojsonLayer.on("click", function (e) {
//   const name = e.layer.feature.properties.name;
//   document.getElementById("info").innerHTML = "<h2>" + name + "</h2>";
// });

// // Load the world GeoJSON data
// fetch("world-110m.geojson")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     // Add the GeoJSON data to the GeoJSON layer
//     geojsonLayer.addData(data);
//   });
