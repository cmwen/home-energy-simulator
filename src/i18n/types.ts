import type React from 'react';

/** Each education section has a title and a content function that returns JSX */
export interface EducationSection {
  title: string;
  content: React.ReactNode;
  advanced?: boolean;
}

export interface ProtocolSection {
  key: string;
  title: string;
  accentColor: string;
  content: (userLevel: 'beginner' | 'advanced') => React.ReactNode;
  advancedOnly?: boolean;
}

export interface ModeCardData {
  name: string;
  color: string;
  description: string;
  details: string[];
}

export interface StrategySection {
  key: string;
  title: string;
  accentColor: string;
  content: (userLevel: 'beginner' | 'advanced') => React.ReactNode;
  advancedOnly?: boolean;
}

export interface ScenarioStrings {
  name: string;
  tagline: string;
  description: string;
  goal: string;
  context: string;
}

export interface ComponentUnlockStrings {
  gridMeter: string[];
  energyMonitor: string[];
  mainSwitchboard: string[];
  inverter: string[];
  battery: string[];
  evCharger: string[];
}

export interface Translations {
  // ── Nav ──
  nav_title: string;
  nav_simulator: string;
  nav_scenarios: string;
  nav_learn: string;
  nav_protocols: string;
  nav_strategies: string;
  nav_level: string;
  nav_level_beginner: string;
  nav_level_advanced: string;

  // ── Footer ──
  footer_text: string;

  // ── Theme ──
  theme_light: string;
  theme_dark: string;
  theme_auto: string;

  // ── SystemSummary ──
  summary_solar_generation: string;
  summary_home_consumption: string;
  summary_grid_import: string;
  summary_grid_export: string;
  summary_battery: string;
  summary_battery_idle: string;
  summary_battery_charging: string;
  summary_battery_discharging: string;
  summary_ev: string;
  summary_ev_full: string;
  summary_ev_not_charging: string;
  summary_self_consumption: string;
  summary_self_sufficiency: string;

  // ── SessionStatsPanel ──
  stats_session_totals: string;
  stats_press_play: string;
  stats_reset: string;
  stats_solar_generated: string;
  stats_self_used: string;
  stats_exported: string;
  stats_grid_imported: string;
  stats_cost: string;
  stats_grid_exported: string;
  stats_earned: string;
  stats_solar_value: string;
  stats_avoided_import_fit: string;
  stats_net_grid_cost: string;
  stats_net_credit: string;
  stats_import_minus_fit: string;
  stats_home_consumed: string;
  stats_total_load: string;
  stats_fit: string;

  // ── SimulationControls ──
  sim_pause: string;
  sim_play: string;
  sim_speed: string;
  sim_time: string;
  sim_clouds: string;
  sim_season: string;
  sim_temperature: string;
  sim_spring: string;
  sim_summer: string;
  sim_autumn: string;
  sim_winter: string;

  // ── ComponentEditor ──
  editor_enabled: string;
  editor_disabled: string;
  editor_remove_component: string;
  editor_power_override: string;
  // Type labels
  type_grid: string;
  type_smart_meter: string;
  type_grid_meter: string;
  type_energy_monitor: string;
  type_main_switchboard: string;
  type_solar_panels: string;
  type_inverter: string;
  type_battery: string;
  type_ev_charger: string;
  type_home_load: string;
  type_heat_pump: string;
  // Field labels
  field_panel_count: string;
  field_panel_wattage: string;
  field_roof_angle: string;
  field_capacity: string;
  field_current_soc: string;
  field_max_charge_rate: string;
  field_max_discharge_rate: string;
  field_max_current: string;
  field_phases: string;
  field_phase_single: string;
  field_phase_three: string;
  field_voltage: string;
  field_charging_standard: string;
  field_charging_mode: string;
  field_is_charging: string;
  field_ev_battery: string;
  field_ev_capacity: string;
  field_efficiency: string;
  field_max_output: string;
  field_hybrid_mode: string;
  field_grid_export_limit: string;
  field_feed_in_tariff: string;
  field_import_tariff: string;
  field_base_load: string;
  field_cop_rating: string;
  // Charging modes
  mode_fast: string;
  mode_eco: string;
  mode_solar_only: string;
  mode_scheduled: string;
  // Info blurbs
  info_grid_meter: string;
  info_energy_monitor: string;
  info_switchboard: string;

  // ── AddComponentPanel ──
  add_component: string;
  add_switchboard: string;

  // ── SetupToolbar ──
  setup_label: string;
  setup_save_json: string;
  setup_load_json: string;
  setup_share_url: string;
  setup_reset: string;
  setup_downloaded: string;
  setup_invalid_file: string;
  setup_loaded: string;
  setup_url_copied: string;
  setup_reset_confirm: string;
  setup_reset_done: string;
  setup_auto_saved: string;
  setup_auto_saved_tooltip: string;

  // ── ScenariosSection ──
  scenarios_title: string;
  scenarios_description: string;
  scenarios_active: string;
  scenarios_goal: string;
  scenarios_context: string;
  scenarios_what_unlocks: string;
  scenarios_what_setup_unlocks: string;
  scenarios_load: string;
  scenarios_currently_loaded: string;
  scenarios_tip_label: string;
  scenarios_tip: string;

  // ── Scenario preset strings ──
  scenario_solar_only_name: string;
  scenario_solar_only_tagline: string;
  scenario_solar_only_description: string;
  scenario_solar_only_goal: string;
  scenario_solar_only_context: string;

  scenario_solar_battery_name: string;
  scenario_solar_battery_tagline: string;
  scenario_solar_battery_description: string;
  scenario_solar_battery_goal: string;
  scenario_solar_battery_context: string;

  scenario_solar_ev_name: string;
  scenario_solar_ev_tagline: string;
  scenario_solar_ev_description: string;
  scenario_solar_ev_goal: string;
  scenario_solar_ev_context: string;

  scenario_full_system_name: string;
  scenario_full_system_tagline: string;
  scenario_full_system_description: string;
  scenario_full_system_goal: string;
  scenario_full_system_context: string;

  scenario_zero_export_name: string;
  scenario_zero_export_tagline: string;
  scenario_zero_export_description: string;
  scenario_zero_export_goal: string;
  scenario_zero_export_context: string;

  scenario_ev_no_ct_name: string;
  scenario_ev_no_ct_tagline: string;
  scenario_ev_no_ct_description: string;
  scenario_ev_no_ct_goal: string;
  scenario_ev_no_ct_context: string;

  // ── Component unlock strings ──
  unlock: ComponentUnlockStrings;

  // ── Education ──
  learn_title: string;
  learn_beginner_subtitle: string;
  learn_advanced_subtitle: string;
  learn_sections: EducationSection[];

  protocols_title: string;
  protocols_subtitle: string;
  protocols_advanced_extra: string;
  protocols_sections: ProtocolSection[];

  strategies_title: string;
  strategies_subtitle: string;
  strategies_advanced_extra: string;
  strategies_sections: StrategySection[];
}
