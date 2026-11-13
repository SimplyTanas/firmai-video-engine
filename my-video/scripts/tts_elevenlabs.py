#!/usr/bin/env python3
"""
ElevenLabs TTS Generator using Eleven v4 (model_id: eleven_v4)
"""
import os
import sys
import argparse
import requests

API_KEY = os.environ.get("ELEVENLABS_API_KEY", "sk_529fa7f5de6f1dd554bf76be0ffb9656c6546cc494c00684")
MODEL_ID = "eleven_v4" # Always use Eleven v4 as requested

DEFAULT_VOICES = {
    "brian": "nPczCjzI2devNBz1zQrb",  # Deep, resonant, professional
    "alice": "Xb7hH8MSUJpSbSDYk0k2",  # Clear, engaging female
    "sarah": "EXAVITQu4vr4xnSDxMaL",  # Confident, mature female
    "george": "JBFqnCBsd6RMkjVDRZzb", # Warm storyteller
    "ba_luc": "KJmTHSk3TjHp87WObL98", # Requires paid plan for API
}

def generate_tts(text: str, output_path: str, voice_id: str = DEFAULT_VOICES["brian"], model_id: str = MODEL_ID):
    url = f"https://api.elevenlabs.io/v1/text-to-speech/{voice_id}"
    headers = {
        "xi-api-key": API_KEY,
        "Content-Type": "application/json"
    }
    payload = {
        "text": text,
        "model_id": model_id,
        "voice_settings": {
            "stability": 0.5,
            "similarity_boost": 0.8
        }
    }
    response = requests.post(url, json=payload, headers=headers)
    if response.status_code == 200:
        os.makedirs(os.path.dirname(os.path.abspath(output_path)), exist_ok=True)
        with open(output_path, "wb") as f:
            f.write(response.content)
        print(f"Successfully generated [{model_id}] -> {output_path} ({len(response.content)} bytes)")
        return True
    else:
        print(f"Error ({response.status_code}): {response.text}")
        return False

def generate_all_scenes(voice_id: str = DEFAULT_VOICES["brian"]):
    tasks = [
        ("Chào mừng bạn đến với Firm AI, giải pháp trí tuệ nhân tạo toàn diện và tự động hóa thông minh.", 
         "/home/tanasserver/FirmAI/my-video/public/audio/scene_vi.mp3"),
        ("Welcome to Firm AI, your next-generation intelligent automation platform.", 
         "/home/tanasserver/FirmAI/my-video/public/audio/scene_en.mp3"),
        ("欢迎体验 Firm AI，新一代企业级人工智能与自动化解决方案。", 
         "/home/tanasserver/FirmAI/my-video/public/audio/scene_zh.mp3"),
        ("Firm AI. Sáng tạo không giới hạn, kiến tạo tương lai.", 
         "/home/tanasserver/FirmAI/my-video/public/audio/scene_finale.mp3")
    ]
    for text, out_file in tasks:
        generate_tts(text, out_file, voice_id=voice_id, model_id=MODEL_ID)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Generate TTS using ElevenLabs v4")
    parser.add_argument("--text", type=str, help="Text to synthesize")
    parser.add_argument("--out", type=str, help="Output MP3 path")
    parser.add_argument("--voice", type=str, default="brian", help="Voice name or Voice ID")
    parser.add_argument("--all", action="store_true", help="Regenerate all scenes for FirmAI video")
    
    args = parser.parse_args()
    voice_key = DEFAULT_VOICES.get(args.voice, args.voice)
    
    if args.all or (not args.text and not args.out):
        print(f"Regenerating all scenes using model [{MODEL_ID}]...")
        generate_all_scenes(voice_id=voice_key)
    else:
        if not args.text or not args.out:
            print("Please provide both --text and --out, or use --all")
            sys.exit(1)
        generate_tts(args.text, args.out, voice_id=voice_key, model_id=MODEL_ID)
