const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="mx-auto max-w-[832px] rounded-2xl bg-white text-wenge-brown sm:p-12">
      {children}
    </main>
  );
}
export default Container;
