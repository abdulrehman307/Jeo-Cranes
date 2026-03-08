export interface Equipment {
    id: string;
    name: string;
    make: string;
    model: string;
    capacity: string;
    category: string;
    specs: Record<string, string>;
    image: string;
    featured?: boolean;
}

export const FLEET_CATEGORIES = [
    "All",
    "Cranes",
    "Dozers",
    "Excavators",
    "Forklift Telehandler",
    "Loaders",
    "Graders",
    "Rollers",
    "Skid Steer",
    "Tanker",
    "Tipper Trucks",
    "Trailer",
    "Backhoe Loader"
];

export const FLEET_DATA: Equipment[] = [
    // CRANES
    {
        id: "cr-1",
        name: "25 Ton KATO Crane",
        make: "KATO",
        model: "CR250",
        capacity: "25 Ton",
        category: "Cranes",
        specs: { "Boom Length": "28 Meter" },
        image: "/images/fleet/crane.png",
        featured: true
    },
    {
        id: "cr-2",
        name: "25 Ton XCMG Crane",
        make: "XCMG",
        model: "QY25K",
        capacity: "25 Ton",
        category: "Cranes",
        specs: { "Boom Length": "32 Meter" },
        image: "/images/fleet/crane.png",
        featured: true
    },
    {
        id: "cr-3",
        name: "50 Ton XCMG Crane",
        make: "XCMG",
        model: "QY50K",
        capacity: "50 Ton",
        category: "Cranes",
        specs: { "Type": "Truck Crane" },
        image: "/images/fleet/crane.png"
    },
    {
        id: "cr-4",
        name: "65 Ton XCMG Crane",
        make: "XCMG",
        model: "QY65K",
        capacity: "65 Ton",
        category: "Cranes",
        specs: { "Type": "Mobile Crane" },
        image: "/images/fleet/crane.png"
    },
    {
        id: "cr-5",
        name: "250 Ton LIEBHERR Crane",
        make: "LIEBHERR",
        model: "LTM1250/6.1",
        capacity: "250 Ton",
        category: "Cranes",
        specs: { "Boom": "60m + Jib" },
        image: "/images/fleet/crane.png",
        featured: true
    },
    // TIPPER TRUCKS
    {
        id: "tt-1",
        name: "45 Ton MAN Truck",
        make: "MAN",
        model: "TGS 45.400",
        capacity: "45 Ton",
        category: "Tipper Trucks",
        specs: { "Axles": "8x4" },
        image: "/images/fleet/tipper_truck.png",
        featured: true
    },
    {
        id: "tt-2",
        name: "55 Ton Hydraulic Tip Truck",
        make: "Hino / various",
        model: "HT-55",
        capacity: "55 Ton",
        category: "Tipper Trucks",
        specs: { "Mechanism": "Hydraulic" },
        image: "/images/fleet/tipper_truck.png"
    },
    {
        id: "tt-3",
        name: "65 Ton HYVA Truck",
        make: "HYVA",
        model: "H-65",
        capacity: "65 Ton",
        category: "Tipper Trucks",
        specs: { "Bucket": "Heavy Duty" },
        image: "/images/fleet/tipper_truck.png"
    },
    {
        id: "tt-4",
        name: "85 Ton Mercedes Benz Truck",
        make: "Mercedes Benz",
        model: "Actros",
        capacity: "85 Ton",
        category: "Tipper Trucks",
        specs: { "Engine": "V8 Turbo" },
        image: "/images/fleet/tipper_truck.png"
    },
    // TANKERS
    {
        id: "tk-1",
        name: "2500 Liter Septic Tanker",
        make: "ISUZU",
        model: "FVR",
        capacity: "2500 Liter",
        category: "Tanker",
        specs: { "Type": "Vacuum" },
        image: "/images/fleet/tanker.png"
    },
    {
        id: "tk-2",
        name: "3600 Gallon Tanker",
        make: "Volvo",
        model: "FM",
        capacity: "3600 Gallon",
        category: "Tanker",
        specs: { "Material": "Stainless Steel" },
        image: "/images/fleet/tanker.png"
    },
    {
        id: "tk-3",
        name: "3800 Gallon Tanker",
        make: "Scania",
        model: "R-Series",
        capacity: "3800 Gallon",
        category: "Tanker",
        specs: { "Fluid": "Water/Diesel" },
        image: "/images/fleet/tanker.png"
    },
    {
        id: "tk-4",
        name: "4500 Gallon Tanker",
        make: "Renault",
        model: "Kerax",
        capacity: "4500 Gallon",
        category: "Tanker",
        specs: { "Service": "Heavy Logistics" },
        image: "/images/fleet/tanker.png"
    },
    // OTHER CATEGORIES (PLACEHOLDERS)
    {
        id: "dz-1",
        name: "Heavy Duty Dozer",
        make: "CAT",
        model: "D8R",
        capacity: "Large",
        category: "Dozers",
        specs: { "Power": "310 HP" },
        image: "/images/fleet/dozer.png"
    },
    {
        id: "ex-1",
        name: "Hydraulic Excavator",
        make: "CAT",
        model: "336",
        capacity: "36 Ton",
        category: "Excavators",
        specs: { "Bucket": "2.1 m3" },
        image: "/images/fleet/excavator.png"
    }
];
