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

export const ja: Translations = {
  // ── Nav ──
  nav_title: '家庭エネルギーシミュレーター',
  nav_simulator: 'シミュレーター',
  nav_scenarios: 'シナリオ',
  nav_learn: '学習',
  nav_protocols: 'プロトコル',
  nav_strategies: '最適化戦略',
  nav_level: 'レベル:',
  nav_level_beginner: '初級',
  nav_level_advanced: '上級',

  // ── Footer ──
  footer_text: '家庭エネルギーシミュレーター — 住宅用エネルギーシステムのインタラクティブ学習ツール',

  // ── Theme ──
  theme_light: 'ライト',
  theme_dark: 'ダーク',
  theme_auto: '自動',

  // ── SystemSummary ──
  summary_solar_generation: '太陽光発電量',
  summary_home_consumption: '家庭消費量',
  summary_grid_import: '系統買電',
  summary_grid_export: '系統売電',
  summary_battery: '蓄電池',
  summary_battery_idle: '待機中',
  summary_battery_charging: '充電中',
  summary_battery_discharging: '放電中',
  summary_ev: 'EV',
  summary_ev_full: '満充電',
  summary_ev_not_charging: '充電停止中',
  summary_self_consumption: '自家消費率',
  summary_self_sufficiency: '自給自足率',

  // ── SessionStatsPanel ──
  stats_session_totals: 'セッション合計',
  stats_press_play: '— 再生ボタンを押すと累計が始まります',
  stats_reset: 'リセット',
  stats_solar_generated: '太陽光発電量',
  stats_self_used: '自家消費',
  stats_exported: '売電',
  stats_grid_imported: '系統買電量',
  stats_cost: '費用:',
  stats_grid_exported: '系統売電量',
  stats_earned: '収入:',
  stats_solar_value: '太陽光の価値',
  stats_avoided_import_fit: '買電回避額 + FiT収入',
  stats_net_grid_cost: '系統利用純費用',
  stats_net_credit: '純利益（売電収入が買電費用を上回っている）',
  stats_import_minus_fit: '買電費用 − FiT収入',
  stats_home_consumed: '家庭消費量',
  stats_total_load: '総負荷（EV含む）',
  stats_fit: 'FiT',

  // ── SimulationControls ──
  sim_pause: '一時停止',
  sim_play: '再生',
  sim_speed: '速度',
  sim_time: '時刻:',
  sim_clouds: '雲量:',
  sim_season: '季節',
  sim_temperature: '気温',
  sim_spring: '春',
  sim_summer: '夏',
  sim_autumn: '秋',
  sim_winter: '冬',

  // ── ComponentEditor ──
  editor_enabled: '有効',
  editor_disabled: '無効',
  editor_remove_component: 'コンポーネントを削除',
  editor_power_override: '出力オーバーライド',

  // Type labels
  type_grid: '電力系統',
  type_smart_meter: 'スマートメーター',
  type_grid_meter: '系統メーター（NMI）',
  type_energy_monitor: 'エネルギーモニター（CT）',
  type_main_switchboard: '主分電盤',
  type_solar_panels: 'ソーラーパネル',
  type_inverter: 'インバーター（パワコン）',
  type_battery: '蓄電池',
  type_ev_charger: 'EV充電器',
  type_home_load: '家庭負荷',
  type_heat_pump: 'ヒートポンプ',

  // Field labels
  field_panel_count: 'パネル枚数',
  field_panel_wattage: 'パネル出力',
  field_roof_angle: '屋根角度',
  field_capacity: '容量',
  field_current_soc: '現在のSOC',
  field_max_charge_rate: '最大充電速度',
  field_max_discharge_rate: '最大放電速度',
  field_max_current: '最大電流',
  field_phases: '相数',
  field_phase_single: '単相',
  field_phase_three: '三相',
  field_voltage: '電圧',
  field_charging_standard: '充電規格',
  field_charging_mode: '充電モード',
  field_is_charging: '充電中',
  field_ev_battery: 'EVバッテリー（初期%）',
  field_ev_capacity: 'EV容量',
  field_efficiency: '変換効率',
  field_max_output: '最大出力',
  field_hybrid_mode: 'ハイブリッドモード',
  field_grid_export_limit: '売電制限',
  field_feed_in_tariff: '売電単価（FiT）',
  field_import_tariff: '買電単価',
  field_base_load: 'ベース負荷',
  field_cop_rating: 'COP値',

  // Charging modes
  mode_fast: '急速',
  mode_eco: 'エコ',
  mode_solar_only: 'ソーラーオンリー',
  mode_scheduled: 'スケジュール',

  // Info blurbs
  info_grid_meter: 'Ausgrid等の配電事業者（DNSP）が建物の境界に設置するNMIメーターです。買電・売電を記録して課金に使用し、売電制限ルール（例: Ausgridエリアでは5 kW）を設定します。利用者が直接読み取ったり制御したりすることはできません。',
  info_energy_monitor: '利用者側のCTクランプモニター（例: Shelly EM、Emporia Vue）で、主分電盤に設置します。リアルタイムの太陽光余剰電力測定を可能にし、ソーラーオンリーEV充電やインバーターのゼロエクスポート制御に必要です。',
  info_switchboard: '家庭内の主交流配電盤です。すべてのAC負荷（家庭回路、EV充電器、ヒートポンプ）がここに接続されます。インバーターのAC出力と系統接続の両方がこの配電盤に給電します。',

  // ── AddComponentPanel ──
  add_component: 'コンポーネントを追加',
  add_switchboard: '分電盤',

  // ── SetupToolbar ──
  setup_label: '設定',
  setup_save_json: 'JSONを保存',
  setup_load_json: 'JSONを読み込み',
  setup_share_url: 'URLを共有',
  setup_reset: 'リセット',
  setup_downloaded: '設定をダウンロードしました',
  setup_invalid_file: '無効な設定ファイル — JSONの解析に失敗しました',
  setup_loaded: '読み込み完了:',
  setup_url_copied: '共有URLをクリップボードにコピーしました',
  setup_reset_confirm: 'デフォルトシステムにリセットしますか？現在の設定は破棄されます。',
  setup_reset_done: 'デフォルトにリセットしました',
  setup_auto_saved: 'ローカルに自動保存済み',
  setup_auto_saved_tooltip: '設定はこのブラウザのローカルストレージに自動保存されます',

  // ── ScenariosSection ──
  scenarios_title: 'シナリオ',
  scenarios_description: 'オーストラリアの実際の住宅構成を事前設定済みで、すぐに探索できます。シナリオを読み込んでシステムの動作を確認し、スライダーの調整やコンポーネントの有効化、シミュレーションの実行でトレードオフを理解しましょう。',
  scenarios_active: '有効',
  scenarios_goal: '目標',
  scenarios_context: 'オーストラリアの背景',
  scenarios_what_unlocks: 'この構成で何が可能になるか',
  scenarios_what_setup_unlocks: 'この構成で可能になること',
  scenarios_load: 'シナリオを読み込む →',
  scenarios_currently_loaded: '現在読み込み中',
  scenarios_tip_label: 'ヒント: ',
  scenarios_tip: 'シナリオを読み込んだ後、シミュレータータブに切り替えてリアルタイムのシステム図と電力フローを確認してください。コンポーネント追加パネルでデバイスの追加・削除、学習タブで各コンポーネントの役割を理解できます。',

  // ── Scenario preset strings ──
  scenario_solar_only_name: 'ソーラーのみ — 電気代を削減',
  scenario_solar_only_tagline: 'エントリーレベルの太陽光発電、蓄電池なし',
  scenario_solar_only_description: '6.6 kWのパネルと5 kWインバーターを持つ新しい太陽光発電オーナー。蓄電池もEVもなし。日中の家電使用を太陽光発電時間帯にシフトし、残りを売電することが目標。',
  scenario_solar_only_goal: '日中の自家消費を最大化して電気代を削減する。',
  scenario_solar_only_context: 'Ausgridエリア。5 kWの売電制限が適用される。FiT（売電単価）は低い（約5¢/kWh）ため、売電より自家消費の方がはるかに価値が高い。',

  scenario_solar_battery_name: 'ソーラー + 蓄電池 — 夜間の電気代をゼロに',
  scenario_solar_battery_tagline: '太陽光を蓄電して夕方に使用',
  scenario_solar_battery_description: '最も一般的なアップグレードパス。10 kWhの蓄電池が日中の余剰太陽光を貯めて、夕方から夜間にかけて家庭に電力を供給し、系統からの買電をほぼゼロにする。',
  scenario_solar_battery_goal: '蓄電した太陽光で夕方・夜間の消費をカバーする。自給自足率80%以上を目指す。',
  scenario_solar_battery_context: '蓄電池がなければ、太陽光の60〜70%が低い売電単価で売電される可能性がある。10 kWhの蓄電池があれば、晴れた日にはほぼ系統買電ゼロを達成できる。',

  scenario_solar_ev_name: 'ソーラー + EV — 太陽光で無料充電',
  scenario_solar_ev_tagline: '太陽光の余剰電力でEVを充電',
  scenario_solar_ev_description: '日中に太陽光で車を充電したいEVオーナー。EV充電器は分電盤の専用32A回路に接続され、インバーターには直接つながらない。消費者側のエネルギーモニター（CTクランプ）により、充電器がリアルタイムの太陽光余剰を検知して出力を上下に調整できる。',
  scenario_solar_ev_goal: '余剰太陽光でEVを無料充電する。EV充電に系統電力を使わないようにする。',
  scenario_solar_ev_context: 'EV充電器は主分電盤上にあり、分電盤に供給されるもの（太陽光、蓄電池、または系統）から電力を引く。CTクランプが系統接続を監視し、太陽光余剰によりメーターがゼロインポートになると充電器が出力を上げる。CTクランプやエネルギーモニターがなければ「ソーラーオンリー」充電は不可能。',

  scenario_full_system_name: 'フルシステム — ソーラー + 蓄電池 + EV',
  scenario_full_system_tagline: 'オフグリッドに近い完全な家庭システム',
  scenario_full_system_description: '多くの住宅オーナーが目指す構成：ソーラーパネル、ハイブリッドインバーター、家庭用蓄電池、スマートEV充電器をエネルギーモニターで統合管理する。太陽光を最優先で使い、余剰を蓄電池に貯め、蓄電池でEVを夜間充電し、必要な時だけ系統を利用する。',
  scenario_full_system_goal: '自給自足率90%以上を達成する。日中は太陽光、夕方は蓄電池、系統はバックアップとしてのみ使用。',
  scenario_full_system_context: 'コンポーネント間の相互作用が最も重要となるシナリオ。系統メーターは建物境界での正味電力フローを計測する。エネルギーモニターがHEMSにリアルタイムデータを提供し、4つのデバイス全体でスマートな判断を可能にする。',

  scenario_zero_export_name: 'ゼロエクスポート — 集合住宅 / 埋め込みネットワーク',
  scenario_zero_export_tagline: '売電禁止 — すべてのワットをオンサイトで使用',
  scenario_zero_export_description: '一部の住宅は埋め込みネットワーク（マンション管理組合、新規住宅団地）に所属するか、配電事業者（DNSP）による売電禁止制限を受けている。太陽光のすべてのワットをオンサイトで消費または蓄電しなければならない。CTクランプのフィードバックを使ってインバーターがリアルタイムに出力を絞る必要がある。',
  scenario_zero_export_goal: '太陽光を100%オンサイトで使用する。蓄電池が余剰を吸収し、蓄電池が満充電ならインバーターが出力を絞る。',
  scenario_zero_export_context: 'ゼロエクスポートモードはインバーターの設定で構成し、系統接続のCTクランプがリアルタイムフィードバックを提供する。ここではエネルギーモニターが不可欠で、これがなければインバーターは出力を絞るタイミングを判断できない。',

  scenario_ev_no_ct_name: 'EV充電 — CTクランプなし（手動設定）',
  scenario_ev_no_ct_tagline: 'ソーラー + EVだがエネルギーモニターなし — 制御が限定的',
  scenario_ev_no_ct_description: '太陽光発電はあるがCTクランプやエネルギーモニターがないEVオーナー。リアルタイムの太陽光余剰データがなければ、充電器は太陽光の発電量に動的に追従できない。住宅オーナーは固定の充電電流を手動で設定する必要があり、通常6〜10Aで太陽光出力に「おおよそ」収まるように設定する。太陽光が低下（曇り、午後）すると系統が自動的に補い、住宅オーナーにはそれを防ぐ手段がない。',
  scenario_ev_no_ct_goal: 'CTクランプがないことのコストを理解する。ここでの系統買電量をソーラー + EV（CTクランプあり）シナリオと比較して、金額の差を確認する。',
  scenario_ev_no_ct_context: 'CTクランプがなければ「ソーラーオンリー」や「エコ」モードなどのスマート充電機能は使えない。充電器は太陽光の状況に関係なく、ユーザーが設定した固定電流で動作する。CTクランプ（Shelly EMやEmporia Vueで$150〜300程度）を設置すれば動的ソーラー充電が可能になり、数ヶ月で元が取れる。',

  // ── Component unlock strings ──
  unlock: {
    gridMeter: [
      '課金用の買電・売電量を記録（NMIメーター）',
      '売電制限ルールを設定（例: Ausgridエリアで5 kW）',
      '小売事業者からのFiT（売電単価）クレジットを有効化',
    ],
    energyMonitor: [
      'HEMSへのリアルタイム太陽光余剰の可視化',
      'ソーラーオンリーEV充電に必要（CTクランプフィードバック）',
      'インバーターのゼロエクスポート制御に必要',
      'スマートな蓄電池制御判断を可能にする',
    ],
    mainSwitchboard: [
      'AC配電ハブ — すべての負荷がここに接続',
      'EV充電器は分電盤から給電（インバーターからではない）',
      '太陽光（インバーター経由）と系統の両方が分電盤に給電',
    ],
    inverter: [
      '太陽光のDCを家庭用ACに変換',
      'ハイブリッドモード: DC結合蓄電池の充電を管理',
      'ゼロエクスポートモード: CTクランプのフィードバックで出力を制御',
    ],
    battery: [
      '余剰太陽光を蓄電して夕方・夜間に使用',
      '自給自足率を晴れた日に約35%から約80%以上に向上',
      '夜間の安い系統電力で充電することも可能',
    ],
    evCharger: [
      'OCPP 2.0.1: スマート充電、動的負荷管理',
      'ソーラーオンリーモード: 太陽光余剰が最低値を超えた時のみ充電（CTクランプ必要）',
      'スケジュールモード: 最も安い深夜料金の時間帯に充電',
    ],
  },

  // ── Education ──
  learn_title: '学習: 家庭エネルギーシステム',
  learn_beginner_subtitle: '家庭エネルギーを理解するための基礎知識。上級に切り替えるとより技術的な内容が表示されます。',
  learn_advanced_subtitle: '上級トピックを含むすべてのトピックが表示されています。',

  learn_sections: [
    {
      title: '\u2600\uFE0F 家庭用ソーラーシステムの仕組み',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            家庭用ソーラーシステムは太陽光を家庭で使える電力に変換する。エネルギーの流れは以下の通り：
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
            太陽光 → <strong>ソーラーパネル</strong>（DC電力）
            <br />
            &nbsp;&nbsp;→ <strong>インバーター</strong>（DCをACに変換）
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;→ <strong>家庭</strong>（家電に電力供給）
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;→ <strong>蓄電池</strong>（余剰を蓄電）
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;→ <strong>系統</strong>（余剰を売電）
          </div>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>ソーラーパネル</strong>は太陽電池（PV）セルで構成され、太陽光を受けると直流（DC）電力を生成する。曇りの日でも発電するが、出力は低下する。
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>インバーター</strong>はシステムの頭脳で、パネルからのDC電力を家庭の家電が使用する交流（AC）に変換する。ハイブリッドインバーターは蓄電池の管理も行う。
          </p>
          <p style={{ margin: '0 0 8px' }}>
            家庭はまず太陽光電力を使用する。余剰分は<strong style={{ color: '#bb9af7' }}>家庭用蓄電池</strong>に蓄えるか、<strong style={{ color: '#bb9af7' }}>系統</strong>に売電してFiTクレジットを得ることができる。
          </p>
          <p style={{ margin: 0, color: '#73daca' }}>
            目標は自家発電した太陽光電力をできるだけ多く使うこと — これを<strong>自家消費</strong>と呼び、最も節約効果が高い。
          </p>
        </>
      ),
    },
    {
      title: '\uD83D\uDD0C 系統メーターとエネルギーモニター — 何が違うのか？',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            ソーラー住宅には<strong>2つの全く異なる計測装置</strong>がある。どちらも電力を測定するため混同されがちだが、設置場所、目的、所有者が異なる。
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #6366f1' }}>
              <strong style={{ color: '#6366f1' }}>系統メーター（NMIメーター）</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                建物の境界に設置された<strong>Ausgrid等の配電事業者（DNSP）の双方向メーター</strong>。配電事業者が設置・所有する。建物全体の買電・売電合計を課金のために記録する。利用者が直接読み取ったり制御したりすることはできない。
              </p>
              <ul style={{ margin: '8px 0 0', paddingLeft: 16, fontSize: 12, color: '#9ca3af' }}>
                <li style={{ marginBottom: 3 }}>売電制限ルールを設定（例: Ausgridエリアで5 kW）</li>
                <li style={{ marginBottom: 3 }}>小売事業者に課金データを提供</li>
                <li style={{ marginBottom: 3 }}>FiTクレジットを有効化</li>
                <li>利用者は小売事業者に支払い、小売事業者がこのメーターを読み取る</li>
              </ul>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #ec4899' }}>
              <strong style={{ color: '#ec4899' }}>エネルギーモニター（CTクランプ）</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                主分電盤に設置する<strong>消費者側の装置</strong>。例: Shelly EM、Emporia Vue、IoTaWatt。クリップ式CTセンサーを各回路に取り付ける。HEMSやインバーターにミリ秒単位のリアルタイム電力データを提供する。
              </p>
              <ul style={{ margin: '8px 0 0', paddingLeft: 16, fontSize: 12, color: '#9ca3af' }}>
                <li style={{ marginBottom: 3 }}>ソーラーオンリーEV充電に必要</li>
                <li style={{ marginBottom: 3 }}>インバーターのゼロエクスポート制御に必要</li>
                <li style={{ marginBottom: 3 }}>スマートな蓄電池制御を可能にする</li>
                <li>利用者が所有し、利用者が読み取る</li>
              </ul>
            </div>
          </div>
          <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, marginBottom: 10, fontFamily: 'monospace', fontSize: 12, color: '#9ece6a', lineHeight: 1.9 }}>
            系統 → <strong>系統メーター（NMI）</strong> → 主分電盤<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↑<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>エネルギーモニター（CT）</strong> ← 分電盤の配線にクリップ<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓ HEMS / インバーターにデータを送信
          </div>
          <p style={{ margin: 0, color: '#73daca', fontSize: 13 }}>
            <strong>重要なルール:</strong> NMIメーターは電気代。CTクランプは頭脳。スマートな太陽光自家消費、特にソーラーオンリーEV充電にはCTクランプが必要。NMIメーターだけでは不十分。
          </p>
        </>
      ),
    },
    {
      title: '\uD83D\uDCB0 電気料金の仕組みを理解する',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            ソーラーシステムを導入すると、電気料金は2つの主要な電力フローに基づいて計算される：
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #f7768e' }}>
              <strong style={{ color: '#f7768e' }}>買電（支払い）</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                太陽光と蓄電池で需要をカバーできない時に系統から引く電力。料金プランと時間帯に応じて$0.25〜$0.45/kWh程度。
              </p>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #9ece6a' }}>
              <strong style={{ color: '#9ece6a' }}>売電（収入）</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                余剰太陽光を系統に送るとFiT（固定価格買取制度）による収入が得られる。通常$0.05〜$0.12/kWhで、買電単価よりかなり低い。
              </p>
            </div>
          </div>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>自家消費の節約効果:</strong> 太陽光を直接使用する1 kWhごとに、小売料金での買電を回避できる。買電が$0.30/kWh、売電が$0.08/kWhの場合、自家消費した1 kWhは$0.08の売電収入ではなく$0.30の節約になる。
          </p>
          <p style={{ margin: 0, color: '#73daca' }}>
            自家消費（太陽光を直接使用するか蓄電池に貯める）を最大化することが、系統への売電より価値が高い理由がここにある。
          </p>
        </>
      ),
    },
    {
      title: '\uD83D\uDD0B 家庭用蓄電池とは？',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            家庭用蓄電池（ソーラーバッテリー、蓄電システムとも呼ばれる）は、余剰太陽光エネルギーを蓄え、太陽が出ていない時に使用するための装置。
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>動作の仕組み:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              太陽光発電が家庭消費を上回る日中に<strong>充電</strong>する
            </li>
            <li style={{ marginBottom: 4 }}>
              夕方から夜間にかけて<strong>放電</strong>し、系統からの買電の代わりに家庭に電力を供給する
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>自家消費率</strong>を大幅に向上 — 蓄電池なしの30〜40%から、蓄電池ありの60〜80%に
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>一般的な仕様:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>容量:</strong> 使用可能容量5〜15 kWh（一般家庭の夜間消費は8〜12 kWh）
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>出力:</strong> 連続充放電速度2.5〜5 kW
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>サイクル寿命:</strong> 化学組成により4,000〜10,000サイクル
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>往復効率:</strong> 90〜95%（充放電サイクルで5〜10%のロスが生じる）
            </li>
          </ul>
          <p style={{ margin: 0, color: '#73daca' }}>
            蓄電池はFiT（売電単価）と買電単価の差が大きい場合、または時間帯別料金プランを利用している場合に最も価値が高い。
          </p>
        </>
      ),
    },
    {
      title: '\uD83D\uDE97 家庭でのEV充電',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            家庭での電気自動車（EV）充電は、家庭内で最大の制御可能な負荷の一つであり、スマートエネルギー管理に最適。
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>充電レベル:</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #e0af68' }}>
              <strong style={{ color: '#e0af68' }}>レベル1（低速）</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                標準コンセント、1.4〜2.4 kW。1時間あたり約8〜15 kmの航続距離を追加。短距離通勤での夜間充電に最適。
              </p>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #7aa2f7' }}>
              <strong style={{ color: '#7aa2f7' }}>レベル2（高速）</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                専用EVSE（充電設備）、3.7〜22 kW。単相（最大7.4 kW）または三相（最大22 kW）。1時間あたり25〜120 kmを追加。
              </p>
            </div>
          </div>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>単相と三相の違い:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>単相:</strong> 住宅で最も一般的。最大32A × 230V = 7.4 kW
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>三相:</strong> 一部の地域や新しい住宅で利用可能。最大32A × 3 × 230V = 22 kW
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>スマート充電のメリット:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              余剰太陽光で充電して電気代を最小化
            </li>
            <li style={{ marginBottom: 4 }}>
              深夜料金の時間帯に充電をスケジュール
            </li>
            <li style={{ marginBottom: 4 }}>
              利用可能な太陽光出力に合わせて充電速度を動的に調整
            </li>
            <li style={{ marginBottom: 4 }}>
              系統接続の過負荷を防止
            </li>
          </ul>
          <p style={{ margin: 0, color: '#73daca' }}>
            EVバッテリー（40〜100 kWh）は家庭用蓄電池（5〜15 kWh）よりはるかに大きいため、スマート充電の判断がエネルギーコストに大きな影響を与える。
          </p>
        </>
      ),
    },
    {
      title: '\u26A1 インバーターとは？',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            インバーター（パワーコンディショナー）はソーラーパネルからの直流（DC）電力を、家庭や系統が使用する交流（AC）に変換する。あらゆるソーラーシステムの中心的なコンポーネントである。
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>インバーターの種類:</strong>
          </p>
          <div style={{ marginBottom: 12 }}>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, marginBottom: 8, borderLeft: '3px solid #e0af68' }}>
              <strong style={{ color: '#e0af68' }}>ストリングインバーター</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                パネルを直列（「ストリング」）に接続する。1台のインバーターがストリング全体を処理する。コスト効率が高いが、最も弱いパネルがストリング全体の出力を制限する。日陰のない屋根に最適。
              </p>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, marginBottom: 8, borderLeft: '3px solid #7aa2f7' }}>
              <strong style={{ color: '#7aa2f7' }}>マイクロインバーター</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                各パネルに個別の小型インバーターを設置する。パネルが独立して動作するため、1枚のパネルが日陰になっても他に影響しない。コストは高いが、複雑な屋根や部分的な日陰がある場合に最適。
              </p>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #9ece6a' }}>
              <strong style={{ color: '#9ece6a' }}>ハイブリッドインバーター</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                ソーラーインバーターと蓄電池インバーターを1台に統合。太陽光発電、蓄電池の充放電、系統との連携を管理する。蓄電池を含む新規設置で最も一般的な選択肢。
              </p>
            </div>
          </div>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>効率:</strong> 最新のインバーターは96〜98%の効率を持つ。つまりDC入力1000Wに対して960〜980WのAC出力が得られる。わずかなロスは熱に変換される。
          </p>
          <p style={{ margin: 0, color: '#73daca' }}>
            インバーターのサイズ選定は重要：ソーラーアレイのサイズにおおよそ合わせるべき。小さすぎるインバーターはピーク発電をクリップ（無駄に）し、大きすぎるインバーターはコストの無駄になる。
          </p>
        </>
      ),
    },
    {
      title: '\uD83D\uDCD0 システムサイジングガイド',
      advanced: true,
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            ソーラー、蓄電池、インバーターのシステムを正しくサイジングすることは、投資対効果を最大化するために重要。
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>ソーラーアレイのサイジング:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              年間電力消費量から始める（例: 6,000 kWh/年）
            </li>
            <li style={{ marginBottom: 4 }}>
              地域のピーク日照時間 × 365で割る（例: 4.5時間 × 365 = 1,642）
            </li>
            <li style={{ marginBottom: 4 }}>
              損失に対するデレーティングファクター0.8を適用: 6,000 / (1,642 × 0.8) ≈ 4.6 kWシステム
            </li>
            <li style={{ marginBottom: 4 }}>
              目安: 1 kWのソーラーは地域に応じて年間約1,200〜1,600 kWhを発電
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>蓄電池のサイジング:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              夕方・夜間の消費量を計算する（一般家庭で通常8〜12 kWh）
            </li>
            <li style={{ marginBottom: 4 }}>
              この夜間負荷の80〜100%をカバーする蓄電池を選ぶ
            </li>
            <li style={{ marginBottom: 4 }}>
              放電深度（DoD）を考慮: 10 kWhの蓄電池でDoD 90%なら使用可能容量は9 kWh
            </li>
            <li style={{ marginBottom: 4 }}>
              蓄電池の過大サイジングは、非常に大きなソーラーがなければ効果が逓減する
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>インバーターのサイジング:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              インバーターをソーラーアレイに合わせる: DC:AC比1:1〜1.3:1が一般的
            </li>
            <li style={{ marginBottom: 4 }}>
              わずかなオーバーサイズ（例: 6.6 kWパネルに5 kWインバーター）で朝夕の出力を最大化
            </li>
            <li style={{ marginBottom: 4 }}>
              ハイブリッドの場合、インバーターが蓄電池の充放電速度に対応していることを確認
            </li>
          </ul>
        </>
      ),
    },
    {
      title: '\uD83D\uDD0C 系統接続の種類',
      advanced: true,
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            ソーラーシステムの系統接続方法は、設置可能な機器と売電量に影響する。
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>接続の相数:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>単相:</strong> 標準的な住宅接続。通常40〜63Aのメインブレーカー。多くの地域でインバーターは5 kWに制限される。1本の活線。
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>三相:</strong> 新しい住宅や一部の地域で利用可能。3本の活線がそれぞれ1相を運ぶ。大型インバーター（15〜30 kW）、三相EV充電（22 kW）、より良い負荷分散が可能。
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>売電設定:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>無制限売電:</strong> 系統への送電量に制限なし（新規設置では珍しい）
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>売電制限付き:</strong> インバーターが系統への売電を設定値（例: 5 kW）に制限するよう構成される。余剰太陽光は抑制されるか蓄電池/EVに振り向けられる。
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>ゼロエクスポート:</strong> 売電が一切不可。インバーターは消費に正確に合わせて発電を制御する必要がある。リアルタイムフィードバック用のCTクランプまたはメーターが必要。
            </li>
          </ul>
          <p style={{ margin: 0, color: '#73daca' }}>
            売電制限があっても、より大きなソーラーシステムを設置できる — 余剰分は系統に送る代わりに蓄電池やEVの充電に使われる。
          </p>
        </>
      ),
    },
    {
      title: '\uD83E\uDDEA バッテリー化学の比較',
      advanced: true,
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            家庭用蓄電池で主流となっている2つのリチウムイオン化学はLFPとNMCである。
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #9ece6a' }}>
              <strong style={{ color: '#9ece6a' }}>LFP（リン酸鉄リチウム）</strong>
              <ul style={{ margin: '8px 0 0', paddingLeft: 16, fontSize: 13 }}>
                <li style={{ marginBottom: 3 }}>6,000〜10,000+サイクル寿命</li>
                <li style={{ marginBottom: 3 }}>非常に安全、熱安定性が高い</li>
                <li style={{ marginBottom: 3 }}>放電深度（DoD）100%</li>
                <li style={{ marginBottom: 3 }}>エネルギー密度が低い（重い）</li>
                <li style={{ marginBottom: 3 }}>コバルトフリー — より倫理的なサプライチェーン</li>
                <li>例: BYD、Tesla Powerwall 3</li>
              </ul>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #7aa2f7' }}>
              <strong style={{ color: '#7aa2f7' }}>NMC（ニッケルマンガンコバルト）</strong>
              <ul style={{ margin: '8px 0 0', paddingLeft: 16, fontSize: 13 }}>
                <li style={{ marginBottom: 3 }}>3,000〜5,000サイクル寿命</li>
                <li style={{ marginBottom: 3 }}>エネルギー密度が高い（軽い）</li>
                <li style={{ marginBottom: 3 }}>通常DoD 80〜90%を推奨</li>
                <li style={{ marginBottom: 3 }}>より多くの熱管理が必要</li>
                <li style={{ marginBottom: 3 }}>寿命全体でのサイクルあたりコストが高い</li>
                <li>例: LG RESU、旧世代Powerwall</li>
              </ul>
            </div>
          </div>
          <p style={{ margin: 0, color: '#73daca' }}>
            家庭用ソーラーシステムでの日常的なサイクル使用では、サイクル寿命の長さ、安全性、バッテリー寿命全体でのkWhあたりコストの改善により、LFPが現在の主流化学となっている。
          </p>
        </>
      ),
    },
    {
      title: '\uD83C\uDF21\uFE0F ヒートポンプの統合',
      advanced: true,
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            ヒートポンプは高効率な電気暖房装置で、電力を使って熱を直接生成するのではなく移動させるため、ソーラーシステムとの相性が良い。
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>COP（成績係数）:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              COPが3.5の場合、消費電力1 kWあたりヒートポンプは3.5 kWの熱を供給する
            </li>
            <li style={{ marginBottom: 4 }}>
              COPは外気温により変動 — 極端な低温では低下する
            </li>
            <li style={{ marginBottom: 4 }}>
              最新の空気熱源ヒートポンプでは通年COP（SCOP）3.0〜4.0が一般的
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>蓄熱:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              給湯タンクは蓄熱池として機能 — 日中の余剰太陽光でお湯を沸かす
            </li>
            <li style={{ marginBottom: 4 }}>
              高い料金時間帯の前に、太陽光や安い電力で住宅を予熱する
            </li>
            <li style={{ marginBottom: 4 }}>
              バッファタンクは最小限のロスで数時間にわたり熱エネルギーを蓄える
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>スマートグリッドとの連携:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              HEMSが太陽光余剰時や系統電力の安い時間帯にヒートポンプの運転を指示できる
            </li>
            <li style={{ marginBottom: 4 }}>
              SG Readyインターフェース（ヨーロッパのヒートポンプで一般的）が2つのデジタル入力による外部制御を可能にする
            </li>
            <li style={{ marginBottom: 4 }}>
              一部のヒートポンプはModbusによるエネルギー管理システムとの直接統合に対応
            </li>
          </ul>
        </>
      ),
    },
    {
      title: '\uD83D\uDCE1 モニタリングとデータ',
      advanced: true,
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            エネルギーシステムのモニタリングは、パフォーマンスの把握、問題の発見、使用量の最適化に不可欠。
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>CTクランプ（変流器）:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              ケーブルを切断することなく電流を測定するクリップ式センサー
            </li>
            <li style={{ marginBottom: 4 }}>
              系統引込線、太陽光引込線、個別回路に設置して電力フローを計測
            </li>
            <li style={{ marginBottom: 4 }}>
              多くのインバーターやエネルギーモニターがリアルタイムフィードバックに使用
            </li>
            <li style={{ marginBottom: 4 }}>
              精度は品質に依存 — 良質なCTで通常1〜2%
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>エネルギーモニタリングシステム:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>インバーターポータル:</strong> ほとんどのインバーターにはクラウドダッシュボードがある（Fronius Solar.web、Huawei FusionSolar、SMA Sunny Portal）
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>専用モニター:</strong> Shelly EM、Emporia Vue、IoTaWattなどが回路レベルの詳細なモニタリングを提供
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>DIYプラットフォーム:</strong> Home Assistantのエネルギーダッシュボード、GrafanaとInfluxDBによる時系列データ
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>HEMS（ホームエネルギーマネジメントシステム）:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              すべてのデバイスからデータを読み取り、最適化の判断を行う集中コントローラー
            </li>
            <li style={{ marginBottom: 4 }}>
              使用されるプロトコル: インバーターやメーターにはModbus TCP/RTU、EV充電器にはOCPP、IoTセンサーにはMQTT
            </li>
            <li style={{ marginBottom: 4 }}>
              蓄電池の充電、EV充電、ヒートポンプのスケジューリング、売電管理を自動化可能
            </li>
          </ul>
        </>
      ),
    },
    {
      title: '\uD83D\uDD0C 家庭用EV充電器の機能 — スマート充電器は実際に何ができるのか？',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            すべての家庭用EV充電器が同じではない。基本的な充電器は固定の出力を提供するだけだが、スマート充電器は家庭のエネルギーシステムと積極的に通信し、リアルタイムで充電を調整する。
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>基本機能（すべての家庭用充電器）:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>定格電流での固定出力（例: 16Aまたは32A）</li>
            <li style={{ marginBottom: 4 }}>スケジュール充電 — アプリで設定した時間に開始/停止</li>
            <li style={{ marginBottom: 4 }}>セッションごとの電力量記録</li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>スマート/高機能な機能:</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #9ece6a' }}>
              <strong style={{ color: '#9ece6a' }}>動的電流調整</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                充電器がエネルギーモニターからの信号に基づいて電流（例: 6A〜32A）を継続的に調整する。これがソーラーオンリー充電の核心的メカニズム — 充電器がリアルタイムで太陽光余剰カーブに追従する。
              </p>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #7aa2f7' }}>
              <strong style={{ color: '#7aa2f7' }}>アプリ遠隔操作 + OTAアップデート</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                セッションの遠隔開始/停止、充電モードの設定、無線でのファームウェア更新が可能。電気工事士の訪問なしに、新しいプロトコルや機能で充電器を最新の状態に保つ。
              </p>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #bb9af7' }}>
              <strong style={{ color: '#bb9af7' }}>Plug &amp; Charge（ISO 15118）</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                EVと充電器がケーブル接続の瞬間にTLS証明書で自動的に相互認証する — RFIDカードやアプリは不要。将来のV2G（双方向）充電に必要。
              </p>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #e0af68' }}>
              <strong style={{ color: '#e0af68' }}>OCPP 2.0.1スマート充電</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                中央管理システム（CSMS）がタイムスタンプ付きの出力スケジュールを充電器に送信できる。充電器はネットワーク切断時でもスケジュールを独立して実行する。系統のデマンドレスポンスやVPP（仮想発電所）参加に必要。
              </p>
            </div>
          </div>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>充電電流の動的調整は安全か？</strong>
          </p>
          <p style={{ margin: '0 0 8px', fontSize: 13 }}>
            はい — 充電器とEVが標準的な通信プロトコル（Mode 2/3ケーブルのPWMパイロット信号、またはCCSのISO 15118）を使用している限り安全。充電器はパイロット信号で利用可能な最大電流を伝え、EVは安全に受け入れられる分だけを引く。充電器がEVに要求以上の電流を引かせることはできない。
          </p>
          <p style={{ margin: 0, color: '#73daca', fontSize: 13 }}>
            <strong>重要なルール:</strong> ほとんどのEVは6A（単相で1.4 kW）未満の充電を受け付けない。太陽光余剰がこのしきい値を下回った場合、スマート充電器はセッションを一時停止するか系統から不足分を補う（エコモード）べきであり、3Aで充電しようとしてはならない。
          </p>
        </>
      ),
    },
    {
      title: '\u2600\uFE0F\uD83D\uDD04 ソーラーインバーター + EV充電器の統合 — 同じブランドにする必要があるか？',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            EV充電器を追加するソーラーオーナーからよくある質問: <em>{'"Fronius/SMA/HuaweiのインバーターにはFronius/SMA/Huaweiの充電器が必要？"'}</em> 結論は<strong>不要</strong> — しかし理由を理解するには、実際にどのデバイスが充電を制御しているかを知る必要がある。
          </p>
          <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, marginBottom: 12, fontFamily: 'monospace', fontSize: 12, color: '#9ece6a', lineHeight: 1.9 }}>
            Solar Panels → Inverter (DC→AC) → Main Switchboard<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↑<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Energy Monitor (CT clamp)<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓ real-time data<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EV Charger ← adjusts current
          </div>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>インバーターの役割:</strong> DCをACに変換し、系統と同期する。EV充電器の電力量を決定するわけではない。その判断は<strong>エネルギーモニター</strong>（CTクランプ）と<strong>充電器自身の制御ロジック</strong>が行う。
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>ソーラーオンリーEV充電を実際に可能にするもの:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>CTクランプ / エネルギーモニター</strong>が分電盤で太陽光余剰をリアルタイム計測
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>EV充電器</strong>がこのデータを読み取り（Modbus経由で直接、またはHEMS/クラウド中継経由）、充電電流を調整
            </li>
            <li style={{ marginBottom: 4 }}>
              インバーターのブランドはこのプロセスに無関係 — インバーターはAC電力を生成するだけ
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>同ブランドの利点（例: Fronius Wattpilot + Fronius Smart Meter）:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>プラグアンドプレイのセットアップ — 手動設定不要</li>
            <li style={{ marginBottom: 4 }}>インバーターと充電器を1つのアプリで管理</li>
            <li style={{ marginBottom: 4 }}>より緊密な統合、より速いアップデートサイクル</li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>オープンスタンダードの代替:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>ModbusまたはMQTTを公開する任意のCTクランプ（例: Shelly EM、IoTaWatt）</li>
            <li style={{ marginBottom: 4 }}>OCPP対応の任意の充電器（Myenergi Zappi、Ocular IQ、Smappee）</li>
            <li style={{ marginBottom: 4 }}>オプションとしてHome AssistantなどのHEMSで全体を統合管理</li>
            <li style={{ marginBottom: 4 }}>利点: ブランドの自由な入れ替え、任意のEV対応、サードパーティプラットフォーム統合</li>
          </ul>
          <p style={{ margin: 0, color: '#73daca', fontSize: 13 }}>
            <strong>結論:</strong> Froniusインバーターを既に持っているなら、Fronius Wattpilotが最も簡単。しかしロックインされるわけではない。CTクランプやHEMSデータを読み取れる任意のスマート充電器で、同じソーラー優先充電を実現できる。
          </p>
        </>
      ),
    },
    {
      title: '\u2601\uFE0F クラウドとローカル — インターネットが落ちたらどうなる？',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            多くのスマートホームエネルギー製品はクラウドサーバーに依存してアプリや制御ロジックを動作させている。どの機能がインターネットを必要とし、どの機能がローカルネットワーク上で完全に動作するかを知ることが重要。
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #f7768e' }}>
              <strong style={{ color: '#f7768e' }}>インターネットなしでは停止する機能</strong>
              <ul style={{ margin: '6px 0 0', paddingLeft: 16, fontSize: 13 }}>
                <li style={{ marginBottom: 3 }}>遠隔アプリ操作（外出先からの開始/停止）</li>
                <li style={{ marginBottom: 3 }}>クラウドベースのエネルギー履歴とダッシュボード</li>
                <li style={{ marginBottom: 3 }}>OTAファームウェア更新</li>
                <li style={{ marginBottom: 3 }}>太陽光予測（天気データ）</li>
                <li>動的電気料金フィード</li>
              </ul>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #9ece6a' }}>
              <strong style={{ color: '#9ece6a' }}>ローカルで動作し続ける機能</strong>
              <ul style={{ margin: '6px 0 0', paddingLeft: 16, fontSize: 13 }}>
                <li style={{ marginBottom: 3 }}>太陽光発電とEV充電</li>
                <li style={{ marginBottom: 3 }}>動的ソーラーオンリー充電（CTクランプのローカルループ）</li>
                <li style={{ marginBottom: 3 }}>ダウンロード済みのOCPP充電スケジュール</li>
                <li style={{ marginBottom: 3 }}>蓄電池の充放電サイクル</li>
                <li>ヒートポンプの運転</li>
              </ul>
            </div>
          </div>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>ソーラーオンリーEV充電がオフラインで動作する理由:</strong> CTクランプ、EV充電器、およびそれらの通信はすべてローカルネットワーク上（またはModbusによる直接配線）で行われる。リアルタイムの電流調整にクラウドは介在しない。クラウドは履歴のログ記録とリモートアプリアクセスにのみ必要。
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>耐障害性のベストプラクティス:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>EV充電器がローカルで充電ロジックを実行できることを確認する（メーカー仕様をチェック）</li>
            <li style={{ marginBottom: 4 }}>自動化にはローカルファーストのプラットフォーム（Home Assistant、ローカルOCPPサーバー）を使用する</li>
            <li style={{ marginBottom: 4 }}>クラウドはモニタリングダッシュボード、通知、リモートアクセスにのみ使用する</li>
            <li style={{ marginBottom: 4 }}>OCPP 2.0.1では充電スケジュールをダウンロードして充電器上でローカル実行が可能 — スケジュール設定後はサーバー不要</li>
          </ul>
          <p style={{ margin: 0, color: '#73daca', fontSize: 13 }}>
            適切に設計されたシステムは、重要な制御ループ（太陽光 → CTクランプ → 充電器）を完全にローカルに保つ。クラウドは便利だが、日常のエネルギールーティンの単一障害点であってはならない。
          </p>
        </>
      ),
    },
    {
      title: '\uD83D\uDE97 オーストラリアのソーラー住宅に推奨されるスマートEV充電器',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            以下の充電器はオーストラリアの条件（単相系統、5 kW売電制限、Ausgrid/Endeavour/SA Powerエリア）に適しており、ブランドロックインなしでソーラー余剰充電に対応する。
          </p>

          <div style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase' as const, letterSpacing: '0.08em', marginBottom: 8 }}>高統合性 / ソーラーファースト</div>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
              <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #9ece6a' }}>
                <strong style={{ color: '#9ece6a' }}>Myenergi Zappi (7.4 kW / 22 kW)</strong>
                <p style={{ margin: '4px 0 0', fontSize: 13, lineHeight: 1.6 }}>
                  太陽光余剰充電でクラス最高の性能を持ち、3つのモードを搭載: Eco（太陽光 + 系統補助）、Eco+（ソーラーオンリー、余剰低下時は一時停止）、Boost（最大速度）。外部CTクランプでスタンドアロン動作が可能で、インバーターブランドに依存しない。アプリ制御、OCPP対応、将来性あり。
                </p>
                <div style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>OCPP 1.6 · 外部CTクランプ · アプリ制御 · 7.4 kW（単相）</div>
              </div>
              <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #bb9af7' }}>
                <strong style={{ color: '#bb9af7' }}>Ocular IQ Home Solar Smart Charger</strong>
                <p style={{ margin: '4px 0 0', fontSize: 13, lineHeight: 1.6 }}>
                  オーストラリア製で、ソーラー住宅向けに特化設計。ModbusやメーカーAPIを通じてほとんどのインバーターブランドと直接統合。Home Assistant対応。蓄電池やV2Hとの連携にも拡張可能。ローカルファースト制御を求めるなら良い選択肢。
                </p>
                <div style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>OCPP 2.0.1 · Modbus · ローカルAPI · 7.4 kW</div>
              </div>
              <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #7aa2f7' }}>
                <strong style={{ color: '#7aa2f7' }}>Smappee EV Wall</strong>
                <p style={{ margin: '4px 0 0', fontSize: 13, lineHeight: 1.6 }}>
                  Smappee Energy Monitor（CTクランプ）と組み合わせて緊密なソーラー統合を実現。複数の充電器間での動的負荷分散に対応。OCPP、ローカルネットワーク運用、ホームエネルギーダッシュボード搭載。複数台充電器の家庭に最適。
                </p>
                <div style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>OCPP 1.6/2.0 · CTクランプ連携 · 7.4 kW / 22 kW</div>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase' as const, letterSpacing: '0.08em', marginBottom: 8 }}>コスパ重視 / 簡単セットアップ</div>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
              <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #e0af68' }}>
                <strong style={{ color: '#e0af68' }}>Evos 7.4 kW Smart EV Charger</strong>
                <p style={{ margin: '4px 0 0', fontSize: 13, lineHeight: 1.6 }}>
                  手頃な価格でオーストラリアで広く入手可能。アプリでのスケジュール制御、CTクランプによるソーラー優先モード搭載。HEMS統合の深い要件がない一般的な設置に最適。
                </p>
                <div style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>アプリスケジューリング · CTクランプ対応 · 7.4 kW</div>
              </div>
              <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #73daca' }}>
                <strong style={{ color: '#73daca' }}>GoodWe HCA G2 (7 kW)</strong>
                <p style={{ margin: '4px 0 0', fontSize: 13, lineHeight: 1.6 }}>
                  GoodWeインバーターを既に持っているなら最適 — 追加のCTクランプ不要でネイティブ統合。GoodWeのSEMSポータルで太陽光 + EVを1つのダッシュボードで管理。必要に応じてOCPPでサードパーティCSMSにも対応。
                </p>
                <div style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>OCPP 1.6 · GoodWeネイティブ統合 · 7 kW</div>
              </div>
            </div>
          </div>

          <div style={{ padding: '12px 14px', background: '#16161e', borderRadius: 6, borderLeft: '3px solid #7aa2f7', fontSize: 13, color: '#9ca3af', lineHeight: 1.7 }}>
            <strong style={{ color: '#7aa2f7' }}>選定チェックリスト:</strong>
            <ol style={{ margin: '8px 0 0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>外部CTクランプまたはModbus経由のソーラー余剰充電に対応しているか？（ソーラーオンリーモードに必要）</li>
              <li style={{ marginBottom: 4 }}>OCPP 1.6または2.0.1に対応しているか？（スマート充電と将来のグリッドサービスに必要）</li>
              <li style={{ marginBottom: 4 }}>インターネット接続なしでローカルに充電ロジックを実行できるか？</li>
              <li style={{ marginBottom: 4 }}>オーストラリア市場向けの認証を取得しているか？（RCMマーク、AS/NZS 3000配線規則への適合を確認）</li>
              <li>OTAファームウェア更新に対応しているか？（プロトコルアップグレードへの将来対応）</li>
            </ol>
          </div>
        </>
      ),
    },
  ],

  // ── Protocols ──
  protocols_title: '通信プロトコル',
  protocols_subtitle: '家庭エネルギーシステム内のデバイスがどのように通信するか。',
  protocols_advanced_extra: ' 上級ビューでは追加のプロトコルと技術的詳細が表示されます。',

  protocols_sections: [
    {
      key: 'modbus',
      title: 'Modbus — 産業用通信プロトコル',
      accentColor: '#e0af68',
      content: (userLevel) => (
        <>
          <p style={{ margin: '0 0 10px' }}>
            <strong style={{ color: '#e0af68' }}>概要:</strong> Modbusは1979年にModicon社が公開したシリアル通信プロトコル。産業用電子機器の接続においてデファクトスタンダードとなっており、家庭エネルギーシステムでも広く使用されている。
          </p>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>仕組み:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>マスター・スレーブ方式:</strong> 1台のマスターデバイス（例: エネルギー管理システム）がリクエストを開始し、スレーブデバイス（インバーター、メーター）がデータで応答する。
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>レジスタベースのデータモデル:</strong> すべてのデータは番号付きレジスタとして整理される。各レジスタは16ビットの値（0〜65535）を保持する。
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>リクエスト-レスポンス:</strong> マスターが「レジスタ40001を読み取れ」と要求し、スレーブがそこに格納されている値を返す。
            </li>
          </ul>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>家庭エネルギーシステムでの活用:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>インバーター:</strong> SMA、Fronius、Huawei、GoodWeなどのほとんどのメーカーがModbus TCP/RTUに対応し、発電データの読み取りや出力制限の設定が可能
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>スマートメーター:</strong> Eastron SDM630やCarlo Gavazziなどの機器がModbus経由でリアルタイム電力データを提供
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>ヒートポンプ:</strong> 多くの最新ヒートポンプがModbus経由で運転データの公開と制御コマンドの受信に対応
            </li>
          </ul>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Modbus TCPとRTUの比較:</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
            <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, borderLeft: '3px solid #7aa2f7' }}>
              <strong style={{ color: '#7aa2f7' }}>Modbus TCP</strong>
              <ul style={{ margin: '6px 0 0', paddingLeft: 16, fontSize: 13 }}>
                <li style={{ marginBottom: 3 }}>Ethernet / Wi-Fi経由</li>
                <li style={{ marginBottom: 3 }}>ポート502（デフォルト）</li>
                <li style={{ marginBottom: 3 }}>ソフトウェアとの統合が容易</li>
                <li>標準的なTCP/IPネットワーキング</li>
              </ul>
            </div>
            <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, borderLeft: '3px solid #9ece6a' }}>
              <strong style={{ color: '#9ece6a' }}>Modbus RTU</strong>
              <ul style={{ margin: '6px 0 0', paddingLeft: 16, fontSize: 13 }}>
                <li style={{ marginBottom: 3 }}>RS-485シリアルバス経由</li>
                <li style={{ marginBottom: 3 }}>有線、2線接続</li>
                <li style={{ marginBottom: 3 }}>1つのバスに最大32デバイス</li>
                <li>メーターやセンサーで一般的</li>
              </ul>
            </div>
          </div>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>レジスタの種類:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>Holding Registers（4xxxx）:</strong> 読み書き可能 — 設定値やコンフィグレーション用（例: 出力制限の設定）
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Input Registers（3xxxx）:</strong> 読み取り専用 — 計測値用（例: 現在の電力、電圧、周波数）
            </li>
          </ul>

          {userLevel === 'beginner' && (
            <div style={{ backgroundColor: '#1a2e1a', borderRadius: 6, padding: 12, border: '1px solid #2a3e2a' }}>
              <strong style={{ color: '#9ece6a' }}>初級者向けヒント:</strong> Modbusはファイリングキャビネットのようなもの — 各引き出し（レジスタ）が1つのデータを保持する。特定の引き出し番号を指定すると、デバイスが中身を教えてくれる。
            </div>
          )}

          {userLevel === 'advanced' && (
            <>
              <p style={{ margin: '12px 0 8px' }}>
                <strong style={{ color: '#bb9af7' }}>ファンクションコード:</strong>
              </p>
              <pre style={codeBlockStyle}>
                {`FC03 - Read Holding Registers (read setpoints, config)
FC04 - Read Input Registers  (read measurements)
FC06 - Write Single Register  (set one value)
FC16 - Write Multiple Registers (set a range of values)`}
              </pre>
              <p style={{ margin: '8px 0 8px' }}>
                <strong style={{ color: '#bb9af7' }}>レジスタマップ例（Fronius Symo インバーター、SunSpec経由）:</strong>
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
                注意: レジスタアドレスとデータ形式はメーカーにより異なる。必ず該当デバイスのModbusレジスタマップのドキュメントを参照すること。
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
            <strong style={{ color: '#7aa2f7' }}>概要:</strong> OCPP（Open Charge Point Protocol）は、EV充電ステーションと中央管理システム（CSMS）間の通信に使用されるオープンな標準プロトコル。リモート監視、制御、スマート充電を可能にする。
          </p>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>OCPP 1.6と2.0.1の比較:</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
            <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, borderLeft: '3px solid #e0af68' }}>
              <strong style={{ color: '#e0af68' }}>OCPP 1.6</strong>
              <ul style={{ margin: '6px 0 0', paddingLeft: 16, fontSize: 13 }}>
                <li style={{ marginBottom: 3 }}>WebSocket上のJSONまたはSOAP</li>
                <li style={{ marginBottom: 3 }}>広く普及、ほとんどの充電器が対応</li>
                <li style={{ marginBottom: 3 }}>基本的なスマート充電プロファイル</li>
                <li style={{ marginBottom: 3 }}>シンプルなメッセージ構造</li>
                <li>デバイスモデル / セキュリティプロファイルなし</li>
              </ul>
            </div>
            <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, borderLeft: '3px solid #7aa2f7' }}>
              <strong style={{ color: '#7aa2f7' }}>OCPP 2.0.1</strong>
              <ul style={{ margin: '6px 0 0', paddingLeft: 16, fontSize: 13 }}>
                <li style={{ marginBottom: 3 }}>WebSocket上のJSONのみ</li>
                <li style={{ marginBottom: 3 }}>構成用デバイスモデル</li>
                <li style={{ marginBottom: 3 }}>強化されたセキュリティプロファイル</li>
                <li style={{ marginBottom: 3 }}>ISO 15118対応（Plug &amp; Charge）</li>
                <li>コストベースのプロファイルによる改良されたスマート充電</li>
              </ul>
            </div>
          </div>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>主要なオペレーション:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>BootNotification:</strong> 充電器が起動時にCSMSに自己登録
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Authorize:</strong> ユーザーIDの検証（RFID、アプリ、またはPlug &amp; Charge）
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>StartTransaction / StopTransaction:</strong> 充電セッションの開始と終了、供給電力量の追跡
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>MeterValues:</strong> セッション中に充電器からCSMSへ定期的に送信される電力量データ
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>SetChargingProfile:</strong> CSMSが充電器に出力制限スケジュールを送信
            </li>
          </ul>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>スマート充電プロファイル:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>ChargePointMaxProfile:</strong> 充電ポイント全体の出力制限を設定
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>TxDefaultProfile:</strong> コネクタのすべてのトランザクションに適用されるデフォルト充電スケジュール
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>TxProfile:</strong> 特定のアクティブトランザクション用の充電スケジュール — 最高優先度
            </li>
          </ul>

          <p style={{ margin: '0 0 10px' }}>
            <strong style={{ color: '#bb9af7' }}>ソーラー充電を実現する仕組み:</strong> エネルギー管理システム（CSMSとして機能または連携）がインバーター/メーターから現在の太陽光余剰を読み取り、EV充電に利用可能な電力を計算し、更新された出力制限を含むSetChargingProfileメッセージを充電器に送信する。充電器はそれに応じて出力を調整し、通常5〜60秒ごとに更新される。
          </p>

          <div style={{ backgroundColor: '#16213e', borderRadius: 6, padding: 12, border: '1px solid #1e3a5f', marginBottom: 12 }}>
            <strong style={{ color: '#7aa2f7' }}>オーストラリア市場の状況:</strong>
            <p style={{ margin: '6px 0 0', fontSize: 13 }}>
              現在オーストラリアで販売されている住宅用EV充電器のほとんどは<strong>OCPP 1.6</strong>に対応しており、基本的なスマート充電とソーラー統合には十分。ISO 15118 Plug &amp; Chargeや双方向V2G充電に必要な<strong>OCPP 2.0.1</strong>は、オーストラリア市場に登場し始めたばかり（2024〜2025年）。
            </p>
            <p style={{ margin: '6px 0 0', fontSize: 13 }}>
              AEMOとARENAは家庭用充電器をフレキシブル負荷として扱い、OCPPを制御プロトコルとしたスマート充電実証実験を実施している。これにより、OCPPはオーストラリアの将来のグリッド連携EV充電プログラムの標準となる可能性が高い。充電器を選ぶ際、現在のソーラー充電にはOCPP 1.6対応で十分。V2Gや将来のデマンドレスポンスプログラムへの参加を予定しているならOCPP 2.0.1を優先する価値がある。
            </p>
          </div>

          {userLevel === 'beginner' && (
            <div style={{ backgroundColor: '#1a2e1a', borderRadius: 6, padding: 12, border: '1px solid #2a3e2a' }}>
              <strong style={{ color: '#9ece6a' }}>初級者向けヒント:</strong> OCPPはEV充電器がエネルギー管理システムと話す言語のようなもの。管理システムが「今は3 kWまで使っていいよ」と言い、充電器がそれに従って太陽光発電の変化に応じてリアルタイムで調整する。
            </div>
          )}

          {userLevel === 'advanced' && (
            <>
              <p style={{ margin: '12px 0 8px' }}>
                <strong style={{ color: '#bb9af7' }}>メッセージ構造（OCPP 1.6 JSON）:</strong>
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
                <strong style={{ color: '#bb9af7' }}>スマート充電スタック（優先度: 低→高）:</strong>
              </p>
              <pre style={codeBlockStyle}>
                {`1. ChargePointMaxProfile  (site-level limit)
2. TxDefaultProfile       (connector default)
3. TxProfile              (per-transaction override)

The effective limit = min(all applicable profiles)
Stack level: higher stackLevel overrides lower within same purpose`}
              </pre>
              <p style={{ margin: '8px 0 8px' }}>
                <strong style={{ color: '#bb9af7' }}>ISO 15118統合（OCPP 2.0.1）:</strong>
              </p>
              <ul style={{ margin: '0 0 0', paddingLeft: 20 }}>
                <li style={{ marginBottom: 4 }}>
                  Plug &amp; Charge: TLS証明書による自動認証 — RFIDカード不要
                </li>
                <li style={{ marginBottom: 4 }}>
                  CSMSの協調制御による双方向電力転送（V2G）を実現
                </li>
                <li style={{ marginBottom: 4 }}>
                  15118-20でスケジュール制御とダイナミック制御モードが追加され、きめ細かな電力管理が可能に
                </li>
              </ul>
            </>
          )}
        </>
      ),
    },
    {
      key: 'other',
      title: 'その他のエネルギープロトコル',
      accentColor: '#9ece6a',
      advancedOnly: true,
      content: (_userLevel) => (
        <>
          <div style={{ marginBottom: 16 }}>
            <h4 style={{ margin: '0 0 8px', color: '#e0af68' }}>SunSpec</h4>
            <p style={{ margin: '0 0 6px' }}>
              太陽光発電・蓄電装置向けにModbus上に構築された標準データモデル。SunSpec準拠のインバーターであれば、メーカーに関係なく同じレジスタで同じデータが公開されるように、一貫したレジスタマップを定義している。
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
              ヨーロッパのスマートホームエネルギー通信規格。IPネットワーク上でSPINE（Smart Premises Interoperable Neutral-message Exchange）プロトコルを使用する。クラウド依存なしのデバイス間通信用に設計されている。
            </p>
            <ul style={{ margin: '0 0 0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                ユースケース: EV充電の調整、ヒートポンプ制御、蓄電池管理
              </li>
              <li style={{ marginBottom: 4 }}>
                主要なヨーロッパメーカーが対応（SMA、Viessmann、BMW、Porsche）
              </li>
              <li style={{ marginBottom: 4 }}>
                デバイス間のネゴシエーションが可能: 充電器が電力を要求し、HEMSが承認/制限
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: 16 }}>
            <h4 style={{ margin: '0 0 8px', color: '#f7768e' }}>OpenADR</h4>
            <p style={{ margin: '0 0 6px' }}>
              Open Automated Demand Response — 電力会社がビルやデバイスにデマンドレスポンス信号を送信できるようにする規格。ピーク需要時のグリッド安定化に使用される。
            </p>
            <ul style={{ margin: '0 0 0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                VTN（Virtual Top Node）がVEN（Virtual End Node）デバイスにDRイベントを送信
              </li>
              <li style={{ marginBottom: 4 }}>
                信号には料金、負荷レベル、またはシンプルなイベント通知が含まれる
              </li>
              <li style={{ marginBottom: 4 }}>
                主に商業ビルと集約された住宅フリートで使用
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: 16 }}>
            <h4 style={{ margin: '0 0 8px', color: '#bb9af7' }}>MQTT</h4>
            <p style={{ margin: '0 0 6px' }}>
              IoTエネルギーモニタリングで広く使用される軽量のパブリッシュ・サブスクライブメッセージングプロトコル。エネルギー専用ではないが、エネルギーデータの転送に一般的に使用される。
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
              Apple、Google、Amazon、Samsungが支持する新興のスマートホーム規格。主に一般的なスマートホームデバイス（照明、ロック、センサー）向けだが、エネルギー管理のユースケースも拡大中。
            </p>
            <ul style={{ margin: '0 0 0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                <strong>Matter:</strong> アプリケーション層プロトコル。新バージョンでエネルギー管理デバイスタイプが追加されている。
              </li>
              <li style={{ marginBottom: 4 }}>
                <strong>Thread:</strong> 低電力メッシュネットワーキングプロトコル（IPベース）。Matterデバイスのネットワーク層を提供する。
              </li>
              <li style={{ marginBottom: 4 }}>
                消費者向けスマートホームエコシステムにおけるEV充電器、蓄電池、ソーラーインバーター通信の標準化の将来的な可能性がある。
              </li>
            </ul>
          </div>
        </>
      ),
    },
  ],

  // ── Strategies ──
  strategies_title: 'エネルギー最適化戦略',
  strategies_subtitle: '家庭エネルギーシステムを最大限に活用する方法。',
  strategies_advanced_extra: ' 上級ビューではHEMSアーキテクチャとグリッドサービスが追加されます。',

  strategies_sections: [
    {
      key: 'self-consumption',
      title: '太陽光自家消費の最適化',
      accentColor: '#9ece6a',
      content: (_userLevel) => (
        <>
          <p style={{ margin: '0 0 10px' }}>
            自家消費とは、自家発電した太陽光電力を系統に売電するのではなく直接家庭で使用すること。FiT（売電単価）が買電単価より低いため、ほぼ常に自家消費の方が経済的に有利。
          </p>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>余剰太陽光の優先順位:</strong>
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
            1. 家庭負荷（常に最優先で供給）
            <br />
            2. 家庭用蓄電池（夕方用に蓄電）
            <br />
            3. EV充電（大きなフレキシブル負荷）
            <br />
            4. ヒートポンプ / 給湯（蓄熱）
            <br />
            5. 系統売電（最終手段、最も価値が低い）
          </div>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>自家消費が重要な理由:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              一般的な買電単価: $0.25〜$0.45/kWh
            </li>
            <li style={{ marginBottom: 4 }}>
              一般的な売電単価（FiT）: $0.05〜$0.12/kWh
            </li>
            <li style={{ marginBottom: 4 }}>
              自家消費した1 kWhは売電収入ではなく買電回避による節約になる
            </li>
            <li style={{ marginBottom: 4 }}>
              自家消費率を30%から70%に上げると、太陽光による節約額が倍増する可能性がある
            </li>
          </ul>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>季節別の戦略:</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 10 }}>
            <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, borderLeft: '3px solid #7aa2f7' }}>
              <strong style={{ color: '#7aa2f7' }}>冬</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                太陽光が少ない。すべてのワットを直接使用することに集中する。売電を最小化。ヒートポンプの稼働が増え、自然に太陽光を吸収。蓄電池のサイクルは浅い。
              </p>
            </div>
            <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, borderLeft: '3px solid #e0af68' }}>
              <strong style={{ color: '#e0af68' }}>夏</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                太陽光が豊富。すべてを充電 — 蓄電池、EV、給湯。高消費電力の家電（食洗機、洗濯機）はソーラーピーク時にスケジュール。
              </p>
            </div>
          </div>

          <div style={{ backgroundColor: '#1a2e1a', borderRadius: 6, padding: 12, margin: '10px 0', border: '1px solid #2a3e2a' }}>
            <strong style={{ color: '#9ece6a' }}>ヒント:</strong>{' '}
            ソーラーピーク時間帯（10時〜15時）に家電を動かすことは、追加機器なしで自家消費率を上げる最もシンプルな方法の一つ。
          </div>
        </>
      ),
    },
    {
      key: 'ev-modes',
      title: '動的EV充電モード',
      accentColor: '#7aa2f7',
      content: (_userLevel) => (
        <>
          <p style={{ margin: '0 0 12px' }}>
            スマートEV充電器は、優先事項に応じて異なるモードで動作できる — 節約重視、急速充電、またはその両方のバランス。充電器はリアルタイムのエネルギーデータに基づいて電力消費を動的に調整する。
          </p>

          <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, marginBottom: 8, borderLeft: '3px solid #9ece6a' }}>
            <strong style={{ color: '#9ece6a', fontSize: 14 }}>ソーラーオンリー</strong>
            <p style={{ margin: '6px 0 8px', fontSize: 13 }}>余剰太陽光がある時のみ充電する。太陽光が最低しきい値を下回ると充電を一時停止。</p>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13 }}>
              <li style={{ marginBottom: 3 }}>最適な場面: 節約の最大化、1 kmあたりの電気代が最も低い</li>
              <li style={{ marginBottom: 3 }}>分電盤にCTクランプ / エネルギーモニターが必要 — なければ充電器は太陽光余剰を検知できない</li>
              <li style={{ marginBottom: 3 }}>CTクランプまたはエネルギーモニターのデータでリアルタイムに余剰太陽光を計測</li>
              <li style={{ marginBottom: 3 }}>最低充電しきい値: 通常1.4 kW（単相で6A × 230V）</li>
              <li style={{ marginBottom: 3 }}>6A未満ではほとんどのEVが充電を受け付けない — 充電器は一時停止する必要がある</li>
              <li style={{ marginBottom: 3 }}>充電速度は太陽光カーブに追従して一日中変動する</li>
              <li style={{ marginBottom: 3 }}>曇りの日や冬にはEVが満充電にならない場合がある</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, marginBottom: 8, borderLeft: '3px solid #e0af68' }}>
            <strong style={{ color: '#e0af68', fontSize: 14 }}>エコ / ハイブリッド</strong>
            <p style={{ margin: '6px 0 8px', fontSize: 13 }}>太陽光余剰を優先するが、充電開始後は最低充電速度を維持するため系統から補充する。</p>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13 }}>
              <li style={{ marginBottom: 3 }}>最適な場面: 節約と利便性の良いバランス</li>
              <li style={{ marginBottom: 3 }}>セッション開始後は常に最低6A（1.4 kW）を維持</li>
              <li style={{ marginBottom: 3 }}>太陽光余剰を最優先で使用し、系統が最低値までの差分を補う</li>
              <li style={{ marginBottom: 3 }}>太陽光が最低値を超えると充電速度が上がり全余剰を使用</li>
              <li style={{ marginBottom: 3 }}>系統のみの充電と比較して通常50〜70%の節約</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, marginBottom: 8, borderLeft: '3px solid #f7768e' }}>
            <strong style={{ color: '#f7768e', fontSize: 14 }}>急速 / ブースト</strong>
            <p style={{ margin: '6px 0 8px', fontSize: 13 }}>太陽光の有無に関係なく最大出力で充電する。必要に応じて系統から電力を引く。</p>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13 }}>
              <li style={{ marginBottom: 3 }}>最適な場面: できるだけ早く車を充電する必要がある時</li>
              <li style={{ marginBottom: 3 }}>充電器の定格出力（例: 7.4 kWまたは22 kW）をフルに使用</li>
              <li style={{ marginBottom: 3 }}>ソーラー最適化なし — 速度のみ重視</li>
              <li style={{ marginBottom: 3 }}>管理しないとデマンドチャージの発生や系統接続の過負荷を引き起こす可能性がある</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, marginBottom: 8, borderLeft: '3px solid #bb9af7' }}>
            <strong style={{ color: '#bb9af7', fontSize: 14 }}>スケジュール</strong>
            <p style={{ margin: '6px 0 8px', fontSize: 13 }}>指定された時間帯（通常は夜間の安い料金時間帯）に充電する。</p>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13 }}>
              <li style={{ marginBottom: 3 }}>最適な場面: 時間帯別料金プランのユーザー</li>
              <li style={{ marginBottom: 3 }}>一般的なスケジュール: 料金が最も安い23時〜6時に充電</li>
              <li style={{ marginBottom: 3 }}>日中のソーラーと組み合わせたハイブリッドスケジューリングも可能</li>
              <li style={{ marginBottom: 3 }}>出発時刻を設定して必要な時に車の準備を確実にする</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, marginBottom: 8, borderLeft: '3px solid #73daca' }}>
            <strong style={{ color: '#73daca', fontSize: 14 }}>目標SoC</strong>
            <p style={{ margin: '6px 0 8px', fontSize: 13 }}>出発時刻までに目標バッテリー残量を設定する。オプティマイザーが最もコストの低い方法を判断する。</p>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13 }}>
              <li style={{ marginBottom: 3 }}>最適な場面: 動的料金や太陽光予測を活用する上級ユーザー</li>
              <li style={{ marginBottom: 3 }}>考慮要素: 現在のSoC、目標SoC、出発時刻、太陽光予測、料金スケジュール</li>
              <li style={{ marginBottom: 3 }}>最もコストの低い充電時間帯を自動選択</li>
              <li style={{ marginBottom: 3 }}>充電を複数の時間帯に分割する場合がある（例: 日中のソーラー + 夜間の深夜料金）</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#2e2a1a', borderRadius: 6, padding: 12, margin: '10px 0', border: '1px solid #3e3a2a' }}>
            <strong style={{ color: '#e0af68' }}>重要:</strong>{' '}
            ほとんどのEVの最低充電速度は1相あたり6A（単相1.4 kW、三相4.1 kW）。これを下回るとEVは充電を拒否する。スマート充電器はソーラー出力に合わせた変調時にこのしきい値を慎重に処理する必要がある。
          </div>
        </>
      ),
    },
    {
      key: 'battery',
      title: '蓄電池管理戦略',
      accentColor: '#e0af68',
      content: (_userLevel) => (
        <>
          <p style={{ margin: '0 0 12px' }}>
            家庭用蓄電池は制御戦略次第でその価値が決まる。最適なアプローチは料金体系、ソーラーシステムのサイズ、消費パターンに依存する。
          </p>

          <div style={{ marginBottom: 14 }}>
            <h4 style={{ margin: '0 0 6px', color: '#9ece6a' }}>
              太陽光自家消費
            </h4>
            <p style={{ margin: '0 0 6px' }}>
              最も一般的な戦略: 日中に余剰太陽光を蓄電し、夕方から夜間にかけて放電する。
            </p>
            <ul style={{ margin: '0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                太陽光発電が家庭消費を上回ると蓄電池が充電
              </li>
              <li style={{ marginBottom: 4 }}>
                消費が太陽光を上回ると蓄電池が放電（夕方、夜間）
              </li>
              <li style={{ marginBottom: 4 }}>
                一般的なシステムで自家消費率を約30%から約70%に向上
              </li>
              <li style={{ marginBottom: 4 }}>
                夜間消費をカバーするサイズの蓄電池（8〜12 kWh）で最も効果的
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: 14 }}>
            <h4 style={{ margin: '0 0 6px', color: '#7aa2f7' }}>
              時間帯別料金のアービトラージ
            </h4>
            <p style={{ margin: '0 0 6px' }}>
              安い料金の時間帯に蓄電池を充電し、高い料金の時間帯に放電する。
            </p>
            <ul style={{ margin: '0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                深夜料金で夜間に充電（例: $0.10/kWh）
              </li>
              <li style={{ marginBottom: 4 }}>
                ピーク料金時に放電（例: $0.40/kWh）
              </li>
              <li style={{ marginBottom: 4 }}>
                ピーク:オフピークの比率が約3:1を超えると利益が出る（往復ロスを考慮）
              </li>
              <li style={{ marginBottom: 4 }}>
                太陽光自家消費と組み合わせて効果を最大化できる
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: 14 }}>
            <h4 style={{ margin: '0 0 6px', color: '#f7768e' }}>ピークシェービング</h4>
            <p style={{ margin: '0 0 6px' }}>
              デマンドチャージの回避や接続の過負荷を防ぐために、系統買電を最大しきい値以下に制限する。
            </p>
            <ul style={{ margin: '0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                しきい値を超える消費をカバーするために蓄電池が放電
              </li>
              <li style={{ marginBottom: 4 }}>
                一般的なしきい値: 系統買電を5 kW以下に維持
              </li>
              <li style={{ marginBottom: 4 }}>
                EV充電 + 家庭負荷がメインブレーカー容量を超える場合に有用
              </li>
              <li style={{ marginBottom: 4 }}>
                一部の料金プランでは15分間のピークデマンドに追加料金が発生 — ピークシェービングでこれを回避
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ margin: '0 0 6px', color: '#e0af68' }}>
              バックアップ / リザーブ
            </h4>
            <p style={{ margin: '0 0 6px' }}>
              停電に備えて最低充電状態（SoC）を確保しておく。
            </p>
            <ul style={{ margin: '0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                通常運転時に蓄電池がそれ以下に放電しないリザーブレベル（例: 20%）を設定
              </li>
              <li style={{ marginBottom: 4 }}>
                停電時に蓄電池が重要な負荷に電力を供給（インバーターがバックアップに対応している場合）
              </li>
              <li style={{ marginBottom: 4 }}>
                トレードオフ: リザーブが高いほど日常サイクルの使用可能容量が減少
              </li>
              <li style={{ marginBottom: 4 }}>
                一部のインバーターは自動アイランディング（系統から切断して独立で家庭に電力供給）に対応
              </li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, margin: '10px 0', border: '1px solid #2a2a3e' }}>
            <strong style={{ color: '#7aa2f7' }}>補足:</strong>{' '}
            最適な戦略は多くの場合、組み合わせ: 日中は太陽光自家消費、蓄電池には時間帯別料金アービトラージ、安心のための小さなバックアップリザーブ。
          </div>
        </>
      ),
    },
    {
      key: 'hems',
      title: 'ホームエネルギーマネジメントシステム（HEMS）',
      accentColor: '#bb9af7',
      advancedOnly: true,
      content: (_userLevel) => (
        <>
          <p style={{ margin: '0 0 10px' }}>
            HEMSは家庭内のすべてのエネルギーフローを最適化する集中コントローラー。各デバイスからデータを読み取り、最適化ルールを適用し、節約・自家消費・快適性を最大化するための制御コマンドを送信する。
          </p>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>統合ポイント:</strong>
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
            <strong style={{ color: '#bb9af7' }}>判断のインプット:</strong>
          </p>
          <ul style={{ margin: '0 0 12px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>現在の太陽光発電量</strong> — インバーターまたはCTクランプからのリアルタイム計測
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>太陽光予測</strong> — 天気に基づく今後数時間/日の発電予測
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>電気料金</strong> — 現在と今後の料金（スポット価格または時間帯別スケジュール）
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>EVの出発時刻</strong> — 車が必要な時刻と目標SoC
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>蓄電池SoC</strong> — 現在の充電状態と利用可能容量
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>家庭消費パターン</strong> — 過去の実績と予測される負荷プロファイル
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>系統の制約</strong> — 売電制限、メインブレーカー定格、デマンドチャージのしきい値
            </li>
          </ul>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>最適化ロジックの例:</strong>
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
            <strong style={{ color: '#bb9af7' }}>実装オプション:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>商用エネルギー管理システム:</strong> 特定のインバーターや充電器ブランドと統合するために設計された専用アプライアンス。太陽光予測や料金最適化を含むことが多い。
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Home Assistant:</strong> 優れたエネルギーダッシュボードを持つオープンソースのホームオートメーションプラットフォーム。ほとんどのソーラーインバーター、蓄電池、EV充電器との統合に対応。カスタムオートメーションで拡張可能。
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Node-RED:</strong> Modbusレジスタの読み取り、API呼び出し、OCPPコマンドの送信が可能なフローベースのプログラミングツール。カスタムエネルギー管理ロジックに適している。
            </li>
          </ul>

          <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, margin: '10px 0', border: '1px solid #2a2a3e' }}>
            <strong style={{ color: '#7aa2f7' }}>補足:</strong>{' '}
            優れたHEMSは、太陽光と蓄電池だけでは得られない追加の10〜20%の電気代削減を実現できる。エネルギーをいつ・どこで使うかについてインテリジェントなリアルタイム判断を行うことで達成される。
          </div>
        </>
      ),
    },
    {
      key: 'grid-services',
      title: 'グリッドサービスとデマンドレスポンス',
      accentColor: '#73daca',
      advancedOnly: true,
      content: (_userLevel) => (
        <>
          <p style={{ margin: '0 0 10px' }}>
            家庭用蓄電池とEVは単なる消費者向けデバイスではない — グリッドレベルのサービスに参加して収益を得ながら、電力系統の安定化に貢献できる。
          </p>

          <div style={{ marginBottom: 14 }}>
            <h4 style={{ margin: '0 0 6px', color: '#e0af68' }}>
              周波数調整
            </h4>
            <p style={{ margin: '0 0 6px' }}>
              系統は正確に50 Hz（一部の地域では60 Hz）の周波数を維持する必要がある。蓄電池はミリ秒単位で電力を注入または吸収し、このバランスの維持を支援できる。
            </p>
            <ul style={{ margin: '0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                FCR（周波数抑制予備力）: 数秒以内の自動応答
              </li>
              <li style={{ marginBottom: 4 }}>
                双方向インバーターを備えた高速応答蓄電池が必要
              </li>
              <li style={{ marginBottom: 4 }}>
                通常、住宅オーナーが直接ではなくアグリゲーターを通じて管理
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: 14 }}>
            <h4 style={{ margin: '0 0 6px', color: '#7aa2f7' }}>
              仮想発電所（VPP）
            </h4>
            <p style={{ margin: '0 0 6px' }}>
              VPPは数千の分散型蓄電池と制御可能な負荷を集約し、従来の発電所のように配電できる単一の仮想リソースにする。
            </p>
            <ul style={{ margin: '0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                住宅オーナーは蓄電池メーカーまたはエネルギー小売事業者を通じてオプトイン
              </li>
              <li style={{ marginBottom: 4 }}>
                アグリゲーターがグリッドストレス時に放電コマンドを送信
              </li>
              <li style={{ marginBottom: 4 }}>
                参加者は蓄電池を提供することで報酬または料金クレジットを受け取る
              </li>
              <li style={{ marginBottom: 4 }}>
                蓄電池は通常、家庭用ニーズのために最低SoCを維持
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: 14 }}>
            <h4 style={{ margin: '0 0 6px', color: '#9ece6a' }}>
              Vehicle-to-Grid（V2G）
            </h4>
            <p style={{ margin: '0 0 6px' }}>
              V2GはEVが系統に電力を逆送電することを可能にし、事実上車をモバイルバッテリーにする。60 kWhのEVバッテリーは一般的な10 kWhの家庭用蓄電池よりもはるかに大きい。
            </p>
            <ul style={{ margin: '0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                双方向充電器とV2G対応EVが必要
              </li>
              <li style={{ marginBottom: 4 }}>
                現在対応車種は限定的（例: CHAdeMO経由のNissan Leaf、CCS経由の一部の新型車）
              </li>
              <li style={{ marginBottom: 4 }}>
                ISO 15118-20とOCPP 2.0.1がプロトコルサポートを提供
              </li>
              <li style={{ marginBottom: 4 }}>
                バッテリー劣化の懸念があるが、最新のEVは浅いサイクルをうまく処理する
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ margin: '0 0 6px', color: '#f7768e' }}>
              Vehicle-to-Home（V2H）
            </h4>
            <p style={{ margin: '0 0 6px' }}>
              V2Gと同様だが、EVは家庭への電力供給のみで系統への逆送電は行わない。実装がよりシンプルで、ほとんどの管轄区域では電力会社の承認を必要としない。
            </p>
            <ul style={{ margin: '0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                EVが停電時やピーク料金時に家庭用蓄電池のバックアップとして機能
              </li>
              <li style={{ marginBottom: 4 }}>
                次の走行に十分な充電を残しつつ、10〜20 kWhの使用可能エネルギーを提供
              </li>
              <li style={{ marginBottom: 4 }}>
                専用の据え置き型蓄電池がない家庭で特に価値が高い
              </li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#2e2a1a', borderRadius: 6, padding: 12, margin: '10px 0', border: '1px solid #3e3a2a' }}>
            <strong style={{ color: '#e0af68' }}>重要:</strong>{' '}
            V2GとVPPへの参加はバッテリー保証に影響する場合がある。登録前にメーカーの条件を確認すること。ほとんどのプログラムは劣化への影響を最小化するために追加サイクル数を制限している。
          </div>
        </>
      ),
    },
  ],
};

export default ja;
