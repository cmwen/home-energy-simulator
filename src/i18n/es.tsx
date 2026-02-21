import React from 'react';
import type { Translations } from './types';

const codeBlockStyle: React.CSSProperties = {
  backgroundColor: '#16161e',
  borderRadius: 6,
  padding: 12,
  margin: '8px 0',
  fontFamily: '"Fira Code", "Cascadia Code", "Consolas", monospace',
  fontSize: 12,
  lineHeight: 1.6,
  color: '#a9b1d6',
  overflowX: 'auto',
  border: '1px solid #2a2a3e',
};

export const es: Translations = {
  // ── Nav ──
  nav_title: 'Simulador de Energía Residencial',
  nav_simulator: 'Simulador',
  nav_scenarios: 'Escenarios',
  nav_learn: 'Aprender',
  nav_protocols: 'Protocolos',
  nav_strategies: 'Estrategias',
  nav_level: 'Nivel:',
  nav_level_beginner: 'principiante',
  nav_level_advanced: 'avanzado',

  // ── Footer ──
  footer_text: 'Simulador de Energía Residencial — Herramienta interactiva de aprendizaje para sistemas de energía del hogar',

  // ── Theme ──
  theme_light: 'Claro',
  theme_dark: 'Oscuro',
  theme_auto: 'Auto',

  // ── SystemSummary ──
  summary_solar_generation: 'Generación Solar',
  summary_home_consumption: 'Consumo del Hogar',
  summary_grid_import: 'Importación de Red',
  summary_grid_export: 'Exportación a Red',
  summary_battery: 'Batería',
  summary_battery_idle: 'Inactiva',
  summary_battery_charging: 'Cargando',
  summary_battery_discharging: 'Descargando',
  summary_ev: 'VE',
  summary_ev_full: 'Completa',
  summary_ev_not_charging: 'Sin cargar',
  summary_self_consumption: 'Autoconsumo',
  summary_self_sufficiency: 'Autosuficiencia',

  // ── SessionStatsPanel ──
  stats_session_totals: 'Totales de Sesión',
  stats_press_play: '— presione Play para acumular',
  stats_reset: 'Reiniciar',
  stats_solar_generated: 'Solar Generada',
  stats_self_used: 'autoconsumo',
  stats_exported: 'exportada',
  stats_grid_imported: 'Importada de Red',
  stats_cost: 'Costo:',
  stats_grid_exported: 'Exportada a Red',
  stats_earned: 'Ganado:',
  stats_solar_value: 'Valor Solar',
  stats_avoided_import_fit: 'importación evitada + FiT ganado',
  stats_net_grid_cost: 'Costo Neto de Red',
  stats_net_credit: 'crédito neto (exportó más de lo que costó)',
  stats_import_minus_fit: 'gasto de importación menos FiT',
  stats_home_consumed: 'Consumido en el Hogar',
  stats_total_load: 'carga total (incl. VE)',
  stats_fit: 'FiT',

  // ── SimulationControls ──
  sim_pause: 'Pausar',
  sim_play: 'Iniciar',
  sim_speed: 'Velocidad',
  sim_time: 'Hora:',
  sim_clouds: 'Nubes:',
  sim_season: 'Estación',
  sim_temperature: 'Temperatura',
  sim_spring: 'Primavera',
  sim_summer: 'Verano',
  sim_autumn: 'Otoño',
  sim_winter: 'Invierno',

  // ── ComponentEditor ──
  editor_enabled: 'Habilitado',
  editor_disabled: 'Deshabilitado',
  editor_remove_component: 'Eliminar Componente',
  editor_power_override: 'Potencia Manual',

  // Type labels
  type_grid: 'Red Eléctrica',
  type_smart_meter: 'Medidor Inteligente',
  type_grid_meter: 'Medidor de Red (NMI)',
  type_energy_monitor: 'Monitor de Energía (CT)',
  type_main_switchboard: 'Tablero Principal',
  type_solar_panels: 'Paneles Solares',
  type_inverter: 'Inversor',
  type_battery: 'Batería',
  type_ev_charger: 'Cargador de VE',
  type_home_load: 'Carga del Hogar',
  type_heat_pump: 'Bomba de Calor',

  // Field labels
  field_panel_count: 'Cantidad de Paneles',
  field_panel_wattage: 'Potencia por Panel',
  field_roof_angle: 'Ángulo del Techo',
  field_capacity: 'Capacidad',
  field_current_soc: 'SOC Actual',
  field_max_charge_rate: 'Velocidad Máx. de Carga',
  field_max_discharge_rate: 'Velocidad Máx. de Descarga',
  field_max_current: 'Corriente Máxima',
  field_phases: 'Fases',
  field_phase_single: 'Monofásico',
  field_phase_three: 'Trifásico',
  field_voltage: 'Voltaje',
  field_charging_standard: 'Estándar de Carga',
  field_charging_mode: 'Modo de Carga',
  field_is_charging: 'Está Cargando',
  field_ev_battery: 'Batería VE (% inicial)',
  field_ev_capacity: 'Capacidad VE',
  field_efficiency: 'Eficiencia',
  field_max_output: 'Potencia Máx. de Salida',
  field_hybrid_mode: 'Modo Híbrido',
  field_grid_export_limit: 'Límite de Exportación a Red',
  field_feed_in_tariff: 'Tarifa de Inyección',
  field_import_tariff: 'Tarifa de Importación',
  field_base_load: 'Carga Base',
  field_cop_rating: 'Coeficiente COP',

  // Charging modes
  mode_fast: 'Rápido',
  mode_eco: 'Eco',
  mode_solar_only: 'Solo Solar',
  mode_scheduled: 'Programado',

  // Info blurbs
  info_grid_meter: 'Este es el medidor NMI de Ausgrid/DNSP (distribuidor de red) en el límite de la propiedad. Registra la importación/exportación para facturación y establece la regla de límite de exportación. No se puede leer ni controlar directamente.',
  info_energy_monitor: 'Monitor con pinza amperométrica CT del lado del consumidor (ej. Shelly EM, Emporia Vue) — instalado en el tablero principal. Permite la medición en tiempo real del excedente solar, necesario para la carga de VE solo con solar y la regulación de exportación cero del inversor.',
  info_switchboard: 'El tablero de distribución AC principal dentro del hogar. Cada carga AC (circuitos del hogar, cargador de VE, bomba de calor) se conecta aquí. La salida AC del inversor y la conexión a la red alimentan este tablero.',

  // ── AddComponentPanel ──
  add_component: 'Agregar Componente',
  add_switchboard: 'Tablero',

  // ── SetupToolbar ──
  setup_label: 'Configuración',
  setup_save_json: 'Guardar JSON',
  setup_load_json: 'Cargar JSON',
  setup_share_url: 'Compartir URL',
  setup_reset: 'Reiniciar',
  setup_downloaded: 'Configuración descargada',
  setup_invalid_file: 'Archivo de configuración inválido — no se pudo analizar el JSON',
  setup_loaded: 'Cargado:',
  setup_url_copied: 'URL para compartir copiada al portapapeles',
  setup_reset_confirm: '¿Reiniciar al sistema predeterminado? Esto descartará su configuración actual.',
  setup_reset_done: 'Reiniciado a valores predeterminados',
  setup_auto_saved: 'Guardado automáticamente en local',
  setup_auto_saved_tooltip: 'Su configuración se guarda automáticamente en el almacenamiento local de este navegador',

  // ── ScenariosSection ──
  scenarios_title: 'Escenarios',
  scenarios_description: 'Configuraciones reales de propietarios australianos, preconfiguradas y listas para explorar. Cargue un escenario para ver cómo se comporta el sistema — luego ajuste los controles, habilite componentes o ejecute la simulación para entender las ventajas y desventajas.',
  scenarios_active: 'Activo',
  scenarios_goal: 'Objetivo',
  scenarios_context: 'Contexto Australiano',
  scenarios_what_unlocks: '¿Qué habilita esta configuración?',
  scenarios_what_setup_unlocks: 'Lo que habilita esta configuración',
  scenarios_load: 'Cargar Escenario →',
  scenarios_currently_loaded: 'Cargado Actualmente',
  scenarios_tip_label: 'Consejo: ',
  scenarios_tip: 'Después de cargar un escenario, cambie a la pestaña Simulador para ver el diagrama del sistema en vivo y los flujos de energía. Use el panel Agregar Componente para agregar o eliminar dispositivos, y la pestaña Aprender para entender qué hace cada componente.',

  // ── Scenario preset strings ──
  scenario_solar_only_name: 'Solo Solar — Reducir Mi Factura',
  scenario_solar_only_tagline: 'Solar básico, sin batería aún',
  scenario_solar_only_description: 'Un nuevo propietario de paneles solares con 6.6 kW de paneles y un inversor de 5 kW. Sin batería, sin VE. El objetivo es trasladar el uso de electrodomésticos diurnos a las horas de sol y exportar el resto.',
  scenario_solar_only_goal: 'Reducir la factura eléctrica maximizando el autoconsumo diurno.',
  scenario_solar_only_context: 'Zona de Ausgrid (distribuidor australiano). Se aplica un límite de exportación de 5 kW. La tarifa de inyección es baja (~5¢/kWh) por lo que el autoconsumo es mucho más valioso que exportar.',

  scenario_solar_battery_name: 'Solar + Batería — Cero Factura Nocturna',
  scenario_solar_battery_tagline: 'Almacenar solar para uso vespertino',
  scenario_solar_battery_description: 'La mejora más común. Una batería de 10 kWh almacena el excedente solar del mediodía para alimentar el hogar durante la tarde y la noche, eliminando la mayoría de las importaciones de la red.',
  scenario_solar_battery_goal: 'Cubrir el consumo vespertino y nocturno con solar almacenada. Apuntar a más del 80% de autosuficiencia.',
  scenario_solar_battery_context: 'Sin batería, el 60–70% de la energía solar podría exportarse a tarifas de inyección bajas. Con una batería de 10 kWh, la mayoría de los hogares pueden lograr importaciones de red cercanas a cero en días soleados.',

  scenario_solar_ev_name: 'Solar + VE — Cargar Gratis con el Sol',
  scenario_solar_ev_tagline: 'Usar excedente solar para cargar tu VE',
  scenario_solar_ev_description: 'Un propietario de VE que quiere cargar su auto con energía solar durante el día. El cargador de VE se conecta a un circuito dedicado de 32A en el tablero principal — no al inversor. Un monitor de energía del consumidor (pinza CT) permite al cargador ver el excedente solar en tiempo real y ajustar su potencia hacia arriba o hacia abajo.',
  scenario_solar_ev_goal: 'Cargar el VE gratis usando excedente solar. Evitar consumir de la red para la carga del VE.',
  scenario_solar_ev_context: 'El cargador de VE se conecta al tablero principal — consume de lo que alimenta el tablero (solar, batería o red). Una pinza CT monitorea la conexión a la red: cuando el excedente solar lleva el medidor a importación cero, el cargador aumenta la potencia. Sin una pinza CT o monitor de energía, la carga "solo solar" no es posible.',

  scenario_full_system_name: 'Sistema Completo — Solar + Batería + VE',
  scenario_full_system_tagline: 'El hogar completo con tendencia a la independencia energética',
  scenario_full_system_description: 'La configuración a la que aspiran la mayoría de los propietarios: paneles solares, inversor híbrido, batería doméstica y un cargador inteligente de VE — todo orquestado por un monitor de energía. La prioridad es usar solar primero, almacenar excedente en la batería, usar la batería para cargar el VE de noche, y solo usar la red cuando sea necesario.',
  scenario_full_system_goal: 'Lograr más del 90% de autosuficiencia. Usar solar para cargas diurnas, batería para las tardes, y red solo como respaldo.',
  scenario_full_system_context: 'Este es el escenario donde la interacción entre componentes es más importante. El medidor de red ve el flujo neto en el límite de la propiedad. El monitor de energía proporciona al HEMS datos en tiempo real para tomar decisiones inteligentes con los cuatro dispositivos.',

  scenario_zero_export_name: 'Exportación Cero — Departamento / Red Integrada',
  scenario_zero_export_tagline: 'Sin exportación permitida — usar cada vatio in situ',
  scenario_zero_export_description: 'Algunos hogares están en redes integradas (consorcios, urbanizaciones nuevas) o tienen una restricción del distribuidor que prohíbe exportar a la red. Cada vatio de solar debe consumirse o almacenarse localmente. Esto requiere que el inversor se regule en tiempo real usando la retroalimentación de la pinza CT.',
  scenario_zero_export_goal: 'Usar el 100% de la solar in situ. La batería absorbe el excedente; el inversor se regula si la batería está llena.',
  scenario_zero_export_context: 'El modo de exportación cero se configura en los ajustes del inversor, con una pinza CT en la conexión a la red proporcionando retroalimentación en tiempo real. El monitor de energía es esencial aquí — sin él, el inversor no puede saber cuándo regularse.',

  scenario_ev_no_ct_name: 'Carga de VE — Sin Pinza CT (Corriente Manual)',
  scenario_ev_no_ct_tagline: 'Solar + VE pero sin monitor de energía — control limitado',
  scenario_ev_no_ct_description: 'Un propietario de VE con solar pero sin pinza CT ni monitor de energía. Sin datos de excedente solar en tiempo real, el cargador no puede seguir dinámicamente la producción solar. El propietario debe establecer una corriente de carga fija manualmente — típicamente 6–10A para mantenerse "aproximadamente" dentro de la producción solar. Cuando la solar baja (nubes, tarde), la red automáticamente compensa y el propietario no tiene forma de evitarlo.',
  scenario_ev_no_ct_goal: 'Entender el costo de no tener una pinza CT. Compare la importación de red aquí vs el escenario Solar + VE (Pinza CT) para ver la diferencia en dinero.',
  scenario_ev_no_ct_context: 'Sin una pinza CT, las funciones de carga inteligente como "Solo Solar" o modo "Eco" no están disponibles. El cargador funciona a una corriente fija establecida por el usuario independientemente de las condiciones solares. Instalar una pinza CT ($150–300 para un Shelly EM o Emporia Vue) habilita la carga solar dinámica y puede amortizarse en meses.',

  // ── Component unlock strings ──
  unlock: {
    gridMeter: [
      'Registra importación y exportación para facturación (medidor NMI)',
      'Establece la regla de límite de exportación (ej. 5 kW en zonas de Ausgrid)',
      'Habilita el crédito de tarifa de inyección de su comercializador',
    ],
    energyMonitor: [
      'Visibilidad en tiempo real del excedente solar para el HEMS',
      'Necesario para carga de VE solo solar (retroalimentación de pinza CT)',
      'Necesario para regulación de exportación cero del inversor',
      'Permite decisiones inteligentes de despacho de batería',
    ],
    mainSwitchboard: [
      'Centro de distribución AC — todas las cargas se conectan aquí',
      'El cargador de VE consume del tablero, no del inversor',
      'Tanto la solar (vía inversor) como la red alimentan el tablero',
    ],
    inverter: [
      'Convierte la corriente continua (DC) solar a corriente alterna (AC) doméstica',
      'Modo híbrido: gestiona la carga de batería acoplada en DC',
      'Modo exportación cero: regula la salida mediante retroalimentación de pinza CT',
    ],
    battery: [
      'Almacena excedente solar para uso vespertino y nocturno',
      'Aumenta la autosuficiencia de ~35% a ~80%+ en días soleados',
      'Puede cargarse con tarifas de red en horario valle durante la noche',
    ],
    evCharger: [
      'OCPP 2.0.1: carga inteligente, gestión dinámica de carga',
      'Modo solo solar: carga solo cuando el excedente solar supera el mínimo (necesita pinza CT)',
      'Modo programado: carga en la franja tarifaria valle más económica',
    ],
  },

  // ── Education ──
  learn_title: 'Aprender: Sistemas de Energía del Hogar',
  learn_beginner_subtitle: 'Conceptos fundamentales para entender la energía del hogar. Cambie a Avanzado para contenido más técnico.',
  learn_advanced_subtitle: 'Se muestran todos los temas, incluyendo diseño avanzado de sistemas y detalles técnicos.',

  learn_sections: [
    {
      title: '\u2600\uFE0F ¿Cómo Funciona un Sistema Solar Doméstico?',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            Un sistema solar doméstico convierte la luz solar en electricidad utilizable para su hogar. Así fluye la energía:
          </p>
          <div
            style={{
              backgroundColor: '#16161e',
              borderRadius: 6,
              padding: 14,
              marginBottom: 12,
              fontFamily: 'monospace',
              fontSize: 13,
              color: '#9ece6a',
              lineHeight: 1.8,
            }}
          >
            Luz solar → <strong>Paneles Solares</strong> (electricidad DC)
            <br />
            &nbsp;&nbsp;→ <strong>Inversor</strong> (convierte DC a AC)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;→ <strong>Su Hogar</strong> (alimenta electrodomésticos)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;→ <strong>Batería</strong> (almacena excedente)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;→ <strong>Red</strong> (exporta sobrante)
          </div>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Los Paneles Solares</strong> están hechos de celdas fotovoltaicas (PV) que generan electricidad de corriente continua (DC) cuando se exponen a la luz solar. Incluso en días nublados, los paneles siguen produciendo algo de energía, aunque con producción reducida.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            El <strong style={{ color: '#bb9af7' }}>inversor</strong> es el cerebro del sistema. Convierte la electricidad DC de los paneles en corriente alterna (AC) que usan los electrodomésticos del hogar. Un inversor híbrido también puede gestionar una batería.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            Su hogar usa la electricidad solar primero. Cualquier excedente puede almacenarse en una <strong style={{ color: '#bb9af7' }}>batería doméstica</strong> para uso posterior, o exportarse a la <strong style={{ color: '#bb9af7' }}>red</strong> para obtener un crédito por tarifa de inyección.
          </p>
          <p style={{ margin: 0, color: '#73daca' }}>
            El objetivo es usar la mayor cantidad posible de su propia energía solar — esto se llama <strong>autoconsumo</strong>, y es lo que más dinero le ahorra.
          </p>
        </>
      ),
    },
    {
      title: '\uD83D\uDD0C Medidor de Red vs Monitor de Energía — ¿Cuál es la Diferencia?',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            Hay <strong>dos dispositivos de medición muy diferentes</strong> en un hogar con solar. A menudo se confunden porque ambos miden electricidad — pero están ubicados en lugares distintos, sirven propósitos diferentes y pertenecen a partes distintas.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #6366f1' }}>
              <strong style={{ color: '#6366f1' }}>Medidor de Red (Medidor NMI)</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                El <strong>medidor bidireccional de Ausgrid / DNSP (distribuidor)</strong> en el límite de la propiedad. Instalado y propiedad de su distribuidor de electricidad. Registra la importación y exportación total de toda la propiedad para facturación. No puede leer ni controlar este medidor directamente.
              </p>
              <ul style={{ margin: '8px 0 0', paddingLeft: 16, fontSize: 12, color: '#9ca3af' }}>
                <li style={{ marginBottom: 3 }}>Establece la regla de límite de exportación (ej. 5 kW en zonas de Ausgrid)</li>
                <li style={{ marginBottom: 3 }}>Proporciona datos de facturación a su comercializador</li>
                <li style={{ marginBottom: 3 }}>Habilita el crédito por tarifa de inyección</li>
                <li>Usted paga al comercializador; ellos leen este medidor</li>
              </ul>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #ec4899' }}>
              <strong style={{ color: '#ec4899' }}>Monitor de Energía (Pinza CT)</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                Un <strong>dispositivo del lado del consumidor</strong> que usted instala en su tablero principal. Ejemplos: Shelly EM, Emporia Vue, IoTaWatt. Usa sensores CT de pinza en cada circuito. Le da a su HEMS o inversor lecturas de potencia en tiempo real en milisegundos.
              </p>
              <ul style={{ margin: '8px 0 0', paddingLeft: 16, fontSize: 12, color: '#9ca3af' }}>
                <li style={{ marginBottom: 3 }}>Necesario para carga de VE solo solar</li>
                <li style={{ marginBottom: 3 }}>Necesario para regulación de exportación cero del inversor</li>
                <li style={{ marginBottom: 3 }}>Habilita el despacho inteligente de batería</li>
                <li>Usted lo posee y lo lee</li>
              </ul>
            </div>
          </div>
          <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, marginBottom: 10, fontFamily: 'monospace', fontSize: 12, color: '#9ece6a', lineHeight: 1.9 }}>
            Red → <strong>Medidor de Red (NMI)</strong> → Tablero Principal<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↑<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Monitor de Energía (CT)</strong> ← se engancha en los cables del tablero<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓ envía datos al HEMS / inversor
          </div>
          <p style={{ margin: 0, color: '#73daca', fontSize: 13 }}>
            <strong>Regla clave:</strong> El medidor NMI es su factura. La pinza CT es su cerebro. Para un autoconsumo solar inteligente — especialmente la carga de VE solo solar — necesita la pinza CT. El medidor NMI por sí solo no es suficiente.
          </p>
        </>
      ),
    },
    {
      title: '\uD83D\uDCB0 Entendiendo Su Factura Eléctrica',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            Con un sistema solar, su factura eléctrica se calcula en base a dos flujos principales:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #f7768e' }}>
              <strong style={{ color: '#f7768e' }}>Importación (usted paga)</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                Electricidad consumida de la red cuando su solar y batería no pueden cubrir sus necesidades. Típicamente $0.25–$0.45/kWh dependiendo de su tarifa y hora del día.
              </p>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #9ece6a' }}>
              <strong style={{ color: '#9ece6a' }}>Exportación (usted gana)</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                El excedente solar enviado a la red le genera un crédito por tarifa de inyección. Típicamente $0.05–$0.12/kWh — mucho menos de lo que paga por importar.
              </p>
            </div>
          </div>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Ahorro por autoconsumo:</strong> Cada kWh de solar que usa directamente evita importar a la tarifa minorista completa. Si la importación cuesta $0.30/kWh y la exportación paga $0.08/kWh, cada kWh autoconsumido le ahorra $0.30 en vez de ganar solo $0.08.
          </p>
          <p style={{ margin: 0, color: '#73daca' }}>
            Por eso maximizar el autoconsumo (usar la solar directamente o almacenarla en batería) es más valioso que exportar a la red.
          </p>
        </>
      ),
    },
    {
      title: '\uD83D\uDD0B ¿Qué es una Batería Doméstica?',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            Una batería doméstica (también llamada batería solar o sistema de almacenamiento de energía) almacena el excedente de energía solar para usarlo cuando no hay sol.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Cómo funciona:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>Se carga</strong> durante el día cuando la producción solar supera el consumo del hogar
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Se descarga</strong> en la tarde y la noche para alimentar su hogar en vez de importar de la red
            </li>
            <li style={{ marginBottom: 4 }}>
              Aumenta significativamente su <strong>tasa de autoconsumo</strong> — de típicamente 30–40% sin batería a 60–80% con una
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Especificaciones típicas:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>Capacidad:</strong> 5–15 kWh utilizables (un hogar típico usa 8–12 kWh durante la noche)
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Potencia:</strong> 2.5–5 kW de velocidad continua de carga/descarga
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Vida útil en ciclos:</strong> 4,000–10,000 ciclos dependiendo de la química
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Eficiencia de ida y vuelta:</strong> 90–95% (se pierde un 5–10% en el ciclo de carga/descarga)
            </li>
          </ul>
          <p style={{ margin: 0, color: '#73daca' }}>
            Una batería es más valiosa cuando hay una gran diferencia entre su tarifa de inyección y su tarifa de importación, o si tiene un plan con tarifas por horario.
          </p>
        </>
      ),
    },
    {
      title: '\uD83D\uDE97 Carga de VE en el Hogar',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            Cargar un vehículo eléctrico en casa es una de las cargas controlables más grandes en un hogar, lo que la hace ideal para la gestión inteligente de energía.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Niveles de carga:</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #e0af68' }}>
              <strong style={{ color: '#e0af68' }}>Nivel 1 (Lento)</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                Enchufe estándar, 1.4–2.4 kW. Agrega aproximadamente 8–15 km de autonomía por hora. Suficiente para recargas nocturnas con trayectos cortos.
              </p>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #7aa2f7' }}>
              <strong style={{ color: '#7aa2f7' }}>Nivel 2 (Rápido)</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                EVSE dedicado, 3.7–22 kW. Monofásico (hasta 7.4 kW) o trifásico (hasta 22 kW). Agrega 25–120 km/hora.
              </p>
            </div>
          </div>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Monofásico vs trifásico:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>Monofásico:</strong> Lo más común en residencial. Máx. 32A × 230V = 7.4 kW
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Trifásico:</strong> Disponible en algunos mercados. Máx. 32A × 3 × 230V = 22 kW
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Beneficios de la carga inteligente:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              Cargar con excedente solar para minimizar costos de electricidad
            </li>
            <li style={{ marginBottom: 4 }}>
              Programar la carga para períodos con tarifa valle
            </li>
            <li style={{ marginBottom: 4 }}>
              Ajustar dinámicamente la velocidad de carga según la potencia solar disponible
            </li>
            <li style={{ marginBottom: 4 }}>
              Evitar sobrecargar su conexión a la red
            </li>
          </ul>
          <p style={{ margin: 0, color: '#73daca' }}>
            Una batería de VE (40–100 kWh) es mucho más grande que una batería doméstica (5–15 kWh), por lo que las decisiones de carga inteligente tienen un impacto significativo en sus costos de energía.
          </p>
        </>
      ),
    },
    {
      title: '\u26A1 ¿Qué es un Inversor?',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            Un inversor convierte la electricidad de corriente continua (DC) de los paneles solares en corriente alterna (AC) que su hogar y la red utilizan. Es el componente central de cualquier sistema solar.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Tipos de inversores:</strong>
          </p>
          <div style={{ marginBottom: 12 }}>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, marginBottom: 8, borderLeft: '3px solid #e0af68' }}>
              <strong style={{ color: '#e0af68' }}>Inversor de Cadena (String Inverter)</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                Los paneles se conectan en serie (una &quot;cadena&quot;). Un solo inversor maneja toda la cadena. Económico pero el panel más débil limita toda la cadena. Mejor para techos sin sombra.
              </p>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, marginBottom: 8, borderLeft: '3px solid #7aa2f7' }}>
              <strong style={{ color: '#7aa2f7' }}>Micro Inversor</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                Cada panel tiene su propio inversor pequeño. Los paneles operan independientemente, así que la sombra en un panel no afecta a los demás. Mayor costo pero mejor para techos complejos o con sombra parcial.
              </p>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #9ece6a' }}>
              <strong style={{ color: '#9ece6a' }}>Inversor Híbrido</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                Combina un inversor solar y un inversor de batería en una sola unidad. Gestiona la producción solar, la carga/descarga de batería y la interacción con la red. La opción más común para nuevas instalaciones con almacenamiento de batería.
              </p>
            </div>
          </div>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Eficiencia:</strong> Los inversores modernos tienen una eficiencia del 96–98%. Esto significa que por cada 1000W de entrada DC, se obtienen 960–980W de salida AC. La pequeña pérdida se convierte en calor.
          </p>
          <p style={{ margin: 0, color: '#73daca' }}>
            El dimensionamiento del inversor es importante: debe coincidir aproximadamente con el tamaño de su arreglo solar. Un inversor subdimensionado recortará (desperdiciará) la producción solar pico, mientras que uno sobredimensionado desperdicia dinero.
          </p>
        </>
      ),
    },
    {
      title: '\uD83D\uDCD0 Guía de Dimensionamiento del Sistema',
      advanced: true,
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            Dimensionar correctamente su sistema solar, batería e inversor es fundamental para maximizar el retorno de inversión.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Dimensionamiento del arreglo solar:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              Comience con su consumo eléctrico anual (ej., 6,000 kWh/año)
            </li>
            <li style={{ marginBottom: 4 }}>
              Divida por las horas pico de sol de su ubicación × 365 (ej., 4.5 horas × 365 = 1,642)
            </li>
            <li style={{ marginBottom: 4 }}>
              Aplique un factor de reducción de 0.8 por pérdidas: 6,000 / (1,642 × 0.8) ≈ sistema de 4.6 kW
            </li>
            <li style={{ marginBottom: 4 }}>
              Regla general: 1 kW de solar produce aproximadamente 1,200–1,600 kWh/año dependiendo de la ubicación
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Dimensionamiento de la batería:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              Calcule su consumo vespertino/nocturno (típicamente 8–12 kWh para un hogar promedio)
            </li>
            <li style={{ marginBottom: 4 }}>
              Elija una batería que cubra el 80–100% de esta carga nocturna
            </li>
            <li style={{ marginBottom: 4 }}>
              Considere la profundidad de descarga (DoD): una batería de 10 kWh al 90% de DoD proporciona 9 kWh utilizables
            </li>
            <li style={{ marginBottom: 4 }}>
              Sobredimensionar la batería ofrece rendimientos decrecientes a menos que tenga un sistema solar muy grande
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Dimensionamiento del inversor:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              Haga coincidir el inversor con su arreglo solar: una relación DC:AC de 1:1 a 1.3:1 es típica
            </li>
            <li style={{ marginBottom: 4 }}>
              Un ligero sobredimensionamiento (ej., 6.6 kW de paneles en un inversor de 5 kW) maximiza la producción matutina y vespertina
            </li>
            <li style={{ marginBottom: 4 }}>
              Asegúrese de que el inversor soporte la velocidad de carga/descarga de su batería si es híbrido
            </li>
          </ul>
        </>
      ),
    },
    {
      title: '\uD83D\uDD0C Tipos de Conexión a la Red',
      advanced: true,
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            La forma en que su sistema solar se conecta a la red afecta lo que puede instalar y cuánto puede exportar.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Fases de conexión:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>Monofásico:</strong> Conexión residencial estándar. Típicamente fusible principal de 40–63A. Limita el inversor a 5 kW en muchas jurisdicciones. Un cable activo.
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Trifásico:</strong> Común en viviendas nuevas y algunas regiones. Tres cables activos, cada uno transportando una fase. Permite inversores más grandes (hasta 15–30 kW), carga de VE trifásica (22 kW) y mejor balance de cargas.
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Configuraciones de exportación:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>Exportación completa:</strong> Sin límite en cuánto puede enviar a la red (poco común en instalaciones nuevas)
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Exportación limitada:</strong> El inversor se configura para limitar la exportación a la red a un valor fijo (ej., 5 kW). El excedente solar se recorta o se desvía a la batería/VE.
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Exportación cero:</strong> No se puede exportar electricidad. El inversor debe regular la producción para igualar el consumo exactamente. Requiere una pinza CT o medidor para retroalimentación en tiempo real.
            </li>
          </ul>
          <p style={{ margin: 0, color: '#73daca' }}>
            La limitación de exportación le permite instalar un sistema solar más grande incluso cuando la capacidad de exportación a la red está restringida — el excedente carga su batería o VE en su lugar.
          </p>
        </>
      ),
    },
    {
      title: '\uD83E\uDDEA Comparación de Químicas de Baterías',
      advanced: true,
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            Las dos químicas de litio-ion dominantes en baterías domésticas son LFP y NMC.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #9ece6a' }}>
              <strong style={{ color: '#9ece6a' }}>LFP (Litio Ferro Fosfato)</strong>
              <ul style={{ margin: '8px 0 0', paddingLeft: 16, fontSize: 13 }}>
                <li style={{ marginBottom: 3 }}>6,000–10,000+ ciclos de vida útil</li>
                <li style={{ marginBottom: 3 }}>Muy segura, térmicamente estable</li>
                <li style={{ marginBottom: 3 }}>100% de profundidad de descarga (DoD)</li>
                <li style={{ marginBottom: 3 }}>Menor densidad energética (más pesada)</li>
                <li style={{ marginBottom: 3 }}>Sin cobalto — cadena de suministro más ética</li>
                <li>Ejemplos: BYD, Tesla Powerwall 3</li>
              </ul>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #7aa2f7' }}>
              <strong style={{ color: '#7aa2f7' }}>NMC (Níquel Manganeso Cobalto)</strong>
              <ul style={{ margin: '8px 0 0', paddingLeft: 16, fontSize: 13 }}>
                <li style={{ marginBottom: 3 }}>3,000–5,000 ciclos de vida útil</li>
                <li style={{ marginBottom: 3 }}>Mayor densidad energética (más liviana)</li>
                <li style={{ marginBottom: 3 }}>Típicamente se recomienda 80–90% de DoD</li>
                <li style={{ marginBottom: 3 }}>Requiere más gestión térmica</li>
                <li style={{ marginBottom: 3 }}>Mayor costo por ciclo a lo largo de la vida útil</li>
                <li>Ejemplos: LG RESU, Powerwall antiguo</li>
              </ul>
            </div>
          </div>
          <p style={{ margin: 0, color: '#73daca' }}>
            Para el ciclado diario en un sistema solar doméstico, LFP es ahora la química preferida debido a su mayor vida útil en ciclos, seguridad y costo por kWh en mejora a lo largo de la vida de la batería.
          </p>
        </>
      ),
    },
    {
      title: '\uD83C\uDF21\uFE0F Integración de Bomba de Calor',
      advanced: true,
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            Las bombas de calor son calefactores eléctricos altamente eficientes que se combinan bien con sistemas solares, usando electricidad para mover calor en vez de generarlo directamente.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>COP (Coeficiente de Rendimiento):</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              Un COP de 3.5 significa que por cada 1 kW de electricidad consumida, la bomba de calor entrega 3.5 kW de calor
            </li>
            <li style={{ marginBottom: 4 }}>
              El COP varía con la temperatura exterior — menor en frío extremo
            </li>
            <li style={{ marginBottom: 4 }}>
              Un COP estacional (SCOP) de 3.0–4.0 es típico para bombas de calor aerotérmicas modernas
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Almacenamiento térmico:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              Un tanque de agua caliente actúa como batería térmica — caliente el agua con excedente solar durante el día
            </li>
            <li style={{ marginBottom: 4 }}>
              Precaliente la casa antes de los períodos de tarifa cara usando solar o electricidad de tarifa baja
            </li>
            <li style={{ marginBottom: 4 }}>
              Los tanques buffer almacenan energía térmica con mínima pérdida durante varias horas
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Interacción inteligente con la red:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              Un HEMS puede indicar a la bomba de calor que funcione durante el excedente solar o precios bajos de red
            </li>
            <li style={{ marginBottom: 4 }}>
              La interfaz SG Ready (común en bombas de calor europeas) permite control externo mediante dos entradas digitales
            </li>
            <li style={{ marginBottom: 4 }}>
              Algunas bombas de calor soportan Modbus para integración directa con sistemas de gestión de energía
            </li>
          </ul>
        </>
      ),
    },
    {
      title: '\uD83D\uDCE1 Monitoreo y Datos',
      advanced: true,
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            Monitorear su sistema de energía es esencial para entender el rendimiento, identificar problemas y optimizar el uso.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Pinzas CT (Transformadores de Corriente):</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              Sensores de pinza que miden la corriente que fluye por un cable sin necesidad de cortarlo
            </li>
            <li style={{ marginBottom: 4 }}>
              Se colocan en la alimentación de red, la alimentación solar y los circuitos individuales para medir el flujo de energía
            </li>
            <li style={{ marginBottom: 4 }}>
              Utilizados por muchos inversores y monitores de energía para retroalimentación en tiempo real
            </li>
            <li style={{ marginBottom: 4 }}>
              La precisión depende de la calidad — típicamente 1–2% para CTs de buena calidad
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Sistemas de monitoreo de energía:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>Portales del inversor:</strong> La mayoría de inversores tienen dashboards en la nube (Fronius Solar.web, Huawei FusionSolar, SMA Sunny Portal)
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Monitores dedicados:</strong> Dispositivos como Shelly EM, Emporia Vue o IoTaWatt proporcionan monitoreo granular por circuito
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Plataformas DIY:</strong> Home Assistant con dashboard de energía, Grafana con InfluxDB para datos de series temporales
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>HEMS (Sistema de Gestión de Energía del Hogar):</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              Controlador centralizado que lee datos de todos los dispositivos y toma decisiones de optimización
            </li>
            <li style={{ marginBottom: 4 }}>
              Protocolos utilizados: Modbus TCP/RTU para inversores y medidores, OCPP para cargadores de VE, MQTT para sensores IoT
            </li>
            <li style={{ marginBottom: 4 }}>
              Puede automatizar la carga de batería, carga de VE, programación de bomba de calor y gestión de exportación
            </li>
          </ul>
        </>
      ),
    },
    {
      title: '\uD83D\uDD0C Características del Cargador de VE Doméstico — ¿Qué Hace un Cargador Inteligente?',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            No todos los cargadores de VE domésticos son iguales. Un cargador básico le da una potencia fija. Un cargador inteligente se comunica activamente con su sistema de energía del hogar y ajusta la carga en tiempo real.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Funciones básicas (todos los cargadores domésticos):</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>Potencia fija al amperaje nominal (ej. 16A o 32A)</li>
            <li style={{ marginBottom: 4 }}>Carga programada — inicio/parada a una hora que establece en una app</li>
            <li style={{ marginBottom: 4 }}>Registro de energía por sesión</li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Funciones inteligentes / de gama alta:</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #9ece6a' }}>
              <strong style={{ color: '#9ece6a' }}>Ajuste dinámico de corriente</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                El cargador ajusta continuamente su corriente (ej. 6A–32A) basándose en señales del monitor de energía. Este es el mecanismo central para la carga solo solar — el cargador sigue la curva de excedente solar en tiempo real.
              </p>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #7aa2f7' }}>
              <strong style={{ color: '#7aa2f7' }}>Control remoto por app + actualizaciones OTA</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                Iniciar/detener sesiones remotamente, configurar modos de carga, recibir actualizaciones de firmware por aire. Mantiene el cargador actualizado con nuevos protocolos y funciones sin necesidad de visita del electricista.
              </p>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #bb9af7' }}>
              <strong style={{ color: '#bb9af7' }}>Plug &amp; Charge (ISO 15118)</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                El VE y el cargador se autentican mutuamente de forma automática mediante certificados TLS en el momento en que se conecta el cable — sin necesidad de tarjeta RFID ni app. Requisito para la futura carga V2G (bidireccional).
              </p>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #e0af68' }}>
              <strong style={{ color: '#e0af68' }}>Carga inteligente OCPP 2.0.1</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                Permite que un sistema de gestión central (CSMS) envíe programas de potencia con marcas de tiempo al cargador. El cargador ejecuta el programa de forma independiente — incluso si se cae la red. Necesario para respuesta a la demanda de la red y participación en VPP.
              </p>
            </div>
          </div>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>¿Es seguro ajustar dinámicamente la corriente de carga?</strong>
          </p>
          <p style={{ margin: '0 0 8px', fontSize: 13 }}>
            Sí — siempre que el cargador y el VE usen un protocolo de comunicación estándar (señal piloto PWM en cables Modo 2/3, o ISO 15118 en CCS). El cargador señala la corriente máxima disponible mediante la señal piloto; el VE siempre consume solo lo que puede aceptar de forma segura. El cargador no puede forzar al VE a consumir más de lo que solicita.
          </p>
          <p style={{ margin: 0, color: '#73daca', fontSize: 13 }}>
            <strong>Una regla estricta:</strong> La mayoría de los VE no aceptan una carga por debajo de 6A (1.4 kW monofásico). Si el excedente solar cae por debajo de este umbral, un cargador inteligente debe pausar la sesión o cubrir la diferencia desde la red (modo Eco), no intentar cargar a 3A.
          </p>
        </>
      ),
    },
    {
      title: '\u2600\uFE0F\uD83D\uDD04 Integración Inversor Solar + Cargador de VE — ¿Necesitan Ser de la Misma Marca?',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            Una pregunta común de propietarios de solar que agregan un cargador de VE: <em>{'"¿Necesito un cargador Fronius/SMA/Huawei para que funcione con mi inversor Fronius/SMA/Huawei?"'}</em> La respuesta corta es <strong>no</strong> — pero entender por qué requiere saber qué dispositivo realmente controla la carga.
          </p>
          <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, marginBottom: 12, fontFamily: 'monospace', fontSize: 12, color: '#9ece6a', lineHeight: 1.9 }}>
            Paneles Solares → Inversor (DC→AC) → Tablero Principal<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↑<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Monitor de Energía (pinza CT)<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓ datos en tiempo real<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cargador de VE ← ajusta corriente
          </div>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>El rol del inversor:</strong> Convertir DC a AC y sincronizar con la red. No decide cuánta potencia consume el cargador de VE. Esa decisión proviene del <strong>monitor de energía</strong> (pinza CT) y de la <strong>lógica de control del propio cargador</strong>.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Lo que realmente habilita la carga de VE solo solar:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>Una pinza CT / monitor de energía</strong> en el tablero mide el excedente solar en tiempo real
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>El cargador de VE</strong> lee estos datos (directamente vía Modbus, o a través de un HEMS/relay en la nube) y ajusta su corriente de carga en consecuencia
            </li>
            <li style={{ marginBottom: 4 }}>
              La marca del inversor es irrelevante en este proceso — solo produce potencia AC
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Ventaja de misma marca (ej. Fronius Wattpilot + Fronius Smart Meter):</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>Configuración plug-and-play — sin configuración manual</li>
            <li style={{ marginBottom: 4 }}>Una sola app para inversor + cargador</li>
            <li style={{ marginBottom: 4 }}>Integración más ajustada, ciclos de actualización más rápidos</li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Alternativa de estándar abierto:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>Cualquier pinza CT que exponga Modbus o MQTT (ej. Shelly EM, IoTaWatt)</li>
            <li style={{ marginBottom: 4 }}>Cualquier cargador compatible con OCPP (Myenergi Zappi, Ocular IQ, Smappee)</li>
            <li style={{ marginBottom: 4 }}>Opcionalmente un HEMS como Home Assistant para orquestar todo</li>
            <li style={{ marginBottom: 4 }}>Ventajas: cambiar marcas libremente, soportar cualquier VE, integrar plataformas de terceros</li>
          </ul>
          <p style={{ margin: 0, color: '#73daca', fontSize: 13 }}>
            <strong>Conclusión:</strong> Si ya tiene un inversor Fronius, un Fronius Wattpilot es el camino más fácil. Pero no está encerrado en una marca. Cualquier cargador inteligente que lea una pinza CT o datos de HEMS puede lograr el mismo resultado de carga con prioridad solar.
          </p>
        </>
      ),
    },
    {
      title: '\u2601\uFE0F Nube vs Local — ¿Qué Pasa Cuando Se Cae Internet?',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            Muchos productos inteligentes de energía del hogar dependen de servidores en la nube para sus apps y lógica de control. Es importante saber qué funciones requieren internet y cuáles funcionan completamente en su red local.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #f7768e' }}>
              <strong style={{ color: '#f7768e' }}>Deja de funcionar sin internet</strong>
              <ul style={{ margin: '6px 0 0', paddingLeft: 16, fontSize: 13 }}>
                <li style={{ marginBottom: 3 }}>Control remoto por app (iniciar/detener desde fuera de casa)</li>
                <li style={{ marginBottom: 3 }}>Historial de energía y dashboards en la nube</li>
                <li style={{ marginBottom: 3 }}>Actualizaciones de firmware OTA</li>
                <li style={{ marginBottom: 3 }}>Pronóstico solar (datos meteorológicos)</li>
                <li>Feeds dinámicos de precios de electricidad</li>
              </ul>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #9ece6a' }}>
              <strong style={{ color: '#9ece6a' }}>Sigue funcionando localmente</strong>
              <ul style={{ margin: '6px 0 0', paddingLeft: 16, fontSize: 13 }}>
                <li style={{ marginBottom: 3 }}>Producción solar y carga de VE</li>
                <li style={{ marginBottom: 3 }}>Carga solar dinámica (bucle local de pinza CT)</li>
                <li style={{ marginBottom: 3 }}>Programas de carga OCPP ya descargados</li>
                <li style={{ marginBottom: 3 }}>Ciclos de carga/descarga de batería</li>
                <li>Operación de bomba de calor</li>
              </ul>
            </div>
          </div>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Por qué la carga de VE solo solar funciona sin internet:</strong> La pinza CT, el cargador de VE y su comunicación ocurren completamente en su red local (o incluso vía cableado directo/Modbus). No hay nube en el circuito para el ajuste de corriente en tiempo real. La nube solo se necesita para el registro histórico y el acceso remoto por app.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Mejores prácticas para resiliencia:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>Asegúrese de que su cargador de VE puede ejecutar su lógica de carga localmente (verifique las especificaciones del fabricante)</li>
            <li style={{ marginBottom: 4 }}>Use plataformas con prioridad local (Home Assistant, servidor OCPP local) para automatización</li>
            <li style={{ marginBottom: 4 }}>Use la nube solo para dashboards de monitoreo, notificaciones y acceso remoto</li>
            <li style={{ marginBottom: 4 }}>OCPP 2.0.1 permite que los programas de carga se descarguen y ejecuten localmente en el cargador — no se necesita servidor una vez que el programa está configurado</li>
          </ul>
          <p style={{ margin: 0, color: '#73daca', fontSize: 13 }}>
            Un sistema bien diseñado mantiene el bucle de control crítico (solar → pinza CT → cargador) completamente local. La nube es útil, pero nunca debería ser un punto único de fallo para su rutina energética diaria.
          </p>
        </>
      ),
    },
    {
      title: '\uD83D\uDE97 Cargadores Inteligentes de VE Recomendados para Hogares Solares Australianos',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            Estos cargadores son adecuados para condiciones australianas (red monofásica, límite de exportación de 5 kW, zonas de Ausgrid/Endeavour/SA Power) y soportan carga con excedente solar sin requerir dependencia de una marca específica.
          </p>

          <div style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase' as const, letterSpacing: '0.08em', marginBottom: 8 }}>Alta Integración / Prioridad Solar</div>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
              <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #9ece6a' }}>
                <strong style={{ color: '#9ece6a' }}>Myenergi Zappi (7.4 kW / 22 kW)</strong>
                <p style={{ margin: '4px 0 0', fontSize: 13, lineHeight: 1.6 }}>
                  La mejor opción para carga con excedente solar con tres modos: Eco (solar + complemento de red), Eco+ (solo solar, pausa cuando baja el excedente), y Boost (velocidad máxima). Funciona de forma autónoma con una pinza CT externa — sin dependencia de marca de inversor. Control por app, soporte OCPP, preparado para el futuro.
                </p>
                <div style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>OCPP 1.6 · Pinza CT externa · Control por app · 7.4 kW (monofásico)</div>
              </div>
              <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #bb9af7' }}>
                <strong style={{ color: '#bb9af7' }}>Ocular IQ Home Solar Smart Charger</strong>
                <p style={{ margin: '4px 0 0', fontSize: 13, lineHeight: 1.6 }}>
                  Fabricado en Australia, diseñado específicamente para hogares solares. Se integra directamente con la mayoría de marcas de inversores vía Modbus o APIs del fabricante. Soporta Home Assistant. Puede expandirse a coordinación con batería y V2H. Buena opción si busca control con prioridad local.
                </p>
                <div style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>OCPP 2.0.1 · Modbus · API Local · 7.4 kW</div>
              </div>
              <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #7aa2f7' }}>
                <strong style={{ color: '#7aa2f7' }}>Smappee EV Wall</strong>
                <p style={{ margin: '4px 0 0', fontSize: 13, lineHeight: 1.6 }}>
                  Se combina con el Smappee Energy Monitor (pinza CT) para una integración solar ajustada. Soporta balance de carga dinámico entre múltiples cargadores. OCPP, operación en red local, dashboard de energía del hogar. Bueno para hogares con múltiples cargadores.
                </p>
                <div style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>OCPP 1.6/2.0 · Emparejamiento con pinza CT · 7.4 kW / 22 kW</div>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase' as const, letterSpacing: '0.08em', marginBottom: 8 }}>Económico / Instalación Fácil</div>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
              <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #e0af68' }}>
                <strong style={{ color: '#e0af68' }}>Evos 7.4 kW Smart EV Charger</strong>
                <p style={{ margin: '4px 0 0', fontSize: 13, lineHeight: 1.6 }}>
                  Económico, ampliamente disponible en Australia. Programación controlada por app, modo prioridad solar vía pinza CT. Bueno para instalaciones sencillas donde no se requiere integración profunda con HEMS.
                </p>
                <div style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>Programación por app · Soporte pinza CT · 7.4 kW</div>
              </div>
              <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #73daca' }}>
                <strong style={{ color: '#73daca' }}>GoodWe HCA G2 (7 kW)</strong>
                <p style={{ margin: '4px 0 0', fontSize: 13, lineHeight: 1.6 }}>
                  Mejor si ya tiene un inversor GoodWe — integración nativa sin necesidad de pinza CT adicional. El portal SEMS de GoodWe maneja solar + VE en un solo dashboard. OCPP para CSMS de terceros si es necesario.
                </p>
                <div style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>OCPP 1.6 · Integración nativa GoodWe · 7 kW</div>
              </div>
            </div>
          </div>

          <div style={{ padding: '12px 14px', background: '#16161e', borderRadius: 6, borderLeft: '3px solid #7aa2f7', fontSize: 13, color: '#9ca3af', lineHeight: 1.7 }}>
            <strong style={{ color: '#7aa2f7' }}>Lista de verificación para la selección:</strong>
            <ol style={{ margin: '8px 0 0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>¿Soporta carga con excedente solar vía pinza CT externa o Modbus? (necesario para modo solo solar)</li>
              <li style={{ marginBottom: 4 }}>¿Soporta OCPP 1.6 o 2.0.1? (necesario para carga inteligente y futuros servicios de red)</li>
              <li style={{ marginBottom: 4 }}>¿Puede ejecutar su lógica de carga localmente sin conexión a internet?</li>
              <li style={{ marginBottom: 4 }}>¿Está certificado para el mercado australiano? (verifique la marca RCM, cumplimiento de las reglas de cableado AS/NZS 3000)</li>
              <li>¿Soporta actualizaciones de firmware OTA? (preparación para futuras mejoras de protocolo)</li>
            </ol>
          </div>
        </>
      ),
    },
  ],

  // ── Protocols ──
  protocols_title: 'Protocolos de Comunicación',
  protocols_subtitle: 'Cómo se comunican los dispositivos en un sistema de energía del hogar.',
  protocols_advanced_extra: ' La vista avanzada incluye protocolos adicionales y detalles técnicos.',

  protocols_sections: [
    {
      key: 'modbus',
      title: 'Modbus — Protocolo de Comunicación Industrial',
      accentColor: '#e0af68',
      content: (userLevel) => (
        <>
          <p style={{ margin: '0 0 10px' }}>
            <strong style={{ color: '#e0af68' }}>Qué es:</strong> Modbus es un protocolo de comunicación serial publicado originalmente por Modicon en 1979. Se ha convertido en el estándar de facto para conectar dispositivos electrónicos industriales y se usa ampliamente en sistemas de energía del hogar.
          </p>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Cómo funciona:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>Arquitectura maestro-esclavo:</strong> Un dispositivo maestro (ej., su sistema de gestión de energía) inicia solicitudes; los dispositivos esclavos (inversor, medidor) responden con datos.
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Modelo de datos basado en registros:</strong> Todos los datos se organizan como registros numerados. Cada registro contiene un valor de 16 bits (0–65535).
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Solicitud-respuesta:</strong> El maestro pregunta &quot;leer registro 40001&quot; y el esclavo devuelve el valor almacenado allí.
            </li>
          </ul>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>En sistemas de energía del hogar:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>Inversores:</strong> SMA, Fronius, Huawei, GoodWe y la mayoría soportan Modbus TCP o RTU para leer datos de producción y establecer límites de potencia
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Medidores inteligentes:</strong> Dispositivos como el Eastron SDM630 o Carlo Gavazzi proporcionan lecturas de potencia en tiempo real vía Modbus
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Bombas de calor:</strong> Muchas bombas de calor modernas exponen datos operativos y aceptan comandos de control vía Modbus
            </li>
          </ul>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Modbus TCP vs RTU:</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
            <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, borderLeft: '3px solid #7aa2f7' }}>
              <strong style={{ color: '#7aa2f7' }}>Modbus TCP</strong>
              <ul style={{ margin: '6px 0 0', paddingLeft: 16, fontSize: 13 }}>
                <li style={{ marginBottom: 3 }}>Sobre Ethernet / Wi-Fi</li>
                <li style={{ marginBottom: 3 }}>Puerto 502 (predeterminado)</li>
                <li style={{ marginBottom: 3 }}>Fácil de integrar con software</li>
                <li>Redes TCP/IP estándar</li>
              </ul>
            </div>
            <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, borderLeft: '3px solid #9ece6a' }}>
              <strong style={{ color: '#9ece6a' }}>Modbus RTU</strong>
              <ul style={{ margin: '6px 0 0', paddingLeft: 16, fontSize: 13 }}>
                <li style={{ marginBottom: 3 }}>Sobre bus serial RS-485</li>
                <li style={{ marginBottom: 3 }}>Cableado, conexión de 2 hilos</li>
                <li style={{ marginBottom: 3 }}>Hasta 32 dispositivos en un bus</li>
                <li>Común para medidores y sensores</li>
              </ul>
            </div>
          </div>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Tipos de registros:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>Holding Registers (4xxxx):</strong> Lectura/escritura — usados para puntos de ajuste y configuración (ej., establecer límite de potencia)
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Input Registers (3xxxx):</strong> Solo lectura — usados para mediciones (ej., potencia actual, voltaje, frecuencia)
            </li>
          </ul>

          {userLevel === 'beginner' && (
            <div style={{ backgroundColor: '#1a2e1a', borderRadius: 6, padding: 12, border: '1px solid #2a3e2a' }}>
              <strong style={{ color: '#9ece6a' }}>Consejo para principiantes:</strong> Piense en Modbus como un archivero — cada cajón (registro) contiene un dato. Usted pide un número de cajón específico y el dispositivo le dice lo que hay dentro.
            </div>
          )}

          {userLevel === 'advanced' && (
            <>
              <p style={{ margin: '12px 0 8px' }}>
                <strong style={{ color: '#bb9af7' }}>Códigos de función:</strong>
              </p>
              <pre style={codeBlockStyle}>
                {`FC03 - Read Holding Registers (read setpoints, config)
FC04 - Read Input Registers  (read measurements)
FC06 - Write Single Register  (set one value)
FC16 - Write Multiple Registers (set a range of values)`}
              </pre>
              <p style={{ margin: '8px 0 8px' }}>
                <strong style={{ color: '#bb9af7' }}>Ejemplo de mapa de registros (inversor Fronius Symo vía SunSpec):</strong>
              </p>
              <pre style={codeBlockStyle}>
                {`Register  | Length | Description          | Unit
----------|--------|----------------------|------
40072     | 1      | AC Power (total)     | W
40074     | 1      | AC Frequency         | Hz
40084     | 1      | DC Power             | W
40092     | 1      | Operating State      | enum
40236     | 1      | WMaxLimPct           | %
40242     | 1      | WMaxLim_Ena          | enum`}
              </pre>
              <p style={{ margin: '8px 0 0', fontSize: 13, color: '#888' }}>
                Nota: Las direcciones de registros y formatos de datos varían según el fabricante. Siempre consulte la documentación del mapa de registros Modbus del dispositivo.
              </p>
            </>
          )}
        </>
      ),
    },
    {
      key: 'ocpp',
      title: 'OCPP — Open Charge Point Protocol',
      accentColor: '#7aa2f7',
      content: (userLevel) => (
        <>
          <p style={{ margin: '0 0 10px' }}>
            <strong style={{ color: '#7aa2f7' }}>Qué es:</strong> OCPP (Open Charge Point Protocol) es un protocolo abierto y estandarizado para la comunicación entre estaciones de carga de VE y un sistema de gestión central (CSMS). Permite monitoreo remoto, control y carga inteligente.
          </p>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>OCPP 1.6 vs 2.0.1:</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
            <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, borderLeft: '3px solid #e0af68' }}>
              <strong style={{ color: '#e0af68' }}>OCPP 1.6</strong>
              <ul style={{ margin: '6px 0 0', paddingLeft: 16, fontSize: 13 }}>
                <li style={{ marginBottom: 3 }}>JSON o SOAP sobre WebSocket</li>
                <li style={{ marginBottom: 3 }}>Ampliamente adoptado, la mayoría de cargadores lo soportan</li>
                <li style={{ marginBottom: 3 }}>Perfiles básicos de carga inteligente</li>
                <li style={{ marginBottom: 3 }}>Estructura de mensajes más simple</li>
                <li>Sin modelo de dispositivo / perfiles de seguridad</li>
              </ul>
            </div>
            <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, borderLeft: '3px solid #7aa2f7' }}>
              <strong style={{ color: '#7aa2f7' }}>OCPP 2.0.1</strong>
              <ul style={{ margin: '6px 0 0', paddingLeft: 16, fontSize: 13 }}>
                <li style={{ marginBottom: 3 }}>Solo JSON sobre WebSocket</li>
                <li style={{ marginBottom: 3 }}>Modelo de dispositivo para configuración</li>
                <li style={{ marginBottom: 3 }}>Perfiles de seguridad mejorados</li>
                <li style={{ marginBottom: 3 }}>Soporte ISO 15118 (Plug &amp; Charge)</li>
                <li>Carga inteligente mejorada con perfiles basados en costos</li>
              </ul>
            </div>
          </div>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Operaciones principales:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>BootNotification:</strong> El cargador se registra con el CSMS al arrancar
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Authorize:</strong> Valida la identidad del usuario (RFID, app o Plug &amp; Charge)
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>StartTransaction / StopTransaction:</strong> Inicia y finaliza una sesión de carga, registrando la energía entregada
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>MeterValues:</strong> Lecturas periódicas de energía enviadas del cargador al CSMS durante una sesión
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>SetChargingProfile:</strong> El CSMS envía un programa de límite de potencia al cargador
            </li>
          </ul>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Perfiles de carga inteligente:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>ChargePointMaxProfile:</strong> Establece el límite de potencia general para todo el punto de carga
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>TxDefaultProfile:</strong> Programa de carga predeterminado aplicado a todas las transacciones en un conector
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>TxProfile:</strong> Programa de carga para una transacción activa específica — prioridad más alta
            </li>
          </ul>

          <p style={{ margin: '0 0 10px' }}>
            <strong style={{ color: '#bb9af7' }}>Cómo habilita la carga solar:</strong> El sistema de gestión de energía (actuando como o comunicándose con un CSMS) lee el excedente solar actual del inversor/medidor, calcula la potencia disponible para la carga del VE, y envía un mensaje SetChargingProfile al cargador con el límite de potencia actualizado. El cargador ajusta su salida en consecuencia, típicamente actualizado cada 5–60 segundos.
          </p>

          <div style={{ backgroundColor: '#16213e', borderRadius: 6, padding: 12, border: '1px solid #1e3a5f', marginBottom: 12 }}>
            <strong style={{ color: '#7aa2f7' }}>Contexto del mercado australiano:</strong>
            <p style={{ margin: '6px 0 0', fontSize: 13 }}>
              La mayoría de los cargadores de VE residenciales vendidos en Australia hoy soportan <strong>OCPP 1.6</strong>, que es suficiente para carga inteligente básica e integración solar. <strong>OCPP 2.0.1</strong> — necesario para ISO 15118 Plug &amp; Charge y carga bidireccional V2G — apenas está comenzando a aparecer en el mercado australiano (2024–2025).
            </p>
            <p style={{ margin: '6px 0 0', fontSize: 13 }}>
              AEMO y ARENA han realizado pruebas de carga inteligente usando OCPP como protocolo de control, tratando los cargadores domésticos como cargas flexibles. Esto posiciona a OCPP como el probable estándar para cualquier futuro programa de carga de VE interactiva con la red en Australia. Al elegir un cargador, el soporte de OCPP 1.6 es suficiente para las necesidades actuales de carga solar; OCPP 2.0.1 vale la pena priorizarlo si anticipa participar en V2G o futuros programas de respuesta a la demanda.
            </p>
          </div>

          {userLevel === 'beginner' && (
            <div style={{ backgroundColor: '#1a2e1a', borderRadius: 6, padding: 12, border: '1px solid #2a3e2a' }}>
              <strong style={{ color: '#9ece6a' }}>Consejo para principiantes:</strong> OCPP es como un idioma que su cargador de VE habla con el sistema de gestión de energía. El sistema de gestión dice &quot;puedes usar 3 kW ahora mismo&quot; y el cargador obedece, ajustándose en tiempo real a medida que cambia la producción solar.
            </div>
          )}

          {userLevel === 'advanced' && (
            <>
              <p style={{ margin: '12px 0 8px' }}>
                <strong style={{ color: '#bb9af7' }}>Estructura del mensaje (OCPP 1.6 JSON):</strong>
              </p>
              <pre style={codeBlockStyle}>
                {`// Request: [MessageTypeId, UniqueId, Action, Payload]
[2, "msg001", "SetChargingProfile", {
  "connectorId": 1,
  "csChargingProfiles": {
    "chargingProfileId": 1,
    "stackLevel": 0,
    "chargingProfilePurpose": "TxProfile",
    "chargingProfileKind": "Absolute",
    "chargingSchedule": {
      "chargingRateUnit": "W",
      "chargingSchedulePeriod": [
        { "startPeriod": 0, "limit": 7400.0 }
      ]
    }
  }
}]

// Response: [MessageTypeId, UniqueId, Payload]
[3, "msg001", { "status": "Accepted" }]`}
              </pre>
              <p style={{ margin: '8px 0 8px' }}>
                <strong style={{ color: '#bb9af7' }}>Pila de carga inteligente (prioridad de baja a alta):</strong>
              </p>
              <pre style={codeBlockStyle}>
                {`1. ChargePointMaxProfile  (site-level limit)
2. TxDefaultProfile       (connector default)
3. TxProfile              (per-transaction override)

The effective limit = min(all applicable profiles)
Stack level: higher stackLevel overrides lower within same purpose`}
              </pre>
              <p style={{ margin: '8px 0 8px' }}>
                <strong style={{ color: '#bb9af7' }}>Integración ISO 15118 (OCPP 2.0.1):</strong>
              </p>
              <ul style={{ margin: '0 0 0', paddingLeft: 20 }}>
                <li style={{ marginBottom: 4 }}>
                  Plug &amp; Charge: Autenticación automática vía certificados TLS — sin necesidad de RFID
                </li>
                <li style={{ marginBottom: 4 }}>
                  Habilita la transferencia bidireccional de energía (V2G) con control coordinado del CSMS
                </li>
                <li style={{ marginBottom: 4 }}>
                  15118-20 agrega modos de control programado y dinámico para gestión granular de potencia
                </li>
              </ul>
            </>
          )}
        </>
      ),
    },
    {
      key: 'other',
      title: 'Otros Protocolos de Energía',
      accentColor: '#9ece6a',
      advancedOnly: true,
      content: (_userLevel) => (
        <>
          <div style={{ marginBottom: 16 }}>
            <h4 style={{ margin: '0 0 8px', color: '#e0af68' }}>SunSpec</h4>
            <p style={{ margin: '0 0 6px' }}>
              Un modelo de datos estandarizado construido sobre Modbus para equipos solares y de almacenamiento. Define mapas de registros consistentes para que un inversor compatible con SunSpec de cualquier fabricante exponga los mismos datos en los mismos registros.
            </p>
            <pre style={codeBlockStyle}>
              {`SunSpec Common Model (Model 1):
  Register 40001: "SunS" identifier (0x53756e53)
  Register 40003: Manufacturer
  Register 40021: Model
  Register 40045: Serial Number

SunSpec Inverter Model (Model 101/103):
  AC Power, Frequency, Voltage, Current, Energy counters`}
            </pre>
          </div>

          <div style={{ marginBottom: 16 }}>
            <h4 style={{ margin: '0 0 8px', color: '#7aa2f7' }}>EEBUS</h4>
            <p style={{ margin: '0 0 6px' }}>
              Un estándar europeo de comunicación de energía para hogares inteligentes. Usa el protocolo SPINE (Smart Premises Interoperable Neutral-message Exchange) sobre redes IP. Diseñado para comunicación dispositivo a dispositivo sin dependencia de la nube.
            </p>
            <ul style={{ margin: '0 0 0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                Casos de uso: coordinación de carga de VE, control de bomba de calor, gestión de batería
              </li>
              <li style={{ marginBottom: 4 }}>
                Soportado por los principales fabricantes europeos (SMA, Viessmann, BMW, Porsche)
              </li>
              <li style={{ marginBottom: 4 }}>
                Habilita la negociación entre dispositivos: el cargador solicita potencia, el HEMS aprueba/limita
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: 16 }}>
            <h4 style={{ margin: '0 0 8px', color: '#f7768e' }}>OpenADR</h4>
            <p style={{ margin: '0 0 6px' }}>
              Open Automated Demand Response — permite a las empresas de servicios públicos enviar señales de respuesta a la demanda a edificios y dispositivos. Se usa para la estabilización de la red durante eventos de demanda pico.
            </p>
            <ul style={{ margin: '0 0 0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                VTN (Virtual Top Node) envía eventos de respuesta a la demanda a dispositivos VEN (Virtual End Node)
              </li>
              <li style={{ marginBottom: 4 }}>
                Las señales incluyen precio, nivel de carga o notificaciones simples de eventos
              </li>
              <li style={{ marginBottom: 4 }}>
                Se usa principalmente en edificios comerciales y flotas residenciales agregadas
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: 16 }}>
            <h4 style={{ margin: '0 0 8px', color: '#bb9af7' }}>MQTT</h4>
            <p style={{ margin: '0 0 6px' }}>
              Protocolo de mensajería ligero de publicación-suscripción ampliamente usado para monitoreo de energía IoT. No es específico de energía, pero se usa comúnmente para transportar datos de energía.
            </p>
            <pre style={codeBlockStyle}>
              {`Topic structure example:
  home/energy/solar/power      → 4523    (watts)
  home/energy/grid/import      → 312     (watts)
  home/energy/battery/soc      → 72      (percent)
  home/energy/ev/charging      → true
  home/energy/ev/power         → 7400    (watts)

Broker receives and distributes messages to subscribers.
QoS levels: 0 (fire & forget), 1 (at least once), 2 (exactly once)`}
            </pre>
          </div>

          <div>
            <h4 style={{ margin: '0 0 8px', color: '#73daca' }}>Matter / Thread</h4>
            <p style={{ margin: '0 0 6px' }}>
              Estándares emergentes para hogares inteligentes respaldados por Apple, Google, Amazon y Samsung. Aunque se enfocan principalmente en dispositivos generales de hogar inteligente (luces, cerraduras, sensores), los casos de uso de gestión de energía se están expandiendo.
            </p>
            <ul style={{ margin: '0 0 0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                <strong>Matter:</strong> Protocolo de capa de aplicación. Se están agregando tipos de dispositivos de gestión de energía en versiones más recientes.
              </li>
              <li style={{ marginBottom: 4 }}>
                <strong>Thread:</strong> Protocolo de red mesh de bajo consumo (basado en IP). Proporciona la capa de red para dispositivos Matter.
              </li>
              <li style={{ marginBottom: 4 }}>
                Potencial futuro para comunicación estandarizada de cargadores de VE, baterías e inversores solares en el ecosistema de hogares inteligentes de consumo.
              </li>
            </ul>
          </div>
        </>
      ),
    },
  ],

  // ── Strategies ──
  strategies_title: 'Estrategias de Optimización Energética',
  strategies_subtitle: 'Cómo sacar el máximo provecho de su sistema de energía del hogar.',
  strategies_advanced_extra: ' La vista avanzada incluye arquitectura HEMS y servicios de red.',

  strategies_sections: [
    {
      key: 'self-consumption',
      title: 'Optimización del Autoconsumo Solar',
      accentColor: '#9ece6a',
      content: (_userLevel) => (
        <>
          <p style={{ margin: '0 0 10px' }}>
            El autoconsumo significa usar la electricidad solar que genera directamente en su hogar, en vez de exportarla a la red. Esto es casi siempre más rentable porque las tarifas de inyección son menores que las tarifas de importación.
          </p>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Orden de prioridad para el excedente solar:</strong>
          </p>
          <div
            style={{
              backgroundColor: '#16161e',
              borderRadius: 6,
              padding: 14,
              marginBottom: 12,
              fontFamily: 'monospace',
              fontSize: 13,
              color: '#9ece6a',
              lineHeight: 2,
            }}
          >
            1. Cargas del hogar (siempre se atienden primero)
            <br />
            2. Batería doméstica (almacenar para uso vespertino)
            <br />
            3. Carga de VE (carga flexible grande)
            <br />
            4. Bomba de calor / agua caliente (almacenamiento térmico)
            <br />
            5. Exportación a la red (último recurso, menor valor)
          </div>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Por qué importa el autoconsumo:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              Tarifa de importación típica: $0.25–$0.45/kWh
            </li>
            <li style={{ marginBottom: 4 }}>
              Tarifa de inyección típica: $0.05–$0.12/kWh
            </li>
            <li style={{ marginBottom: 4 }}>
              Cada kWh autoconsumido le ahorra la tarifa de importación completa en vez de ganar solo la tarifa de exportación
            </li>
            <li style={{ marginBottom: 4 }}>
              Aumentar el autoconsumo del 30% al 70% puede duplicar sus ahorros solares
            </li>
          </ul>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Estrategias estacionales:</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 10 }}>
            <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, borderLeft: '3px solid #7aa2f7' }}>
              <strong style={{ color: '#7aa2f7' }}>Invierno</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                Menos solar disponible. Enfocarse en usar cada vatio directamente. Minimizar exportación. La bomba de calor funciona más, absorbiendo solar naturalmente. Los ciclos de batería son poco profundos.
              </p>
            </div>
            <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, borderLeft: '3px solid #e0af68' }}>
              <strong style={{ color: '#e0af68' }}>Verano</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                Solar abundante. Cargar todo — batería, VE, agua caliente. Programar electrodomésticos de alta potencia (lavavajillas, lavarropas) durante las horas pico de solar.
              </p>
            </div>
          </div>

          <div style={{ backgroundColor: '#1a2e1a', borderRadius: 6, padding: 12, margin: '10px 0', border: '1px solid #2a3e2a' }}>
            <strong style={{ color: '#9ece6a' }}>Consejo:</strong>{' '}
            Usar electrodomésticos durante las horas pico de solar (10am–3pm) es una de las formas más simples de aumentar el autoconsumo sin ningún equipo adicional.
          </div>
        </>
      ),
    },
    {
      key: 'ev-modes',
      title: 'Modos Dinámicos de Carga de VE',
      accentColor: '#7aa2f7',
      content: (_userLevel) => (
        <>
          <p style={{ margin: '0 0 12px' }}>
            Los cargadores inteligentes de VE pueden operar en diferentes modos según sus prioridades — ahorrar dinero, cargar rápidamente, o un balance de ambos. El cargador ajusta su consumo de potencia dinámicamente basándose en datos de energía en tiempo real.
          </p>

          <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, marginBottom: 8, borderLeft: '3px solid #9ece6a' }}>
            <strong style={{ color: '#9ece6a', fontSize: 14 }}>Solo Solar</strong>
            <p style={{ margin: '6px 0 8px', fontSize: 13 }}>Solo carga cuando hay excedente solar disponible. Pausa la carga si la solar cae por debajo del umbral mínimo.</p>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13 }}>
              <li style={{ marginBottom: 3 }}>Mejor para: Maximizar ahorros, menor costo de electricidad por km</li>
              <li style={{ marginBottom: 3 }}>Requiere una pinza CT / monitor de energía en el tablero — sin él, el cargador no puede ver el excedente solar</li>
              <li style={{ marginBottom: 3 }}>Usa datos de la pinza CT o monitor de energía para medir el excedente solar en tiempo real</li>
              <li style={{ marginBottom: 3 }}>Umbral mínimo de carga: típicamente 1.4 kW (6A × 230V en monofásico)</li>
              <li style={{ marginBottom: 3 }}>Por debajo de 6A la mayoría de los VE no aceptan carga — el cargador debe pausar</li>
              <li style={{ marginBottom: 3 }}>La velocidad de carga varía a lo largo del día siguiendo la curva solar</li>
              <li style={{ marginBottom: 3 }}>Puede no cargar completamente el VE en días nublados o en invierno</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, marginBottom: 8, borderLeft: '3px solid #e0af68' }}>
            <strong style={{ color: '#e0af68', fontSize: 14 }}>Eco / Híbrido</strong>
            <p style={{ margin: '6px 0 8px', fontSize: 13 }}>Prioriza el excedente solar pero complementa desde la red para mantener al menos la velocidad mínima de carga una vez iniciada.</p>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13 }}>
              <li style={{ marginBottom: 3 }}>Mejor para: Buen balance entre ahorro y conveniencia</li>
              <li style={{ marginBottom: 3 }}>Siempre mantiene un mínimo de 6A (1.4 kW) una vez que se inicia una sesión</li>
              <li style={{ marginBottom: 3 }}>El excedente solar se usa primero; la red cubre la diferencia hasta el mínimo</li>
              <li style={{ marginBottom: 3 }}>Si la solar supera el mínimo, la velocidad de carga aumenta para usar todo el excedente</li>
              <li style={{ marginBottom: 3 }}>Típicamente ahorra 50–70% comparado con cargar solo desde la red</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, marginBottom: 8, borderLeft: '3px solid #f7768e' }}>
            <strong style={{ color: '#f7768e', fontSize: 14 }}>Rápido / Boost</strong>
            <p style={{ margin: '6px 0 8px', fontSize: 13 }}>Carga a potencia máxima independientemente de la disponibilidad solar. Consume de la red según sea necesario.</p>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13 }}>
              <li style={{ marginBottom: 3 }}>Mejor para: Cuando necesita el auto cargado lo más rápido posible</li>
              <li style={{ marginBottom: 3 }}>Usa la potencia nominal completa de su cargador (ej., 7.4 kW o 22 kW)</li>
              <li style={{ marginBottom: 3 }}>Sin optimización solar — todo se trata de velocidad</li>
              <li style={{ marginBottom: 3 }}>Puede provocar cargos por demanda o sobrecargar su conexión a la red si no se gestiona</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, marginBottom: 8, borderLeft: '3px solid #bb9af7' }}>
            <strong style={{ color: '#bb9af7', fontSize: 14 }}>Programado</strong>
            <p style={{ margin: '6px 0 8px', fontSize: 13 }}>Carga durante ventanas de tiempo designadas, típicamente horas de tarifa valle durante la noche.</p>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13 }}>
              <li style={{ marginBottom: 3 }}>Mejor para: Clientes con tarifa por horario</li>
              <li style={{ marginBottom: 3 }}>Horario común: cargar de 11pm a 6am cuando las tarifas son más bajas</li>
              <li style={{ marginBottom: 3 }}>Se puede combinar con solar durante el día para programación híbrida</li>
              <li style={{ marginBottom: 3 }}>Establezca hora de salida para asegurar que el auto esté listo cuando lo necesite</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, marginBottom: 8, borderLeft: '3px solid #73daca' }}>
            <strong style={{ color: '#73daca', fontSize: 14 }}>SoC Objetivo</strong>
            <p style={{ margin: '6px 0 8px', fontSize: 13 }}>Establece un porcentaje objetivo de batería para una hora de salida. El optimizador decide la forma más económica de alcanzarlo.</p>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13 }}>
              <li style={{ marginBottom: 3 }}>Mejor para: Usuarios avanzados con tarifas dinámicas o pronóstico solar</li>
              <li style={{ marginBottom: 3 }}>Considera: SoC actual, SoC objetivo, hora de salida, pronóstico solar, programa tarifario</li>
              <li style={{ marginBottom: 3 }}>Selecciona automáticamente las ventanas de carga más económicas</li>
              <li style={{ marginBottom: 3 }}>Puede dividir la carga en múltiples períodos (ej., solar al mediodía + tarifa valle nocturna)</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#2e2a1a', borderRadius: 6, padding: 12, margin: '10px 0', border: '1px solid #3e3a2a' }}>
            <strong style={{ color: '#e0af68' }}>Importante:</strong>{' '}
            La velocidad mínima de carga para la mayoría de los VE es 6A por fase (1.4 kW monofásico, 4.1 kW trifásico). Por debajo de esto, el VE se negará a cargar. Los cargadores inteligentes deben manejar este umbral cuidadosamente al modular con solar.
          </div>
        </>
      ),
    },
    {
      key: 'battery',
      title: 'Estrategias de Gestión de Batería',
      accentColor: '#e0af68',
      content: (_userLevel) => (
        <>
          <p style={{ margin: '0 0 12px' }}>
            Una batería doméstica es tan útil como su estrategia de control. El enfoque correcto depende de su estructura tarifaria, tamaño del sistema solar y patrones de consumo.
          </p>

          <div style={{ marginBottom: 14 }}>
            <h4 style={{ margin: '0 0 6px', color: '#9ece6a' }}>
              Autoconsumo Solar
            </h4>
            <p style={{ margin: '0 0 6px' }}>
              La estrategia más común: almacenar excedente solar durante el día y descargar en la tarde y la noche.
            </p>
            <ul style={{ margin: '0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                La batería se carga cuando la producción solar supera el consumo del hogar
              </li>
              <li style={{ marginBottom: 4 }}>
                La batería se descarga cuando el consumo supera la solar (tarde, noche)
              </li>
              <li style={{ marginBottom: 4 }}>
                Aumenta el autoconsumo de ~30% a ~70% para un sistema típico
              </li>
              <li style={{ marginBottom: 4 }}>
                Funciona mejor con una batería dimensionada para cubrir el consumo nocturno (8–12 kWh)
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: 14 }}>
            <h4 style={{ margin: '0 0 6px', color: '#7aa2f7' }}>
              Arbitraje por Horario
            </h4>
            <p style={{ margin: '0 0 6px' }}>
              Cargar la batería durante períodos de tarifa baja y descargar durante períodos caros.
            </p>
            <ul style={{ margin: '0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                Cargar de noche con tarifas valle (ej., $0.10/kWh)
              </li>
              <li style={{ marginBottom: 4 }}>
                Descargar durante tarifas punta (ej., $0.40/kWh)
              </li>
              <li style={{ marginBottom: 4 }}>
                Rentable cuando la relación punta:valle supera ~3:1 (considerando pérdidas de ida y vuelta)
              </li>
              <li style={{ marginBottom: 4 }}>
                Se puede combinar con autoconsumo solar para máximo beneficio
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: 14 }}>
            <h4 style={{ margin: '0 0 6px', color: '#f7768e' }}>Recorte de Picos</h4>
            <p style={{ margin: '0 0 6px' }}>
              Limitar la importación de red a un umbral máximo para evitar cargos por demanda o sobrecargar su conexión.
            </p>
            <ul style={{ margin: '0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                La batería se descarga para cubrir cualquier consumo por encima del umbral
              </li>
              <li style={{ marginBottom: 4 }}>
                Umbral común: mantener la importación de red por debajo de 5 kW
              </li>
              <li style={{ marginBottom: 4 }}>
                Útil cuando la carga de VE + cargas del hogar superarían la capacidad del fusible principal
              </li>
              <li style={{ marginBottom: 4 }}>
                Algunas tarifas cobran extra por la demanda pico de 15 minutos — el recorte de picos evita esto
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ margin: '0 0 6px', color: '#e0af68' }}>
              Respaldo / Reserva
            </h4>
            <p style={{ margin: '0 0 6px' }}>
              Mantener un estado de carga (SoC) mínimo reservado para cortes de energía.
            </p>
            <ul style={{ margin: '0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                Establezca un nivel de reserva (ej., 20%) por debajo del cual la batería no se descargará durante operación normal
              </li>
              <li style={{ marginBottom: 4 }}>
                Durante un corte de red, la batería alimenta las cargas críticas (si el inversor soporta respaldo)
              </li>
              <li style={{ marginBottom: 4 }}>
                Compromiso: mayor reserva = menos capacidad utilizable para el ciclado diario
              </li>
              <li style={{ marginBottom: 4 }}>
                Algunos inversores soportan formación de isla automática (desconectarse de la red y alimentar el hogar de forma independiente)
              </li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, margin: '10px 0', border: '1px solid #2a2a3e' }}>
            <strong style={{ color: '#7aa2f7' }}>Nota:</strong>{' '}
            La mejor estrategia suele ser una combinación: autoconsumo solar durante el día, arbitraje por horario para la batería, y una pequeña reserva de respaldo para tranquilidad.
          </div>
        </>
      ),
    },
    {
      key: 'hems',
      title: 'Sistema de Gestión de Energía del Hogar (HEMS)',
      accentColor: '#bb9af7',
      advancedOnly: true,
      content: (_userLevel) => (
        <>
          <p style={{ margin: '0 0 10px' }}>
            Un HEMS es un controlador central que optimiza todos los flujos de energía en su hogar. Lee datos de cada dispositivo, aplica reglas de optimización y envía comandos de control para maximizar ahorros, autoconsumo o confort.
          </p>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Puntos de integración:</strong>
          </p>
          <div
            style={{
              backgroundColor: '#16161e',
              borderRadius: 6,
              padding: 14,
              marginBottom: 12,
              fontFamily: 'monospace',
              fontSize: 12,
              color: '#a9b1d6',
              lineHeight: 1.8,
            }}
          >
            Inverter ←→ HEMS &nbsp;&nbsp;(Modbus TCP / SunSpec)
            <br />
            Smart Meter ←→ HEMS &nbsp;&nbsp;(Modbus RTU / P1 port)
            <br />
            EV Charger ←→ HEMS &nbsp;&nbsp;(OCPP 1.6/2.0.1)
            <br />
            Battery ←→ HEMS &nbsp;&nbsp;(CAN bus / Modbus / manufacturer API)
            <br />
            Heat Pump ←→ HEMS &nbsp;&nbsp;(Modbus / SG Ready / EEBUS)
            <br />
            Tariff API ←→ HEMS &nbsp;&nbsp;(REST API / MQTT)
            <br />
            Weather API ←→ HEMS &nbsp;&nbsp;(REST API for solar forecast)
          </div>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Entradas para la toma de decisiones:</strong>
          </p>
          <ul style={{ margin: '0 0 12px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>Producción solar actual</strong> — medición en tiempo real del inversor o pinza CT
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Solar pronosticada</strong> — predicción basada en el clima para las próximas horas/día
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Precios de electricidad</strong> — tarifas actuales y próximas (precio spot o programa de tarifas por horario)
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Hora de salida del VE</strong> — cuándo necesita el auto listo y SoC objetivo
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>SoC de la batería</strong> — estado de carga actual y capacidad disponible
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Patrón de consumo del hogar</strong> — perfil de carga histórico y predicho
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Restricciones de red</strong> — límites de exportación, capacidad del fusible principal, umbrales de cargo por demanda
            </li>
          </ul>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Ejemplo de lógica de optimización:</strong>
          </p>
          <div
            style={{
              backgroundColor: '#16161e',
              borderRadius: 6,
              padding: 14,
              marginBottom: 12,
              fontFamily: 'monospace',
              fontSize: 12,
              color: '#a9b1d6',
              lineHeight: 1.8,
            }}
          >
            solar_surplus = solar_production - home_consumption
            <br />
            <br />
            if solar_surplus &gt; 0:
            <br />
            &nbsp;&nbsp;1. Charge battery (up to max charge rate)
            <br />
            &nbsp;&nbsp;2. Remaining surplus → charge EV (if connected)
            <br />
            &nbsp;&nbsp;3. Remaining surplus → heat hot water
            <br />
            &nbsp;&nbsp;4. Remaining surplus → export to grid
            <br />
            <br />
            if solar_surplus &lt;= 0:
            <br />
            &nbsp;&nbsp;1. Discharge battery (if tariff is expensive)
            <br />
            &nbsp;&nbsp;2. Import from grid (if tariff is cheap)
            <br />
            &nbsp;&nbsp;3. Pause EV charging (if in solar-only mode)
          </div>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Opciones de implementación:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>Sistemas de gestión de energía comerciales:</strong> Dispositivos dedicados que se integran con marcas específicas de inversores y cargadores. A menudo incluyen pronóstico solar y optimización tarifaria.
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Home Assistant:</strong> Plataforma de automatización del hogar de código abierto con excelente dashboard de energía e integraciones para la mayoría de inversores solares, baterías y cargadores de VE. Extensible con automatizaciones personalizadas.
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Node-RED:</strong> Herramienta de programación basada en flujos que puede leer registros Modbus, llamar APIs y enviar comandos OCPP. Buena para lógica personalizada de gestión de energía.
            </li>
          </ul>

          <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, margin: '10px 0', border: '1px solid #2a2a3e' }}>
            <strong style={{ color: '#7aa2f7' }}>Nota:</strong>{' '}
            Un buen HEMS puede ahorrar un 10–20% adicional en costos de electricidad más allá de lo que la solar y la batería por sí solas proporcionan, al tomar decisiones inteligentes en tiempo real sobre cuándo y dónde usar la energía.
          </div>
        </>
      ),
    },
    {
      key: 'grid-services',
      title: 'Servicios de Red y Respuesta a la Demanda',
      accentColor: '#73daca',
      advancedOnly: true,
      content: (_userLevel) => (
        <>
          <p style={{ margin: '0 0 10px' }}>
            Las baterías domésticas y los VE no son solo dispositivos de consumo — pueden participar en servicios a nivel de red, generando ingresos mientras ayudan a estabilizar la red eléctrica.
          </p>

          <div style={{ marginBottom: 14 }}>
            <h4 style={{ margin: '0 0 6px', color: '#e0af68' }}>
              Regulación de Frecuencia
            </h4>
            <p style={{ margin: '0 0 6px' }}>
              La red debe mantener una frecuencia exacta de 50 Hz (o 60 Hz en algunas regiones). Las baterías pueden inyectar o absorber potencia en milisegundos para ayudar a mantener este equilibrio.
            </p>
            <ul style={{ margin: '0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                FCR (Reserva de Contención de Frecuencia): Respuesta automática en segundos
              </li>
              <li style={{ marginBottom: 4 }}>
                Requiere batería de respuesta rápida con inversor bidireccional
              </li>
              <li style={{ marginBottom: 4 }}>
                Generalmente gestionado a través de un agregador, no directamente por los propietarios
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: 14 }}>
            <h4 style={{ margin: '0 0 6px', color: '#7aa2f7' }}>
              Centrales Virtuales (VPP)
            </h4>
            <p style={{ margin: '0 0 6px' }}>
              Una VPP agrega miles de baterías distribuidas y cargas controlables en un único recurso virtual que puede despacharse como una central eléctrica tradicional.
            </p>
            <ul style={{ margin: '0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                Los propietarios se inscriben a través del fabricante de su batería o comercializador de energía
              </li>
              <li style={{ marginBottom: 4 }}>
                El agregador envía comandos de descarga durante eventos de estrés de la red
              </li>
              <li style={{ marginBottom: 4 }}>
                Los participantes reciben pagos o créditos tarifarios por poner su batería disponible
              </li>
              <li style={{ marginBottom: 4 }}>
                Las baterías típicamente mantienen un SoC mínimo para las necesidades del hogar
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: 14 }}>
            <h4 style={{ margin: '0 0 6px', color: '#9ece6a' }}>
              Vehículo a Red (V2G)
            </h4>
            <p style={{ margin: '0 0 6px' }}>
              V2G permite que un VE descargue potencia de vuelta a la red, convirtiendo efectivamente al auto en una batería móvil. Una batería de VE de 60 kWh es significativamente más grande que una batería doméstica típica de 10 kWh.
            </p>
            <ul style={{ margin: '0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                Requiere un cargador bidireccional y un VE compatible con V2G
              </li>
              <li style={{ marginBottom: 4 }}>
                Actualmente soportado por un número limitado de vehículos (ej., Nissan Leaf vía CHAdeMO, algunos modelos más nuevos vía CCS)
              </li>
              <li style={{ marginBottom: 4 }}>
                ISO 15118-20 y OCPP 2.0.1 proporcionan el soporte de protocolo
              </li>
              <li style={{ marginBottom: 4 }}>
                Existen preocupaciones sobre la degradación de la batería, aunque los VE modernos manejan bien el ciclado superficial
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ margin: '0 0 6px', color: '#f7768e' }}>
              Vehículo a Hogar (V2H)
            </h4>
            <p style={{ margin: '0 0 6px' }}>
              Similar a V2G pero el VE descarga solo para alimentar el hogar, no de vuelta a la red. Más simple de implementar y no requiere aprobación de la empresa distribuidora en la mayoría de las jurisdicciones.
            </p>
            <ul style={{ margin: '0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                El VE actúa como batería de respaldo del hogar durante cortes o períodos de tarifa punta
              </li>
              <li style={{ marginBottom: 4 }}>
                Puede proporcionar 10–20 kWh de energía utilizable manteniendo suficiente carga para el próximo viaje
              </li>
              <li style={{ marginBottom: 4 }}>
                Particularmente valioso para hogares sin una batería estacionaria dedicada
              </li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#2e2a1a', borderRadius: 6, padding: 12, margin: '10px 0', border: '1px solid #3e3a2a' }}>
            <strong style={{ color: '#e0af68' }}>Importante:</strong>{' '}
            La participación en V2G y VPP puede afectar la garantía de su batería. Verifique los términos del fabricante antes de inscribirse. La mayoría de los programas limitan el número de ciclos adicionales para minimizar el impacto de la degradación.
          </div>
        </>
      ),
    },
  ],
};

export default es;
