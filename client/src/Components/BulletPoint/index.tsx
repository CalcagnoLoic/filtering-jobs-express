const Component = ({ data }: { data: string }) => {
  return (
    <ul>
      {data
        .split(".")
        .filter((datalist: string) => datalist.length > 0)
        .map((datalist: string, index: number) => (
          <li key={index} className="text-outerSpace ml-4 list-disc italic">
            {datalist}
          </li>
        ))}
    </ul>
  );
};

export default Component;
