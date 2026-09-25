import type { AgentDefinition } from "@anthropic-ai/claude-agent-sdk";
import { TEST_COVERAGE_ANALYZER_PROMPT } from "../prompts/test-coverage-analyzer.prompt";

export const testCoverageAnalyzer: AgentDefinition = {
  description:
    "Analyzes pull request code changes for test coverage, missing tests, untested paths, branches, edge cases, and test quality.",
  model: "inherit",
  tools: ["mcp__github__pull_request_read", "Skill"],
  prompt: TEST_COVERAGE_ANALYZER_PROMPT,
};
