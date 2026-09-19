// Product Catalog Data - Mapped from Flipbook exports

export const catalogsData = [
  {
    id: 'spc-flooring',
    title: 'SPC Flooring',
    category: 'SPC Flooring',
    description: 'Custom SPC Flooring — Click-Lock, Glue-Down, Lay-Flat. 5-week production. Your brand packaging available.',
    types: ['Click-Lock', 'Glue-Down', 'Lay-Flat'] as string[],
    image: '/catalogs/flooring.jpg',
    icon: 'FlooringIcon',
    flipbookId: 'spc-flooring',
    features: [
      '5-Week Production',
      'Custom Wear Thickness & Plank Size',
      'Your Brand Packaging Available',
      'Click-Lock, Glue-Down, Lay-Flat'
    ]
  },
  {
    id: 'granite-marble-quartz',
    title: 'Granite, Marble & Quartz',
    category: 'Stone Floors & Walls',
    description: 'Granite, Marble, and Engineered Quartz — factory direct from our quarries. 20 acres of stock stone blocks.',
    types: ['Granite', 'Marble', 'Quartz'] as string[],
    image: '/catalogs/stone-surfaces.jpg',
    icon: 'StoneIcon',
    flipbookId: 'granite-marble',
    subCatalogs: [
      { id: 'granite-marble', label: 'Granite & Marble' },
      { id: 'quartz', label: 'Quartz' },
    ],
    features: [
      'Own the Quarry — Factory Direct',
      'Custom Colors and Finishes',
      'Slabs or Custom Fabrication',
      '20 Acres of Stock Stone Blocks'
    ]
  },
  {
    id: 'wooden-doors',
    title: 'Wooden Doors',
    category: 'Windows & Doors',
    description: 'Custom fabricated wooden doors — your size, your colors, your details',
    image: '/catalogs/wooden-doors.jpg',
    icon: 'WoodIcon',
    flipbookId: 'wooden-doors',
    features: [
      'Custom Sizes and Designs',
      'Custom Wood Species',
      'Factory Direct Pricing',
      'Custom Finishes Available'
    ]
  },
  {
    id: 'aluminum-doors-windows',
    title: 'Aluminum Doors & Windows',
    category: 'Windows & Doors',
    description: 'Custom fabricated aluminum door and window systems — residential and commercial',
    image: '/catalogs/aluminum-doors-windows.jpg',
    icon: 'WindowIcon',
    flipbookId: 'aluminum-doors-windows',
    features: [
      'Thermal Break Technology',
      'Custom Colors and Finishes',
      'Up to Local Code',
      'Residential & Commercial'
    ]
  },
  {
    id: 'french-steel',
    title: 'French Slim Steel Windows & Doors',
    category: 'Windows & Doors',
    description: 'Custom fabricated French slim steel windows and doors — residential and commercial',
    image: '/catalogs/french-steel.jpg',
    icon: 'WindowIcon',
    flipbookId: 'french-steel',
    features: [
      'Ultra-Slim Profiles',
      'Up to Local Code',
      'Custom Colors',
      'Residential & Commercial'
    ]
  },
  {
    id: 'wrought-iron-doors',
    title: 'Wrought Iron Doors',
    category: 'Windows & Doors',
    description: 'Custom fabricated wrought iron doors — your design, your size',
    image: '/catalogs/wrought-iron-doors.jpg',
    icon: 'DoorIcon',
    flipbookId: 'wrought-iron-doors',
    features: [
      'Custom Fabricated to Your Measurements',
      'Custom Patterns and Designs',
      'Durable Construction',
      'Powder-Coated Finishes'
    ]
  },
  {
    id: 'cabinets',
    title: 'Cabinets, Vanities & Storage',
    category: 'Cabinets & Storage',
    description: 'Custom fabricated cabinets, vanities, closets, wardrobes, and organizational storage — kitchens, baths, and beyond',
    types: ['Kitchens & Islands', 'Vanities', 'Closets & Wardrobes', 'Organizational Storage'] as string[],
    image: '/catalogs/cabinets.jpg',
    icon: 'WoodIcon',
    flipbookId: 'cabinets',
    features: [
      'Custom Fabricated to Your Measurements',
      'Custom Wood Species and Finishes',
      'Soft-Close Mechanisms Standard',
      'Volume Buyers Welcome'
    ]
  },
  {
    id: 'prefab-construction',
    title: 'Prefab Construction',
    category: 'Prefab Construction',
    description: 'Complete prefab construction packages — hotels, apartments, and office buildings. Light steel frame technology.',
    types: ['Hotels', 'Apartments', 'Office Buildings'] as string[],
    image: '/catalogs/prefab-construction.jpg',
    icon: 'PrefabIcon',
    flipbookId: 'prefab-construction',
    features: [
      'Complete Package Delivery',
      'Light Steel Frame Technology',
      'Rapid On-Site Assembly',
      'Customizable Floor Plans'
    ]
  }
];

export type CatalogItem = typeof catalogsData[0];
