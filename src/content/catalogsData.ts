// Product Catalog Data - Mapped from PDF catalogs
import { siteStructure } from './siteStructure';

export const catalogsData = [
  {
    id: 'flooring',
    title: 'SPC Flooring',
    category: 'Floor & Walls',
    description: 'Stone Plastic Composite Flooring - Durable, waterproof, and easy to install',
    types: siteStructure["Floor & Walls"]["SPC Flooring"].types,
    pdfFile: siteStructure["Floor & Walls"]["SPC Flooring"].catalog,
    image: '/catalogs/flooring.jpg',
    icon: 'FlooringIcon',
    features: [
      '100% Waterproof',
      'Scratch Resistant',
      'Easy Click-Lock Installation',
      'Commercial Grade Durability'
    ]
  },
  {
    id: 'stone-surfaces',
    title: 'Stone Surfaces',
    category: 'Floor & Walls',
    description: 'Premium stone surfaces for interior and exterior applications',
    types: siteStructure["Floor & Walls"]["Stone Surfaces"].types,
    pdfFile: siteStructure["Floor & Walls"]["Stone Surfaces"].catalog,
    image: '/catalogs/stone-surfaces.jpg',
    icon: 'StoneIcon',
    features: [
      'Natural Stone Beauty',
      'Durable and Long-lasting',
      'Heat and Stain Resistant',
      'Custom Fabrication Available'
    ]
  },
  {
    id: 'wooden-doors',
    title: 'Wooden Doors',
    category: 'Doors & Windows',
    description: 'Premium wooden doors with custom designs and finishes',
    pdfFile: siteStructure["Doors & Windows"]["Wooden Doors"].catalog,
    image: '/catalogs/wooden-doors.jpg',
    icon: 'WoodIcon',
    features: [
      'Custom Sizes and Designs',
      'Premium Wood Species',
      'Factory Direct Pricing',
      'Complete Installation Kits'
    ]
  },
  {
    id: 'aluminum-doors-windows',
    title: 'Aluminum Doors & Windows',
    category: 'Doors & Windows',
    description: 'High-performance aluminum door and window systems',
    pdfFile: siteStructure["Doors & Windows"]["Aluminum Doors & Windows"].catalog,
    image: '/catalogs/aluminum-doors-windows.jpg',
    icon: 'WindowIcon',
    features: [
      'Thermal Break Technology',
      'Weather Resistant',
      'Slim Profiles',
      'Custom Colors and Finishes'
    ]
  },
  {
    id: 'french-steel',
    title: 'French Slim Steel Windows & Doors',
    category: 'Doors & Windows',
    description: 'Elegant slim steel window and door systems with French design',
    pdfFile: siteStructure["Doors & Windows"]["French Slim Steel Windows & Doors"].catalog,
    image: '/catalogs/french-steel.jpg',
    icon: 'WindowIcon',
    features: [
      'Ultra-Slim Profiles',
      'French Design Aesthetics',
      'High-Performance Glass',
      'Custom Hardware Options'
    ]
  },
  {
    id: 'wrought-iron-doors',
    title: 'Wrought Iron Doors',
    category: 'Doors & Windows',
    description: 'Handcrafted wrought iron doors with custom designs',
    pdfFile: siteStructure["Doors & Windows"]["Wrought Iron Doors"].catalog,
    image: '/catalogs/wrought-iron-doors.jpg',
    icon: 'DoorIcon',
    features: [
      'Hand-Forged Designs',
      'Custom Patterns',
      'Durable Construction',
      'Security and Elegance'
    ]
  },
  {
    id: 'granite-decks',
    title: 'Granite Decks',
    category: 'Specialty Products',
    description: 'Premium granite deck systems for outdoor living spaces',
    pdfFile: siteStructure["Specialty Products"]["Granite Decks"].catalog,
    image: '/catalogs/granite-decks.jpg',
    icon: 'StoneIcon',
    features: [
      'Natural Stone Beauty',
      'Weather Resistant',
      'Slip-Resistant Surfaces',
      'Custom Designs Available'
    ]
  },
  {
    id: 'power-equipment',
    title: '60 Kw Generator',
    category: 'Specialty Products',
    description: 'Industrial-grade power equipment for reliable energy',
    brochure: siteStructure["Specialty Products"]["Power Equipment"]["60 Kw Generator"].brochure,
    specs: siteStructure["Specialty Products"]["Power Equipment"]["60 Kw Generator"].specs,
    image: '/catalogs/power-equipment.jpg',
    icon: 'PowerIcon',
    features: [
      'Industrial Grade Performance',
      'Reliable Power Output',
      'Easy Installation',
      'Low Maintenance'
    ]
  }
];

export type CatalogItem = typeof catalogsData[0];