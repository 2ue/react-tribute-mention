import React, { useEffect, useRef } from 'react';
import Tribute from 'tributejs';
import './index.less';
import { isNull } from 'jia-tools';
import cx from 'classnames';
import {
  transformTextToTagText,
  moveCursorToEnd,
  replaceFontTag,
  transformTagTextToText,
  itemTemplate,
  DEFAULT_FIELD_KEYS,
} from './utils';

interface FieldKeys {
  label?: string
  value?: string
}

type Item = Record<string, any>;

interface Props {
  value?: string
  onChange?: (value: string) => void
  loadItems?: Item[] | Promise<Item[]> | ((searchText: string) => (Promise<Item[]> | Item[]))
  placeholder?: string
  className?: string
  style?: React.CSSProperties
  height?: string
  width?: string
  enableLocalSearch?: boolean
  tributeOptions?: Record<string, any>
  fieldKeys?: FieldKeys
}

export function TributeMention(props: Props) {
  const tributeRef = useRef<Tribute<any>>();
  const inputRef = useRef<HTMLInputElement>(null);
  const { label: labelKey, value: valueKey } = {
    ...DEFAULT_FIELD_KEYS,
    ...(props.fieldKeys ?? {}),
  };

  useEffect(() => {
    // 绑定 Tribute 到输入框
    if (!inputRef.current || tributeRef.current) {
      return;
    }
    // 定义提及配置
    tributeRef.current = new Tribute({
      values: async (searchText, cb) => {
        if (!props.loadItems) return;
        if (Array.isArray(props.loadItems)) {
          cb(props.loadItems);
        } else if (typeof props.loadItems === 'function') {
          Promise.resolve(props.loadItems(searchText)).then((items) => {
            cb(items);
          });
        } else {
          cb(await props?.loadItems);
        }
      },
      trigger: '@',
      lookup: item => item[labelKey] + item[valueKey],
      // 下拉提示框样式
      menuItemTemplate(item) {
        console.log('labelKey', labelKey, valueKey);
        return `${item.original[labelKey]}(${item.original[valueKey]})`;
      },
      selectTemplate(item) {
        // 两层嵌套是为了解外层设置了contenteditable="false"的span，会导致获取不到光标问题
        return itemTemplate(item.original[labelKey], item.original[valueKey]);
      },
      requireLeadingSpace: false,
      ...(props.tributeOptions ?? {}),
    });
    tributeRef.current.attach(inputRef.current);
    // 如果有值，则赋值
    if (!isNull(props.value)) {
      inputRef.current.innerHTML = transformTextToTagText(props?.value ?? '');
    }

    // 组件卸载时销毁 Tribute
    return () => {
      if (tributeRef.current && inputRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        tributeRef.current.detach(inputRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div
    className={cx('tribute-mention-container', props.className)}
    style={{ ...props.style, height: props.height, width: props.width }}
    contentEditable
    ref={inputRef}
    data-placeholder={props.placeholder ?? '请输入内容'}
    onInput={(e) => {
      // @ts-ignore
      const { innerText, innerHTML } = e.target;
      // 解决删除完之后残留\n问题
      if (innerText === '\n') {
        inputRef.current!.innerText = '';
      } else if (innerHTML.startsWith('<font')) { // 解决删除完之后残留<font>标签问题
        inputRef.current!.innerHTML = replaceFontTag(innerHTML);
        // 使用innerHTML会丢失光标位置，需要手动设置
        moveCursorToEnd(inputRef.current!);
      }
      console.log('input', transformTagTextToText(innerHTML));
      props.onChange?.(transformTagTextToText(innerHTML));
    }}
  />;
}

export default TributeMention;
