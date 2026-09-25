import type { AgentDefinition } from "@anthropic-ai/claude-agent-sdk";
import { CODE_QUALITY_ANALYZER_PROMPT } from "../prompts/code-quality-analyzer.prompt";

export const codeQualityAnalyzer: AgentDefinition = {
  description:
    "Analyzes source code for quality, security, performance, maintainability, style, bug risks, and best practices.",
  model: "inherit",
  tools: ["mcp__github__pull_request_read", "Skill"],
  prompt: CODE_QUALITY_ANALYZER_PROMPT,
};
