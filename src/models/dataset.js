const jobDataArray = [
    {
        JobCategory: "Old Jobs",
        JobTitle: "Carpenter",
        JobDescription: "Skilled in constructing and repairing wooden structures and furniture.",
        HourlyWage: 300,
        LastDatetoApply: new Date("2024-11-10"),
        Locations: "Jaipur, Rajasthan",
        RequiredSkills: "Woodworking skills"
    },
    {
        JobCategory: "Old Jobs",
        JobTitle: "Mason",
        JobDescription: "Build and repair structures using bricks, concrete, and stones.",
        HourlyWage: 250,
        LastDatetoApply: new Date("2024-11-15"),
        Locations: "Ahmedabad, Gujarat",
        RequiredSkills: "Physical stamina"
    },
    {
        JobCategory: "Old Jobs",
        JobTitle: "Blacksmith",
        JobDescription: "Forge and shape metal objects for various purposes.",
        HourlyWage: 280,
        LastDatetoApply: new Date("2024-11-20"),
        Locations: "Kanpur, Uttar Pradesh",
        RequiredSkills: "Metalworking skills"
    },
    {
        JobCategory: "Old Jobs",
        JobTitle: "Tailor",
        JobDescription: "Make, alter, and repair garments for individuals.",
        HourlyWage: 200,
        LastDatetoApply: new Date("2024-11-12"),
        Locations: "Surat, Gujarat",
        RequiredSkills: "Sewing and design skills"
    },
    {
        JobCategory: "Old Jobs",
        JobTitle: "Welder",
        JobDescription: "Join metal parts using heat; essential for construction and manufacturing.",
        HourlyWage: 350,
        LastDatetoApply: new Date("2024-11-05"),
        Locations: "Mumbai, Maharashtra",
        RequiredSkills: "Welding techniques"
    },
    {
        JobCategory: "Old Jobs",
        JobTitle: "Shoemaker",
        JobDescription: "Craft and repair shoes, ensuring comfort and durability.",
        HourlyWage: 250,
        LastDatetoApply: new Date("2024-11-25"),
        Locations: "Agra, Uttar Pradesh",
        RequiredSkills: "Attention to detail"
    },
    {
        JobCategory: "Old Jobs",
        JobTitle: "Stone Carver",
        JobDescription: "Create sculptures and designs from stone materials.",
        HourlyWage: 300,
        LastDatetoApply: new Date("2024-11-30"),
        Locations: "Udaipur, Rajasthan",
        RequiredSkills: "Artistic skills"
    },
    {
        JobCategory: "Old Jobs",
        JobTitle: "Gardener",
        JobDescription: "Maintain gardens, lawns, and landscapes, focusing on plant care.",
        HourlyWage: 150,
        LastDatetoApply: new Date("2024-11-22"),
        Locations: "Kochi, Kerala",
        RequiredSkills: "Knowledge of plants"
    },
    {
        JobCategory: "Old Jobs",
        JobTitle: "Fisherman",
        JobDescription: "Catch and sell fish from rivers or seas; requires local fishing knowledge.",
        HourlyWage: 200,
        LastDatetoApply: new Date("2024-11-18"),
        Locations: "Visakhapatnam, AP",
        RequiredSkills: "Fishing skills"
    },
    {
        JobCategory: "Old Jobs",
        JobTitle: "Tailor’s Assistant",
        JobDescription: "Support tailors in cutting, sewing, and altering fabrics.",
        HourlyWage: 150,
        LastDatetoApply: new Date("2024-11-14"),
        Locations: "Ludhiana, Punjab",
        RequiredSkills: "Sewing basics"
    },
    {
        JobCategory: "Old Jobs",
        JobTitle: "Plasterer",
        JobDescription: "Apply plaster to walls and ceilings for finishing.",
        HourlyWage: 250,
        LastDatetoApply: new Date("2024-11-11"),
        Locations: "Chennai, Tamil Nadu",
        RequiredSkills: "Precision"
    },
    {
        JobCategory: "Old Jobs",
        JobTitle: "Bicycle Repairer",
        JobDescription: "Fix and maintain bicycles in a workshop.",
        HourlyWage: 180,
        LastDatetoApply: new Date("2024-11-13"),
        Locations: "Pune, Maharashtra",
        RequiredSkills: "Mechanical skills"
    },
    {
        JobCategory: "Old Jobs",
        JobTitle: "Bricklayer",
        JobDescription: "Build walls and structures using bricks; requires precise measurements.",
        HourlyWage: 300,
        LastDatetoApply: new Date("2024-11-16"),
        Locations: "Delhi",
        RequiredSkills: "Construction skills"
    },
    {
        JobCategory: "Old Jobs",
        JobTitle: "Upholsterer",
        JobDescription: "Repair and reupholster furniture, ensuring comfort and aesthetics.",
        HourlyWage: 280,
        LastDatetoApply: new Date("2024-11-19"),
        Locations: "Mumbai, Maharashtra",
        RequiredSkills: "Design skills"
    },
    {
        JobCategory: "Old Jobs",
        JobTitle: "Butcher",
        JobDescription: "Prepare and sell meat products in local markets or shops.",
        HourlyWage: 220,
        LastDatetoApply: new Date("2024-11-21"),
        Locations: "Kolkata, West Bengal",
        RequiredSkills: "Knife skills"
    },
    {
        JobCategory: "Old Jobs",
        JobTitle: "Clockmaker",
        JobDescription: "Repair and maintain clocks and watches with precision.",
        HourlyWage: 300,
        LastDatetoApply: new Date("2024-11-27"),
        Locations: "Surat, Gujarat",
        RequiredSkills: "Mechanical skills"
    },
    {
        JobCategory: "Old Jobs",
        JobTitle: "Coppersmith",
        JobDescription: "Create and repair items made from copper, including utensils.",
        HourlyWage: 280,
        LastDatetoApply: new Date("2024-11-15"),
        Locations: "Jaipur, Rajasthan",
        RequiredSkills: "Metalworking skills"
    },
    {
        JobCategory: "Old Jobs",
        JobTitle: "Rigger",
        JobDescription: "Set up and maintain equipment for lifting heavy loads.",
        HourlyWage: 250,
        LastDatetoApply: new Date("2024-11-29"),
        Locations: "Bengaluru, Karnataka",
        RequiredSkills: "Safety awareness"
    },
    {
        JobCategory: "Old Jobs",
        JobTitle: "Confectioner",
        JobDescription: "Prepare and sell sweets and candies, ensuring quality and presentation.",
        HourlyWage: 220,
        LastDatetoApply: new Date("2024-11-23"),
        Locations: "Kanpur, Uttar Pradesh",
        RequiredSkills: "Cooking skills"
    },
    {
        JobCategory: "Old Jobs",
        JobTitle: "Joiner",
        JobDescription: "Specialize in wood joinery for furniture and structures.",
        HourlyWage: 320,
        LastDatetoApply: new Date("2024-11-26"),
        Locations: "Hyderabad, Telangana",
        RequiredSkills: "Woodworking precision"
    }
];

const jobDataArrayLatest = [
    {
        JobCategory: "Latest Jobs",
        JobTitle: "Construction Worker",
        JobDescription: "Build and renovate structures, performing tasks like framing and pouring concrete.",
        HourlyWage: 400,
        LastDatetoApply: new Date("2024-11-25"),
        Locations: "Bengaluru, Karnataka",
        RequiredSkills: "Physical strength"
    },
    {
        JobCategory: "Latest Jobs",
        JobTitle: "Electrician",
        JobDescription: "Install and maintain electrical systems, ensuring safety and functionality.",
        HourlyWage: 450,
        LastDatetoApply: new Date("2024-11-30"),
        Locations: "Hyderabad, Telangana",
        RequiredSkills: "Electrical knowledge"
    },
    {
        JobCategory: "Latest Jobs",
        JobTitle: "Plumber",
        JobDescription: "Install and repair plumbing systems, ensuring proper water flow.",
        HourlyWage: 350,
        LastDatetoApply: new Date("2024-11-18"),
        Locations: "Chennai, Tamil Nadu",
        RequiredSkills: "Technical skills"
    },
    {
        JobCategory: "Latest Jobs",
        JobTitle: "Food Delivery Rider",
        JobDescription: "Deliver food from restaurants to customers promptly and safely.",
        HourlyWage: 150,
        LastDatetoApply: new Date("2024-11-20"),
        Locations: "Pune, Maharashtra",
        RequiredSkills: "Time management, navigation skills"
    },
    {
        JobCategory: "Latest Jobs",
        JobTitle: "Security Guard",
        JobDescription: "Monitor and protect property; ensure safety protocols are followed.",
        HourlyWage: 250,
        LastDatetoApply: new Date("2024-11-22"),
        Locations: "Delhi",
        RequiredSkills: "Vigilance"
    },
    {
        JobCategory: "Latest Jobs",
        JobTitle: "Warehouse Associate",
        JobDescription: "Manage inventory, restock shelves, and assist customers.",
        HourlyWage: 200,
        LastDatetoApply: new Date("2024-11-28"),
        Locations: "Gurugram, Haryana",
        RequiredSkills: "Organizational skills"
    },
    {
        JobCategory: "Latest Jobs",
        JobTitle: "Home Health Aide",
        JobDescription: "Provide care and assistance to individuals in their homes.",
        HourlyWage: 300,
        LastDatetoApply: new Date("2024-11-30"),
        Locations: "Mumbai",
        RequiredSkills: "Compassion, basic nursing skills"
    },
    {
        JobCategory: "Latest Jobs",
        JobTitle: "Construction Supervisor",
        JobDescription: "Oversee construction projects, ensuring safety and quality.",
        HourlyWage: 500,
        LastDatetoApply: new Date("2024-11-12"),
        Locations: "Kolkata",
        RequiredSkills: "Leadership skills"
    },
    {
        JobCategory: "Latest Jobs",
        JobTitle: "Event Coordinator",
        JobDescription: "Plan and oversee events, ensuring all details are managed.",
        HourlyWage: 350,
        LastDatetoApply: new Date("2024-11-15"),
        Locations: "Bangalore",
        RequiredSkills: "Organizational skills"
    },
    {
        JobCategory: "Latest Jobs",
        JobTitle: "Delivery Driver",
        JobDescription: "Transport goods and packages to various locations.",
        HourlyWage: 180,
        LastDatetoApply: new Date("2024-11-29"),
        Locations: "Chennai",
        RequiredSkills: "Time management"
    },
    {
        JobCategory: "Latest Jobs",
        JobTitle: "Data Entry Operator",
        JobDescription: "Input and manage data for various organizations.",
        HourlyWage: 150,
        LastDatetoApply: new Date("2024-11-18"),
        Locations: "Hyderabad",
        RequiredSkills: "Typing skills, attention to detail"
    },
    {
        JobCategory: "Latest Jobs",
        JobTitle: "Graphic Designer",
        JobDescription: "Create visual content for marketing and branding.",
        HourlyWage: 400,
        LastDatetoApply: new Date("2024-11-25"),
        Locations: "Pune",
        RequiredSkills: "Creativity, design software"
    },
    {
        JobCategory: "Latest Jobs",
        JobTitle: "Sales Associate",
        JobDescription: "Assist customers and drive sales in retail settings.",
        HourlyWage: 180,
        LastDatetoApply: new Date("2024-11-20"),
        Locations: "Noida",
        RequiredSkills: "Communication skills"
    },
    {
        JobCategory: "Latest Jobs",
        JobTitle: "Customer Service Agent",
        JobDescription: "Handle customer inquiries and resolve issues effectively.",
        HourlyWage: 200,
        LastDatetoApply: new Date("2024-11-15"),
        Locations: "Mumbai",
        RequiredSkills: "Interpersonal skills"
    },
    {
        JobCategory: "Latest Jobs",
        JobTitle: "Marketing Assistant",
        JobDescription: "Support marketing campaigns and social media management.",
        HourlyWage: 250,
        LastDatetoApply: new Date("2024-11-22"),
        Locations: "Jaipur",
        RequiredSkills: "Communication skills"
    },
    {
        JobCategory: "Latest Jobs",
        JobTitle: "Pet Care Attendant",
        JobDescription: "Provide care for animals in shelters or homes.",
        HourlyWage: 150,
        LastDatetoApply: new Date("2024-11-30"),
        Locations: "Bengaluru",
        RequiredSkills: "Animal handling skills"
    },
    {
        JobCategory: "Latest Jobs",
        JobTitle: "Laboratory Technician",
        JobDescription: "Assist in laboratory tests and maintain equipment.",
        HourlyWage: 300,
        LastDatetoApply: new Date("2024-11-28"),
        Locations: "Chennai",
        RequiredSkills: "Technical skills"
    },
    {
        JobCategory: "Latest Jobs",
        JobTitle: "Fitness Trainer",
        JobDescription: "Provide training and fitness guidance to clients.",
        HourlyWage: 400,
        LastDatetoApply: new Date("2024-11-25"),
        Locations: "Pune",
        RequiredSkills: "Knowledge of fitness techniques"
    },
    {
        JobCategory: "Latest Jobs",
        JobTitle: "Social Media Manager",
        JobDescription: "Manage and create content for social media platforms.",
        HourlyWage: 350,
        LastDatetoApply: new Date("2024-11-20"),
        Locations: "Hyderabad",
        RequiredSkills: "Creativity, communication skills"
    },
    {
        JobCategory: "Latest Jobs",
        JobTitle: "Content Writer",
        JobDescription: "Create written content for websites, blogs, and marketing materials.",
        HourlyWage: 250,
        LastDatetoApply: new Date("2024-11-18"),
        Locations: "Delhi",
        RequiredSkills: "Writing skills"
    }
];
const jobDataArrayCurrent = [
    {
        JobCategory: "Current Jobs",
        JobTitle: "Factory Worker",
        JobDescription: "Operate machines and assist in assembly lines in manufacturing.",
        HourlyWage: 200,
        LastDatetoApply: new Date("2024-11-29"),
        Locations: "Noida, Uttar Pradesh",
        RequiredSkills: "Attention to detail"
    },
    {
        JobCategory: "Current Jobs",
        JobTitle: "Delivery Assistant",
        JobDescription: "Help drivers with loading and unloading deliveries.",
        HourlyWage: 180,
        LastDatetoApply: new Date("2024-11-28"),
        Locations: "Gurugram, Haryana",
        RequiredSkills: "Teamwork"
    },
    {
        JobCategory: "Current Jobs",
        JobTitle: "Janitor/Custodian",
        JobDescription: "Maintain cleanliness in buildings, ensuring a sanitary environment.",
        HourlyWage: 120,
        LastDatetoApply: new Date("2024-11-15"),
        Locations: "Kolkata, West Bengal",
        RequiredSkills: "Reliability"
    },
    {
        JobCategory: "Current Jobs",
        JobTitle: "Farm Laborer",
        JobDescription: "Engage in planting, harvesting, and caring for crops.",
        HourlyWage: 150,
        LastDatetoApply: new Date("2024-11-27"),
        Locations: "Nashik, Maharashtra",
        RequiredSkills: "Physical stamina"
    },
    {
        JobCategory: "Current Jobs",
        JobTitle: "Event Setup Crew",
        JobDescription: "Assist in setting up and dismantling events, including furniture and decorations.",
        HourlyWage: 150,
        LastDatetoApply: new Date("2024-11-26"),
        Locations: "Jaipur, Rajasthan",
        RequiredSkills: "Teamwork"
    },
    {
        JobCategory: "Current Jobs",
        JobTitle: "Sales Promoter",
        JobDescription: "Promote products to potential customers at events or stores.",
        HourlyWage: 200,
        LastDatetoApply: new Date("2024-11-30"),
        Locations: "Mumbai",
        RequiredSkills: "Persuasive skills"
    },
    {
        JobCategory: "Current Jobs",
        JobTitle: "Survey Enumerator",
        JobDescription: "Conduct surveys and collect data for research studies.",
        HourlyWage: 180,
        LastDatetoApply: new Date("2024-11-22"),
        Locations: "Bengaluru",
        RequiredSkills: "Communication skills"
    },
    {
        JobCategory: "Current Jobs",
        JobTitle: "Technical Support Agent",
        JobDescription: "Provide technical support and troubleshooting assistance to customers.",
        HourlyWage: 250,
        LastDatetoApply: new Date("2024-11-18"),
        Locations: "Hyderabad",
        RequiredSkills: "Problem-solving skills"
    },
    {
        JobCategory: "Current Jobs",
        JobTitle: "Retail Sales Associate",
        JobDescription: "Assist customers in a retail environment, handling sales and inquiries.",
        HourlyWage: 180,
        LastDatetoApply: new Date("2024-11-21"),
        Locations: "Delhi",
        RequiredSkills: "Customer service skills"
    },
    {
        JobCategory: "Current Jobs",
        JobTitle: "Construction Laborer",
        JobDescription: "Assist in various tasks on construction sites, ensuring safety and efficiency.",
        HourlyWage: 220,
        LastDatetoApply: new Date("2024-11-25"),
        Locations: "Chennai",
        RequiredSkills: "Physical stamina"
    },
    {
        JobCategory: "Current Jobs",
        JobTitle: "Warehouse Picker",
        JobDescription: "Pick and pack orders in a warehouse environment, ensuring accuracy.",
        HourlyWage: 200,
        LastDatetoApply: new Date("2024-11-24"),
        Locations: "Pune",
        RequiredSkills: "Attention to detail"
    },
    {
        JobCategory: "Current Jobs",
        JobTitle: "Grocery Store Clerk",
        JobDescription: "Assist customers and manage inventory in a grocery store.",
        HourlyWage: 150,
        LastDatetoApply: new Date("2024-11-19"),
        Locations: "Kolkata",
        RequiredSkills: "Customer service"
    },
    {
        JobCategory: "Current Jobs",
        JobTitle: "Personal Care Aide",
        JobDescription: "Assist individuals with daily activities and personal care.",
        HourlyWage: 250,
        LastDatetoApply: new Date("2024-11-15"),
        Locations: "Bengaluru",
        RequiredSkills: "Compassionate nature"
    },
    {
        JobCategory: "Current Jobs",
        JobTitle: "Laundry Attendant",
        JobDescription: "Manage laundry services, including washing, drying, and folding clothes.",
        HourlyWage: 130,
        LastDatetoApply: new Date("2024-11-30"),
        Locations: "Mumbai",
        RequiredSkills: "Attention to detail"
    },
    {
        JobCategory: "Current Jobs",
        JobTitle: "Data Entry Clerk",
        JobDescription: "Input and manage data for various organizations.",
        HourlyWage: 150,
        LastDatetoApply: new Date("2024-11-20"),
        Locations: "Gurugram, Haryana",
        RequiredSkills: "Typing skills"
    },
    {
        JobCategory: "Current Jobs",
        JobTitle: "Office Assistant",
        JobDescription: "Provide administrative support in an office setting.",
        HourlyWage: 180,
        LastDatetoApply: new Date("2024-11-25"),
        Locations: "Noida, Uttar Pradesh",
        RequiredSkills: "Organizational skills"
    },
];

module.exports = { jobDataArrayCurrent };

module.exports=jobDataArrayCurrent;