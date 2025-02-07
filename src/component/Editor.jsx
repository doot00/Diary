import { getFormattedDate, emotionList } from "../util";
import { EmotionItem } from "./EmotionItem";
import React, { useEffect } from "react";
import { useState } from "react";
import "./Editor.css";
import Button from "./Button";

export default function Editor({ initData, onSubmit }) {
  const [state, setState] = useState({
    date: getFormattedDate(new Date()),
    emotionId: 3,
    content: "",
  });

  useEffect(() => {
    if (initData) {
      setState({
        ...initData,
        date: getFormattedDate(new Date(parseInt(initData.date))),
      });
    }
  }, [initData]);

  // 암튼 날짜 변경하기 위해 useState를 사용함
  const handleChangeDate = (e) => {
    setState({
      ...state,
      date: e.target.value,
    });
  };

  const handleChangeContent = (e) => {
    setState({
      ...state,
      content: e.target.value,
    });
  };

  // 작성 완료
  const handleSubmit = () => {
    onSubmit(state);
  };

  // 취소하기
  const handleOnGoBack = () => {
    navigator(-1);
  };

  // map을 사용 EmotionItem 컴포넌트를 반복하여 렌더링
  const handleChangeEmotion = (emotionId) => {
    setState({
      ...state,
      emotionId,
    });
  };

  // Date 객체를 생성, Editor 컴포넌트 핵심 기능은 아니기 때문에
  return (
    <div className="Editor">
      <div className="editor_section">
        {/* 날짜 */}
        <h4>Today's</h4>
        <div className="input_wrapper">
          <input type="date" value={state.date} onChange={handleChangeDate} />
        </div>
      </div>
      <div className="editor_section">
        <h4>Today's diary</h4>
        <div className="input_wrapper">
          <textarea
            placeholder="How are you?"
            value={state.content}
            onChange={handleChangeContent}
          />
        </div>
      </div>

      <div className="editor_section">
        {/* 감정  이미지  선택 section */}
        <h4>Today's emotion</h4>
        <div className="input_wrapper emotion_list_wrapper">
          {emotionList.map((it) => (
            <EmotionItem
              key={it.id}
              {...it}
              onClick={handleChangeEmotion}
              isSelected={state.emotionId === it.id}
            />
          ))}
        </div>
      </div>
      <div className="editor_section">
        {/* 일기 */}
        <h4>오늘의 일기</h4>
      </div>
      <div className="editor_section bottom_section">
        <Button text={"취소하기"} type={"negative"} onClick={handleOnGoBack} />
        <Button text={"작성 완료"} type={"positive"} onClick={handleSubmit} />
      </div>
    </div>
  );
}
