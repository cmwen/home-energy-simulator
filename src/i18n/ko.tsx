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

export const ko: Translations = {
  // ── Nav ──
  nav_title: '홈 에너지 시뮬레이터',
  nav_simulator: '시뮬레이터',
  nav_scenarios: '시나리오',
  nav_learn: '학습하기',
  nav_protocols: '프로토콜',
  nav_strategies: '전략',
  nav_level: '난이도:',
  nav_level_beginner: '초급 (beginner)',
  nav_level_advanced: '고급 (advanced)',

  // ── Footer ──
  footer_text: '홈 에너지 시뮬레이터 — 주거용 에너지 시스템을 위한 대화형 학습 도구',

  // ── Theme ──
  theme_light: '라이트',
  theme_dark: '다크',
  theme_auto: '자동',

  // ── SystemSummary ──
  summary_solar_generation: '태양광 발전량',
  summary_home_consumption: '가정 소비량',
  summary_grid_import: '전력망 수전 (Import)',
  summary_grid_export: '전력망 송전 (Export)',
  summary_battery: '배터리',
  summary_battery_idle: '대기 중',
  summary_battery_charging: '충전 중',
  summary_battery_discharging: '방전 중',
  summary_ev: '전기차 (EV)',
  summary_ev_full: '충전 완료',
  summary_ev_not_charging: '충전 중 아님',
  summary_self_consumption: '자가 소비율',
  summary_self_sufficiency: '자급률',

  // ── SessionStatsPanel ──
  stats_session_totals: '세션 누적 통계',
  stats_press_play: '— Play 버튼을 눌러 통계를 수집하세요',
  stats_reset: '초기화',
  stats_solar_generated: '태양광 발전량',
  stats_self_used: '자가 소비',
  stats_exported: '송전됨',
  stats_grid_imported: '전력망 수전량',
  stats_cost: '비용:',
  stats_grid_exported: '전력망 송전량',
  stats_earned: '수익:',
  stats_solar_value: '태양광 가치',
  stats_avoided_import_fit: '절감된 수전 비용 + FiT 수익',
  stats_net_grid_cost: '순 전력망 비용',
  stats_net_credit: '순 수익 (송전 수익이 비용보다 큼)',
  stats_import_minus_fit: '수전 비용에서 FiT 수익 차감',
  stats_home_consumed: '가정 소비량',
  stats_total_load: '총 부하 (EV 포함)',
  stats_fit: 'FiT',

  // ── SimulationControls ──
  sim_pause: '일시정지',
  sim_play: '재생',
  sim_speed: '속도',
  sim_time: '시간:',
  sim_clouds: '구름:',
  sim_season: '계절',
  sim_temperature: '온도',
  sim_spring: '봄',
  sim_summer: '여름',
  sim_autumn: '가을',
  sim_winter: '겨울',

  // ── ComponentEditor ──
  editor_enabled: '활성화',
  editor_disabled: '비활성화',
  editor_remove_component: '컴포넌트 제거',
  editor_power_override: '전력 수동 설정',

  // Type labels
  type_grid: '전력망 (Grid)',
  type_smart_meter: '스마트 미터',
  type_grid_meter: '그리드 미터 (NMI)',
  type_energy_monitor: '에너지 모니터 (CT)',
  type_main_switchboard: '메인 분전반',
  type_solar_panels: '태양광 패널',
  type_inverter: '인버터',
  type_battery: '배터리',
  type_ev_charger: 'EV 충전기',
  type_home_load: '가정 부하',
  type_heat_pump: '히트펌프',

  // Field labels
  field_panel_count: '패널 개수',
  field_panel_wattage: '패널 출력 (Wattage)',
  field_roof_angle: '지붕 각도',
  field_capacity: '용량',
  field_current_soc: '현재 SOC',
  field_max_charge_rate: '최대 충전 속도',
  field_max_discharge_rate: '최대 방전 속도',
  field_max_current: '최대 전류',
  field_phases: '상 (Phases)',
  field_phase_single: '단상 (1-Phase)',
  field_phase_three: '삼상 (3-Phase)',
  field_voltage: '전압',
  field_charging_standard: '충전 표준',
  field_charging_mode: '충전 모드',
  field_is_charging: '충전 상태',
  field_ev_battery: 'EV 배터리 (시작 %)',
  field_ev_capacity: 'EV 용량',
  field_efficiency: '효율',
  field_max_output: '최대 출력',
  field_hybrid_mode: '하이브리드 모드',
  field_grid_export_limit: '전력망 송전 제한',
  field_feed_in_tariff: '발전차액지원금 (FiT)',
  field_import_tariff: '수전 요금 (Import Tariff)',
  field_base_load: '기본 부하',
  field_cop_rating: 'COP 등급',

  // Charging modes
  mode_fast: 'Fast (빠름)',
  mode_eco: 'Eco (절약)',
  mode_solar_only: 'Solar Only (태양광 전용)',
  mode_scheduled: 'Scheduled (예약됨)',

  // Info blurbs
  info_grid_meter: '건물 경계에 위치한 Ausgrid/DNSP NMI 미터기입니다. 요금 청구를 위해 수전 및 송전량을 기록하며 송전 제한 규칙을 설정해요. 사용자가 직접 수치를 읽거나 제어할 수 없습니다.',
  info_energy_monitor: '메인 분전반에 설치되는 소비자 측 CT clamp 모니터(예: Shelly EM, Emporia Vue)입니다. 실시간으로 태양광 잉여 전력을 측정할 수 있게 해주며, 태양광 전용 EV 충전 및 인버터 제로 송전(zero-export) 제한 기능을 위해 반드시 필요해요.',
  info_switchboard: '집 안의 메인 AC 분배 보드입니다. 모든 AC 부하(가전 회로, EV 충전기, 히트펌프 등)가 이곳에 연결됩니다. 인버터의 AC 출력과 전력망 연결 모두 이 보드로 들어옵니다.',

  // ── AddComponentPanel ──
  add_component: '컴포넌트 추가',
  add_switchboard: '분전반 (Switchboard)',

  // ── SetupToolbar ──
  setup_label: '설정',
  setup_save_json: 'JSON 저장',
  setup_load_json: 'JSON 불러오기',
  setup_share_url: 'URL 공유',
  setup_reset: '초기화',
  setup_downloaded: '설정이 다운로드되었습니다',
  setup_invalid_file: '잘못된 설정 파일 — JSON을 파싱할 수 없습니다',
  setup_loaded: '불러오기 완료:',
  setup_url_copied: '공유 URL이 클립보드에 복사되었습니다',
  setup_reset_confirm: '기본 시스템으로 초기화할까요? 현재 설정이 삭제됩니다.',
  setup_reset_done: '기본값으로 초기화되었습니다',
  setup_auto_saved: '로컬에 자동 저장됨',
  setup_auto_saved_tooltip: '설정이 브라우저의 로컬 스토리지에 자동으로 저장됩니다',

  // ── ScenariosSection ──
  scenarios_title: '시나리오',
  scenarios_description: '실제 호주 주택의 설정이 미리 구성되어 있어 바로 살펴볼 수 있어요. 시나리오를 불러와 시스템이 어떻게 작동하는지 확인한 다음, 슬라이더를 조절하거나 컴포넌트를 활성화하고 시뮬레이션을 실행해 각각의 장단점을 이해해 보세요.',
  scenarios_active: '활성',
  scenarios_goal: '목표',
  scenarios_context: '호주 컨텍스트',
  scenarios_what_unlocks: '이 설정으로 무엇을 할 수 있나요?',
  scenarios_what_setup_unlocks: '이 설정이 가능하게 하는 것',
  scenarios_load: '시나리오 불러오기 →',
  scenarios_currently_loaded: '현재 불러온 시나리오',
  scenarios_tip_label: '팁: ',
  scenarios_tip: '시나리오를 불러온 후 시뮬레이터 탭으로 이동해 실시간 시스템 다이어그램과 전력 흐름을 확인하세요. 컴포넌트 추가 패널을 사용해 기기를 추가하거나 제거하고, 학습하기 탭에서 각 컴포넌트의 역할을 이해할 수 있어요.',

  // ── Scenario preset strings ──
  scenario_solar_only_name: '태양광 전용 — 전기 요금 절약',
  scenario_solar_only_tagline: '배터리가 없는 입문용 태양광',
  scenario_solar_only_description: '6.6 kW 패널과 5 kW 인버터를 갖춘 신규 태양광 소유자입니다. 배터리와 EV는 없습니다. 낮 시간대에 가전제품을 사용해 태양광을 소비하고 남은 전력을 송전하는 것이 목표입니다.',
  scenario_solar_only_goal: '낮 시간대 자가 소비를 극대화하여 전기 요금을 줄입니다.',
  scenario_solar_only_context: 'Ausgrid 지역입니다. 5 kW 송전 제한이 적용됩니다. 발전차액지원금(FiT)이 낮기 때문에(~5¢/kWh) 전력을 송전하는 것보다 직접 사용하는 것이 훨씬 경제적이에요.',

  scenario_solar_battery_name: '태양광 + 배터리 — 야간 전기 요금 제로',
  scenario_solar_battery_tagline: '저녁에 사용하기 위해 태양광 저장',
  scenario_solar_battery_description: '가장 일반적인 업그레이드 경로입니다. 10 kWh 배터리에 한낮의 남는 태양광 전력을 저장하여 저녁과 밤에 집안 전력을 공급하고, 전력망 수전을 대부분 없앱니다.',
  scenario_solar_battery_goal: '저장된 태양광으로 저녁 및 야간 소비를 충당합니다. 80% 이상의 자급률을 목표로 합니다.',
  scenario_solar_battery_context: '배터리가 없으면 태양광 발전량의 60~70%가 낮은 FiT 요금으로 송전될 수 있습니다. 10 kWh 배터리를 사용하면 대부분의 가정에서 맑은 날 전력망 수전을 거의 0으로 만들 수 있습니다.',

  scenario_solar_ev_name: '태양광 + EV — 태양광으로 무료 충전',
  scenario_solar_ev_tagline: '태양광 잉여 전력으로 EV 충전',
  scenario_solar_ev_description: '낮 동안 태양광으로 차를 충전하고자 하는 EV 소유자입니다. EV 충전기는 인버터가 아닌 분전반의 전용 32A 회로에 연결됩니다. 소비자용 에너지 모니터(CT clamp)를 통해 충전기가 실시간 태양광 잉여 전력을 파악하고 그에 맞춰 충전 전력을 조절합니다.',
  scenario_solar_ev_goal: '잉여 태양광 전력을 사용하여 EV를 무료로 충전합니다. EV 충전을 위해 전력망에서 전력을 끌어오는 것을 방지합니다.',
  scenario_solar_ev_context: 'EV 충전기는 메인 분전반에 위치하며, 분전반에 공급되는 전력(태양광, 배터리 또는 전력망)을 사용합니다. CT clamp는 전력망 연결을 모니터링하여 태양광 잉여 전력이 수전량을 0으로 만들 때 충전기가 작동을 시작합니다. CT clamp나 에너지 모니터 없이는 "태양광 전용" 충전이 불가능합니다.',

  scenario_full_system_name: '전체 시스템 — 태양광 + 배터리 + EV',
  scenario_full_system_tagline: '오프그리드에 가까운 완벽한 가정',
  scenario_full_system_description: '대부분의 주택 소유자가 목표로 하는 설정으로 태양광 패널, 하이브리드 인버터, 가정용 배터리, 스마트 EV 충전기를 에너지 모니터가 모두 조율합니다. 태양광을 먼저 사용하고, 남는 전력을 배터리에 저장하며, 밤에는 배터리를 사용해 EV를 충전하고 필요할 때만 전력망을 사용하는 것이 최우선 목표입니다.',
  scenario_full_system_goal: '90% 이상의 자급률을 달성합니다. 낮 시간대 부하는 태양광으로, 저녁은 배터리로, 전력망은 예비용으로만 사용합니다.',
  scenario_full_system_context: '컴포넌트 간의 상호작용이 가장 중요한 시나리오입니다. 그리드 미터는 건물 경계의 순 흐름을 확인합니다. 에너지 모니터는 HEMS에 실시간 데이터를 제공하여 네 가지 기기 모두에서 스마트한 결정을 내릴 수 있게 합니다.',

  scenario_zero_export_name: '제로 송전 — 아파트 / 임베디드 네트워크',
  scenario_zero_export_tagline: '송전 금지 — 모든 전력을 현장에서 소비',
  scenario_zero_export_description: '일부 주택은 임베디드 네트워크(아파트, 신축 단지)에 있거나 전력망으로의 송전을 금지하는 DNSP 제한이 있습니다. 태양광 전력의 모든 전력을 현장에서 소비하거나 저장해야 합니다. 이를 위해 인버터는 CT clamp 피드백을 사용하여 실시간으로 자체 출력을 제한해야 합니다.',
  scenario_zero_export_goal: '태양광 전력의 100%를 현장에서 사용합니다. 잉여 전력은 배터리가 흡수하며, 배터리가 가득 차면 인버터가 출력을 제한합니다.',
  scenario_zero_export_context: '제로 송전 모드는 인버터 설정에서 구성되며, 전력망 연결부의 CT clamp가 실시간 피드백을 제공합니다. 여기서 에너지 모니터는 필수적입니다. 모니터가 없으면 인버터는 언제 출력을 제한해야 할지 알 수 없습니다.',

  scenario_ev_no_ct_name: 'EV 충전 — CT Clamp 없음 (수동 속도 조절)',
  scenario_ev_no_ct_tagline: '태양광 + EV가 있지만 에너지 모니터가 없어 제어 제한됨',
  scenario_ev_no_ct_description: '태양광은 있지만 CT clamp나 에너지 모니터가 없는 EV 소유자입니다. 실시간 태양광 잉여 데이터가 없으면 충전기가 태양광 발전량을 동적으로 따라갈 수 없습니다. 사용자는 "대략적으로" 태양광 출력 범위 내에 머물도록 수동으로 고정 충전 전류(보통 6~10A)를 설정해야 합니다. 태양광 발전량이 떨어지면(구름, 오후 시간) 자동으로 전력망에서 전력을 끌어오며 이를 막을 방법이 없어요.',
  scenario_ev_no_ct_goal: 'CT clamp가 없을 때의 비용을 이해합니다. 여기에서의 전력망 수전량과 태양광 + EV(CT Clamp) 시나리오를 비교하여 금액 차이를 확인해 보세요.',
  scenario_ev_no_ct_context: 'CT clamp가 없으면 "Solar Only" 또는 "Eco" 모드와 같은 스마트 충전 기능을 사용할 수 없습니다. 충전기는 태양광 조건과 무관하게 사용자가 설정한 고정 전류로 작동합니다. CT clamp(Shelly EM 또는 Emporia Vue, 약 $150–300)를 설치하면 동적 태양광 충전이 가능해져 몇 달 안에 설치 비용을 회수할 수 있어요.',

  // ── Component unlock strings ──
  unlock: {
    gridMeter: [
      '요금 청구를 위한 수전 및 송전량 기록 (NMI 미터)',
      '송전 제한 규칙 설정 (예: Ausgrid 지역의 경우 5 kW)',
      '전력 회사로부터의 발전차액지원금(FiT) 크레딧 활성화',
    ],
    energyMonitor: [
      'HEMS를 위한 실시간 태양광 잉여 전력 가시성 확보',
      '태양광 전용 EV 충전에 필수 (CT clamp 피드백)',
      '인버터 제로 송전(zero-export) 제한에 필수',
      '스마트한 배터리 방전 결정 지원',
    ],
    mainSwitchboard: [
      'AC 분배 허브 — 모든 부하가 이곳에 연결됨',
      'EV 충전기는 인버터가 아닌 분전반에서 전력을 끌어옴',
      '태양광(인버터 경유)과 전력망 모두 분전반으로 전력 공급',
    ],
    inverter: [
      '태양광 DC 전력을 가정용 AC로 변환',
      '하이브리드 모드: DC 결합 배터리 충전 관리',
      '제로 송전 모드: CT clamp 피드백을 통한 출력 제한',
    ],
    battery: [
      '저녁 및 야간 사용을 위해 잉여 태양광 전력 저장',
      '맑은 날 자급률을 ~35%에서 ~80%+로 향상시킴',
      '심야 오프피크 전력망 요금으로 충전 가능',
    ],
    evCharger: [
      'OCPP 2.0.1: 스마트 충전, 동적 부하 관리',
      '태양광 전용 모드: 태양광 잉여 전력이 최소치 이상일 때만 충전 (CT clamp 필요)',
      '예약 모드: 가장 저렴한 오프피크 요금 시간대에 충전',
    ],
  },

  // ── Education ──
  learn_title: '학습하기: 가정용 에너지 시스템',
  learn_beginner_subtitle: '가정용 에너지를 이해하기 위한 기초 개념입니다. 더 기술적인 내용은 고급 난이도로 전환해 확인하세요.',
  learn_advanced_subtitle: '고급 시스템 설계 및 기술 세부 정보를 포함한 모든 주제가 표시됩니다.',

  learn_sections: [
    {
      title: '☀️ 가정용 태양광 시스템은 어떻게 작동하나요?',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            가정용 태양광 시스템은 햇빛을 가정에서 사용할 수 있는 전기로 변환해요. 에너지의 흐름은 다음과 같습니다:
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
            햇빛 → <strong>태양광 패널 (Solar Panels)</strong> (DC 전기)
            <br />
            &nbsp;&nbsp;→ <strong>인버터 (Inverter)</strong> (DC를 AC로 변환)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;→ <strong>가정 (Your Home)</strong> (가전제품에 전력 공급)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;→ <strong>배터리 (Battery)</strong> (잉여 전력 저장)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;→ <strong>전력망 (Grid)</strong> (남은 전력 송전)
          </div>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>태양광 패널</strong>은 햇빛에 노출될 때 직류(DC) 전기를 생성하는 광전(PV) 셀로 구성되어 있습니다. 흐린 날에도 출력이 줄어들긴 하지만 여전히 약간의 에너지를 생산해요.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>인버터</strong>는 시스템의 두뇌 역할을 합니다. 패널에서 생산된 DC 전기를 가정용 가전제품이 사용하는 교류(AC)로 변환해 줍니다. 하이브리드 인버터는 배터리도 함께 관리할 수 있어요.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            가정에서는 태양광 전기를 가장 먼저 사용합니다. 남는 전력은 나중에 사용하기 위해 <strong style={{ color: '#bb9af7' }}>가정용 배터리</strong>에 저장하거나, <strong style={{ color: '#bb9af7' }}>전력망(Grid)</strong>으로 송전하여 발전차액지원금(FiT) 크레딧을 받을 수 있어요.
          </p>
          <p style={{ margin: 0, color: '#73daca' }}>
            가장 중요한 목표는 생산한 태양광 전력을 최대한 많이 직접 사용하는 것입니다. 이를 <strong>자가 소비 (Self-consumption)</strong>라고 하며, 비용을 가장 많이 절약할 수 있는 방법입니다.
          </p>
        </>
      ),
    },
    {
      title: '🔌 그리드 미터 vs 에너지 모니터 — 무엇이 다른가요?',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            태양광 주택에는 <strong>두 가지 매우 다른 계량 기기</strong>가 있습니다. 둘 다 전기를 측정하기 때문에 자주 혼동되지만, 설치 위치, 목적, 소유 주체가 전혀 다릅니다.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #6366f1' }}>
              <strong style={{ color: '#6366f1' }}>그리드 미터 (NMI Meter)</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                건물 경계에 위치한 <strong>Ausgrid / DNSP 양방향 미터기</strong>입니다. 전력 배급사가 설치하고 소유합니다. 요금 청구를 위해 전체 건물의 총 수전량과 송전량을 기록합니다. 사용자가 이 미터기를 직접 읽거나 제어할 수 없습니다.
              </p>
              <ul style={{ margin: '8px 0 0', paddingLeft: 16, fontSize: 12, color: '#9ca3af' }}>
                <li style={{ marginBottom: 3 }}>송전 제한 규칙을 설정합니다 (예: Ausgrid 지역의 경우 5 kW)</li>
                <li style={{ marginBottom: 3 }}>전력 회사에 요금 청구 데이터를 제공합니다</li>
                <li style={{ marginBottom: 3 }}>발전차액지원금(FiT) 크레딧을 가능하게 합니다</li>
                <li>여러분은 전력 회사에 요금을 지불하고, 전력 회사가 이 미터기를 읽습니다</li>
              </ul>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #ec4899' }}>
              <strong style={{ color: '#ec4899' }}>에너지 모니터 (CT Clamp)</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                메인 분전반에 직접 설치하는 <strong>소비자용 기기</strong>입니다. (예: Shelly EM, Emporia Vue, IoTaWatt). 각 회로에 클립형 CT 센서를 사용합니다. HEMS나 인버터에 밀리초 단위로 실시간 전력 판독값을 제공합니다.
              </p>
              <ul style={{ margin: '8px 0 0', paddingLeft: 16, fontSize: 12, color: '#9ca3af' }}>
                <li style={{ marginBottom: 3 }}>태양광 전용 EV 충전에 필수적입니다</li>
                <li style={{ marginBottom: 3 }}>인버터 제로 송전(zero-export) 제한에 필수적입니다</li>
                <li style={{ marginBottom: 3 }}>스마트 배터리 관리를 가능하게 합니다</li>
                <li>여러분이 소유하고 직접 데이터를 읽습니다</li>
              </ul>
            </div>
          </div>
          <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, marginBottom: 10, fontFamily: 'monospace', fontSize: 12, color: '#9ece6a', lineHeight: 1.9 }}>
            Grid → <strong>Grid Meter (NMI)</strong> → 메인 분전반<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↑<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Energy Monitor (CT)</strong> ← 전선에 클립으로 연결됨<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓ HEMS / 인버터로 데이터 전송
          </div>
          <p style={{ margin: 0, color: '#73daca', fontSize: 13 }}>
            <strong>핵심 요약:</strong> NMI 미터는 '청구서'이고, CT clamp는 '두뇌'입니다. 스마트한 태양광 자가 소비, 특히 태양광 전용 EV 충전을 위해서는 CT clamp가 꼭 필요해요. NMI 미터만으로는 부족합니다.
          </p>
        </>
      ),
    },
    {
      title: '💰 전기 요금 이해하기',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            태양광 시스템이 있는 경우, 전기 요금은 두 가지 주요 전력 흐름을 기반으로 계산됩니다:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #f7768e' }}>
              <strong style={{ color: '#f7768e' }}>수전 (당신이 지불하는 비용)</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                태양광이나 배터리가 필요 전력을 모두 감당하지 못할 때 전력망에서 끌어오는 전기입니다. 요금제와 시간대에 따라 일반적으로 $0.25–$0.45/kWh가 청구됩니다.
              </p>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #9ece6a' }}>
              <strong style={{ color: '#9ece6a' }}>송전 (당신이 버는 수익)</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                가정에서 사용하고 남은 잉여 태양광 전력을 전력망으로 보내면 발전차액지원금(FiT)을 받습니다. 보통 $0.05–$0.12/kWh로, 수전 요금보다 훨씬 적습니다.
              </p>
            </div>
          </div>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>자가 소비 절감 효과:</strong> 태양광 전력을 직접 사용할 때마다 비싼 소매 수전 요금을 내지 않아도 됩니다. 만약 수전 요금이 $0.30/kWh이고 송전 요금이 $0.08/kWh라면, 자가 소비한 1 kWh당 $0.08을 버는 대신 $0.30을 절약하게 되는 것입니다.
          </p>
          <p style={{ margin: 0, color: '#73daca' }}>
            이것이 바로 태양광 전력을 전력망으로 송전하는 것보다 직접 사용하거나 배터리에 저장하는(자가 소비 극대화) 것이 재정적으로 더 유리한 이유입니다.
          </p>
        </>
      ),
    },
    {
      title: '🔋 가정용 배터리란 무엇인가요?',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            가정용 배터리(태양광 배터리 또는 에너지 저장 시스템이라고도 함)는 해가 비치지 않을 때 사용하기 위해 잉여 태양광 에너지를 저장하는 장치입니다.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>작동 원리:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              태양광 발전량이 가정의 소비량보다 많은 낮 시간대에 <strong>충전</strong>합니다.
            </li>
            <li style={{ marginBottom: 4 }}>
              전력망에서 전기를 수전하는 대신 저녁과 밤에 집안에 전력을 공급하기 위해 <strong>방전</strong>합니다.
            </li>
            <li style={{ marginBottom: 4 }}>
              배터리가 없을 때 보통 30–40% 수준인 <strong>자가 소비율</strong>을 배터리 사용 시 60–80%까지 크게 높여줍니다.
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>일반적인 사양:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>용량:</strong> 5–15 kWh 사용 가능 (일반적인 가정은 하룻밤에 8–12 kWh를 사용합니다)
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>출력:</strong> 2.5–5 kW 연속 충전/방전 속도
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>사이클 수명:</strong> 화학 성분에 따라 4,000–10,000 사이클
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>왕복 효율:</strong> 90–95% (충전 및 방전 주기에서 5–10%의 손실이 발생합니다)
            </li>
          </ul>
          <p style={{ margin: 0, color: '#73daca' }}>
            배터리는 발전차액지원금(FiT)과 수전 요금 간의 차이가 크거나, 시간대별(Time-of-use) 요금제를 사용할 때 가장 큰 가치를 발휘합니다.
          </p>
        </>
      ),
    },
    {
      title: '🚗 가정에서의 EV 충전',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            가정에서 전기차(EV)를 충전하는 것은 가정에서 가장 큰 제어 가능한 부하 중 하나이므로 스마트 에너지 관리에 매우 이상적입니다.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>충전 레벨:</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #e0af68' }}>
              <strong style={{ color: '#e0af68' }}>레벨 1 (완속)</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                일반 콘센트 사용, 1.4–2.4 kW. 시간당 약 8–15 km의 주행 거리를 추가합니다. 출퇴근 거리가 짧은 경우 밤새 충전하기에 적합합니다.
              </p>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #7aa2f7' }}>
              <strong style={{ color: '#7aa2f7' }}>레벨 2 (급속)</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                전용 EVSE(충전기), 3.7–22 kW. 단상(최대 7.4 kW) 또는 삼상(최대 22 kW). 시간당 25–120 km를 추가합니다.
              </p>
            </div>
          </div>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>단상 vs 삼상:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>단상 (Single phase):</strong> 주거용으로 가장 흔합니다. 최대 32A × 230V = 7.4 kW
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>삼상 (Three phase):</strong> 일부 시장이나 신축에 제공됩니다. 최대 32A × 3 × 230V = 22 kW
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>스마트 충전의 이점:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              태양광 잉여 전력으로 충전하여 전기 요금을 최소화합니다.
            </li>
            <li style={{ marginBottom: 4 }}>
              오프피크 요금 시간대에 충전하도록 예약할 수 있습니다.
            </li>
            <li style={{ marginBottom: 4 }}>
              사용 가능한 태양광 전력에 맞게 충전 속도를 동적으로 조절합니다.
            </li>
            <li style={{ marginBottom: 4 }}>
              전력망 연결의 과부하를 방지합니다.
            </li>
          </ul>
          <p style={{ margin: 0, color: '#73daca' }}>
            EV 배터리(40–100 kWh)는 가정용 배터리(5–15 kWh)보다 훨씬 크기 때문에 스마트한 충전 관리가 에너지 비용 절감에 큰 영향을 미칩니다.
          </p>
        </>
      ),
    },
    {
      title: '⚡ 인버터란 무엇인가요?',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            인버터는 태양광 패널에서 생성된 직류(DC) 전기를 가정과 전력망에서 사용할 수 있는 교류(AC)로 변환해 줍니다. 태양광 시스템의 가장 핵심적인 부품이에요.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>인버터의 종류:</strong>
          </p>
          <div style={{ marginBottom: 12 }}>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, marginBottom: 8, borderLeft: '3px solid #e0af68' }}>
              <strong style={{ color: '#e0af68' }}>스트링 인버터 (String Inverter)</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                패널들이 직렬(스트링)로 연결됩니다. 하나의 인버터가 전체 스트링을 관리해요. 비용 효율적이지만, 가장 성능이 떨어지는 패널 하나가 전체 스트링의 성능을 제한할 수 있습니다. 그늘이 없는 지붕에 적합합니다.
              </p>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, marginBottom: 8, borderLeft: '3px solid #7aa2f7' }}>
              <strong style={{ color: '#7aa2f7' }}>마이크로 인버터 (Micro Inverter)</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                각 패널마다 작은 인버터가 달려 있습니다. 패널들이 독립적으로 작동하므로 한 패널에 그늘이 져도 다른 패널에 영향을 주지 않아요. 비용은 더 비싸지만 복잡한 지붕이나 부분적으로 그늘이 지는 곳에 유리합니다.
              </p>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #9ece6a' }}>
              <strong style={{ color: '#9ece6a' }}>하이브리드 인버터 (Hybrid Inverter)</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                태양광 인버터와 배터리 인버터를 하나의 장치에 결합한 형태입니다. 태양광 발전, 배터리 충전/방전 및 전력망 상호 작용을 모두 관리합니다. 배터리 저장 장치를 포함한 새로운 설치에 가장 많이 선택되는 방식입니다.
              </p>
            </div>
          </div>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>효율성:</strong> 최신 인버터의 효율은 96–98%입니다. 즉, 1000W의 DC 입력이 들어오면 960–980W의 AC 출력을 얻을 수 있다는 의미입니다. 약간의 손실은 열로 변환됩니다.
          </p>
          <p style={{ margin: 0, color: '#73daca' }}>
            인버터 용량 산정은 매우 중요합니다. 인버터는 대략 태양광 패널의 크기와 일치해야 합니다. 인버터 용량이 너무 작으면 최대 태양광 발전을 제한(클리핑)하여 에너지를 낭비하게 되고, 너무 크면 불필요한 비용이 발생합니다.
          </p>
        </>
      ),
    },
    {
      title: '📏 시스템 용량 산정 가이드',
      advanced: true,
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            태양광, 배터리, 인버터 시스템의 크기를 올바르게 정하는 것은 투자 수익을 극대화하는 데 있어 매우 중요합니다.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>태양광 패널 용량 산정:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              먼저 연간 전력 소비량(예: 6,000 kWh/년)을 확인합니다.
            </li>
            <li style={{ marginBottom: 4 }}>
              해당 지역의 일평균 일조 시간에 365를 곱한 값으로 나눕니다 (예: 4.5 시간 × 365 = 1,642).
            </li>
            <li style={{ marginBottom: 4 }}>
              시스템 손실을 고려하여 0.8의 감소율(derate factor)을 적용합니다: 6,000 / (1,642 × 0.8) ≈ 4.6 kW 시스템.
            </li>
            <li style={{ marginBottom: 4 }}>
              경험 법칙: 1 kW의 태양광 패널은 지역에 따라 대략 연간 1,200–1,600 kWh를 생산합니다.
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>배터리 용량 산정:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              저녁/야간 소비량을 계산합니다 (평균적인 가정의 경우 보통 8–12 kWh).
            </li>
            <li style={{ marginBottom: 4 }}>
              이 야간 부하의 80–100%를 감당할 수 있는 배터리를 선택합니다.
            </li>
            <li style={{ marginBottom: 4 }}>
              방전 심도(DoD, Depth of Discharge)를 고려하세요: 90% DoD를 가진 10 kWh 배터리의 실제 사용 가능 용량은 9 kWh입니다.
            </li>
            <li style={{ marginBottom: 4 }}>
              매우 큰 태양광 패널을 가지고 있지 않다면, 배터리 용량을 지나치게 크게 설정하는 것은 비용 대비 효율이 떨어집니다.
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>인버터 용량 산정:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              태양광 패널 크기에 맞추어 인버터를 선택합니다. 보통 1:1에서 1.3:1의 DC:AC 비율이 일반적입니다.
            </li>
            <li style={{ marginBottom: 4 }}>
              패널 용량을 약간 크게 잡으면(예: 5 kW 인버터에 6.6 kW 패널 연결) 아침과 오후 시간대의 출력을 극대화할 수 있습니다.
            </li>
            <li style={{ marginBottom: 4 }}>
              하이브리드 인버터인 경우 배터리의 충전/방전 속도를 제대로 지원하는지 확인해야 합니다.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: '🔌 전력망 연결 유형',
      advanced: true,
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            태양광 시스템이 전력망에 어떻게 연결되는지에 따라 설치할 수 있는 기기의 크기와 송전할 수 있는 전력량이 달라집니다.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>연결 상(Phases):</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>단상 (Single phase):</strong> 일반적인 주거용 연결입니다. 보통 40–63A의 메인 퓨즈를 가집니다. 많은 지역에서 인버터 용량을 5 kW로 제한합니다. 전압이 흐르는 활선이 하나입니다.
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>삼상 (Three phase):</strong> 최신 주택이나 특정 지역에서 흔히 볼 수 있습니다. 세 개의 활선이 각각의 위상을 가집니다. 더 큰 인버터(최대 15–30 kW)와 삼상 EV 충전(22 kW)을 사용할 수 있으며 부하 분산이 훨씬 유리합니다.
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>송전(Export) 구성:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>제한 없는 송전 (Full export):</strong> 전력망으로 보낼 수 있는 전력량에 제한이 없습니다 (신규 설치에서는 매우 드묾).
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>제한된 송전 (Export limited):</strong> 인버터가 전력망으로 보내는 전력을 특정 값(예: 5 kW)으로 제한하도록 설정됩니다. 잉여 태양광 전력은 제한되거나 배터리/EV 충전으로 전환됩니다.
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>제로 송전 (Zero export):</strong> 전력을 전력망으로 전혀 보낼 수 없습니다. 인버터는 소비량에 정확히 맞춰 전력 생산을 줄여야 합니다. 실시간 피드백을 위해 CT clamp나 미터기가 반드시 필요합니다.
            </li>
          </ul>
          <p style={{ margin: 0, color: '#73daca' }}>
            송전 제한 설정을 사용하면 전력망으로 보낼 수 있는 용량이 제한되어 있더라도 더 큰 태양광 시스템을 설치할 수 있어요 — 남는 전력은 배터리나 EV 충전에 활용하면 되니까요.
          </p>
        </>
      ),
    },
    {
      title: '🧪 배터리 화학 성분 비교',
      advanced: true,
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            가정용 배터리에 사용되는 두 가지 주요 리튬 이온 화학 성분은 LFP와 NMC입니다.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #9ece6a' }}>
              <strong style={{ color: '#9ece6a' }}>LFP (리튬 인산철)</strong>
              <ul style={{ margin: '8px 0 0', paddingLeft: 16, fontSize: 13 }}>
                <li style={{ marginBottom: 3 }}>6,000–10,000+ 사이클 수명</li>
                <li style={{ marginBottom: 3 }}>매우 안전하며 열적으로 안정적</li>
                <li style={{ marginBottom: 3 }}>100% 방전 심도 (DoD) 사용 가능</li>
                <li style={{ marginBottom: 3 }}>에너지 밀도가 낮음 (더 무거움)</li>
                <li style={{ marginBottom: 3 }}>코발트를 사용하지 않음 — 더 윤리적인 공급망</li>
                <li>예시: BYD, Tesla Powerwall 3</li>
              </ul>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #7aa2f7' }}>
              <strong style={{ color: '#7aa2f7' }}>NMC (니켈 망간 코발트)</strong>
              <ul style={{ margin: '8px 0 0', paddingLeft: 16, fontSize: 13 }}>
                <li style={{ marginBottom: 3 }}>3,000–5,000 사이클 수명</li>
                <li style={{ marginBottom: 3 }}>높은 에너지 밀도 (더 가벼움)</li>
                <li style={{ marginBottom: 3 }}>일반적으로 80–90% DoD 사용 권장</li>
                <li style={{ marginBottom: 3 }}>더 많은 열 관리가 필요함</li>
                <li style={{ marginBottom: 3 }}>수명 기간 동안 사이클당 비용이 더 높음</li>
                <li>예시: LG RESU, 구형 Powerwall</li>
              </ul>
            </div>
          </div>
          <p style={{ margin: 0, color: '#73daca' }}>
            가정용 태양광 시스템에서 매일 충방전을 반복하는 용도로는, 더 긴 사이클 수명, 안전성, 그리고 배터리 수명 동안의 kWh당 비용 감소 이점 덕분에 현재 LFP 방식이 훨씬 선호되고 있습니다.
          </p>
        </>
      ),
    },
    {
      title: '🌡️ 히트펌프 통합',
      advanced: true,
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            히트펌프는 전기를 사용해 직접 열을 생성하는 것이 아니라 열을 '이동'시키는 고효율 전기 난방 장치로, 태양광 시스템과 아주 잘 어울립니다.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>COP (성능 계수, Coefficient of Performance):</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              COP가 3.5라는 것은 1 kW의 전기를 소비할 때 히트펌프가 3.5 kW의 열을 제공한다는 의미입니다.
            </li>
            <li style={{ marginBottom: 4 }}>
              COP는 외부 온도에 따라 달라지며, 극도로 추울 때는 낮아집니다.
            </li>
            <li style={{ marginBottom: 4 }}>
              최신 공기열원(air-source) 히트펌프의 계절 평균 COP(SCOP)는 일반적으로 3.0–4.0 수준입니다.
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>열 저장 (Thermal storage):</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              온수 탱크는 일종의 열 배터리 역할을 합니다. 낮 동안 남는 태양광 전력으로 물을 데워둘 수 있어요.
            </li>
            <li style={{ marginBottom: 4 }}>
              전기 요금이 비싼 시간대가 오기 전에 태양광이나 저렴한 요금의 전기를 사용해 집을 미리 난방할 수 있습니다.
            </li>
            <li style={{ marginBottom: 4 }}>
              버퍼 탱크(Buffer tanks)는 몇 시간 동안 열에너지를 손실 없이 저장해 줍니다.
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>스마트 전력망 상호작용:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              HEMS는 태양광 잉여 전력이 있거나 전력망 요금이 저렴할 때 히트펌프에 작동 신호를 보낼 수 있습니다.
            </li>
            <li style={{ marginBottom: 4 }}>
              SG Ready 인터페이스(유럽 히트펌프에서 흔함)는 두 개의 디지털 입력을 통한 외부 제어를 가능하게 합니다.
            </li>
            <li style={{ marginBottom: 4 }}>
              일부 히트펌프는 에너지 관리 시스템과의 직접적인 통합을 위해 Modbus 통신을 지원합니다.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: '📡 모니터링 및 데이터',
      advanced: true,
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            에너지 시스템을 모니터링하는 것은 성능을 이해하고, 문제를 식별하며, 사용을 최적화하는 데 매우 중요합니다.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>CT Clamp (전류 변압기):</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              케이블을 자르지 않고도 케이블에 흐르는 전류를 측정하는 클립 형태의 센서입니다.
            </li>
            <li style={{ marginBottom: 4 }}>
              전력망 선, 태양광 선, 개별 회로에 부착하여 전력 흐름을 측정합니다.
            </li>
            <li style={{ marginBottom: 4 }}>
              많은 인버터와 에너지 모니터에서 실시간 피드백을 얻기 위해 사용됩니다.
            </li>
            <li style={{ marginBottom: 4 }}>
              정확도는 품질에 따라 다르지만 좋은 CT의 경우 오차율이 1–2% 수준입니다.
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>에너지 모니터링 시스템:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>인버터 포털:</strong> 대부분의 인버터는 클라우드 대시보드를 제공합니다 (Fronius Solar.web, Huawei FusionSolar, SMA Sunny Portal).
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>전용 모니터:</strong> Shelly EM, Emporia Vue, IoTaWatt 같은 기기는 회로 수준의 세밀한 모니터링을 제공합니다.
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>DIY 플랫폼:</strong> 에너지 대시보드가 있는 Home Assistant, 시계열 데이터를 위해 InfluxDB를 사용하는 Grafana 등이 있습니다.
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>가정용 에너지 관리 시스템 (HEMS):</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              모든 기기의 데이터를 읽고 최적화 결정을 내리는 중앙 집중식 컨트롤러입니다.
            </li>
            <li style={{ marginBottom: 4 }}>
              사용되는 프로토콜: 인버터 및 미터기용 Modbus TCP/RTU, EV 충전기용 OCPP, IoT 센서용 MQTT.
            </li>
            <li style={{ marginBottom: 4 }}>
              배터리 충전, EV 충전, 히트펌프 예약 및 송전 관리를 자동화할 수 있습니다.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: '🔌 가정용 EV 충전기 기능 — 스마트 충전기는 실제로 어떤 역할을 하나요?',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            모든 가정용 EV 충전기가 똑같은 것은 아닙니다. 기본 충전기는 고정된 전력 출력만 제공하는 반면, 스마트 충전기는 가정의 에너지 시스템과 적극적으로 통신하며 실시간으로 충전량을 조절합니다.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>기본 기능 (모든 가정용 충전기 공통):</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>정격 암페어(예: 16A 또는 32A)에서의 고정 전력 출력</li>
            <li style={{ marginBottom: 4 }}>예약 충전 — 앱에서 설정한 시간에 시작/종료</li>
            <li style={{ marginBottom: 4 }}>세션 에너지 기록 로깅</li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>스마트 / 고급 기능:</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #9ece6a' }}>
              <strong style={{ color: '#9ece6a' }}>동적 전류 조절</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                충전기가 에너지 모니터의 신호에 따라 전류(예: 6A–32A)를 지속적으로 조절합니다. 이것이 태양광 전용 충전의 핵심 메커니즘으로, 실시간 태양광 잉여 전력 곡선을 충전기가 그대로 따라가게 합니다.
              </p>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #7aa2f7' }}>
              <strong style={{ color: '#7aa2f7' }}>앱 원격 제어 + OTA 업데이트</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                원격으로 세션을 시작/중지하고, 충전 모드를 설정하며, 무선(OTA)으로 펌웨어 업데이트를 받습니다. 전기 기술자를 부르지 않아도 충전기를 최신 프로토콜과 기능으로 유지할 수 있어요.
              </p>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #bb9af7' }}>
              <strong style={{ color: '#bb9af7' }}>플러그 & 차지 (ISO 15118)</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                케이블을 꽂는 순간 EV와 충전기가 TLS 인증서를 통해 서로를 자동 인증합니다. RFID 카드나 앱이 필요 없어요. 미래의 양방향(V2G) 충전을 위해 반드시 필요한 기능입니다.
              </p>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #e0af68' }}>
              <strong style={{ color: '#e0af68' }}>OCPP 2.0.1 스마트 충전</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                중앙 관리 시스템(CSMS)이 타임스탬프가 지정된 전력 스케줄을 충전기에 보낼 수 있게 합니다. 네트워크 연결이 끊기더라도 충전기가 독립적으로 스케줄을 실행해요. 전력망 수요 반응(Demand Response)과 VPP 참여를 위해 필요합니다.
              </p>
            </div>
          </div>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>충전 전류를 동적으로 조절하는 것이 안전한가요?</strong>
          </p>
          <p style={{ margin: '0 0 8px', fontSize: 13 }}>
            네 — 충전기와 EV가 표준 통신 프로토콜(모드 2/3 케이블의 PWM 파일럿 신호 또는 CCS의 ISO 15118)을 사용하는 한 안전합니다. 충전기가 파일럿 신호를 통해 사용 가능한 최대 전류를 알려주면, EV는 항상 자신이 안전하게 받을 수 있는 만큼만 전력을 끌어갑니다. 충전기가 EV에게 억지로 전력을 더 밀어넣을 수는 없습니다.
          </p>
          <p style={{ margin: 0, color: '#73daca', fontSize: 13 }}>
            <strong>중요한 절대 규칙:</strong> 대부분의 EV는 6A(단상의 경우 1.4 kW) 미만의 전류에서는 충전을 받아들이지 않습니다. 태양광 잉여 전력이 이 임계값 아래로 떨어지면, 스마트 충전기는 3A로 충전하려 시도하는 것이 아니라, 세션을 일시 중지하거나 모자란 전력을 전력망에서 보충(Eco 모드)해야 합니다.
          </p>
        </>
      ),
    },
    {
      title: '☀️🔄 태양광 인버터 + EV 충전기 통합 — 같은 브랜드여야 하나요?',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            EV 충전기를 추가하려는 태양광 소유자들이 가장 많이 하는 질문입니다: <em>"내 Fronius/SMA/Huawei 인버터와 연동하려면 똑같은 Fronius/SMA/Huawei 충전기를 사야 하나요?"</em> 짧은 대답은 <strong>아니오</strong>입니다. 하지만 그 이유를 이해하려면 실제로 충전을 제어하는 기기가 무엇인지 알아야 해요.
          </p>
          <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, marginBottom: 12, fontFamily: 'monospace', fontSize: 12, color: '#9ece6a', lineHeight: 1.9 }}>
            태양광 패널 → 인버터 (DC→AC) → 메인 분전반<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↑<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;에너지 모니터 (CT clamp)<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓ 실시간 데이터<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EV 충전기 ← 전류 조절
          </div>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>인버터의 역할:</strong> DC를 AC로 변환하고 전력망과 동기화합니다. EV 충전기가 끌어다 쓸 전력량을 결정하는 건 인버터가 아닙니다. 그 결정은 <strong>에너지 모니터</strong>(CT clamp)와 <strong>충전기 자체의 제어 로직</strong>에서 이루어집니다.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>태양광 전용 EV 충전을 가능하게 하는 실제 요소:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              분전반의 <strong>CT clamp / 에너지 모니터</strong>가 실시간으로 태양광 잉여 전력을 측정합니다.
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>EV 충전기</strong>가 이 데이터를 읽어들여(Modbus를 통해 직접, 또는 HEMS/클라우드 중계를 통해) 충전 전류를 동적으로 조절합니다.
            </li>
            <li style={{ marginBottom: 4 }}>
              인버터 브랜드는 이 과정과 무관합니다. 단순히 AC 전력을 생산할 뿐입니다.
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>동일 브랜드 사용의 장점 (예: Fronius Wattpilot + Fronius Smart Meter):</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>수동 구성 없이 바로 작동하는 플러그 앤 플레이 설정</li>
            <li style={{ marginBottom: 4 }}>인버터와 충전기를 모두 관리하는 통합 앱</li>
            <li style={{ marginBottom: 4 }}>보다 긴밀한 통합과 빠른 업데이트 주기</li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>오픈 표준(Open-standard) 대안:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>Modbus나 MQTT를 지원하는 모든 CT clamp (예: Shelly EM, IoTaWatt)</li>
            <li style={{ marginBottom: 4 }}>모든 OCPP 호환 충전기 (Myenergi Zappi, Ocular IQ, Smappee)</li>
            <li style={{ marginBottom: 4 }}>모든 기기를 조율하기 위한 Home Assistant 같은 HEMS (선택 사항)</li>
            <li style={{ marginBottom: 4 }}>장점: 브랜드에 종속되지 않고 언제든 교체 가능하며, 어떤 EV든 지원하고 타사 플랫폼과 통합이 자유롭습니다.</li>
          </ul>
          <p style={{ margin: 0, color: '#73daca', fontSize: 13 }}>
            <strong>결론:</strong> 이미 Fronius 인버터를 가지고 있다면, Fronius Wattpilot을 쓰는 것이 설정하기 가장 쉽습니다. 하지만 반드시 얽매일 필요는 없어요. CT clamp나 HEMS 데이터를 읽을 수 있는 어떤 스마트 충전기든 태양광 우선 충전 기능을 동일하게 구현할 수 있습니다.
          </p>
        </>
      ),
    },
    {
      title: '☁️ 클라우드 vs 로컬 — 인터넷이 끊기면 어떻게 되나요?',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            많은 스마트 홈 에너지 제품이 앱 구동과 제어 로직을 위해 클라우드 서버에 의존합니다. 어떤 기능에 인터넷이 필요하고, 어떤 기능이 로컬 네트워크에서 완벽하게 작동하는지 아는 것이 중요합니다.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #f7768e' }}>
              <strong style={{ color: '#f7768e' }}>인터넷 연결이 없으면 중단되는 기능</strong>
              <ul style={{ margin: '6px 0 0', paddingLeft: 16, fontSize: 13 }}>
                <li style={{ marginBottom: 3 }}>원격 앱 제어 (집 밖에서 시작/중지)</li>
                <li style={{ marginBottom: 3 }}>클라우드 기반 에너지 기록 및 대시보드</li>
                <li style={{ marginBottom: 3 }}>OTA 펌웨어 업데이트</li>
                <li style={{ marginBottom: 3 }}>태양광 발전 예측 (날씨 데이터 연동)</li>
                <li>실시간 동적 전기 요금 연동</li>
              </ul>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #9ece6a' }}>
              <strong style={{ color: '#9ece6a' }}>로컬에서 계속 작동하는 기능</strong>
              <ul style={{ margin: '6px 0 0', paddingLeft: 16, fontSize: 13 }}>
                <li style={{ marginBottom: 3 }}>기본 태양광 발전 및 EV 충전</li>
                <li style={{ marginBottom: 3 }}>동적 태양광 전용 충전 (CT clamp 로컬 루프)</li>
                <li style={{ marginBottom: 3 }}>이미 다운로드된 OCPP 충전 스케줄</li>
                <li style={{ marginBottom: 3 }}>배터리 충전/방전 사이클</li>
                <li>히트펌프 동작</li>
              </ul>
            </div>
          </div>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>태양광 전용 EV 충전이 오프라인에서도 작동하는 이유:</strong> CT clamp, EV 충전기, 그리고 그들 사이의 통신은 전적으로 내부 로컬 네트워크에서 이루어집니다 (또는 직접 유선/Modbus를 통해). 실시간 전류 조절 루프에는 클라우드가 관여하지 않습니다. 클라우드는 과거 데이터를 기록하고 외부에서 앱으로 접속할 때만 필요합니다.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>안정성을 위한 모범 사례:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>EV 충전기가 자체적인 충전 로직을 로컬에서 실행할 수 있는지 확인하세요 (제조사 사양 확인)</li>
            <li style={{ marginBottom: 4 }}>자동화를 위해 로컬 우선 플랫폼 (Home Assistant, 로컬 OCPP 서버)을 사용하세요</li>
            <li style={{ marginBottom: 4 }}>모니터링 대시보드, 알림 및 원격 접근 용도로만 클라우드를 사용하세요</li>
            <li style={{ marginBottom: 4 }}>OCPP 2.0.1은 충전 스케줄을 충전기에 다운로드하여 로컬에서 실행할 수 있게 해줍니다. 스케줄이 설정되면 서버가 필요하지 않아요.</li>
          </ul>
          <p style={{ margin: 0, color: '#73daca', fontSize: 13 }}>
            잘 설계된 시스템은 핵심 제어 루프(태양광 → CT clamp → 충전기)를 완전히 로컬로 유지합니다. 클라우드는 유용하지만 일상적인 에너지 제어의 단일 장애점(SPOF)이 되어서는 안 됩니다.
          </p>
        </>
      ),
    },
    {
      title: '🚗 호주 태양광 주택을 위한 추천 스마트 EV 충전기',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            이 충전기들은 호주 환경(단상 전력망, 5 kW 송전 제한, Ausgrid/Endeavour/SA Power 지역)에 잘 맞고, 특정 브랜드 종속 없이 태양광 잉여 전력 충전을 지원합니다.
          </p>

          <div style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase' as const, letterSpacing: '0.08em', marginBottom: 8 }}>높은 통합성 / 태양광 최우선</div>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
              <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #9ece6a' }}>
                <strong style={{ color: '#9ece6a' }}>Myenergi Zappi (7.4 kW / 22 kW)</strong>
                <p style={{ margin: '4px 0 0', fontSize: 13, lineHeight: 1.6 }}>
                  세 가지 모드를 지원하는 최고 수준의 태양광 잉여 충전기입니다: Eco(태양광 + 전력망 보충), Eco+(태양광 전용, 잉여 부족 시 일시 정지), Boost(최고 속도). 외부 CT clamp와 독립적으로 작동하며 인버터 브랜드에 종속되지 않습니다. 앱 제어, OCPP 지원으로 미래에도 대응 가능해요.
                </p>
                <div style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>OCPP 1.6 · 외부 CT clamp · 앱 제어 · 7.4 kW (단상)</div>
              </div>
              <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #bb9af7' }}>
                <strong style={{ color: '#bb9af7' }}>Ocular IQ Home Solar Smart Charger</strong>
                <p style={{ margin: '4px 0 0', fontSize: 13, lineHeight: 1.6 }}>
                  호주에서 제작되었으며 태양광 주택을 위해 특별히 설계되었습니다. Modbus나 제조사 API를 통해 대부분의 인버터 브랜드와 직접 통합됩니다. Home Assistant를 지원하며, 배터리 및 V2H 조율로 확장할 수 있습니다. 로컬 우선 제어를 원할 때 좋은 선택이에요.
                </p>
                <div style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>OCPP 2.0.1 · Modbus · 로컬 API · 7.4 kW</div>
              </div>
              <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #7aa2f7' }}>
                <strong style={{ color: '#7aa2f7' }}>Smappee EV Wall</strong>
                <p style={{ margin: '4px 0 0', fontSize: 13, lineHeight: 1.6 }}>
                  긴밀한 태양광 통합을 위해 Smappee Energy Monitor (CT clamp)와 함께 사용합니다. 여러 대의 충전기 간의 동적 부하 분산을 지원합니다. OCPP, 로컬 네트워크 작동, 가정용 에너지 대시보드 기능을 갖추고 있어 충전기가 여러 대 있는 가정에 적합합니다.
                </p>
                <div style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>OCPP 1.6/2.0 · CT clamp 페어링 · 7.4 kW / 22 kW</div>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase' as const, letterSpacing: '0.08em', marginBottom: 8 }}>가성비 / 쉬운 설정</div>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
              <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #e0af68' }}>
                <strong style={{ color: '#e0af68' }}>Evos 7.4 kW Smart EV Charger</strong>
                <p style={{ margin: '4px 0 0', fontSize: 13, lineHeight: 1.6 }}>
                  합리적인 가격으로 호주 전역에서 널리 구매할 수 있습니다. 앱을 통한 예약 제어, CT clamp를 통한 태양광 우선 모드를 지원합니다. 깊은 수준의 HEMS 통합이 필요 없는 직관적인 설치에 아주 좋아요.
                </p>
                <div style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>앱 예약 · CT clamp 지원 · 7.4 kW</div>
              </div>
              <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #73daca' }}>
                <strong style={{ color: '#73daca' }}>GoodWe HCA G2 (7 kW)</strong>
                <p style={{ margin: '4px 0 0', fontSize: 13, lineHeight: 1.6 }}>
                  이미 GoodWe 인버터가 있는 경우 가장 좋은 선택입니다. 추가 CT clamp 없이 기본 통합됩니다. GoodWe의 SEMS 포털에서 태양광과 EV를 하나의 대시보드로 관리할 수 있어요. 필요시 타사 CSMS를 위한 OCPP도 지원합니다.
                </p>
                <div style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>OCPP 1.6 · GoodWe 기본 통합 · 7 kW</div>
              </div>
            </div>
          </div>

          <div style={{ padding: '12px 14px', background: '#16161e', borderRadius: 6, borderLeft: '3px solid #7aa2f7', fontSize: 13, color: '#9ca3af', lineHeight: 1.7 }}>
            <strong style={{ color: '#7aa2f7' }}>핵심 선택 체크리스트:</strong>
            <ol style={{ margin: '8px 0 0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>외부 CT clamp나 Modbus를 통한 태양광 잉여 충전을 지원하나요? (태양광 전용 모드에 필수)</li>
              <li style={{ marginBottom: 4 }}>OCPP 1.6 또는 2.0.1을 지원하나요? (스마트 충전 및 향후 전력망 서비스에 필수)</li>
              <li style={{ marginBottom: 4 }}>인터넷 연결 없이도 충전 로직을 로컬에서 실행할 수 있나요?</li>
              <li style={{ marginBottom: 4 }}>호주 시장용으로 인증받았나요? (RCM 마크, AS/NZS 3000 배선 규정 준수 확인)</li>
              <li>OTA 펌웨어 업데이트를 지원하나요? (향후 프로토콜 업그레이드를 위한 미래 대비)</li>
            </ol>
          </div>
        </>
      ),
    },
  ],

  // ── Protocols ──
  protocols_title: '통신 프로토콜',
  protocols_subtitle: '가정용 에너지 시스템 기기들이 서로 통신하는 방식입니다.',
  protocols_advanced_extra: ' 고급 난이도에서는 추가적인 프로토콜과 기술적 세부 정보를 볼 수 있습니다.',

  protocols_sections: [
    {
      key: 'modbus',
      title: 'Modbus — 산업용 통신 프로토콜',
      accentColor: '#e0af68',
      content: (userLevel) => (
        <>
          <p style={{ margin: '0 0 10px' }}>
            <strong style={{ color: '#e0af68' }}>이게 뭔가요:</strong> Modbus는 1979년 Modicon사에서 처음 개발한 직렬 통신 프로토콜입니다. 산업용 전자 기기를 연결하는 사실상의 표준이 되었으며 가정용 에너지 시스템에서도 널리 사용됩니다.
          </p>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>작동 원리:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>마스터-슬레이브 구조:</strong> 하나의 마스터 기기(예: 에너지 관리 시스템)가 요청을 시작하고, 슬레이브 기기(인버터, 미터기)가 데이터로 응답합니다.
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>레지스터 기반 데이터 모델:</strong> 모든 데이터는 번호가 매겨진 레지스터(Register)로 구성됩니다. 각 레지스터는 16비트 값(0–65535)을 가집니다.
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>요청-응답:</strong> 마스터가 "레지스터 40001 읽어줘"라고 요청하면, 슬레이브가 그곳에 저장된 값을 반환합니다.
            </li>
          </ul>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>가정용 에너지 시스템에서의 활용:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>인버터:</strong> SMA, Fronius, Huawei, GoodWe 등 대부분이 발전량 데이터를 읽고 전력 제한을 설정하기 위해 Modbus TCP 또는 RTU를 지원합니다.
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>스마트 미터:</strong> Eastron SDM630 또는 Carlo Gavazzi 같은 기기는 Modbus를 통해 실시간 전력 판독값을 제공합니다.
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>히트펌프:</strong> 많은 최신 히트펌프가 작동 데이터를 공개하고 Modbus를 통한 제어 명령을 수용합니다.
            </li>
          </ul>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Modbus TCP vs RTU:</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
            <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, borderLeft: '3px solid #7aa2f7' }}>
              <strong style={{ color: '#7aa2f7' }}>Modbus TCP</strong>
              <ul style={{ margin: '6px 0 0', paddingLeft: 16, fontSize: 13 }}>
                <li style={{ marginBottom: 3 }}>이더넷(Ethernet) / Wi-Fi 기반</li>
                <li style={{ marginBottom: 3 }}>포트 502 (기본값)</li>
                <li style={{ marginBottom: 3 }}>소프트웨어와 쉽게 통합 가능</li>
                <li>표준 TCP/IP 네트워킹</li>
              </ul>
            </div>
            <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, borderLeft: '3px solid #9ece6a' }}>
              <strong style={{ color: '#9ece6a' }}>Modbus RTU</strong>
              <ul style={{ margin: '6px 0 0', paddingLeft: 16, fontSize: 13 }}>
                <li style={{ marginBottom: 3 }}>RS-485 직렬 버스(Serial bus) 기반</li>
                <li style={{ marginBottom: 3 }}>유선 방식, 2선 연결</li>
                <li style={{ marginBottom: 3 }}>하나의 버스에 최대 32개 기기 연결</li>
                <li>미터기 및 센서에 흔히 쓰임</li>
              </ul>
            </div>
          </div>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>레지스터 유형:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>Holding Registers (4xxxx):</strong> 읽기/쓰기 가능 — 설정 포인트 및 구성 값에 사용됩니다 (예: 출력 제한 설정).
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Input Registers (3xxxx):</strong> 읽기 전용 — 측정값에 사용됩니다 (예: 현재 출력, 전압, 주파수).
            </li>
          </ul>

          {userLevel === 'beginner' && (
            <div style={{ backgroundColor: '#1a2e1a', borderRadius: 6, padding: 12, border: '1px solid #2a3e2a' }}>
              <strong style={{ color: '#9ece6a' }}>초급 팁:</strong> Modbus를 거대한 파일 캐비닛이라고 생각해 보세요. 각 서랍(레지스터)마다 데이터가 하나씩 들어 있습니다. 당신이 특정 서랍 번호를 물어보면 기기가 그 안에 든 내용을 알려주는 방식이에요.
            </div>
          )}

          {userLevel === 'advanced' && (
            <>
              <p style={{ margin: '12px 0 8px' }}>
                <strong style={{ color: '#bb9af7' }}>기능 코드 (Function codes):</strong>
              </p>
              <pre style={codeBlockStyle}>
                {`FC03 - Read Holding Registers (설정, 구성 읽기)
FC04 - Read Input Registers  (측정값 읽기)
FC06 - Write Single Register  (단일 값 쓰기)
FC16 - Write Multiple Registers (범위 값 연속 쓰기)`}
              </pre>
              <p style={{ margin: '8px 0 8px' }}>
                <strong style={{ color: '#bb9af7' }}>레지스터 맵 예시 (SunSpec을 통한 Fronius Symo 인버터):</strong>
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
                참고: 레지스터 주소와 데이터 형식은 제조사마다 다릅니다. 항상 해당 기기의 Modbus 레지스터 맵 문서를 참조해야 합니다.
              </p>
            </>
          )}
        </>
      ),
    },
    {
      key: 'ocpp',
      title: 'OCPP — 개방형 충전 지점 프로토콜',
      accentColor: '#7aa2f7',
      content: (userLevel) => (
        <>
          <p style={{ margin: '0 0 10px' }}>
            <strong style={{ color: '#7aa2f7' }}>이게 뭔가요:</strong> OCPP (Open Charge Point Protocol)는 EV 충전소와 중앙 관리 시스템(CSMS) 간의 통신을 위한 개방형 표준 프로토콜입니다. 원격 모니터링, 제어 및 스마트 충전을 가능하게 합니다.
          </p>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>OCPP 1.6 vs 2.0.1:</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
            <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, borderLeft: '3px solid #e0af68' }}>
              <strong style={{ color: '#e0af68' }}>OCPP 1.6</strong>
              <ul style={{ margin: '6px 0 0', paddingLeft: 16, fontSize: 13 }}>
                <li style={{ marginBottom: 3 }}>WebSocket 상의 JSON 또는 SOAP</li>
                <li style={{ marginBottom: 3 }}>널리 채택되어 대부분의 충전기가 지원</li>
                <li style={{ marginBottom: 3 }}>기본적인 스마트 충전 프로필</li>
                <li style={{ marginBottom: 3 }}>더 단순한 메시지 구조</li>
                <li>기기 모델 / 보안 프로필 미지원</li>
              </ul>
            </div>
            <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, borderLeft: '3px solid #7aa2f7' }}>
              <strong style={{ color: '#7aa2f7' }}>OCPP 2.0.1</strong>
              <ul style={{ margin: '6px 0 0', paddingLeft: 16, fontSize: 13 }}>
                <li style={{ marginBottom: 3 }}>WebSocket 상의 JSON만 지원</li>
                <li style={{ marginBottom: 3 }}>구성을 위한 기기 모델 도입</li>
                <li style={{ marginBottom: 3 }}>향상된 보안 프로필</li>
                <li style={{ marginBottom: 3 }}>ISO 15118 지원 (플러그 앤 차지)</li>
                <li>비용 기반 프로필을 포함한 향상된 스마트 충전</li>
              </ul>
            </div>
          </div>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>핵심 작업:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>BootNotification:</strong> 충전기가 부팅 시 CSMS에 자신을 등록합니다.
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Authorize:</strong> 사용자 신원을 확인합니다 (RFID, 앱 또는 플러그 앤 차지).
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>StartTransaction / StopTransaction:</strong> 충전 세션을 시작하고 종료하며 전달된 에너지를 추적합니다.
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>MeterValues:</strong> 세션 중에 충전기에서 CSMS로 주기적으로 에너지 판독값을 전송합니다.
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>SetChargingProfile:</strong> CSMS가 충전기에 전력 제한 스케줄을 보냅니다.
            </li>
          </ul>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>스마트 충전 프로필:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>ChargePointMaxProfile:</strong> 전체 충전 지점의 전반적인 전력 한도를 설정합니다.
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>TxDefaultProfile:</strong> 커넥터의 모든 트랜잭션에 적용되는 기본 충전 스케줄입니다.
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>TxProfile:</strong> 특정 활성 트랜잭션에 대한 충전 스케줄 — 우선순위가 가장 높습니다.
            </li>
          </ul>

          <p style={{ margin: '0 0 10px' }}>
            <strong style={{ color: '#bb9af7' }}>태양광 충전을 가능하게 하는 원리:</strong> 에너지 관리 시스템(CSMS 역할을 하거나 그와 통신)이 인버터/미터기에서 현재 태양광 잉여 전력을 읽어 EV 충전에 사용할 수 있는 전력을 계산한 다음, 업데이트된 전력 제한이 포함된 SetChargingProfile 메시지를 충전기로 보냅니다. 충전기는 이에 맞춰 출력을 조절하며, 이 과정은 보통 5~60초마다 업데이트됩니다.
          </p>

          <div style={{ backgroundColor: '#16213e', borderRadius: 6, padding: 12, border: '1px solid #1e3a5f', marginBottom: 12 }}>
            <strong style={{ color: '#7aa2f7' }}>호주 시장 컨텍스트:</strong>
            <p style={{ margin: '6px 0 0', fontSize: 13 }}>
              현재 호주에서 판매되는 대부분의 주거용 EV 충전기는 <strong>OCPP 1.6</strong>을 지원하며, 이는 기본적인 스마트 충전 및 태양광 통합에 충분합니다. ISO 15118 플러그 앤 차지 및 양방향 V2G 충전에 필요한 <strong>OCPP 2.0.1</strong>은 이제 막 호주 시장에 등장하기 시작했습니다 (2024–2025).
            </p>
            <p style={{ margin: '6px 0 0', fontSize: 13 }}>
              AEMO와 ARENA는 가정용 충전기를 유연한 부하로 간주하여 제어 프로토콜로 OCPP를 사용하는 스마트 충전 시범 사업을 운영했습니다. 이는 호주에서 향후 진행될 전력망 상호작용 EV 충전 프로그램에서 OCPP가 표준이 될 가능성이 높음을 의미합니다. 충전기를 선택할 때, 현재의 태양광 충전 요구 사항에는 OCPP 1.6 지원으로 충분하지만, 미래의 V2G 또는 수요 반응(Demand response) 프로그램 참여를 고려한다면 OCPP 2.0.1을 우선적으로 고려하는 것이 좋습니다.
            </p>
          </div>

          {userLevel === 'beginner' && (
            <div style={{ backgroundColor: '#1a2e1a', borderRadius: 6, padding: 12, border: '1px solid #2a3e2a' }}>
              <strong style={{ color: '#9ece6a' }}>초급 팁:</strong> OCPP는 EV 충전기가 에너지 관리 시스템과 대화하는 '언어'라고 생각하면 됩니다. 시스템이 "지금 3 kW를 써도 돼"라고 말하면 충전기가 그 명령에 따라 실시간으로 태양광 발전량에 맞춰 출력 값을 조절합니다.
            </div>
          )}

          {userLevel === 'advanced' && (
            <>
              <p style={{ margin: '12px 0 8px' }}>
                <strong style={{ color: '#bb9af7' }}>메시지 구조 (OCPP 1.6 JSON):</strong>
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
                <strong style={{ color: '#bb9af7' }}>스마트 충전 스택 (우선순위 낮음부터 높음 순):</strong>
              </p>
              <pre style={codeBlockStyle}>
                {`1. ChargePointMaxProfile  (사이트 수준 제한)
2. TxDefaultProfile       (커넥터 기본값)
3. TxProfile              (트랜잭션별 개별 재정의)

적용되는 제한 = min(모든 적용 가능한 프로필)
스택 레벨: 동일한 목적 내에서는 stackLevel이 높은 것이 낮은 것을 재정의함`}
              </pre>
              <p style={{ margin: '8px 0 8px' }}>
                <strong style={{ color: '#bb9af7' }}>ISO 15118 통합 (OCPP 2.0.1):</strong>
              </p>
              <ul style={{ margin: '0 0 0', paddingLeft: 20 }}>
                <li style={{ marginBottom: 4 }}>
                  플러그 앤 차지: TLS 인증서를 통한 자동 인증 — RFID 불필요
                </li>
                <li style={{ marginBottom: 4 }}>
                  조정된 CSMS 제어를 통해 양방향 전력 전송(V2G) 가능
                </li>
                <li style={{ marginBottom: 4 }}>
                  15118-20은 세밀한 전력 관리를 위한 예약 및 동적 제어 모드를 추가함
                </li>
              </ul>
            </>
          )}
        </>
      ),
    },
    {
      key: 'other',
      title: '기타 에너지 프로토콜',
      accentColor: '#9ece6a',
      advancedOnly: true,
      content: (_userLevel) => (
        <>
          <div style={{ marginBottom: 16 }}>
            <h4 style={{ margin: '0 0 8px', color: '#e0af68' }}>SunSpec</h4>
            <p style={{ margin: '0 0 6px' }}>
              태양광 및 저장 장치를 위해 Modbus를 기반으로 구축된 표준화된 데이터 모델입니다. 레지스터 맵을 일관되게 정의하므로, SunSpec을 준수하는 인버터는 제조사에 관계없이 동일한 레지스터에 동일한 데이터를 노출합니다.
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
              유럽의 스마트 홈 에너지 통신 표준입니다. IP 네트워크 상에서 SPINE (Smart Premises Interoperable Neutral-message Exchange) 프로토콜을 사용합니다. 클라우드 의존성 없이 기기 간(Device-to-device) 직접 통신을 하도록 설계되었습니다.
            </p>
            <ul style={{ margin: '0 0 0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                사용 사례: EV 충전 조정, 히트펌프 제어, 배터리 관리
              </li>
              <li style={{ marginBottom: 4 }}>
                유럽의 주요 제조사(SMA, Viessmann, BMW, Porsche)가 지원
              </li>
              <li style={{ marginBottom: 4 }}>
                기기 간 협상 가능: 충전기가 전력을 요청하면 HEMS가 승인/제한
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: 16 }}>
            <h4 style={{ margin: '0 0 8px', color: '#f7768e' }}>OpenADR</h4>
            <p style={{ margin: '0 0 6px' }}>
              Open Automated Demand Response — 전력 회사가 건물이나 기기에 수요 반응(DR) 신호를 보낼 수 있게 해줍니다. 전력 수요가 최고조에 달할 때 전력망 안정화를 위해 사용됩니다.
            </p>
            <ul style={{ margin: '0 0 0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                VTN (Virtual Top Node)이 VEN (Virtual End Node) 기기에 DR 이벤트를 보냅니다.
              </li>
              <li style={{ marginBottom: 4 }}>
                신호에는 가격, 부하 수준 또는 단순한 이벤트 알림이 포함됩니다.
              </li>
              <li style={{ marginBottom: 4 }}>
                주로 상업용 건물과 통합된 주거용 기기 그룹에 사용됩니다.
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: 16 }}>
            <h4 style={{ margin: '0 0 8px', color: '#bb9af7' }}>MQTT</h4>
            <p style={{ margin: '0 0 6px' }}>
              IoT 에너지 모니터링에 널리 사용되는 가벼운 발행-구독(publish-subscribe) 메시징 프로토콜입니다. 에너지 전용은 아니지만 에너지 데이터를 전송하는 데 매우 자주 쓰입니다.
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
              Apple, Google, Amazon, Samsung 등이 뒷받침하는 떠오르는 스마트 홈 표준입니다. 주로 조명, 잠금 장치, 센서 등 일반 스마트 기기에 초점을 맞춰 왔으나 점차 에너지 관리 분야로 사용 범위가 넓어지고 있습니다.
            </p>
            <ul style={{ margin: '0 0 0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                <strong>Matter:</strong> 애플리케이션 계층 프로토콜입니다. 새로운 버전에서 에너지 관리 기기 유형이 추가되고 있습니다.
              </li>
              <li style={{ marginBottom: 4 }}>
                <strong>Thread:</strong> 저전력 메시 네트워킹 프로토콜 (IP 기반). Matter 기기를 위한 네트워크 계층을 제공합니다.
              </li>
              <li style={{ marginBottom: 4 }}>
                향후 소비자 스마트 홈 생태계 내에서 EV 충전기, 배터리, 태양광 인버터의 표준화된 통신 잠재력을 가지고 있습니다.
              </li>
            </ul>
          </div>
        </>
      ),
    },
  ],

  // ── Strategies ──
  strategies_title: '에너지 최적화 전략',
  strategies_subtitle: '가정용 에너지 시스템을 최대한 활용하는 방법입니다.',
  strategies_advanced_extra: ' 고급 난이도에서는 HEMS 아키텍처 및 전력망 서비스(Grid services)를 다룹니다.',

  strategies_sections: [
    {
      key: 'self-consumption',
      title: '태양광 자가 소비 최적화',
      accentColor: '#9ece6a',
      content: (_userLevel) => (
        <>
          <p style={{ margin: '0 0 10px' }}>
            자가 소비(Self-consumption)는 직접 생산한 태양광 전기를 전력망으로 송전하지 않고 집에서 직접 사용하는 것을 의미합니다. 발전차액지원금(FiT)이 수전 요금보다 낮기 때문에 이 방식이 항상 재정적으로 훨씬 이득이 됩니다.
          </p>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>태양광 잉여 전력 사용 우선순위:</strong>
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
            1. 가정 내 부하 (가장 먼저 사용됨)
            <br />
            2. 가정용 배터리 (저녁 사용을 위해 저장)
            <br />
            3. EV 충전 (큰 규모의 유연한 부하)
            <br />
            4. 히트펌프 / 온수기 (열 에너지 저장)
            <br />
            5. 전력망 송전 (최후의 수단, 수익 가치 가장 낮음)
          </div>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>자가 소비가 중요한 이유:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              일반적인 수전 요금: $0.25–$0.45/kWh
            </li>
            <li style={{ marginBottom: 4 }}>
              일반적인 송전(FiT) 요금: $0.05–$0.12/kWh
            </li>
            <li style={{ marginBottom: 4 }}>
              자가 소비하는 모든 kWh는 단순히 낮은 송전 수익을 얻는 대신 가장 비싼 수전 요금 전체를 절약하게 해줍니다.
            </li>
            <li style={{ marginBottom: 4 }}>
              자가 소비율을 30%에서 70%로 높이면 태양광으로 인한 비용 절감 효과가 두 배가 될 수 있습니다.
            </li>
          </ul>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>계절별 전략:</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 10 }}>
            <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, borderLeft: '3px solid #7aa2f7' }}>
              <strong style={{ color: '#7aa2f7' }}>겨울</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                태양광 발전량이 적습니다. 한 와트라도 직접 사용하는 데 집중하세요. 송전량을 최소화해야 합니다. 히트펌프 가동이 잦아 자연스럽게 태양광 전력을 많이 소비하게 됩니다. 배터리 충방전 사이클 폭이 얕아집니다.
              </p>
            </div>
            <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, borderLeft: '3px solid #e0af68' }}>
              <strong style={{ color: '#e0af68' }}>여름</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                태양광 전력이 넘쳐납니다. 배터리, EV, 온수기 등 충전할 수 있는 모든 것을 충전하세요. 전력을 많이 쓰는 가전제품(식기세척기, 세탁기 등)은 태양광 발전이 활발한 시간대에 돌리도록 예약하세요.
              </p>
            </div>
          </div>

          <div style={{ backgroundColor: '#1a2e1a', borderRadius: 6, padding: 12, margin: '10px 0', border: '1px solid #2a3e2a' }}>
            <strong style={{ color: '#9ece6a' }}>팁:</strong>{' '}
            태양광 발전 피크 시간대(오전 10시~오후 3시)에 가전제품을 가동하는 것은 추가적인 장비 없이 자가 소비율을 높일 수 있는 가장 간단한 방법입니다.
          </div>
        </>
      ),
    },
    {
      key: 'ev-modes',
      title: '동적 EV 충전 모드',
      accentColor: '#7aa2f7',
      content: (_userLevel) => (
        <>
          <p style={{ margin: '0 0 12px' }}>
            스마트 EV 충전기는 비용 절감, 빠른 충전, 또는 둘의 밸런스 등 사용자의 우선순위에 따라 다양한 모드로 작동할 수 있습니다. 충전기는 실시간 에너지 데이터에 맞춰 동적으로 전력 소모량을 조절합니다.
          </p>

          <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, marginBottom: 8, borderLeft: '3px solid #9ece6a' }}>
            <strong style={{ color: '#9ece6a', fontSize: 14 }}>Solar Only (태양광 전용)</strong>
            <p style={{ margin: '6px 0 8px', fontSize: 13 }}>잉여 태양광 전력이 있을 때만 충전합니다. 잉여 전력이 최소 기준치 아래로 떨어지면 충전을 일시 중지합니다.</p>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13 }}>
              <li style={{ marginBottom: 3 }}>가장 적합한 대상: 최대 비용 절감 목적, km당 전기료를 최저로 유지하고 싶을 때</li>
              <li style={{ marginBottom: 3 }}>분전반에 CT clamp나 에너지 모니터가 반드시 있어야 합니다 — 그렇지 않으면 충전기가 잉여 전력을 파악할 수 없어요</li>
              <li style={{ marginBottom: 3 }}>CT clamp나 에너지 모니터 데이터를 사용해 실시간으로 태양광 잉여 전력을 측정합니다</li>
              <li style={{ marginBottom: 3 }}>최소 충전 한계치: 일반적으로 1.4 kW (단상 6A × 230V)</li>
              <li style={{ marginBottom: 3 }}>6A 미만에서는 대부분의 EV가 충전을 받지 않으므로 충전기가 일시 중지해야 합니다</li>
              <li style={{ marginBottom: 3 }}>하루 종일 태양광 곡선에 따라 충전 속도가 변합니다</li>
              <li style={{ marginBottom: 3 }}>흐린 날이나 겨울에는 EV를 완전히 충전하지 못할 수도 있습니다</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, marginBottom: 8, borderLeft: '3px solid #e0af68' }}>
            <strong style={{ color: '#e0af68', fontSize: 14 }}>Eco / Hybrid (절약 / 하이브리드)</strong>
            <p style={{ margin: '6px 0 8px', fontSize: 13 }}>태양광 잉여 전력을 최우선으로 사용하되, 충전이 시작되면 최소 충전 속도를 유지하기 위해 전력망에서 전력을 보충합니다.</p>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13 }}>
              <li style={{ marginBottom: 3 }}>가장 적합한 대상: 비용 절약과 편리함의 밸런스가 필요할 때</li>
              <li style={{ marginBottom: 3 }}>세션이 시작되면 항상 최소 6A(1.4 kW)를 유지합니다</li>
              <li style={{ marginBottom: 3 }}>태양광 잉여 전력이 먼저 사용되고, 부족한 만큼만 전력망에서 보충됩니다</li>
              <li style={{ marginBottom: 3 }}>태양광 잉여량이 늘어나면 그에 맞춰 모든 잉여 전력을 사용하도록 속도를 높입니다</li>
              <li style={{ marginBottom: 3 }}>전력망에서만 충전할 때보다 보통 50–70%를 절약할 수 있습니다</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, marginBottom: 8, borderLeft: '3px solid #f7768e' }}>
            <strong style={{ color: '#f7768e', fontSize: 14 }}>Fast / Boost (빠름 / 부스트)</strong>
            <p style={{ margin: '6px 0 8px', fontSize: 13 }}>태양광 가용 여부와 무관하게 최대 출력으로 충전합니다. 필요에 따라 전력망에서 전력을 끌어옵니다.</p>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13 }}>
              <li style={{ marginBottom: 3 }}>가장 적합한 대상: 차량 충전을 최대한 빨리 끝내야 할 때</li>
              <li style={{ marginBottom: 3 }}>충전기의 정격 최대 전력(예: 7.4 kW 또는 22 kW)을 모두 사용합니다</li>
              <li style={{ marginBottom: 3 }}>태양광 최적화를 신경 쓰지 않고 오직 속도만 우선합니다</li>
              <li style={{ marginBottom: 3 }}>잘못 관리하면 최대 전력 수요(Demand charges)를 초과하거나 전력망 연결 과부하를 유발할 수 있습니다</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, marginBottom: 8, borderLeft: '3px solid #bb9af7' }}>
            <strong style={{ color: '#bb9af7', fontSize: 14 }}>Scheduled (예약됨)</strong>
            <p style={{ margin: '6px 0 8px', fontSize: 13 }}>지정된 시간대, 주로 야간 오프피크 요금 시간대에만 충전합니다.</p>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13 }}>
              <li style={{ marginBottom: 3 }}>가장 적합한 대상: 시간대별(Time-of-use) 요금제 가입자</li>
              <li style={{ marginBottom: 3 }}>가장 흔한 예약: 요금이 가장 저렴한 밤 11시 ~ 아침 6시에 충전</li>
              <li style={{ marginBottom: 3 }}>낮 동안의 태양광 충전 모드와 결합하여 하이브리드로 사용할 수도 있습니다</li>
              <li style={{ marginBottom: 3 }}>차량이 필요할 때 완충되어 있도록 출발 시간을 설정합니다</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, marginBottom: 8, borderLeft: '3px solid #73daca' }}>
            <strong style={{ color: '#73daca', fontSize: 14 }}>Target SoC (목표 충전량 설정)</strong>
            <p style={{ margin: '6px 0 8px', fontSize: 13 }}>출발 시간과 목표 배터리 퍼센트(SoC)를 설정합니다. 옵티마이저가 그 목표에 도달하기 위한 가장 저렴한 방법을 스스로 결정합니다.</p>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13 }}>
              <li style={{ marginBottom: 3 }}>가장 적합한 대상: 동적 요금제 또는 태양광 예측 기능을 사용하는 고급 사용자</li>
              <li style={{ marginBottom: 3 }}>고려 사항: 현재 SoC, 목표 SoC, 출발 시간, 태양광 예측, 요금제 일정</li>
              <li style={{ marginBottom: 3 }}>가장 저렴한 충전 시간대를 자동으로 선택합니다</li>
              <li style={{ marginBottom: 3 }}>여러 기간에 걸쳐 충전을 분할할 수도 있습니다 (예: 한낮 태양광 충전 + 야간 오프피크 충전)</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#2e2a1a', borderRadius: 6, padding: 12, margin: '10px 0', border: '1px solid #3e3a2a' }}>
            <strong style={{ color: '#e0af68' }}>중요:</strong>{' '}
            대부분의 전기차는 각 상(phase)당 최소 6A(단상 1.4 kW, 삼상 4.1 kW)를 입력받아야 충전이 가능합니다. 이 값보다 낮으면 충전기가 아무리 전력을 보내도 차가 충전을 거부합니다. 따라서 스마트 충전기는 태양광 잉여 전력에 맞춰 조절할 때 이 한계치를 아주 세밀하게 관리해야 해요.
          </div>
        </>
      ),
    },
    {
      key: 'battery',
      title: '배터리 관리 전략',
      accentColor: '#e0af68',
      content: (_userLevel) => (
        <>
          <p style={{ margin: '0 0 12px' }}>
            가정용 배터리는 제어 전략이 어떻게 설정되느냐에 따라 그 쓸모가 결정됩니다. 요금제 구조, 태양광 시스템 크기, 소비 패턴에 맞춰 올바른 접근 방식을 선택해야 해요.
          </p>

          <div style={{ marginBottom: 14 }}>
            <h4 style={{ margin: '0 0 6px', color: '#9ece6a' }}>
              태양광 자가 소비 (Solar Self-Consumption)
            </h4>
            <p style={{ margin: '0 0 6px' }}>
              가장 일반적인 전략입니다. 낮 동안 잉여 태양광을 저장했다가 저녁과 밤에 방전하여 사용합니다.
            </p>
            <ul style={{ margin: '0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                태양광 발전량이 집안 소비량을 초과할 때 배터리가 충전됩니다.
              </li>
              <li style={{ marginBottom: 4 }}>
                집안 소비량이 태양광 발전량을 초과할 때(저녁, 밤) 배터리가 방전됩니다.
              </li>
              <li style={{ marginBottom: 4 }}>
                일반적인 시스템에서 자가 소비율을 30%에서 70% 수준으로 크게 끌어올려 줍니다.
              </li>
              <li style={{ marginBottom: 4 }}>
                밤새 사용하는 전력량(8–12 kWh)을 감당할 수 있는 크기의 배터리에 가장 적합합니다.
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: 14 }}>
            <h4 style={{ margin: '0 0 6px', color: '#7aa2f7' }}>
              시간대별 요금 차익 거래 (Time-of-Use Arbitrage)
            </h4>
            <p style={{ margin: '0 0 6px' }}>
              전기 요금이 쌀 때 배터리를 충전하고, 비쌀 때 방전하여 사용하는 방식입니다.
            </p>
            <ul style={{ margin: '0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                오프피크 요금일 때 밤새 배터리를 충전합니다 (예: $0.10/kWh).
              </li>
              <li style={{ marginBottom: 4 }}>
                피크 요금 시간대에 배터리를 방전합니다 (예: $0.40/kWh).
              </li>
              <li style={{ marginBottom: 4 }}>
                왕복 충방전 손실을 고려할 때, 피크 요금이 오프피크 요금보다 대략 3배 이상 비싸야 수익성이 있습니다.
              </li>
              <li style={{ marginBottom: 4 }}>
                이익을 극대화하기 위해 태양광 자가 소비 전략과 함께 사용할 수 있습니다.
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: 14 }}>
            <h4 style={{ margin: '0 0 6px', color: '#f7768e' }}>피크 쉐이빙 (Peak Shaving)</h4>
            <p style={{ margin: '0 0 6px' }}>
              전력망에서 끌어오는 전력(수전량)을 특정 한계치 아래로 제한하여 수요 요금(Demand charges) 폭탄이나 연결 과부하를 방지합니다.
            </p>
            <ul style={{ margin: '0', paddingLeft: 20 }}>
              <li style={{ margin: '0 0 4px' }}>
                전력 소비량이 설정된 한계치를 초과하려고 할 때 배터리가 방전하여 그 초과분을 메워줍니다.
              </li>
              <li style={{ marginBottom: 4 }}>
                일반적인 한계치: 전력망 수전량을 5 kW 미만으로 유지.
              </li>
              <li style={{ marginBottom: 4 }}>
                EV 충전과 집안 부하를 동시에 사용할 때 메인 퓨즈 용량을 초과할 위험이 있는 경우 유용합니다.
              </li>
              <li style={{ marginBottom: 4 }}>
                일부 요금제는 가장 많이 전기를 끌어쓴 15분 단위 피크 구간에 대해 추가 요금을 매기는데, 피크 쉐이빙으로 이를 방지할 수 있습니다.
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ margin: '0 0 6px', color: '#e0af68' }}>
              백업 / 예비용 전력 (Backup / Reserve)
            </h4>
            <p style={{ margin: '0 0 6px' }}>
              정전에 대비하여 항상 최소 배터리 잔량(SoC)을 확보해 두는 방식입니다.
            </p>
            <ul style={{ margin: '0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                일반적인 상황에서는 배터리가 이 예비 수준(예: 20%) 아래로 방전되지 않도록 제한을 설정합니다.
              </li>
              <li style={{ marginBottom: 4 }}>
                전력망 정전 시 인버터가 백업을 지원한다면 배터리가 집안의 중요 장비들에 전력을 공급합니다.
              </li>
              <li style={{ marginBottom: 4 }}>
                트레이드오프: 예비 용량을 높게 잡을수록 평소 매일 사용할 수 있는 배터리 용량이 줄어듭니다.
              </li>
              <li style={{ marginBottom: 4 }}>
                일부 인버터는 자동 아일랜딩(전력망에서 스스로 차단되어 독립적으로 집에 전력을 공급하는 기능)을 지원합니다.
              </li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, margin: '10px 0', border: '1px solid #2a2a3e' }}>
            <strong style={{ color: '#7aa2f7' }}>참고:</strong>{' '}
            가장 훌륭한 전략은 여러 방식을 조합하는 것입니다. 낮에는 태양광 자가 소비를 하고, 저녁에는 시간대별 요금 차익 거래를 활용하며, 마음의 평화를 위해 약간의 백업 용량을 남겨두는 식이죠.
          </div>
        </>
      ),
    },
    {
      key: 'hems',
      title: '가정용 에너지 관리 시스템 (HEMS)',
      accentColor: '#bb9af7',
      advancedOnly: true,
      content: (_userLevel) => (
        <>
          <p style={{ margin: '0 0 10px' }}>
            HEMS(Home Energy Management System)는 집안의 모든 에너지 흐름을 최적화하는 중앙 컨트롤러입니다. 시스템 내의 모든 장치에서 데이터를 수집하고, 최적화 규칙을 적용하여 비용 절감, 자가 소비 극대화 또는 편안함을 위해 각 기기에 제어 명령을 보냅니다.
          </p>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>주요 통합 포인트:</strong>
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
            인버터 ←→ HEMS &nbsp;&nbsp;(Modbus TCP / SunSpec)
            <br />
            스마트 미터 ←→ HEMS &nbsp;&nbsp;(Modbus RTU / P1 포트)
            <br />
            EV 충전기 ←→ HEMS &nbsp;&nbsp;(OCPP 1.6/2.0.1)
            <br />
            배터리 ←→ HEMS &nbsp;&nbsp;(CAN 버스 / Modbus / 제조사 API)
            <br />
            히트펌프 ←→ HEMS &nbsp;&nbsp;(Modbus / SG Ready / EEBUS)
            <br />
            요금제 API ←→ HEMS &nbsp;&nbsp;(REST API / MQTT)
            <br />
            날씨 API ←→ HEMS &nbsp;&nbsp;(태양광 예측용 REST API)
          </div>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>의사 결정을 위한 입력 데이터:</strong>
          </p>
          <ul style={{ margin: '0 0 12px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>현재 태양광 생산량</strong> — 인버터나 CT clamp에서 측정한 실시간 데이터
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>태양광 예측</strong> — 날씨 기반으로 수 시간 또는 그날의 발전량 예상치
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>전기 요금</strong> — 현재 및 앞으로 적용될 시간대별 요금 또는 실시간 스팟 가격
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>EV 출발 시간</strong> — 차량이 출발할 시간과 설정된 목표 배터리 충전량(SoC)
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>배터리 SoC</strong> — 현재 배터리 잔량 및 사용 가능 용량
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>가정 소비 패턴</strong> — 과거 기록 및 예측된 전력 사용 프로파일
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>전력망 제약 조건</strong> — 송전 제한치, 메인 퓨즈 정격, 피크 요금 청구 기준
            </li>
          </ul>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>최적화 로직 예시:</strong>
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
            태양광_잉여량 = 태양광_생산량 - 가정_소비량
            <br />
            <br />
            if 태양광_잉여량 &gt; 0:
            <br />
            &nbsp;&nbsp;1. 배터리 충전 (최대 충전 속도까지)
            <br />
            &nbsp;&nbsp;2. 남은 잉여량 → EV 충전 (연결된 경우)
            <br />
            &nbsp;&nbsp;3. 남은 잉여량 → 온수 가열
            <br />
            &nbsp;&nbsp;4. 남은 잉여량 → 전력망 송전
            <br />
            <br />
            if 태양광_잉여량 &lt;= 0:
            <br />
            &nbsp;&nbsp;1. 배터리 방전 (요금이 비쌀 때)
            <br />
            &nbsp;&nbsp;2. 전력망에서 수전 (요금이 쌀 때)
            <br />
            &nbsp;&nbsp;3. EV 충전 일시 중지 (태양광 전용 모드일 때)
          </div>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>구현 옵션:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>상용 에너지 관리 시스템:</strong> 특정 인버터나 충전기 브랜드에 맞춰 통합된 전용 기기들입니다. 태양광 예측 및 요금 최적화 기능을 기본 포함하는 경우가 많습니다.
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Home Assistant:</strong> 훌륭한 에너지 대시보드와 대부분의 기기 통합 모듈을 지원하는 오픈소스 스마트 홈 플랫폼입니다. 사용자가 직접 사용자 정의 자동화를 만들 수 있습니다.
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Node-RED:</strong> Modbus 레지스터를 읽고, API를 호출하고, OCPP 명령을 보낼 수 있는 플로우 기반 프로그래밍 도구입니다. 맞춤형 에너지 관리 로직을 짜기에 아주 좋습니다.
            </li>
          </ul>

          <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, margin: '10px 0', border: '1px solid #2a2a3e' }}>
            <strong style={{ color: '#7aa2f7' }}>참고:</strong>{' '}
            좋은 HEMS는 지능적인 실시간 결정을 통해 태양광 패널과 배터리만 쓸 때보다 추가로 10~20%의 전기 요금을 더 절약해 줍니다.
          </div>
        </>
      ),
    },
    {
      key: 'grid-services',
      title: '전력망 서비스 및 수요 반응 (Demand Response)',
      accentColor: '#73daca',
      advancedOnly: true,
      content: (_userLevel) => (
        <>
          <p style={{ margin: '0 0 10px' }}>
            가정용 배터리와 EV는 단순히 에너지를 소비하는 기기가 아닙니다. 전력망 차원의 서비스에 참여하여 추가 수익을 얻는 동시에 국가 전체의 전력망을 안정화하는 데 기여할 수 있습니다.
          </p>

          <div style={{ marginBottom: 14 }}>
            <h4 style={{ margin: '0 0 6px', color: '#e0af68' }}>
              주파수 조절 (Frequency Regulation)
            </h4>
            <p style={{ margin: '0 0 6px' }}>
              전력망은 항상 50 Hz(일부 지역은 60 Hz)의 주파수를 정확히 유지해야 합니다. 배터리는 밀리초(ms) 단위로 전력을 주입하거나 흡수하여 이 주파수 균형을 맞추는 데 도움을 줄 수 있어요.
            </p>
            <ul style={{ margin: '0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                FCR (주파수 유지 예비력): 몇 초 이내의 자동 응답
              </li>
              <li style={{ marginBottom: 4 }}>
                양방향 인버터와 매우 빠르게 응답할 수 있는 배터리가 필요합니다.
              </li>
              <li style={{ marginBottom: 4 }}>
                일반적으로 개별 가정이 아니라 중개 사업자(Aggregator)를 통해 통합 관리됩니다.
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: 14 }}>
            <h4 style={{ margin: '0 0 6px', color: '#7aa2f7' }}>
              가상 발전소 (VPP, Virtual Power Plants)
            </h4>
            <p style={{ margin: '0 0 6px' }}>
              VPP는 가정에 분산된 수천 대의 배터리와 제어 가능한 부하를 하나로 묶어(통합하여), 마치 거대한 하나의 전통적인 발전소처럼 스케줄링하고 제어하는 가상의 발전소입니다.
            </p>
            <ul style={{ margin: '0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                배터리 제조사나 전력 소매 업체를 통해 VPP 프로그램에 가입할 수 있습니다.
              </li>
              <li style={{ marginBottom: 4 }}>
                전력망에 과부하가 걸리는 이벤트 발생 시, 중개 사업자가 배터리에 방전 명령을 보냅니다.
              </li>
              <li style={{ marginBottom: 4 }}>
                VPP 참여자는 배터리 사용을 허락한 대가로 현금이나 전기 요금 크레딧을 받습니다.
              </li>
              <li style={{ marginBottom: 4 }}>
                가정에서 쓸 전기가 부족하지 않도록 보통 배터리의 최소 잔량(SoC)을 설정해 둡니다.
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: 14 }}>
            <h4 style={{ margin: '0 0 6px', color: '#9ece6a' }}>
              V2G (Vehicle-to-Grid)
            </h4>
            <p style={{ margin: '0 0 6px' }}>
              V2G는 전기차가 자신의 배터리 전력을 다시 전력망으로 송전할 수 있게 하는 기술로, 사실상 자동차를 거대한 바퀴 달린 모바일 배터리로 탈바꿈시킵니다. 60 kWh의 EV 배터리는 10 kWh의 일반 가정용 배터리보다 훨씬 거대합니다.
            </p>
            <ul style={{ margin: '0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                양방향 충전기와 V2G를 지원하는 전기차가 필요합니다.
              </li>
              <li style={{ marginBottom: 4 }}>
                현재는 제한된 차종만 지원합니다 (예: CHAdeMO를 지원하는 닛산 리프, CCS를 지원하는 일부 최신 모델).
              </li>
              <li style={{ marginBottom: 4 }}>
                ISO 15118-20과 OCPP 2.0.1 프로토콜이 V2G를 완벽하게 뒷받침합니다.
              </li>
              <li style={{ marginBottom: 4 }}>
                배터리 노후화에 대한 우려가 있지만, 최신 EV 배터리는 얕은 충방전 사이클(Shallow cycling)을 훌륭하게 견뎌냅니다.
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ margin: '0 0 6px', color: '#f7768e' }}>
              V2H (Vehicle-to-Home)
            </h4>
            <p style={{ margin: '0 0 6px' }}>
              V2G와 비슷하지만 EV가 전력망으로 송전하는 대신 오직 집안에만 전력을 공급하는 방식입니다. 구현이 더 간단하고 대부분의 지역에서 전력 회사의 승인이 필요하지 않습니다.
            </p>
            <ul style={{ margin: '0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                정전이나 요금이 가장 비싼 시간대에 EV가 훌륭한 가정용 백업 배터리 역할을 수행합니다.
              </li>
              <li style={{ marginBottom: 4 }}>
                다음 날 출근을 위한 충전량을 유지하면서도 10–20 kWh 정도의 여유 전력을 집안에 공급할 수 있어요.
              </li>
              <li style={{ marginBottom: 4 }}>
                가정용 전용 배터리가 없는 주택에 특히 유용하고 가치가 높습니다.
              </li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#2e2a1a', borderRadius: 6, padding: 12, margin: '10px 0', border: '1px solid #3e3a2a' }}>
            <strong style={{ color: '#e0af68' }}>중요:</strong>{' '}
            V2G나 VPP 프로그램에 참여하면 배터리 보증에 영향을 줄 수 있습니다. 가입 전에 반드시 제조사의 보증 약관을 확인하세요. 대부분의 프로그램은 배터리 성능 저하를 방지하기 위해 추가 사이클 횟수를 제한하고 있어요.
          </div>
        </>
      ),
    },
  ],
};

export default ko;
