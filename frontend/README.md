# React + TypeScript + Vite + Tailwind CSS v4 Template

このテンプレートは、React、TypeScript、Vite、そして Tailwind CSS v4 を使用したモダンなフロントエンド開発環境を提供します。

## 特徴

- ⚡️ **Vite** - 高速なビルドツール
- ⚛️ **React 19** - 最新の React
- 🔷 **TypeScript** - 型安全性
- 🎨 **Tailwind CSS v4** - 最新のユーティリティファースト CSS
- 🛣️ **React Router v7** - ルーティング
- 🔧 **ESLint** - コード品質管理
- 🎭 **SWC** - 高速なコンパイラー

## セットアップ

### 1. リポジトリのクローン

```bash
git clone <your-repo-url>
cd react-tailwind-v4-template
```

### 2. 依存関係のインストール

```bash
npm install
```

### 3. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:5173` を開いてアプリケーションを確認できます。

## 利用可能なスクリプト

- `npm run dev` - 開発サーバーを起動
- `npm run build` - プロダクション用ビルド
- `npm run preview` - ビルド結果のプレビュー
- `npm run lint` - ESLint によるコードチェック

## カスタムカラーパレット

このテンプレートには、カスタムカラーパレットが含まれています：

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
<div className="bg-primary-vein-bright text-primary-hanten-dark">カスタムカラーを使用したコンポーネント</div>
```

## プロジェクト構造

```
src/
├── components/     # 再利用可能なコンポーネント
├── pages/         # ページコンポーネント
├── router/        # ルーティング設定
├── assets/        # 静的アセット
├── index.css      # グローバルスタイルとTailwind設定
└── main.tsx       # アプリケーションのエントリーポイント
```

## Tailwind CSS v4 について

このテンプレートは Tailwind CSS v4 を使用しています。カスタム色は`src/index.css`の`@theme`ルールで定義されています。

```css
@theme {
  --color-primary-vein-bright: #b3d854;
  /* その他のカスタム色... */
}
```

## ライセンス

~~MIT License~~

## 貢献

プルリクエストやイシューの報告を歓迎します！
