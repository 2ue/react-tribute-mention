/**
 * @title TributeMention
 * @description A tool for at user editor
 */

import { TributeMention } from 'react-tribute-mention'
import React from 'react'

export default function Demo() {
  return <>
    <div className='bg-cyan-100'>
      <TributeMention
        value=""
        onChange={(v) => {
          console.log(v);
        }}
        placeholder="enter @ to try it"
        height="100px"
        loadItems={async () => [{ value: '1', label: '张三' }, { value: '2', label: '李四' }, { value: '77', label: '何五' }]}
      ></TributeMention>
    </div>
  </>
}
