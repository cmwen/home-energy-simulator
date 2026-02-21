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

export const zhTW: Translations = {
  // ── Nav ──
  nav_title: '家庭能源模擬器',
  nav_simulator: '模擬器',
  nav_scenarios: '情境方案',
  nav_learn: '學習',
  nav_protocols: '通訊協定',
  nav_strategies: '策略',
  nav_level: '程度：',
  nav_level_beginner: '初學者',
  nav_level_advanced: '進階',

  // ── Footer ──
  footer_text: '家庭能源模擬器 — 住宅能源系統互動學習工具',

  // ── Theme ──
  theme_light: '淺色',
  theme_dark: '深色',
  theme_auto: '自動',

  // ── SystemSummary ──
  summary_solar_generation: '太陽能發電',
  summary_home_consumption: '家庭用電',
  summary_grid_import: '電網輸入',
  summary_grid_export: '電網輸出',
  summary_battery: '電池',
  summary_battery_idle: '閒置',
  summary_battery_charging: '充電中',
  summary_battery_discharging: '放電中',
  summary_ev: '電動車',
  summary_ev_full: '已充滿',
  summary_ev_not_charging: '未充電',
  summary_self_consumption: '自用比例',
  summary_self_sufficiency: '自給率',

  // ── SessionStatsPanel ──
  stats_session_totals: '本次統計',
  stats_press_play: '— 按下播放以開始累計',
  stats_reset: '重置',
  stats_solar_generated: '太陽能發電量',
  stats_self_used: '自用',
  stats_exported: '輸出',
  stats_grid_imported: '電網輸入量',
  stats_cost: '費用：',
  stats_grid_exported: '電網輸出量',
  stats_earned: '收入：',
  stats_solar_value: '太陽能價值',
  stats_avoided_import_fit: '節省的購電費 + FiT（躉購費率）收入',
  stats_net_grid_cost: '電網淨成本',
  stats_net_credit: '淨收益（輸出收入超過購電成本）',
  stats_import_minus_fit: '購電支出減去 FiT 收入',
  stats_home_consumed: '家庭用電量',
  stats_total_load: '總負載（含電動車）',
  stats_fit: 'FiT',

  // ── SimulationControls ──
  sim_pause: '暫停',
  sim_play: '播放',
  sim_speed: '速度',
  sim_time: '時間：',
  sim_clouds: '雲量：',
  sim_season: '季節',
  sim_temperature: '溫度',
  sim_spring: '春季',
  sim_summer: '夏季',
  sim_autumn: '秋季',
  sim_winter: '冬季',

  // ── ComponentEditor ──
  editor_enabled: '已啟用',
  editor_disabled: '已停用',
  editor_remove_component: '移除元件',
  editor_power_override: '功率覆寫',

  // Type labels
  type_grid: '電力網路',
  type_smart_meter: '智慧電錶',
  type_grid_meter: '電網電錶（NMI）',
  type_energy_monitor: '能源監測器（CT）',
  type_main_switchboard: '主配電盤',
  type_solar_panels: '太陽能板',
  type_inverter: '逆變器',
  type_battery: '電池',
  type_ev_charger: '電動車充電器',
  type_home_load: '家庭負載',
  type_heat_pump: '熱泵',

  // Field labels
  field_panel_count: '面板數量',
  field_panel_wattage: '面板瓦數',
  field_roof_angle: '屋頂角度',
  field_capacity: '容量',
  field_current_soc: '目前 SOC',
  field_max_charge_rate: '最大充電功率',
  field_max_discharge_rate: '最大放電功率',
  field_max_current: '最大電流',
  field_phases: '相數',
  field_phase_single: '單相',
  field_phase_three: '三相',
  field_voltage: '電壓',
  field_charging_standard: '充電規格',
  field_charging_mode: '充電模式',
  field_is_charging: '充電中',
  field_ev_battery: '電動車電池（起始 %）',
  field_ev_capacity: '電動車容量',
  field_efficiency: '效率',
  field_max_output: '最大輸出',
  field_hybrid_mode: '混合模式',
  field_grid_export_limit: '電網輸出限制',
  field_feed_in_tariff: '躉購費率（FiT）',
  field_import_tariff: '購電費率',
  field_base_load: '基本負載',
  field_cop_rating: 'COP 等級',

  // Charging modes
  mode_fast: '快速',
  mode_eco: '節能',
  mode_solar_only: '純太陽能',
  mode_scheduled: '排程',

  // Info blurbs
  info_grid_meter: '這是 Ausgrid/DNSP（配電服務商）安裝在產權邊界的 NMI 電錶。它記錄輸入/輸出電量以供帳單計算，並設定輸出限制規則。您無法直接讀取或控制此電錶。',
  info_energy_monitor: '消費端 CT clamp（勾式電流感測器）監測裝置（如 Shelly EM、Emporia Vue），安裝於主配電盤。提供即時太陽能餘電量測功能，為純太陽能電動車充電及逆變器零輸出節流所必需。',
  info_switchboard: '住宅內的主交流配電盤。所有交流負載（家庭迴路、電動車充電器、熱泵）都連接於此。逆變器的交流輸出和電網連接都匯入此配電盤。',

  // ── AddComponentPanel ──
  add_component: '新增元件',
  add_switchboard: '配電盤',

  // ── SetupToolbar ──
  setup_label: '設定',
  setup_save_json: '儲存 JSON',
  setup_load_json: '載入 JSON',
  setup_share_url: '分享連結',
  setup_reset: '重置',
  setup_downloaded: '設定已下載',
  setup_invalid_file: '無效的設定檔 — 無法解析 JSON',
  setup_loaded: '已載入：',
  setup_url_copied: '分享連結已複製到剪貼簿',
  setup_reset_confirm: '確定要重置為預設系統嗎？這將捨棄您目前的設定。',
  setup_reset_done: '已重置為預設值',
  setup_auto_saved: '已自動儲存於本機',
  setup_auto_saved_tooltip: '您的設定會自動儲存至此瀏覽器的本機儲存空間',

  // ── ScenariosSection ──
  scenarios_title: '情境方案',
  scenarios_description: '真實的澳洲家庭設定方案，已預先配置並可供探索。載入一個方案以觀察系統行為——然後調整滑桿、啟用元件或執行模擬，以理解各種取捨。',
  scenarios_active: '使用中',
  scenarios_goal: '目標',
  scenarios_context: '澳洲背景',
  scenarios_what_unlocks: '此設定能解鎖哪些功能？',
  scenarios_what_setup_unlocks: '此設定解鎖的功能',
  scenarios_load: '載入方案 →',
  scenarios_currently_loaded: '目前已載入',
  scenarios_tip_label: '提示：',
  scenarios_tip: '載入方案後，切換到模擬器分頁即可查看即時系統圖和電力流向。使用「新增元件」面板來增減裝置，並到「學習」分頁了解各元件的功能。',

  // ── Scenario preset strings ──
  scenario_solar_only_name: '純太陽能 — 降低電費',
  scenario_solar_only_tagline: '入門級太陽能，尚無電池',
  scenario_solar_only_description: '一位新安裝太陽能的屋主，擁有 6.6 kW 面板和 5 kW 逆變器。沒有電池，沒有電動車。目標是將白天的電器使用移至太陽能發電時段，並將剩餘電力輸出。',
  scenario_solar_only_goal: '透過最大化白天自用消耗來降低電費。',
  scenario_solar_only_context: 'Ausgrid 區域。適用 5 kW 輸出限制。FiT（躉購費率）很低（約 5¢/kWh），因此自用遠比輸出更有價值。',

  scenario_solar_battery_name: '太陽能 + 電池 — 夜間零電費',
  scenario_solar_battery_tagline: '儲存太陽能供晚間使用',
  scenario_solar_battery_description: '最常見的升級路徑。一組 10 kWh 電池將中午多餘的太陽能儲存起來，供傍晚和夜間使用，消除大部分的電網購電。',
  scenario_solar_battery_goal: '以儲存的太陽能覆蓋傍晚和過夜用電。目標自給率 80% 以上。',
  scenario_solar_battery_context: '沒有電池的話，60–70% 的太陽能可能以低躉購費率輸出。有了 10 kWh 電池，大多數家庭在晴天可以達到接近零電網購電。',

  scenario_solar_ev_name: '太陽能 + 電動車 — 用陽光免費充電',
  scenario_solar_ev_tagline: '利用太陽能餘電為電動車充電',
  scenario_solar_ev_description: '一位電動車車主希望白天用太陽能為車輛充電。電動車充電器接在配電盤的專用 32A 迴路上——而非逆變器。消費端能源監測器（CT clamp）讓充電器即時偵測太陽能餘電，並據此調高或調低充電功率。',
  scenario_solar_ev_goal: '利用多餘的太陽能免費為電動車充電。避免從電網購電來充電。',
  scenario_solar_ev_context: '電動車充電器位於主配電盤上——它從配電盤上的任何電源取電（太陽能、電池或電網）。CT clamp 監測電網連接：當太陽能餘電使電錶歸零時，充電器開始加速。沒有 CT clamp 或能源監測器，「純太陽能」充電就無法實現。',

  scenario_full_system_name: '完整系統 — 太陽能 + 電池 + 電動車',
  scenario_full_system_tagline: '接近離網的完整住宅方案',
  scenario_full_system_description: '大多數屋主努力的目標配置：太陽能板、混合式逆變器、家用電池和智慧電動車充電器——全部由能源監測器協調。優先使用太陽能，將餘電存入電池，夜間用電池為電動車充電，僅在必要時使用電網。',
  scenario_full_system_goal: '達成 90% 以上的自給率。白天使用太陽能，傍晚使用電池，電網僅作為備援。',
  scenario_full_system_context: '這是各元件之間互動最為關鍵的情境。電網電錶偵測產權邊界處的淨流量。能源監測器為 HEMS（家庭能源管理系統）提供即時數據，以便對四組裝置做出智慧決策。',

  scenario_zero_export_name: '零輸出 — 公寓／嵌入式電網',
  scenario_zero_export_tagline: '不允許輸出——每瓦電力都在現場使用',
  scenario_zero_export_description: '部分住宅位於嵌入式電網（社區大樓、新建社區）或受 DNSP 限制而禁止向電網輸出。每瓦太陽能都必須在現場消耗或儲存。這要求逆變器利用 CT clamp 回饋即時節流。',
  scenario_zero_export_goal: '100% 的太陽能在現場使用。電池吸收餘電；電池滿時逆變器節流。',
  scenario_zero_export_context: '零輸出模式在逆變器設定中配置，CT clamp 安裝在電網連接處提供即時回饋。能源監測器在此不可或缺——沒有它，逆變器無法知道何時需要節流。',

  scenario_ev_no_ct_name: '電動車充電 — 無 CT Clamp（手動設定電流）',
  scenario_ev_no_ct_tagline: '有太陽能和電動車但無能源監測器——控制受限',
  scenario_ev_no_ct_description: '一位有太陽能但沒有 CT clamp 或能源監測器的電動車車主。沒有即時太陽能餘電數據，充電器無法動態跟隨太陽能產出。屋主必須手動設定固定充電電流——通常 6–10A 以「大致」維持在太陽能輸出範圍內。當太陽能下降（雲層、午後），電網自動補充，屋主無法阻止。',
  scenario_ev_no_ct_goal: '了解沒有 CT clamp 的代價。將此處的電網購電量與「太陽能 + 電動車（有 CT Clamp）」方案進行比較，查看金額差異。',
  scenario_ev_no_ct_context: '沒有 CT clamp，智慧充電功能如「純太陽能」或「節能」模式都無法使用。充電器以使用者設定的固定電流運行，不管太陽能狀況如何。安裝一組 CT clamp（Shelly EM 或 Emporia Vue，$150–300）即可啟用動態太陽能充電，通常幾個月內就能回本。',

  // ── Component unlock strings ──
  unlock: {
    gridMeter: [
      '記錄輸入與輸出電量以供帳單計算（NMI 電錶）',
      '設定輸出限制規則（如 Ausgrid 區域的 5 kW 限制）',
      '啟用零售商的躉購費率（FiT）回饋',
    ],
    energyMonitor: [
      '為 HEMS 提供即時太陽能餘電可見性',
      '純太陽能電動車充電所必需（CT clamp 回饋）',
      '逆變器零輸出節流所必需',
      '啟用智慧電池調度決策',
    ],
    mainSwitchboard: [
      '交流配電中樞——所有負載都連接於此',
      '電動車充電器從配電盤取電，而非從逆變器',
      '太陽能（經逆變器）和電網都匯入此配電盤',
    ],
    inverter: [
      '將太陽能直流電轉換為家用交流電',
      '混合模式：管理直流耦合電池充電',
      '零輸出模式：透過 CT clamp 回饋節流輸出',
    ],
    battery: [
      '儲存多餘太陽能供傍晚及過夜使用',
      '晴天自給率從約 35% 提升至約 80% 以上',
      '可在夜間利用離峰電價從電網充電',
    ],
    evCharger: [
      'OCPP 2.0.1：智慧充電、動態負載管理',
      '純太陽能模式：僅在太陽能餘電超過最低門檻時充電（需要 CT clamp）',
      '排程模式：在最便宜的離峰費率時段充電',
    ],
  },

  // ── Education ──
  learn_title: '學習：家庭能源系統',
  learn_beginner_subtitle: '了解家庭能源的基礎概念。切換至進階模式以查看更多技術內容。',
  learn_advanced_subtitle: '顯示所有主題，包括進階系統設計與技術細節。',

  learn_sections: [
    {
      title: '\u2600\uFE0F 家庭太陽能系統是如何運作的？',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            家庭太陽能系統將陽光轉換為家庭可用的電力。以下是能源的流向：
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
            陽光 → <strong>太陽能板</strong>（直流電）
            <br />
            &nbsp;&nbsp;→ <strong>逆變器</strong>（將直流電轉為交流電）
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;→ <strong>您的家</strong>（驅動電器）
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;→ <strong>電池</strong>（儲存多餘電力）
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;→ <strong>電網</strong>（輸出剩餘電力）
          </div>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>太陽能板</strong>由光伏（PV）電池組成，在陽光照射下產生直流電（DC）。即使在多雲天氣，面板仍能產生一些電力，只是輸出會降低。
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>逆變器</strong>是系統的大腦。它將面板產生的直流電轉換為家用電器使用的交流電（AC）。混合式逆變器還能管理電池。
          </p>
          <p style={{ margin: '0 0 8px' }}>
            您的家會優先使用太陽能電力。多餘的電力可以儲存在<strong style={{ color: '#bb9af7' }}>家用電池</strong>中以備後用，或輸出到<strong style={{ color: '#bb9af7' }}>電網</strong>以獲得躉購費率（FiT）回饋。
          </p>
          <p style={{ margin: 0, color: '#73daca' }}>
            目標是盡可能多地使用自己的太陽能——這稱為<strong>自用消耗</strong>，能幫您省下最多的錢。
          </p>
        </>
      ),
    },
    {
      title: '\uD83D\uDD0C 電網電錶 vs 能源監測器——有什麼不同？',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            太陽能住宅中有<strong>兩種截然不同的計量裝置</strong>。由於它們都能測量電力，經常被混淆——但它們安裝在不同位置、有不同用途，且由不同單位擁有。
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #6366f1' }}>
              <strong style={{ color: '#6366f1' }}>電網電錶（NMI 電錶）</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                由 <strong>Ausgrid / DNSP（配電服務商）</strong>安裝在產權邊界處的雙向電錶。由您的配電商安裝並擁有。記錄整個物業的總輸入和輸出電量以供帳單計算。您無法直接讀取或控制此電錶。
              </p>
              <ul style={{ margin: '8px 0 0', paddingLeft: 16, fontSize: 12, color: '#9ca3af' }}>
                <li style={{ marginBottom: 3 }}>設定輸出限制規則（如 Ausgrid 區域的 5 kW 限制）</li>
                <li style={{ marginBottom: 3 }}>為您的零售商提供帳單數據</li>
                <li style={{ marginBottom: 3 }}>啟用躉購費率（FiT）回饋</li>
                <li>您付費給零售商；他們讀取此電錶</li>
              </ul>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #ec4899' }}>
              <strong style={{ color: '#ec4899' }}>能源監測器（CT Clamp）</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                您自行安裝在主配電盤上的<strong>消費端裝置</strong>。例如：Shelly EM、Emporia Vue、IoTaWatt。使用夾式 CT 感測器夾在各迴路上。為您的 HEMS 或逆變器提供毫秒級的即時功率讀數。
              </p>
              <ul style={{ margin: '8px 0 0', paddingLeft: 16, fontSize: 12, color: '#9ca3af' }}>
                <li style={{ marginBottom: 3 }}>純太陽能電動車充電所必需</li>
                <li style={{ marginBottom: 3 }}>逆變器零輸出節流所必需</li>
                <li style={{ marginBottom: 3 }}>啟用智慧電池調度</li>
                <li>由您擁有和讀取</li>
              </ul>
            </div>
          </div>
          <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, marginBottom: 10, fontFamily: 'monospace', fontSize: 12, color: '#9ece6a', lineHeight: 1.9 }}>
            電網 → <strong>電網電錶（NMI）</strong> → 主配電盤<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↑<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>能源監測器（CT）</strong> ← 夾在配電盤線路上<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓ 將數據傳送至 HEMS / 逆變器
          </div>
          <p style={{ margin: 0, color: '#73daca', fontSize: 13 }}>
            <strong>關鍵原則：</strong>NMI 電錶是您的帳單。CT clamp 是您的大腦。要實現智慧太陽能自用消耗——特別是純太陽能電動車充電——您需要 CT clamp。僅靠 NMI 電錶是不夠的。
          </p>
        </>
      ),
    },
    {
      title: '\uD83D\uDCB0 了解您的電費帳單',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            有了太陽能系統後，您的電費帳單根據兩個主要流向計算：
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #f7768e' }}>
              <strong style={{ color: '#f7768e' }}>輸入（您付費）</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                當太陽能和電池無法滿足需求時，從電網購入的電力。通常 $0.25–$0.45/kWh，取決於您的費率方案和時段。
              </p>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #9ece6a' }}>
              <strong style={{ color: '#9ece6a' }}>輸出（您獲利）</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                多餘的太陽能輸出到電網可獲得躉購費率（FiT）回饋。通常 $0.05–$0.12/kWh——遠低於您購電的價格。
              </p>
            </div>
          </div>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>自用消耗的節省效益：</strong>每一度自用的太陽能電力都能避免以零售全價購電。如果購電費率為 $0.30/kWh，輸出費率為 $0.08/kWh，那麼每度自用電力可省下 $0.30，而非僅賺取 $0.08。
          </p>
          <p style={{ margin: 0, color: '#73daca' }}>
            這就是為什麼最大化自用消耗（直接使用太陽能或存入電池）比輸出到電網更有價值。
          </p>
        </>
      ),
    },
    {
      title: '\uD83D\uDD0B 什麼是家用電池？',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            家用電池（又稱太陽能電池或儲能系統）能儲存多餘的太陽能，供無日照時使用。
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>運作方式：</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              白天當太陽能產出超過家庭用電時進行<strong>充電</strong>
            </li>
            <li style={{ marginBottom: 4 }}>
              傍晚和夜間<strong>放電</strong>以驅動家用電器，取代從電網購電
            </li>
            <li style={{ marginBottom: 4 }}>
              顯著提升<strong>自用消耗率</strong>——從沒有電池時的約 30–40% 提升至有電池時的 60–80%
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>典型規格：</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>容量：</strong>5–15 kWh 可用容量（一般家庭過夜使用 8–12 kWh）
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>功率：</strong>2.5–5 kW 連續充放電功率
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>循環壽命：</strong>4,000–10,000 次循環，取決於電池化學成分
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>往返效率：</strong>90–95%（在充放電過程中損失 5–10%）
            </li>
          </ul>
          <p style={{ margin: 0, color: '#73daca' }}>
            當躉購費率和購電費率之間差距較大，或您使用的是時間電價方案時，電池最具價值。
          </p>
        </>
      ),
    },
    {
      title: '\uD83D\uDE97 在家為電動車充電',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            在家為電動車充電是家庭中最大的可控負載之一，非常適合智慧能源管理。
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>充電等級：</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #e0af68' }}>
              <strong style={{ color: '#e0af68' }}>Level 1（慢充）</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                標準插座，1.4–2.4 kW。每小時增加約 8–15 公里續航。適合短途通勤的夜間補充。
              </p>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #7aa2f7' }}>
              <strong style={{ color: '#7aa2f7' }}>Level 2（快充）</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                專用 EVSE 充電設備，3.7–22 kW。單相（最高 7.4 kW）或三相（最高 22 kW）。每小時增加 25–120 公里續航。
              </p>
            </div>
          </div>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>單相 vs 三相：</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>單相：</strong>住宅最常見。最大 32A × 230V = 7.4 kW
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>三相：</strong>部分市場可用。最大 32A × 3 × 230V = 22 kW
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>智慧充電的好處：</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              利用多餘太陽能充電以降低電費
            </li>
            <li style={{ marginBottom: 4 }}>
              排程在離峰費率時段充電
            </li>
            <li style={{ marginBottom: 4 }}>
              動態調整充電功率以匹配可用的太陽能
            </li>
            <li style={{ marginBottom: 4 }}>
              防止電網連接過載
            </li>
          </ul>
          <p style={{ margin: 0, color: '#73daca' }}>
            電動車電池（40–100 kWh）遠大於家用電池（5–15 kWh），因此智慧充電決策對您的能源成本有重大影響。
          </p>
        </>
      ),
    },
    {
      title: '\u26A1 什麼是逆變器？',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            逆變器將太陽能板產生的直流電（DC）轉換為家庭和電網使用的交流電（AC）。它是任何太陽能系統的核心元件。
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>逆變器類型：</strong>
          </p>
          <div style={{ marginBottom: 12 }}>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, marginBottom: 8, borderLeft: '3px solid #e0af68' }}>
              <strong style={{ color: '#e0af68' }}>串列式逆變器（String Inverter）</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                面板串聯連接成一「串」。一台逆變器處理整串面板。成本效益較高，但最弱的面板會限制整串的表現。最適合無遮蔽的屋頂。
              </p>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, marginBottom: 8, borderLeft: '3px solid #7aa2f7' }}>
              <strong style={{ color: '#7aa2f7' }}>微型逆變器（Micro Inverter）</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                每片面板都有自己的小型逆變器。面板獨立運作，因此一片面板上的遮蔽不會影響其他面板。成本較高，但更適合複雜屋頂或部分遮蔽的情況。
              </p>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #9ece6a' }}>
              <strong style={{ color: '#9ece6a' }}>混合式逆變器（Hybrid Inverter）</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                將太陽能逆變器和電池逆變器合為一體。管理太陽能產出、電池充放電和電網互動。是新安裝搭配儲能系統時最常見的選擇。
              </p>
            </div>
          </div>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>效率：</strong>現代逆變器的效率為 96–98%。這意味著每 1000W 的直流輸入，您可獲得 960–980W 的交流輸出。微小的損耗轉化為熱能。
          </p>
          <p style={{ margin: 0, color: '#73daca' }}>
            逆變器的選型很重要：它的規格應大致匹配您的太陽能陣列。逆變器偏小會在太陽能峰值時裁切（浪費）產出，而逆變器偏大則浪費資金。
          </p>
        </>
      ),
    },
    {
      title: '\uD83D\uDCD0 系統規格設計指南',
      advanced: true,
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            正確配置太陽能、電池和逆變器系統的規格，對於最大化投資報酬率至關重要。
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>太陽能陣列配置：</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              從您的年用電量開始（例如 6,000 kWh/年）
            </li>
            <li style={{ marginBottom: 4 }}>
              除以您所在地的峰值日照小時數 × 365（例如 4.5 小時 × 365 = 1,642）
            </li>
            <li style={{ marginBottom: 4 }}>
              乘以 0.8 的損耗折減係數：6,000 / (1,642 × 0.8) ≈ 4.6 kW 系統
            </li>
            <li style={{ marginBottom: 4 }}>
              經驗法則：1 kW 太陽能每年約產生 1,200–1,600 kWh，視地點而定
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>電池配置：</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              計算您的傍晚/夜間用電量（一般家庭約 8–12 kWh）
            </li>
            <li style={{ marginBottom: 4 }}>
              選擇可覆蓋 80–100% 過夜負載的電池
            </li>
            <li style={{ marginBottom: 4 }}>
              考慮放電深度（DoD）：10 kWh 電池在 90% DoD 下可提供 9 kWh 可用電量
            </li>
            <li style={{ marginBottom: 4 }}>
              電池過大會產生遞減效益，除非您有非常大的太陽能系統
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>逆變器配置：</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              逆變器應匹配太陽能陣列：1:1 至 1.3:1 的 DC:AC 比率是典型的
            </li>
            <li style={{ marginBottom: 4 }}>
              略微超配（例如 6.6 kW 面板搭配 5 kW 逆變器）可最大化早晚輸出
            </li>
            <li style={{ marginBottom: 4 }}>
              若為混合式，確保逆變器支援您電池的充放電功率
            </li>
          </ul>
        </>
      ),
    },
    {
      title: '\uD83D\uDD0C 電網連接類型',
      advanced: true,
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            太陽能系統與電網的連接方式，會影響您能安裝什麼設備以及能輸出多少電力。
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>連接相數：</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>單相：</strong>標準住宅連接。通常 40–63A 主保險絲。在許多管轄區限制逆變器為 5 kW。一條火線。
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>三相：</strong>在較新的住宅和某些地區常見。三條火線，各承載一個相位。允許更大的逆變器（最高 15–30 kW）、三相電動車充電（22 kW）和更好的負載平衡。
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>輸出配置：</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>全量輸出：</strong>對輸出到電網的電量無限制（在新安裝中不常見）
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>限量輸出：</strong>逆變器被配置為限制電網輸出至設定值（例如 5 kW）。多餘太陽能被裁切或轉向電池/電動車。
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>零輸出：</strong>不得輸出任何電力。逆變器必須即時節流以精確匹配用電量。需要 CT clamp 或電錶提供即時回饋。
            </li>
          </ul>
          <p style={{ margin: 0, color: '#73daca' }}>
            輸出限制讓您即使在電網輸出容量受限時，仍可安裝更大的太陽能系統——多餘的電力改為充電池或電動車。
          </p>
        </>
      ),
    },
    {
      title: '\uD83E\uDDEA 電池化學成分比較',
      advanced: true,
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            家用電池中的兩種主流鋰離子電池化學成分是 LFP 和 NMC。
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #9ece6a' }}>
              <strong style={{ color: '#9ece6a' }}>LFP（磷酸鐵鋰）</strong>
              <ul style={{ margin: '8px 0 0', paddingLeft: 16, fontSize: 13 }}>
                <li style={{ marginBottom: 3 }}>6,000–10,000+ 次循環壽命</li>
                <li style={{ marginBottom: 3 }}>非常安全，熱穩定性佳</li>
                <li style={{ marginBottom: 3 }}>100% 放電深度（DoD）</li>
                <li style={{ marginBottom: 3 }}>能量密度較低（較重）</li>
                <li style={{ marginBottom: 3 }}>不含鈷——供應鏈更合乎道德</li>
                <li>例如：BYD、Tesla Powerwall 3</li>
              </ul>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #7aa2f7' }}>
              <strong style={{ color: '#7aa2f7' }}>NMC（鎳錳鈷）</strong>
              <ul style={{ margin: '8px 0 0', paddingLeft: 16, fontSize: 13 }}>
                <li style={{ marginBottom: 3 }}>3,000–5,000 次循環壽命</li>
                <li style={{ marginBottom: 3 }}>能量密度較高（較輕）</li>
                <li style={{ marginBottom: 3 }}>通常建議 80–90% DoD</li>
                <li style={{ marginBottom: 3 }}>需要更多的熱管理</li>
                <li style={{ marginBottom: 3 }}>終身使用下每次循環成本較高</li>
                <li>例如：LG RESU、舊版 Powerwall</li>
              </ul>
            </div>
          </div>
          <p style={{ margin: 0, color: '#73daca' }}>
            對於家庭太陽能系統的日常循環使用，LFP 因其更長的循環壽命、安全性和不斷改善的每 kWh 成本，目前是首選的電池化學成分。
          </p>
        </>
      ),
    },
    {
      title: '\uD83C\uDF21\uFE0F 熱泵整合',
      advanced: true,
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            熱泵是高效率的電力暖氣設備，與太陽能系統搭配良好，利用電力來移動熱能而非直接產生熱能。
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>COP（性能係數）：</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              COP 為 3.5 表示每消耗 1 kW 電力，熱泵可提供 3.5 kW 的熱能
            </li>
            <li style={{ marginBottom: 4 }}>
              COP 隨室外溫度變化——極冷時較低
            </li>
            <li style={{ marginBottom: 4 }}>
              現代空氣源熱泵的季節性 COP（SCOP）通常為 3.0–4.0
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>蓄熱功能：</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              熱水槽可作為熱能電池——白天用多餘太陽能加熱水
            </li>
            <li style={{ marginBottom: 4 }}>
              在高費率時段前利用太陽能或低價電力預先加熱房屋
            </li>
            <li style={{ marginBottom: 4 }}>
              緩衝槽可儲存熱能，數小時內損耗極少
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>智慧電網互動：</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              HEMS 可在太陽能充足或電網電價低時，發送訊號讓熱泵運行
            </li>
            <li style={{ marginBottom: 4 }}>
              SG Ready 介面（歐洲熱泵常見）可透過兩個數位輸入進行外部控制
            </li>
            <li style={{ marginBottom: 4 }}>
              部分熱泵支援 Modbus，可直接與能源管理系統整合
            </li>
          </ul>
        </>
      ),
    },
    {
      title: '\uD83D\uDCE1 監測與數據',
      advanced: true,
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            監測您的能源系統對於了解性能、發現問題和優化使用至關重要。
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>CT Clamp（電流互感器）：</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              夾式感測器，無需切斷線路即可測量通過電纜的電流
            </li>
            <li style={{ marginBottom: 4 }}>
              安裝在電網饋線、太陽能饋線和各別迴路上以測量電力流向
            </li>
            <li style={{ marginBottom: 4 }}>
              許多逆變器和能源監測器使用 CT clamp 進行即時回饋
            </li>
            <li style={{ marginBottom: 4 }}>
              精確度取決於品質——優質 CT 通常誤差 1–2%
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>能源監測系統：</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>逆變器入口網站：</strong>大多數逆變器都有雲端儀表板（Fronius Solar.web、Huawei FusionSolar、SMA Sunny Portal）
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>專用監測器：</strong>如 Shelly EM、Emporia Vue 或 IoTaWatt 等裝置，提供迴路級的精細監測
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>DIY 平台：</strong>Home Assistant 搭配能源儀表板、Grafana 搭配 InfluxDB 進行時間序列數據分析
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>HEMS（家庭能源管理系統）：</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              集中式控制器，讀取所有裝置的數據並做出優化決策
            </li>
            <li style={{ marginBottom: 4 }}>
              使用的協定：Modbus TCP/RTU（逆變器和電錶）、OCPP（電動車充電器）、MQTT（IoT 感測器）
            </li>
            <li style={{ marginBottom: 4 }}>
              可自動化電池充電、電動車充電、熱泵排程和輸出管理
            </li>
          </ul>
        </>
      ),
    },
    {
      title: '\uD83D\uDD0C 家用電動車充電器功能——智慧充電器能做什麼？',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            並非所有家用電動車充電器都一樣。基本充電器只提供固定功率輸出。智慧充電器則能主動與您的家庭能源系統溝通，並即時調整充電。
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>基本功能（所有家用充電器）：</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>以額定電流固定功率輸出（如 16A 或 32A）</li>
            <li style={{ marginBottom: 4 }}>排程充電——在 App 中設定開始/停止時間</li>
            <li style={{ marginBottom: 4 }}>充電能量記錄</li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>智慧/高階功能：</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #9ece6a' }}>
              <strong style={{ color: '#9ece6a' }}>動態電流調整</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                充電器根據能源監測器的訊號，持續調整電流（如 6A–32A）。這是純太陽能充電的核心機制——充電器即時跟隨太陽能餘電曲線。
              </p>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #7aa2f7' }}>
              <strong style={{ color: '#7aa2f7' }}>App 遠端控制 + OTA 更新</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                遠端啟動/停止充電、配置充電模式、透過空中下載接收韌體更新。無需電工上門，即可讓充電器保持最新的協定和功能。
              </p>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #bb9af7' }}>
              <strong style={{ color: '#bb9af7' }}>Plug &amp; Charge（ISO 15118）</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                電動車和充電器在插入電纜的瞬間，透過 TLS 憑證自動互相認證——不需要 RFID 卡或 App。是未來 V2G（雙向）充電的前提。
              </p>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #e0af68' }}>
              <strong style={{ color: '#e0af68' }}>OCPP 2.0.1 智慧充電</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                讓中央管理系統（CSMS）向充電器發送帶有時間戳記的功率排程。充電器獨立執行排程——即使網路中斷也不影響。是電網需量反應和 VPP（虛擬電廠）參與的前提。
              </p>
            </div>
          </div>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>動態調整充電電流安全嗎？</strong>
          </p>
          <p style={{ margin: '0 0 8px', fontSize: 13 }}>
            是的——只要充電器和電動車使用標準通訊協定（Mode 2/3 電纜上的 PWM 導引訊號，或 CCS 上的 ISO 15118）。充電器透過導引訊號告知最大可用電流；電動車只會取用它能安全接受的量。充電器無法強迫電動車取用超過其需求的電流。
          </p>
          <p style={{ margin: 0, color: '#73daca', fontSize: 13 }}>
            <strong>一條硬性規則：</strong>大多數電動車不接受低於 6A（單相 1.4 kW）的充電。如果太陽能餘電低於此門檻，智慧充電器必須暫停充電或從電網補充差額（節能模式），而不是嘗試以 3A 充電。
          </p>
        </>
      ),
    },
    {
      title: '\u2600\uFE0F\uD83D\uDD04 太陽能逆變器 + 電動車充電器整合——需要同一品牌嗎？',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            太陽能屋主在添購電動車充電器時常問的問題：<em>{'"我需要 Fronius/SMA/Huawei 充電器才能搭配我的 Fronius/SMA/Huawei 逆變器嗎？"'}</em> 簡短的答案是<strong>不需要</strong>——但要理解原因，需要知道實際上是哪個裝置在控制充電。
          </p>
          <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, marginBottom: 12, fontFamily: 'monospace', fontSize: 12, color: '#9ece6a', lineHeight: 1.9 }}>
            太陽能板 → 逆變器（DC→AC） → 主配電盤<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↑<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;能源監測器（CT clamp）<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓ 即時數據<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;電動車充電器 ← 調整電流
          </div>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>逆變器的角色：</strong>將直流電轉為交流電並與電網同步。它不決定電動車充電器要取用多少電力。該決定來自<strong>能源監測器</strong>（CT clamp）和<strong>充電器自身的控制邏輯</strong>。
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>真正啟用純太陽能電動車充電的要素：</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>CT clamp / 能源監測器</strong>安裝在配電盤上即時測量太陽能餘電
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>電動車充電器</strong>讀取此數據（直接透過 Modbus，或透過 HEMS/雲端中繼）並相應調整充電電流
            </li>
            <li style={{ marginBottom: 4 }}>
              逆變器的品牌與此過程無關——它只是產生交流電
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>同品牌的優勢（例如 Fronius Wattpilot + Fronius Smart Meter）：</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>隨插即用——無需手動設定</li>
            <li style={{ marginBottom: 4 }}>逆變器 + 充電器使用同一個 App</li>
            <li style={{ marginBottom: 4 }}>更緊密的整合，更快的更新週期</li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>開放標準的替代方案：</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>任何支援 Modbus 或 MQTT 的 CT clamp（如 Shelly EM、IoTaWatt）</li>
            <li style={{ marginBottom: 4 }}>任何相容 OCPP 的充電器（Myenergi Zappi、Ocular IQ、Smappee）</li>
            <li style={{ marginBottom: 4 }}>可選用 Home Assistant 等 HEMS 來統籌一切</li>
            <li style={{ marginBottom: 4 }}>優點：自由更換品牌、支援任何電動車、整合第三方平台</li>
          </ul>
          <p style={{ margin: 0, color: '#73daca', fontSize: 13 }}>
            <strong>結論：</strong>如果您已有 Fronius 逆變器，Fronius Wattpilot 是最簡單的選擇。但您不會被綁定。任何能讀取 CT clamp 或 HEMS 數據的智慧充電器都能達成同樣的太陽能優先充電效果。
          </p>
        </>
      ),
    },
    {
      title: '\u2601\uFE0F 雲端 vs 本地端——斷網時會怎樣？',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            許多智慧家庭能源產品依賴雲端伺服器來運作 App 和控制邏輯。了解哪些功能需要網路，哪些完全在本地網路上運行，是很重要的。
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #f7768e' }}>
              <strong style={{ color: '#f7768e' }}>斷網後失效</strong>
              <ul style={{ margin: '6px 0 0', paddingLeft: 16, fontSize: 13 }}>
                <li style={{ marginBottom: 3 }}>遠端 App 控制（從家外啟動/停止）</li>
                <li style={{ marginBottom: 3 }}>雲端能源歷史記錄與儀表板</li>
                <li style={{ marginBottom: 3 }}>OTA 韌體更新</li>
                <li style={{ marginBottom: 3 }}>太陽能預測（天氣數據）</li>
                <li>動態電價資訊</li>
              </ul>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #9ece6a' }}>
              <strong style={{ color: '#9ece6a' }}>本地端持續運作</strong>
              <ul style={{ margin: '6px 0 0', paddingLeft: 16, fontSize: 13 }}>
                <li style={{ marginBottom: 3 }}>太陽能發電與電動車充電</li>
                <li style={{ marginBottom: 3 }}>動態純太陽能充電（CT clamp 本地迴路）</li>
                <li style={{ marginBottom: 3 }}>已下載的 OCPP 充電排程</li>
                <li style={{ marginBottom: 3 }}>電池充放電循環</li>
                <li>熱泵運行</li>
              </ul>
            </div>
          </div>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>為什麼純太陽能電動車充電能在離線時運作：</strong>CT clamp、電動車充電器和它們的通訊完全在您的本地網路上進行（甚至是透過直接接線/Modbus）。即時電流調整的迴路中沒有雲端。雲端只在歷史記錄和遠端 App 存取時才需要。
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>韌性最佳實踐：</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>確保您的電動車充電器能在本地端執行充電邏輯（請查閱製造商規格）</li>
            <li style={{ marginBottom: 4 }}>使用本地端優先的平台（Home Assistant、本地 OCPP 伺服器）進行自動化</li>
            <li style={{ marginBottom: 4 }}>雲端僅用於監測儀表板、通知和遠端存取</li>
            <li style={{ marginBottom: 4 }}>OCPP 2.0.1 允許充電排程被下載並在充電器本地端執行——排程設定完成後不需要伺服器</li>
          </ul>
          <p style={{ margin: 0, color: '#73daca', fontSize: 13 }}>
            設計良好的系統會將關鍵控制迴路（太陽能 → CT clamp → 充電器）完全保持在本地端。雲端雖然有用，但絕不應成為您日常能源流程的單一故障點。
          </p>
        </>
      ),
    },
    {
      title: '\uD83D\uDE97 適合澳洲太陽能住宅的智慧電動車充電器推薦',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            以下充電器適合澳洲的環境條件（單相電網、5 kW 輸出限制、Ausgrid/Endeavour/SA Power 區域），且支援太陽能餘電充電，無需品牌綁定。
          </p>

          <div style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase' as const, letterSpacing: '0.08em', marginBottom: 8 }}>高整合度 / 太陽能優先</div>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
              <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #9ece6a' }}>
                <strong style={{ color: '#9ece6a' }}>Myenergi Zappi (7.4 kW / 22 kW)</strong>
                <p style={{ margin: '4px 0 0', fontSize: 13, lineHeight: 1.6 }}>
                  同級最佳的太陽能餘電充電，提供三種模式：Eco（太陽能 + 電網補充）、Eco+（純太陽能，餘電不足時暫停）和 Boost（全速充電）。可搭配外部 CT clamp 獨立運作——不依賴逆變器品牌。支援 App 控制和 OCPP，面向未來。
                </p>
                <div style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>OCPP 1.6 · 外部 CT clamp · App 控制 · 7.4 kW（單相）</div>
              </div>
              <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #bb9af7' }}>
                <strong style={{ color: '#bb9af7' }}>Ocular IQ Home Solar Smart Charger</strong>
                <p style={{ margin: '4px 0 0', fontSize: 13, lineHeight: 1.6 }}>
                  澳洲製造，專為太陽能住宅設計。透過 Modbus 或製造商 API 直接整合大多數逆變器品牌。支援 Home Assistant。可擴展至電池和 V2H 協調。如果您想要本地端優先控制，這是不錯的選擇。
                </p>
                <div style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>OCPP 2.0.1 · Modbus · 本地 API · 7.4 kW</div>
              </div>
              <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #7aa2f7' }}>
                <strong style={{ color: '#7aa2f7' }}>Smappee EV Wall</strong>
                <p style={{ margin: '4px 0 0', fontSize: 13, lineHeight: 1.6 }}>
                  搭配 Smappee 能源監測器（CT clamp）實現緊密的太陽能整合。支援跨多個充電器的動態負載平衡。OCPP、本地網路運作、家庭能源儀表板。適合多充電器家庭。
                </p>
                <div style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>OCPP 1.6/2.0 · CT clamp 配對 · 7.4 kW / 22 kW</div>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase' as const, letterSpacing: '0.08em', marginBottom: 8 }}>超值 / 簡易安裝</div>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
              <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #e0af68' }}>
                <strong style={{ color: '#e0af68' }}>Evos 7.4 kW Smart EV Charger</strong>
                <p style={{ margin: '4px 0 0', fontSize: 13, lineHeight: 1.6 }}>
                  經濟實惠，在澳洲廣泛供應。App 控制排程充電，透過 CT clamp 實現太陽能優先模式。適合不需要深度 HEMS 整合的簡單安裝。
                </p>
                <div style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>App 排程 · CT clamp 支援 · 7.4 kW</div>
              </div>
              <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #73daca' }}>
                <strong style={{ color: '#73daca' }}>GoodWe HCA G2 (7 kW)</strong>
                <p style={{ margin: '4px 0 0', fontSize: 13, lineHeight: 1.6 }}>
                  如果您已有 GoodWe 逆變器，這是最佳選擇——原生整合，無需額外 CT clamp。GoodWe 的 SEMS 入口網站可在同一儀表板管理太陽能 + 電動車。如需要，亦支援 OCPP 連接第三方 CSMS。
                </p>
                <div style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>OCPP 1.6 · GoodWe 原生整合 · 7 kW</div>
              </div>
            </div>
          </div>

          <div style={{ padding: '12px 14px', background: '#16161e', borderRadius: 6, borderLeft: '3px solid #7aa2f7', fontSize: 13, color: '#9ca3af', lineHeight: 1.7 }}>
            <strong style={{ color: '#7aa2f7' }}>核心選購清單：</strong>
            <ol style={{ margin: '8px 0 0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>是否支援透過外部 CT clamp 或 Modbus 進行太陽能餘電充電？（純太陽能模式必需）</li>
              <li style={{ marginBottom: 4 }}>是否支援 OCPP 1.6 或 2.0.1？（智慧充電和未來電網服務所需）</li>
              <li style={{ marginBottom: 4 }}>能否在無網路連線的情況下於本地端執行充電邏輯？</li>
              <li style={{ marginBottom: 4 }}>是否通過澳洲市場認證？（查看 RCM 標誌、AS/NZS 3000 佈線規範合規性）</li>
              <li>是否支援 OTA 韌體更新？（為協定升級做好準備）</li>
            </ol>
          </div>
        </>
      ),
    },
  ],

  // ── Protocols ──
  protocols_title: '通訊協定',
  protocols_subtitle: '家庭能源系統中的裝置如何互相溝通。',
  protocols_advanced_extra: ' 進階視圖包含額外的協定和技術細節。',

  protocols_sections: [
    {
      key: 'modbus',
      title: 'Modbus — 工業通訊協定',
      accentColor: '#e0af68',
      content: (userLevel) => (
        <>
          <p style={{ margin: '0 0 10px' }}>
            <strong style={{ color: '#e0af68' }}>什麼是 Modbus：</strong>Modbus 是一種串列通訊協定，最初由 Modicon 公司於 1979 年發布。它已成為連接工業電子設備的事實標準，並廣泛應用於家庭能源系統。
          </p>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>運作方式：</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>主從架構：</strong>一個主設備（如您的能源管理系統）發起請求；從設備（逆變器、電錶）回應數據。
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>暫存器資料模型：</strong>所有數據以編號的暫存器組織。每個暫存器存放一個 16 位元值（0–65535）。
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>請求-回應：</strong>主設備詢問「讀取暫存器 40001」，從設備返回該處儲存的值。
            </li>
          </ul>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>在家庭能源系統中的應用：</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>逆變器：</strong>SMA、Fronius、Huawei、GoodWe 及大多數品牌都支援 Modbus TCP 或 RTU，用於讀取產出數據和設定功率限制
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>智慧電錶：</strong>如 Eastron SDM630 或 Carlo Gavazzi 等裝置透過 Modbus 提供即時功率讀數
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>熱泵：</strong>許多現代熱泵透過 Modbus 公開運行數據並接受控制指令
            </li>
          </ul>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Modbus TCP vs RTU：</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
            <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, borderLeft: '3px solid #7aa2f7' }}>
              <strong style={{ color: '#7aa2f7' }}>Modbus TCP</strong>
              <ul style={{ margin: '6px 0 0', paddingLeft: 16, fontSize: 13 }}>
                <li style={{ marginBottom: 3 }}>透過乙太網路 / Wi-Fi</li>
                <li style={{ marginBottom: 3 }}>預設連接埠 502</li>
                <li style={{ marginBottom: 3 }}>易於與軟體整合</li>
                <li>標準 TCP/IP 網路</li>
              </ul>
            </div>
            <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, borderLeft: '3px solid #9ece6a' }}>
              <strong style={{ color: '#9ece6a' }}>Modbus RTU</strong>
              <ul style={{ margin: '6px 0 0', paddingLeft: 16, fontSize: 13 }}>
                <li style={{ marginBottom: 3 }}>透過 RS-485 串列匯流排</li>
                <li style={{ marginBottom: 3 }}>有線，2 線連接</li>
                <li style={{ marginBottom: 3 }}>一條匯流排最多 32 個裝置</li>
                <li>常用於電錶和感測器</li>
              </ul>
            </div>
          </div>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>暫存器類型：</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>保持暫存器（4xxxx）：</strong>可讀寫——用於設定點和配置（如設定功率限制）
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>輸入暫存器（3xxxx）：</strong>唯讀——用於量測（如當前功率、電壓、頻率）
            </li>
          </ul>

          {userLevel === 'beginner' && (
            <div style={{ backgroundColor: '#1a2e1a', borderRadius: 6, padding: 12, border: '1px solid #2a3e2a' }}>
              <strong style={{ color: '#9ece6a' }}>初學者提示：</strong>把 Modbus 想像成一個檔案櫃——每個抽屜（暫存器）存放一筆資料。您詢問特定的抽屜編號，裝置就告訴您裡面有什麼。
            </div>
          )}

          {userLevel === 'advanced' && (
            <>
              <p style={{ margin: '12px 0 8px' }}>
                <strong style={{ color: '#bb9af7' }}>功能碼：</strong>
              </p>
              <pre style={codeBlockStyle}>
                {`FC03 - Read Holding Registers (read setpoints, config)
FC04 - Read Input Registers  (read measurements)
FC06 - Write Single Register  (set one value)
FC16 - Write Multiple Registers (set a range of values)`}
              </pre>
              <p style={{ margin: '8px 0 8px' }}>
                <strong style={{ color: '#bb9af7' }}>暫存器映射範例（透過 SunSpec 的 Fronius Symo 逆變器）：</strong>
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
                注意：暫存器位址和資料格式因製造商而異。請務必查閱裝置的 Modbus 暫存器映射文件。
              </p>
            </>
          )}
        </>
      ),
    },
    {
      key: 'ocpp',
      title: 'OCPP — 開放充電點協定',
      accentColor: '#7aa2f7',
      content: (userLevel) => (
        <>
          <p style={{ margin: '0 0 10px' }}>
            <strong style={{ color: '#7aa2f7' }}>什麼是 OCPP：</strong>OCPP（Open Charge Point Protocol，開放充電點協定）是一個開放的標準化協定，用於電動車充電站與中央管理系統（CSMS）之間的通訊。它支援遠端監控、控制和智慧充電。
          </p>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>OCPP 1.6 vs 2.0.1：</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
            <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, borderLeft: '3px solid #e0af68' }}>
              <strong style={{ color: '#e0af68' }}>OCPP 1.6</strong>
              <ul style={{ margin: '6px 0 0', paddingLeft: 16, fontSize: 13 }}>
                <li style={{ marginBottom: 3 }}>JSON 或 SOAP over WebSocket</li>
                <li style={{ marginBottom: 3 }}>廣泛採用，大多數充電器支援</li>
                <li style={{ marginBottom: 3 }}>基本智慧充電配置檔</li>
                <li style={{ marginBottom: 3 }}>較簡單的訊息結構</li>
                <li>無裝置模型 / 安全配置檔</li>
              </ul>
            </div>
            <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, borderLeft: '3px solid #7aa2f7' }}>
              <strong style={{ color: '#7aa2f7' }}>OCPP 2.0.1</strong>
              <ul style={{ margin: '6px 0 0', paddingLeft: 16, fontSize: 13 }}>
                <li style={{ marginBottom: 3 }}>僅 JSON over WebSocket</li>
                <li style={{ marginBottom: 3 }}>裝置模型用於配置</li>
                <li style={{ marginBottom: 3 }}>增強型安全配置檔</li>
                <li style={{ marginBottom: 3 }}>ISO 15118 支援（Plug &amp; Charge）</li>
                <li>改進的智慧充電，含成本導向配置檔</li>
              </ul>
            </div>
          </div>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>核心操作：</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>BootNotification：</strong>充電器啟動時向 CSMS 註冊自身
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Authorize：</strong>驗證使用者身分（RFID、App 或 Plug &amp; Charge）
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>StartTransaction / StopTransaction：</strong>開始和結束充電會話，追蹤輸送的能量
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>MeterValues：</strong>充電期間由充電器定期向 CSMS 發送的能量讀數
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>SetChargingProfile：</strong>CSMS 向充電器發送功率限制排程
            </li>
          </ul>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>智慧充電配置檔：</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>ChargePointMaxProfile：</strong>設定整個充電點的總體功率限制
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>TxDefaultProfile：</strong>套用於連接器上所有交易的預設充電排程
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>TxProfile：</strong>特定活動交易的充電排程——優先順序最高
            </li>
          </ul>

          <p style={{ margin: '0 0 10px' }}>
            <strong style={{ color: '#bb9af7' }}>如何啟用太陽能充電：</strong>能源管理系統（作為或連接到 CSMS）從逆變器/電錶讀取當前太陽能餘電，計算可用於電動車充電的功率，然後向充電器發送 SetChargingProfile 訊息，包含更新後的功率限制。充電器據此調整輸出，通常每 5–60 秒更新一次。
          </p>

          <div style={{ backgroundColor: '#16213e', borderRadius: 6, padding: 12, border: '1px solid #1e3a5f', marginBottom: 12 }}>
            <strong style={{ color: '#7aa2f7' }}>澳洲市場背景：</strong>
            <p style={{ margin: '6px 0 0', fontSize: 13 }}>
              目前在澳洲銷售的大多數住宅電動車充電器支援 <strong>OCPP 1.6</strong>，這對於基本的智慧充電和太陽能整合已經足夠。<strong>OCPP 2.0.1</strong>——ISO 15118 Plug &amp; Charge 和雙向 V2G 充電所需——才剛開始進入澳洲市場（2024–2025 年）。
            </p>
            <p style={{ margin: '6px 0 0', fontSize: 13 }}>
              AEMO 和 ARENA 已使用 OCPP 作為控制協定進行智慧充電試驗，將家用充電器視為彈性負載。這使得 OCPP 有望成為澳洲未來任何電網互動式電動車充電計畫的標準。選購充電器時，OCPP 1.6 支援已能滿足當前的太陽能充電需求；若您預期參與 V2G 或未來的需量反應計畫，值得優先考慮 OCPP 2.0.1。
            </p>
          </div>

          {userLevel === 'beginner' && (
            <div style={{ backgroundColor: '#1a2e1a', borderRadius: 6, padding: 12, border: '1px solid #2a3e2a' }}>
              <strong style={{ color: '#9ece6a' }}>初學者提示：</strong>OCPP 就像您的電動車充電器與能源管理系統之間的語言。管理系統說「你現在可以用 3 kW」，充電器就遵從，並隨著太陽能產出變化即時調整。
            </div>
          )}

          {userLevel === 'advanced' && (
            <>
              <p style={{ margin: '12px 0 8px' }}>
                <strong style={{ color: '#bb9af7' }}>訊息結構（OCPP 1.6 JSON）：</strong>
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
                <strong style={{ color: '#bb9af7' }}>智慧充電堆疊（優先順序由低到高）：</strong>
              </p>
              <pre style={codeBlockStyle}>
                {`1. ChargePointMaxProfile  (site-level limit)
2. TxDefaultProfile       (connector default)
3. TxProfile              (per-transaction override)

The effective limit = min(all applicable profiles)
Stack level: higher stackLevel overrides lower within same purpose`}
              </pre>
              <p style={{ margin: '8px 0 8px' }}>
                <strong style={{ color: '#bb9af7' }}>ISO 15118 整合（OCPP 2.0.1）：</strong>
              </p>
              <ul style={{ margin: '0 0 0', paddingLeft: 20 }}>
                <li style={{ marginBottom: 4 }}>
                  Plug &amp; Charge：透過 TLS 憑證自動認證——無需 RFID
                </li>
                <li style={{ marginBottom: 4 }}>
                  支援雙向電力傳輸（V2G），由 CSMS 協調控制
                </li>
                <li style={{ marginBottom: 4 }}>
                  15118-20 新增排程和動態控制模式，實現精細的功率管理
                </li>
              </ul>
            </>
          )}
        </>
      ),
    },
    {
      key: 'other',
      title: '其他能源協定',
      accentColor: '#9ece6a',
      advancedOnly: true,
      content: (_userLevel) => (
        <>
          <div style={{ marginBottom: 16 }}>
            <h4 style={{ margin: '0 0 8px', color: '#e0af68' }}>SunSpec</h4>
            <p style={{ margin: '0 0 6px' }}>
              建立在 Modbus 之上的標準化資料模型，專為太陽能和儲能設備設計。定義一致的暫存器映射，使得任何製造商的 SunSpec 相容逆變器都在相同的暫存器中公開相同的數據。
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
              歐洲智慧家庭能源通訊標準。使用 SPINE（Smart Premises Interoperable Neutral-message Exchange）協定，基於 IP 網路運作。設計用於裝置對裝置的通訊，不依賴雲端。
            </p>
            <ul style={{ margin: '0 0 0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                應用場景：電動車充電協調、熱泵控制、電池管理
              </li>
              <li style={{ marginBottom: 4 }}>
                受主要歐洲製造商支援（SMA、Viessmann、BMW、Porsche）
              </li>
              <li style={{ marginBottom: 4 }}>
                支援裝置協商：充電器請求電力，HEMS 核准/限制
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: 16 }}>
            <h4 style={{ margin: '0 0 8px', color: '#f7768e' }}>OpenADR</h4>
            <p style={{ margin: '0 0 6px' }}>
              開放式自動需量反應（Open Automated Demand Response）——讓電力公司能向建築物和裝置發送需量反應訊號。用於尖峰需求事件期間的電網穩定。
            </p>
            <ul style={{ margin: '0 0 0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                VTN（虛擬頂層節點）向 VEN（虛擬終端節點）裝置發送 DR 事件
              </li>
              <li style={{ marginBottom: 4 }}>
                訊號包括電價、負載水準或簡單的事件通知
              </li>
              <li style={{ marginBottom: 4 }}>
                主要用於商業建築和聚合式住宅群
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: 16 }}>
            <h4 style={{ margin: '0 0 8px', color: '#bb9af7' }}>MQTT</h4>
            <p style={{ margin: '0 0 6px' }}>
              輕量級的發布-訂閱訊息協定，廣泛用於 IoT 能源監測。雖非能源專用，但常用於傳輸能源數據。
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
              新興的智慧家庭標準，由 Apple、Google、Amazon 和 Samsung 支持。雖然主要聚焦在一般智慧家庭裝置（燈光、門鎖、感測器），但能源管理的應用場景正在擴展。
            </p>
            <ul style={{ margin: '0 0 0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                <strong>Matter：</strong>應用層協定。較新版本正在新增能源管理裝置類型。
              </li>
              <li style={{ marginBottom: 4 }}>
                <strong>Thread：</strong>低功耗網狀網路協定（基於 IP）。為 Matter 裝置提供網路層。
              </li>
              <li style={{ marginBottom: 4 }}>
                未來可望為消費級智慧家庭生態系統中的電動車充電器、電池和太陽能逆變器提供標準化通訊。
              </li>
            </ul>
          </div>
        </>
      ),
    },
  ],

  // ── Strategies ──
  strategies_title: '能源優化策略',
  strategies_subtitle: '如何從您的家庭能源系統中獲得最大效益。',
  strategies_advanced_extra: ' 進階視圖包含 HEMS 架構和電網服務。',

  strategies_sections: [
    {
      key: 'self-consumption',
      title: '太陽能自用消耗優化',
      accentColor: '#9ece6a',
      content: (_userLevel) => (
        <>
          <p style={{ margin: '0 0 10px' }}>
            自用消耗意味著直接在家中使用您產生的太陽能電力，而非輸出到電網。這幾乎總是在財務上更有價值，因為躉購費率低於購電費率。
          </p>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>太陽能餘電的優先使用順序：</strong>
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
            1. 家庭負載（始終優先供電）
            <br />
            2. 家用電池（儲存供傍晚使用）
            <br />
            3. 電動車充電（大型彈性負載）
            <br />
            4. 熱泵 / 熱水器（蓄熱儲能）
            <br />
            5. 電網輸出（最後手段，價值最低）
          </div>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>為什麼自用消耗很重要：</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              一般購電費率：$0.25–$0.45/kWh
            </li>
            <li style={{ marginBottom: 4 }}>
              一般躉購費率：$0.05–$0.12/kWh
            </li>
            <li style={{ marginBottom: 4 }}>
              每度自用太陽能電力都能節省完整的購電費率，而非僅獲得輸出費率
            </li>
            <li style={{ marginBottom: 4 }}>
              將自用率從 30% 提高到 70% 可以使太陽能節省的金額翻倍
            </li>
          </ul>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>季節性策略：</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 10 }}>
            <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, borderLeft: '3px solid #7aa2f7' }}>
              <strong style={{ color: '#7aa2f7' }}>冬季</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                太陽能較少。專注於直接使用每一瓦。減少輸出。熱泵運行更多，自然吸收太陽能。電池循環較淺。
              </p>
            </div>
            <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, borderLeft: '3px solid #e0af68' }}>
              <strong style={{ color: '#e0af68' }}>夏季</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                太陽能充沛。盡量充電——電池、電動車、熱水。將高功率電器（洗碗機、洗衣機）排程在太陽能峰值時段運行。
              </p>
            </div>
          </div>

          <div style={{ backgroundColor: '#1a2e1a', borderRadius: 6, padding: 12, margin: '10px 0', border: '1px solid #2a3e2a' }}>
            <strong style={{ color: '#9ece6a' }}>小技巧：</strong>{' '}
            在太陽能峰值時段（上午 10 點至下午 3 點）運行電器，是提高自用率最簡單的方法之一，無需額外設備。
          </div>
        </>
      ),
    },
    {
      key: 'ev-modes',
      title: '動態電動車充電模式',
      accentColor: '#7aa2f7',
      content: (_userLevel) => (
        <>
          <p style={{ margin: '0 0 12px' }}>
            智慧電動車充電器可根據您的優先順序——省錢、快速充電或兩者兼顧——在不同模式下運作。充電器會根據即時能源數據動態調整功率需求。
          </p>

          <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, marginBottom: 8, borderLeft: '3px solid #9ece6a' }}>
            <strong style={{ color: '#9ece6a', fontSize: 14 }}>純太陽能模式</strong>
            <p style={{ margin: '6px 0 8px', fontSize: 13 }}>僅在有太陽能餘電時充電。當太陽能低於最低門檻時暫停充電。</p>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13 }}>
              <li style={{ marginBottom: 3 }}>最適合：最大化節省、每公里最低電費</li>
              <li style={{ marginBottom: 3 }}>需要在配電盤安裝 CT clamp / 能源監測器——沒有它充電器無法偵測太陽能餘電</li>
              <li style={{ marginBottom: 3 }}>使用 CT clamp 或能源監測器數據即時測量太陽能餘電</li>
              <li style={{ marginBottom: 3 }}>最低充電門檻：通常 1.4 kW（單相 6A × 230V）</li>
              <li style={{ marginBottom: 3 }}>低於 6A 大多數電動車不接受充電——充電器必須暫停</li>
              <li style={{ marginBottom: 3 }}>充電速度全天隨太陽能曲線變化</li>
              <li style={{ marginBottom: 3 }}>多雲天或冬季可能無法完全充滿電動車</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, marginBottom: 8, borderLeft: '3px solid #e0af68' }}>
            <strong style={{ color: '#e0af68', fontSize: 14 }}>節能 / 混合模式</strong>
            <p style={{ margin: '6px 0 8px', fontSize: 13 }}>優先使用太陽能餘電，但在充電開始後從電網補充以維持至少最低充電功率。</p>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13 }}>
              <li style={{ marginBottom: 3 }}>最適合：在節省和便利之間取得良好平衡</li>
              <li style={{ marginBottom: 3 }}>會話開始後始終維持最低 6A（1.4 kW）</li>
              <li style={{ marginBottom: 3 }}>優先使用太陽能餘電；電網補充差額至最低值</li>
              <li style={{ marginBottom: 3 }}>如果太陽能超過最低值，充電功率隨之增加以使用所有餘電</li>
              <li style={{ marginBottom: 3 }}>相比純電網充電，通常可節省 50–70%</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, marginBottom: 8, borderLeft: '3px solid #f7768e' }}>
            <strong style={{ color: '#f7768e', fontSize: 14 }}>快速 / 全速模式</strong>
            <p style={{ margin: '6px 0 8px', fontSize: 13 }}>以最大功率充電，不管太陽能是否可用。需要時從電網取電。</p>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13 }}>
              <li style={{ marginBottom: 3 }}>最適合：需要盡快充滿車輛時</li>
              <li style={{ marginBottom: 3 }}>使用充電器的全額定功率（如 7.4 kW 或 22 kW）</li>
              <li style={{ marginBottom: 3 }}>不做太陽能優化——一切以速度為主</li>
              <li style={{ marginBottom: 3 }}>若未加管理，可能觸發需量電費或使電網連接過載</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, marginBottom: 8, borderLeft: '3px solid #bb9af7' }}>
            <strong style={{ color: '#bb9af7', fontSize: 14 }}>排程模式</strong>
            <p style={{ margin: '6px 0 8px', fontSize: 13 }}>在指定的時段充電，通常為夜間離峰費率時段。</p>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13 }}>
              <li style={{ marginBottom: 3 }}>最適合：時間電價方案的用戶</li>
              <li style={{ marginBottom: 3 }}>常見排程：在費率最低的 23:00–06:00 充電</li>
              <li style={{ marginBottom: 3 }}>可與白天的太陽能結合進行混合排程</li>
              <li style={{ marginBottom: 3 }}>設定出發時間以確保車輛在您需要時充好電</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, marginBottom: 8, borderLeft: '3px solid #73daca' }}>
            <strong style={{ color: '#73daca', fontSize: 14 }}>目標 SoC 模式</strong>
            <p style={{ margin: '6px 0 8px', fontSize: 13 }}>設定出發時間前的目標電池百分比。優化器決定最經濟的達成方式。</p>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13 }}>
              <li style={{ marginBottom: 3 }}>最適合：使用動態費率或太陽能預測的進階用戶</li>
              <li style={{ marginBottom: 3 }}>考量因素：目前 SoC、目標 SoC、出發時間、太陽能預測、費率排程</li>
              <li style={{ marginBottom: 3 }}>自動選擇最便宜的充電時段</li>
              <li style={{ marginBottom: 3 }}>可能將充電分散至多個時段（如白天太陽能 + 夜間離峰）</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#2e2a1a', borderRadius: 6, padding: 12, margin: '10px 0', border: '1px solid #3e3a2a' }}>
            <strong style={{ color: '#e0af68' }}>重要：</strong>{' '}
            大多數電動車的最低充電功率為每相 6A（單相 1.4 kW、三相 4.1 kW）。低於此值，電動車將拒絕充電。智慧充電器在配合太陽能調變時必須謹慎處理此門檻。
          </div>
        </>
      ),
    },
    {
      key: 'battery',
      title: '電池管理策略',
      accentColor: '#e0af68',
      content: (_userLevel) => (
        <>
          <p style={{ margin: '0 0 12px' }}>
            家用電池的價值取決於其控制策略。正確的方法取決於您的費率結構、太陽能系統規模和用電模式。
          </p>

          <div style={{ marginBottom: 14 }}>
            <h4 style={{ margin: '0 0 6px', color: '#9ece6a' }}>
              太陽能自用消耗
            </h4>
            <p style={{ margin: '0 0 6px' }}>
              最常見的策略：白天儲存多餘太陽能，傍晚和過夜放電。
            </p>
            <ul style={{ margin: '0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                當太陽能產出超過家庭用電時，電池充電
              </li>
              <li style={{ marginBottom: 4 }}>
                當用電超過太陽能時（傍晚、夜間），電池放電
              </li>
              <li style={{ marginBottom: 4 }}>
                典型系統的自用率從約 30% 提升至約 70%
              </li>
              <li style={{ marginBottom: 4 }}>
                電池容量最好能覆蓋過夜用電（8–12 kWh）
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: 14 }}>
            <h4 style={{ margin: '0 0 6px', color: '#7aa2f7' }}>
              時間電價套利
            </h4>
            <p style={{ margin: '0 0 6px' }}>
              在低費率時段充電，在高費率時段放電。
            </p>
            <ul style={{ margin: '0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                夜間以離峰費率充電（如 $0.10/kWh）
              </li>
              <li style={{ marginBottom: 4 }}>
                在尖峰費率時段放電（如 $0.40/kWh）
              </li>
              <li style={{ marginBottom: 4 }}>
                當尖峰:離峰費率比超過約 3:1 時有利可圖（考慮往返損耗後）
              </li>
              <li style={{ marginBottom: 4 }}>
                可與太陽能自用消耗結合以獲得最大效益
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: 14 }}>
            <h4 style={{ margin: '0 0 6px', color: '#f7768e' }}>削峰</h4>
            <p style={{ margin: '0 0 6px' }}>
              限制電網購電的最大功率，以避免需量電費或連接過載。
            </p>
            <ul style={{ margin: '0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                電池放電以覆蓋超過門檻的任何用電
              </li>
              <li style={{ marginBottom: 4 }}>
                常見門檻：將電網購電維持在 5 kW 以下
              </li>
              <li style={{ marginBottom: 4 }}>
                當電動車充電 + 家庭負載可能超過主保險絲容量時特別有用
              </li>
              <li style={{ marginBottom: 4 }}>
                部分費率方案對 15 分鐘尖峰需量額外收費——削峰可避免此費用
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ margin: '0 0 6px', color: '#e0af68' }}>
              備援 / 保留
            </h4>
            <p style={{ margin: '0 0 6px' }}>
              保持最低荷電狀態（SoC）以備停電使用。
            </p>
            <ul style={{ margin: '0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                設定保留水位（如 20%），正常運作時電池不會放電至低於此水位
              </li>
              <li style={{ marginBottom: 4 }}>
                電網停電時，電池為關鍵負載供電（若逆變器支援備援功能）
              </li>
              <li style={{ marginBottom: 4 }}>
                取捨：保留水位越高 = 日常循環可用容量越少
              </li>
              <li style={{ marginBottom: 4 }}>
                部分逆變器支援自動孤島運行（與電網斷開並獨立為家庭供電）
              </li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, margin: '10px 0', border: '1px solid #2a2a3e' }}>
            <strong style={{ color: '#7aa2f7' }}>備註：</strong>{' '}
            最佳策略通常是多種方式的組合：白天太陽能自用消耗、電池的時間電價套利，再加上一小部分備援保留以確保安心。
          </div>
        </>
      ),
    },
    {
      key: 'hems',
      title: '家庭能源管理系統（HEMS）',
      accentColor: '#bb9af7',
      advancedOnly: true,
      content: (_userLevel) => (
        <>
          <p style={{ margin: '0 0 10px' }}>
            HEMS 是一個中央控制器，負責優化家中所有的能源流向。它從每個裝置讀取數據、套用優化規則，並發送控制指令以最大化節省、自用消耗或舒適度。
          </p>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>整合點：</strong>
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
            <strong style={{ color: '#bb9af7' }}>決策輸入：</strong>
          </p>
          <ul style={{ margin: '0 0 12px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>當前太陽能產出</strong>——來自逆變器或 CT clamp 的即時量測
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>太陽能預測</strong>——基於天氣的未來數小時/全天預測
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>電價</strong>——目前和即將到來的費率（即時電價或時間電價排程）
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>電動車出發時間</strong>——車輛何時需要準備好，以及目標 SoC
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>電池 SoC</strong>——目前的荷電狀態和可用容量
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>家庭用電模式</strong>——歷史和預測的負載曲線
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>電網限制</strong>——輸出限制、主保險絲額定值、需量電費門檻
            </li>
          </ul>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>優化邏輯範例：</strong>
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
            <strong style={{ color: '#bb9af7' }}>實作方式：</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>商用能源管理系統：</strong>專門建置的設備，與特定逆變器和充電器品牌整合。通常包含太陽能預測和費率優化功能。
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Home Assistant：</strong>開源家庭自動化平台，具有出色的能源儀表板和大多數太陽能逆變器、電池和電動車充電器的整合。可透過自訂自動化進行擴展。
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Node-RED：</strong>基於流程的程式設計工具，可讀取 Modbus 暫存器、呼叫 API 和發送 OCPP 指令。適合自訂能源管理邏輯。
            </li>
          </ul>

          <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, margin: '10px 0', border: '1px solid #2a2a3e' }}>
            <strong style={{ color: '#7aa2f7' }}>備註：</strong>{' '}
            一個良好的 HEMS 可以在太陽能和電池基礎上，透過智慧的即時決策——決定何時何地使用能源——額外節省 10–20% 的電費。
          </div>
        </>
      ),
    },
    {
      key: 'grid-services',
      title: '電網服務與需量反應',
      accentColor: '#73daca',
      advancedOnly: true,
      content: (_userLevel) => (
        <>
          <p style={{ margin: '0 0 10px' }}>
            家用電池和電動車不只是消費端裝置——它們可以參與電網級別的服務，在幫助穩定電網的同時賺取收益。
          </p>

          <div style={{ marginBottom: 14 }}>
            <h4 style={{ margin: '0 0 6px', color: '#e0af68' }}>
              頻率調節
            </h4>
            <p style={{ margin: '0 0 6px' }}>
              電網必須維持精確的 50 Hz（或某些地區為 60 Hz）頻率。電池可在毫秒內注入或吸收電力，幫助維持此平衡。
            </p>
            <ul style={{ margin: '0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                FCR（頻率遏制儲備）：數秒內的自動回應
              </li>
              <li style={{ marginBottom: 4 }}>
                需要快速回應的電池和雙向逆變器
              </li>
              <li style={{ marginBottom: 4 }}>
                通常透過聚合商管理，非由屋主直接操作
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: 14 }}>
            <h4 style={{ margin: '0 0 6px', color: '#7aa2f7' }}>
              虛擬電廠（VPP）
            </h4>
            <p style={{ margin: '0 0 6px' }}>
              VPP 將數千個分散的電池和可控負載聚合成一個虛擬資源，可像傳統電廠一樣進行調度。
            </p>
            <ul style={{ margin: '0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                屋主透過電池製造商或能源零售商選擇加入
              </li>
              <li style={{ marginBottom: 4 }}>
                聚合商在電網壓力事件期間發送放電指令
              </li>
              <li style={{ marginBottom: 4 }}>
                參與者可獲得費用或費率回饋，作為提供電池可用性的報酬
              </li>
              <li style={{ marginBottom: 4 }}>
                電池通常會維持最低 SoC 以確保家庭用電需求
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: 14 }}>
            <h4 style={{ margin: '0 0 6px', color: '#9ece6a' }}>
              V2G（車輛對電網）
            </h4>
            <p style={{ margin: '0 0 6px' }}>
              V2G 讓電動車能將電力回送至電網，有效地將車輛變成一個行動電池。60 kWh 的電動車電池遠大於典型的 10 kWh 家用電池。
            </p>
            <ul style={{ margin: '0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                需要雙向充電器和 V2G 兼容的電動車
              </li>
              <li style={{ marginBottom: 4 }}>
                目前僅少數車輛支援（如透過 CHAdeMO 的 Nissan Leaf、部分較新車款透過 CCS）
              </li>
              <li style={{ marginBottom: 4 }}>
                ISO 15118-20 和 OCPP 2.0.1 提供協定支援
              </li>
              <li style={{ marginBottom: 4 }}>
                電池衰退的疑慮存在，但現代電動車對淺循環的處理能力良好
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ margin: '0 0 6px', color: '#f7768e' }}>
              V2H（車輛對家庭）
            </h4>
            <p style={{ margin: '0 0 6px' }}>
              類似 V2G，但電動車僅放電供家庭使用，不回送至電網。實作較簡單，且在大多數管轄區不需要電力公司批准。
            </p>
            <ul style={{ margin: '0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                電動車在停電或尖峰費率時段充當家庭備援電池
              </li>
              <li style={{ marginBottom: 4 }}>
                可提供 10–20 kWh 的可用能量，同時保留足夠的電量供下次出行
              </li>
              <li style={{ marginBottom: 4 }}>
                對於沒有固定式家用電池的住宅特別有價值
              </li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#2e2a1a', borderRadius: 6, padding: 12, margin: '10px 0', border: '1px solid #3e3a2a' }}>
            <strong style={{ color: '#e0af68' }}>重要：</strong>{' '}
            V2G 和 VPP 參與可能影響您的電池保固。加入前請查看製造商條款。大多數計畫會限制額外的循環次數，以將衰退影響降至最低。
          </div>
        </>
      ),
    },
  ],
};

export default zhTW;
