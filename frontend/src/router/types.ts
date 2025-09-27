// ルートパスの定数定義
export const ROUTES = {
  HOME: "/",
  TOP: "/top",
} as const;

// ルートパスの型
// export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];

// ルート名の定数定義
export const ROUTE_NAMES = {
  HOME: "ホーム",
  TOP: "トップ",
} as const;

// ルート名の型
// export type RouteName = (typeof ROUTE_NAMES)[keyof typeof ROUTE_NAMES];
