// to top
window.addEventListener('scroll', function(){
    var scroll = document.querySelector('.up');
    scroll.classList.toggle("active", window.scrollY > window.innerHeight)
})
function totop(){
    window.scrollTo({
        top: 0
    })
}


function imclk(sc){
    window.open(document.getElementById(sc).src, '_blank');
}
function getquote(quote){
    window.open(`book.html?name=${document.getElementById(quote).textContent.split(" ").join("+")}`, '_self');
}

// main func
window.addEventListener('load' , () => {
    const params = (new URL(document.location)).searchParams;
    const topic = params.get('topic');
    if (topic == 'living-room'){
        document.getElementById('head-title').textContent = "LIVING ROOM INTERIOR";
        document.getElementById('title').textContent = "First impressions matter, and as the first space visitors encounter, your living room should make a memorable impact. Discover our curated collection of living room designs for innovative ideas and fresh inspiration...";
        document.getElementById('bnr').style['background-image'] = "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url('source/show-background-living-room.jpg')";
        const namelist = ["", "Luxury Room Design with False Ceiling & Wooden Flooring", "Elegant Living Room with Modern Lighting and Textured Wall Panels", "Stylish Living Room with Accent Wall and Illuminated Display Shelves", "Spacious Living Room with Elegant Drapery and Modern Chandelier", "Luxurious Entryway with Marble Accent Wall and Crystal Chandelier", "Modern Display Cabinet with Glass Doors and Sleek Sliding Partition", "Living Room with Elegant Lighting and Classic Wooden Furniture", "Spacious Room with Large Windows and Hardwood Flooring", "Contemporary Living Room with Floor-to-Ceiling Windows", "Living Room with Minimalist Decor and Natural Light"];
//        const prilist = ["", "243,965", "86,039", "154,371", "132,935", "114,997", "129,919", "101,274", "141,298", "148,505", "56,137"];
        for (let i = 1; i < 11; i++) {
            document.getElementById(`ima${i}`).src = `source/Hall/${i}.jpeg`;
            document.getElementById(`hed${i}`).textContent = `${namelist[i]}`; 
//            document.getElementById(`pri${i}`).textContent = `₹${prilist[i]}`;
        }
    }
    else if (topic == 'kitchen'){
        document.getElementById('head-title').textContent = "KITCHEN INTERIOR";
        document.getElementById('title').textContent = "The most frequented area of your home, the kitchen, should be functional, convenient and easy to use. Our modular kitchen solutions can be customised based on layouts, colours, finishes, accessories and more. Get inspired by our stunning kitchen designs (some with price included).";
        document.getElementById('bnr').style['background-image'] = "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url('source/show-background-kitchen.jpg')";
        const namelist = ["", "Modern Kitchen with Glossy Black Cabinets and Marble Backsplash", "Spacious Modern Kitchen with Elegant Lighting and Floor-to-Ceiling Cabinets", "Compact Modern Kitchen with Sleek Cabinetry and Marble Accents", "Contemporary Kitchen with Dark Glass Cabinets and Marble Backsplash", "Modern Kitchen Corner with Glossy Cabinets and Integrated Storage Solutions", "Contemporary Kitchen with Open Shelving and Sleek Cabinetry", "Modern Kitchen with High-Gloss Cabinets and Integrated Appliances", "Bright Kitchen with Pastel Blue Cabinets and Tiled Backsplash", "Small Dining Room With Yellow Chairs", "Royal Regale Dining Room"];
//        const namelist = ["", "Modern-style Budget L-shaped Modular Kitchen", "L-Shaped Modular Kitchen", "U-Shaped Modular Kitchen", "Multi-Functional Kitchen", "Modern Parallel Kitchen", "Monochromatic Modern Kitchen", "Red U-Shaped Kitchen", "Navy Blue Modular Kitchen", "Luxury Peninsula Kitchen", "Powder Blue Modern Kitchen"];
//        const prilist = ["", "395,792", "393,808", "548,543", "418,989", "746,529", "877,211", "747,727", "687,048", "634,685", "902,661"];
        for (let i = 1; i < 11; i++) {
             document.getElementById(`ima${i}`).src = `source/Kitchen/${i}.jpeg`;
             document.getElementById(`hed${i}`).textContent = `${namelist[i]}`;
//            document.getElementById(`pri${i}`).textContent = `₹${prilist[i]}`;
        }
    }
    else if (topic == 'master-bedroom'){
        document.getElementById('head-title').textContent = "WARDROBE";
        document.getElementById('title').textContent = "Looking for design ideas for your bedroom wardrobe? You've come to the right place! Our wardrobe designs are a cut above the rest as we ensure the perfect combination of beauty and functionality. Check out these inspiring design ideas.";
        document.getElementById('bnr').style['background-image'] = "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url('source/show-master-bedroom.jpg')";
        const namelist = ["", "Modern Wardrobe With Arched Panels And Floating Study Desk", "Modern Entryway Design", "Luxury Walk-In Closet with Elegant Lighting", "Modern Minimalist Wardrobe with Vanity Mirror", "Opulent Walk-in Closet Featuring Mirror Finish and Sophisticated Storage Solutions for a Lavish Lifestyle", "Elegant Contemporary Entryway with Padded Seating and Vertical Paneling Design", "Luxurious Walk-in Closet with Gold-Tinted Glass Doors and Elegant Storage Solutions for a Sophisticated Wardrobe Display", "Modern Sophisticated Wardrobe with Dark Paneled Doors and Gold-Framed Glass Display for Elegant Storage", "Minimalist Bedroom Setup with Sleek Dresser and Mounted Television for a Clean and Modern Aesthetic", "Elegant Built-in Wardrobe with Classic Paneling and Brass Handles in a Bright, Sunlit Room"];
//        const prilist = ["", "182,189", "181,765", "172,966", "199,241", "162,732", "258,580", "92,002", "241,856", "142,087", "198,819"];
        for (let i = 1; i < 11; i++) {
            document.getElementById(`ima${i}`).src = `source/Bedroom/master-bedroom${i}.jpg`;
            document.getElementById(`hed${i}`).textContent = `${namelist[i]}`; 
//            document.getElementById(`pri${i}`).textContent = `₹${prilist[i]}`;
        }
    }
//    else if (topic == 'dining-room'){
//        document.getElementById('head-title').textContent = "KITCHEN INTERIOR";
//        document.getElementById('title').textContent = "Your kitchen deserves a touch of care and attention! Whether you prefer a minimalist style or a more glamorous aesthetic, we can help you achieve the look you envision. Here’s some design inspiration to elevate your kitchen area.";
//        document.getElementById('bnr').style['background-image'] = "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url('source/Kitchen/2.jpeg')";
//        const namelist = ["", "Modern Kitchen with Glossy Black Cabinets and Marble Backsplash", "Spacious Modern Kitchen with Elegant Lighting and Floor-to-Ceiling Cabinets", "Compact Modern Kitchen with Sleek Cabinetry and Marble Accents", "Contemporary Kitchen with Dark Glass Cabinets and Marble Backsplash", "Modern Kitchen Corner with Glossy Cabinets and Integrated Storage Solutions", "Contemporary Kitchen with Open Shelving and Sleek Cabinetry", "Modern Kitchen with High-Gloss Cabinets and Integrated Appliances", "Bright Kitchen with Pastel Blue Cabinets and Tiled Backsplash", "Small Dining Room With Yellow Chairs", "Royal Regale Dining Room"];
////        const prilist = ["", "102,957", "221,426", "149,308", "170,556", "418,052", "122,025", "166,931", "183,741", "223,333", "574,642"];
//        for (let i = 1; i < 11; i++) {
//            document.getElementById(`ima${i}`).src = `source/Kitchen/${i}.jpeg`;
//            document.getElementById(`hed${i}`).textContent = `${namelist[i]}`;
////            document.getElementById(`pri${i}`).textContent = `₹${prilist[i]}`;
//        }
//    }
//    else if (topic == 'kids-bedroom'){
//        document.getElementById('head-title').textContent = "KID'S BEDROOM INTERIOR";
//        document.getElementById('title').textContent = "Fun, cute, quirky—your little one's room should be all this, without compromising on safety, space and storage. Get inspired by our kid's bedroom designs.";
//        document.getElementById('bnr').style['background-image'] = "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url('source/show-background-kids-bedroom.jpg')";
//        const namelist = ["", "Kid's Room For Teenage Girl", "Simple Kid's Room With Accent Wall With Sea And CoralSshades", "Small Kid's Room With Huge Storage For Stationary And Toys", "Spacious Kid's Room With Yellow Colour Tones", "Canary Kids Bedroom Interior Design", "Kid's Room With Blue And Yellow Hues", "Navy Kids Bedroom Interior Design", "Artistic Kids Bedroom Interior Design", "Dignified Kids Bedroom Interior Design", "Atmospheric Kids Bedroom Interior Design"];
////        const prilist = ["", "335,893", "424,124", "222,884", "298,468", "136,845", "86,771", "56,843", "49,652", "59,648", "75,462"];
//        for (let i = 1; i < 11; i++) {
//            document.getElementById(`ima${i}`).src = `source/kids-bedroom${i}.jpg`;
//            document.getElementById(`hed${i}`).textContent = `${namelist[i]}`;
////            document.getElementById(`pri${i}`).textContent = `₹${prilist[i]}`;
//        }
//    }
    else if (topic == 'bathroom'){
        document.getElementById('head-title').textContent = "BATHROOM INTERIOR";
        document.getElementById('title').textContent = "Are you envisioning a spa-inspired bathroom like those in luxury hotels? Let us help you bring that vision to life! Explore our exquisite bathroom designs for inspiration.";
        document.getElementById('bnr').style['background-image'] = "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url('source/show-background-bathroom.jpg')";
        const namelist = ["", "Luxurious Marble Bathroom with Illuminated Mirror and Modern Fixtures", "Elegant Bathroom with Black Marble Accents and Gold Fixtures", "Modern Bathroom with Textured Gray Tile and Glass Shower Enclosure", "Industrial-Style Bathroom with Grid Glass Shower and Sleek Vanity", "Bathroom with Subway Tile Walls and Patterned Floor Tiles", "Minimalist Bathroom with Honeycomb Tile and Floating Vanity", "Contemporary Bathroom with Textured Walls and Wooden Accents", "Modern Bathroom with Freestanding Tub and Bold Blue Vanity", "Sleek Bathroom with Gray Tile and Minimalist Vanity Design", "Contemporary Bathroom with Monochrome Tile and Circular Mirror"];
//        const prilist = ["", "69,652", "78,553", "74,525", "46,724", "58,642", "64,298", "245,682", "75,688", "95,426", "86,462"];
        for (let i = 1; i < 11; i++) {
            document.getElementById(`ima${i}`).src = `source/Bathroom/${i}.jpg`;
            document.getElementById(`hed${i}`).textContent = `${namelist[i]}`; 
//            document.getElementById(`pri${i}`).textContent = `₹${prilist[i]}`;
        }
    }
//    else if (topic == 'wardrobe'){
//        document.getElementById('head-title').textContent = "WARDROBE INTERIOR";
//        document.getElementById('title').textContent = "No matter how big or small your home is, you can never have enough of wardrobes and storage. Our modular wardrobes are available in a variety of sizes, materials and finishes—to suit your tastes and budget. Browse through our storage solutions.";
//        document.getElementById('bnr').style['background-image'] = "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url('source/show-background-wardrobe.jpg')";
//        const namelist = ["", "Mirrored Wardrobe With Storage Lofts", "Large Wooden Wardrobe With Glossy Finish", "Sliding Wardrobe With Small Seating Pocket", "Modern Sleek Wardrobe For A Compact Layout", "Swing And Sliding Wardrobe With Monochromatic Palette", "Fully Loaded Wardrobe With Dresser And Loft", "Full Height Wardrobe With Seemless Shutters", "Classic Style Wardrobe With White Tones", "Sleek Wardrobe With Long Handles", "Functional Wardrobe With Glossy Touch and Base Storage"];
////        const prilist = ["", "228,866", "254,723", "347,399", "194,164", "300,397", "311,533", "81,221", "121,244", "227,555", "181,631"];
//        for (let i = 1; i < 11; i++) {
//            document.getElementById(`ima${i}`).src = `source/wardrobe${i}.jpg`;
//            document.getElementById(`hed${i}`).textContent = `${namelist[i]}`;
////            document.getElementById(`pri${i}`).textContent = `₹${prilist[i]}`;
//        }
//    }
//    else if (topic == 'pooja-room'){
//        document.getElementById('head-title').textContent = "POOJA ROOM INTERIOR";
//        document.getElementById('title').textContent = "Your pooja room is the place that fills your home with spirituality and purity. Whether you want to design it traditionally as per vastu or give it a modern touch, we're here to help you. Here are a few pooja room designs to inspire you.";
//        document.getElementById('bnr').style['background-image'] = "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url('source/show-background-pooja-room.jpg')";
//        const namelist = ["", "Contemporary, Multi-Functional Pooja Space", "Unique Contemporary Pooja Room", "Premium Pooja Room with Natural Lighting", "Classic Open Pooja Area", "Contemporary Pooja Room", "Classic Golden Pooja Room", "Traditional Pooja Room", "Pooja Room With Gold Leaf Walls", "Pooja Room With Blue Wall", "Unique Wooden Pooja Room"];
////        const prilist = ["", "228,866", "254,723", "347,399", "194,164", "300,397", "311,533", "81,221", "121,244", "227,555", "181,631"];
//        for (let i = 1; i < 11; i++) {
//            document.getElementById(`ima${i}`).src = `source/pooja-room${i}.jpg`;
//            document.getElementById(`hed${i}`).textContent = `${namelist[i]}`;
////            document.getElementById(`pri${i}`).textContent = `₹${prilist[i]}`;
//        }
//    }
})