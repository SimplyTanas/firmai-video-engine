# FirmAI Video Engine (powered by OpenMontage Architecture)

**MANDATORY: Read [`AGENT_GUIDE.md`](AGENT_GUIDE.md) before responding to ANY user message.**

Do not act on the user's video production request until you have read `AGENT_GUIDE.md` and consulted `PROJECT_CONTEXT.md`.
It contains:
- Rule Zero: All production goes through a pipeline (`pipeline_defs/*.yaml`)
- 3-Layer knowledge architecture:
  - Layer 1: `tools/tool_registry.py` (runtime capabilities)
  - Layer 2: `skills/` (stage directors, creative playbooks, meta reviewer)
  - Layer 3: `.agents/skills/` (specialized engine skills & API rules)
- Decision Communication Contract: Announce before execution, ask before major changes, append to `decision_log`.
- Local compositing runtimes: Remotion (`remotion-composer/`, `my-video/`), HyperFrames, and FFmpeg.

All architectural conventions and operating guidelines live in [`AGENT_GUIDE.md`](AGENT_GUIDE.md) and [`PROJECT_CONTEXT.md`](PROJECT_CONTEXT.md).
