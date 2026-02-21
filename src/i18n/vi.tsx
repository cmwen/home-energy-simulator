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

export const vi: Translations = {
  // ── Nav ──
  nav_title: 'Mô phỏng Năng lượng Hộ gia đình',
  nav_simulator: 'Mô phỏng',
  nav_scenarios: 'Kịch bản',
  nav_learn: 'Học hỏi',
  nav_protocols: 'Giao thức',
  nav_strategies: 'Chiến lược',
  nav_level: 'Cấp độ:',
  nav_level_beginner: 'Cơ bản',
  nav_level_advanced: 'Nâng cao',

  // ── Footer ──
  footer_text: 'Home Energy Simulator — Công cụ học tập tương tác về hệ thống năng lượng hộ gia đình',

  // ── Theme ──
  theme_light: 'Sáng',
  theme_dark: 'Tối',
  theme_auto: 'Tự động',

  // ── SystemSummary ──
  summary_solar_generation: 'Sản lượng Điện mặt trời',
  summary_home_consumption: 'Tiêu thụ Hộ gia đình',
  summary_grid_import: 'Điện Lưới Nhập',
  summary_grid_export: 'Điện Lưới Xuất',
  summary_battery: 'Pin Lưu trữ',
  summary_battery_idle: 'Chờ',
  summary_battery_charging: 'Đang sạc',
  summary_battery_discharging: 'Đang xả',
  summary_ev: 'Xe điện (EV)',
  summary_ev_full: 'Đầy',
  summary_ev_not_charging: 'Không sạc',
  summary_self_consumption: 'Tự tiêu thụ',
  summary_self_sufficiency: 'Tự chủ Năng lượng',

  // ── SessionStatsPanel ──
  stats_session_totals: 'Tổng cộng Phiên',
  stats_press_play: '— nhấn Play để tích lũy',
  stats_reset: 'Đặt lại',
  stats_solar_generated: 'Sản lượng Điện mặt trời',
  stats_self_used: 'tự dùng',
  stats_exported: 'đã xuất',
  stats_grid_imported: 'Điện Lưới Đã Nhập',
  stats_cost: 'Chi phí:',
  stats_grid_exported: 'Điện Lưới Đã Xuất',
  stats_earned: 'Thu nhập:',
  stats_solar_value: 'Giá trị Điện mặt trời',
  stats_avoided_import_fit: 'tránh nhập + thu từ FiT',
  stats_net_grid_cost: 'Chi phí Lưới điện Ròng',
  stats_net_credit: 'tín dụng ròng (xuất nhiều hơn chi phí)',
  stats_import_minus_fit: 'chi phí nhập trừ đi FiT',
  stats_home_consumed: 'Hộ gia đình Đã tiêu thụ',
  stats_total_load: 'tổng tải (bao gồm EV)',
  stats_fit: 'FiT',

  // ── SimulationControls ──
  sim_pause: 'Tạm dừng',
  sim_play: 'Phát',
  sim_speed: 'Tốc độ',
  sim_time: 'Thời gian:',
  sim_clouds: 'Mây:',
  sim_season: 'Mùa',
  sim_temperature: 'Nhiệt độ',
  sim_spring: 'Mùa Xuân',
  sim_summer: 'Mùa Hè',
  sim_autumn: 'Mùa Thu',
  sim_winter: 'Mùa Đông',

  // ── ComponentEditor ──
  editor_enabled: 'Đã bật',
  editor_disabled: 'Đã tắt',
  editor_remove_component: 'Xóa Thành phần',
  editor_power_override: 'Ghi đè Công suất',

  // Type labels
  type_grid: 'Lưới điện',
  type_smart_meter: 'Đồng hồ Thông minh',
  type_grid_meter: 'Đồng hồ Lưới (NMI)',
  type_energy_monitor: 'Màn hình Năng lượng (CT clamp)',
  type_main_switchboard: 'Bảng điện Chính',
  type_solar_panels: 'Tấm pin Mặt trời',
  type_inverter: 'Biến tần (Inverter)',
  type_battery: 'Pin Lưu trữ',
  type_ev_charger: 'Sạc Xe điện (EV Charger)',
  type_home_load: 'Tải Hộ gia đình',
  type_heat_pump: 'Bơm nhiệt (Heat Pump)',

  // Field labels
  field_panel_count: 'Số lượng Tấm pin',
  field_panel_wattage: 'Công suất Tấm pin',
  field_roof_angle: 'Góc Mái',
  field_capacity: 'Dung lượng',
  field_current_soc: 'SOC Hiện tại',
  field_max_charge_rate: 'Tốc độ Sạc Tối đa',
  field_max_discharge_rate: 'Tốc độ Xả Tối đa',
  field_max_current: 'Dòng điện Tối đa',
  field_phases: 'Số Pha',
  field_phase_single: '1-Pha',
  field_phase_three: '3-Pha',
  field_voltage: 'Điện áp',
  field_charging_standard: 'Tiêu chuẩn Sạc',
  field_charging_mode: 'Chế độ Sạc',
  field_is_charging: 'Đang sạc',
  field_ev_battery: 'Pin EV (Mức bắt đầu %)',
  field_ev_capacity: 'Dung lượng EV',
  field_efficiency: 'Hiệu suất',
  field_max_output: 'Đầu ra Tối đa',
  field_hybrid_mode: 'Chế độ Lai (Hybrid)',
  field_grid_export_limit: 'Giới hạn Xuất Lưới',
  field_feed_in_tariff: 'Biểu giá Điện hòa lưới (FiT)',
  field_import_tariff: 'Biểu giá Nhập',
  field_base_load: 'Tải Cơ sở',
  field_cop_rating: 'Hệ số COP',

  // Charging modes
  mode_fast: 'Nhanh',
  mode_eco: 'Tiết kiệm (Eco)',
  mode_solar_only: 'Chỉ Năng lượng Mặt trời',
  mode_scheduled: 'Theo Lịch',

  // Info blurbs
  info_grid_meter: 'Đây là đồng hồ NMI của Ausgrid/DNSP tại ranh giới nhà bạn. Nó ghi lại lượng điện nhập/xuất để tính tiền và thiết lập quy tắc giới hạn xuất. Bạn không thể đọc hoặc điều khiển nó trực tiếp.',
  info_energy_monitor: 'Màn hình giám sát ngàm CT (CT clamp) ở phía người tiêu dùng (ví dụ: Shelly EM, Emporia Vue) — được lắp tại bảng điện chính của bạn. Cho phép đo lường lượng năng lượng mặt trời dư thừa theo thời gian thực, cần thiết để sạc EV chỉ bằng năng lượng mặt trời và điều tiết giới hạn xuất bằng 0 của biến tần.',
  info_switchboard: 'Bảng phân phối dòng điện xoay chiều (AC) chính bên trong nhà bạn. Mọi tải AC (mạch điện gia đình, sạc xe điện, bơm nhiệt) đều kết nối tại đây. Đầu ra AC của biến tần và kết nối lưới điện đều cấp vào bảng này.',

  // ── AddComponentPanel ──
  add_component: 'Thêm Thành phần',
  add_switchboard: 'Bảng điện',

  // ── SetupToolbar ──
  setup_label: 'Cài đặt',
  setup_save_json: 'Lưu JSON',
  setup_load_json: 'Tải JSON',
  setup_share_url: 'Chia sẻ URL',
  setup_reset: 'Đặt lại',
  setup_downloaded: 'Đã tải Cài đặt',
  setup_invalid_file: 'Tệp cài đặt không hợp lệ — không thể phân tích JSON',
  setup_loaded: 'Đã tải:',
  setup_url_copied: 'Đã sao chép URL chia sẻ vào khay nhớ tạm',
  setup_reset_confirm: 'Đặt lại về hệ thống mặc định? Điều này sẽ hủy bỏ các cài đặt hiện tại của bạn.',
  setup_reset_done: 'Đã đặt lại về mặc định',
  setup_auto_saved: 'Tự động lưu cục bộ',
  setup_auto_saved_tooltip: 'Cài đặt của bạn được tự động lưu vào bộ nhớ cục bộ của trình duyệt này',

  // ── ScenariosSection ──
  scenarios_title: 'Các Kịch bản',
  scenarios_description: 'Các thiết lập thực tế của chủ nhà ở Úc, được cấu hình sẵn và sẵn sàng để khám phá. Tải một kịch bản để xem hệ thống hoạt động như thế nào — sau đó điều chỉnh thanh trượt, bật các thành phần, hoặc chạy mô phỏng để hiểu rõ sự đánh đổi.',
  scenarios_active: 'Đang hoạt động',
  scenarios_goal: 'Mục tiêu',
  scenarios_context: 'Bối cảnh tại Úc',
  scenarios_what_unlocks: 'Thiết lập này mang lại lợi ích gì?',
  scenarios_what_setup_unlocks: 'Thiết lập này mang lại những gì',
  scenarios_load: 'Tải Kịch bản →',
  scenarios_currently_loaded: 'Đang được tải',
  scenarios_tip_label: 'Mẹo: ',
  scenarios_tip: 'Sau khi tải một kịch bản, chuyển sang tab Mô phỏng (Simulator) để xem sơ đồ hệ thống trực tiếp và các luồng công suất. Sử dụng bảng Thêm Thành phần (Add Component) để thêm hoặc bớt thiết bị, và tab Học hỏi (Learn) để hiểu vai trò của từng thành phần.',

  // ── Scenario preset strings ──
  scenario_solar_only_name: 'Chỉ Điện Mặt trời — Giảm Hóa đơn của Tôi',
  scenario_solar_only_tagline: 'Điện mặt trời cơ bản, chưa có pin lưu trữ',
  scenario_solar_only_description: 'Một hệ thống điện mặt trời mới với 6.6 kW tấm pin và biến tần 5 kW. Không có pin lưu trữ, không có xe điện (EV). Mục tiêu là chuyển việc sử dụng các thiết bị vào ban ngày khi có nắng và xuất phần còn lại lên lưới.',
  scenario_solar_only_goal: 'Giảm hóa đơn tiền điện bằng cách tối đa hóa việc tự tiêu thụ vào ban ngày.',
  scenario_solar_only_context: 'Khu vực Ausgrid. Áp dụng giới hạn xuất 5 kW. Biểu giá điện hòa lưới (FiT) thấp (~5¢/kWh) nên việc tự sử dụng có giá trị cao hơn nhiều so với xuất lên lưới.',

  scenario_solar_battery_name: 'Điện Mặt trời + Pin Lưu trữ — Hóa đơn Đêm bằng Không',
  scenario_solar_battery_tagline: 'Lưu trữ điện mặt trời để dùng buổi tối',
  scenario_solar_battery_description: 'Lộ trình nâng cấp phổ biến nhất. Một cục pin lưu trữ 10 kWh lưu lại lượng điện mặt trời dư thừa vào buổi trưa để cấp điện cho nhà qua buổi tối và đêm, loại bỏ hầu hết lượng điện nhập từ lưới.',
  scenario_solar_battery_goal: 'Trang trải điện năng tiêu thụ buổi tối và qua đêm bằng điện mặt trời đã lưu trữ. Nhắm đến mức tự chủ 80%+.',
  scenario_solar_battery_context: 'Nếu không có pin lưu trữ, 60–70% điện mặt trời có thể bị xuất lên lưới với mức giá FiT thấp. Với pin 10 kWh, hầu hết các ngôi nhà có thể đạt mức nhập lưới gần bằng 0 vào những ngày nắng.',

  scenario_solar_ev_name: 'Điện Mặt trời + Xe điện (EV) — Sạc Miễn phí từ Năng lượng Mặt trời',
  scenario_solar_ev_tagline: 'Sử dụng điện mặt trời dư thừa để sạc EV của bạn',
  scenario_solar_ev_description: 'Dành cho chủ sở hữu EV muốn sạc xe từ năng lượng mặt trời vào ban ngày. Bộ sạc EV cắm vào một mạch 32A chuyên dụng trên bảng điện — không phải vào biến tần. Một màn hình năng lượng (ngàm CT clamp) cho phép bộ sạc xem lượng năng lượng dư thừa thực tế và tự điều chỉnh công suất tăng giảm tương ứng.',
  scenario_solar_ev_goal: 'Sạc EV miễn phí bằng năng lượng mặt trời dư thừa. Tránh lấy điện từ lưới để sạc EV.',
  scenario_solar_ev_context: 'Bộ sạc EV nằm trên bảng điện chính — nó lấy điện từ bất kỳ nguồn nào cấp vào bảng điện (mặt trời, pin lưu trữ, hoặc lưới). Ngàm CT clamp giám sát kết nối lưới: khi năng lượng mặt trời dư thừa đẩy đồng hồ nhập lưới về 0, bộ sạc sẽ tăng công suất. Nếu không có ngàm CT clamp hoặc màn hình năng lượng, không thể sạc "chỉ năng lượng mặt trời".',

  scenario_full_system_name: 'Hệ thống Đầy đủ — Điện Mặt trời + Pin + Xe điện',
  scenario_full_system_tagline: 'Hệ thống hoàn chỉnh hướng tới sống tự chủ (off-grid-leaning)',
  scenario_full_system_description: 'Cấu hình mà hầu hết chủ nhà đều hướng tới: tấm pin mặt trời, biến tần lai (hybrid inverter), pin lưu trữ gia đình, và sạc EV thông minh — tất cả được điều phối bởi một màn hình năng lượng. Ưu tiên sử dụng điện mặt trời trước, lưu trữ phần thừa vào pin, dùng pin sạc EV qua đêm, và chỉ dùng điện lưới khi cần thiết.',
  scenario_full_system_goal: 'Đạt được độ tự chủ 90%+. Sử dụng năng lượng mặt trời cho các tải ban ngày, pin lưu trữ cho buổi tối, và lưới điện chỉ để dự phòng.',
  scenario_full_system_context: 'Đây là kịch bản mà sự tương tác giữa các thành phần quan trọng nhất. Đồng hồ lưới thấy luồng điện ròng ở ranh giới nhà. Màn hình năng lượng cung cấp dữ liệu thời gian thực cho HEMS (Hệ thống Quản lý Năng lượng Hộ gia đình) để đưa ra quyết định thông minh cho cả bốn thiết bị.',

  scenario_zero_export_name: 'Không Xuất Lưới — Căn hộ / Mạng nội bộ (Embedded Network)',
  scenario_zero_export_tagline: 'Không được phép xuất điện — sử dụng mọi watt tại chỗ',
  scenario_zero_export_description: 'Một số nhà ở trong các mạng nội bộ (khu chung cư, khu đô thị mới) hoặc bị nhà phân phối điện (DNSP) cấm xuất điện lên lưới. Mọi watt điện mặt trời đều phải được tiêu thụ hoặc lưu trữ tại chỗ. Việc này yêu cầu biến tần phải tự điều tiết công suất theo thời gian thực sử dụng phản hồi từ ngàm CT clamp.',
  scenario_zero_export_goal: 'Sử dụng 100% điện mặt trời tại chỗ. Pin lưu trữ sẽ hấp thụ phần dư; biến tần tự giảm công suất nếu pin đầy.',
  scenario_zero_export_context: 'Chế độ không xuất lưới được cấu hình trong cài đặt của biến tần, với một ngàm CT clamp trên kết nối lưới điện cung cấp phản hồi theo thời gian thực. Màn hình năng lượng là thứ thiết yếu ở đây — nếu không có nó, biến tần sẽ không biết khi nào cần giảm công suất.',

  scenario_ev_no_ct_name: 'Sạc EV — Không có ngàm CT Clamp (Tốc độ Thủ công)',
  scenario_ev_no_ct_tagline: 'Điện mặt trời + EV nhưng không có màn hình năng lượng — điều khiển hạn chế',
  scenario_ev_no_ct_description: 'Một chủ xe EV có điện mặt trời nhưng không có ngàm CT clamp hoặc màn hình năng lượng. Do không có dữ liệu năng lượng mặt trời dư thừa theo thời gian thực, bộ sạc không thể tự động bám theo lượng điện được sản xuất. Chủ nhà phải tự thiết lập một dòng sạc cố định thủ công — thường là 6–10A để nằm "khoảng" trong giới hạn sản lượng mặt trời. Khi mặt trời giảm (do mây, buổi chiều), điện lưới tự động bù vào và chủ nhà không có cách nào ngăn cản.',
  scenario_ev_no_ct_goal: 'Hiểu được chi phí của việc không có ngàm CT clamp. So sánh điện lưới nhập ở đây với kịch bản Điện Mặt trời + Xe điện (Có CT Clamp) để thấy sự khác biệt về số tiền.',
  scenario_ev_no_ct_context: 'Nếu không có ngàm CT clamp, các tính năng sạc thông minh như chế độ "Chỉ Điện Mặt trời" hoặc "Eco" sẽ không khả dụng. Bộ sạc chạy ở một dòng điện cố định do người dùng đặt bất kể điều kiện năng lượng mặt trời ra sao. Lắp đặt ngàm CT clamp ($150–300 cho Shelly EM hoặc Emporia Vue) sẽ cho phép sạc bằng năng lượng mặt trời tự động và có thể hoàn vốn chỉ trong vài tháng.',

  // ── Component unlock strings ──
  unlock: {
    gridMeter: [
      'Ghi lại lượng điện nhập & xuất để tính hóa đơn (Đồng hồ NMI)',
      'Thiết lập quy tắc giới hạn xuất (ví dụ: 5 kW ở các khu vực Ausgrid)',
      'Kích hoạt tín dụng biểu giá điện hòa lưới (FiT) từ nhà bán lẻ của bạn',
    ],
    energyMonitor: [
      'Hiển thị lượng điện mặt trời dư thừa theo thời gian thực cho HEMS',
      'Cần thiết cho việc sạc EV chỉ bằng năng lượng mặt trời (phản hồi từ ngàm CT clamp)',
      'Cần thiết để biến tần điều tiết giảm công suất (chế độ không xuất lưới)',
      'Cho phép đưa ra các quyết định điều phối pin lưu trữ thông minh',
    ],
    mainSwitchboard: [
      'Trung tâm phân phối điện xoay chiều (AC) — mọi tải đều kết nối tại đây',
      'Sạc xe điện (EV) lấy điện từ bảng điện này, không phải từ biến tần',
      'Cả điện mặt trời (qua biến tần) và điện lưới đều cấp vào bảng này',
    ],
    inverter: [
      'Chuyển đổi điện một chiều (DC) của năng lượng mặt trời thành điện xoay chiều (AC) cho gia đình',
      'Chế độ lai (Hybrid): quản lý sạc pin lưu trữ kết nối DC',
      'Chế độ không xuất lưới: điều tiết công suất đầu ra thông qua phản hồi từ ngàm CT clamp',
    ],
    battery: [
      'Lưu trữ lượng điện mặt trời dư thừa để sử dụng vào buổi tối & qua đêm',
      'Nâng mức độ tự chủ từ khoảng 35% lên hơn 80% vào những ngày nắng',
      'Có thể được sạc từ lưới điện vào ban đêm với các mức giá điện thấp (off-peak)',
    ],
    evCharger: [
      'OCPP 2.0.1: sạc thông minh, quản lý tải động',
      'Chế độ Chỉ Điện Mặt trời: chỉ sạc khi năng lượng mặt trời dư thừa > mức tối thiểu (cần có ngàm CT clamp)',
      'Chế độ Theo Lịch: sạc vào thời điểm giá điện rẻ nhất ngoài giờ cao điểm',
    ],
  },

  // ── Education ──
  learn_title: 'Học hỏi: Các Hệ thống Năng lượng Hộ gia đình',
  learn_beginner_subtitle: 'Các khái niệm cơ bản để hiểu về năng lượng hộ gia đình. Chuyển sang Nâng cao để xem thêm các nội dung kỹ thuật.',
  learn_advanced_subtitle: 'Tất cả các chủ đề được hiển thị, bao gồm cả thiết kế hệ thống nâng cao và các chi tiết kỹ thuật.',

  learn_sections: [
    {
      title: '☀️ Hệ thống Điện mặt trời Hộ gia đình Hoạt động như thế nào?',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            Hệ thống điện mặt trời gia đình chuyển đổi ánh sáng mặt trời thành điện năng có thể sử dụng được cho ngôi nhà của bạn. Dưới đây là cách dòng năng lượng di chuyển:
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
            Ánh sáng mặt trời → <strong>Tấm pin Mặt trời</strong> (Điện một chiều DC)
            <br />
            &nbsp;&nbsp;→ <strong>Biến tần (Inverter)</strong> (Chuyển đổi DC sang AC)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;→ <strong>Ngôi nhà của bạn</strong> (Cung cấp năng lượng cho thiết bị)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;→ <strong>Pin lưu trữ (Battery)</strong> (Lưu trữ phần dư)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;→ <strong>Lưới điện (Grid)</strong> (Xuất phần thừa)
          </div>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Tấm pin Mặt trời</strong> được làm bằng các tế bào quang điện (PV) tạo ra dòng điện một chiều (DC) khi tiếp xúc với ánh sáng mặt trời. Ngay cả vào những ngày nhiều mây, các tấm pin vẫn tạo ra năng lượng, mặc dù ở mức thấp hơn.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Biến tần</strong> là bộ não của hệ thống. Nó chuyển đổi dòng điện một chiều từ các tấm pin thành dòng điện xoay chiều (AC) mà các thiết bị trong nhà bạn sử dụng. Một biến tần lai (hybrid inverter) cũng có thể quản lý pin lưu trữ.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            Nhà của bạn sẽ sử dụng điện mặt trời trước. Bất kỳ lượng điện dư thừa nào cũng có thể được lưu trữ trong một <strong style={{ color: '#bb9af7' }}>pin lưu trữ gia đình</strong> để sử dụng sau, hoặc xuất lên <strong style={{ color: '#bb9af7' }}>lưới điện</strong> để nhận khoản tín dụng từ Biểu giá Điện hòa lưới (FiT).
          </p>
          <p style={{ margin: 0, color: '#73daca' }}>
            Mục tiêu là sử dụng càng nhiều năng lượng mặt trời của chính bạn càng tốt — điều này được gọi là <strong>tự tiêu thụ</strong>, và nó sẽ giúp bạn tiết kiệm được nhiều tiền nhất.
          </p>
        </>
      ),
    },
    {
      title: '🔌 Đồng hồ Lưới vs Màn hình Năng lượng — Khác biệt là gì?',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            Có <strong>hai thiết bị đo lường rất khác nhau</strong> trong một ngôi nhà có điện mặt trời. Chúng thường bị nhầm lẫn vì cả hai đều đo điện — nhưng chúng nằm ở các vị trí khác nhau, phục vụ các mục đích khác nhau, và được sở hữu bởi các bên khác nhau.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #6366f1' }}>
              <strong style={{ color: '#6366f1' }}>Đồng hồ Lưới (Đồng hồ NMI)</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                Đây là <strong>đồng hồ hai chiều của Ausgrid / DNSP</strong> tại ranh giới nhà. Do nhà phân phối điện của bạn lắp đặt và sở hữu. Ghi lại tổng lượng điện nhập và xuất trên toàn bộ ranh giới để tính tiền. Bạn không thể đọc hoặc điều khiển đồng hồ này trực tiếp.
              </p>
              <ul style={{ margin: '8px 0 0', paddingLeft: 16, fontSize: 12, color: '#9ca3af' }}>
                <li style={{ marginBottom: 3 }}>Thiết lập quy tắc giới hạn xuất (ví dụ: 5 kW ở khu vực Ausgrid)</li>
                <li style={{ marginBottom: 3 }}>Cung cấp dữ liệu hóa đơn cho nhà bán lẻ của bạn</li>
                <li style={{ marginBottom: 3 }}>Kích hoạt tín dụng FiT</li>
                <li>Bạn trả tiền cho nhà bán lẻ; họ là người đọc đồng hồ này</li>
              </ul>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #ec4899' }}>
              <strong style={{ color: '#ec4899' }}>Màn hình Năng lượng (Ngàm CT Clamp)</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                Một <strong>thiết bị bên phía người tiêu dùng</strong> do bạn lắp đặt tại bảng điện chính. Ví dụ: Shelly EM, Emporia Vue, IoTaWatt. Sử dụng các cảm biến CT dạng kẹp (clip-on) trên mỗi mạch. Cung cấp cho HEMS hoặc biến tần của bạn số đo công suất theo thời gian thực (tính bằng mili-giây).
              </p>
              <ul style={{ margin: '8px 0 0', paddingLeft: 16, fontSize: 12, color: '#9ca3af' }}>
                <li style={{ marginBottom: 3 }}>Cần thiết cho việc sạc EV chỉ bằng năng lượng mặt trời</li>
                <li style={{ marginBottom: 3 }}>Cần thiết để biến tần điều tiết giới hạn xuất về không</li>
                <li style={{ marginBottom: 3 }}>Cho phép các quyết định điều phối pin lưu trữ thông minh</li>
                <li>Bạn sở hữu nó và tự đọc dữ liệu của nó</li>
              </ul>
            </div>
          </div>
          <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, marginBottom: 10, fontFamily: 'monospace', fontSize: 12, color: '#9ece6a', lineHeight: 1.9 }}>
            Lưới điện → <strong>Đồng hồ Lưới (NMI)</strong> → Bảng điện Chính<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↑<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Màn hình Năng lượng (CT clamp)</strong> ← kẹp vào dây điện trên bảng<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓ cấp dữ liệu cho HEMS / biến tần
          </div>
          <p style={{ margin: 0, color: '#73daca', fontSize: 13 }}>
            <strong>Quy tắc chính:</strong> Đồng hồ NMI là tờ hóa đơn của bạn. Ngàm CT clamp là bộ não của bạn. Để tự tiêu thụ năng lượng mặt trời thông minh — đặc biệt là sạc EV chỉ bằng năng lượng mặt trời — bạn cần ngàm CT clamp. Chỉ có đồng hồ NMI là không đủ.
          </p>
        </>
      ),
    },
    {
      title: '💰 Hiểu rõ Hóa đơn Tiền điện của Bạn',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            Với hệ thống điện mặt trời, hóa đơn tiền điện của bạn được tính toán dựa trên hai luồng chính:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #f7768e' }}>
              <strong style={{ color: '#f7768e' }}>Nhập (bạn trả tiền)</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                Lượng điện lấy từ lưới khi hệ thống mặt trời và pin của bạn không thể đáp ứng nhu cầu. Thông thường khoảng $0.25–$0.45/kWh tùy thuộc vào biểu giá và thời gian trong ngày.
              </p>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #9ece6a' }}>
              <strong style={{ color: '#9ece6a' }}>Xuất (bạn kiếm được)</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                Lượng điện mặt trời dư thừa đưa lên lưới điện mang lại cho bạn tín dụng từ biểu giá điện hòa lưới (FiT). Thường từ $0.05–$0.12/kWh — ít hơn nhiều so với số tiền bạn trả để nhập.
              </p>
            </div>
          </div>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Khoản tiết kiệm do tự tiêu thụ:</strong> Mỗi kWh năng lượng mặt trời bạn sử dụng trực tiếp sẽ giúp tránh việc phải nhập điện với mức giá bán lẻ đầy đủ. Nếu giá nhập là $0.30/kWh và xuất là $0.08/kWh, mỗi kWh tự tiêu thụ sẽ giúp bạn tiết kiệm $0.30 thay vì chỉ kiếm được $0.08.
          </p>
          <p style={{ margin: 0, color: '#73daca' }}>
            Đây là lý do tại sao việc tối đa hóa mức tự tiêu thụ (sử dụng năng lượng mặt trời trực tiếp hoặc lưu trữ vào pin) lại có giá trị hơn nhiều so với việc xuất lên lưới điện.
          </p>
        </>
      ),
    },
    {
      title: '🔋 Pin Lưu trữ Hộ gia đình là gì?',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            Pin lưu trữ gia đình (hay còn gọi là pin mặt trời hoặc hệ thống lưu trữ năng lượng) giúp lưu lại lượng năng lượng mặt trời dư thừa để sử dụng khi không có nắng.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Cách thức hoạt động:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>Sạc</strong> vào ban ngày khi sản lượng điện mặt trời vượt quá mức tiêu thụ của hộ gia đình
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Xả</strong> vào buổi tối và ban đêm để cung cấp điện cho nhà thay vì nhập từ lưới
            </li>
            <li style={{ marginBottom: 4 }}>
              Làm tăng đáng kể <strong>tỷ lệ tự tiêu thụ</strong> của bạn — từ mức thông thường 30–40% khi không có pin lên 60–80% khi có pin
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Thông số kỹ thuật tiêu biểu:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>Dung lượng (Capacity):</strong> 5–15 kWh có thể sử dụng (một ngôi nhà điển hình dùng 8–12 kWh qua đêm)
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Công suất (Power):</strong> 2.5–5 kW tốc độ sạc/xả liên tục
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Tuổi thọ vòng đời (Cycle life):</strong> 4,000–10,000 chu kỳ tùy vào loại hóa học
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Hiệu suất khứ hồi (Round-trip efficiency):</strong> 90–95% (bạn mất 5–10% điện trong quá trình sạc/xả)
            </li>
          </ul>
          <p style={{ margin: 0, color: '#73daca' }}>
            Một hệ thống pin lưu trữ có giá trị cao nhất khi có khoảng cách lớn giữa biểu giá bán điện và biểu giá nhập, hoặc nếu bạn đang sử dụng gói cước phân giá theo thời gian (time-of-use plan).
          </p>
        </>
      ),
    },
    {
      title: '🚗 Sạc Xe điện (EV) tại Nhà',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            Sạc một chiếc xe điện tại nhà là một trong những mức tải có thể kiểm soát được lớn nhất trong hộ gia đình, khiến nó trở nên lý tưởng cho các giải pháp quản lý năng lượng thông minh.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Các cấp độ sạc:</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #e0af68' }}>
              <strong style={{ color: '#e0af68' }}>Cấp độ 1 (Chậm)</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                Ổ cắm tiêu chuẩn, 1.4–2.4 kW. Bổ sung khoảng 8–15 km phạm vi mỗi giờ. Phù hợp cho việc cắm sạc bổ sung qua đêm với quãng đường di chuyển ngắn.
              </p>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #7aa2f7' }}>
              <strong style={{ color: '#7aa2f7' }}>Cấp độ 2 (Nhanh)</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                Thiết bị EVSE chuyên dụng, 3.7–22 kW. Một pha (lên tới 7.4 kW) hoặc ba pha (lên tới 22 kW). Bổ sung 25–120 km/giờ.
              </p>
            </div>
          </div>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Một pha vs ba pha:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>Một pha (Single phase):</strong> Phổ biến nhất trong nhà ở. Tối đa 32A × 230V = 7.4 kW
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Ba pha (Three phase):</strong> Có sẵn ở một số thị trường. Tối đa 32A × 3 × 230V = 22 kW
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Lợi ích của sạc thông minh:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              Sạc bằng lượng điện mặt trời dư thừa để giảm thiểu tối đa chi phí tiền điện
            </li>
            <li style={{ marginBottom: 4 }}>
              Lên lịch sạc vào những khoảng thời gian có biểu giá rẻ ngoài giờ cao điểm
            </li>
            <li style={{ marginBottom: 4 }}>
              Điều chỉnh động tốc độ sạc để khớp với lượng điện mặt trời đang có
            </li>
            <li style={{ marginBottom: 4 }}>
              Ngăn ngừa tình trạng quá tải đối với kết nối lưới điện của bạn
            </li>
          </ul>
          <p style={{ margin: 0, color: '#73daca' }}>
            Pin của xe điện (40–100 kWh) lớn hơn nhiều so với pin lưu trữ gia đình (5–15 kWh), vì vậy các quyết định sạc thông minh có tác động rất lớn đến chi phí năng lượng của bạn.
          </p>
        </>
      ),
    },
    {
      title: '⚡ Biến tần (Inverter) là gì?',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            Biến tần chuyển đổi dòng điện một chiều (DC) từ các tấm pin mặt trời thành dòng điện xoay chiều (AC) mà ngôi nhà của bạn và lưới điện sử dụng. Nó là thành phần trung tâm của bất kỳ hệ thống điện mặt trời nào.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Các loại biến tần:</strong>
          </p>
          <div style={{ marginBottom: 12 }}>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, marginBottom: 8, borderLeft: '3px solid #e0af68' }}>
              <strong style={{ color: '#e0af68' }}>Biến tần Chuỗi (String Inverter)</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                Các tấm pin được nối tiếp với nhau (thành một "chuỗi"). Một biến tần xử lý toàn bộ chuỗi. Tiết kiệm chi phí nhưng tấm pin yếu nhất sẽ làm giảm hiệu suất của toàn bộ chuỗi. Tốt nhất cho các mái nhà không bị bóng râm che khuất.
              </p>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, marginBottom: 8, borderLeft: '3px solid #7aa2f7' }}>
              <strong style={{ color: '#7aa2f7' }}>Biến tần Vi mô (Micro Inverter)</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                Mỗi tấm pin có biến tần nhỏ của riêng nó. Các tấm pin hoạt động độc lập, do đó bóng râm trên một tấm pin sẽ không ảnh hưởng đến các tấm khác. Chi phí cao hơn nhưng tốt hơn cho các mái nhà phức tạp hoặc bị che bóng một phần.
              </p>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #9ece6a' }}>
              <strong style={{ color: '#9ece6a' }}>Biến tần Lai (Hybrid Inverter)</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                Kết hợp biến tần năng lượng mặt trời và biến tần pin lưu trữ vào trong một thiết bị. Quản lý việc sản xuất điện mặt trời, sạc/xả pin và tương tác với lưới điện. Là lựa chọn phổ biến nhất cho các hệ thống lắp đặt mới có pin lưu trữ.
              </p>
            </div>
          </div>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Hiệu suất:</strong> Các biến tần hiện đại đạt hiệu suất 96–98%. Điều này có nghĩa là với mỗi 1000W điện DC đầu vào, bạn sẽ nhận được 960–980W điện AC đầu ra. Lượng thất thoát nhỏ sẽ bị biến thành nhiệt năng.
          </p>
          <p style={{ margin: 0, color: '#73daca' }}>
            Việc định cỡ biến tần rất quan trọng: nó phải tương đối phù hợp với kích thước mảng pin mặt trời của bạn. Biến tần quá nhỏ sẽ cắt xén (lãng phí) lượng sản xuất đỉnh, trong khi biến tần quá lớn sẽ gây lãng phí tiền bạc.
          </p>
        </>
      ),
    },
    {
      title: '📏 Hướng dẫn Cỡ (Sizing) Hệ thống',
      advanced: true,
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            Định cỡ đúng cho hệ thống điện mặt trời, pin lưu trữ và biến tần của bạn là rất quan trọng để tối đa hóa lợi tức đầu tư (ROI).
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Kích thước mảng năng lượng mặt trời:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              Bắt đầu với lượng điện năng tiêu thụ hàng năm của bạn (ví dụ: 6,000 kWh/năm)
            </li>
            <li style={{ marginBottom: 4 }}>
              Chia cho số giờ nắng đỉnh tại địa phương của bạn × 365 (ví dụ: 4.5 giờ × 365 = 1,642)
            </li>
            <li style={{ marginBottom: 4 }}>
              Áp dụng hệ số suy giảm (derate) 0.8 do thất thoát: 6,000 / (1,642 × 0.8) ≈ hệ thống 4.6 kW
            </li>
            <li style={{ marginBottom: 4 }}>
              Quy tắc thực nghiệm: 1 kW điện mặt trời tạo ra khoảng 1,200–1,600 kWh/năm tùy theo vị trí địa lý
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Định cỡ pin lưu trữ:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              Tính toán mức tiêu thụ vào buổi tối/đêm của bạn (thông thường là 8–12 kWh cho một ngôi nhà trung bình)
            </li>
            <li style={{ marginBottom: 4 }}>
              Chọn một pin lưu trữ đủ sức đáp ứng 80–100% tải dùng ban đêm này
            </li>
            <li style={{ marginBottom: 4 }}>
              Chú ý đến Độ sâu Xả (DoD): pin 10 kWh ở mức 90% DoD cung cấp 9 kWh khả dụng
            </li>
            <li style={{ marginBottom: 4 }}>
              Định cỡ pin quá lớn sẽ mang lại hiệu quả giảm dần (diminishing returns) trừ khi bạn có hệ thống mặt trời rất lớn
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Định cỡ biến tần:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              Phù hợp biến tần với mảng pin: tỷ lệ DC:AC từ 1:1 đến 1.3:1 là phổ biến
            </li>
            <li style={{ marginBottom: 4 }}>
              Cỡ hơi vượt chuẩn một chút (ví dụ: mảng 6.6 kW trên biến tần 5 kW) sẽ giúp tối đa hóa sản lượng vào buổi sáng và buổi chiều
            </li>
            <li style={{ marginBottom: 4 }}>
              Đảm bảo biến tần hỗ trợ được tốc độ sạc/xả của pin nếu đây là hệ thống lai (hybrid)
            </li>
          </ul>
        </>
      ),
    },
    {
      title: '🔌 Các loại Kết nối Lưới điện',
      advanced: true,
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            Cách hệ thống mặt trời của bạn kết nối vào lưới điện sẽ ảnh hưởng đến những gì bạn có thể lắp đặt và lượng điện bạn có thể xuất ra.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Số pha kết nối:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>Một pha (Single phase):</strong> Kết nối tiêu chuẩn của khu dân cư. Cầu chì chính thường ở mức 40–63A. Giới hạn biến tần ở mức 5 kW ở nhiều khu vực. Gồm một dây nóng.
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Ba pha (Three phase):</strong> Phổ biến trong những ngôi nhà mới xây và một số vùng. Có ba dây nóng, mỗi dây mang một pha. Cho phép dùng biến tần lớn hơn (lên tới 15–30 kW), sạc xe điện ba pha (22 kW) và cân bằng tải tốt hơn.
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Các cấu hình xuất (Export configurations):</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>Xuất toàn bộ (Full export):</strong> Không có giới hạn về lượng điện có thể truyền lên lưới (hiếm gặp ở các hệ thống mới lắp)
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Giới hạn xuất (Export limited):</strong> Biến tần được cấu hình để giới hạn mức xuất lên lưới ở một giá trị cố định (ví dụ: 5 kW). Năng lượng mặt trời dư thừa bị cắt bớt (curtailed) hoặc chuyển hướng sang sạc pin/EV.
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Không xuất lưới (Zero export):</strong> Không cho phép xuất bất kỳ lượng điện nào. Biến tần phải điều tiết giảm công suất sản xuất để khớp chính xác với mức tiêu thụ. Yêu cầu ngàm CT clamp hoặc đồng hồ để phản hồi theo thời gian thực.
            </li>
          </ul>
          <p style={{ margin: 0, color: '#73daca' }}>
            Giới hạn xuất điện giúp bạn lắp đặt hệ thống năng lượng mặt trời lớn hơn ngay cả khi công suất xuất bị giới hạn — thay vào đó, lượng điện thừa sẽ sạc vào pin lưu trữ hoặc EV.
          </p>
        </>
      ),
    },
    {
      title: '🧪 So sánh Hóa học Pin Lưu trữ',
      advanced: true,
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            Hai loại hóa học lithium-ion thống trị trong pin gia đình là LFP và NMC.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #9ece6a' }}>
              <strong style={{ color: '#9ece6a' }}>LFP (Lithium Iron Phosphate)</strong>
              <ul style={{ margin: '8px 0 0', paddingLeft: 16, fontSize: 13 }}>
                <li style={{ marginBottom: 3 }}>Tuổi thọ từ 6,000–10,000+ chu kỳ</li>
                <li style={{ marginBottom: 3 }}>Rất an toàn, ổn định về nhiệt</li>
                <li style={{ marginBottom: 3 }}>100% Độ sâu xả (DoD)</li>
                <li style={{ marginBottom: 3 }}>Mật độ năng lượng thấp hơn (nặng hơn)</li>
                <li style={{ marginBottom: 3 }}>Không có coban — chuỗi cung ứng đạo đức hơn</li>
                <li>Ví dụ: BYD, Tesla Powerwall 3</li>
              </ul>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #7aa2f7' }}>
              <strong style={{ color: '#7aa2f7' }}>NMC (Nickel Manganese Cobalt)</strong>
              <ul style={{ margin: '8px 0 0', paddingLeft: 16, fontSize: 13 }}>
                <li style={{ marginBottom: 3 }}>Tuổi thọ từ 3,000–5,000 chu kỳ</li>
                <li style={{ marginBottom: 3 }}>Mật độ năng lượng cao hơn (nhẹ hơn)</li>
                <li style={{ marginBottom: 3 }}>Thường được khuyến nghị mức 80–90% DoD</li>
                <li style={{ marginBottom: 3 }}>Đòi hỏi quản lý tản nhiệt nhiều hơn</li>
                <li style={{ marginBottom: 3 }}>Chi phí mỗi chu kỳ cao hơn trong suốt vòng đời</li>
                <li>Ví dụ: LG RESU, Powerwall đời cũ</li>
              </ul>
            </div>
          </div>
          <p style={{ margin: 0, color: '#73daca' }}>
            Đối với việc sử dụng (cycling) hằng ngày trong hệ thống điện mặt trời gia đình, LFP hiện là loại hóa học được ưa chuộng do tuổi thọ chu kỳ dài hơn, độ an toàn và chi phí cho mỗi kWh dần được cải thiện theo thời gian.
          </p>
        </>
      ),
    },
    {
      title: '🌡️ Tích hợp Bơm nhiệt (Heat Pump)',
      advanced: true,
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            Bơm nhiệt là máy sưởi điện có hiệu suất cực cao và kết hợp rất tốt với các hệ thống điện mặt trời, sử dụng điện năng để di chuyển nhiệt thay vì tự sinh ra nhiệt.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Hệ số COP (Coefficient of Performance):</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              Mức COP 3.5 nghĩa là với mỗi 1 kW điện năng tiêu thụ, bơm nhiệt cung cấp 3.5 kW nhiệt lượng
            </li>
            <li style={{ marginBottom: 4 }}>
              COP thay đổi tùy theo nhiệt độ bên ngoài — sẽ thấp hơn khi trời quá lạnh
            </li>
            <li style={{ marginBottom: 4 }}>
              Mức COP theo mùa (SCOP) thường đạt 3.0–4.0 đối với các bơm nhiệt nguồn không khí hiện đại
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Lưu trữ nhiệt:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              Bể nước nóng đóng vai trò như một cục pin nhiệt — làm nóng nước bằng điện mặt trời dư thừa vào ban ngày
            </li>
            <li style={{ marginBottom: 4 }}>
              Làm ấm trước ngôi nhà của bạn trước các khoảng thời gian giá điện đắt đỏ bằng cách sử dụng điện mặt trời hoặc điện giá rẻ
            </li>
            <li style={{ marginBottom: 4 }}>
              Các bể đệm (buffer tanks) lưu trữ năng lượng nhiệt với tỷ lệ hao hụt cực thấp trong suốt vài giờ đồng hồ
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Tương tác lưới điện thông minh:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              Một hệ thống HEMS có thể phát tín hiệu cho bơm nhiệt chạy khi điện mặt trời đang dư hoặc giá điện trên lưới đang rẻ
            </li>
            <li style={{ marginBottom: 4 }}>
              Giao diện SG Ready (phổ biến ở các bơm nhiệt châu Âu) cho phép điều khiển từ bên ngoài thông qua hai đầu vào kỹ thuật số
            </li>
            <li style={{ marginBottom: 4 }}>
              Một số bơm nhiệt hỗ trợ Modbus để tích hợp trực tiếp vào hệ thống quản lý năng lượng
            </li>
          </ul>
        </>
      ),
    },
    {
      title: '📡 Giám sát và Dữ liệu',
      advanced: true,
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            Việc giám sát hệ thống năng lượng của bạn là rất cần thiết để hiểu được hiệu suất, phát hiện các vấn đề và tối ưu hóa việc sử dụng.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Ngàm CT Clamp (Máy biến dòng):</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              Các cảm biến dạng kẹp (clip-on) dùng để đo dòng điện chạy qua dây cáp mà không cần phải cắt dây
            </li>
            <li style={{ marginBottom: 4 }}>
              Được đặt trên đường điện lưới, đường điện mặt trời và các mạch riêng lẻ để đo dòng điện
            </li>
            <li style={{ marginBottom: 4 }}>
              Được nhiều biến tần và màn hình năng lượng sử dụng để phản hồi dữ liệu theo thời gian thực
            </li>
            <li style={{ marginBottom: 4 }}>
              Độ chính xác phụ thuộc vào chất lượng — thường dao động từ 1–2% đối với các CT tốt
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Các hệ thống giám sát năng lượng:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>Cổng thông tin biến tần:</strong> Hầu hết các biến tần đều có bảng điều khiển đám mây (Fronius Solar.web, Huawei FusionSolar, SMA Sunny Portal)
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Thiết bị giám sát chuyên dụng:</strong> Các thiết bị như Shelly EM, Emporia Vue hoặc IoTaWatt cung cấp tính năng giám sát mạch ở cấp độ rất chi tiết
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Nền tảng DIY:</strong> Home Assistant với bảng điều khiển năng lượng, Grafana kết hợp với InfluxDB để lưu trữ dữ liệu chuỗi thời gian
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>HEMS (Hệ thống Quản lý Năng lượng Hộ gia đình):</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              Bộ điều khiển tập trung có khả năng đọc dữ liệu từ tất cả thiết bị và đưa ra các quyết định tối ưu hóa
            </li>
            <li style={{ marginBottom: 4 }}>
              Các giao thức được sử dụng: Modbus TCP/RTU cho biến tần và đồng hồ, OCPP cho bộ sạc EV, MQTT cho cảm biến IoT
            </li>
            <li style={{ marginBottom: 4 }}>
              Có thể tự động hóa việc sạc pin, sạc EV, lập lịch bơm nhiệt và quản lý sản lượng xuất lưới
            </li>
          </ul>
        </>
      ),
    },
    {
      title: '🔌 Các Tính năng của Sạc EV tại Nhà — Sạc Thông minh Thực sự Làm gì?',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            Không phải tất cả các bộ sạc EV tại nhà đều như nhau. Một bộ sạc cơ bản cung cấp công suất cố định. Một bộ sạc thông minh tích cực giao tiếp với hệ thống năng lượng nhà bạn và điều chỉnh sạc theo thời gian thực.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Các tính năng cơ bản (tất cả sạc tại nhà):</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>Cung cấp công suất đầu ra cố định ở định mức ampe (ví dụ: 16A hoặc 32A)</li>
            <li style={{ marginBottom: 4 }}>Sạc theo lịch — đặt thời gian bắt đầu/kết thúc trong ứng dụng</li>
            <li style={{ marginBottom: 4 }}>Ghi nhận điện năng tiêu thụ trong từng phiên sạc</li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Tính năng thông minh / cao cấp:</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #9ece6a' }}>
              <strong style={{ color: '#9ece6a' }}>Điều chỉnh dòng điện động</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                Bộ sạc liên tục điều chỉnh dòng điện (ví dụ: 6A–32A) dựa trên tín hiệu từ màn hình năng lượng. Đây là cơ chế cốt lõi để sạc chỉ bằng năng lượng mặt trời — bộ sạc bám theo đường cong của năng lượng dư thừa trong thời gian thực.
              </p>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #7aa2f7' }}>
              <strong style={{ color: '#7aa2f7' }}>Điều khiển từ xa qua App + Cập nhật OTA</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                Bắt đầu/dừng các phiên từ xa, định cấu hình chế độ sạc, nhận các bản cập nhật chương trình cơ sở (firmware) qua mạng. Giúp bộ sạc luôn cập nhật các giao thức và tính năng mới mà không cần gọi thợ điện tới tận nơi.
              </p>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #bb9af7' }}>
              <strong style={{ color: '#bb9af7' }}>Plug &amp; Charge (Cắm và Sạc - ISO 15118)</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                Xe điện và bộ sạc tự động xác thực với nhau qua các chứng chỉ TLS ngay khi cáp được cắm vào — không cần thẻ RFID hay ứng dụng. Đây là yêu cầu bắt buộc cho các bộ sạc V2G (hai chiều) trong tương lai.
              </p>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #e0af68' }}>
              <strong style={{ color: '#e0af68' }}>Sạc thông minh OCPP 2.0.1</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                Cho phép một hệ thống quản lý trung tâm (CSMS) gửi lịch trình công suất được gắn dấu thời gian đến bộ sạc. Bộ sạc thực thi lịch trình một cách độc lập — ngay cả khi mất mạng. Cần thiết để tham gia vào đáp ứng nhu cầu lưới điện và các mô hình VPP (Nhà máy điện ảo).
              </p>
            </div>
          </div>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Việc điều chỉnh dòng sạc liên tục có an toàn không?</strong>
          </p>
          <p style={{ margin: '0 0 8px', fontSize: 13 }}>
            Có — với điều kiện bộ sạc và EV sử dụng giao thức truyền thông tiêu chuẩn (tín hiệu PWM pilot trên cáp Mode 2/3, hoặc ISO 15118 trên CCS). Bộ sạc báo hiệu dòng điện khả dụng tối đa thông qua tín hiệu pilot; EV sẽ chỉ lấy đúng mức mà nó có thể nhận an toàn. Bộ sạc không thể ép EV kéo nhiều dòng hơn mức nó yêu cầu.
          </p>
          <p style={{ margin: 0, color: '#73daca', fontSize: 13 }}>
            <strong>Một quy tắc cứng ngắc:</strong> Hầu hết EV sẽ không chấp nhận mức sạc dưới 6A (1.4 kW với dòng 1 pha). Nếu lượng mặt trời dư thừa tụt xuống dưới mức này, một bộ sạc thông minh phải chọn tạm dừng phiên sạc hoặc lấy thêm từ lưới điện (chế độ Eco) để bù đắp, chứ không cố sạc ở mức 3A.
          </p>
        </>
      ),
    },
    {
      title: '☀️🔄 Tích hợp Biến tần Năng lượng Mặt trời + Sạc EV — Chúng có cần Cùng một Thương hiệu không?',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            Câu hỏi phổ biến từ các chủ sở hữu điện mặt trời khi muốn thêm sạc EV là: <em>{'"Tôi có cần bộ sạc Fronius/SMA/Huawei để hoạt động với biến tần Fronius/SMA/Huawei của tôi không?"'}</em> Câu trả lời ngắn gọn là <strong>không</strong> — nhưng để hiểu tại sao thì cần phải biết thiết bị nào thực sự điều khiển việc sạc.
          </p>
          <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, marginBottom: 12, fontFamily: 'monospace', fontSize: 12, color: '#9ece6a', lineHeight: 1.9 }}>
            Tấm pin Mặt trời → Biến tần (DC→AC) → Bảng điện Chính<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↑<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Màn hình Năng lượng (CT clamp)<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓ dữ liệu thời gian thực<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sạc Xe điện (EV) ← tự điều chỉnh dòng
          </div>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Vai trò của biến tần:</strong> Chuyển đổi dòng DC sang AC và đồng bộ với lưới điện. Nó không quyết định mức công suất mà bộ sạc EV tiêu thụ. Quyết định đó đến từ <strong>màn hình năng lượng</strong> (ngàm CT clamp) và <strong>logic điều khiển nội bộ của bộ sạc</strong>.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Điều thực sự kích hoạt sạc điện mặt trời (solar-only):</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>Ngàm CT clamp / màn hình năng lượng</strong> tại bảng điện đo lường điện mặt trời dư thừa theo thời gian thực
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Sạc EV</strong> đọc dữ liệu này (trực tiếp qua Modbus, hoặc qua HEMS/relay đám mây) và điều chỉnh dòng sạc tương ứng
            </li>
            <li style={{ marginBottom: 4 }}>
              Thương hiệu biến tần hoàn toàn không liên quan trong quá trình này — nó chỉ tạo ra điện AC
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Ưu điểm của cùng một thương hiệu (ví dụ: Fronius Wattpilot + Fronius Smart Meter):</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>Thiết lập cắm và chạy (plug-and-play) — không cần cấu hình thủ công</li>
            <li style={{ marginBottom: 4 }}>Một ứng dụng duy nhất dùng chung cho cả biến tần + sạc</li>
            <li style={{ marginBottom: 4 }}>Tích hợp chặt chẽ, chu kỳ cập nhật nhanh hơn</li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Phương án dựa trên tiêu chuẩn mở:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>Bất kỳ ngàm CT clamp nào mở giao tiếp qua Modbus hoặc MQTT (ví dụ: Shelly EM, IoTaWatt)</li>
            <li style={{ marginBottom: 4 }}>Bất kỳ bộ sạc tương thích OCPP nào (Myenergi Zappi, Ocular IQ, Smappee)</li>
            <li style={{ marginBottom: 4 }}>Tùy chọn dùng HEMS như Home Assistant để điều phối mọi thứ</li>
            <li style={{ marginBottom: 4 }}>Ưu điểm: hoán đổi thương hiệu thoải mái, hỗ trợ bất kỳ EV nào, dễ tích hợp nền tảng của bên thứ ba</li>
          </ul>
          <p style={{ margin: 0, color: '#73daca', fontSize: 13 }}>
            <strong>Tóm lại:</strong> Nếu bạn đã có biến tần Fronius, mua Fronius Wattpilot là con đường dễ nhất. Nhưng bạn không bị khóa chặt (lock-in) vào đó. Bất kỳ sạc thông minh nào có thể đọc dữ liệu từ ngàm CT clamp hoặc HEMS đều có thể đem lại kết quả sạc ưu tiên mặt trời tương tự.
          </p>
        </>
      ),
    },
    {
      title: '☁️ Đám mây vs Cục bộ — Chuyện gì Xảy ra Khi Mất kết nối Internet?',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            Nhiều sản phẩm năng lượng nhà thông minh phụ thuộc vào máy chủ đám mây (cloud) cho ứng dụng và logic điều khiển của chúng. Việc biết rõ tính năng nào yêu cầu có internet và tính năng nào chạy hoàn toàn cục bộ trên mạng nhà bạn là rất quan trọng.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #f7768e' }}>
              <strong style={{ color: '#f7768e' }}>Ngừng hoạt động nếu không có Internet</strong>
              <ul style={{ margin: '6px 0 0', paddingLeft: 16, fontSize: 13 }}>
                <li style={{ marginBottom: 3 }}>Điều khiển từ xa qua ứng dụng (bật/tắt khi ở ngoài)</li>
                <li style={{ marginBottom: 3 }}>Lịch sử và bảng điều khiển năng lượng trên đám mây</li>
                <li style={{ marginBottom: 3 }}>Cập nhật phần mềm OTA</li>
                <li style={{ marginBottom: 3 }}>Dự báo năng lượng mặt trời (dựa vào thời tiết)</li>
                <li>Dữ liệu giá điện theo thời gian thực</li>
              </ul>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #9ece6a' }}>
              <strong style={{ color: '#9ece6a' }}>Vẫn tiếp tục hoạt động cục bộ</strong>
              <ul style={{ margin: '6px 0 0', paddingLeft: 16, fontSize: 13 }}>
                <li style={{ marginBottom: 3 }}>Sản xuất điện mặt trời &amp; sạc EV</li>
                <li style={{ marginBottom: 3 }}>Sạc động "Chỉ Điện mặt trời" (kết nối CT clamp cục bộ)</li>
                <li style={{ marginBottom: 3 }}>Lịch trình sạc OCPP đã được tải xuống</li>
                <li style={{ marginBottom: 3 }}>Các chu kỳ sạc/xả của pin lưu trữ</li>
                <li>Hoạt động của Bơm nhiệt</li>
              </ul>
            </div>
          </div>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Tại sao sạc EV bằng điện mặt trời vẫn hoạt động offline:</strong> Ngàm CT clamp, sạc EV và hệ thống giao tiếp giữa chúng xảy ra hoàn toàn trên mạng cục bộ của bạn (hoặc thậm chí qua hệ thống dây điện cứng/Modbus). Không có đám mây nào tham gia vào vòng lặp điều chỉnh dòng điện theo thời gian thực này. Đám mây chỉ cần thiết cho việc ghi chép lịch sử và truy cập ứng dụng từ xa.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Thực hành tốt nhất để đạt độ ổn định:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>Đảm bảo bộ sạc EV của bạn có thể tự chạy logic sạc ngay tại thiết bị (kiểm tra tài liệu từ NSX)</li>
            <li style={{ marginBottom: 4 }}>Sử dụng các nền tảng tự động hóa ưu tiên cục bộ (local-first) (như Home Assistant, hay máy chủ OCPP cục bộ)</li>
            <li style={{ marginBottom: 4 }}>Chỉ sử dụng đám mây cho các bảng điều khiển giám sát, thông báo và truy cập từ xa</li>
            <li style={{ marginBottom: 4 }}>OCPP 2.0.1 cho phép tải lịch sạc xuống và thực thi trực tiếp trên bộ sạc — không cần máy chủ giám sát liên tục</li>
          </ul>
          <p style={{ margin: 0, color: '#73daca', fontSize: 13 }}>
            Một hệ thống được thiết kế tốt luôn giữ cho vòng điều khiển quan trọng nhất (điện mặt trời → CT clamp → sạc) hoàn toàn cục bộ. Đám mây rất hữu ích, nhưng nó không bao giờ nên là "điểm lỗi duy nhất" (single point of failure) cho việc tiêu thụ năng lượng hằng ngày của bạn.
          </p>
        </>
      ),
    },
    {
      title: '🚗 Các Bộ sạc EV Thông minh Được đề xuất cho Các Ngôi nhà sử dụng Điện Mặt trời ở Úc',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            Những bộ sạc này rất phù hợp với điều kiện của Úc (lưới điện một pha, giới hạn xuất 5 kW, các khu vực Ausgrid/Endeavour/SA Power) và hỗ trợ sạc điện mặt trời dư thừa mà không yêu cầu bị khóa vào một thương hiệu duy nhất.
          </p>

          <div style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase' as const, letterSpacing: '0.08em', marginBottom: 8 }}>Tích hợp Cao / Ưu tiên Mặt trời</div>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
              <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #9ece6a' }}>
                <strong style={{ color: '#9ece6a' }}>Myenergi Zappi (7.4 kW / 22 kW)</strong>
                <p style={{ margin: '4px 0 0', fontSize: 13, lineHeight: 1.6 }}>
                  Sạc điện mặt trời dư thừa hàng đầu với ba chế độ: Eco (mặt trời + bù từ lưới), Eco+ (chỉ mặt trời, tạm dừng khi lượng dư thừa giảm), và Boost (tốc độ tối đa). Hoạt động độc lập với một CT clamp gắn ngoài — không bị phụ thuộc vào thương hiệu biến tần. Có app điều khiển, hỗ trợ OCPP, mang tính định hướng tương lai.
                </p>
                <div style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>OCPP 1.6 · CT clamp ngoài · App điều khiển · 7.4 kW (1 pha)</div>
              </div>
              <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #bb9af7' }}>
                <strong style={{ color: '#bb9af7' }}>Ocular IQ Home Solar Smart Charger</strong>
                <p style={{ margin: '4px 0 0', fontSize: 13, lineHeight: 1.6 }}>
                  Được sản xuất tại Úc, thiết kế riêng cho các ngôi nhà dùng điện mặt trời. Tích hợp trực tiếp với hầu hết các thương hiệu biến tần qua Modbus hoặc API. Hỗ trợ Home Assistant. Có thể mở rộng để phối hợp với pin lưu trữ và V2H. Lựa chọn tuyệt vời nếu bạn thích kiểm soát cục bộ.
                </p>
                <div style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>OCPP 2.0.1 · Modbus · Local API · 7.4 kW</div>
              </div>
              <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #7aa2f7' }}>
                <strong style={{ color: '#7aa2f7' }}>Smappee EV Wall</strong>
                <p style={{ margin: '4px 0 0', fontSize: 13, lineHeight: 1.6 }}>
                  Ghép nối với Màn hình năng lượng Smappee (CT clamp) để tích hợp năng lượng mặt trời chặt chẽ. Hỗ trợ cân bằng tải động trên nhiều bộ sạc. Có OCPP, chạy trên mạng cục bộ, tích hợp bảng theo dõi nhà thông minh. Tốt cho hộ gia đình có nhiều bộ sạc.
                </p>
                <div style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>OCPP 1.6/2.0 · Ghép nối CT clamp · 7.4 kW / 22 kW</div>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase' as const, letterSpacing: '0.08em', marginBottom: 8 }}>Giá trị / Dễ thiết lập</div>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
              <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #e0af68' }}>
                <strong style={{ color: '#e0af68' }}>Evos 7.4 kW Smart EV Charger</strong>
                <p style={{ margin: '4px 0 0', fontSize: 13, lineHeight: 1.6 }}>
                  Thân thiện với túi tiền, phổ biến ở Úc. Lập lịch qua app, chế độ ưu tiên điện mặt trời qua CT clamp. Tốt cho các cài đặt đơn giản không yêu cầu tích hợp HEMS sâu.
                </p>
                <div style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>Lập lịch qua app · Hỗ trợ CT clamp · 7.4 kW</div>
              </div>
              <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #73daca' }}>
                <strong style={{ color: '#73daca' }}>GoodWe HCA G2 (7 kW)</strong>
                <p style={{ margin: '4px 0 0', fontSize: 13, lineHeight: 1.6 }}>
                  Tốt nhất nếu bạn đã có biến tần GoodWe — tích hợp nội bộ không cần thêm CT clamp. Cổng thông tin SEMS của GoodWe xử lý cả mặt trời + EV trong một bảng điều khiển. Có OCPP cho CSMS của bên thứ ba nếu cần.
                </p>
                <div style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>OCPP 1.6 · Tích hợp sâu GoodWe · 7 kW</div>
              </div>
            </div>
          </div>

          <div style={{ padding: '12px 14px', background: '#16161e', borderRadius: 6, borderLeft: '3px solid #7aa2f7', fontSize: 13, color: '#9ca3af', lineHeight: 1.7 }}>
            <strong style={{ color: '#7aa2f7' }}>Danh sách kiểm tra cơ bản khi chọn mua:</strong>
            <ol style={{ margin: '8px 0 0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>Bộ sạc có hỗ trợ sạc điện dư thừa qua CT clamp gắn ngoài hoặc Modbus không? (bắt buộc cho chế độ "Chỉ Năng lượng Mặt trời")</li>
              <li style={{ marginBottom: 4 }}>Có hỗ trợ OCPP 1.6 hoặc 2.0.1 không? (yêu cầu để sạc thông minh và cho các dịch vụ lưới điện trong tương lai)</li>
              <li style={{ marginBottom: 4 }}>Nó có thể tự chạy logic sạc cục bộ mà không cần kết nối internet không?</li>
              <li style={{ marginBottom: 4 }}>Có được chứng nhận cho thị trường Úc không? (kiểm tra dấu RCM, tuân thủ tiêu chuẩn dây điện AS/NZS 3000)</li>
              <li>Có hỗ trợ cập nhật firmware OTA không? (chống lỗi thời khi cập nhật các giao thức trong tương lai)</li>
            </ol>
          </div>
        </>
      ),
    },
  ],

  // ── Protocols ──
  protocols_title: 'Các Giao thức Giao tiếp',
  protocols_subtitle: 'Cách các thiết bị trong hệ thống năng lượng hộ gia đình giao tiếp với nhau.',
  protocols_advanced_extra: ' Chế độ nâng cao bao gồm các giao thức bổ sung và chi tiết kỹ thuật.',

  protocols_sections: [
    {
      key: 'modbus',
      title: 'Modbus — Giao thức Giao tiếp Công nghiệp',
      accentColor: '#e0af68',
      content: (userLevel) => (
        <>
          <p style={{ margin: '0 0 10px' }}>
            <strong style={{ color: '#e0af68' }}>Nó là gì:</strong> Modbus là giao thức truyền thông nối tiếp ban đầu được xuất bản bởi Modicon vào năm 1979. Nó đã trở thành tiêu chuẩn trên thực tế (de facto) để kết nối các thiết bị điện tử công nghiệp và được sử dụng rộng rãi trong các hệ thống năng lượng gia đình.
          </p>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Cách hoạt động:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>Kiến trúc Master-slave (Chủ-Tớ):</strong> Một thiết bị master (ví dụ: hệ thống quản lý năng lượng) gửi yêu cầu; các thiết bị slave (biến tần, đồng hồ) phản hồi dữ liệu.
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Mô hình dữ liệu dựa trên thanh ghi (Register-based):</strong> Tất cả dữ liệu được tổ chức dưới dạng các thanh ghi (register) được đánh số. Mỗi thanh ghi chứa một giá trị 16 bit (0–65535).
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Request-response (Yêu cầu-Phản hồi):</strong> Thiết bị master yêu cầu "đọc thanh ghi 40001" và thiết bị slave trả về giá trị lưu trữ ở đó.
            </li>
          </ul>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Trong hệ thống năng lượng gia đình:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>Biến tần (Inverters):</strong> SMA, Fronius, Huawei, GoodWe và hầu hết các hãng khác hỗ trợ Modbus TCP hoặc RTU để đọc dữ liệu sản xuất và đặt giới hạn công suất.
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Đồng hồ thông minh:</strong> Các thiết bị như Eastron SDM630 hoặc Carlo Gavazzi cung cấp số đọc điện thời gian thực qua Modbus.
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Bơm nhiệt:</strong> Nhiều máy bơm nhiệt hiện đại tiết lộ dữ liệu hoạt động và nhận lệnh điều khiển thông qua Modbus.
            </li>
          </ul>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Modbus TCP vs RTU:</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
            <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, borderLeft: '3px solid #7aa2f7' }}>
              <strong style={{ color: '#7aa2f7' }}>Modbus TCP</strong>
              <ul style={{ margin: '6px 0 0', paddingLeft: 16, fontSize: 13 }}>
                <li style={{ marginBottom: 3 }}>Qua mạng Ethernet / Wi-Fi</li>
                <li style={{ marginBottom: 3 }}>Cổng 502 (mặc định)</li>
                <li style={{ marginBottom: 3 }}>Dễ dàng tích hợp với phần mềm</li>
                <li>Mạng TCP/IP tiêu chuẩn</li>
              </ul>
            </div>
            <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, borderLeft: '3px solid #9ece6a' }}>
              <strong style={{ color: '#9ece6a' }}>Modbus RTU</strong>
              <ul style={{ margin: '6px 0 0', paddingLeft: 16, fontSize: 13 }}>
                <li style={{ marginBottom: 3 }}>Qua bus nối tiếp RS-485</li>
                <li style={{ marginBottom: 3 }}>Dùng kết nối có dây, 2-wire</li>
                <li style={{ marginBottom: 3 }}>Hỗ trợ lên đến 32 thiết bị trên một bus</li>
                <li>Phổ biến cho đồng hồ đo và cảm biến</li>
              </ul>
            </div>
          </div>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Các loại thanh ghi (Register types):</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>Holding Registers (4xxxx):</strong> Đọc/ghi — được sử dụng cho các giá trị cài đặt và cấu hình (ví dụ: đặt mức công suất).
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Input Registers (3xxxx):</strong> Chỉ đọc — được sử dụng cho các giá trị đo đạc (ví dụ: công suất, điện áp, tần số hiện tại).
            </li>
          </ul>

          {userLevel === 'beginner' && (
            <div style={{ backgroundColor: '#1a2e1a', borderRadius: 6, padding: 12, border: '1px solid #2a3e2a' }}>
              <strong style={{ color: '#9ece6a' }}>Mẹo cơ bản:</strong> Hãy coi Modbus giống như một chiếc tủ tài liệu — mỗi ngăn kéo (thanh ghi) chứa một mảnh dữ liệu. Bạn yêu cầu xem ngăn kéo cụ thể, và thiết bị sẽ nói cho bạn biết có gì bên trong.
            </div>
          )}

          {userLevel === 'advanced' && (
            <>
              <p style={{ margin: '12px 0 8px' }}>
                <strong style={{ color: '#bb9af7' }}>Mã chức năng (Function codes):</strong>
              </p>
              <pre style={codeBlockStyle}>
                {`FC03 - Read Holding Registers (đọc thiết lập, cấu hình)
FC04 - Read Input Registers  (đọc các thông số đo)
FC06 - Write Single Register  (ghi một giá trị)
FC16 - Write Multiple Registers (ghi một dải giá trị)`}
              </pre>
              <p style={{ margin: '8px 0 8px' }}>
                <strong style={{ color: '#bb9af7' }}>Ví dụ bản đồ thanh ghi (Biến tần Fronius Symo qua SunSpec):</strong>
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
                Lưu ý: Địa chỉ thanh ghi và định dạng dữ liệu thay đổi tùy theo nhà sản xuất. Luôn tham khảo tài liệu của bản đồ thanh ghi Modbus của thiết bị.
              </p>
            </>
          )}
        </>
      ),
    },
    {
      key: 'ocpp',
      title: 'OCPP — Giao thức Điểm Sạc Mở (Open Charge Point Protocol)',
      accentColor: '#7aa2f7',
      content: (userLevel) => (
        <>
          <p style={{ margin: '0 0 10px' }}>
            <strong style={{ color: '#7aa2f7' }}>Nó là gì:</strong> OCPP là một giao thức mở, được tiêu chuẩn hóa để giao tiếp giữa các trạm sạc xe điện (EV) và hệ thống quản lý trung tâm (CSMS). Nó cho phép giám sát, điều khiển từ xa và sạc thông minh.
          </p>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>OCPP 1.6 vs 2.0.1:</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
            <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, borderLeft: '3px solid #e0af68' }}>
              <strong style={{ color: '#e0af68' }}>OCPP 1.6</strong>
              <ul style={{ margin: '6px 0 0', paddingLeft: 16, fontSize: 13 }}>
                <li style={{ marginBottom: 3 }}>JSON hoặc SOAP qua WebSocket</li>
                <li style={{ marginBottom: 3 }}>Được sử dụng rộng rãi, hầu hết sạc đều hỗ trợ</li>
                <li style={{ marginBottom: 3 }}>Các cấu hình sạc thông minh cơ bản</li>
                <li style={{ marginBottom: 3 }}>Cấu trúc thông điệp đơn giản hơn</li>
                <li>Không có mô hình thiết bị / hồ sơ bảo mật</li>
              </ul>
            </div>
            <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, borderLeft: '3px solid #7aa2f7' }}>
              <strong style={{ color: '#7aa2f7' }}>OCPP 2.0.1</strong>
              <ul style={{ margin: '6px 0 0', paddingLeft: 16, fontSize: 13 }}>
                <li style={{ marginBottom: 3 }}>Chỉ dùng JSON qua WebSocket</li>
                <li style={{ marginBottom: 3 }}>Mô hình thiết bị để dễ cấu hình</li>
                <li style={{ marginBottom: 3 }}>Hồ sơ bảo mật nâng cao</li>
                <li style={{ marginBottom: 3 }}>Hỗ trợ ISO 15118 (Cắm & Sạc)</li>
                <li>Sạc thông minh cải tiến với cấu hình dựa trên chi phí</li>
              </ul>
            </div>
          </div>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Các hoạt động cốt lõi:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>BootNotification:</strong> Bộ sạc tự đăng ký với CSMS khi khởi động
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Authorize:</strong> Xác nhận danh tính người dùng (RFID, app, hoặc Plug &amp; Charge)
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>StartTransaction / StopTransaction:</strong> Bắt đầu và kết thúc một phiên sạc, ghi nhận mức năng lượng cung cấp
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>MeterValues:</strong> Các dữ liệu điện năng định kỳ được gửi từ sạc về CSMS
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>SetChargingProfile:</strong> CSMS gửi một lịch trình giới hạn năng lượng cho sạc
            </li>
          </ul>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Hồ sơ sạc thông minh (Smart charging profiles):</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>ChargePointMaxProfile:</strong> Thiết lập giới hạn tổng công suất cho toàn bộ điểm sạc
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>TxDefaultProfile:</strong> Lịch trình sạc mặc định được áp dụng cho mọi giao dịch trên một cổng sạc
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>TxProfile:</strong> Lịch trình sạc cho một giao dịch cụ thể đang hoạt động — độ ưu tiên cao nhất
            </li>
          </ul>

          <p style={{ margin: '0 0 10px' }}>
            <strong style={{ color: '#bb9af7' }}>Cách nó kích hoạt tính năng sạc mặt trời:</strong> Hệ thống quản lý năng lượng (hoạt động giống như, hoặc kết nối tới một CSMS) đọc mức điện mặt trời dư thừa hiện tại từ biến tần/đồng hồ, tính toán mức điện năng có sẵn cho EV, và gửi thông điệp SetChargingProfile tới bộ sạc kèm giới hạn công suất mới. Bộ sạc sẽ điều chỉnh đầu ra ngay lập tức, thông thường cập nhật mỗi 5–60 giây.
          </p>

          <div style={{ backgroundColor: '#16213e', borderRadius: 6, padding: 12, border: '1px solid #1e3a5f', marginBottom: 12 }}>
            <strong style={{ color: '#7aa2f7' }}>Bối cảnh thị trường Úc:</strong>
            <p style={{ margin: '6px 0 0', fontSize: 13 }}>
              Hầu hết sạc EV dân dụng được bán ở Úc hiện nay đều hỗ trợ <strong>OCPP 1.6</strong>, đủ cho các tính năng sạc thông minh cơ bản và tích hợp năng lượng mặt trời. <strong>OCPP 2.0.1</strong> — bắt buộc đối với công nghệ Plug &amp; Charge (ISO 15118) và sạc hai chiều V2G — mới chỉ bắt đầu xuất hiện ở thị trường Úc (2024–2025).
            </p>
            <p style={{ margin: '6px 0 0', fontSize: 13 }}>
              AEMO và ARENA đã chạy các dự án thử nghiệm sạc thông minh sử dụng OCPP làm giao thức điều khiển, coi các bộ sạc tại nhà như các tải linh hoạt (flexible loads). Điều này định vị OCPP là tiêu chuẩn tiềm năng cho mọi chương trình sạc EV tương tác với lưới điện trong tương lai tại Úc. Khi chọn sạc, việc hỗ trợ OCPP 1.6 là đủ cho sạc mặt trời hiện tại; nhưng OCPP 2.0.1 rất đáng ưu tiên nếu bạn mong muốn tham gia vào V2G hay các chương trình đáp ứng nhu cầu tương lai.
            </p>
          </div>

          {userLevel === 'beginner' && (
            <div style={{ backgroundColor: '#1a2e1a', borderRadius: 6, padding: 12, border: '1px solid #2a3e2a' }}>
              <strong style={{ color: '#9ece6a' }}>Mẹo cơ bản:</strong> OCPP giống như một ngôn ngữ mà sạc EV của bạn dùng để nói chuyện với hệ thống quản lý năng lượng. Hệ thống quản lý nói "bạn được phép dùng 3 kW ngay lúc này" và sạc sẽ làm theo, điều chỉnh trong thời gian thực khi lượng điện mặt trời thay đổi.
            </div>
          )}

          {userLevel === 'advanced' && (
            <>
              <p style={{ margin: '12px 0 8px' }}>
                <strong style={{ color: '#bb9af7' }}>Cấu trúc thông điệp (OCPP 1.6 JSON):</strong>
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
                <strong style={{ color: '#bb9af7' }}>Cấu trúc xếp chồng sạc thông minh (ưu tiên từ thấp đến cao):</strong>
              </p>
              <pre style={codeBlockStyle}>
                {`1. ChargePointMaxProfile  (giới hạn cấp trạm sạc)
2. TxDefaultProfile       (mặc định trên mỗi cổng)
3. TxProfile              (ghi đè cho từng giao dịch)

Giới hạn hiệu dụng = min(tất cả các hồ sơ có thể áp dụng)
Stack level: stackLevel cao hơn sẽ ghi đè giá trị thấp hơn nếu có cùng purpose`}
              </pre>
              <p style={{ margin: '8px 0 8px' }}>
                <strong style={{ color: '#bb9af7' }}>Tích hợp ISO 15118 (OCPP 2.0.1):</strong>
              </p>
              <ul style={{ margin: '0 0 0', paddingLeft: 20 }}>
                <li style={{ marginBottom: 4 }}>
                  Plug &amp; Charge: Tự động xác thực qua chứng chỉ TLS — không cần RFID
                </li>
                <li style={{ marginBottom: 4 }}>
                  Hỗ trợ truyền điện năng hai chiều (V2G) phối hợp dưới sự kiểm soát của CSMS
                </li>
                <li style={{ marginBottom: 4 }}>
                  15118-20 cung cấp các chế độ điều khiển động và lập lịch chi tiết để quản lý điện năng
                </li>
              </ul>
            </>
          )}
        </>
      ),
    },
    {
      key: 'other',
      title: 'Các Giao thức Năng lượng Khác',
      accentColor: '#9ece6a',
      advancedOnly: true,
      content: (_userLevel) => (
        <>
          <div style={{ marginBottom: 16 }}>
            <h4 style={{ margin: '0 0 8px', color: '#e0af68' }}>SunSpec</h4>
            <p style={{ margin: '0 0 6px' }}>
              Một mô hình dữ liệu chuẩn hóa được xây dựng trên nền Modbus cho các thiết bị điện mặt trời và lưu trữ. Định nghĩa các bản đồ thanh ghi đồng nhất để biến tần tuân thủ tiêu chuẩn SunSpec từ bất kỳ nhà sản xuất nào cũng để lộ cùng một loại dữ liệu tại cùng một thanh ghi.
            </p>
            <pre style={codeBlockStyle}>
              {`SunSpec Common Model (Model 1):
  Register 40001: Identifier "SunS" (0x53756e53)
  Register 40003: Nhà sản xuất
  Register 40021: Mã sản phẩm
  Register 40045: Số sê-ri

SunSpec Inverter Model (Model 101/103):
  Công suất AC, Tần số, Điện áp, Cường độ dòng điện, Bộ đếm Năng lượng`}
            </pre>
          </div>

          <div style={{ marginBottom: 16 }}>
            <h4 style={{ margin: '0 0 8px', color: '#7aa2f7' }}>EEBUS</h4>
            <p style={{ margin: '0 0 6px' }}>
              Tiêu chuẩn giao tiếp cho năng lượng gia đình thông minh ở châu Âu. Dùng giao thức SPINE (Smart Premises Interoperable Neutral-message Exchange) qua mạng IP. Được thiết kế để thiết bị trò chuyện trực tiếp (device-to-device) mà không phụ thuộc vào đám mây.
            </p>
            <ul style={{ margin: '0 0 0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                Ứng dụng: phối hợp sạc EV, điều khiển bơm nhiệt, quản lý pin lưu trữ
              </li>
              <li style={{ marginBottom: 4 }}>
                Được hỗ trợ bởi các nhà sản xuất lớn ở châu Âu (SMA, Viessmann, BMW, Porsche)
              </li>
              <li style={{ marginBottom: 4 }}>
                Cho phép cơ chế đàm phán giữa các thiết bị: bộ sạc yêu cầu nguồn điện, HEMS phê duyệt/giới hạn
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: 16 }}>
            <h4 style={{ margin: '0 0 8px', color: '#f7768e' }}>OpenADR</h4>
            <p style={{ margin: '0 0 6px' }}>
              Open Automated Demand Response — cho phép các tiện ích điện gửi tín hiệu đáp ứng nhu cầu tới các tòa nhà và thiết bị. Dùng để ổn định lưới điện trong các sự kiện tiêu thụ đỉnh.
            </p>
            <ul style={{ margin: '0 0 0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                VTN (Virtual Top Node) gửi các sự kiện DR đến các thiết bị VEN (Virtual End Node)
              </li>
              <li style={{ marginBottom: 4 }}>
                Tín hiệu có thể bao gồm giá cả, mức tải, hoặc đơn giản là thông báo sự kiện
              </li>
              <li style={{ marginBottom: 4 }}>
                Sử dụng chủ yếu tại các tòa nhà thương mại hoặc tổng hợp cho hàng loạt nhà ở
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: 16 }}>
            <h4 style={{ margin: '0 0 8px', color: '#bb9af7' }}>MQTT</h4>
            <p style={{ margin: '0 0 6px' }}>
              Giao thức nhắn tin phát hành-đăng ký (publish-subscribe) siêu nhẹ được sử dụng rộng rãi để theo dõi năng lượng IoT. Nó không dành riêng cho năng lượng, nhưng phổ biến để vận chuyển dữ liệu năng lượng.
            </p>
            <pre style={codeBlockStyle}>
              {`Ví dụ cấu trúc chủ đề (Topic):
  home/energy/solar/power      → 4523    (watts)
  home/energy/grid/import      → 312     (watts)
  home/energy/battery/soc      → 72      (phần trăm)
  home/energy/ev/charging      → true
  home/energy/ev/power         → 7400    (watts)

Broker tiếp nhận và phân phối các thông điệp cho các subscriber.
Các cấp QoS: 0 (bắn và quên), 1 (ít nhất một lần), 2 (đúng một lần)`}
            </pre>
          </div>

          <div>
            <h4 style={{ margin: '0 0 8px', color: '#73daca' }}>Matter / Thread</h4>
            <p style={{ margin: '0 0 6px' }}>
              Tiêu chuẩn nhà thông minh mới nổi được chống lưng bởi Apple, Google, Amazon, và Samsung. Mặc dù chủ yếu tập trung vào các thiết bị nhà thông minh nói chung (đèn, khóa, cảm biến), các trường hợp quản lý năng lượng đang được mở rộng.
            </p>
            <ul style={{ margin: '0 0 0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                <strong>Matter:</strong> Giao thức ở lớp ứng dụng (application-layer). Các loại thiết bị quản lý năng lượng đang được thêm vào ở những phiên bản mới hơn.
              </li>
              <li style={{ marginBottom: 4 }}>
                <strong>Thread:</strong> Giao thức mạng lưới (mesh) ít tiêu hao điện (dựa trên IP). Cung cấp lớp mạng (network layer) cho các thiết bị Matter.
              </li>
              <li style={{ marginBottom: 4 }}>
                Tiềm năng tương lai tạo ra giao tiếp chuẩn cho sạc EV, pin, và biến tần điện mặt trời bên trong hệ sinh thái nhà thông minh của người dùng cuối.
              </li>
            </ul>
          </div>
        </>
      ),
    },
  ],

  // ── Strategies ──
  strategies_title: 'Chiến lược Tối ưu hóa Năng lượng',
  strategies_subtitle: 'Cách tận dụng tối đa hệ thống năng lượng gia đình của bạn.',
  strategies_advanced_extra: ' Chế độ nâng cao bao gồm kiến trúc HEMS và các dịch vụ lưới điện.',

  strategies_sections: [
    {
      key: 'self-consumption',
      title: 'Tối ưu hóa Tự tiêu thụ Năng lượng Mặt trời',
      accentColor: '#9ece6a',
      content: (_userLevel) => (
        <>
          <p style={{ margin: '0 0 10px' }}>
            Tự tiêu thụ có nghĩa là sử dụng trực tiếp nguồn điện mặt trời do bạn tạo ra cho ngôi nhà của mình, thay vì xuất nó lên lưới. Việc này gần như luôn luôn mang lại giá trị tài chính lớn hơn, bởi vì biểu giá điện hòa lưới (FiT) thấp hơn nhiều so với giá bạn nhập điện từ lưới.
          </p>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Thứ tự ưu tiên đối với lượng mặt trời dư thừa:</strong>
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
            1. Các tải trong nhà (luôn được đáp ứng đầu tiên)
            <br />
            2. Pin lưu trữ gia đình (tích trữ cho buổi tối)
            <br />
            3. Sạc EV (tải linh hoạt lớn)
            <br />
            4. Bơm nhiệt / đun nước nóng (lưu trữ nhiệt)
            <br />
            5. Xuất lưới (giải pháp cuối, ít giá trị nhất)
          </div>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Tại sao tự tiêu thụ lại quan trọng:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              Giá nhập điện thông thường: $0.25–$0.45/kWh
            </li>
            <li style={{ marginBottom: 4 }}>
              Giá xuất điện thông thường: $0.05–$0.12/kWh
            </li>
            <li style={{ marginBottom: 4 }}>
              Mỗi kWh tự tiêu thụ tiết kiệm cho bạn mức giá nhập đầy đủ thay vì chỉ thu lại vài đồng bán rẻ mạt
            </li>
            <li style={{ marginBottom: 4 }}>
              Tăng mức tự tiêu thụ từ 30% lên 70% có thể nhân đôi số tiền tiết kiệm từ hệ mặt trời
            </li>
          </ul>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Chiến lược theo mùa:</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 10 }}>
            <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, borderLeft: '3px solid #7aa2f7' }}>
              <strong style={{ color: '#7aa2f7' }}>Mùa Đông</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                Ít năng lượng mặt trời hơn. Hãy tập trung vào việc dùng triệt để mọi watt được sinh ra. Hạn chế xuất điện. Máy bơm nhiệt chạy nhiều hơn sẽ tự động tiêu thụ điện mặt trời. Chu kỳ sạc pin sẽ nông hơn.
              </p>
            </div>
            <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, borderLeft: '3px solid #e0af68' }}>
              <strong style={{ color: '#e0af68' }}>Mùa Hè</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                Điện mặt trời dồi dào. Sạc mọi thứ — pin lưu trữ, EV, làm nước nóng. Hãy lên lịch chạy các thiết bị dùng điện mạnh (máy rửa bát, máy giặt) vào các giờ trưa nắng cao điểm.
              </p>
            </div>
          </div>

          <div style={{ backgroundColor: '#1a2e1a', borderRadius: 6, padding: 12, margin: '10px 0', border: '1px solid #2a3e2a' }}>
            <strong style={{ color: '#9ece6a' }}>Mẹo nhỏ:</strong>{' '}
            Chạy các thiết bị vào giờ nắng cao điểm (10am–3pm) là một trong những cách đơn giản nhất để tăng khả năng tự tiêu thụ điện mà không cần thiết bị bổ sung nào.
          </div>
        </>
      ),
    },
    {
      key: 'ev-modes',
      title: 'Các Chế độ Sạc EV Động',
      accentColor: '#7aa2f7',
      content: (_userLevel) => (
        <>
          <p style={{ margin: '0 0 12px' }}>
            Các bộ sạc EV thông minh có thể hoạt động trong các chế độ khác nhau tùy vào thứ tự ưu tiên của bạn — tiết kiệm tiền, sạc nhanh, hay là sự cân bằng cả hai. Bộ sạc sẽ điều chỉnh mức tiêu thụ năng lượng một cách linh hoạt theo số liệu thời gian thực.
          </p>

          <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, marginBottom: 8, borderLeft: '3px solid #9ece6a' }}>
            <strong style={{ color: '#9ece6a', fontSize: 14 }}>Chỉ Điện Mặt trời (Solar Only)</strong>
            <p style={{ margin: '6px 0 8px', fontSize: 13 }}>Chỉ sạc khi có điện dư thừa từ năng lượng mặt trời. Nó sẽ ngừng sạc nếu năng lượng dư tụt xuống dưới ngưỡng tối thiểu.</p>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13 }}>
              <li style={{ marginBottom: 3 }}>Thích hợp nhất cho: Tối đa hóa việc tiết kiệm, giảm chi phí di chuyển xuống mức cực thấp</li>
              <li style={{ marginBottom: 3 }}>Yêu cầu có ngàm CT clamp / màn hình năng lượng đặt tại bảng điện — nếu không bộ sạc không thể thấy năng lượng dư</li>
              <li style={{ marginBottom: 3 }}>Sử dụng dữ liệu từ ngàm CT clamp hoặc màn hình để đo lượng điện dư trong thời gian thực</li>
              <li style={{ marginBottom: 3 }}>Ngưỡng sạc tối thiểu: thường là 1.4 kW (6A × 230V trên điện một pha)</li>
              <li style={{ marginBottom: 3 }}>Dưới mức 6A thì đa phần xe EV sẽ không chịu sạc — lúc đó sạc phải tạm ngừng</li>
              <li style={{ marginBottom: 3 }}>Tốc độ sạc tăng giảm theo đường cong mặt trời trong ngày</li>
              <li style={{ marginBottom: 3 }}>Có thể không sạc đầy xe vào những ngày râm mát hoặc mùa đông</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, marginBottom: 8, borderLeft: '3px solid #e0af68' }}>
            <strong style={{ color: '#e0af68', fontSize: 14 }}>Tiết kiệm / Lai (Eco / Hybrid)</strong>
            <p style={{ margin: '6px 0 8px', fontSize: 13 }}>Ưu tiên nguồn điện dư từ mặt trời nhưng vẫn có thể lấy thêm từ lưới để duy trì ít nhất ở tốc độ sạc tối thiểu sau khi bắt đầu một phiên sạc.</p>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13 }}>
              <li style={{ marginBottom: 3 }}>Thích hợp nhất cho: Sự cân bằng tuyệt vời giữa tiết kiệm và tiện lợi</li>
              <li style={{ marginBottom: 3 }}>Luôn duy trì ít nhất 6A (1.4 kW) khi phiên sạc đã bắt đầu</li>
              <li style={{ marginBottom: 3 }}>Ưu tiên năng lượng mặt trời; nếu thiếu lưới điện sẽ bù đắp đến mức tối thiểu</li>
              <li style={{ marginBottom: 3 }}>Nếu năng lượng mặt trời vượt quá mức tối thiểu, tốc độ sạc sẽ được nâng lên để sử dụng hết phần thừa</li>
              <li style={{ marginBottom: 3 }}>Thường giúp tiết kiệm 50–70% so với sạc chỉ từ lưới</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, marginBottom: 8, borderLeft: '3px solid #f7768e' }}>
            <strong style={{ color: '#f7768e', fontSize: 14 }}>Nhanh / Tăng cường (Fast / Boost)</strong>
            <p style={{ margin: '6px 0 8px', fontSize: 13 }}>Sạc ở mức công suất tối đa bất kể có năng lượng mặt trời hay không. Nó sẽ rút bất cứ lượng điện nào còn thiếu từ lưới.</p>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13 }}>
              <li style={{ marginBottom: 3 }}>Thích hợp nhất cho: Những khi bạn cần sạc đầy xe càng nhanh càng tốt</li>
              <li style={{ marginBottom: 3 }}>Sử dụng tối đa công suất định mức của sạc (ví dụ: 7.4 kW hay 22 kW)</li>
              <li style={{ marginBottom: 3 }}>Không tối ưu cho điện mặt trời — chỉ tập trung vào tốc độ</li>
              <li style={{ marginBottom: 3 }}>Có thể kích hoạt phụ phí cao điểm (demand charges) hoặc làm quá tải đường điện nếu không được quản lý</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, marginBottom: 8, borderLeft: '3px solid #bb9af7' }}>
            <strong style={{ color: '#bb9af7', fontSize: 14 }}>Theo Lịch (Scheduled)</strong>
            <p style={{ margin: '6px 0 8px', fontSize: 13 }}>Chỉ sạc trong những khoảng thời gian đã được thiết lập, thông thường là khoảng giờ qua đêm để hưởng giá điện thấp (off-peak).</p>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13 }}>
              <li style={{ marginBottom: 3 }}>Thích hợp nhất cho: Các khách hàng sử dụng biểu giá theo thời gian (time-of-use tariff)</li>
              <li style={{ marginBottom: 3 }}>Lịch trình phổ biến: sạc từ 11pm–6am khi giá điện rẻ nhất</li>
              <li style={{ marginBottom: 3 }}>Có thể kết hợp với năng lượng mặt trời ban ngày thành lịch trình lai (hybrid scheduling)</li>
              <li style={{ marginBottom: 3 }}>Đặt giờ khởi hành để đảm bảo xe luôn sẵn sàng đúng lúc bạn cần</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, marginBottom: 8, borderLeft: '3px solid #73daca' }}>
            <strong style={{ color: '#73daca', fontSize: 14 }}>Mục tiêu SoC (Target SoC)</strong>
            <p style={{ margin: '6px 0 8px', fontSize: 13 }}>Yêu cầu một mức pin cụ thể trước một giờ khởi hành. Bộ tối ưu hóa tự động tính toán phương pháp rẻ nhất để đạt mức đó.</p>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13 }}>
              <li style={{ marginBottom: 3 }}>Thích hợp nhất cho: Người dùng cao cấp có biểu giá biến động hoặc dự báo được điện mặt trời</li>
              <li style={{ marginBottom: 3 }}>Xét đến: SoC hiện tại, mục tiêu SoC, thời điểm khởi hành, dự báo mặt trời, lịch trình biểu giá</li>
              <li style={{ marginBottom: 3 }}>Tự động chọn các khoảng cửa sổ sạc có mức giá rẻ nhất</li>
              <li style={{ marginBottom: 3 }}>Có thể chia nhỏ thành nhiều thời điểm sạc (ví dụ: dùng điện mặt trời trưa + sạc thêm bù đêm rẻ)</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#2e2a1a', borderRadius: 6, padding: 12, margin: '10px 0', border: '1px solid #3e3a2a' }}>
            <strong style={{ color: '#e0af68' }}>Quan trọng:</strong>{' '}
            Tốc độ sạc tối thiểu cho phần lớn các loại EV là 6A mỗi pha (1.4 kW nếu một pha, 4.1 kW nếu ba pha). Dưới mức này thì EV sẽ từ chối sạc. Các bộ sạc thông minh phải quản lý kỹ lưỡng mức tối thiểu này khi điều tiết theo lượng mặt trời.
          </div>
        </>
      ),
    },
    {
      key: 'battery',
      title: 'Các Chiến lược Quản lý Pin',
      accentColor: '#e0af68',
      content: (_userLevel) => (
        <>
          <p style={{ margin: '0 0 12px' }}>
            Mức độ hữu ích của một cục pin lưu trữ tại nhà nằm ở cách bạn kiểm soát nó. Chiến lược chuẩn xác sẽ tùy thuộc vào cấu trúc giá điện, dung lượng hệ thống điện mặt trời, và mô hình tiêu thụ của gia đình bạn.
          </p>

          <div style={{ marginBottom: 14 }}>
            <h4 style={{ margin: '0 0 6px', color: '#9ece6a' }}>
              Tự tiêu thụ Năng lượng Mặt trời (Solar Self-Consumption)
            </h4>
            <p style={{ margin: '0 0 6px' }}>
              Chiến lược được áp dụng phổ biến nhất: lưu lượng điện mặt trời dư vào ban ngày và xả ra vào lúc chiều tối và ban đêm.
            </p>
            <ul style={{ margin: '0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                Pin sạc đầy khi mức tạo điện mặt trời vượt qua nhu cầu của ngôi nhà
              </li>
              <li style={{ marginBottom: 4 }}>
                Pin xả ngược ra khi tiêu thụ của ngôi nhà vượt năng lượng mặt trời (tối, đêm)
              </li>
              <li style={{ marginBottom: 4 }}>
                Giúp nâng tỷ lệ tự tiêu thụ năng lượng từ ~30% lên ~70% với cấu hình chuẩn
              </li>
              <li style={{ marginBottom: 4 }}>
                Hiệu quả tốt nhất nếu cục pin được tính toán định cỡ bù vừa đủ cho tiêu thụ đêm (8–12 kWh)
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: 14 }}>
            <h4 style={{ margin: '0 0 6px', color: '#7aa2f7' }}>
              Chênh lệch giá theo thời gian (Time-of-Use Arbitrage)
            </h4>
            <p style={{ margin: '0 0 6px' }}>
              Sạc pin đầy khi giá điện trên lưới đang rẻ, và sau đó xả ra vào lúc điện lưới tăng giá.
            </p>
            <ul style={{ margin: '0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                Sạc qua đêm tại mức giá chạm đáy (ví dụ: $0.10/kWh)
              </li>
              <li style={{ marginBottom: 4 }}>
                Tiến hành xả pin ở giờ cao điểm (ví dụ: $0.40/kWh)
              </li>
              <li style={{ marginBottom: 4 }}>
                Sinh lời khi tỉ lệ giá chênh lệch cao hơn ~3:1 (đã bao hàm sự hao hụt năng lượng khứ hồi)
              </li>
              <li style={{ marginBottom: 4 }}>
                Có thể kết hợp luôn với hình thức Tự tiêu thụ Năng lượng mặt trời để kiếm lợi nhuận tối đa
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: 14 }}>
            <h4 style={{ margin: '0 0 6px', color: '#f7768e' }}>Cắt đỉnh tải (Peak Shaving)</h4>
            <p style={{ margin: '0 0 6px' }}>
              Luôn giới hạn điện nhập vào từ lưới dưới ngưỡng trần quy định nhằm tránh phí nhu cầu cao (demand charges) hoặc việc quá tải cầu dao tại nhà.
            </p>
            <ul style={{ margin: '0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                Pin sẽ xả bù vào để thỏa mãn bất kỳ nhu cầu tiêu thụ nào vượt trần tải
              </li>
              <li style={{ marginBottom: 4 }}>
                Mức trần thông thường: duy trì mức nhập từ lưới dưới 5 kW
              </li>
              <li style={{ marginBottom: 4 }}>
                Lợi ích xuất hiện khi nhu cầu cùng sạc EV + thiết bị khác có thể đánh sập cầu dao tổng
              </li>
              <li style={{ marginBottom: 4 }}>
                Một vài công ty thu phụ phí theo mức nhu cầu cực đỉnh mỗi 15 phút — phương thức Peak shaving hỗ trợ hoàn toàn ngăn chặn phí này
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ margin: '0 0 6px', color: '#e0af68' }}>
              Dự phòng (Backup / Reserve)
            </h4>
            <p style={{ margin: '0 0 6px' }}>
              Giữ nguyên một trạng thái SoC tối thiểu để luôn ứng phó khi lưới điện gặp trục trặc/mất điện.
            </p>
            <ul style={{ margin: '0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                Chọn một mức năng lượng cần để dành (ví dụ: 20%) và pin sẽ không được xả thêm khi ở điều kiện sử dụng chuẩn
              </li>
              <li style={{ marginBottom: 4 }}>
                Trong thời gian rớt mạng điện, cục pin giữ cho thiết bị thiết yếu vận hành (miễn là biến tần hỗ trợ phát điện backup)
              </li>
              <li style={{ marginBottom: 4 }}>
                Phải đánh đổi: mức tích trữ rủi ro càng cao thì bạn càng thiếu điện cho việc sử dụng (cycle) thường nhật
              </li>
              <li style={{ marginBottom: 4 }}>
                Nhiều biến tần tích hợp đảo ngắt tự động (islanding) từ lưới và độc lập tiếp điện cho gia đình
              </li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, margin: '10px 0', border: '1px solid #2a2a3e' }}>
            <strong style={{ color: '#7aa2f7' }}>Lưu ý:</strong>{' '}
            Một chiến lược hay là tự tổng hợp các tính năng lại: tận dụng tự dùng mặt trời cho ban ngày, chênh lệch phí điện cho pin buổi đêm, rồi giữ thêm một phần năng lượng lưu trữ đề phòng nhằm bảo đảm an toàn.
          </div>
        </>
      ),
    },
    {
      key: 'hems',
      title: 'Hệ thống Quản lý Năng lượng Hộ gia đình (HEMS)',
      accentColor: '#bb9af7',
      advancedOnly: true,
      content: (_userLevel) => (
        <>
          <p style={{ margin: '0 0 10px' }}>
            HEMS là bộ điều khiển trung tâm giúp tối ưu hóa mọi luồng năng lượng trong nhà bạn. Nó lấy dữ liệu từ mọi thiết bị, sử dụng các quy tắc tối ưu hóa và phát ra lệnh điều khiển nhằm tối đa hóa việc tiết kiệm, sử dụng tự thân, hoặc độ thoải mái.
          </p>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Điểm kết nối tích hợp:</strong>
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
            Biến tần ←→ HEMS &nbsp;&nbsp;(Modbus TCP / SunSpec)
            <br />
            Đồng hồ Thông minh ←→ HEMS &nbsp;&nbsp;(Modbus RTU / P1 port)
            <br />
            Sạc Xe điện (EV) ←→ HEMS &nbsp;&nbsp;(OCPP 1.6/2.0.1)
            <br />
            Pin Lưu trữ ←→ HEMS &nbsp;&nbsp;(CAN bus / Modbus / API Nhà sản xuất)
            <br />
            Bơm nhiệt ←→ HEMS &nbsp;&nbsp;(Modbus / SG Ready / EEBUS)
            <br />
            API Biểu giá ←→ HEMS &nbsp;&nbsp;(REST API / MQTT)
            <br />
            API Thời tiết ←→ HEMS &nbsp;&nbsp;(REST API cho dự báo mặt trời)
          </div>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Đầu vào dữ liệu ra quyết định:</strong>
          </p>
          <ul style={{ margin: '0 0 12px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>Sản lượng điện mặt trời hiện tại</strong> — đo đạc thực tế từ CT clamp hoặc biến tần
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Dự báo năng lượng mặt trời</strong> — dự báo qua thời tiết cho số giờ tiếp theo / trong ngày
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Mức giá tiền điện</strong> — định giá điện hiện tại và các kỳ tới (giá linh hoạt / biểu giá định kỳ)
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Thời điểm khởi hành EV</strong> — thời điểm xe cần sạc đủ chuẩn, mức SoC cần thiết
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Mức SoC hiện tại của pin</strong> — lượng lưu trữ hiện hành với công suất cho sẵn
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Báo cáo tiêu thụ từ hộ gia đình</strong> — bảng lịch sử dữ liệu với thông số ước đoán nhu cầu kế tiếp
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Ràng buộc từ mạng lưới điện</strong> — hạn mức xuất điện, trần cầu chì, trần chi phí phụ trội theo nhu cầu
            </li>
          </ul>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Ví dụ logic tối ưu hóa:</strong>
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
            &nbsp;&nbsp;1. Sạc pin lưu trữ (tối đa tới mức sạc cao nhất)
            <br />
            &nbsp;&nbsp;2. Nếu dư thừa → sạc xe EV (nếu đang cắm)
            <br />
            &nbsp;&nbsp;3. Nếu dư thừa → bật đun bình nước nóng
            <br />
            &nbsp;&nbsp;4. Nếu dư thừa → xuất điện trở lại lưới
            <br />
            <br />
            if solar_surplus &lt;= 0:
            <br />
            &nbsp;&nbsp;1. Xả cục pin lưu trữ (khi điện lưới đang giá chát)
            <br />
            &nbsp;&nbsp;2. Trực tiếp kéo điện từ lưới (khi giá rẻ chạm sàn)
            <br />
            &nbsp;&nbsp;3. Tạm ngưng cấp điện cho sạc EV (khi chạy cấu hình sạc chỉ-mặt trời)
          </div>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Lựa chọn triển khai (Implementation options):</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>Hệ thống thương mại:</strong> Thiết bị chuyên biệt tích hợp sâu trực tiếp vào thương hiệu bộ sạc &amp; biến tần. Thường tích hợp tối ưu thông số thời tiết và giá biểu đi kèm.
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Home Assistant:</strong> Trình điều khiển mã nguồn mở xuất sắc có phần mềm báo cáo thống kê năng lượng với liên kết tích hợp cho toàn bộ các nhãn hiệu năng lượng mặt trời, bộ sạc xe EV và pin dự trữ lớn. Dễ cấu hình theo nhu cầu cá nhân.
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Node-RED:</strong> Nền tảng luồng (flow-based) tự động đọc thanh ghi Modbus, khai thác API và đưa lệnh về sạc qua chuẩn OCPP. Thích hợp cho sáng tạo thiết kế tự cá nhân hóa.
            </li>
          </ul>

          <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, margin: '10px 0', border: '1px solid #2a2a3e' }}>
            <strong style={{ color: '#7aa2f7' }}>Lưu ý:</strong>{' '}
            HEMS hoàn thiện sẽ bổ trợ 10–20% phần chiết khấu giá cước điện cho bạn so với mô hình mặt trời - lưu trữ tĩnh mộc mạc, dựa trên chuỗi thuật toán nhận định liên tục về lúc nào, cách thức nào thì dùng điện tối ưu nhất.
          </div>
        </>
      ),
    },
    {
      key: 'grid-services',
      title: 'Các Dịch vụ Lưới điện và Đáp ứng Nhu cầu',
      accentColor: '#73daca',
      advancedOnly: true,
      content: (_userLevel) => (
        <>
          <p style={{ margin: '0 0 10px' }}>
            Các pin gia đình và dòng xe EV vốn dĩ không phải món thiết bị đơn độc – tất cả đều được tham gia phục vụ tại phân cấp mạng điện, kích hoạt mô hình sinh lời đồng thời chung tay duy trì bền vững lưới truyền tải.
          </p>

          <div style={{ marginBottom: 14 }}>
            <h4 style={{ margin: '0 0 6px', color: '#e0af68' }}>
              Điều tiết Tần số (Frequency Regulation)
            </h4>
            <p style={{ margin: '0 0 6px' }}>
              Lưới điện luôn cần chạy chuẩn thông số mốc 50 Hz (hay 60 Hz ở một số khu vực địa lý). Các trạm pin có năng lực kéo / nhả dòng điện trong tích tắc mili-giây đóng vai trò quan trọng giữ vững cân bằng này.
            </p>
            <ul style={{ margin: '0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                FCR (Dự trữ Quản lý Tần số): Hệ thống can thiệp tự động chỉ trong vài giây
              </li>
              <li style={{ marginBottom: 4 }}>
                Yêu cầu hệ pin sở hữu phản xạ tốc độ kết hợp với thiết bị biến tần hai chiều
              </li>
              <li style={{ marginBottom: 4 }}>
                Chủ yếu kích hoạt từ trạm điện đầu não chuyên trách, hiếm khi qua can thiệp người sử dụng ở nhà
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: 14 }}>
            <h4 style={{ margin: '0 0 6px', color: '#7aa2f7' }}>
              Nhà máy Điện ảo (VPP)
            </h4>
            <p style={{ margin: '0 0 6px' }}>
              Một hệ thống VPP móc nối quy tụ lượng lớn từ những trạm pin riêng lẻ lẫn các mức tiêu dùng kiểm soát được cấu thành một kho năng lượng mô phỏng khổng lồ mà cách thức hoạt động hệt như một trạm phát điện thông thường.
            </p>
            <ul style={{ margin: '0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                Mọi người tham gia tùy chọn xác nhận cùng nhà cung cấp phân phối hoặc đại lý phát hành thiết bị pin
              </li>
              <li style={{ marginBottom: 4 }}>
                Cơ quan quản lý chuyển đi hiệu lệnh cần phát / xả điện tùy tại mỗi giai đoạn cao điểm rủi ro lưới điện
              </li>
              <li style={{ marginBottom: 4 }}>
                Đội ngũ người tham dự lãnh khoản thu chiết khấu từ nhà phân phối nhờ chia sẻ tính năng xả từ hệ pin của họ
              </li>
              <li style={{ marginBottom: 4 }}>
                Hệ pin bình thường vẫn lưu mặc định SoC tối thiểu giúp đảm bảo điện năng sinh hoạt cho người trong nhà
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: 14 }}>
            <h4 style={{ margin: '0 0 6px', color: '#9ece6a' }}>
              Xe cấp điện Lưới (Vehicle-to-Grid - V2G)
            </h4>
            <p style={{ margin: '0 0 6px' }}>
              V2G hỗ trợ các phương tiện EV đẩy nguồn ngược trực tiếp lên lưới mạng, qua đó xe của bạn hành động không khác chi trạm pin linh động. Pin xe 60 kWh khổng lồ hơn nhiều một bộ pin tại nhà quanh mức 10 kWh.
            </p>
            <ul style={{ margin: '0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                Bắt buộc đi đôi chuẩn xe EV tương thích V2G cùng hộp sạc song hướng (bidirectional)
              </li>
              <li style={{ marginBottom: 4 }}>
                Giai đoạn này hỗ trợ tương thích trên một phần hạn hữu hệ xe (tiêu biểu: chuẩn Nissan Leaf qua ngàm CHAdeMO, vài dòng đời mới dựa chuẩn cáp CCS)
              </li>
              <li style={{ marginBottom: 4 }}>
                Bảo chứng kết nối giao thức xuất phát từ bộ ISO 15118-20 xen lẫn OCPP 2.0.1
              </li>
              <li style={{ marginBottom: 4 }}>
                Các vấn đề quan ngại liên quan chu kỳ hỏng / chai pin vẫn hiện hữu, mặc cho đời xe hiện hành làm rất mượt khâu xả nông (shallow cycling)
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ margin: '0 0 6px', color: '#f7768e' }}>
              Xe cấp điện Nhà (Vehicle-to-Home - V2H)
            </h4>
            <p style={{ margin: '0 0 6px' }}>
              Phiên bản đồng dạng của V2G song chỉ dồn nguồn điện xả ngược độc quyền cho phạm vi ở hộ dân mà không bơm ngược dư lượng lên mạng lưới điện. Ít rườm rà và gần như không dính rào cản cần xét duyệt cấp thẩm quyền lưới điện ở phần đông các khu vực.
            </p>
            <ul style={{ margin: '0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                Xe EV đóng vai hệt trạm pin tự động giúp nhà tránh tình trạng mất điện và hạn chế rút điện biểu giá đắt đỏ
              </li>
              <li style={{ marginBottom: 4 }}>
                Gánh vác trôi chảy mức 10–20 kWh lượng điện hữu hiệu đi kèm chừa lại đủ pin để chủ xe lăn bánh chu trình kế
              </li>
              <li style={{ marginBottom: 4 }}>
                Tuyệt đối quý giá cho các gia đình không có pin dự trữ riêng bên tường
              </li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#2e2a1a', borderRadius: 6, padding: 12, margin: '10px 0', border: '1px solid #3e3a2a' }}>
            <strong style={{ color: '#e0af68' }}>Quan trọng:</strong>{' '}
            Chính sách V2G lẫn dự án VPP có rủi ro liên lụy chế độ bảo hành từ hãng pin xe / hãng pin nhà. Luôn dò điều khoản hãng xe chi tiết trước khi đặt bút. Phần đông hệ sinh thái V2G/VPP tự khoanh vùng số lượng cycle ngoài lệ để cản chặn nguy cơ chai pin.
          </div>
        </>
      ),
    },
  ],
};

export default vi;
