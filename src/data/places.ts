import type { Place } from "./types";

type Seed = Omit<Place, "image" | "demo" | "description"> & { description: string[] };

/**
 * DEMONSTRATION CONTENT. Architects, dates and locations are included for realism
 * but have not been verified by ATLAST editors. Opening hours and prices are
 * intentionally omitted: confirm with the venue before visiting.
 * Drop photographs into public/images/places/<slug>.jpg to replace placeholders.
 */
const seeds: Seed[] = [
  // ───────── London
  {
    slug: "barbican-estate", name: "Barbican Estate", category: "architecture", destination: "london",
    coordinates: [-0.0939, 51.52], address: "Silk Street, London EC2Y",
    architect: "Chamberlin, Powell and Bon", year: "1960s–1980s",
    summary: "A residential and cultural complex of raised walkways, lakes and board-marked concrete.",
    description: [
      "The Barbican is an argument for the city as a connected, walkable landscape. Towers, terraces and an arts centre are stitched together by elevated paths above the traffic.",
      "Its concrete is textured by hand, and the water gardens soften it. Go for the lakeside terrace, and look for the conservatory inside the arts centre.",
    ],
    visit: { access: "varies", note: "The estate is a residential neighbourhood. The arts centre and public terraces are open to visitors; check the Barbican Centre for current times." },
    tags: ["Brutalism", "Housing", "Concrete"],
  },
  {
    slug: "isokon-building", name: "Isokon Building", category: "architecture", destination: "london",
    coordinates: [-0.1647, 51.5497], address: "Lawn Road, Hampstead, London NW3",
    architect: "Wells Coates", year: "1934",
    summary: "An early British Modernist block of compact flats, built around shared living.",
    description: [
      "Lawn Road Flats was conceived as a prototype for efficient, communal urban living, with small apartments and shared services.",
      "It is a good place to see how Modernist ideas arrived in London, in white render and long balconies. It is best appreciated from the street.",
    ],
    visit: { access: "exterior", note: "A residential building, viewed from the street. Occasional open days are announced by its owners." },
    tags: ["Modernism", "Housing", "1930s"],
  },
  {
    slug: "alexandra-road-estate", name: "Alexandra Road Estate", category: "architecture", destination: "london",
    coordinates: [-0.1745, 51.5412], address: "Rowley Way, London NW8",
    architect: "Neave Brown (Camden Architects Department)", year: "1978",
    summary: "A long terraced street of stepped concrete housing, designed around a pedestrian spine.",
    description: [
      "A single curving terrace of stepped maisonettes turns its back to a railway line and opens onto a quiet pedestrian street.",
      "It is one of the most ambitious public housing schemes in the country, and still lived in. Walk Rowley Way and respect the residents.",
    ],
    visit: { access: "exterior", note: "Public walkways can be entered on foot. This is a home for many people: keep noise and photography considerate." },
    tags: ["Social housing", "Concrete", "1970s"],
  },
  {
    slug: "tate-modern", name: "Tate Modern", category: "art", destination: "london",
    coordinates: [-0.0994, 51.5076], address: "Bankside, London SE1",
    architect: "Herzog & de Meuron (conversion of Giles Gilbert Scott's power station)", year: "2000",
    summary: "A former power station turned into a gallery, with a vast turbine hall as its public room.",
    description: [
      "The conversion kept the brick mass and the chimney, and used the turbine hall as a civic interior rather than hiding it.",
      "The newer extension adds a viewing level over the river and the city, worth the short climb.",
    ],
    visit: { access: "open", note: "Many areas are free to enter; some exhibitions are ticketed. Check the gallery for current information." },
    tags: ["Adaptive reuse", "Gallery", "Brick"],
  },
  {
    slug: "sir-john-soanes-museum", name: "Sir John Soane's Museum", category: "landmarks", destination: "london",
    coordinates: [-0.1176, 51.5168], address: "13 Lincoln's Inn Fields, London WC2A",
    architect: "Sir John Soane", year: "Late 18th–early 19th century",
    summary: "An architect's own house, arranged as a collection and a study in light.",
    description: [
      "Soane remodelled his home as a working laboratory for his ideas: top-lit rooms, mirrors, and a dense display of casts and antiquities.",
      "Rooms nest inside rooms and daylight arrives from unexpected directions. It is small and quietly overwhelming.",
    ],
    visit: { access: "varies", note: "Visitor numbers are limited. Check opening days and any booking requirement before you go." },
    tags: ["Georgian", "Museum house", "Light"],
  },
  {
    slug: "the-wolseley", name: "The Wolseley", category: "cafes", destination: "london",
    coordinates: [-0.1415, 51.5075], address: "160 Piccadilly, London W1J",
    architect: "William Curtis Green", year: "1921",
    summary: "A grand all-day café-restaurant in a former car showroom.",
    description: [
      "Built for a motor company, the building keeps its high arched interior and a mix of Italian and Eastern references.",
      "It works as a breakfast room or a long lunch. Bring a book and arrive at an off-peak hour.",
    ],
    visit: { access: "varies", note: "A commercial restaurant; booking is advisable at busy times." },
    tags: ["Interwar", "Interior", "Café"],
  },
  {
    slug: "american-bar-savoy", name: "The American Bar, The Savoy", category: "bars", destination: "london",
    coordinates: [-0.1203, 51.51], address: "The Strand, London WC2R",
    architect: "Hotel interiors of the Art Deco period", year: "1890s origins",
    summary: "A long-established hotel bar with an Art Deco character.",
    description: [
      "A bar that leans on atmosphere: warm light, polished wood and a quiet, assured service.",
      "A useful reminder that nightlife can be an architectural experience as well as a social one.",
    ],
    visit: { access: "varies", note: "A hotel bar. Smart casual dress is likely; confirm before visiting." },
    tags: ["Art Deco", "Hotel bar"],
  },

  // ───────── Copenhagen
  {
    slug: "black-diamond", name: "The Black Diamond", category: "architecture", destination: "copenhagen",
    coordinates: [12.5848, 55.6732], address: "Søren Kierkegaards Plads 1, Copenhagen",
    architect: "Schmidt Hammer Lassen", year: "1999",
    summary: "The Royal Library extension, a faceted black granite and glass volume on the harbour.",
    description: [
      "A dark, tilted form leans over the water, and its atrium opens up inside as a public concourse with escalators and bridges.",
      "Walk through the building to the original library and its garden for a view of two eras side by side.",
    ],
    visit: { access: "open", note: "Public areas are generally open; some floors have reading-room rules." },
    tags: ["Library", "Waterfront", "Granite"],
  },
  {
    slug: "blox-dac", name: "BLOX (Danish Architecture Centre)", category: "architecture", destination: "copenhagen",
    coordinates: [12.5777, 55.6724], address: "Bryghuspladsen 10, Copenhagen",
    architect: "OMA", year: "2018",
    summary: "A stacked glass building on the harbour that houses the national architecture centre.",
    description: [
      "BLOX stacks volumes over a public passage, so a pedestrian route and a bicycle path run beneath the building.",
      "The exhibitions are useful context for the city, and the waterfront outside is the better reason to linger.",
    ],
    visit: { access: "varies", note: "Exhibitions are ticketed; the surrounding public space is open." },
    tags: ["OMA", "Exhibition", "Harbour"],
  },
  {
    slug: "designmuseum-danmark", name: "Designmuseum Danmark", category: "design", destination: "copenhagen",
    coordinates: [12.5906, 55.6905], address: "Bredgade 68, Copenhagen",
    architect: "Rococo hospital building, adapted by Kaare Klint", year: "18th century; museum from 1920s",
    summary: "The national design museum, set in a former hospital around a quiet courtyard.",
    description: [
      "A good place to understand Danish chairs, ceramics and textiles in sequence, in a calm, domestic-scale building.",
      "The courtyard is open to those who simply want a quiet sit.",
    ],
    visit: { access: "ticketed", note: "Check the museum for current hours and any café access." },
    tags: ["Chairs", "Museum", "Courtyard"],
  },
  {
    slug: "radisson-royal-room-606", name: "Radisson Royal Hotel & Room 606", category: "hotels", destination: "copenhagen",
    coordinates: [12.5636, 55.6757], address: "Hammerichsgade 1, Copenhagen",
    architect: "Arne Jacobsen", year: "1960",
    summary: "Arne Jacobsen's hotel, with one room preserved in its original design.",
    description: [
      "Jacobsen designed the building, its interiors, and much of the furniture, including chairs that became widely known.",
      "One preserved room offers a look at the complete design. Access is subject to availability and the hotel's discretion.",
    ],
    visit: { access: "private", note: "A working hotel. Contact the hotel to ask about visiting the preserved room." },
    tags: ["Arne Jacobsen", "Hotel", "1960s"],
  },
  {
    slug: "superkilen", name: "Superkilen", category: "hidden", destination: "copenhagen",
    coordinates: [12.5453, 55.7002], address: "Nørrebrogade, Copenhagen",
    architect: "BIG, Topotek1 and Superflex", year: "2012",
    summary: "A long urban park of objects collected from many countries, in red, black and green.",
    description: [
      "Benches, lamp posts and signs from around the world are placed across brightly coloured surfaces to reflect the neighbourhood's makeup.",
      "It is a public space in daily use. Go on a weekday afternoon and see how people have claimed it.",
    ],
    visit: { access: "open", note: "A public park, open at all times." },
    tags: ["Public space", "Colour", "Nørrebro"],
  },
  {
    slug: "louisiana-museum", name: "Louisiana Museum of Modern Art", category: "art", destination: "copenhagen",
    coordinates: [12.5412, 55.97], address: "Gl Strandvej 13, Humlebæk",
    architect: "Jørgen Bo and Vilhelm Wohlert", year: "1958",
    summary: "A low, linked museum between a villa, a garden and the sea.",
    description: [
      "Corridors and galleries step through a landscape with sculpture and views to the water, in a human-scaled sequence of rooms.",
      "A short train ride north of Copenhagen, it makes a natural half-day.",
    ],
    visit: { access: "ticketed", note: "About 35 km north of the city. Check the museum for hours and tickets." },
    tags: ["Museum", "Landscape", "1950s"],
  },

  // ───────── Milan
  {
    slug: "torre-velasca", name: "Torre Velasca", category: "architecture", destination: "milan",
    coordinates: [9.1913, 45.4598], address: "Piazza Velasca, Milan",
    architect: "BBPR", year: "1958",
    summary: "A postwar tower whose upper floors flare outwards, recalling a medieval fortification.",
    description: [
      "The top-heavy profile was a deliberate dialogue with Milan's historic towers, and it divides opinion still.",
      "Best seen from the cathedral roof or from the surrounding streets.",
    ],
    visit: { access: "exterior", note: "Mixed residential and office use. Viewed from the street." },
    tags: ["Postwar", "Tower", "BBPR"],
  },
  {
    slug: "fondazione-prada", name: "Fondazione Prada", category: "art", destination: "milan",
    coordinates: [9.204, 45.4447], address: "Largo Isarco 2, Milan",
    architect: "OMA (Rem Koolhaas)", year: "2015",
    summary: "A former distillery turned into an art complex, with new volumes added among the old.",
    description: [
      "Historic sheds sit beside new towers and a gilded building, so renovation and addition are almost indistinguishable.",
      "The campus includes a bar designed with a film-set sensibility. Allow a half-day.",
    ],
    visit: { access: "ticketed", note: "Check the foundation for current exhibitions and hours." },
    tags: ["OMA", "Adaptive reuse", "Art"],
  },
  {
    slug: "pirelli-tower", name: "Pirelli Tower", category: "architecture", destination: "milan",
    coordinates: [9.2, 45.485], address: "Piazza Duca d'Aosta, Milan",
    architect: "Gio Ponti, with Pier Luigi Nervi and others", year: "1960",
    summary: "A slim, faceted skyscraper beside the central station, and a symbol of postwar Milan.",
    description: [
      "Its tapered ends give the tower a slender profile, and its proportions are among the most admired of the period.",
      "Seen from the station forecourt, it frames Milan's ambition at mid-century.",
    ],
    visit: { access: "exterior", note: "Regional government offices. Viewed from the street." },
    tags: ["Gio Ponti", "Skyscraper", "Postwar"],
  },
  {
    slug: "triennale-milano", name: "Triennale Milano", category: "design", destination: "milan",
    coordinates: [9.173, 45.4724], address: "Viale Emilio Alemagna 6, Milan",
    architect: "Giovanni Muzio", year: "1933",
    summary: "A centre for design and architecture exhibitions in Parco Sempione.",
    description: [
      "The Triennale has been central to Italian design for generations, with a programme of exhibitions and a design museum.",
      "The garden and terrace are pleasant places to pause.",
    ],
    visit: { access: "ticketed", note: "Exhibitions are ticketed; check the Triennale for current hours." },
    tags: ["Design museum", "1930s", "Exhibitions"],
  },
  {
    slug: "villa-necchi-campiglio", name: "Villa Necchi Campiglio", category: "hidden", destination: "milan",
    coordinates: [9.2, 45.4725], address: "Via Mozart 14, Milan",
    architect: "Piero Portaluppi", year: "1930s",
    summary: "A rationalist private villa with a garden and pool, preserved as a house museum.",
    description: [
      "Streamlined interiors with period furniture offer a view of how Milan's wealthy families lived in the interwar years.",
      "It is a small, rewarding visit, tucked among quiet streets.",
    ],
    visit: { access: "ticketed", note: "Limited opening; confirm days and hours in advance." },
    tags: ["Rationalism", "House museum", "Garden"],
  },
  {
    slug: "camparino-in-galleria", name: "Camparino in Galleria", category: "bars", destination: "milan",
    coordinates: [9.19, 45.4656], address: "Galleria Vittorio Emanuele II, Milan",
    architect: "Setting: Giuseppe Mengoni's Galleria", year: "Bar from 1915",
    summary: "A historic aperitivo bar at the entrance to the Galleria.",
    description: [
      "An institution of the Milanese aperitivo, set under the glass roof of one of Europe's best-known arcades.",
      "Standing at the bar is part of the experience. Go early evening.",
    ],
    visit: { access: "varies", note: "A commercial bar. Table service and standing prices may differ." },
    tags: ["Aperitivo", "Galleria", "Café-bar"],
  },

  // ───────── Tokyo
  {
    slug: "nezu-museum", name: "Nezu Museum", category: "art", destination: "tokyo",
    coordinates: [139.7189, 35.6622], address: "6-5-1 Minami-Aoyama, Minato, Tokyo",
    architect: "Kengo Kuma", year: "2009 (rebuild)",
    summary: "A museum of East Asian art with a deep eaves entrance and a garden behind.",
    description: [
      "A long approach under a layered roof prepares you for the quiet galleries inside.",
      "The garden is part of the visit, and the café overlooks it.",
    ],
    visit: { access: "ticketed", note: "Check the museum for hours, closing days and ticket rules." },
    tags: ["Kengo Kuma", "Garden", "Museum"],
  },
  {
    slug: "st-marys-cathedral", name: "St Mary's Cathedral", category: "architecture", destination: "tokyo",
    coordinates: [139.7227, 35.7172], address: "3-16-15 Sekiguchi, Bunkyo, Tokyo",
    architect: "Kenzo Tange", year: "1964",
    summary: "A concrete cathedral clad in steel, with a soaring, light-filled interior.",
    description: [
      "Hyperbolic paraboloid shells rise to a cross of light, and the sense of height inside is remarkable.",
      "A place of worship first: respect services and be quiet.",
    ],
    visit: { access: "open", note: "Visitors are welcome outside services; check times." },
    tags: ["Kenzo Tange", "Concrete", "Church"],
  },
  {
    slug: "teien-art-museum", name: "Tokyo Metropolitan Teien Art Museum", category: "design", destination: "tokyo",
    coordinates: [139.7168, 35.6376], address: "5-21-9 Shirokanedai, Minato, Tokyo",
    architect: "Henri Rapin (interiors); Yuzuru Usui (architect)", year: "1933",
    summary: "An Art Deco residence turned museum, with preserved interiors and a garden.",
    description: [
      "A rare survivor of the 1930s in Tokyo, with French-designed interiors that rarely feature on typical itineraries.",
      "Pair it with the surrounding gardens, and the museum's changing exhibitions.",
    ],
    visit: { access: "ticketed", note: "Check for closure periods between exhibitions." },
    tags: ["Art Deco", "House museum", "Garden"],
  },
  {
    slug: "park-hyatt-tokyo", name: "Park Hyatt Tokyo", category: "hotels", destination: "tokyo",
    coordinates: [139.6911, 35.6857], address: "3-7-1-2 Nishi-Shinjuku, Tokyo",
    architect: "Kenzo Tange Associates", year: "1994",
    summary: "A hotel in the upper floors of a Shinjuku tower, with a calm, residential interior.",
    description: [
      "The hotel sits high above the city, and its public floors favour dark wood, stone and a sense of hush.",
      "Even if you aren't staying, the setting is a useful lesson in how to separate calm from city.",
    ],
    visit: { access: "varies", note: "A working hotel. Confirm access to restaurants and lounges." },
    tags: ["Kenzo Tange", "Hotel", "Skyscraper"],
  },
  {
    slug: "cafe-de-lambre", name: "Café de L'Ambre", category: "cafes", destination: "tokyo",
    coordinates: [139.764, 35.6706], address: "Ginza, Tokyo",
    architect: "Interior of a long-running coffee house", year: "Café from 1948",
    summary: "A Ginza coffee house devoted to aged beans and a slow, methodical pour.",
    description: [
      "A small, dark room of wood and counter-seating, where the craft of coffee is the point.",
      "A good example of the Tokyo kissaten, in which the whole room is calibrated for one activity.",
    ],
    visit: { access: "varies", note: "A small café. Expect to wait at busy times; confirm location and hours." },
    tags: ["Kissaten", "Coffee", "Ginza"],
  },
  {
    slug: "golden-gai", name: "Golden Gai", category: "bars", destination: "tokyo",
    coordinates: [139.704, 35.6942], address: "Kabukicho, Shinjuku, Tokyo",
    architect: "Vernacular post-war alleys", year: "Postwar",
    summary: "A network of tiny alley bars, each seating only a handful of people.",
    description: [
      "Narrow lanes and stairs lead to bars barely larger than a counter. Each has its own character and house rules.",
      "Pick one, sit, and stay a while. Some places charge a cover or favour regulars.",
    ],
    visit: { access: "varies", note: "Evening only. Bars set their own entry rules; some do not admit visitors." },
    tags: ["Nightlife", "Alleys", "Small rooms"],
  },

  // ───────── Barcelona
  {
    slug: "casa-batllo", name: "Casa Batlló", category: "architecture", destination: "barcelona",
    coordinates: [2.1649, 41.3917], address: "Passeig de Gràcia 43, Barcelona",
    architect: "Antoni Gaudí", year: "1904–1906",
    summary: "A remodelled house on Passeig de Gràcia, with a skeletal façade and a sculpted light well.",
    description: [
      "Gaudí rebuilt the facade and interior of an existing building, using ceramic, glass and flowing form.",
      "The light well is the real subject: blue tile that grades in tone to even out the daylight.",
    ],
    visit: { access: "ticketed", note: "Very popular; book ahead and expect queues at peak times." },
    tags: ["Gaudí", "Modernisme", "Ceramic"],
  },
  {
    slug: "barcelona-pavilion", name: "Barcelona Pavilion", category: "architecture", destination: "barcelona",
    coordinates: [2.1498, 41.3711], address: "Av. de Francesc Ferrer i Guàrdia 7, Barcelona",
    architect: "Ludwig Mies van der Rohe (reconstruction 1986)", year: "1929; rebuilt 1986",
    summary: "A reduced composition of planes, stone and glass, and a reference point for modern architecture.",
    description: [
      "Built for the 1929 International Exposition, demolished, and rebuilt in the 1980s from drawings and photographs.",
      "Walk through slowly. Material, reflection and flow of space do all the work.",
    ],
    visit: { access: "ticketed", note: "Small site; check hours before travelling." },
    tags: ["Mies", "Modernism", "Pavilion"],
  },
  {
    slug: "sagrada-familia", name: "Sagrada Família", category: "landmarks", destination: "barcelona",
    coordinates: [2.1744, 41.4036], address: "Carrer de Mallorca 401, Barcelona",
    architect: "Antoni Gaudí (and successors)", year: "Begun 1882; ongoing",
    summary: "An unfinished basilica of branching columns and coloured light.",
    description: [
      "The interior is the thing: a forest of columns branching upward, and stained glass that shifts colour through the day.",
      "It remains under construction. Book a timed entry and go in the morning or late afternoon for the best light.",
    ],
    visit: { access: "ticketed", note: "Timed tickets required; book well in advance." },
    tags: ["Gaudí", "Basilica", "Light"],
  },
  {
    slug: "hospital-de-sant-pau", name: "Hospital de Sant Pau", category: "hidden", destination: "barcelona",
    coordinates: [2.1744, 41.4137], address: "Carrer de Sant Quintí 89, Barcelona",
    architect: "Lluís Domènech i Montaner", year: "1901–1930",
    summary: "A hospital campus of ornamented brick pavilions set in gardens.",
    description: [
      "The pavilions are connected by underground passages, and every surface is covered in tile, mosaic and sculpture.",
      "Often quieter than other Modernisme sites, which makes it a good place to see the style in some peace.",
    ],
    visit: { access: "ticketed", note: "Check for guided tour times and combined tickets." },
    tags: ["Modernisme", "Tile", "Gardens"],
  },
  {
    slug: "macba", name: "MACBA", category: "art", destination: "barcelona",
    coordinates: [2.1668, 41.3833], address: "Plaça dels Àngels 1, Barcelona",
    architect: "Richard Meier", year: "1995",
    summary: "A white, ramped museum of contemporary art, set among the streets of El Raval.",
    description: [
      "Meier's gleaming white volume contrasts sharply with the dense old quarter around it.",
      "Its plaza has become a gathering place for skateboarders, which says something about how architecture is used.",
    ],
    visit: { access: "ticketed", note: "Plaza is free to enter; museum is ticketed." },
    tags: ["Richard Meier", "Contemporary art", "Raval"],
  },
  {
    slug: "els-quatre-gats", name: "Els Quatre Gats", category: "cafes", destination: "barcelona",
    coordinates: [2.174, 41.386], address: "Carrer de Montsió 3, Barcelona",
    architect: "Josep Puig i Cadafalch (Casa Martí)", year: "Café opened 1897",
    summary: "A historic café-restaurant in a Modernista building, a meeting place for artists.",
    description: [
      "The café opened in the 1890s as a gathering place for artists and writers, in a Gothic-revival style building.",
      "The decor is part of the draw; come for a coffee outside peak meal times.",
    ],
    visit: { access: "varies", note: "A commercial restaurant; busy at mealtimes." },
    tags: ["Modernisme", "Café", "Artists"],
  },
  {
    slug: "bar-marsella", name: "Bar Marsella", category: "bars", destination: "barcelona",
    coordinates: [2.173, 41.379], address: "Carrer de Sant Pau 65, Barcelona",
    architect: "Historic bar interior", year: "Est. 1820",
    summary: "A well-worn Raval bar known for absinthe, faded mirrors and old tile.",
    description: [
      "Little has been polished away. The room is dim, mirrored and a little shabby, which is the point.",
      "Go for one drink, in the early evening.",
    ],
    visit: { access: "varies", note: "A small bar, often busy; check current hours." },
    tags: ["Historic bar", "Raval", "Absinthe"],
  },
  {
    slug: "casa-fuster", name: "Hotel Casa Fuster", category: "hotels", destination: "barcelona",
    coordinates: [2.1559, 41.4022], address: "Passeig de Gràcia 132, Barcelona",
    architect: "Lluís Domènech i Montaner", year: "1908–1911",
    summary: "A Modernisme townhouse that now operates as a hotel, with a historic café on the ground floor.",
    description: [
      "A late Modernisme building in pale stone, with a corner tower and restrained ornament.",
      "Visiting the ground-floor café gives a look at the interior without booking a room.",
    ],
    visit: { access: "varies", note: "A working hotel; check access to public rooms." },
    tags: ["Modernisme", "Hotel", "Passeig de Gràcia"],
  },
  {
    slug: "colonia-guell-crypt", name: "Colònia Güell Crypt", category: "hidden", destination: "barcelona",
    coordinates: [2.0218, 41.3631], address: "Santa Coloma de Cervelló",
    architect: "Antoni Gaudí", year: "1908–1915 (unfinished)",
    summary: "An unfinished church crypt where Gaudí tested structural ideas later used in the Sagrada Família.",
    description: [
      "Inclined stone columns and brick vaults were worked out with hanging models, which results in an organic, tent-like interior.",
      "It is outside the city, in a former industrial colony, and notably quiet.",
    ],
    visit: { access: "ticketed", note: "Reachable by regional train from the city. Check hours before travelling." },
    tags: ["Gaudí", "Crypt", "Day trip"],
  },

  // ───────── Tuscany
  {
    slug: "pienza", name: "Pienza", category: "landmarks", destination: "tuscany",
    coordinates: [11.6786, 43.076], address: "Pienza, Province of Siena",
    architect: "Bernardo Rossellino", year: "1459–1462",
    summary: "A small hill town rebuilt in the fifteenth century as an ideal Renaissance town.",
    description: [
      "Commissioned by a pope who was born in the village, the central piazza was laid out with a cathedral and palaces around it.",
      "Walk the walls for views over the Val d'Orcia.",
    ],
    visit: { access: "open", note: "A town centre, open to walkers. Some palaces and the cathedral have their own hours." },
    tags: ["Renaissance", "Ideal town", "Val d'Orcia"],
  },
  {
    slug: "san-galgano-abbey", name: "San Galgano Abbey", category: "hidden", destination: "tuscany",
    coordinates: [11.1503, 43.1511], address: "Chiusdino, Province of Siena",
    architect: "Cistercian builders", year: "13th century",
    summary: "A roofless Gothic abbey in open fields, with a small chapel on a hill above.",
    description: [
      "The roof is long gone, and the grass is now the floor. The sense of scale is clear under open sky.",
      "Visit the circular Montesiepi chapel on the hill nearby.",
    ],
    visit: { access: "ticketed", note: "Check seasonal opening hours." },
    tags: ["Cistercian", "Ruin", "Gothic"],
  },
  {
    slug: "sant-antimo-abbey", name: "Abbey of Sant'Antimo", category: "architecture", destination: "tuscany",
    coordinates: [11.4065, 43.0364], address: "Castelnuovo dell'Abate, Montalcino",
    architect: "Romanesque builders", year: "12th century",
    summary: "A Romanesque abbey in travertine and alabaster, set in an olive valley.",
    description: [
      "Warm stone, small alabaster windows and a simple plan give the church a serene character.",
      "Services include Gregorian chant, which suits the acoustics.",
    ],
    visit: { access: "open", note: "A working church; check times for services and visits." },
    tags: ["Romanesque", "Abbey", "Stone"],
  },
  {
    slug: "villa-la-foce", name: "La Foce Gardens", category: "design", destination: "tuscany",
    coordinates: [11.7568, 43.0432], address: "Chianciano Terme, Province of Siena",
    architect: "Cecil Pinsent (gardens)", year: "1920s–1930s",
    summary: "A formal Italian garden set in a working estate and landscape of cypress rows.",
    description: [
      "A garden of clipped hedges, terraces and long views, designed to relate to the farmland beyond.",
      "Visits are usually by guided tour or limited opening; confirm before travelling.",
    ],
    visit: { access: "varies", note: "Limited opening. Confirm with the estate." },
    tags: ["Garden", "Pinsent", "Landscape"],
  },
  {
    slug: "piazza-del-campo", name: "Piazza del Campo, Siena", category: "landmarks", destination: "tuscany",
    coordinates: [11.3306, 43.3186], address: "Piazza del Campo, Siena",
    architect: "Medieval civic design", year: "12th–14th century",
    summary: "A shell-shaped public square, sloping gently to the town hall.",
    description: [
      "A single sloping surface in brick, ringed by palaces, with the town hall and its tower as the focus.",
      "Sit on the paving rather than at a café table and watch the light travel across it.",
    ],
    visit: { access: "open", note: "A public square, open at all times. Very busy on race days." },
    tags: ["Medieval", "Square", "Siena"],
  },
];

export const places: Place[] = seeds.map((s) => ({
  ...s,
  image: `/images/places/${s.slug}.jpg`,
  demo: true,
}));
