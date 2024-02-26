import PythonCard from "./PythonCard";
import DataScienceDevelopmentCard from "./DataScienceDevelopmentCard";

const FrameComponent2 = () => {
  return (
    <section className="w-[1750px] flex flex-col items-center justify-start pt-0 px-5 pb-[84px] box-border gap-[67px_0px] max-w-full text-left text-xs-8 text-white font-sen mq450:gap-[67px_0px] mq900:gap-[67px_0px] mq900:pb-[55px] mq900:box-border">
      <div className="self-stretch flex flex-row items-start justify-between gap-[20px] max-w-full mq1650:flex-wrap mq1650:justify-center">
        <div className="w-[708px] flex flex-row items-center justify-start gap-[0px_76px] min-w-[708px] max-w-full mq450:gap-[0px_76px] mq900:flex-wrap mq900:gap-[0px_76px] mq900:min-w-full mq1650:flex-1">
          <div className="h-[204.37px] w-[214.87px] rounded-[5.83px] bg-black shadow-[0px_10.9px_18.22px_rgba(255,_255,_255,_0.15),_0px_3.6px_7.29px_rgba(255,_255,_255,_0.05)] box-border overflow-hidden shrink-0 flex flex-col items-center justify-start pt-3 pb-[15px] pr-[7px] pl-[9px] gap-[6px_0px] min-w-[214.9px] border-[2.2px] border-solid border-mediumslateblue mq900:flex-1">
            <img
              className="w-[194.1px] flex-1 relative rounded-[1.56px] max-h-full object-cover"
              alt=""
              src="/c-t-a-button@2x.png"
            />
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[7px]">
              <b className="relative leading-[16.05px]">Flutter Development</b>
            </div>
            <div className="flex flex-row items-start justify-start py-0 pr-[3px] pl-[7px] text-center text-6xs-1 font-font-awesome-6-free">
              <div className="flex flex-row items-center justify-start gap-[0px_7px]">
                <div className="flex flex-row items-start justify-start gap-[0px_10px]">
                  <div className="flex flex-row items-center justify-start py-0 pr-px pl-0 gap-[0px_5px]">
                    <div className="flex flex-row items-center justify-center">
                      <div className="relative"></div>
                    </div>
                    <div className="relative text-4xs-5 capitalize font-sen text-gray-300 text-left">
                      Lesson : 6
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[0px_6px] text-6xs-3">
                    <div className="h-1.5 flex flex-row items-center justify-center">
                      <div className="relative"></div>
                    </div>
                    <div className="relative text-4xs-5 capitalize font-sen text-gray-300 text-left">
                      student : 198
                    </div>
                  </div>
                </div>
                <div className="h-1.5 flex flex-row items-center justify-center text-6xs-3">
                  <div className="relative"></div>
                </div>
                <div className="relative text-4xs-5 capitalize font-sen text-gray-300 text-left">
                  Beginner
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[7px] text-3xs-8">
              <div className="relative leading-[17.7px]">Know More</div>
            </div>
          </div>
          <div className="h-[400px] flex-1 flex flex-row items-start justify-start relative min-w-[274px] max-w-full text-mid-7 mq450:h-auto">
            <PythonCard
              rectangle30="/rectangle-30@2x.png"
              heading4LinkFlutterDevelo="Python full stack"
            />
            <DataScienceDevelopmentCard
              rectangle25="/rectangle-25@2x.png"
              heading4LinkFlutterDevelo="Data Science Development"
            />
          </div>
        </div>
        <div className="w-[718px] flex flex-row items-center justify-start gap-[0px_86px] min-w-[718px] max-w-full text-10xl-5 mq450:gap-[0px_86px] mq900:flex-wrap mq900:gap-[0px_86px] mq900:min-w-full mq1650:flex-1">
          <div className="h-[400px] flex flex-row items-start justify-start relative min-w-[421px] max-w-full mq450:h-auto mq900:flex-1 mq900:min-w-full">
            <PythonCard
              rectangle30="/image@2x.png"
              heading4LinkFlutterDevelo="Professional accounting"
              propLeft="unset"
              propRight="-211.3px"
            />
            <DataScienceDevelopmentCard
              rectangle25="/vector@2x.png"
              heading4LinkFlutterDevelo="MERN Stack development"
              propFlex="unset"
            />
            <div className="w-[537.13px] !m-[0] absolute top-[calc(50%_-_250px)] left-[-407px] rounded-[14.58px] bg-black shadow-[0px_27.3px_45.55px_rgba(255,_255,_255,_0.15),_0px_9.1px_18.22px_rgba(255,_255,_255,_0.05)] box-border overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[31px] pb-[38px] pr-[21px] pl-[19px] gap-[15px_0px] z-[3] border-[5.5px] border-solid border-mediumslateblue">
              <img
                className="w-[485.3px] relative rounded-[1.56px] max-h-full object-cover max-w-full"
                alt=""
                src="/frame@2x.png"
              />
              <div className="flex flex-row items-start justify-start py-0 pr-5 pl-[19px]">
                <b className="relative leading-[40.13px] mq450:text-5xl mq450:leading-[32px]">
                  Digital Marketing
                </b>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-[19px] box-border max-w-full text-center text-base-8 font-font-awesome-6-free">
                <div className="flex-1 flex flex-row items-start justify-start gap-[0px_13px] max-w-full mq900:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[9px] pl-0 box-border gap-[13px_0px] min-w-[90px] text-base-4">
                    <div className="flex flex-row items-center justify-start gap-[0px_13px]">
                      <div className="h-4 flex flex-row items-center justify-center">
                        <div className="relative"></div>
                      </div>
                      <div className="relative text-2xl-3 capitalize font-sen text-gray-300 text-left mq450:text-mid">
                        Lesson : 6
                      </div>
                    </div>
                    <div className="relative text-5xl-6 leading-[44.26px] font-sen text-left mq450:text-xl mq450:leading-[35px]">
                      Know More
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[5px] pb-0 pr-px pl-0">
                    <div className="flex flex-row items-start justify-start pt-0 px-0 pb-0">
                      <div className="relative"></div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[13px] pl-0 box-border min-w-[94px] text-left text-2xl-3 text-gray-300 font-sen">
                    <div className="h-[26px] relative capitalize flex items-center mq450:text-mid">
                      student : 198
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                    <div className="flex flex-row items-start justify-start pt-0 px-0 pb-0">
                      <div className="relative"></div>
                    </div>
                  </div>
                  <div className="relative text-2xl-3 capitalize font-sen text-gray-300 text-left mq450:text-mid">
                    Beginner
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[204.37px] w-[214.87px] rounded-[5.83px] bg-black shadow-[0px_10.9px_18.22px_rgba(255,_255,_255,_0.15),_0px_3.6px_7.29px_rgba(255,_255,_255,_0.05)] box-border overflow-hidden shrink-0 flex flex-col items-center justify-start pt-3 px-2 pb-[15px] gap-[6px_0px] min-w-[214.9px] text-xs-8 border-[2.2px] border-solid border-mediumslateblue mq900:flex-1">
            <img
              className="w-[194.1px] flex-1 relative rounded-[1.56px] max-h-full object-cover"
              loading="eager"
              alt=""
              src="/rectangle-43@2x.png"
            />
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[7px]">
              <b className="relative leading-[16.05px]">UI UX Design</b>
            </div>
            <div className="flex flex-row items-start justify-start py-0 pr-1 pl-[7px] text-center text-6xs-3 font-font-awesome-6-free">
              <div className="flex flex-row items-start justify-start py-0 pr-0.5 pl-0 gap-[0px_9px]">
                <div className="flex flex-row items-center justify-start py-0 pr-px pl-0 gap-[0px_4px] text-6xs-1">
                  <div className="flex flex-row items-center justify-center">
                    <div className="relative"></div>
                  </div>
                  <div className="relative text-4xs-5 capitalize font-sen text-gray-300 text-left">
                    Lesson : 6
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[0px_5px]">
                  <div className="h-1.5 flex flex-row items-center justify-center">
                    <div className="relative"></div>
                  </div>
                  <div className="relative text-4xs-5 capitalize font-sen text-gray-300 text-left">
                    student : 198
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[0px_5px]">
                  <div className="h-1.5 flex flex-row items-center justify-center">
                    <div className="relative"></div>
                  </div>
                  <div className="relative text-4xs-5 capitalize font-sen text-gray-300 text-left">
                    Beginner
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[7px] text-3xs-8">
              <div className="relative leading-[17.7px]">Know More</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1530px] flex flex-col items-center justify-start gap-[33px_0px] max-w-full text-center text-xl mq900:gap-[33px_0px]">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
          <img
            className="h-16 w-16 relative object-contain min-h-[64px]"
            alt=""
            src="/to-right.svg"
          />
          <img
            className="h-16 w-16 relative min-h-[64px]"
            alt=""
            src="/to-right-1.svg"
          />
        </div>
        <div className="w-[1048px] relative leading-[24.48px] flex items-center justify-center max-w-full mq450:text-base mq450:leading-[20px]">{`Digital Marketing involves leveraging various online channels and platforms to promote products, services, or brands, reaching and engaging with targeted audiences. This multifaceted discipline encompasses a range of strategies, including search engine optimization (SEO), content marketing, social media marketing, email marketing, and pay-per-click (PPC) advertising. `}</div>
      </div>
    </section>
  );
};

export default FrameComponent2;
