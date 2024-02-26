import { useMemo } from "react";

const PythonCard = ({
  rectangle30,
  heading4LinkFlutterDevelo,
  propLeft,
  propRight,
}) => {
  const pythonCardStyle = useMemo(() => {
    return {
      left: propLeft,
      right: propRight,
    };
  }, [propLeft, propRight]);

  return (
    <div
      className="h-[306.56px] !m-[0] absolute top-[calc(50%_-_150px)] left-[-196.5px] rounded-[8.75px] bg-black shadow-[0px_16.4px_27.33px_rgba(255,_255,_255,_0.15),_0px_5.5px_10.93px_rgba(255,_255,_255,_0.05)] box-border overflow-hidden flex flex-col items-center justify-start pt-[18px] pb-6 pr-[13px] pl-3 gap-[9px_0px] z-[1] text-left text-mid-7 text-white font-sen border-[3.3px] border-solid border-mediumslateblue"
      style={pythonCardStyle}
    >
      <img
        className="w-[291.1px] flex-1 relative rounded-[1.56px] max-h-full object-cover"
        alt=""
        src={rectangle30}
      />
      <div className="w-[291px] flex flex-row items-start justify-start py-0 px-[11px] box-border">
        <b className="relative leading-[24.08px]">
          {heading4LinkFlutterDevelo}
        </b>
      </div>
      <div className="w-[291px] h-[50px] flex flex-row items-start justify-start py-0 pr-[5px] pl-[11px] box-border text-center text-3xs-5 font-font-awesome-6-free">
        <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pr-0.5 pl-0 gap-[0px_7px]">
          <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[5px] pl-0 gap-[7px_0px] text-3xs-2">
            <div className="flex flex-row items-center justify-start gap-[0px_9px]">
              <div className="h-[9px] flex flex-row items-center justify-center">
                <div className="relative"></div>
              </div>
              <div className="relative text-smi-8 capitalize font-sen text-gray-300 text-left">
                Lesson : 6
              </div>
            </div>
            <div className="relative text-mini-8 leading-[26.56px] font-sen text-left">
              Know More
            </div>
          </div>
          <div className="h-3 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
            <div className="h-2.5 flex flex-row items-center justify-center pt-px px-0 pb-0 box-border">
              <div className="h-2 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border">
                <div className="mb-[-1px] relative"></div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[7px] pl-0 text-left text-smi-8 text-gray-300 font-sen">
            <div className="relative capitalize">student : 198</div>
          </div>
          <div className="h-3 w-3 flex flex-col items-start justify-start pt-0.5 pb-0 pr-px pl-0 box-border">
            <div className="self-stretch h-2.5 flex flex-row items-center justify-center pt-px px-0 pb-0 box-border">
              <div className="h-2 flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border">
                <div className="mb-[-1px] relative"></div>
              </div>
            </div>
          </div>
          <div className="relative text-smi-8 capitalize font-sen text-gray-300 text-left">
            Beginner
          </div>
        </div>
      </div>
    </div>
  );
};

export default PythonCard;
