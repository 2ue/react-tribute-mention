import{p as c}from"./_-FU1-d8Ot.js";import{u as s,j as e}from"./index-BQUaEorO.js";function i(t){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",input:"input",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"react-tribute-mention",children:"React-Tribute-Mention"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"一个基于tributejs的react组件，并且支持对@xx整块删除"}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["ps：由于需要支持@xx的整块删除，所以使用",e.jsx(n.code,{children:"<div contentEditable></div>"}),"作为输入框"]}),`
`]}),`
`,e.jsx(n.h2,{id:"install",children:"Install"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-shell",children:`# 选择你喜欢的包管理器进行安装
npm i -S react-tribute-mention
# or
yarn add -S react-tribute-mention
# or
pnpm add -S react-tribute-mention

`})}),`
`,e.jsx(n.h2,{id:"useage",children:"Useage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { TributeMention } from 'react-tribute-mention'

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
`})}),`
`,e.jsx(n.h2,{id:"options",children:"Options"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`interface FieldKeys {
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
`})}),`
`,e.jsx(n.h3,{id:"value",children:"Value"}),`
`,e.jsxs(n.p,{children:["如果",e.jsx(n.code,{children:"value"}),"包含",e.jsx(n.code,{children:"@[name](id)"}),"格式的内容将会被正则匹配，转换成@格式内容."]}),`
`,e.jsx(n.h3,{id:"onchange",children:"onChange"}),`
`,e.jsxs(n.p,{children:["当值变化时触发，返回为包含",e.jsx(n.code,{children:"@[name](id)"}),"格式的内容以及原始的html内容"]}),`
`,e.jsx(n.h3,{id:"loaditems",children:"loadItems"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["基于",e.jsx(n.code,{children:"tributejs"}),"中的",e.jsx(n.code,{children:"values"}),"方法包装了一次"]}),`
`]}),`
`,e.jsx(n.h3,{id:"placeholder",children:"placeholder"}),`
`,e.jsx(n.p,{children:"占位提示语"}),`
`,e.jsx(n.h3,{id:"classname",children:"className"}),`
`,e.jsxs(n.p,{children:["最外层的",e.jsx(n.code,{children:"className"})]}),`
`,e.jsx(n.h3,{id:"style",children:"style"}),`
`,e.jsxs(n.p,{children:["最外层的",e.jsx(n.code,{children:"style"}),"样式"]}),`
`,e.jsx(n.h3,{id:"height",children:"height"}),`
`,e.jsx(n.p,{children:"输入框高度"}),`
`,e.jsx(n.h3,{id:"width",children:"width"}),`
`,e.jsx(n.p,{children:"输入框宽度"}),`
`,e.jsx(n.h3,{id:"fieldkeys",children:"fieldKeys"}),`
`,e.jsx(n.p,{children:"字段的映射关系"}),`
`,e.jsx(n.h3,{id:"tributeoptions",children:"tributeOptions"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"tributejs"}),"的配置项"]}),`
`,e.jsx(n.h2,{id:"utils",children:"Utils"}),`
`,e.jsx(n.h3,{id:"transformtexttotagtext",children:"transformTextToTagText"}),`
`,e.jsx(n.p,{children:"将纯文本字符串转换成代html样式的字符串内容，用作于数据渲染到输入框样式还原"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"@[label](value)"}),"格式内容将转换成",e.jsx(n.code,{children:'<span class="tribute-mention-text-tag" data-mention-id="${value}"><strong contenteditable="false">@${label}</strong></span>'})]}),`
`,e.jsx(n.h3,{id:"transformtagtexttotext",children:"transformTagTextToText"}),`
`,e.jsxs(n.p,{children:["将带",e.jsx(n.code,{children:"html"}),"样式的字符串内容转换成纯文本字符串内容，一般用作于解析输入框的如文本数据"]}),`
`,e.jsx(n.h2,{id:"feature",children:"Feature"}),`
`,e.jsxs(n.ul,{className:"contains-task-list",children:[`
`,e.jsxs(n.li,{className:"task-list-item",children:[e.jsx(n.input,{type:"checkbox",disabled:!0})," ","支持",e.jsx(n.code,{children:"@xxx"}),"块的自定义渲染模块样式"]}),`
`,e.jsxs(n.li,{className:"task-list-item",children:[e.jsx(n.input,{type:"checkbox",disabled:!0})," ","支持",e.jsx(n.code,{children:"focus"}),"等事件"]}),`
`,e.jsxs(n.li,{className:"task-list-item",children:[e.jsx(n.input,{type:"checkbox",disabled:!0})," ","支持",e.jsx(n.code,{children:"placeholder"}),"等样式更灵活修改"]}),`
`,e.jsxs(n.li,{className:"task-list-item",children:[e.jsx(n.input,{type:"checkbox",disabled:!0})," ","原生支持更多",e.jsx(n.code,{children:"tributejs"}),"的属性"]}),`
`]})]})}function d(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}function l(t){return e.jsx(d,{})}function a(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(l,{...t})}):l()}const o=Object.freeze(Object.defineProperty({__proto__:null,default:a},Symbol.toStringTag,{value:"Module"})),r={};r.outlineInfo=c;r.main=o;export{r as default};
