import { MdOutlineOpenInNew } from 'react-icons/Md';

const Source = ({ all, theme }) => {
  if (!all || !Array.isArray(all) || all.length === 0) {
    return null;
  }

  const sourceData = all.find((item) => item.sourceUrls);

  if (
    !sourceData ||
    !sourceData.sourceUrls ||
    sourceData.sourceUrls.length === 0
  ) {
    return null;
  }

  const sourceUrl = sourceData.sourceUrls[0];

  return (
    <div
      className={` ${
        theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'
      }`}
    >
      <div className="container  w-full">
        <div className="source container relative flex">
          <p className=" last-line my-4 text-gray-400">Source</p>
          <p>
            <div className=" mt-4 ml-8">
              <a
                href={sourceUrl}
                className=" underline cursor-pointer"
                target="_blank"
                rel="noreferrer"
              >
                {sourceUrl}

                <MdOutlineOpenInNew className="inline ml-2" />
              </a>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Source;
