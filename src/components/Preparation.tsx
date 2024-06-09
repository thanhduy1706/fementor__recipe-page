interface PreparationProps {
  data: {
    total: string;
    preparation: string;
    cooking: string;
  };
}

const Preparation = ({ data }: PreparationProps) => {
  return (
    <div className="p-4 mb-8 rounded-xl bg-rose-white sm:p-8">
      <h2 className="mb-4 text-xl font-600 text-dark-raspberry">
        Preparation time
      </h2>
      <ul className="ml-6 space-y-2 list-disc">
        <li>
          <strong>Total:</strong> {data.total}
        </li>
        <li >
          <strong>Preparation:</strong> {data.preparation}
        </li>
        <li>
          <strong>Cooking:</strong> {data.cooking}
        </li>
      </ul>
    </div>
  );
}
export default Preparation;
