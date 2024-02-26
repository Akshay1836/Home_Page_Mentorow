const FrameComponent3 = () => {
  return (
    <div className="w-[1129px] flex flex-col items-start justify-start gap-[52px_0px] max-w-full text-left text-77xl text-white font-sen mq900:gap-[52px_0px]">
      <div className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-[9px] box-border max-w-full text-[transparent]">
        <div className="w-[970px] flex flex-col items-start justify-start gap-[43px_0px] max-w-full mq900:gap-[43px_0px]">
          <h1 className="m-0 w-[351px] h-[73px] relative text-inherit leading-[28.8px] capitalize font-extrabold font-inherit flex items-center shrink-0 [-webkit-text-stroke:2.5px_#fff] max-w-full z-[1] mq450:text-10xl mq450:leading-[12px] mq900:text-29xl mq900:leading-[17px]">
            LEARN
          </h1>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[3px] box-border max-w-full text-131xl text-white">
            <h1 className="m-0 h-[102px] flex-1 relative text-inherit leading-[28.8px] capitalize font-extrabold font-inherit flex items-center max-w-full z-[1] mq450:text-18xl mq450:leading-[12px] mq900:text-41xl mq900:leading-[17px]">
              <span>
                <span>tHE</span>
                <span className="text-springgreen">{` `}</span>
                <span className="text-yellowgreen">fUTURE</span>
              </span>
            </h1>
          </div>
          <div className="self-stretch flex flex-row items-start justify-end py-0 px-[7px] box-border max-w-full">
            <h1 className="m-0 h-[71px] w-[443px] relative text-inherit leading-[28.8px] capitalize font-extrabold font-inherit flex items-center shrink-0 [-webkit-text-stroke:2.5px_#fff] max-w-full z-[1] mq450:text-10xl mq450:leading-[12px] mq900:text-29xl mq900:leading-[17px]">
              wITH US
            </h1>
          </div>
        </div>
      </div>
      <div className="w-[750px] flex flex-row items-start justify-start py-0 px-[9px] box-border max-w-full text-17xl">
        <div className="flex-1 flex flex-col items-start justify-start gap-[46px_0px] max-w-full mq900:gap-[46px_0px]">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full">
            <h2 className="m-0 flex-1 relative text-inherit tracking-[0.03em] leading-[40.8px] font-bold font-inherit inline-block max-w-full z-[1] mq450:text-3xl mq450:leading-[24px] mq900:text-10xl mq900:leading-[33px]">
              Learn From Experts Grab Your Career
            </h2>
          </div>
          <div className="flex flex-row items-start justify-start gap-[0px_49px] max-w-full mq450:flex-wrap mq450:gap-[0px_49px]">
            <button className="cursor-pointer p-[15px] bg-[transparent] w-[130px] rounded-40xl box-border flex flex-row items-center justify-center z-[1] border-[2px] border-solid border-darkslateblue hover:bg-mediumpurple-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-mediumpurple-100">
              <b className="relative text-mid font-sen text-white text-center">
                Enroll Now
              </b>
            </button>
            <button className="cursor-pointer pt-[17px] pb-[19px] pr-[22px] pl-[34px] bg-[transparent] rounded-40xl flex flex-row items-center justify-end z-[1] border-[2px] border-solid border-springgreen hover:bg-limegreen-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-limegreen-100">
              <b className="relative text-mid leading-[16px] font-sen text-white text-center">
                Explore Our Programs
              </b>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-end justify-start gap-[0px_43px] max-w-full text-base mq450:gap-[0px_43px] mq1300:flex-wrap">
        <div className="flex flex-row items-center justify-start gap-[0px_16px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 object-cover z-[1]"
            loading="eager"
            alt=""
            src="/list--item--link--svg@2x.png"
          />
          <div className="relative tracking-[0.01em] leading-[37.5px] z-[1]">
            Practice on live projects
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[0px_17px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 z-[1]"
            loading="eager"
            alt=""
            src="/list--item--link--svg-1.svg"
          />
          <div className="relative tracking-[0.01em] leading-[37.5px] z-[1]">
            Mentoring from industry veterans
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[0px_17px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 z-[1]"
            alt=""
            src="/list--item--link--svg-2.svg"
          />
          <div className="relative tracking-[0.01em] leading-[37.5px] z-[1]">
            Building strong community to grow
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
