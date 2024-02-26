const FrameComponent = () => {
  return (
    <section className="w-[1626px] flex flex-row items-start justify-start pt-0 pb-[46px] pr-0 pl-9 box-border max-w-full text-left text-2xl-8 text-white font-sen mq900:pb-[30px] mq900:box-border">
      <div className="flex-1 flex flex-row items-start justify-between py-0 pr-0.5 pl-0 box-border gap-[20px] max-w-full mq1650:flex-wrap">
        <div className="h-[491px] w-[309px] flex flex-col items-center justify-start gap-[47px_0px] mq450:gap-[47px_0px]">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[1]"
            loading="eager"
            alt=""
            src="/remote-meetingcuate-1.svg"
          />
          <div className="self-stretch flex flex-col items-center justify-start py-0 px-[13px] gap-[13px_0px]">
            <b className="relative z-[1] mq450:text-mid">
              Tell us about yourself
            </b>
            <div className="self-stretch relative text-lg-1 text-center z-[1]">
              Let us know about your learning style, what your current
              course-name level is and your goals for learning
            </div>
          </div>
        </div>
        <div className="h-[491px] w-[297px] flex flex-col items-center justify-start gap-[47px_0px] mq450:gap-[47px_0px]">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[1]"
            loading="eager"
            alt=""
            src="/teachercuate-1.svg"
          />
          <div className="self-stretch flex flex-col items-center justify-start py-0 px-5 gap-[13px_0px]">
            <b className="relative z-[1] mq450:text-mid">
              Get expertly matched
            </b>
            <div className="self-stretch relative text-lg-1 text-center z-[1]">
              Our class coordinator will pair you up with your perfect tutor
              based on your profile and preferences.
            </div>
          </div>
        </div>
        <div className="w-[792px] flex flex-row items-center justify-start py-0 pr-px pl-0 box-border gap-[0px_63px] max-w-full mq450:gap-[0px_63px] mq900:flex-wrap mq900:gap-[0px_63px]">
          <div className="h-[469px] w-[332px] flex flex-col items-center justify-start gap-[47px_0px] min-w-[332px] max-w-full mq450:gap-[47px_0px] mq900:flex-1">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[1]"
              loading="eager"
              alt=""
              src="/thesisamico-1.svg"
            />
            <div className="flex flex-col items-center justify-start py-0 px-[7px] gap-[13px_0px]">
              <b className="relative z-[1] mq450:text-mid">
                Take a free 30 min trial lesson
              </b>
              <div className="w-[255.9px] relative text-lg-1 text-center inline-block z-[1]">
                Get familiar with your tutor and experience what it's like to
                learn with Live webinar.
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-start gap-[47px_0px] min-w-[257px] max-w-full mq450:gap-[47px_0px]">
            <img
              className="self-stretch h-[317.2px] relative max-w-full overflow-hidden shrink-0 z-[1]"
              loading="eager"
              alt=""
              src="/online-calendarcuate-1.svg"
            />
            <div className="w-64 flex flex-col items-center justify-start gap-[13px_0px]">
              <b className="relative z-[1] mq450:text-mid">
                Schedule future lessons
              </b>
              <div className="self-stretch relative text-lg-1 text-center z-[1]">
                Use your online calendar to pick dates and times that suit you
                for future classes or just contact Us
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
