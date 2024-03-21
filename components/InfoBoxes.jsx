import InfoBox from './InfoBox';

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            heading="For Renters"
            backgroundColor="bg-gray-100"
            buttonInfo={{
              text: 'Browse properties',
              link: '/properties',
              backgroundColor: 'bg-black',
            }}
          >Find your dream rental property.</InfoBox>
          <InfoBox
            heading="For Property Oweners"
            backgroundColor="bg-blue-100"
            buttonInfo={{
              text: 'Add properties',
              link: '/properties/add',
              backgroundColor: 'bg-blue-500',
            }}
          >Add your dream rental property.</InfoBox>
        </div>
      </div>
    </section>
  );
};
export default InfoBoxes;
