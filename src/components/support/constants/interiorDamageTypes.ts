
// Define sections for logical grouping
export const interiorSections = [
  { id: 'interior', label: 'Interiör' },
  { id: 'control_elements', label: 'Reglage' },
  { id: 'trunk', label: 'Bagageutrymme' }
];

// Define all possible damage types that can be reused
const commonDamageTypes = {
  interior: [
    'Hål',
    'Rekonditionering krävs',
    'Utsliten',
    'Saknad del',
    'Repa',
    'Brännskada',
    'Smutsig',
    'Spricka',
    'Ruptur'
  ],
  electrical: [
    'Fungerar ej',
    'Glapp',
    'Trasig',
    'Intermittent fel'
  ],
  display: [
    'Fungerar ej',
    'Display fel',
    'Glapp',
    'Trasig'
  ],
  trunk: [
    'Hål',
    'Rekonditionering krävs',
    'Utsliten',
    'Saknad del',
    'Repa',
    'Brännskada',
    'Smutsig',
    'Spricka',
    'Ruptur'
  ]
};

export const interiorComponents = {
  'interior': [
    { id: 'front_door_interior_left', label: 'Dörr interiör fram vänster' },
    { id: 'front_door_interior_right', label: 'Dörr interiör fram höger' },
    { id: 'door_interior_rear_left', label: 'Dörr interiör bak vänster' },
    { id: 'door_interior_rear_right', label: 'Dörr interiör bak höger' },
    { id: 'driver_seat', label: 'Förarsäte' },
    { id: 'passenger_seat', label: 'Passagerarsäte' },
    { id: 'seat_back_left', label: 'Baksäte vänster' },
    { id: 'seat_back_right', label: 'Baksäte höger' },
    { id: 'other_seats', label: 'Övriga säten' },
    { id: 'dashboard', label: 'Instrumentbräda' },
    { id: 'center_console', label: 'Mittkonsol' },
    { id: 'headliner', label: 'Innertak' },
    { id: 'hat_rack', label: 'Hatthylla' },
    { id: 'floor_covering', label: 'Golvbeklädnad' }
  ],
  'control_elements': [
    { id: 'window_lifter', label: 'Fönsterhiss' },
    { id: 'key', label: 'Nyckel' },
    { id: 'spare_key', label: 'Reservnyckel' },
    { id: 'navigation_system', label: 'Navigationssystem' },
    { id: 'rear_window_defroster', label: 'Bakrutedefroster' },
    { id: 'front_windshield_defroster', label: 'Vindrutedefroster' },
    { id: 'radio', label: 'Radio' },
    { id: 'fan', label: 'Fläkt' },
    { id: 'instrument_cluster', label: 'Instrumentkluster' },
    { id: 'horn', label: 'Tuta' },
    { id: 'window_wiper_washer', label: 'Vindrutetorkare och spolare' },
    { id: 'warning_lights', label: 'Varningslampor' },
    { id: 'air_conditioning', label: 'Luftkonditionering' },
    { id: 'interior_lighting', label: 'Innerbelysning' },
    { id: 'steering_wheel_lock', label: 'Rattlås' },
    { id: 'hand_brake', label: 'Handbroms' },
    { id: 'clutch_pedal_play', label: 'Kopplingspedalspel' },
    { id: 'abs_control_light', label: 'ABS-kontrollampa' },
    { id: 'esp_control_light', label: 'ESP-kontrollampa' },
    { id: 'airbag_control_light', label: 'Airbag-kontrollampa' },
    { id: 'alarm_system', label: 'Larmsystem' },
    { id: 'seat_heating', label: 'Stolsvärme' },
    { id: 'block_heater', label: 'Motorvärmare' },
    { id: 'pdc', label: 'PDC' },
    { id: 'central_lock_system', label: 'Centrallås' },
    { id: 'electric_wing_mirrors', label: 'Elektriska sidospeglar' },
    { id: 'cruise_control', label: 'Farthållare' }
  ],
  'trunk': [
    { id: 'spare_wheel', label: 'Reservhjul' },
    { id: 'trunk_floor_covering', label: 'Bagagerumsmatta' },
    { id: 'trunk_inside_cover_left', label: 'Bagagerumsinklädnad vänster' },
    { id: 'trunk_inside_cover_right', label: 'Bagagerumsinklädnad höger' },
    { id: 'load_compartment_cover', label: 'Insynsskydd' },
    { id: 'tire_emergency_kit', label: 'Däckreparationskit' }
  ]
};

// Map components to their specific damage types
export const interiorDamageTypes: Record<string, string[]> = {
  // Interior items
  'front_door_interior_left': [...commonDamageTypes.interior],
  'front_door_interior_right': [...commonDamageTypes.interior],
  'door_interior_rear_left': [...commonDamageTypes.interior],
  'door_interior_rear_right': [...commonDamageTypes.interior],
  'driver_seat': [...commonDamageTypes.interior, 'Sätesvärme trasig'],
  'passenger_seat': [...commonDamageTypes.interior, 'Sätesvärme trasig'],
  'seat_back_left': [...commonDamageTypes.interior],
  'seat_back_right': [...commonDamageTypes.interior],
  'other_seats': [...commonDamageTypes.interior],
  'dashboard': [...commonDamageTypes.interior],
  'center_console': [...commonDamageTypes.interior],
  'headliner': [...commonDamageTypes.interior],
  'hat_rack': [...commonDamageTypes.interior],
  'floor_covering': [...commonDamageTypes.interior],

  // Control elements
  'window_lifter': [...commonDamageTypes.electrical],
  'key': ['Saknas', 'Defekt', 'Trasig', 'Batterifel'],
  'navigation_system': [...commonDamageTypes.display],
  'radio': ['Fungerar ej', 'Display fel', 'Glapp', 'Trasig knapp', 'Dåligt ljud'],
  'air_conditioning': ['Fungerar ej', 'Svag effekt', 'Oljud', 'Läckage'],
  'central_lock_system': [...commonDamageTypes.electrical],
  'cruise_control': ['Fungerar ej', 'Glapp', 'Trasig knapp', 'Intermittent fel'],
  'rear_window_defroster': [...commonDamageTypes.electrical],
  'front_windshield_defroster': [...commonDamageTypes.electrical],
  'fan': ['Fungerar ej', 'Oljud', 'Svag effekt'],
  'instrument_cluster': [...commonDamageTypes.display],
  'horn': [...commonDamageTypes.electrical],
  'window_wiper_washer': [...commonDamageTypes.electrical],
  'warning_lights': [...commonDamageTypes.electrical],
  'interior_lighting': [...commonDamageTypes.electrical],
  'steering_wheel_lock': [...commonDamageTypes.electrical],
  'hand_brake': [...commonDamageTypes.electrical],
  'clutch_pedal_play': ['För stort spel', 'Glapp', 'Fungerar ej'],
  'abs_control_light': [...commonDamageTypes.electrical],
  'esp_control_light': [...commonDamageTypes.electrical],
  'airbag_control_light': [...commonDamageTypes.electrical],
  'alarm_system': [...commonDamageTypes.electrical],
  'seat_heating': [...commonDamageTypes.electrical],
  'block_heater': [...commonDamageTypes.electrical],
  'pdc': [...commonDamageTypes.electrical],
  'electric_wing_mirrors': [...commonDamageTypes.electrical],
  'spare_key': ['Saknas', 'Defekt', 'Trasig'],

  // Trunk items
  'spare_wheel': ['Saknad del', 'Skadad', 'Defekt'],
  'trunk_floor_covering': [...commonDamageTypes.trunk],
  'trunk_inside_cover_left': [...commonDamageTypes.trunk],
  'trunk_inside_cover_right': [...commonDamageTypes.trunk],
  'load_compartment_cover': [...commonDamageTypes.trunk],
  'tire_emergency_kit': ['Saknad del', 'Byte krävs']
};

