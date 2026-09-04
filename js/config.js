// Configuration for VIS Museum of Design & Applied Arts
const STORAGE_KEY = 'vis_design_positions';

const TECH_CATEGORIES = [
    {
        "id": "all",
        "label": "Semua Koleksi",
        "icon": "✨"
    },
    {
        "id": "O1",
        "label": "Tipografi & Editorial",
        "icon": "🔤",
        "title": "Typography & Editorial Design"
    },
    {
        "id": "O2",
        "label": "Desain Grafis & Brand",
        "icon": "🎨",
        "title": "Graphic Design & Visual Identity"
    },
    {
        "id": "O3",
        "label": "Ilustrasi & Seni Visual",
        "icon": "🖌️",
        "title": "Illustration & Visual Narrative"
    },
    {
        "id": "O4",
        "label": "UI/UX & Interaksi",
        "icon": "📱",
        "title": "UI/UX & Interaction Design"
    },
    {
        "id": "O5",
        "label": "Motion Design & VFX",
        "icon": "🎬",
        "title": "Motion Graphics & Visual Effects"
    },
    {
        "id": "O6",
        "label": "Desain Kemasan",
        "icon": "📦",
        "title": "Packaging Design & Engineering"
    },
    {
        "id": "O7",
        "label": "Desain Produk Industri",
        "icon": "⚙️",
        "title": "Industrial & Product Design"
    },
    {
        "id": "O8",
        "label": "CMF & CAD Modeling",
        "icon": "💎",
        "title": "CMF, Surface Modeling & Aesthetics"
    },
    {
        "id": "O9",
        "label": "Manufaktur & Fabrikasi",
        "icon": "🏭",
        "title": "Manufacturing & Industrial Engineering"
    },
    {
        "id": "O10",
        "label": "Design Thinking & Strategi",
        "icon": "💡",
        "title": "Design Thinking & Strategic Foresight"
    }
];

const SYNONYMS = {
    "tipografi": [
        "typography",
        "font",
        "typeface",
        "lettering",
        "kerning",
        "serif",
        "sans",
        "calligraphy"
    ],
    "huruf": [
        "letter",
        "letterform",
        "font",
        "typography",
        "glyph",
        "script"
    ],
    "warna": [
        "color",
        "colour",
        "palette",
        "chromatic",
        "colorimetry",
        "hue",
        "saturation"
    ],
    "logo": [
        "brand",
        "branding",
        "identity",
        "mark",
        "symbol",
        "corporate"
    ],
    "merek": [
        "brand",
        "branding",
        "identity",
        "corporate",
        "visual identity"
    ],
    "kemasan": [
        "packaging",
        "package",
        "box",
        "carton",
        "corrugated",
        "die-cut"
    ],
    "desain": [
        "design",
        "designer",
        "layout",
        "visual",
        "concept",
        "aesthetic"
    ],
    "animasi": [
        "motion",
        "animation",
        "kinematics",
        "keyframe",
        "vfx",
        "cgi",
        "render"
    ],
    "produk": [
        "product",
        "industrial",
        "ergonomics",
        "cad",
        "prototyping",
        "manufacture"
    ],
    "interaksi": [
        "interaction",
        "ui",
        "ux",
        "interface",
        "usability",
        "flow",
        "wireframe",
        "token"
    ],
    "pengguna": [
        "user",
        "ux",
        "accessibility",
        "usability",
        "wcag",
        "research",
        "empathy"
    ],
    "cetak": [
        "print",
        "printing",
        "press",
        "ink",
        "paper",
        "reproduction"
    ],
    "bahan": [
        "material",
        "materials",
        "polymer",
        "plastic",
        "metal",
        "composite",
        "cmf",
        "surface"
    ],
    "pabrik": [
        "manufacturing",
        "factory",
        "machining",
        "cnc",
        "injection molding",
        "fabrication",
        "stamping"
    ],
    "strategi": [
        "design thinking",
        "double diamond",
        "ideation",
        "service design",
        "speculative",
        "foresight"
    ],
    "vektor": [
        "vector",
        "bezier",
        "curves",
        "illustration",
        "digital painting"
    ],
    "3d": [
        "3d",
        "render",
        "shading",
        "cad",
        "nurbs",
        "cgi",
        "mesh",
        "lighting"
    ]
};
