import Card from "./Card";

const MoreComponent = ({
  LIST_ARRAY_1,
  LIST_ARRAY_2,
  queryComponent,
  queryBlock,
  page,
}) => {
  let targetsLength = 0;
  return (
    <div className="container mx-auto md:mb-20 mb-11">
      <div className="xl:text-[38px] whitespace-nowrap  text-[24px] font-semibold text-[#000000CC] mb-6">
        Recommended {page}
      </div>
      <div className="container grid lg:grid-cols-4 grid-cols-1 gap-7">
        {LIST_ARRAY_1?.map((data, index) => {
          targetsLength =
            data.slug !== queryComponent && data.type === queryBlock
              ? targetsLength + 1
              : targetsLength;
          return data.slug !== queryComponent && data.type === queryBlock ? (
            <div key={index}>
              <Card data={data} details={true} type={`${data.section}s`} />
            </div>
          ) : null;
        })}
        {targetsLength < 4 &&
          LIST_ARRAY_2?.slice(0, 4 - targetsLength).map((data, index) => {
            return (
              <div key={index}>
                <Card data={data} details={true} type={`${data.section}s`} />
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default MoreComponent;
