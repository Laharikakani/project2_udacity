import type { AgentDefinition } from "@anthropic-ai/claude-agent-sdk";
import { REFACTORING_SUGGESTER_PROMPT } from "../prompts/refactoring-suggester.prompt";

export const refactoringSuggester: AgentDefinition = {
  description:
    "Analyzes pull request code changes and suggests concrete refactoring improvements for readability, maintainability, modernization, and design quality.",
  model: "inherit",
  tools: ["mcp__github__pull_request_read", "Skill"],
  prompt: REFACTORING_SUGGESTER_PROMPT,
};
