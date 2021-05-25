import React, { useState } from "react";
import { getApp } from "../../tcb";

export default function Hello() {
  const app = getApp();
  const [user, setUser] = useState('test');
  const [ds, setDs] = useState('20210520')
  const [callFunctionResult, setCallFunctionResult] = useState("");

  const callFunction = async () => {
    try {
      const res = await app.callFunction({
        name: "register",
        data: {
          user,
          ds,
        },
      });
      console.log(res)
      setCallFunctionResult(res.result.love_time || '');
    } catch (e) {
      setCallFunctionResult(e.message);
    }
  };

  return (
    <div className="hello">
      <p>你的名字：</p>
      <input value={user} onChange={e => setUser(e.target.value)}></input>
      <p>何时开始：</p>
      <input value={ds} onChange={e => setDs(e.target.value)} placeholder='YYYYMMDD'></input>
      <div style={{ marginTop: 10 }}> <button onClick={callFunction}>确认</button></div>
      <p>{callFunctionResult ? `已恋爱:${callFunctionResult}天` : ''}</p>
    </div>
  );
}
