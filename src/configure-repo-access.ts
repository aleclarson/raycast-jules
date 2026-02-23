import { open } from "@raycast/api";

export default async function Command() {
  await open(
    "https://github.com/apps/google-labs-jules/installations/select_target",
  );
}
