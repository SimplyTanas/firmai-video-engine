# FIRMAI: CẨM NANG TOÀN DIỆN CÔNG CỤ & KỸ NĂNG SÁNG TẠO VIDEO BẰNG CODE & AI

> **Phiên bản:** 1.0.0 — Bản phát hành đầy đủ  
> **Tác giả:** FirmAI Engineering Team  
> **Mục tiêu:** Hệ thống hóa toàn bộ công cụ đa phương tiện (Multimedia Tools) và kỹ năng tác tử (Agent Skills) phục vụ tự động hóa sản xuất video từ kịch bản, âm thanh, đồ họa chuyển động đến xuất bản.

---

## MỤC LỤC TỔNG QUAN

1. [Kiến Trúc Hệ Thống & Pipeline Tổng Thể](#1-kiến-trúc-hệ-thống--pipeline-tổng-thể)
2. [Chi Tiết 6 Công Cụ Multimedia Cốt Lõi (Core Tools)](#2-chi-tiết-6-công-cụ-multimedia-cốt-lõi-core-tools)
   - 2.1 [Remotion: Dựng video bằng code React & TypeScript](#21-remotion-dựng-video-bằng-code-react--typescript)
   - 2.2 [HyperFrames: Framework dựng video từ HTML, CSS & GSAP](#22-hyperframes-framework-dựng-video-từ-html-css--gsap)
   - 2.3 [FFmpeg & FFprobe: Động cơ xử lý & biên tập đa phương tiện](#23-ffmpeg--ffprobe-động-cơ-xử-lý--biên-tập-đa-phương-tiện)
   - 2.4 [ElevenLabs: Giọng đọc thuyết minh AI siêu thực & CLI `eleven`](#24-elevenlabs-giọng-đọc-thuyết-minh-ai-siêu-thực--cli-eleven)
   - 2.5 [yt-dlp: Công cụ tải video, audio & phụ đề chất lượng cao](#25-yt-dlp-công-cụ-tải-video-audio--phụ-đề-chất-lượng-cao)
   - 2.6 [Whisper: Nhận diện giọng nói & tự động tạo phụ đề (STT)](#26-whisper-nhận-diện-giọng-nói--tự-động-tạo-phụ-đề-stt)
3. [Chi Tiết 16 Kỹ Năng Tác Tử Sáng Tạo (Creative & Engineering Skills)](#3-chi-tiết-16-kỹ-năng-tác-tử-sáng-tạo-creative--engineering-skills)
   - 3.1 [`frontend-design` (Anthropic): Triết lý Design Lead & Chống AI Slop](#31-frontend-design-anthropic)
   - 3.2 [`modern-web-guidance` (Google Chrome): Chuẩn Web, Animation & Performance](#32-modern-web-guidance-google-chrome)
   - 3.3 [`anydesign`: Mắt thần giải mã & đảo ngược thiết kế (Reverse Engineering)](#33-anydesign-mắt-thần-giải-mã--đảo-ngược-thiết-kế)
   - 3.4 [`algorithmic-art`: Đồ họa tạo sinh & toán học chuyển động (p5.js)](#34-algorithmic-art-đồ-họa-tạo-sinh--toán-học-chuyển-động)
   - 3.5 [`canvas-design`: Thiết kế Poster, Thumbnail & Title Card](#35-canvas-design-thiết-kế-poster-thumbnail--title-card)
   - 3.6 [`slack-gif-creator`: Hoạt ảnh lặp vô tận (Looping Animation & Easing Math)](#36-slack-gif-creator-hoạt-ảnh-lặp-vô-tận)
   - 3.7 [`theme-factory`: 10 Bộ theme màu sắc & Typography điện ảnh](#37-theme-factory-10-bộ-theme-màu-sắc--typography-điện-ảnh)
   - 3.8 [`brand-guidelines`: Nhận diện thương hiệu & quy chuẩn thị giác](#38-brand-guidelines-nhận-diện-thương-hiệu--quy-chuẩn-thị-giác)
   - 3.9 [`content-research-writer`: Nghiên cứu kịch bản chuyên sâu & Hook giữ chân](#39-content-research-writer-nghiên-cứu-kịch-bản-chuyên-sâu)
   - 3.10 [`doc-coauthoring`: Đồng sáng tác kịch bản & phân cảnh 3 bước](#310-doc-coauthoring-đồng-sáng-tác-kịch-bản--phân-cảnh-3-bước)
   - 3.11 [`youtube-transcript`: Bóc tách phụ đề & chuyển đổi nội dung YouTube](#311-youtube-transcript-bóc-tách-phụ-đề--chuyển-đổi-nội-dung-youtube)
   - 3.12 [`article-extractor`: Bóc tách bài viết từ URL làm kịch bản sạch](#312-article-extractor-bóc-tách-bài-viết-từ-url-làm-kịch-bản-sạch)
   - 3.13 [`image-enhancer`: Nâng cấp độ phân giải, khử mờ & làm nét ảnh](#313-image-enhancer-nâng-cấp-độ-phân-giải-khử-mờ--làm-nét-ảnh)
   - 3.14 [`web-artifacts-builder`: Đóng gói giao diện React + Tailwind thành HTML](#314-web-artifacts-builder-đóng-gói-giao-diện-react--tailwind)
   - 3.15 [`pptx`: Thiết kế Slide 16:9 & Video Storyboard tự động](#315-pptx-thiết-kế-slide-169--video-storyboard-tự-động)
   - 3.16 [`file-organizer`: Quản lý & dọn dẹp thư mục dự án thông minh](#316-file-organizer-quản-lý--dọn-dẹp-thư-mục-dự-án-thông-minh)
4. [Các Quy Trình Sản Xuất Video Thực Chiến (Production Pipelines)](#4-các-quy-trình-sản-xuất-video-thực-chiến-production-pipelines)
   - Quy trình A: Sản xuất Video Tin tức / Báo cáo từ URL bài viết
   - Quy trình B: Sản xuất Video Giải thích Công nghệ (Tech Explainer Video)
   - Quy trình C: Sản xuất Video Chuyển động Nghệ thuật (Generative Visualizer)
5. [Cấu Trúc Thư Mục Repository & Hướng Dẫn Git](#5-cấu-trúc-thư-mục-repository--hướng-dẫn-git)

---

## 1. KIẾN TRÚC HỆ THỐNG & PIPELINE TỔNG THỂ

Hệ sinh thái FirmAI được thiết kế theo cấu trúc mô-đun hoá cao độ, kết hợp giữa **lực đẩy công cụ (CLI Tools)** và **trí tuệ định hướng (Agent Skills)**:

```
[ KỊCH BẢN & Ý TƯỞNG ]
  ├── doc-coauthoring (Quy trình kịch bản 3 bước)
  ├── content-research-writer (Nghiên cứu & tối ưu retention hook)
  ├── article-extractor (Bóc tách dữ liệu từ web)
  └── youtube-transcript (Khai thác nội dung video mẫu)
           │
           ▼
[ THIẾT KẾ & ĐỊNH HÌNH PHONG CÁCH ]
  ├── frontend-design (Triết lý Design Lead, chống AI Slop)
  ├── modern-web-guidance (Chuẩn Web/Animation tối tân)
  ├── theme-factory & brand-guidelines (Mã màu & typography)
  ├── canvas-design (Layout 90% visual, Thumbnail/Poster)
  └── anydesign (Đảo ngược thiết kế tham chiếu sang code)
           │
           ▼
[ ÂM THANH & GIỌNG ĐỌC ]
  ├── ElevenLabs (Giọng đọc AI cảm xúc đa ngôn ngữ qua CLI eleven)
  └── Whisper (Nhận diện giọng nói & tạo phụ đề SRT)
           │
           ▼
[ ĐỒ HỌA CHUYỂN ĐỘNG & GIAO DIỆN ]
  ├── Remotion (Code React/TypeScript)
  ├── HyperFrames (HTML/CSS + GSAP Timeline)
  ├── algorithmic-art (Chuyển động toán học p5.js)
  └── slack-gif-creator (Hoạt ảnh lặp vô tận & easing)
           │
           ▼
[ BIÊN TẬP & XUẤT BẢN ]
  ├── FFmpeg (Mix nhạc, cắt gọt, burn sub, encode H.264/AAC)
  └── yt-dlp (Khai thác tài nguyên b-roll, sound effect)
```

---

## 2. CHI TIẾT 6 CÔNG CỤ MULTIMEDIA CỐT LÕI (CORE TOOLS)

### 2.1 Remotion: Dựng video bằng code React & TypeScript
* **Mô tả:** Nền tảng lập trình video hàng đầu, biến các component React, hiệu ứng CSS, Canvas WebGL và âm thanh thành video MP4 với độ chính xác khung hình (frame-accurate).
* **Đường dẫn dự án:** `/home/tanasserver/FirmAI/my-video`
* **Phiên bản:** `@remotion/cli 4.0.543`
* **Cú pháp lệnh thực tế:**
  ```bash
  # 1. Khởi động môi trường xem trước trực quan (Studio) tại http://localhost:3000
  cd ~/FirmAI/my-video && npm run dev

  # 2. Liệt kê tất cả các video (Composition) có sẵn trong dự án
  npx remotion compositions src/index.ts

  # 3. Xuất (Render) toàn bộ một Composition thành file video MP4
  npx remotion render src/index.ts HelloWorld renders/output.mp4

  # 4. Chụp chính xác 1 khung hình (Still image) thành file PNG
  npx remotion still src/index.ts HelloWorld snapshot.png

  # 5. Kiểm tra benchmark tốc độ render
  npx remotion benchmark src/index.ts HelloWorld
  ```
* **Cấu trúc viết một Composition trong Remotion:**
  ```tsx
  import { useCurrentFrame, useVideoConfig, interpolate, spring, AbsoluteFill } from "remotion";

  export const MyScene = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // Hiệu ứng lò xo tự nhiên cho scale
    const scale = spring({ frame, fps, config: { damping: 12 } });
    // Biến đổi độ mờ từ 0 đến 1 trong 30 frame đầu
    const opacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });

    return (
      <AbsoluteFill style={{ backgroundColor: "#0b0f19", justifyContent: "center", alignItems: "center" }}>
        <h1 style={{ transform: `scale(${scale})`, opacity, color: "#ffffff", fontSize: 80, fontFamily: "sans-serif" }}>
          FirmAI Intelligent Video
        </h1>
      </AbsoluteFill>
    );
  };
  ```

---

### 2.2 HyperFrames: Framework dựng video từ HTML, CSS & GSAP
* **Mô tả:** Công cụ nguồn mở do HeyGen phát triển, định hướng đặc biệt cho AI coding agents. Cho phép viết video trực tiếp bằng file HTML tĩnh kết hợp thư viện GSAP Timeline, sau đó dùng Headless Chrome và FFmpeg render thành video MP4 chuẩn mực.
* **Đường dẫn cài đặt:** `~/.local/bin/hyperframes` (Đã liên kết toàn hệ thống)
* **Phiên bản:** `0.9.41`
* **Dự án mẫu:** `/home/tanasserver/FirmAI/hyperframes-demo`
* **Cú pháp lệnh thực tế:**
  ```bash
  # 1. Khởi tạo một dự án video mới
  hyperframes init ten-du-an --example "blank"

  # 2. Chạy studio xem trước trên trình duyệt
  cd ten-du-an && hyperframes preview

  # 3. Chạy toàn bộ bộ kiểm tra chất lượng (Lint, Layout overlap, Contrast WCAG AA, Audio check)
  hyperframes check

  # 4. Xuất video MP4
  hyperframes render -o output.mp4

  # 5. Xuất định dạng WebM có nền trong suốt (Transparent overlay)
  hyperframes render --format webm -o overlay.webm
  ```
* **Cơ chế hoạt động trong `index.html`:**
  ```html
  <div id="root" data-composition-id="main" data-start="0" data-duration="10" data-width="1920" data-height="1080">
    <h1 id="headline" class="clip" data-start="0" data-duration="5" style="color: white; font-size: 72px;">
      Xin Chào Việt Nam
    </h1>
  </div>
  <script>
    const tl = gsap.timeline({ paused: true });
    tl.fromTo("#headline", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
    window.__timelines["main"] = tl;
    tl.seek(0);
  </script>
  ```

---

### 2.3 FFmpeg & FFprobe: Động cơ xử lý & biên tập đa phương tiện
* **Mô tả:** Công cụ xử lý âm thanh/hình ảnh chuẩn công nghiệp, biên dịch tĩnh (static build) đầy đủ các codec phổ biến (libx264, libx265, aac, libopus, libmp3lame, libvmaf).
* **Đường dẫn cài đặt:** `~/.local/bin/ffmpeg` và `~/.local/bin/ffprobe`
* **Phiên bản:** `7.0.2-static`
* **Tuyển tập lệnh thực chiến:**
  ```bash
  # 1. Cắt video từ giây 10 đến giây 40 không cần render lại (cực nhanh)
  ffmpeg -ss 00:00:10 -to 00:00:40 -i input.mp4 -c copy cut.mp4

  # 2. Tách đường tiếng từ video sang file MP3 chất lượng cao 320k
  ffmpeg -i video.mp4 -vn -c:a libmp3lame -b:a 320k audio.mp3

  # 3. Ghép file âm thanh thuyết minh (voice.mp3) vào video thay thế tiếng cũ
  ffmpeg -i video.mp4 -i voice.mp3 -c:v copy -c:a aac -map 0:v:0 -map 1:a:0 -shortest output.mp4

  # 4. Đóng cứng phụ đề (Hardsub) từ file phụ đề .srt vào khung hình video
  ffmpeg -i video.mp4 -vf "subtitles=subtitles.srt:force_style='FontSize=24,PrimaryColour=&H00FFFFFF,Outline=2'" output_subbed.mp4

  # 5. Chuyển đổi tỷ lệ khung hình sang 9:16 (TikTok/Reels/Shorts 1080x1920)
  ffmpeg -i input_16x9.mp4 -vf "crop=ih*(9/16):ih,scale=1080:1920" -c:a copy output_shorts.mp4

  # 6. Ghép nhiều video lại với nhau theo danh sách text (concat)
  # Tạo file list.txt chứa: file 'clip1.mp4'\nfile 'clip2.mp4'
  ffmpeg -f concat -safe 0 -i list.txt -c copy merged.mp4

  # 7. Kiểm tra chi tiết định dạng, codec, thời lượng bằng ffprobe
  ffprobe -v error -show_entries format=duration,size,bit_rate:stream=codec_name,width,height -of json video.mp4
  ```

---

### 2.4 ElevenLabs: Giọng đọc thuyết minh AI siêu thực & CLI `eleven`
* **Mô tả:** Công nghệ tạo giọng nói tự nhiên, truyền cảm hàng đầu thế giới với hỗ trợ tiếng Việt mượt mà. Đã được xây dựng một công cụ CLI chuyên dụng (`eleven` / `elevenlabs`) để gọi trực tiếp từ dòng lệnh.
* **Đường dẫn CLI:** `~/.local/bin/eleven`
* **Cấu hình tự động:** Tự động nạp API Key từ file `.env` của dự án `my-video`.
* **Cú pháp lệnh thực tế:**
  ```bash
  # 1. Đọc văn bản thành file âm thanh MP3 (Mặc định dùng giọng nam Brian)
  eleven "Chào mừng bạn đến với nền tảng trí tuệ nhân tạo FirmAI." -o intro.mp3

  # 2. Chỉ định giọng đọc cụ thể (alice, sarah, george, charlotte,...)
  eleven "Hôm nay chúng ta sẽ tìm hiểu về cách làm video bằng code." -v alice -o voice_alice.mp3

  # 3. Liệt kê danh sách toàn bộ các giọng đọc có trong tài khoản ElevenLabs
  eleven voices

  # 4. Xem danh sách model hỗ trợ (eleven_multilingual_v2, eleven_v4, eleven_turbo_v2_5)
  eleven models

  # 5. Chạy script batch tạo toàn bộ giọng đọc cho các scene trong dự án
  cd ~/FirmAI/my-video && python3 scripts/tts_elevenlabs.py --all
  ```

---

### 2.5 yt-dlp: Công cụ tải video, audio & phụ đề chất lượng cao
* **Mô tả:** Trình tải video đa nền tảng mạnh mẽ nhất hiện nay, hỗ trợ hơn 1.000 website (YouTube, TikTok, Facebook, Twitter, Vimeo,...). Đã cấu hình sẵn runtime Node.js để vượt qua các cơ chế kiểm tra JavaScript của YouTube.
* **Đường dẫn cài đặt:** `~/.local/bin/yt-dlp`
* **Phiên bản:** `2026.10.26`
* **Cú pháp lệnh thực tế:**
  ```bash
  # 1. Tải video với chất lượng hình ảnh và âm thanh tốt nhất hiện có
  yt-dlp "https://www.youtube.com/watch?v=VIDEO_ID"

  # 2. Chỉ tải âm thanh và chuyển đổi thành file MP3 chất lượng cao
  yt-dlp -x --audio-format mp3 --audio-quality 0 "URL"

  # 3. Chỉ tải một đoạn video ngắn cụ thể (ví dụ từ phút 01:15 đến 01:45)
  yt-dlp --download-sections "*01:15-01:45" "URL"

  # 4. Giới hạn độ phân giải tối đa là 1080p
  yt-dlp -f "bv*[height<=1080]+ba/b[height<=1080]" "URL"

  # 5. Tải toàn bộ phụ đề tiếng Việt hoặc tiếng Anh dạng .srt
  yt-dlp --write-sub --sub-lang "vi,en" --convert-subs srt --skip-download "URL"
  ```

---

### 2.6 Whisper: Nhận diện giọng nói & tự động tạo phụ đề (STT)
* **Mô tả:** Mô hình nhận diện giọng nói thần kinh của OpenAI, tự động bóc băng âm thanh/video và xuất ra các định dạng phụ đề chuẩn xác từng mili-giây. Đã cấu hình bản CPU-optimized PyTorch nhẹ và mượt mà cho hệ thống.
* **Đường dẫn venv & CLI:** `~/.venvs/whisper/bin/whisper` (Đã liên kết toàn hệ thống `~/.local/bin/whisper`)
* **Cú pháp lệnh thực tế:**
  ```bash
  # 1. Tạo file phụ đề .srt tiếng Việt cho video
  whisper video.mp4 --model base --language vi --output_format srt

  # 2. Xuất toàn bộ nội dung lời nói ra file văn bản .txt (dùng model tiny tốc độ cao)
  whisper audio.mp3 --model tiny --language vi --output_format txt

  # 3. Vừa nhận diện tiếng Việt vừa dịch tự động sang phụ đề tiếng Anh
  whisper video.mp4 --model base --language vi --task translate --output_format srt

  # 4. Xuất file thời gian chi tiết từng từ (word-level timestamps) dạng JSON
  whisper audio.mp3 --model small --output_format json
  ```

---

## 3. CHI TIẾT 16 KỸ NĂNG TÁC TỬ SÁNG TẠO (CREATIVE & ENGINEERING SKILLS)

Tất cả các kỹ năng đều được lưu trữ trực tiếp tại thư mục `.agents/skills/` trong workspace để AI agent tự động nạp theo ngữ cảnh:

### 3.1 `frontend-design` (Anthropic)
* **Vị trí:** [`.agents/skills/frontend-design/SKILL.md`](file:///home/tanasserver/FirmAI/.agents/skills/frontend-design/SKILL.md)
* **Triết lý:** Nhập vai **Design Lead** độc bản. Quyết liệt chống lại 5 "vết tích AI" sáo rỗng (màu be Claude `#F4F1EA`, dark mode đen neon `#0B0B0B`, lưới thẻ SaaS card kit đơn điệu, font Inter nhàm chán, và chrome thừa thãi như dấu `→`, `01/02/03` vô cớ).
* **Quy tắc vàng:**
  * *"Spend your boldness in one place"* — Dồn sự đột phá vào duy nhất một điểm nhấn (Hero hoặc một animation đặc sắc), xung quanh giữ sự tĩnh lặng, kỷ luật.
  * Typography mang tính cách của trang; dòng văn bản luôn dưới 80 ký tự.
  * Quy trình Two-Pass: Lập kế hoạch bảng màu tinh gọn 4–6 mã hex $\rightarrow$ Tự phản biện "Có chi tiết nào trông như template AI không?" trước khi viết code.

### 3.2 `modern-web-guidance` (Google Chrome)
* **Vị trí:** [`.agents/skills/modern-web-guidance/SKILL.md`](file:///home/tanasserver/FirmAI/.agents/skills/modern-web-guidance/SKILL.md)
* **Triết lý:** Hướng dẫn chuẩn hoá lập trình web theo tiêu chuẩn **Baseline** mới nhất của các kỹ sư Google Chrome.
* **Ứng dụng:**
  * Tra cứu giải pháp hiện đại: `npx -y modern-web-guidance@latest search "scroll animation"`.
  * Đọc code mẫu chi tiết: `npx -y modern-web-guidance@latest retrieve "motion"`.
  * Tận dụng CSS Scroll-driven animations, View Transitions, `@starting-style` và giảm thiểu mã JavaScript trung gian.

### 3.3 `anydesign`: Mắt thần giải mã & đảo ngược thiết kế
* **Vị trí:** [`.agents/skills/anydesign/SKILL.md`](file:///home/tanasserver/FirmAI/.agents/skills/anydesign/SKILL.md)
* **Triết lý:** Phân tích chẩn đoán hệ thống thiết kế từ ảnh chụp màn hình, URL hoặc Figma. Không chỉ mô tả hình ảnh, mà trích xuất thành token, component, khoảng cách và mã màu thực tế.
* **Công cụ đi kèm:**
  * `python scripts/extract_colors.py <image>`: Lấy mã hex chính xác.
  * `python scripts/check_contrast.py`: Kiểm tra độ tương phản tiếp cận WCAG.
  * Xuất file `design.md` và `design-tokens.json` để dựng lại ngay trong Remotion/HyperFrames.

### 3.4 `algorithmic-art`: Đồ họa tạo sinh & toán học chuyển động
* **Vị trí:** [`.agents/skills/algorithmic-art/SKILL.md`](file:///home/tanasserver/FirmAI/.agents/skills/algorithmic-art/SKILL.md)
* **Triết lý:** Vẻ đẹp nằm ở thuật toán sống (Living Algorithm), không phải hình ảnh tĩnh chèn ngẫu nhiên.
* **Kỹ thuật áp dụng:** Flow fields, Perlin noise nhiều tầng, hệ thống hạt (particle systems), sóng giao thoa lượng tử (Quantum Harmonics), cây đệ quy fractal. Dùng làm background động cao cấp cho video thay thế video stock nhàm chán.

### 3.5 `canvas-design`: Thiết kế Poster, Thumbnail & Title Card
* **Vị trí:** [`.agents/skills/canvas-design/SKILL.md`](file:///home/tanasserver/FirmAI/.agents/skills/canvas-design/SKILL.md)
* **Triết lý:** **90% Visual Design, 10% Essential Text**. Thông tin truyền tải qua không gian, hình khối và độ tương phản chứ không dùng văn bản dài dòng.
* **Ứng dụng:** Thiết kế ảnh Thumbnail YouTube đạt tỷ lệ click (CTR) cao, Poster sự kiện, và Title Card mở đầu cảnh video.

### 3.6 `slack-gif-creator`: Hoạt ảnh lặp vô tận & Easing Math
* **Vị trí:** [`.agents/skills/slack-gif-creator/SKILL.md`](file:///home/tanasserver/FirmAI/.agents/skills/slack-gif-creator/SKILL.md)
* **Triết lý:** Lập trình hoạt ảnh theo toán học chính xác: hàm lượng giác khép kín vòng lặp (seamless loop), đường cong gia tốc (bounce, elastic, ease-in-out), độ dày nét viền tối thiểu `width=2` để chống vỡ hình.
* **Ứng dụng:** Tạo các sticker chuyển động, icon animated (Like, Subscribe, Arrow, Badge) để lồng vào video.

### 3.7 `theme-factory`: 10 Bộ theme màu sắc & Typography điện ảnh
* **Vị trí:** [`.agents/skills/theme-factory/SKILL.md`](file:///home/tanasserver/FirmAI/.agents/skills/theme-factory/SKILL.md)
* **Nội dung:** Cung cấp 10 bộ phối màu & cặp font chữ hoàn chỉnh trong thư mục `themes/`:
  1. *Tech Innovation:* `#0066ff` (Blue) + `#00ffff` (Cyan) + `#1e1e1e` (Dark Gray).
  2. *Midnight Galaxy:* `#0d0221` + `#261447` + `#ff3864`.
  3. *Ocean Depths:* Xanh thẳm hàng hải sang trọng.
  4. *Sunset Boulevard:* Gam màu hoàng hôn rực rỡ, ấm áp.
  5. *Modern Minimalist:* Thang xám đơn sắc đương đại, chuẩn Thụy Sĩ.
  6. *Golden Hour:* Sắc thu vàng ấm áp, hoài niệm.
  7. *Arctic Frost:* Xanh băng giá mát lạnh, sắc nét.
  8. *Desert Rose:* Tông hồng bụi tinh tế.
  9. *Botanical Garden:* Xanh thảo mộc tự nhiên.
  10. *Forest Canopy:* Tông màu đất và rừng cây vững chãi.

### 3.8 `brand-guidelines`: Nhận diện thương hiệu & quy chuẩn thị giác
* **Vị trí:** [`.agents/skills/brand-guidelines/SKILL.md`](file:///home/tanasserver/FirmAI/.agents/skills/brand-guidelines/SKILL.md)
* **Triết lý:** Chuẩn hóa quy cách trình bày logo, vùng an toàn (safe-zones), độ tương phản giữa chữ và nền để đảm bảo toàn bộ video xuất bản giữ đúng bản sắc doanh nghiệp.

### 3.9 `content-research-writer`: Nghiên cứu kịch bản chuyên sâu
* **Vị trí:** [`.agents/skills/content-research-writer/SKILL.md`](file:///home/tanasserver/FirmAI/.agents/skills/content-research-writer/SKILL.md)
* **Triết lý:** Đóng vai trò là cộng sự nghiên cứu nội dung chuyên sâu.
* **Ứng dụng:** Tìm kiếm luận điểm, số liệu chứng minh, đặc biệt là trau chuốt câu **Hook mở đầu** (3–5 giây đầu video) để tối đa hoá tỷ lệ giữ chân người xem.

### 3.10 `doc-coauthoring`: Đồng sáng tác kịch bản & phân cảnh 3 bước
* **Vị trí:** [`.agents/skills/doc-coauthoring/SKILL.md`](file:///home/tanasserver/FirmAI/.agents/skills/doc-coauthoring/SKILL.md)
* **Quy trình:**
  * *Giai đoạn 1 (Context Gathering):* Khai thác triệt để mục tiêu, đối tượng người xem và thời lượng video.
  * *Giai đoạn 2 (Refinement & Structure):* Chia kịch bản thành bảng phân cảnh (Timestamp, Visual Cue, Voiceover text).
  * *Giai đoạn 3 (Viewer Testing):* Đóng vai khán giả chưa biết gì để phát hiện lỗ hổng mạch truyện.

### 3.11 `youtube-transcript`: Bóc tách phụ đề & chuyển đổi YouTube
* **Vị trí:** [`.agents/skills/youtube-transcript/SKILL.md`](file:///home/tanasserver/FirmAI/.agents/skills/youtube-transcript/SKILL.md)
* **Khả năng:** Phối hợp cùng `yt-dlp` tự động tải transcript và subtitle của mọi video trên YouTube về máy, xử lý định dạng VTT/SRT thành văn bản sạch để tái sử dụng làm kịch bản mới.

### 3.12 `article-extractor`: Bóc tách bài viết từ URL làm kịch bản sạch
* **Vị trí:** [`.agents/skills/article-extractor/SKILL.md`](file:///home/tanasserver/FirmAI/.agents/skills/article-extractor/SKILL.md)
* **Khả năng:** Sử dụng Mozilla Readability hoặc Trafilatura cạo sạch toàn bộ nội dung bài viết từ các trang tin tức/blog công nghệ, loại bỏ thanh điều hướng, banner quảng cáo, trả về nội dung Markdown tinh khiết.

### 3.13 `image-enhancer`: Nâng cấp độ phân giải & khử mờ ảnh
* **Vị trí:** [`.agents/skills/image-enhancer/SKILL.md`](file:///home/tanasserver/FirmAI/.agents/skills/image-enhancer/SKILL.md)
* **Khả năng:** Khử nhiễu, làm sắc nét đường viền chữ trên ảnh chụp màn hình, upscale độ phân giải trước khi chèn vào video Remotion / HyperFrames.

### 3.14 `web-artifacts-builder`: Đóng gói giao diện React + Tailwind
* **Vị trí:** [`.agents/skills/web-artifacts-builder/SKILL.md`](file:///home/tanasserver/FirmAI/.agents/skills/web-artifacts-builder/SKILL.md)
* **Khả năng:** Khởi tạo và đóng gói một ứng dụng React 18 + Tailwind + shadcn/ui thành một file HTML duy nhất (`bundle.html`), kết hợp trực tiếp với **HyperFrames** để render các dashboard/mockup động thành video MP4 sắc nét.

### 3.15 `pptx`: Thiết kế Slide 16:9 & Video Storyboard tự động
* **Vị trí:** [`.agents/skills/pptx/SKILL.md`](file:///home/tanasserver/FirmAI/.agents/skills/pptx/SKILL.md)
* **Khả năng:** Sinh slide thuyết trình tỷ lệ chuẩn 16:9 bằng code `pptxgenjs` hoặc can thiệp XML, hỗ trợ xuất hình ảnh làm storyboard trực quan cho toàn bộ dự án video.

### 3.16 `file-organizer`: Quản lý & dọn dẹp thư mục thông minh
* **Vị trí:** [`.agents/skills/file-organizer/SKILL.md`](file:///home/tanasserver/FirmAI/.agents/skills/file-organizer/SKILL.md)
* **Khả năng:** Tự động gom nhóm các tệp tải về (`.mp4`, `.mp3`, `.srt`), tìm file trùng lặp và giữ cho cấu trúc thư mục làm việc luôn ngăn nắp.

---

## 4. CÁC QUY TRÌNH SẢN XUẤT VIDEO THỰC CHIẾN (PRODUCTION PIPELINES)

### Quy trình A: Sản xuất Video Tin tức / Báo cáo từ URL bài viết
1. **Lấy dữ liệu:** Dùng `article-extractor` bóc tách văn bản từ URL bài viết.
2. **Biên tập kịch bản:** Dùng `content-research-writer` tóm lược thành kịch bản 60 giây, trau chuốt 3 giây đầu giữ chân người xem.
3. **Thu âm thuyết minh:** Chạy `eleven "<kịch bản>" -v brian -o voice.mp3`.
4. **Tạo phụ đề:** Chạy `whisper voice.mp3 --model base --language vi --output_format srt`.
5. **Dựng hình ảnh:** Dùng **HyperFrames** hoặc **Remotion** thể hiện headline chữ chuyển động và hình ảnh bài viết.
6. **Xuất bản:** Dùng **FFmpeg** ghép âm thanh, đóng cứng phụ đề vào video và xuất file MP4 hoàn chỉnh.

### Quy trình B: Sản xuất Video Giải thích Công nghệ (Tech Explainer Video)
1. **Thiết kế phong cách:** Kích hoạt `theme-factory` (chọn bộ *Tech Innovation* `#0066ff`, `#00ffff`).
2. **Kịch bản:** Dùng `doc-coauthoring` chia từng phân đoạn (Intro $\rightarrow$ Vấn đề $\rightarrow$ Giải pháp $\rightarrow$ Kết luận).
3. **Giọng đọc AI:** Gọi script `tts_elevenlabs.py` tạo toàn bộ audio cho từng scene.
4. **Lập trình chuyển động:** Viết component trong `my-video/src/Root.tsx` bằng React & Tailwind CSS.
5. **Render video:** Chạy `npx remotion render src/index.ts TechVideo final.mp4`.
6. **Làm ảnh đại diện:** Áp dụng `canvas-design` vẽ thumbnail 1280x720 ấn tượng.

---

## 5. CẤU TRÚC THƯ MỤC REPOSITORY & HƯỚNG DẪN GIT

### Cấu trúc thư mục tại `/home/tanasserver/FirmAI`
```
FirmAI/
├── .agents/
│   └── skills/                  # Kho lưu trữ 16 kỹ năng AI đã được cài đặt
│       ├── algorithmic-art/
│       ├── anydesign/
│       ├── article-extractor/
│       ├── brand-guidelines/
│       ├── canvas-design/
│       ├── content-research-writer/
│       ├── doc-coauthoring/
│       ├── file-organizer/
│       ├── frontend-design/
│       ├── image-enhancer/
│       ├── modern-web-guidance/
│       ├── pptx/
│       ├── slack-gif-creator/
│       ├── theme-factory/
│       ├── web-artifacts-builder/
│       └── youtube-transcript/
├── my-video/                    # Dự án video Remotion (React + TypeScript)
│   ├── src/                     # Mã nguồn các Composition video
│   ├── scripts/                 # Scripts tự động hoá (tts_elevenlabs.py)
│   ├── public/                  # Assets âm thanh, hình ảnh, font
│   └── package.json
├── hyperframes-demo/            # Dự án video HyperFrames (HTML + CSS + GSAP)
│   ├── index.html               # Timeline video viết bằng mã HTML
│   └── package.json
├── .gitignore                   # Loại trừ node_modules, cache và các file nhạy cảm
├── .env.example                 # Mẫu khai báo biến môi trường (API Key)
├── FULL_GUIDE_TOOLS_AND_SKILLS.md # Cẩm nang đầy đủ không rút gọn
└── README.md                    # Tài liệu tổng quan dự án
```

### Hướng dẫn đẩy lên GitHub từ Terminal
Kho mã nguồn đã được khởi tạo Git cục bộ trên nhánh `main`. Để đẩy lên tài khoản GitHub của bạn (ví dụ `Ethan19YQ`):

```bash
# 1. Tạo một repository mới trên GitHub (ví dụ đặt tên là FirmAI-Video-Engine)
# 2. Thêm địa chỉ remote vào dự án cục bộ:
git remote add origin https://github.com/Ethan19YQ/FirmAI-Video-Engine.git

# 3. Đẩy toàn bộ mã nguồn và kỹ năng lên GitHub:
git push -u origin main
```
