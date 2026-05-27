// Ultimate-Buildings Product Content Structure
// Generated from Basecamp Download PDFs and Excel mapping

export const siteStructure = {
  "Stone Flooring & Walls": {
    "Marble": {
      "applications": ["Flooring", "Wall cladding", "Feature walls", "Fireplace surrounds"],
      "catalog": "UB - AFP - Quartz Catalog Jan 2026 - 2 pdf.pdf"
    },
    "Granite": {
      "applications": ["High-traffic flooring", "Kitchen countertops", "Outdoor applications"],
      "catalog": "UB - AFP - Quartz Catalog Jan 2026 - 2 pdf.pdf"
    },
    "Quartz": {
      "applications": ["Kitchen countertops", "Bathroom vanities", "Wall cladding"],
      "catalog": "UB - AFP - Quartz Catalog Jan 2026 - 2 pdf.pdf"
    }
  },
  "SPC Flooring": {
    "Click-Lock": {
      "description": "No glue needed — floats over subfloor",
      "productionWeeks": 5,
      "catalog": "UB - AFP - Flooring Catalog Jan 2026.pdf"
    },
    "Glue-Down": {
      "description": "Permanent adhesive for high-traffic",
      "productionWeeks": 5,
      "catalog": "UB - AFP - Flooring Catalog Jan 2026.pdf"
    },
    "Lay-Flat": {
      "description": "Loose-lay — fastest install",
      "productionWeeks": 5,
      "catalog": "UB - AFP - Flooring Catalog Jan 2026.pdf"
    }
  },
  "Cabinets & Organizational Storage": {
    "Kitchen Cabinets": {
      "catalog": "UB -AFP -  Wooden Door Catalog Jan 2026 -3.pdf"
    },
    "Wardrobe Cabinets": {
      "catalog": "UB -AFP -  Wooden Door Catalog Jan 2026 -3.pdf"
    },
    "Vanity Cabinets": {
      "catalog": "UB -AFP -  Wooden Door Catalog Jan 2026 -3.pdf"
    },
    "Walk-In Closets": {
      "catalog": "UB -AFP -  Wooden Door Catalog Jan 2026 -3.pdf"
    }
  },
  "Doors & Windows": {
    "Wooden Doors": {
      "catalog": "UB -AFP -  Wooden Door Catalog Jan 2026 -3.pdf"
    },
    "Aluminum Doors & Windows": {
      "catalog": "UB - Aluminum Door - Window Catalog Jan 2026.pdf"
    },
    "French Slim Steel Windows & Doors": {
      "catalog": "UB - AFP - French Slim Steel Window & Door Catalog Jan 2026 .pdf"
    },
    "Wrought Iron Doors": {
      "catalog": "UB - AFT - Wrought Iron Doors Catolog Jan 2026 - 3  .pdf"
    }
  },
  "Metal Products": {
    "Fencing": {
      "types": ["Wrought Iron", "Aluminum", "Steel"],
      "catalog": "UB - AFT - Wrought Iron Doors Catolog Jan 2026 - 3  .pdf"
    },
    "Gates": {
      "types": ["Swing", "Sliding", "Bi-Fold"],
      "catalog": "UB - AFT - Wrought Iron Doors Catolog Jan 2026 - 3  .pdf"
    },
    "Garage Doors": {
      "types": ["Sectional", "Roll-Up", "Custom"]
    },
    "Partitions": {
      "types": ["Custom"]
    }
  },
  "Prefab Construction": {
    "Hotels": {
      "description": "Complete prefab hotel packages"
    },
    "Apartments": {
      "description": "Multi-unit prefab construction"
    },
    "Office Buildings": {
      "description": "Prefab office construction"
    }
  },
  "Countertops & Slabs": {
    "Granite Slabs": {
      "catalog": "UB - AFP - Quartz Catalog Jan 2026 - 2 pdf.pdf"
    },
    "Quartz Slabs": {
      "catalog": "UB - AFP - Quartz Catalog Jan 2026 - 2 pdf.pdf"
    },
    "Marble Slabs": {
      "catalog": "UB - AFP - Quartz Catalog Jan 2026 - 2 pdf.pdf"
    },
    "Custom Fabrication": {
      "description": "Custom edge profiles, cutouts, sizing"
    }
  }
};

export type ProductCategory = keyof typeof siteStructure;
export type ProductSubcategory<T extends ProductCategory> = keyof typeof siteStructure[T];