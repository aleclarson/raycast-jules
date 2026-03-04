import { useCachedState } from "@raycast/utils";
import { useEffect, useMemo } from "react";
import { Activity } from "./types";

export function getLastActivity(activities?: Activity[]): Activity | undefined {
  if (!activities || activities.length === 0) {
    return undefined;
  }
  const sorted = [...activities].sort(
    (a, b) =>
      new Date(b.createTime).getTime() - new Date(a.createTime).getTime(),
  );
  return sorted[0];
}

export function useLastActivity(activities?: Activity[]): Activity | undefined {
  return useMemo(() => getLastActivity(activities), [activities]);
}

export function useSourceUsageDecay() {
  const [, setUsageCounts] = useCachedState<Record<string, number>>(
    "sourceUsageCounts",
    {},
  );
  const [lastDecayed, setLastDecayed] = useCachedState<number>(
    "sourceUsageLastDecayed",
    0,
  );

  useEffect(() => {
    // If not initialized, initialize to now to prevent immediate decay
    if (lastDecayed === 0) {
      setLastDecayed(Date.now());
      return;
    }

    const ONE_DAY = 24 * 60 * 60 * 1000;
    if (Date.now() - lastDecayed > ONE_DAY) {
      setUsageCounts((prev) => {
        const next = { ...prev };
        for (const key in next) {
          next[key] = next[key] * 0.75;
        }
        return next;
      });
      setLastDecayed(Date.now());
    }
  }, [lastDecayed, setLastDecayed, setUsageCounts]);
}

export function useSourceUsage() {
  const [usageCounts, setUsageCounts] = useCachedState<Record<string, number>>(
    "sourceUsageCounts",
    {},
  );

  const incrementUsage = (sourceId: string) => {
    setUsageCounts((prev) => ({
      ...prev,
      [sourceId]: (prev[sourceId] || 0) + 1,
    }));
  };

  return { usageCounts, incrementUsage };
}
