import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
function Sample({ data, tabletitle }) {
  console.log(data);
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            {tabletitle}
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto overflow-x-scroll">
            <thead>
              <tr>
                {[
                  "Block Number",
                  "Block Timestamp",
                  "Price",
                  "Src",
                  "Src Internal",
                ].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map(
                (
                  { blockNumber, blockTimestamp, price, src, srcInternal },
                  key
                ) => {
                  const className = `py-3 px-5 ${
                    key === data.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={blockNumber}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          {" "}
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {blockNumber}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {blockTimestamp}
                        </Typography>
                      </td>

                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {price}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {src}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography
                          as="a"
                          className="text-xs font-semibold text-blue-gray-600"
                        >
                          {srcInternal}
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
}
export default Sample;
