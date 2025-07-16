export interface ConfiguratorQuestion {
  id: string;
  type: 'single' | 'multiple' | 'number' | 'text' | 'conditional';
  title: string;
  description?: string;
  required: boolean;
  options?: ConfiguratorOption[];
  dependsOn?: {
    questionId: string;
    values: string[];
  };
  tags?: string[];
  nextQuestion?: string;
}

export interface ConfiguratorOption {
  id: string;
  label: string;
  description?: string;
  tags: string[];
  image?: string;
  price?: number;
}

export interface DevicePack {
  id: string;
  name: string;
  description: string;
  category: 'security' | 'comfort' | 'health' | 'integration' | 'care' | 'power' | 'maintenance';
  devices: Device[];
  services: Service[];
  monthlyPrice: number;
  installPrice: number;
  installTime: string;
  tags: string[];
  priority: number;
}

export interface Device {
  id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  model: string;
  price: number;
  image?: string;
  tags: string[];
}

export interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  duration: string;
  tags: string[];
}

export interface Plan {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  features: string[];
  deviceLimit: number;
  supportLevel: 'basic' | 'standard' | 'concierge';
  tags: string[];
}

export interface UserConfiguration {
  sessionId: string;
  answers: Record<string, string | string[]>;
  tags: string[];
  selectedPlan?: string;
  selectedPacks: string[];
  totalMonthlyPrice: number;
  totalInstallPrice: number;
  estimatedInstallTime: string;
  createdAt: Date;
  updatedAt: Date;
}

// Decision Tree Schema
export const configuratorQuestions: ConfiguratorQuestion[] = [
  {
    id: 'home_type',
    type: 'single',
    title: 'What type of home are you configuring?',
    description: 'This helps us understand your space and recommend the right solutions.',
    required: true,
    options: [
      {
        id: 'apartment',
        label: 'Apartment / Condo',
        description: 'Single unit in a multi-unit building',
        tags: ['apartment', 'small_space', 'shared_building']
      },
      {
        id: 'single_family',
        label: 'Single-Family Home',
        description: 'Detached house with yard',
        tags: ['single_family', 'medium_space', 'private_property']
      },
      {
        id: 'estate',
        label: 'Large Estate / Mansion',
        description: 'Large home with extensive property',
        tags: ['estate', 'large_space', 'luxury', 'multiple_zones']
      },
      {
        id: 'multi_unit',
        label: 'Multi-Unit Property',
        description: 'Landlord or property manager',
        tags: ['multi_unit', 'landlord', 'multiple_units']
      },
      {
        id: 'vacation',
        label: 'Vacation / Rental Property',
        description: 'Second home or rental property',
        tags: ['vacation', 'rental', 'remote_monitoring']
      }
    ]
  },
  {
    id: 'home_size',
    type: 'single',
    title: 'What\'s the approximate size of your home?',
    description: 'This helps us estimate the number of devices needed.',
    required: true,
    options: [
      {
        id: 'under_1000',
        label: 'Under 1,000 sq ft',
        tags: ['small_home', '1-2_bedrooms', 'minimal_devices']
      },
      {
        id: '1000_2000',
        label: '1,000 - 2,000 sq ft',
        tags: ['medium_home', '2-3_bedrooms', 'standard_coverage']
      },
      {
        id: '2000_4000',
        label: '2,000 - 4,000 sq ft',
        tags: ['large_home', '3-4_bedrooms', 'extended_coverage']
      },
      {
        id: 'over_4000',
        label: 'Over 4,000 sq ft',
        tags: ['estate_home', '4+_bedrooms', 'comprehensive_coverage']
      }
    ]
  },
  {
    id: 'floors',
    type: 'single',
    title: 'How many floors does your home have?',
    description: 'This affects our network and device placement strategy.',
    required: true,
    options: [
      {
        id: 'single_floor',
        label: 'Single Floor',
        tags: ['single_floor', 'simple_layout']
      },
      {
        id: 'two_floors',
        label: 'Two Floors',
        tags: ['two_floors', 'staircase', 'multi_level']
      },
      {
        id: 'three_plus_floors',
        label: 'Three or More Floors',
        tags: ['multi_floor', 'complex_layout', 'elevator']
      }
    ]
  },
  {
    id: 'existing_devices',
    type: 'multiple',
    title: 'What smart home devices do you already have?',
    description: 'We\'ll integrate with your existing setup.',
    required: false,
    options: [
      {
        id: 'apple_home',
        label: 'Apple HomeKit',
        description: 'Home app, Siri, Apple TV',
        tags: ['apple_ecosystem', 'homekit', 'ios_integration']
      },
      {
        id: 'google_home',
        label: 'Google Home / Nest',
        description: 'Google Assistant, Nest devices',
        tags: ['google_ecosystem', 'nest', 'android_integration']
      },
      {
        id: 'alexa',
        label: 'Amazon Alexa',
        description: 'Echo devices, Alexa voice control',
        tags: ['amazon_ecosystem', 'alexa', 'voice_control']
      },
      {
        id: 'smartthings',
        label: 'Samsung SmartThings',
        description: 'SmartThings hub and devices',
        tags: ['samsung_ecosystem', 'smartthings', 'universal']
      },
      {
        id: 'ring',
        label: 'Ring Security',
        description: 'Ring doorbells, cameras, alarm',
        tags: ['ring_security', 'amazon', 'existing_security']
      },
      {
        id: 'ecobee',
        label: 'Ecobee Thermostat',
        description: 'Smart thermostat',
        tags: ['ecobee', 'climate_control', 'existing_thermostat']
      },
      {
        id: 'none',
        label: 'No existing smart devices',
        description: 'Starting fresh',
        tags: ['new_setup', 'no_existing_devices']
      }
    ]
  },
  {
    id: 'platform_preference',
    type: 'single',
    title: 'What platform would you prefer to use?',
    description: 'We\'ll optimize your setup for your preferred platform.',
    required: true,
    options: [
      {
        id: 'ios',
        label: 'iOS / Apple',
        description: 'iPhone, iPad, Mac',
        tags: ['ios_preference', 'apple_ecosystem', 'homekit_optimized']
      },
      {
        id: 'android',
        label: 'Android / Google',
        description: 'Android phone, Google services',
        tags: ['android_preference', 'google_ecosystem', 'nest_optimized']
      },
      {
        id: 'mixed',
        label: 'Mixed Platform',
        description: 'Both iOS and Android users',
        tags: ['mixed_platform', 'universal_compatibility', 'cross_platform']
      },
      {
        id: 'voice_first',
        label: 'Voice-First',
        description: 'Primarily voice control',
        tags: ['voice_first', 'alexa_optimized', 'hands_free']
      }
    ]
  },
  {
    id: 'security_priorities',
    type: 'multiple',
    title: 'What security features are most important to you?',
    description: 'Select all that apply to your security needs.',
    required: false,
    options: [
      {
        id: 'outdoor_cameras',
        label: 'Outdoor Cameras',
        description: 'Monitor your property perimeter',
        tags: ['outdoor_security', 'video_monitoring', 'perimeter_protection']
      },
      {
        id: 'doorbell_camera',
        label: 'Video Doorbell',
        description: 'See who\'s at your door',
        tags: ['doorbell_camera', 'visitor_monitoring', 'package_delivery']
      },
      {
        id: 'door_sensors',
        label: 'Door & Window Sensors',
        description: 'Know when doors/windows open',
        tags: ['entry_monitoring', 'glass_break', 'intrusion_detection']
      },
      {
        id: 'smart_locks',
        label: 'Smart Locks',
        description: 'Keyless entry and remote access',
        tags: ['smart_locks', 'keyless_entry', 'remote_access']
      },
      {
        id: 'motion_sensors',
        label: 'Motion Sensors',
        description: 'Detect movement inside and out',
        tags: ['motion_detection', 'presence_sensing', 'activity_monitoring']
      },
      {
        id: 'fire_safety',
        label: 'Fire & CO2 Detection',
        description: 'Smoke and carbon monoxide monitoring',
        tags: ['fire_safety', 'co2_monitoring', 'life_safety']
      },
      {
        id: 'professional_monitoring',
        label: 'Professional Monitoring',
        description: '24/7 monitoring with emergency response',
        tags: ['professional_monitoring', 'emergency_response', 'peace_of_mind']
      }
    ]
  },
  {
    id: 'comfort_priorities',
    type: 'multiple',
    title: 'What comfort and automation features interest you?',
    description: 'Select the features that would make your home more comfortable.',
    required: false,
    options: [
      {
        id: 'smart_thermostat',
        label: 'Smart Thermostat',
        description: 'Automated climate control',
        tags: ['climate_control', 'energy_savings', 'comfort_automation']
      },
      {
        id: 'smart_lighting',
        label: 'Smart Lighting',
        description: 'Automated and voice-controlled lights',
        tags: ['lighting_automation', 'voice_control', 'mood_lighting']
      },
      {
        id: 'smart_blinds',
        label: 'Smart Blinds & Shades',
        description: 'Automated window coverings',
        tags: ['window_automation', 'privacy_control', 'energy_efficiency']
      },
      {
        id: 'smart_plugs',
        label: 'Smart Plugs',
        description: 'Control any electrical device',
        tags: ['device_control', 'energy_monitoring', 'appliance_automation']
      },
      {
        id: 'whole_home_audio',
        label: 'Whole Home Audio',
        description: 'Music throughout your home',
        tags: ['audio_system', 'entertainment', 'multi_room_audio']
      },
      {
        id: 'garage_automation',
        label: 'Garage Door Automation',
        description: 'Smart garage door control',
        tags: ['garage_automation', 'vehicle_access', 'security_integration']
      }
    ]
  },
  {
    id: 'care_needs',
    type: 'multiple',
    title: 'Do you have any special care or monitoring needs?',
    description: 'We can help with elderly care, health monitoring, and family safety.',
    required: false,
    options: [
      {
        id: 'elderly_care',
        label: 'Elderly Family Member',
        description: 'Monitoring and assistance for seniors',
        tags: ['elderly_care', 'fall_detection', 'health_monitoring', 'family_safety']
      },
      {
        id: 'remote_monitoring',
        label: 'Remote Monitoring',
        description: 'Check on home while away',
        tags: ['remote_monitoring', 'travel_safety', 'property_monitoring']
      },
      {
        id: 'wellness_checks',
        label: 'Wellness Monitoring',
        description: 'Daily activity and health tracking',
        tags: ['wellness_monitoring', 'activity_tracking', 'health_insights']
      },
      {
        id: 'pet_monitoring',
        label: 'Pet Monitoring',
        description: 'Keep an eye on your pets',
        tags: ['pet_monitoring', 'pet_safety', 'pet_care']
      },
      {
        id: 'medical_devices',
        label: 'Medical Device Integration',
        description: 'Connect medical devices and alerts',
        tags: ['medical_integration', 'health_alerts', 'emergency_response']
      }
    ]
  },
  {
    id: 'internet_setup',
    type: 'single',
    title: 'What\'s your current internet setup?',
    description: 'This helps us ensure reliable connectivity for your smart home.',
    required: true,
    options: [
      {
        id: 'standard_isp',
        label: 'Standard ISP',
        description: 'Cable, DSL, or fiber internet',
        tags: ['standard_internet', 'isp_connection', 'basic_connectivity']
      },
      {
        id: 'mesh_wifi',
        label: 'Mesh WiFi Network',
        description: 'Multiple WiFi access points',
        tags: ['mesh_wifi', 'extended_coverage', 'reliable_connectivity']
      },
      {
        id: 'starlink',
        label: 'Starlink Satellite',
        description: 'SpaceX satellite internet',
        tags: ['starlink', 'satellite_internet', 'rural_connectivity']
      },
      {
        id: 'backup_internet',
        label: 'Backup Internet',
        description: 'Multiple internet connections',
        tags: ['backup_internet', 'redundancy', 'always_connected']
      },
      {
        id: 'needs_improvement',
        label: 'Needs Improvement',
        description: 'Current setup needs upgrading',
        tags: ['internet_upgrade', 'connectivity_issues', 'network_optimization']
      }
    ]
  },
  {
    id: 'service_level',
    type: 'single',
    title: 'What level of service do you prefer?',
    description: 'Choose the level of support and installation service you need.',
    required: true,
    options: [
      {
        id: 'self_install',
        label: 'Self-Installation',
        description: 'DIY setup with remote support',
        tags: ['self_install', 'diy', 'cost_effective', 'remote_support']
      },
      {
        id: 'white_glove',
        label: 'White-Glove Installation',
        description: 'Professional installation and setup',
        tags: ['white_glove', 'professional_install', 'full_service', 'training_included']
      },
      {
        id: 'concierge',
        label: 'Concierge Service',
        description: 'Full-service with ongoing support',
        tags: ['concierge_service', 'ongoing_support', 'premium_service', '24_7_support']
      }
    ]
  },
  {
    id: 'budget_preference',
    type: 'single',
    title: 'What\'s your budget preference?',
    description: 'This helps us recommend the right solution for your budget.',
    required: true,
    options: [
      {
        id: 'budget_conscious',
        label: 'Budget-Conscious',
        description: 'Essential features, cost-effective',
        tags: ['budget_conscious', 'essential_features', 'cost_effective']
      },
      {
        id: 'balanced',
        label: 'Balanced',
        description: 'Good value, comprehensive features',
        tags: ['balanced_budget', 'comprehensive_features', 'good_value']
      },
      {
        id: 'premium',
        label: 'Premium',
        description: 'Best available, no compromises',
        tags: ['premium_budget', 'best_available', 'luxury_features']
      }
    ]
  }
];

// Device Packs Schema
export const devicePacks: DevicePack[] = [
  {
    id: 'security_essentials',
    name: 'Security Essentials',
    description: 'Basic home security with cameras and sensors',
    category: 'security',
    devices: [
      {
        id: 'video_doorbell',
        name: 'Video Doorbell',
        description: '4K video doorbell with motion detection',
        category: 'security',
        brand: 'Ring',
        model: 'Pro 2',
        price: 249,
        tags: ['doorbell_camera', 'motion_detection', 'two_way_audio']
      },
      {
        id: 'outdoor_camera_2',
        name: 'Outdoor Camera (2x)',
        description: '4K outdoor security cameras',
        category: 'security',
        brand: 'Ring',
        model: 'Stick Up Cam Pro',
        price: 199,
        tags: ['outdoor_security', 'weather_resistant', 'night_vision']
      },
      {
        id: 'door_sensors_4',
        name: 'Door Sensors (4x)',
        description: 'Contact sensors for doors and windows',
        category: 'security',
        brand: 'Aqara',
        model: 'Contact Sensor',
        price: 25,
        tags: ['entry_monitoring', 'glass_break', 'battery_powered']
      }
    ],
    services: [
      {
        id: 'security_install',
        name: 'Security Installation',
        description: 'Professional installation of security devices',
        category: 'installation',
        price: 299,
        duration: '2-3 hours',
        tags: ['professional_install', 'security_setup']
      }
    ],
    monthlyPrice: 49,
    installPrice: 299,
    installTime: '2-3 hours',
    tags: ['security', 'basic_protection', 'entry_level'],
    priority: 1
  },
  {
    id: 'comfort_automation',
    name: 'Comfort Automation',
    description: 'Smart climate control and lighting automation',
    category: 'comfort',
    devices: [
      {
        id: 'smart_thermostat',
        name: 'Smart Thermostat',
        description: 'Learning thermostat with energy savings',
        category: 'climate',
        brand: 'Ecobee',
        model: 'SmartThermostat Premium',
        price: 249,
        tags: ['climate_control', 'energy_savings', 'learning_thermostat']
      },
      {
        id: 'smart_plugs_4',
        name: 'Smart Plugs (4x)',
        description: 'WiFi smart plugs for appliance control',
        category: 'automation',
        brand: 'TP-Link',
        model: 'Kasa Smart Plug',
        price: 15,
        tags: ['appliance_control', 'energy_monitoring', 'voice_control']
      },
      {
        id: 'smart_bulbs_6',
        name: 'Smart Bulbs (6x)',
        description: 'Color-changing smart LED bulbs',
        category: 'lighting',
        brand: 'Philips Hue',
        model: 'White and Color Ambiance',
        price: 49,
        tags: ['smart_lighting', 'color_control', 'mood_lighting']
      }
    ],
    services: [
      {
        id: 'comfort_install',
        name: 'Comfort Installation',
        description: 'Installation and setup of comfort devices',
        category: 'installation',
        price: 199,
        duration: '2-3 hours',
        tags: ['comfort_setup', 'automation_config']
      }
    ],
    monthlyPrice: 39,
    installPrice: 199,
    installTime: '2-3 hours',
    tags: ['comfort', 'automation', 'energy_savings'],
    priority: 2
  },
  {
    id: 'health_safety',
    name: 'Health & Safety',
    description: 'Wellness monitoring and emergency alerts',
    category: 'health',
    devices: [
      {
        id: 'smoke_co_detector',
        name: 'Smoke & CO Detector',
        description: 'Smart smoke and carbon monoxide detector',
        category: 'safety',
        brand: 'Nest',
        model: 'Protect',
        price: 119,
        tags: ['fire_safety', 'co2_monitoring', 'life_safety']
      },
      {
        id: 'air_quality_sensor',
        name: 'Air Quality Sensor',
        description: 'Monitor indoor air quality',
        category: 'health',
        brand: 'Airthings',
        model: 'View Plus',
        price: 299,
        tags: ['air_quality', 'health_monitoring', 'vocs_detection']
      },
      {
        id: 'water_leak_sensor_3',
        name: 'Water Leak Sensors (3x)',
        description: 'Detect water leaks and flooding',
        category: 'safety',
        brand: 'Aqara',
        model: 'Water Leak Sensor',
        price: 19,
        tags: ['water_detection', 'flood_prevention', 'property_protection']
      }
    ],
    services: [
      {
        id: 'health_install',
        name: 'Health & Safety Installation',
        description: 'Installation of health and safety devices',
        category: 'installation',
        price: 149,
        duration: '1-2 hours',
        tags: ['safety_setup', 'health_monitoring']
      }
    ],
    monthlyPrice: 29,
    installPrice: 149,
    installTime: '1-2 hours',
    tags: ['health', 'safety', 'wellness'],
    priority: 3
  }
];

// Base Plans Schema
export const basePlans: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Essential smart home foundation',
    basePrice: 79,
    features: [
      'Smart home hub & mobile app',
      'Professional installation & training',
      'Essential smart devices (3-5)',
      'Basic automation setup',
      'Email & chat support',
      'Monthly system health check'
    ],
    deviceLimit: 8,
    supportLevel: 'basic',
    tags: ['starter', 'essential', 'basic_support']
  },
  {
    id: 'complete',
    name: 'Complete',
    description: 'Comprehensive smart home solution',
    basePrice: 129,
    features: [
      'Everything in Starter',
      'Extended device coverage',
      'Advanced automation',
      'Phone support',
      'Weekly health checks',
      'Family sharing (up to 6 members)'
    ],
    deviceLimit: 20,
    supportLevel: 'standard',
    tags: ['complete', 'comprehensive', 'standard_support']
  },
  {
    id: 'concierge',
    name: 'Concierge',
    description: 'Premium smart home experience',
    basePrice: 199,
    features: [
      'Everything in Complete',
      'Unlimited devices',
      'Custom automation',
      '24/7 dedicated support',
      'Weekly maintenance visits',
      'Concierge service coordination'
    ],
    deviceLimit: -1, // Unlimited
    supportLevel: 'concierge',
    tags: ['concierge', 'premium', 'luxury_service']
  }
];

// Logic mapping for recommendations
export const recommendationLogic = {
  // Plan recommendations based on tags
  planRecommendations: {
    starter: ['apartment', 'small_home', 'budget_conscious', 'self_install'],
    complete: ['single_family', 'medium_home', 'balanced_budget', 'white_glove'],
    concierge: ['estate', 'large_home', 'premium_budget', 'concierge_service']
  },
  
  // Pack recommendations based on tags
  packRecommendations: {
    security_essentials: ['outdoor_cameras', 'doorbell_camera', 'door_sensors', 'smart_locks'],
    comfort_automation: ['smart_thermostat', 'smart_lighting', 'smart_plugs', 'smart_blinds'],
    health_safety: ['elderly_care', 'fire_safety', 'wellness_monitoring', 'medical_devices']
  },
  
  // Device recommendations based on tags
  deviceRecommendations: {
    'video_doorbell': ['doorbell_camera', 'visitor_monitoring'],
    'outdoor_cameras': ['outdoor_security', 'perimeter_protection'],
    'smart_thermostat': ['climate_control', 'energy_savings'],
    'smart_locks': ['smart_locks', 'keyless_entry'],
    'smoke_detector': ['fire_safety', 'life_safety']
  }
}; 