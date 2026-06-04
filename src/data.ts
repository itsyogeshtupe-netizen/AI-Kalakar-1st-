/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, PortfolioItem, TestimonialItem, ProcessStep, StatItem, ValueItem } from './types';

export const HERO_ASSET = '/src/assets/images/hero_cinematic_1780601968601.png';

export const STATS: StatItem[] = [
  { value: '10+', label: 'Creative Experience', subText: 'Over a decade of storytelling excellence' },
  { value: '250+', label: 'AI Video Assets Created', subText: 'Delivered cross-platform premium content' },
  { value: '10x', label: 'Faster Pipeline Speed', subText: 'From script to display overnight' },
  { value: '100%', label: 'Global Quality Standards', subText: 'Award-winning cinema-grade outputs' }
];

export const VALUES: ValueItem[] = [
  {
    title: 'AI-Powered Production',
    description: 'Harnessing cutting-edge AI models to generate high-fidelity, cinema-grade video sequences and visual effects.',
    icon: 'BrainCircuit'
  },
  {
    title: 'Cinematic Storytelling',
    description: 'We blend technical precision with genuine human emotion, weaving narratives that capture and convert.',
    icon: 'Sparkles'
  },
  {
    title: 'Fast Turnaround',
    description: 'Our proprietary script-to-rendered-master timeline slices traditional corporate production schedules by 90%.',
    icon: 'Zap'
  },
  {
    title: 'Cost Effective',
    description: 'Get Hollywood-level lighting, set designs, and actor assets without expensive crew, travel, and logistics budgets.',
    icon: 'Coins'
  },
  {
    title: 'Unlimited Creativity',
    description: 'Simulate any camera angle, historical setting, atmospheric event, or high-end product shoot imaginable.',
    icon: 'Infinity'
  },
  {
    title: 'End-to-End Production',
    description: 'From initial screenplay concepting and voiceover sync to interactive music bed design and final grading.',
    icon: 'Clapperboard'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'ai-video-prod',
    title: 'AI Video Production',
    shortDesc: 'Luxury advertisements and product features generated using generative artificial intelligence.',
    longDesc: 'Our AI Video Production suite creates hyper-realistic commercial ads and high-concept product renders. By utilizing advanced image-to-video generators and custom prompt engineering, we simulate premium studio setups, visual effects, and fluid lighting that typically require millions in physical budgets.',
    category: 'Production',
    features: ['AI Commercial Ads', 'Product Videos', 'Brand Films', 'Promotional Videos'],
    icon: 'Film'
  },
  {
    id: 'corp-solutions',
    title: 'Corporate Solutions',
    shortDesc: 'Stunning company profiles, corporate pitches, and immersive training videos.',
    longDesc: 'Empower your stakeholders and represent your brand with ultra-sleek, immersive company profile films. We leverage AI-driven data visualization, synthesised corporate graphics, and clean narration to deliver corporate materials that demand undivided attention.',
    category: 'Corporate',
    features: ['Corporate Presentations', 'Company Profile Films', 'Industrial Videos', 'Training Content'],
    icon: 'Building2'
  },
  {
    id: 'social-content',
    title: 'Social Media Content',
    shortDesc: 'Optimized vertical content (Reels, TikTok, Shorts) engineered to spark viral engagement.',
    longDesc: 'Social media moves at speed. Our automated creative pipelines design visual content natively configured for portrait displays, designed with dynamic subtitles, rapid cuts, trending motion presets, and algorithmic visual-hooks.',
    category: 'Social',
    features: ['Instagram Reels', 'YouTube Shorts', 'Viral Campaign Videos', 'Algorithmic Hook Templates'],
    icon: 'Share2'
  },
  {
    id: 'creative-services',
    title: 'Creative Services',
    shortDesc: 'AI image generation, voiceover integration, custom motion graphics, and VFX pipelines.',
    longDesc: 'Providing specialized modules for hybrid projects. From high-fashion AI photography to multilingual natural voice synthesizers containing regional accents, we compose modern media components seamlessly.',
    category: 'Creative',
    features: ['AI Image Generation', 'Motion Graphics', 'Cinematic VFX', 'Professional Voiceover Synthesis'],
    icon: 'Wand2'
  },
  {
    id: 'doc-production',
    title: 'Documentary Production',
    shortDesc: 'Historical reconstructions, cultural storytelling, and visual travel diaries.',
    longDesc: 'Breathe cinematic life into history and culture. By teaching AI networks to respect historical records and architecture, we construct hyper-detailed, photorealistic visualizations of ancient landscapes and travel experiences.',
    category: 'Documentary',
    features: ['Historical Reconstructions', 'Cultural Storytelling', 'Tourism Films', 'Atmospheric Scenic Overviews'],
    icon: 'Compass'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'perfume-com',
    title: 'Aureum Luxury Scent',
    description: 'An AI-powered luxury advertisement showcasing golden fluid dynamics, photorealistic glass acoustics, and high-frequency studio laser trails for our signature perfume launch.',
    category: 'AI Advertisements',
    imageUrl: '/src/assets/images/portfolio_perfume_1780601987170.png',
    client: 'Aureum Fragrances',
    year: '2026',
    duration: '0:30',
    aspectRatio: '16:9 / Cinematic',
    techStack: ['Midjourney v6', 'Luma Dream Machine', 'After Effects', 'Sunvox Synthesis'],
    aiPromptSnippet: 'Cinematic commercial, luxury gold and crystal perfume bottle floating over dark water with majestic liquid gold ripples... volumetric lighting --ar 16:9',
    projectStory: 'Our goal was to evoke sensory luxury without physical ingredients. AI allowed us to simulate golden fluid dynamics with infinite control, creating an award-worthy commercial sequence in 48 hours for 0.5% of the traditional filming cost.'
  },
  {
    id: 'taj-history',
    title: 'Chronicles of the Grand Temple',
    description: 'Historical cinematic documentary reconstructing 17th Century architectural wonders using advanced physics-bound image engines and volumetric lightning prompts.',
    category: 'Historical Projects',
    imageUrl: '/src/assets/images/portfolio_history_1780602005376.png',
    client: 'Heritage India Foundation',
    year: '2026',
    duration: '6:45',
    aspectRatio: '2.39:1 / Anamorphic',
    techStack: ['Kling AI', 'Stable Diffusion XL', 'Aikalakar Custom LORAs', 'Resynthesizer audio'],
    aiPromptSnippet: 'Hyper-detailed 17th century Indian temple illuminated by thousand flickering oil lamps, volumetric fog, blue holographic light traces scanning the environment, 8k cinematic masterpiece',
    projectStory: 'Reconstructing historical artifacts safely in physical reality is nearly impossible. Using AI trained on ancient blueprint fragments, we reconstructed sacred stone carvings, bringing the monuments back to life in vivid, majestic detail.'
  },
  {
    id: 'vortex-realestate',
    title: 'Nexus Sky Villas',
    description: 'An immersive cinematic fly-through concept for the next generation of luxury sustainable real estate, featuring solar active crystalline structures and hovering gardens.',
    category: 'Corporate Videos',
    imageUrl: 'https://picsum.photos/seed/aikalakar-corporate/1200/900',
    client: 'Nexus Realty Group',
    year: '2025',
    duration: '1:45',
    aspectRatio: '16:9 / Landscape',
    techStack: ['Runway Gen-3 Alpha', 'Blender 3D AI Bridge', 'Premiere Pro'],
    aiPromptSnippet: 'Drone shot of a magnificent futuristic skyscraper with cascading waterfalls and glass terraces, sunset lighting, realistic architectural render, 4k ultra fine resolution',
    projectStory: 'To launch presales for a property still 4 years away from completion, we bypass general CAD renders. The result is an emotional cinematic tour that successfully drove early unit reservations within two weeks of launch.'
  },
  {
    id: 'kerala-tourism',
    title: 'Emerald Monsoons of Kerala',
    description: 'A global tourism film that showcases the serene backwaters, hyper-lush tea fields, and misty rainforest rivers using deep scenery neural styling.',
    category: 'Tourism Films',
    imageUrl: 'https://picsum.photos/seed/aikalakar-tourism/1200/900',
    client: 'Kerala Tourism Board',
    year: '2025',
    duration: '2:15',
    aspectRatio: '16:9 / Cinema Ultra',
    techStack: ['Sora AI Premium', 'Topaz Video AI Enhancement', 'Custom Atmospheric Models'],
    aiPromptSnippet: 'Stunning aerial view of traditional houseboat drifting on misty backwaters of Kerala, soft sun rays penetrating rain clouds, emerald green reflections, photorealistic travel cinematography',
    projectStory: 'Capturing dynamic tropical weather usually takes weeks of waiting for perfect sky conditions. Our models generated precise lighting changes on-demand, rendering absolute postcard-perfect misty mornings and vivid green waterways instantly.'
  },
  {
    id: 'cyber-viral',
    title: 'Aethel Cyberpunk Apparel Launch',
    description: 'A high-impact, vertical social media campaign featuring interactive fluorescent hoodies and responsive holographic streetwear shifting to urban music rhythms.',
    category: 'Social Campaigns',
    imageUrl: 'https://picsum.photos/seed/aikalakar-viral/1200/900',
    client: 'Aethel Clothing',
    year: '2026',
    duration: '0:15',
    aspectRatio: '9:16 / Vertical Mobile',
    techStack: ['Stable Video Diffusion', 'After Effects Motion Tracking', 'Eleventh Labs Audio Sync'],
    aiPromptSnippet: 'Glitch-core neon streetwear fashion model dancing in rain-soaked Tokyo alleyway, shifting materials from black obsidian to glowing blue matrix lines, fast kinetic cuts, vertical 9:16',
    projectStory: 'Engineered specifically for short-form video algorithms. Within the first week of deployment on Instagram and TikTok, the campaign reached over 2.4 million views, leading to a complete sell-out of the limited-edition drop.'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Discovery & Consultation',
    icon: 'MessageSquareShare',
    duration: 'Day 1',
    description: 'We host an intensive interactive session to map your brand guidelines, project guidelines, key messaging, target media output formats, and artistic visual style guidelines.',
    deliverables: ['Detailed Project Brief', 'Visual Mood Board', 'Cinematic Tone Definition']
  },
  {
    step: 2,
    title: 'Scriptwriting & Narrative Design',
    icon: 'PenTool',
    duration: 'Day 2',
    description: 'Our experienced human copywriters compose a complete technical screenplay, combining dialogue, character cues, explicit AI prompt guides, and camera motion instructions.',
    deliverables: ['Completed Narrative Script', 'Voiceover Text Output', 'Prompt Engineering Guides']
  },
  {
    step: 3,
    title: 'AI Visual Generation',
    icon: 'Cpu',
    duration: 'Day 3-4',
    description: 'We input our custom storyboard prompts into state-of-the-art cinematic image and video generators, creating thousands of high-fidelity seed variations to find perfect frames.',
    deliverables: ['A-Cut Visual Generation Suite', 'High-Definition Frame Selection', 'Holographic & Texture Elements']
  },
  {
    step: 4,
    title: 'Neural Voiceover & Audio Synthesis',
    icon: 'Mic',
    duration: 'Day 5',
    description: 'We sync high-resolution artificial voice models trained on elite narrators. Multi-band dynamic tracks are custom-tailored to provide background score, cues, and impacts.',
    deliverables: ['Stereo Synthesized Voice Master', 'Cinematic SFX Mix', 'Foley Sound Integration']
  },
  {
    step: 5,
    title: 'Video Editing & VFX Grading',
    icon: 'Video',
    duration: 'Day 6',
    description: 'We piece together our cinematic components in our editing software room. Color spaces are beautifully graded to match gold, electric blue, and deep luxurious charcoal levels.',
    deliverables: ['First Cut (Rough Edit)', 'VFX Transitions', 'Motion Graphics Rendering']
  },
  {
    step: 6,
    title: 'Final QC & Deployment',
    icon: 'CheckSquare',
    duration: 'Day 7',
    description: 'The final video is run through our AI Upscaler and noise-reduction networks to meet cinematic screen specifications (up to 4K 60FPS) and packaged for all social, corporate, and display networks.',
    deliverables: ['4K Ultra HD Client Master Files', 'Social-Optimized Cuts (9:16 / 1:1)', 'Interactive Distribution Package']
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Devendra Singhania',
    position: 'Chief Brand Officer',
    company: 'Aureum Luxury Scent',
    logoText: 'Aureum Fragrances',
    rating: 5,
    feedback: 'Aikalakar redefined our expectations of what advertising can be. We obtained a gorgeous cinematic product launch film showing gold and water dynamics in under a week. No location hunts, no delayed timelines, and zero friction. Truly of world-class design.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'test-2',
    name: 'Meera Deshmukh',
    position: 'Executive Director',
    company: 'Heritage India Foundation',
    logoText: 'Heritage India',
    rating: 5,
    feedback: 'Reconstructing centuries-old ancient monuments historically was a huge puzzle. The Aikalakar team did spectacular work using their deep neural prompt learning to design an educational cinematic experience that made viewers gasp. Global standards indeed.',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'test-3',
    name: 'Vikram Aditya',
    position: 'Head of Growth Marketing',
    company: 'Nexus Realty Group',
    logoText: 'Nexus Realty',
    rating: 5,
    feedback: 'To launch a project in presales when the foundation is barely dug is hard. Visualizing architectural luxury in true Hollywood movie style is what Aikalakar brought to us. The 10x faster turnaround directly accelerated our funding roadmap.',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
  }
];
