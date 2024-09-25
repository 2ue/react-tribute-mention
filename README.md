# React-Tribute-Mention

> 一个基于tributejs的react组件，并且支持对@xx整块删除

> ps：由于需要支持@xx的整块删除，所以使用`<div contentEditable></div>`作为输入框

## Useage

``` jsx
import { TributeMention } from 'react-tribute-mention'

export default function Demo() {
  const value = '测试一下@[name](id)'
  return (
    <div className='bg-cyan-100'>
      <TributeMention
        value={value}
        onChange={(v) => {
          console.log(v);
        }}
        placeholder="可以@人哟"
        height="100px"
        loadItems={async () => [{ value: '1', label: 'mike' }, { value: '2', label: 'jack' }, { value: '77', label: 'ahe' }]}
      ></TributeMention>
    </div>
  )
}
```


## Options

``` ts
interface FieldKeys {
  label?: string
  value?: string
}

type Item = Record<string, any>;

interface Props {
  value?: string
  onChange?: (value: string, rawValue) => void
  loadItems?: Item[] | Promise<Item[]> | ((searchText: string) => (Promise<Item[]> | Item[]))
  placeholder?: string
  className?: string
  style?: React.CSSProperties
  height?: string
  width?: string
  fieldKeys?: FieldKeys
  tributeOptions?: Record<string, any>
}
```

### Value

如果`value`包含`@[name](id)`格式的内容将会被正则匹配，转换成@格式内容.

### onChange

当值变化时触发，返回为包含`@[name](id)`格式的内容以及原始的html内容

### loadItems

> 基于`tributejs`中的`values`方法包装了一次

### placeholder

占位提示语

### className

最外层的`className`

### style

最外层的`style`样式


### height

输入框高度

### width

输入框宽度

### fieldKeys

字段的映射关系

### tributeOptions

`tributejs`的配置项


## Utils

### transformTextToTagText

将纯文本字符串转换成代html样式的字符串内容，用作于数据渲染到输入框样式还原

`@[label](value)`格式内容将转换成`<span class="tribute-mention-text-tag" data-mention-id="${value}"><strong contenteditable="false">@${label}</strong></span>`

### transformTagTextToText

将带`html`样式的字符串内容转换成纯文本字符串内容，一般用作于解析输入框的如文本数据


## Feature

- [ ] 支持`@xxx`块的自定义渲染模块样式
- [ ] 支持`focus`等事件
- [ ] 支持`placeholder`等样式更灵活修改
- [ ] 原生支持更多`tributejs`的属性
