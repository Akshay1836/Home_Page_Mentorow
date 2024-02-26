import { useMemo } from "react";

const DataScienceDevelopmentCard = ({
  rectangle25,
  heading4LinkFlutterDevelo,
  propFlex,
}) => {
  const dataScienceDevelopmentCardStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div
      className="flex-1 rounded-[11.66px] bg-black shadow-[0px_21.9px_36.44px_rgba(255,_255,_255,_0.15),_0px_7.3px_14.58px_rgba(255,_255,_255,_0.05)] box-border overflow-hidden flex flex-col items-center justify-start pt-6 pb-[31px] pr-[17px] pl-[15px] gap-[12px_0px] max-w-full z-[2] text-left text-4xl-6 text-white font-sen border-[4.4px] border-solid border-mediumslateblue mq450:pt-5 mq450:pb-5 mq450:box-border"
      style={dataScienceDevelopmentCardStyle}
    >
      <img
        className="w-[388.2px] relative rounded-[1.56px] max-h-full object-cover max-w-full"
        alt=""
        src={rectangle25}
      />
      <div className="w-[389px] flex flex-row items-start justify-start py-0 px-3.5 box-border max-w-full">
        <b className="relative leading-[32.1px] mq450:text-lgi mq450:leading-[26px]">
          {heading4LinkFlutterDevelo}
        </b>
      </div>
      <div className="w-[389px] flex flex-row items-start justify-start py-0 pr-[7px] pl-3.5 box-border max-w-full text-center text-smi-6 font-font-awesome-6-free">
        <div className="flex-1 flex flex-row items-start justify-start gap-[0px_10px] max-w-full mq450:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[7px] pl-0 box-border gap-[10px_0px] min-w-[73px] text-smi-3">
            <div className="flex flex-row items-center justify-start py-0 pr-px pl-0 gap-[0px_10px]">
              <div className="h-3 flex flex-row items-center justify-center">
                <div className="relative"></div>
              </div>
              <div className="relative text-mid capitalize font-sen text-gray-300 text-left">
                Lesson : 6
              </div>
            </div>
            <div className="relative text-lgi-7 leading-[35.41px] font-sen text-left">
              Know More
            </div>
          </div>
          <div className="h-[17px] flex flex-col items-start justify-start pt-1 pb-0 pr-px pl-0 box-border">
            <div className="h-[13px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border">
              <div className="relative"></div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start py-0 pr-2.5 pl-0 box-border min-w-[75px] text-left text-mid text-gray-300 font-sen">
            <div className="relative capitalize">student : 198</div>
          </div>
          <div className="h-[17px] flex flex-col items-start justify-start pt-1 pb-0 pr-px pl-0 box-border">
            <div className="h-[13px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border">
              <div className="relative"></div>
            </div>
          </div>
          <div className="relative text-mid capitalize font-sen text-gray-300 text-left">
            Beginner
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataScienceDevelopmentCard;
