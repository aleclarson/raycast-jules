import { Form } from "@raycast/api";
import { useMemo } from "react";
import { useSourceUsage } from "../hooks";
import { useSources } from "../jules";
import { NO_REPO, Source } from "../types";

interface SourceDropdownProps {
  onSelectionChange: (sourceId: string) => void;
  value?: string;
}

export function SourceDropdown({
  onSelectionChange,
  value,
}: SourceDropdownProps) {
  const { data: sources, isLoading } = useSources();
  const { usageCounts } = useSourceUsage();

  const sortedSources = useMemo(() => {
    if (!sources) return sources;
    return [...sources].sort(
      (a, b) => (usageCounts[b.name] || 0) - (usageCounts[a.name] || 0),
    );
  }, [sources, usageCounts]);

  // Helper to get a display name for a source
  const getSourceLabel = (source: Source) => {
    if (source.githubRepo) {
      return `${source.githubRepo.owner}/${source.githubRepo.repo}`;
    }
    // Fallback if future source types are added or githubRepo is missing
    return source.name || source.id;
  };

  return (
    <Form.Dropdown
      id="sourceId"
      title="Source"
      placeholder="Select Source"
      isLoading={isLoading}
      value={value}
      onChange={onSelectionChange}
    >
      <Form.Dropdown.Item value={NO_REPO} title="No Repository" />
      {sortedSources && sortedSources.length > 0 ? (
        sortedSources.map((source) => (
          <Form.Dropdown.Item
            key={source.id}
            value={source.name} // Using resource name as the ID/value
            title={getSourceLabel(source)}
            // icon={source.githubRepo ? "github-logo.png" : Icon.Globe} // Removed icon to avoid needing Icon import or asset for now
          />
        ))
      ) : (
        <Form.Dropdown.Item
          value=""
          title={isLoading ? "Loading..." : "No sources found"}
        />
      )}
    </Form.Dropdown>
  );
}
