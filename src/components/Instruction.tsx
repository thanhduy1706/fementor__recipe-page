interface InstructionProps {
  instruction: {
    id: string;
    title: string;
    body: string;
  }[];
}

const Instruction = ({ instruction }: InstructionProps) => {  return (
    <div className="mt-8 border-b-[1px] border-light-grey pb-8">
      <h2 className="mb-6 text-3xl font-young-serif text-nutmeg">Instructions</h2>
      <ol className="pl-6 space-y-4 list-decimal">
        {instruction.map((ins) => (
          <li key={ins.id} className="pl-4 marker:font-bold text-wenge-brown marker:text-nutmeg">
            <strong>{ins.title}</strong>: {ins.body}
          </li>
        ))}
      </ol>
    </div>
  );
}
export default Instruction;
