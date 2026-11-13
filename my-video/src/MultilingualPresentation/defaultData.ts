import { LanguageScene, MultilingualVideoProps } from "./types";

export const defaultScenes: LanguageScene[] = [
  {
    id: "scene-vi",
    langCode: "vi",
    langLabel: "Tiếng Việt",
    flag: "🇻🇳",
    badgeText: "Giới thiệu phiên bản Tiếng Việt",
    title: "Giải Pháp Trí Tuệ Nhân Tạo Doanh Nghiệp",
    subtitle: "Tự động hóa thông minh, bứt phá hiệu suất và chuyển đổi số toàn diện",
    tagline: "FirmAI • Tiên phong dẫn dắt làn sóng công nghệ tương lai",
    voiceSubtitle: "Chào mừng bạn đến với Firm AI, giải pháp trí tuệ nhân tạo toàn diện.",
    features: [
      {
        icon: "⚡",
        title: "Tự Động Hóa 24/7",
        desc: "Agent AI tự vận hành quy trình kinh doanh chính xác và liên tục",
      },
      {
        icon: "📊",
        title: "Phân Tích Thông Minh",
        desc: "Khai thác dữ liệu lớn, đưa ra dự báo và khuyến nghị tức thì",
      },
      {
        icon: "🛡️",
        title: "Bảo Mật Cấp Doanh Nghiệp",
        desc: "Mã hóa đa lớp, an toàn tuyệt đối cho mọi dữ liệu quan trọng",
      },
    ],
    audioFile: "audio/scene_vi.mp3",
    primaryColor: "#E11D48",
    secondaryColor: "#BE123C",
    accentColor: "#FBBF24",
    bgGradient: "linear-gradient(135deg, #18050e 0%, #2e081a 50%, #0d0107 100%)",
  },
  {
    id: "scene-en",
    langCode: "en",
    langLabel: "English",
    flag: "🇬🇧",
    badgeText: "English Global Overview",
    title: "Next-Gen Enterprise AI Ecosystem",
    subtitle: "Accelerate your digital evolution with autonomous AI workflows and deep reasoning",
    tagline: "FirmAI • Engineering intelligent futures for global businesses",
    voiceSubtitle: "Welcome to Firm AI, your next-generation intelligent platform.",
    features: [
      {
        icon: "🤖",
        title: "Autonomous Agents",
        desc: "Self-adapting agents executing complex workflows without friction",
      },
      {
        icon: "📈",
        title: "Predictive Analytics",
        desc: "Real-time decision intelligence powering high-growth operations",
      },
      {
        icon: "🌐",
        title: "Hyper-Scalable Cloud",
        desc: "Seamless integration across multi-cloud enterprise architectures",
      },
    ],
    audioFile: "audio/scene_en.mp3",
    primaryColor: "#2563EB",
    secondaryColor: "#1D4ED8",
    accentColor: "#38BDF8",
    bgGradient: "linear-gradient(135deg, #050f26 0%, #0b1e4f 50%, #030814 100%)",
  },
  {
    id: "scene-zh",
    langCode: "zh",
    langLabel: "中文",
    flag: "🇨🇳",
    badgeText: "中文全球方案概览",
    title: "引领未来的企业级智能引擎",
    subtitle: "赋能全链路业务场景，打造高效、敏捷、自进化的 AI 生产力体系",
    tagline: "FirmAI • 跨越语言与国界的全球智慧协同新纪元",
    voiceSubtitle: "欢迎体验 Firm AI，新一代人工智能解决方案。",
    features: [
      {
        icon: "💡",
        title: "智能流程自动化",
        desc: "人机协同无缝链接，全天候高效执行关键业务逻辑",
      },
      {
        icon: "🔍",
        title: "多模态深度洞察",
        desc: "深度挖掘数据价值，毫秒级响应并输出精准洞见",
      },
      {
        icon: "🚀",
        title: "全球化部署支持",
        desc: "高可用高并发架构，支持全球多语言无缝扩展",
      },
    ],
    audioFile: "audio/scene_zh.mp3",
    primaryColor: "#D97706",
    secondaryColor: "#B45309",
    accentColor: "#FDE047",
    bgGradient: "linear-gradient(135deg, #241202 0%, #452104 50%, #120701 100%)",
  },
];

export const defaultMultilingualProps: MultilingualVideoProps = {
  companyName: "FirmAI",
  sceneDurationInFrames: 150, // 5 seconds per scene at 30 fps
  enableAudio: true,
  scenes: defaultScenes,
};
