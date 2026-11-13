# FirmAI Video & Creative Engine 🎬✨

> **The first open-source, agentic video production studio powered by the OpenMontage architecture & Impeccable Design System.**  
> Biến AI Coding Assistant thành một Studio Sản Xuất Video Toàn Diện: 12 Pipeline Chuyên Nghiệp, 150+ Công Cụ, 110 Kỹ Năng Tác Tử (Agent Skills), Thiết Kế Chống Slop Impeccable và 3 Bộ Máy Render (Remotion, HyperFrames, FFmpeg).

---

## 🌟 Tổng Quan Hệ Thống

**FirmAI Video & Creative Engine** là nền tảng sản xuất video tự động hóa điều hướng bởi Tác tử AI (Instruction-Driven Agentic Video Production System). Thay vì các đoạn mã rời rạc, AI đóng vai trò là Tổng Đạo Diễn (Executive Producer & Director), phối hợp nhịp nhàng giữa nghiên cứu kịch bản, sản xuất âm thanh, sinh ảnh/video AI, thiết kế đồ họa chuyển động, dựng phim và đóng gói sản phẩm hoàn thiện.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        AGENT CONTROL PLANE                             │
│   Yêu Cầu Video ──> Chọn Pipeline (YAML) ──> Đọc Stage Director (MD)   │
│   ──> Gọi Bộ Công Cụ (Python BaseTool) ──> Checkpoint & Tự Đánh Giá   │
│   ──> Phê Duyệt / Living Storyboard (Backlot) ──> Video Hoàn Thiện    │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
       ┌────────────────────────────┼────────────────────────────┐
       ▼                            ▼                            ▼
┌──────────────┐             ┌──────────────┐             ┌──────────────┐
│   REMOTION   │             │ HYPERFRAMES  │             │    FFMPEG    │
│ React & TSX  │             │ HTML/CSS/GSAP│             │ Lossless Cut │
│ Frame-Accurate             │ Kinetic Web  │             │ Multi-Track  │
└──────────────┘             └──────────────┘             └──────────────┘
```

---

## 🚀 12 Pipeline Sản Xuất Chuyên Nghiệp (`pipeline_defs/`)

Mỗi pipeline được định nghĩa tường minh bằng YAML manifest kèm quy trình kiểm soát chất lượng (Stage Gates) và Stage Director Skills:

| # | Pipeline | Định dạng & Mục đích | Chu trình các giai đoạn (Stages) |
|---|---|---|---|
| 1 | **`cinematic`** | Phim ngắn, Trailer điện ảnh, Teaser khoa học viễn tưởng | `research` ➔ `proposal` ➔ `script` ➔ `scene_plan` ➔ `assets` ➔ `edit` ➔ `compose` ➔ `publish` |
| 2 | **`documentary-montage`** | Phim tài liệu lịch sử, khoa học, tư liệu b-roll điện ảnh | `idea` ➔ `scene_plan` ➔ `assets` ➔ `edit` ➔ `compose` |
| 3 | **`animated-explainer`** | Video giải thích khái niệm, khoa học giáo dục, công nghệ | `research` ➔ `proposal` ➔ `script` ➔ `scene_plan` ➔ `assets` ➔ `edit` ➔ `compose` ➔ `publish` |
| 4 | **`character-animation`** | Hoạt hình nhân vật 2D, SVG puppet rig, diễn hoạt cử động | `research` ➔ `proposal` ➔ `script` ➔ `character_design` ➔ `rig_plan` ➔ `scene_plan` ➔ `assets` ➔ `edit` ➔ `compose` ➔ `publish` |
| 5 | **`avatar-spokesperson`** | Người ảo thuyết trình, bản tin AI, đào tạo doanh nghiệp | `idea` ➔ `script` ➔ `scene_plan` ➔ `assets` ➔ `edit` ➔ `compose` ➔ `publish` |
| 6 | **`talking-head`** | Video người nói trực diện camera, đồng bộ môi, chèn b-roll | `idea` ➔ `script` ➔ `scene_plan` ➔ `assets` ➔ `edit` ➔ `compose` ➔ `publish` |
| 7 | **`screen-demo`** | Giới thiệu phần mềm, UI/UX walkthrough, quay màn hình giả lập | `idea` ➔ `script` ➔ `scene_plan` ➔ `assets` ➔ `edit` ➔ `compose` ➔ `publish` |
| 8 | **`podcast-repurpose`** | Cắt trích đoạn Podcast, Audiogram sóng âm, phụ đề karaoke | `idea` ➔ `script` ➔ `scene_plan` ➔ `assets` ➔ `edit` ➔ `compose` ➔ `publish` |
| 9 | **`clip-factory`** | Sản xuất hàng loạt Short/Reel/TikTok 9:16 viral tốc độ cao | `idea` ➔ `script` ➔ `scene_plan` ➔ `assets` ➔ `edit` ➔ `compose` ➔ `publish` |
| 10 | **`hybrid`** | Kết hợp đa phương thức: Người thật + 2D Motion Graphics + 3D | `idea` ➔ `script` ➔ `scene_plan` ➔ `assets` ➔ `edit` ➔ `compose` ➔ `publish` |
| 11 | **`animation`** | Video diễn hoạt thuần túy (Remotion / HyperFrames / Three.js / Manim) | `research` ➔ `proposal` ➔ `script` ➔ `scene_plan` ➔ `assets` ➔ `edit` ➔ `compose` ➔ `publish` |
| 12 | **`localization-dub`** | Dịch thuật đa ngôn ngữ, thuyết minh lồng tiếng & subtitle burn | `idea` ➔ `script` ➔ `scene_plan` ➔ `assets` ➔ `edit` ➔ `compose` ➔ `publish` |

---

## 🏛️ Kiến Trúc Tri Thức 3 Lớp (3-Layer Architecture)

Hệ thống phân tách năng lực rõ ràng theo triết lý của OpenMontage:

- **Layer 1: Bộ Công Cụ Thực Thi (`tools/tool_registry.py`)**: 150+ công cụ Python kế thừa `BaseTool` khai báo rõ ràng capability, runtime, cost, dependencies.
- **Layer 2: Hướng Dẫn Đạo Diễn & Quy Ước (`skills/`)**:
  - `skills/pipelines/`: Các cẩm nang Stage Director hướng dẫn AI ra quyết định kịch bản, nhịp độ, góc quay, bố cục.
  - `skills/creative/`: Bí quyết điện ảnh (Cinematography, Storytelling, Sound Design, Prompting Sora/Veo/Kling/Wan/LTX, Color Grading).
  - `skills/core/`: Remotion, HyperFrames, FFmpeg, WhisperX Subtitles.
  - `skills/meta/`: Tự đánh giá (`reviewer.md`), chốt mốc (`checkpoint-protocol.md`), phân tích video mẫu (`video-reference-analyst.md`).
- **Layer 3: Kỹ Năng Tác Tử Chuyên Sâu (`.agents/skills/`)**: 110 bộ tri thức chi tiết cấp API/Framework dành cho trợ lý AI (bao gồm hệ thống thiết kế chống AI-Slop Impeccable).

---

## 🛠️ Bộ Sưu Tập 150+ Công Cụ Tích Hợp

Hệ thống hỗ trợ cơ chế chuyển đổi linh hoạt giữa **Cloud APIs** và **Local Open-Source (GPU/CPU)**:

```
tools/
├── analysis/         # 15 công cụ: video_analyzer, transcriber (WhisperX), scene_detect, frame_sampler, video_understand
├── audio/            # 38 công cụ: tts_selector (ElevenLabs, Edge, Google, Azure, OpenAI, Kokoro, Piper), music_gen, audio_mixer
├── avatar/           # 5 công cụ: talking_head, lip_sync, heygen_avatar, kling_avatar, kling_lip_sync
├── capture/          # 3 công cụ: screen_capture_selector, cap_recorder, screen_recorder
├── character/        # character_spec, svg_rig_builder, pose_library_builder, action_timeline_compiler
├── enhancement/      # 8 công cụ: upscale, bg_remove, face_restore, color_grade, eye_enhance
├── graphics/         # 40 công cụ: image_selector (FLUX, Recraft, BFL, Midjourney, DALL-E), threejs_world, blender_world, atlas_3d
├── video/            # 54 công cụ: video_selector (Sora, Veo, Kling, Wan, Hunyuan, LTX, Seedance), video_compose, video_stitch
├── subtitle/         # subtitle_gen (SRT / VTT timestamp chính xác)
└── publishers/       # export_bundle (đóng gói phân phối đa nền tảng)
```

---

## 🎨 110 Kỹ Năng Tác Tử Hàng Đầu (`.agents/skills/`)

Bao gồm trọn vẹn 16 kỹ năng sáng tạo nền tảng của FirmAI, 93 kỹ năng chuyên sâu từ OpenMontage và hệ thống thiết kế chống AI Slop **Impeccable**:

1. **Design Vocabulary & Anti-Slop (`impeccable`)**: 24 lệnh điều hướng thẩm mỹ (`/bolder`, `/quieter`, `/critique`, `/audit`, `/polish`, `/harden`, `/distill`, `/delight`, v.v.) và 62 luật kiểm duyệt tự động phát hiện thiết kế rập khuôn AI.
2. **Video Engines**: `remotion`, `remotion-best-practices`, `hyperframes`, `hyperframes-animation`, `hyperframes-cli`, `hyperframes-core`, `remotion-to-hyperframes`, `ffmpeg`, `video-edit`, `video-download`, `video-understand`.
3. **3D & Đồ họa**: `threejs-animation`, `threejs-geometry`, `threejs-lighting`, `threejs-loaders`, `threejs-materials`, `threejs-shaders`, `threejs-world-generation`, `3d-asset-generation`, `atlas-cloud`, `d3-viz`, `manim-composer`, `canvas-design`, `algorithmic-art`, `anydesign`.
4. **Chuyển động & Diễn họa**: `gsap`, `gsap-core`, `gsap-timeline`, `gsap-scrolltrigger`, `gsap-react`, `framer-motion`, `canvas-procedural-animation`, `character-rigging`, `svg-character-animation`, `lottie-bodymovin`, `slack-gif-creator`.
5. **Mô hình Video AI**: `ai-video-gen`, `kling-official`, `seedance-2-0`, `seedance-2-5`, `minimax-h3`, `pika-h3-flex`, `ltx2`, `faceswap`, `avatar-video`, `heygen`.
6. **Hình ảnh & Prompting**: `flux-best-practices`, `bfl-api`, `gemini-omni`, `grok-media`, `dashscope`, `frontend-design`, `image-enhancer`.
7. **Âm thanh & Thuyết minh**: `elevenlabs`, `azure-text-to-speech`, `azure-speech-to-text`, `fish-audio-tts`, `doubao-tts`, `text-to-speech`, `speech-to-text`, `music`, `music-to-video`, `sound-effects`, `lyria`, `acestep`.
8. **Nghiên cứu & Thiết kế**: `content-research-writer`, `doc-coauthoring`, `youtube-transcript`, `article-extractor`, `brand-guidelines`, `theme-factory`, `tailwind-design-system`, `modern-web-guidance`, `web-artifacts-builder`, `pptx`, `file-organizer`.


---

## 🖥️ Các Bộ Máy Dựng Video Cốt Lõi

### 1. Remotion (`remotion-composer/`)
- Dựng video khung hình chính xác (Frame-Accurate) bằng React, Tailwind CSS và TypeScript.
- Bộ template chuẩn OpenMontage `remotion-composer`: `CinematicRenderer`, `Explainer`, `TalkingHead`, `TitledVideo`, `CollageBurst`, `LyricOverlay`.

```bash
# Xem trước các composition Remotion
cd remotion-composer && npm install && npm run start

# Render ra video MP4
npx remotion render Explainer out/explainer.mp4
```

### 2. HyperFrames
- Dựng video trực tiếp từ HTML/CSS/GSAP, tối ưu tuyệt đối cho kinetic typography, infographic và website-to-video.
- Sử dụng CLI: `hyperframes preview` hoặc `hyperframes render`.

### 3. Backlot: Living Storyboard Server (`backlot/`)
- Web Dashboard thời gian thực theo dõi tiến độ sản xuất:
  - Cập nhật tự động qua Server-Sent Events (SSE).
  - Trực quan hóa từng Artifact (`brief`, `script`, `scene_plan`, `asset_manifest`, `edit_decisions`).
  - Duyệt và nghe thử âm thanh, xem trước video từng cảnh.

```bash
# Khởi động Backlot living storyboard
python3 -m backlot
```

### 4. Ink-Theater (`ink-theater/`)
- Hệ thống diễn hoạt rối 2D vẽ tay thời gian thực với Motion Capture (Mocap) và SVG Puppetry.

---

## ⚡ Hướng Dẫn Khởi Đầu Nhanh (Quick Start)

### 1. Cài đặt môi trường
```bash
# Cài đặt Python core packages
pip3 install -r requirements.txt

# Cài đặt Remotion dependencies
cd my-video && npm install
cd ../remotion-composer && npm install
```

### 2. Cấu hình API Keys (`.env`)
Sao chép `.env.example` thành `.env` và điền các API key bạn có:
```bash
cp .env.example .env
```
*(Nếu không có API key, hệ thống tự động định tuyến sang các công cụ Open-Source miễn phí: Edge TTS, FFmpeg, Whisper, HyperFrames, Pixabay Stock!)*

### 3. Ra lệnh cho Trợ lý AI (Antigravity / Cursor / Claude)
Chỉ cần gõ yêu cầu của bạn, AI sẽ tự động tuân thủ **Rule Zero** và kích hoạt pipeline thích hợp:
> *"Tạo cho tôi một video tài liệu 60 giây phong cách cinematic về Chiến dịch Hồ Chí Minh 1975, có bản đồ chiến thuật và giọng đọc hào hùng."*

AI sẽ:
1. Xác định pipeline: `documentary-montage` hoặc `cinematic`.
2. Đọc stage director skill và sinh kịch bản chuẩn cấu trúc.
3. Tạo voice-over qua TTS và chốt âm nhạc hùng tráng.
4. Lập kế hoạch phân cảnh (`scene_plan.json`).
5. Ghép nối và render qua Remotion / HyperFrames.
6. Xuất video hoàn chỉnh kèm báo cáo chi tiết.

---

## 📄 Bản Quyền & Giấy Phép
Dự án được xây dựng và kế thừa từ nền tảng mã nguồn mở **OpenMontage** (AGPLv3) kết hợp các công nghệ sáng tạo độc quyền của **FirmAI**.
