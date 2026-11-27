import * as React from "react";

/** 24px グリッド・線 1.75・線端は丸め。Penpot のアイコンと同形。 */
export const iconPaths: Record<string, string> = {
  "検索": '<circle cx="11" cy="11" r="7"/><path d="M16.5 16.5 L21 21"/>',
  "追加": '<path d="M12 4 V20 M4 12 H20"/>',
  "削除": '<path d="M4 12 H20"/>',
  "閉じる": '<path d="M5 5 L19 19 M19 5 L5 19"/>',
  "チェック": '<path d="M4 12 L10 18 L20 6"/>',
  "右矢印": '<path d="M4 12 H20 M14 6 L20 12 L14 18"/>',
  "左矢印": '<path d="M20 12 H4 M10 6 L4 12 L10 18"/>',
  "上矢印": '<path d="M12 20 V4 M6 10 L12 4 L18 10"/>',
  "下矢印": '<path d="M12 4 V20 M6 14 L12 20 L18 14"/>',
  "アップロード": '<path d="M12 16 V4 M7 9 L12 4 L17 9 M4 20 H20"/>',
  "ダウンロード": '<path d="M12 4 V16 M7 11 L12 16 L17 11 M4 20 H20"/>',
  "ゴミ箱": '<path d="M4 7 H20 M9 7 V4 H15 V7 M6 7 L7 20 H17 L18 7"/>',
  "編集": '<path d="M4 20 L8 19 L19 8 L16 5 L5 16 Z"/>',
  "表示": '<path d="M2 12 C6 6 18 6 22 12 C18 18 6 18 2 12 Z"/><circle cx="12" cy="12" r="3"/>',
  "非表示": '<path d="M2 12 C6 6 18 6 22 12 C20 15 17 17 12 17 C7 17 4 15 2 12 Z"/><path d="M4 4 L20 20"/>',
  "鍵": '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11 V8 A4 4 0 0 1 16 8 V11"/>',
  "ユーザー": '<circle cx="12" cy="8" r="4"/><path d="M4 20 A8 8 0 0 1 20 20"/>',
  "ホーム": '<path d="M4 11 L12 4 L20 11 V20 H4 Z"/>',
  "メニュー": '<path d="M4 7 H20 M4 12 H20 M4 17 H20"/>',
  "情報": '<circle cx="12" cy="12" r="9"/><path d="M12 11 V16"/>',
  "コピー": '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8 V6 a2 2 0 0 0-2-2 H6 a2 2 0 0 0-2 2 v8 a2 2 0 0 0 2 2 h2"/>',
  "貼り付け": '<rect x="5" y="5" width="14" height="16" rx="2"/><path d="M9 5 V3 h6 v2"/>',
  "共有": '<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.3 10.9 L15.7 7.1 M8.3 13.1 L15.7 16.9"/>',
  "外部リンク": '<path d="M14 4 H20 V10 M20 4 L11 13"/><rect x="4" y="8" width="12" height="12" rx="2"/>',
  "リンク": '<path d="M10 8 H7 a4 4 0 0 0 0 8 h3"/><path d="M14 8 h3 a4 4 0 0 1 0 8 h-3"/><path d="M9 12 H15"/>',
  "メール": '<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 7 L12 13 L21 7"/>',
  "ベル": '<path d="M6 17 h12 l-2-3 v-4 a4 4 0 0 0-8 0 v4 z"/><path d="M10 20 a2 2 0 0 0 4 0"/>',
  "ブックマーク": '<path d="M6 3 H18 V21 L12 16 L6 21 Z"/>',
  "星": '<path d="M12 3 l2.7 6 6.3 .6-4.8 4.2 1.4 6.2-5.6-3.3-5.6 3.3 1.4-6.2L3 9.6 9.3 9 Z"/>',
  "ハート": '<path d="M12 20 C4 14 3 8 7 6 a4 4 0 0 1 5 2 4 4 0 0 1 5-2 c4 2 3 8-5 14 z"/>',
  "タグ": '<path d="M3 12 V4 H11 L21 14 L13 22 L3 12 Z"/><circle cx="7" cy="8" r="1.2"/>',
  "フィルタ": '<path d="M3 5 H21 L14 13 V20 L10 18 V13 Z"/>',
  "並び替え": '<path d="M8 4 V20 M4 16 L8 20 L12 16 M16 20 V4 M12 8 L16 4 L20 8"/>',
  "カレンダー": '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10 H21 M8 3 V7 M16 3 V7"/>',
  "時計": '<circle cx="12" cy="12" r="9"/><path d="M12 7 V12 L15 14"/>',
  "履歴": '<path d="M12 3 A9 9 0 1 1 4.2 7.5"/><path d="M3.2 6.6 L8.4 6.9 L6.8 11.9 Z" fill="currentColor" stroke="none"/><path d="M12 7 V12 L15 14"/>',
  "フォルダ": '<path d="M3 7 a2 2 0 0 1 2-2 h5 l2 2 h7 a2 2 0 0 1 2 2 v9 a2 2 0 0 1-2 2 H5 a2 2 0 0 1-2-2 Z"/>',
  "ファイル": '<path d="M6 3 H14 L19 8 V21 H6 Z M14 3 V8 H19"/>',
  "画像": '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="9" r="2"/><path d="M3 17 L9 12 L13 16 L17 13 L21 17"/>',
  "動画": '<rect x="3" y="6" width="13" height="12" rx="2"/><path d="M16 10 L21 7 V17 L16 14"/>',
  "音楽": '<path d="M9 18 V5 L20 3 V16"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="17.5" cy="16" r="2.5"/>',
  "音符": '<path d="M10 18 V6 L18 4 V16"/><circle cx="7.5" cy="18" r="2.5"/><circle cx="15.5" cy="16" r="2.5"/>',
  "波形": '<path d="M2 12 H4 L6 7 L9 17 L12 9 L15 15 L18 5 L20 12 H22"/>',
  "楽譜": '<path d="M4 7 H20 M4 11 H20 M4 15 H20 M4 19 H20"/><circle cx="9" cy="15" r="2"/><path d="M11 15 V7"/><circle cx="17" cy="19" r="2"/><path d="M19 19 V10"/>',
  "マイク": '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11 a7 7 0 0 0 14 0 M12 18 V21 M8 21 H16"/>',
  "モデル": '<circle cx="12" cy="5" r="2.5"/><path d="M12 7.5 V14 M12 14 L8 20 M12 14 L16 20 M7 10 L12 9 L17 10"/>',
  "カメラ": '<rect x="3" y="7" width="12" height="10" rx="2"/><path d="M15 10 L21 7 V17 L15 14"/>',
  "ステージ": '<path d="M3 14 L12 9 L21 14 L12 19 Z"/><path d="M3 14 V18 L12 23 L21 18 V14"/>',
  "立方体": '<path d="M12 3 L21 8 V17 L12 22 L3 17 V8 Z M3 8 L12 13 L21 8 M12 13 V22"/>',
  "球": '<circle cx="12" cy="12" r="8"/><ellipse cx="12" cy="12" rx="8" ry="3"/><ellipse cx="12" cy="12" rx="3" ry="8"/>',
  "軸": '<path d="M4 20 H20 M20 20 L17 17 M20 20 L17 23"/><path d="M4 20 V4 M4 4 L1 7 M4 4 L7 7"/><path d="M4 20 L13 14 M13 14 L11 15 M13 14 L12 17"/>',
  "テクスチャ": '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 15 L8 10 L12 14 L15 11 L21 17"/><circle cx="8" cy="8" r="1.5"/>',
  "ライト": '<path d="M9 18 H15 M10 21 H14"/><path d="M12 3 a5 5 0 0 1 3 9 v3 H9 v-3 a5 5 0 0 1 3-9 Z"/>',
  "設定": '<path d="M4 7 H20 M4 12 H20 M4 17 H20"/><circle cx="9" cy="7" r="2" fill="#FFFFFF"/><circle cx="15" cy="12" r="2" fill="#FFFFFF"/><circle cx="7" cy="17" r="2" fill="#FFFFFF"/>',
  "ヘルプ": '<circle cx="12" cy="12" r="9"/><path d="M9.5 9 a2.5 2.5 0 1 1 4 2 c-1 .8-1.5 1.4-1.5 2.5"/>',
  "警告": '<path d="M12 3 L22 20 H2 Z"/><path d="M12 9 V14"/>',
  "ログイン": '<path d="M4 12 H16 M12 8 L16 12 L12 16"/><path d="M16 4 H20 V20 H16"/>',
  "ログアウト": '<path d="M12 12 H20 M16 8 L20 12 L16 16"/><path d="M4 4 H10 V20 H4"/>',
  "選択": '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 12 L11 15 L16 9"/>',
  "保存": '<path d="M5 3 H16 L21 8 V21 H5 Z"/><path d="M8 3 V9 H16 V3"/><rect x="8" y="13" width="8" height="8"/>',
  "印刷": '<rect x="6" y="3" width="12" height="5"/><rect x="3" y="8" width="18" height="8" rx="2"/><rect x="6" y="16" width="12" height="5"/>',
  "アーカイブ": '<rect x="3" y="4" width="18" height="5"/><rect x="5" y="9" width="14" height="11"/><path d="M10 13 H14"/>',
  "再読み込み": '<path d="M4 12 a8 8 0 0 1 14-5"/><path d="M18 3 V8 H13"/><path d="M20 12 a8 8 0 0 1-14 5"/><path d="M6 21 V16 H11"/>',
  "コメント": '<path d="M4 5 H20 V17 H12 L8 21 V17 H4 Z"/>',
};

export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, "name"> {
  name: keyof typeof iconPaths | string;
  size?: number;
}

export function Icon({ name, size = 24, className, ...props }: IconProps) {
  const body = iconPaths[name];
  if (!body) return null;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
      dangerouslySetInnerHTML={{ __html: body }}
      {...props}
    />
  );
}
