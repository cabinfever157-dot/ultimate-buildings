// Product Catalog Data - Mapped from PDF catalogs
import { siteStructure } from './siteStructure';

export const catalogsData = [
  {
    id: 'spc-flooring',
    title: 'SPC Flooring',
    category: 'SPC Flooring',
    description: 'Custom SPC Flooring — Click-Lock, Glue-Down, Lay-Flat. 5-week production. Your brand packaging available.',
    types: ['Click-Lock', 'Glue-Down', 'Lay-Flat'] as string[],
    pdfFile: (siteStructure["SPC Flooring"] as Record<string, any>)["Click-Lock"]?.catalog || (siteStructure["SPC Flooring"] as Record<string, any>)["Glue-Down"]?.catalog || '',
    image: '/catalogs/flooring.jpg',
    icon: 'FlooringIcon',
    features: [
      '5-Week Production',
      'Custom Wear Thickness & Plank Size',
      'Your Brand Packaging Available',
      'Click-Lock, Glue-Down, Lay-Flat'
    ]
  },
  {
    id: 'stone-surfaces',
    title: 'Stone Surfaces',
    category: 'Stone Flooring & Walls',
    description: 'Marble, Granite, Quartz — factory direct from our quarries. 20 acres of stock stone blocks.',
    types: ['Marble', 'Granite', 'Quartz'] as string[],
    pdfFile: (siteStructure["Stone Flooring & Walls"] as Record<string, any>)["Granite"]?.catalog || '',
    image: '/catalogs/stone-surfaces.jpg',
    icon: 'StoneIcon',
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
    category: 'Doors & Windows',
    description: 'Custom fabricated wooden doors — your size, your colors, your details',
    pdfFile: siteStructure["Doors & Windows"]["Wooden Doors"].catalog,
    image: '/catalogs/wooden-doors.jpg',
    icon: 'WoodIcon',
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
    category: 'Doors & Windows',
    description: 'Custom fabricated aluminum door and window systems — residential and commercial',
    pdfFile: siteStructure["Doors & Windows"]["Aluminum Doors & Windows"].catalog,
    image: '/catalogs/aluminum-doors-windows.jpg',
    icon: 'WindowIcon',
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
    category: 'Doors & Windows',
    description: 'Custom fabricated French slim steel windows and doors — residential and commercial',
    pdfFile: siteStructure["Doors & Windows"]["French Slim Steel Windows & Doors"].catalog,
    image: '/catalogs/french-steel.jpg',
    icon: 'WindowIcon',
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
    category: 'Doors & Windows',
    description: 'Custom fabricated wrought iron doors — your design, your size',
    pdfFile: siteStructure["Doors & Windows"]["Wrought Iron Doors"].catalog,
    image: '/catalogs/wrought-iron-doors.jpg',
    icon: 'DoorIcon',
    features: [
      'Custom Fabricated to Your Measurements',
      'Custom Patterns and Designs',
      'Durable Construction',
      'Powder-Coated Finishes'
    ]
  }
];

export type CatalogItem = typeof catalogsData[0];