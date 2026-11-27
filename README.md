# @nfmmu/udon-react

全国もちもちうどん連盟のデザインシステムを React で使うためのパッケージ。

- 27 種類のコンポーネント（State プロパティ相当の `variant` / `state` を持つ）
- 64 個のアイコン
- CSS 変数ベースのデザイントークン
- Tailwind CSS のプリセット

## 導入

```bash
npm install @nfmmu/udon-react
```

トークンを読み込む（Tailwind を使わない場合も必要）。

```ts
import "@nfmmu/udon-react/tokens.css";
```

## Tailwind と一緒に使う

```js
// tailwind.config.js
import udon from "@nfmmu/udon-react/tailwind-preset";

export default {
  presets: [udon],
  content: ["./src/**/*.{ts,tsx}", "./node_modules/@nfmmu/udon-react/dist/**/*.js"],
};
```

Tailwind v4 の場合は `tokens.css` の変数を `@theme` に取り込むか、そのまま CSS 変数として参照する。

## 使い方

```tsx
import { Button, TextField, TagItem } from "@nfmmu/udon-react";

export function Example() {
  return (
    <>
      <Button variant="primary">保存する</Button>
      <TextField label="タイトル" placeholder="入力してください" />
      <TagItem>タグ</TagItem>
    </>
  );
}
```

## アイコン

```tsx
import { Icon } from "@nfmmu/udon-react";

<Icon name="検索" />
<Icon name="履歴" size={32} />
```

## 状態

`Button` は `variant`（primary / secondary / ghost / danger）と `disabled`、`TextField` は `invalid` / `disabled` を持つ。色だけで状態を表さないこと。

## デザイン原則

- 面は白、線は 1 色、差し色は 1 箇所
- 角丸は 8px、影は 2 段まで
- ブランド色 `#99661A` は主要操作と選択状態にだけ使う

詳細は `udon-design-system` のリファレンスを参照。
