// Ultimate-Buildings Product Content Structure
// Generated from Basecamp Download PDFs and Excel mapping

export const siteStructure = {
  "Floor & Walls": {
    "SPC Flooring": {
      "types": [
        "Click and Lock",
        "Flat Lay", 
        "Glue Down"
      ],
      "catalog": "GBTS - AFP - Flooring Catalog Jan 2026.pdf"
    },
    "Stone Surfaces": {
      "types": [
        "Granite",
        "Marble", 
        "Quartz"
      ],
      "catalog": "GBTS - AFP - Quartz Catalog Jan 2026 - 2 pdf.pdf"
    }
  },
  "Doors & Windows": {
    "Wooden Doors": {
      "catalog": "GBTS -AFP -  Wooden Door Catalog Jan 2026 -3.pdf"
    },
    "Aluminum Doors & Windows": {
      "catalog": "GBTS - Aluminum Door - Window Catalog Jan 2026.pdf"
    },
    "French Slim Steel Windows & Doors": {
      "catalog": "GBTS - AFP - French Slim Steel Window & Door Catalog Jan 2026 .pdf"
    },
    "Wrought Iron Doors": {
      "catalog": "GBTS - AFT - Wrought Iron Doors Catolog Jan 2026 - 3  .pdf"
    }
  },
  "Specialty Products": {
    "Granite Decks": {
      "catalog": "GBTS - Granite Deck Brochure- 2.pdf"
    },
    "Power Equipment": {
      "60 Kw Generator": {
        "brochure": "PEP - N - 60 Kw Brochure Jan 2026-(2).pdf",
        "specs": "PEP - 60 Kw Specs Jan 2026- (2).pdf"
      }
    }
  },
  "Custom Products": {
    "description": "Your Size Your Colors - Your Size Your Details - Your Size - Colors - Details",
    "factoryDirect": "Factory Direct pricing including all Logistics, Duty/Tariffs, & Delivery to Jobsite Included"
  }
};

export type ProductCategory = keyof typeof siteStructure;
export type ProductSubcategory<T extends ProductCategory> = keyof typeof siteStructure[T];