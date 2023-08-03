import React from "react";

export default function Loader() {
  return (
    <>
      <style jsx="true">{`
        .loader-container{
            display:flex;
            justify-content:center;
            align-items:center;
            background:#0A2647;
            height:100vh;
        }
        @keyframes audio-wave {
          0%{
            height: 10px;
            trnsform: translateY(0px);
            background: #FF55BB;
          }
          25%{
            height: 40px;
            trnsform: translateY(-5px);
            scaleY(1.7);
            background:#FFD3A3;
          }
          50%{
            height: 10px;
            trnsform: translateY(0px);
            scaleY(1.7);
            background; #FCFFB2;
          }
          100%{
            height: 10px;
            trnsform: translateY(0px);
            scaleY(1.7);
            background; #B6EAFA;
          }
        }
        
        .sound-wave{
          display:flex;
          justify-content: center;
          align-items:center;
          gap:8px;
          height:60px
        }
        .sound-wave span{
          height:18px;
          width:10px;
          display:block;
          border-radius:8px;
          background:orange;
          animation:audio-wave 2.2s infinite ease-in-out
          
        }
        .sound-wave span:nth-child(2) {
          left:11px;
          background:red;
          animation-delay:0.2s
        }
        .sound-wave span:nth-child(3){
          left:22px;
          animation-delay:0.4s
        }
        .sound-wave span:nth-child(4){
          left:33px;
          animation-delay:0.6s
        }
        .sound-wave span:nth-child(5){
          left:44px;
          animation-delay:0.8s
        }
        .sound-wave span:nth-child(6){
          left:55px;
          animation-delay:1s
        }
    `}</style>
      <div className="loader-container">
        <div className="sound-wave">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
}
