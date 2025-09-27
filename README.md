# Web App Template with React, Tailwind CSS, and TypeScript

このリポジトリは、React、TypeScript、Tailwind CSS v4を使用したモダンなWebアプリケーションのテンプレートです。

## 🚀 特徴

- ⚡️ **Vite** - 高速なビルドツールと開発サーバー
- ⚛️ **React 19** - 最新のReactフレームワーク
- 🔷 **TypeScript** - 型安全性と開発体験の向上
- 🎨 **Tailwind CSS v4** - 最新のユーティリティファーストCSSフレームワーク
- 🛣️ **React Router v7** - クライアントサイドルーティング
- 🔧 **ESLint** - コード品質管理
- 🎭 **SWC** - 高速なJavaScript/TypeScriptコンパイラー

## 📁 プロジェクト構造

```
web-app-template/
├── frontend/                 # フロントエンドアプリケーション
│   ├── src/                 # ソースコード
│   │   ├── components/      # 再利用可能なコンポーネント
│   │   ├── pages/          # ページコンポーネント
│   │   ├── router/         # ルーティング設定
│   │   ├── assets/         # 静的アセット
│   │   ├── index.css       # グローバルスタイルとTailwind設定
│   │   └── main.tsx        # アプリケーションのエントリーポイント
│   ├── public/             # パブリックアセット
│   ├── package.json        # 依存関係とスクリプト
│   ├── tsconfig.json       # TypeScript設定
│   ├── vite.config.ts      # Vite設定
│   └── tailwind.config.js  # Tailwind CSS設定
├── backend/                # バックエンドアプリケーション（将来の拡張用）
├── .gitignore             # Git除外ファイル
└── README.md              # このファイル
```

## 🛠️ セットアップ

### 前提条件

- Node.js (v18以上)
- npm または yarn

### インストール手順

1. **リポジトリのクローン**
   ```bash
   git clone https://github.com/shari-sushi/wep-app-template-witdh-react-tailwin-ts.git
   cd wep-app-template-witdh-react-tailwin-ts
   ```

2. **フロントエンドの依存関係をインストール**
   ```bash
   cd frontend
   npm install
   ```

3. **開発サーバーの起動**
   ```bash
   npm run dev
   ```

   ブラウザで `http://localhost:5173` を開いてアプリケーションを確認できます。

## 📜 利用可能なスクリプト

フロントエンドディレクトリで以下のコマンドが利用できます：

- `npm run dev` - 開発サーバーを起動
- `npm run build` - プロダクション用ビルド
- `npm run preview` - ビルド結果のプレビュー
- `npm run lint` - ESLint によるコードチェック

## 🎨 カスタムカラーパレット

このテンプレートには、独自のカスタムカラーパレットが含まれています：

- `primary-hanten-dark` - 半纏の濃いとこ (#1f2724)
- `primary-hanten-light` - 半纏の薄いとこ (#657261)
- `primary-vein-bright` - 葉脈の本筋の明るいところ (#b3d854)
- `primary-leaf-dark` - 葉っぱの濃いところ (#88ba54)
- `primary-servant-leaf` - しもべの葉 (#66a962)
- `primary-shirt` - シャツ (#fefffd)
- `primary-cheek-pink` - 頬のピンク (#fbd5d2)
- `primary-cheek-skin` - 頬の肌色 (#fff6e4)
- `primary-tail-center` - しっぽの中央 (#b7a692)
- `primary-logo-hair` - ロゴ、髪 (#b7a893)
- `primary-raccoon-ear-tip` - たぬき耳の先 (#776d5c)

### 使用例

```tsx
<div className="bg-primary-vein-bright text-primary-hanten-dark">
  カスタムカラーを使用したコンポーネント
</div>
```

## 🔧 技術スタック

### フロントエンド
- **React 19** - UIライブラリ
- **TypeScript** - 型安全なJavaScript
- **Vite** - ビルドツール
- **Tailwind CSS v4** - CSSフレームワーク
- **React Router v7** - ルーティング
- **ESLint** - リンター

### 開発ツール
- **SWC** - 高速コンパイラー
- **TypeScript ESLint** - TypeScript用リンター
- **Vite Plugin React SWC** - React用Viteプラグイン

## 📝 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 🤝 貢献

プルリクエストやイシューの報告を歓迎します！

1. このリポジトリをフォーク
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📞 サポート

質問や問題がある場合は、[Issues](https://github.com/shari-sushi/wep-app-template-witdh-react-tailwin-ts/issues)で報告してください。
