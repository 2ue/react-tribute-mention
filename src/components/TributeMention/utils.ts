import { isNull } from 'jia-tools';

export const DEFAULT_FIELD_KEYS = {
  label: 'label',
  value: 'value',
};

export function itemTemplate(label: string, value: string) {
  // contenteditable设置为false能实现整个删除，嵌套两层是为了解决如果contenteditable为false的元素在末尾，会导致光标消失
  return `<span class="tribute-mention-text-tag" data-mention-id="${value}"><strong contenteditable="false">@${label}</strong></span>`;
}

/**
 * 转换文本进行为带标签的文本
 * */
export function transformTextToTagText(text: string) {
  if (isNull(text)) return '';
  // 使用正则表达式匹配 @[名字](id) 格式的文本
  const regex = /@\[([^\]]+)\]\((\d+)\)/g;
  return text.replace(regex, (match, p1, p2) => itemTemplate(p1, p2));
}

// 带标签的文本转换成普通的string文本
export function transformTagTextToText(text: string) {
  if (isNull(text)) return '';
  // 使用正则表达式匹配 @[名字](id) 格式的文本
  const regex = /<span[^>]*data-mention-id="(\d+)"><strong[^>]*>@([^\s]+)<\/strong><\/span>(&nbsp;)?/g;
  return text.replace(regex, (match, p1, p2) => `@[${p2}](${p1})`);
}

// 光标位置移动到最后
export function moveCursorToEnd(target: HTMLElement) {
  if (window.getSelection) {
    target.focus();
    const range = window.getSelection();
    if (!range) return;
    range.selectAllChildren(target);
    range.collapseToEnd();
    // @ts-ignore
  } else if (document?.selection) {
    // @ts-ignore
    const range = document.selection.createRange();
    if (!range) return;
    range.moveToElementText(target);
    range.collapse(false);
    range.select();
  }
}

// 去除残留的font格式
export function replaceFontTag(txt: string) {
  return txt.replace(/<font[^>]*>(.*?)<\/font>/gi, '$1');
}
