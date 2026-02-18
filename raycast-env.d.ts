/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Jules API Key - Your Jules API key */
  "julesApiKey": string,
  /** Launch Options - Whether Jules should require plan approval by default */
  "requirePlanApproval": boolean,
  /**  - Whether Jules should automatically create a PR by default */
  "autoCreatePR": boolean,
  /** Default Activity Filter - The default filter to apply to the activity list */
  "defaultActivityFilter": "all" | "messages" | "artifacts" | "hide-progress"
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `launch-session` command */
  export type LaunchSession = ExtensionPreferences & {}
  /** Preferences accessible in the `list-sessions` command */
  export type ListSessions = ExtensionPreferences & {}
  /** Preferences accessible in the `list-sources` command */
  export type ListSources = ExtensionPreferences & {}
  /** Preferences accessible in the `menu-bar` command */
  export type MenuBar = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `launch-session` command */
  export type LaunchSession = {}
  /** Arguments passed to the `list-sessions` command */
  export type ListSessions = {}
  /** Arguments passed to the `list-sources` command */
  export type ListSources = {}
  /** Arguments passed to the `menu-bar` command */
  export type MenuBar = {}
}

