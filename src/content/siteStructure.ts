// Ultimate-Buildings Product Content Structure

export const siteStructure = {
  "Stone Flooring & Walls": {
    "Marble": {
      "applications": ["Flooring", "Wall cladding", "Feature walls", "Fireplace surrounds"]
    },
    "Granite": {
      "applications": ["High-traffic flooring", "Kitchen countertops", "Outdoor applications"]
    },
    "Quartz": {
      "applications": ["Kitchen countertops", "Bathroom vanities", "Wall cladding"]
    }
  },
  "SPC Flooring": {
    "Click-Lock": {
      "description": "No glue needed — floats over subfloor",
      "productionWeeks": 5
    },
    "Glue-Down": {
      "description": "Permanent adhesive for high-traffic",
      "productionWeeks": 5
    },
    "Lay-Flat": {
      "description": "Loose-lay — fastest install",
      "productionWeeks": 5
    }
  },
  "Cabinets & Organizational Storage": {
    "Kitchen Cabinets": {},
    "Wardrobe Cabinets": {},
    "Vanity Cabinets": {},
    "Walk-In Closets": {}
  },
  "Doors & Windows": {
    "Wooden Doors": {},
    "Aluminum Doors & Windows": {},
    "French Slim Steel Windows & Doors": {},
    "Wrought Iron Doors": {}
  },
  "Metal Products": {
    "Fencing": {
      "types": ["Wrought Iron", "Aluminum", "Steel"]
    },
    "Gates": {
      "types": ["Swing", "Sliding", "Bi-Fold"]
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
    "Granite Slabs": {},
    "Quartz Slabs": {},
    "Marble Slabs": {},
    "Custom Fabrication": {
      "description": "Custom edge profiles, cutouts, sizing"
    }
  }
};

export type ProductCategory = keyof typeof siteStructure;
export type ProductSubcategory<T extends ProductCategory> = keyof typeof siteStructure[T];
