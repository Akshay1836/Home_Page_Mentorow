import FrameComponent3 from "../components/FrameComponent3";
import OpportunitiesAreWa from "../components/OpportunitiesAreWa";
import CTAFrame from "../components/CTAFrame";
import FrameLogo from "../components/FrameLogo";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import TextContainer from "../components/TextContainer";

const Version = () => {
  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-col items-center justify-start pt-[269px] px-0 pb-[201px] box-border gap-[100px_0px] tracking-[normal] text-center text-29xl text-white font-sen mq900:gap-[100px_0px] mq1300:gap-[100px_0px]">
      <div className="self-stretch h-[1059px] relative hidden z-[0]" />
      <section className="w-[1226px] flex flex-row items-start justify-end pt-0 px-5 pb-[29px] box-border max-w-full">
        <FrameComponent3 />
      </section>
      <section className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[134px] box-border gap-[95px_0px] max-w-full mq450:pb-[57px] mq450:box-border mq900:gap-[95px_0px] mq1300:gap-[95px_0px] mq1300:pb-[87px] mq1300:box-border">
        <OpportunitiesAreWa />
        <CTAFrame />
      </section>
      <FrameLogo />
      <div className="w-[742px] flex flex-row items-start justify-start pt-0 px-5 pb-[62px] box-border max-w-full">
        <h1 className="m-0 flex-1 relative text-inherit leading-[30px] font-bold font-inherit inline-block max-w-full mq450:text-10xl mq450:leading-[18px] mq900:text-19xl mq900:leading-[24px]">
          Explore Our Programs
        </h1>
      </div>
      <FrameComponent2 />
      <img
        className="w-[1915px] h-[1690px] absolute !m-[0] right-[-1px] bottom-[3203px] object-cover"
        alt=""
        src="/image@2x.png"
      />
      <FrameComponent1 />
      <div className="flex flex-row items-start justify-start pt-0 pb-[45px] pr-0 pl-[3px] box-border max-w-full text-left text-mediumslateblue mq450:max-w-[calc(100%_-_3px)]">
        <div className="flex flex-col items-center justify-start gap-[1px_0px] max-w-full">
          <h1 className="m-0 w-[334px] relative text-inherit font-bold font-inherit inline-block max-w-full box-border pl-5 pr-5 z-[1] mq450:text-10xl mq900:text-19xl">
            Simple Steps
          </h1>
          <h2 className="m-0 relative text-13xl font-normal font-inherit text-white z-[1] mq450:text-lgi mq900:text-7xl">
            Start Your Learning Journey
          </h2>
        </div>
      </div>
      <FrameComponent />
      <TextContainer />
      <div className="w-[890px] flex flex-row items-start justify-start py-0 pr-1.5 pl-0 box-border max-w-full text-right text-lgi mq1300:max-w-[calc(100%_-_6px)]">
        <div className="flex-1 flex flex-col items-start justify-start max-w-full">
          <div className="w-[598px] flex flex-row items-start justify-start py-0 px-[11px] box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-between gap-[20px] max-w-full mq450:flex-wrap">
              <div className="h-2.5 w-[117px] relative leading-[15px] flex items-center shrink-0">
                Backed by
              </div>
              <div className="h-[120px] w-[290px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border min-w-[290px] mq450:flex-1">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover mq450:self-stretch mq450:w-auto"
                  loading="eager"
                  alt=""
                  src="/logo-1-1@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch h-[22px] relative text-[22.3px] leading-[25.5px] text-center flex items-center justify-center shrink-0 z-[1] mq450:text-lg mq450:leading-[20px]">
            Mentor Academy for Design Entrepreneurship Innovation and Technology
          </div>
        </div>
      </div>
    </div>
  );
};

export default Version;
