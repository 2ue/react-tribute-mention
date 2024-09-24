/**
 * @title Button
 * @description Button description
 */

import { TributeMention } from 'react-tribute-mention'
import React from 'react'

export default function Demo() {
  return (
    <div className='bg-cyan-100'>
      <TributeMention
        value=""
        onChange={(v) => {
          console.log(v);
        }}
        placeholder="@通知他人，增加评论/处理意见"
        height="100px"
        loadItems={async () => [{ value: '1', label: '张三' }, { value: '2', label: '李四' }, { value: '77', label: '何五' }]}
      ></TributeMention>
    </div>
  )
}
